import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  const { isAuthenticated, accessToken } = useAuth();

  if (!isAuthenticated) {
    return <Outlet />; 
  }
  return (
    <SidebarProvider key={accessToken}>
      <AppSidebar />
      <SidebarInset className="min-w-0 overflow-x-auto">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default BaseLayout;
