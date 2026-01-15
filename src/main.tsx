import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./router";
import { AuthProvider } from "@/context/AuthContext";
import { InterceptorProvider } from "@/providers/InterceptorProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <InterceptorProvider>
          <RouterProvider router={Router} />
        </InterceptorProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
