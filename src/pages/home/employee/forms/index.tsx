import { useEffect, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import EmployeePage from "./employee/Employee";
import EmploymentManagementPage from "./employmentManagement/EmploymentManagement";

const MainEmployeeForm = () => {
  const tabs = [
    {
      value: "karyawan",
      label: "Karyawan",
      content: <EmployeePage />,
    },
    {
      value: "manajemen kepegawaian",
      label: "Manajemen Kepegawaian",
      content: <EmploymentManagementPage />,
    },
  ];

  return (
    <div className="w-full p-6 bg-white">
      <TabsWrapper tabs={tabs} />
    </div>
  );
};

const TabsWrapper = ({
  tabs,
}: {
  tabs: { value: string; label: string; content: React.ReactNode }[];
}) => {
  const storageKey = "homeFormsActiveTab";
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTab = localStorage.getItem(storageKey);
    
    if (savedTab && tabs.some((tab) => tab.value === savedTab)) {
      setActiveTab(savedTab);
    } else {
      setActiveTab(tabs[0].value);
    }
  }, [tabs]);

  useEffect(() => {
    if (activeTab) {
      localStorage.setItem(storageKey, activeTab);
    }
  }, [activeTab]);

  if (!mounted || !activeTab) return null;

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="mb-6 flex gap-4 overflow-x-auto md:overflow-visible flex-nowrap whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-2 py-3 transition-colors border-b-2 snap-start ${
              activeTab === tab.value
                ? "border-blue-500 text-blue-500 rounded-lg"
                : "border-transparent hover:border-blue-400 text-black rounded"
            }`}
          >
            <h3 className="sm:text-xl text-base font-semibold">{tab.label}</h3>
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MainEmployeeForm;
