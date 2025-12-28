// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import BaseLayout from "@/layouts/BaseLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/login";

const Router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    element: <AuthLayout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
]);

export default Router;
