import DashboardLayout from "../components/DashboardLayout";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Package } from "lucide-react";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track performance metrics, sales trends, and inventory analytics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Revenue Growth</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">+12.5%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Inventory Turnover</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">8.2x</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-purple-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Profit Margin</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">24.8%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-red-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Waste Reduction</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">-3.2%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Trends</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Chart will be rendered here</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Top Materials</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Steel Pipes - 6 inch</span>
                <span className="text-sm font-medium text-gray-900">$12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Concrete Blocks</span>
                <span className="text-sm font-medium text-gray-900">$8,320</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">PVC Pipes - 4 inch</span>
                <span className="text-sm font-medium text-gray-900">$6,890</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Ceramic Tiles</span>
                <span className="text-sm font-medium text-gray-900">$5,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
