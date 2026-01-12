import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./router";
import { AuthProvider } from "@/context/AuthContext";
import { InterceptorProvider } from "@/providers/InterceptorProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <InterceptorProvider>
        <RouterProvider router={Router} />
      </InterceptorProvider>
    </AuthProvider>
  </StrictMode>
);
