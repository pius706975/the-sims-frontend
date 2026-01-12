import api from "./api";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>("/auth/signin", payload);
    return data;
  },

  refresh: async (): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>(
      "/auth/create-new-access-token"
    );
    return data;
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/signout");
  },
};
