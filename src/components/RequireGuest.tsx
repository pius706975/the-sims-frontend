import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { JSX } from "react";

const RequireGuest = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  // if (isLoading) return null;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireGuest;
