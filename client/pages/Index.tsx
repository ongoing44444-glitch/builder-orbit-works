import DashboardLayout from "../components/DashboardLayout";
import { Package, Users, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

const stats = [
  {
    name: "Total Materials",
    value: "1,234",
    icon: Package,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    name: "Active Clients", 
    value: "89",
    icon: Users,
    change: "+5%",
    changeType: "positive" as const,
  },
  {
    name: "Monthly Revenue",
    value: "$54,321",
    icon: DollarSign,
    change: "+8%",
    changeType: "positive" as const,
  },
  {
    name: "Low Stock Items",
    value: "23",
    icon: AlertTriangle,
    change: "-2%",
    changeType: "negative" as const,
  },
];

const recentActivity = [
  { id: 1, action: "Material added", item: "Steel Pipes - 6 inch", time: "2 hours ago" },
  { id: 2, action: "Price updated", item: "Concrete Blocks", time: "4 hours ago" },
  { id: 3, action: "New client added", item: "ABC Construction", time: "6 hours ago" },
  { id: 4, action: "Inventory updated", item: "Ceramic Tiles", time: "8 hours ago" },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor your material catalog, inventory, and client relationships
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                    <span className="sr-only">{stat.changeType === "positive" ? "Increased" : "Decreased"} by</span>
                    {stat.change}
                  </p>
                </dd>
              </div>
            );
          })}
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Activity</h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {recentActivity.map((activity, activityIdx) => (
                      <li key={activity.id}>
                        <div className="relative pb-8">
                          {activityIdx !== recentActivity.length - 1 ? (
                            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          ) : null}
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                <Package className="h-5 w-5 text-white" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm">
                                  <span className="font-medium text-gray-900">{activity.action}</span>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">{activity.time}</p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>{activity.item}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Quick Actions</h3>
              <div className="mt-5 grid grid-cols-1 gap-3">
                <button
                  type="button"
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:border-gray-400"
                >
                  <div className="flex-shrink-0">
                    <Package className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Add New Material</p>
                    <p className="truncate text-sm text-gray-500">Upload and catalog new materials</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:border-gray-400"
                >
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Add New Client</p>
                    <p className="truncate text-sm text-gray-500">Register a new client relationship</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:border-gray-400"
                >
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Check Low Stock</p>
                    <p className="truncate text-sm text-gray-500">Review items that need restocking</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
