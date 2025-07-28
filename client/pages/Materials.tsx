import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Edit, 
  Trash2, 
  DollarSign,
  Package,
  Eye
} from "lucide-react";

interface Material {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  supplier: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image?: string;
}

const sampleMaterials: Material[] = [
  {
    id: "1",
    name: "Steel Pipes - 6 inch",
    category: "Pipes & Fittings",
    price: 125.50,
    quantity: 245,
    unit: "pcs",
    supplier: "Steel Corp Ltd",
    status: "In Stock"
  },
  {
    id: "2", 
    name: "Concrete Blocks",
    category: "Masonry",
    price: 8.75,
    quantity: 15,
    unit: "pcs",
    supplier: "BuildMat Supply",
    status: "Low Stock"
  },
  {
    id: "3",
    name: "Ceramic Tiles - White",
    category: "Tiles & Flooring",
    price: 45.00,
    quantity: 0,
    unit: "sq ft",
    supplier: "Tile Masters",
    status: "Out of Stock"
  },
  {
    id: "4",
    name: "PVC Pipes - 4 inch",
    category: "Pipes & Fittings", 
    price: 32.25,
    quantity: 180,
    unit: "pcs",
    supplier: "Plastic Works",
    status: "In Stock"
  }
];

export default function Materials() {
  const [materials, setMaterials] = useState<Material[]>(sampleMaterials);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);

  const categories = ["All", "Pipes & Fittings", "Masonry", "Tiles & Flooring", "Electrical", "Hardware"];
  
  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const updateMaterialPrice = (id: string, newPrice: number) => {
    setMaterials(prev => prev.map(material => 
      material.id === id ? { ...material, price: newPrice } : material
    ));
  };

  const updateMaterialQuantity = (id: string, newQuantity: number) => {
    const status = newQuantity === 0 ? "Out of Stock" : newQuantity < 50 ? "Low Stock" : "In Stock";
    setMaterials(prev => prev.map(material => 
      material.id === id ? { ...material, quantity: newQuantity, status } : material
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-green-100 text-green-800";
      case "Low Stock": return "bg-yellow-100 text-yellow-800";
      case "Out of Stock": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Material Catalog
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your material inventory, prices, and quantities
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Catalog
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search materials..."
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Materials Table */}
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Material
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Supplier
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredMaterials.map((material) => (
                    <tr key={material.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                              <Package className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{material.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {material.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                          <input
                            type="number"
                            value={material.price}
                            onChange={(e) => updateMaterialPrice(material.id, parseFloat(e.target.value))}
                            className="w-20 text-sm border-0 p-1 rounded focus:ring-2 focus:ring-indigo-600"
                            step="0.01"
                          />
                          <span className="text-sm text-gray-500 ml-1">/ {material.unit}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={material.quantity}
                          onChange={(e) => updateMaterialQuantity(material.id, parseInt(e.target.value))}
                          className="w-20 text-sm border-0 p-1 rounded focus:ring-2 focus:ring-indigo-600"
                        />
                        <span className="text-sm text-gray-500 ml-1">{material.unit}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(material.status)}`}>
                          {material.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {material.supplier}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button 
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => setEditingMaterial(material)}
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowUploadModal(false)} />
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Upload className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Upload Material Catalog
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Upload a CSV or Excel file containing your material catalog data.
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".csv,.xlsx,.xls" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">CSV, Excel up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() => setShowUploadModal(false)}
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setShowUploadModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
