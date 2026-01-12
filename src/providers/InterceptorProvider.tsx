import { useAuth } from "@/context/AuthContext";
import { setupInterceptors } from "@/services/api.interceptor";
import { useEffect } from "react";

export const InterceptorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { accessToken, setAccessToken, logout } = useAuth();

  useEffect(() => {
    setupInterceptors(() => accessToken, setAccessToken, logout);
  }, [accessToken, setAccessToken, logout]);

  return <>{children}</>;
};
