import api from "./api";
import { AuthService } from "./auth.service";

let isRefreshing = false;
let queue: ((token: string | null) => void)[] = [];

const processQueue = (token: string | null) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

export const setupInterceptors = (
  getAccessToken: () => string | null,
  setAccessToken: (token: string | null) => void,
  logout: () => Promise<void>
) => {
  api.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            queue.push((token) => {
              if (!token) {
                reject(error);
              }
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try {
          const res = await AuthService.refresh();
          setAccessToken(res.access_token);
          processQueue(res.access_token);

          originalRequest.headers.Authorization = `Bearer ${res.access_token}`;
          return api(originalRequest);
        } catch (err) {
          processQueue(null);
          await logout();
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
};
