import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import BaseLayout from "@/layouts/BaseLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/login";
import RequireAuth from "@/components/RequireAuth";
import RequireGuest from "@/components/RequireGuest";

const Router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <RequireGuest>
            <LoginPage />
          </RequireGuest>
        ),
      },
    ],
  },
]);

export default Router;
