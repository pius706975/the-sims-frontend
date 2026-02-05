import { Card } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dummy Dashboard SIMS
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} text-white flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="border-0 shadow-lg lg:col-span-1">
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Pintasan
            </h2>
            <div className="space-y-3">
              <a
                href="/karyawan"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1D7DBF] hover:bg-[#0061a3] text-secondary transition-all font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Lihat Daftar Karyawan
              </a>
            </div>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="border-0 shadow-lg lg:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Aktivitas Terbaru
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-border last:border-0"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">
                      {activity.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">
                      {activity.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;

const stats = [
  {
    title: "Total Karyawan",
    value: "48",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Guru Aktif",
    value: "32",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.747 12 26.747s10-4.5 10-10.247S17.5 6.253 12 6.253z"
        />
      </svg>
    ),
    color: "from-green-500 to-green-600",
  },
  {
    title: "Staff",
    value: "16",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Bagian",
    value: "7",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8-4m0 4v10l-8 4"
        />
      </svg>
    ),
    color: "from-orange-500 to-orange-600",
  },
];

const recentActivities = [
  {
    name: "John Doe",
    action: "Added to Mathematics Department",
    time: "2 hours ago",
  },
  {
    name: "Sarah Smith",
    action: "Promoted to Senior Teacher",
    time: "1 day ago",
  },
  {
    name: "Michael Johnson",
    action: "Leave approved for next week",
    time: "2 days ago",
  },
];
