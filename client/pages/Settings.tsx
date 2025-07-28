import DashboardLayout from "../components/DashboardLayout";
import { User, Bell, Shield, Database, Globe, Palette } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings, preferences, and system configuration
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    defaultValue="MaterialManager Inc."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="admin@materialmanager.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC-6 (Central Time)</option>
                    <option>UTC-7 (Mountain Time)</option>
                    <option>UTC-8 (Pacific Time)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <Bell className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Low Stock Alerts</label>
                    <p className="text-sm text-gray-500">Get notified when materials fall below minimum stock</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">New Client Registration</label>
                    <p className="text-sm text-gray-500">Email notifications for new client registrations</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Daily Reports</label>
                    <p className="text-sm text-gray-500">Receive daily inventory and sales summaries</p>
                  </div>
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">System Settings</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Default Currency</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>CAD ($)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Auto-backup Frequency</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Automatic Inventory Sync</label>
                    <p className="text-sm text-gray-500">Automatically sync inventory data with external systems</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Change Password
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Session Timeout</label>
                    <p className="text-sm text-gray-500">Automatically log out after period of inactivity</p>
                  </div>
                  <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
