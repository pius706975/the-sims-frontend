import AppBreadcrumb from "@/components/AppBreadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useEffect } from "react";
import DashboardPage from "./Dashboard";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Sistem Informasi Manajemen Sekolah";
  }, []);

  return (
    <main>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <AppBreadcrumb
            items={[{ label: "Beranda" }, { label: "Dashboard" }]}
          />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-6 pt-0">
        <DashboardPage />
      </div>
    </main>
  );
};

export default Dashboard;
