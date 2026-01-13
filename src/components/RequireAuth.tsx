import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { JSX } from "react";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  // if (isLoading) {
  //   return <div>Checking session...</div>;
  // }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;
