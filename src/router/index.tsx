import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/login";
import RequireAuth from "@/components/RequireAuth";
import RequireGuest from "@/components/RequireGuest";
import Dashboard from "@/pages/home/dashboard";
import Employee from "@/pages/home/employee";
import NotFound from "@/pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireGuest>
        <AuthLayout />
      </RequireGuest>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <BaseLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "karyawan",
        element: <Employee />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
