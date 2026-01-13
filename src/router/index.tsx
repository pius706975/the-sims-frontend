import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/login";
import RequireAuth from "@/components/RequireAuth";
import RequireGuest from "@/components/RequireGuest";
import Dashboard from "@/pages/home/dashboard";
import Employee from "@/pages/home/employee";

const Router = createBrowserRouter([
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
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/karyawan",
        element: (
          <RequireAuth>
            <Employee />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default Router;
