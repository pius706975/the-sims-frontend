import { useAuth } from "@/context/AuthContext";
import { setupInterceptors } from "@/services/api.interceptor";
import { useEffect } from "react";

export const InterceptorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getAccessToken, handleTokenUpdate, logout } = useAuth();

  useEffect(() => {
    setupInterceptors(
      getAccessToken,
      handleTokenUpdate,
      logout
    );
  }, []);

  return <>{children}</>;
};