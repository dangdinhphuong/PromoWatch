import { useState } from "react";
import { X, Download, Filter, Search, User, CheckCircle2, AlertCircle } from "lucide-react";

interface ExportHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockHistory = [
  {
    id: "1",
    version: "v2.1",
    inputFile: "product_data_2024_02_11.xlsx",
    timestamp: "2024-02-11 14:35:22",
    user: {
      name: "Nguyễn Văn A",
      avatar: "NA"
    },
    stats: {
      totalRows: 1543,
      validRows: 1521,
      errorRows: 22,
      successRate: 98.6
    },
    status: "success"
  },
  {
    id: "2",
    version: "v2.1",
    inputFile: "product_data_2024_02_10.xlsx",
    timestamp: "2024-02-10 09:15:44",
    user: {
      name: "Trần Thị B",
      avatar: "TB"
    },
    stats: {
      totalRows: 2341,
      validRows: 2298,
      errorRows: 43,
      successRate: 98.2
    },
    status: "success"
  },
  {
    id: "3",
    version: "v2.0",
    inputFile: "product_data_2024_02_09.xlsx",
    timestamp: "2024-02-09 16:22:11",
    user: {
      name: "Lê Văn C",
      avatar: "LC"
    },
    stats: {
      totalRows: 1876,
      validRows: 1723,
      errorRows: 153,
      successRate: 91.8
    },
    status: "warning"
  },
  {
    id: "4",
    version: "v1.3",
    inputFile: "product_data_2024_02_05.xlsx",
    timestamp: "2024-02-05 11:45:33",
    user: {
      name: "Phạm Thị D",
      avatar: "PD"
    },
    stats: {
      totalRows: 3124,
      validRows: 3089,
      errorRows: 35,
      successRate: 98.9
    },
    status: "success"
  }
];

export function ExportHistoryModal({ isOpen, onClose }: ExportHistoryModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVersion, setSelectedVersion] = useState<string>("all");

  if (!isOpen) return null;

  const filteredHistory = mockHistory.filter(item => {
    const matchesSearch = item.inputFile.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVersion = selectedVersion === "all" || item.version === selectedVersion;
    return matchesSearch && matchesVersion;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl transform transition-all">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Export History
                </h2>
                <p className="text-sm text-gray-600 mt-0.5">
                  View and download previous exports
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filters */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by filename or user..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <select
                  value={selectedVersion}
                  onChange={(e) => setSelectedVersion(e.target.value)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Versions</option>
                  <option value="v2.1">v2.1</option>
                  <option value="v2.0">v2.0</option>
                  <option value="v1.3">v1.3</option>
                </select>
              </div>
            </div>

            {/* History Timeline */}
            <div className="p-6 max-h-[600px] overflow-y-auto">
              <div className="space-y-4">
                {filteredHistory.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    {/* Timeline Line (except last item) */}
                    {index < filteredHistory.length - 1 && (
                      <div className="absolute left-[42px] top-[60px] bottom-[-16px] w-0.5 bg-gray-200" />
                    )}

                    <div className="flex gap-4">
                      {/* Status Icon */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          item.status === "success"
                            ? "bg-emerald-100 border-2 border-emerald-200"
                            : "bg-amber-100 border-2 border-amber-200"
                        }`}>
                          {item.status === "success" ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header Row */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {item.inputFile}
                              </h3>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                                {item.version}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">
                              {item.timestamp}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                              <Download className="w-4 h-4" />
                            </button>
                            {item.stats.errorRows > 0 && (
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                <Download className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-4 gap-3 mb-3">
                          <div className="bg-gray-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-gray-600 mb-0.5">Total</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {item.stats.totalRows.toLocaleString()}
                            </p>
                          </div>
                          <div className="bg-emerald-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-emerald-700 mb-0.5">Valid</p>
                            <p className="text-sm font-semibold text-emerald-900">
                              {item.stats.validRows.toLocaleString()}
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-red-700 mb-0.5">Errors</p>
                            <p className="text-sm font-semibold text-red-900">
                              {item.stats.errorRows.toLocaleString()}
                            </p>
                          </div>
                          <div className="bg-blue-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-blue-700 mb-0.5">Success</p>
                            <p className="text-sm font-semibold text-blue-900">
                              {item.stats.successRate}%
                            </p>
                          </div>
                        </div>

                        {/* User Info */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-blue-700">
                              {item.user.avatar}
                            </span>
                          </div>
                          <span className="text-xs text-gray-600">
                            Exported by {item.user.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredHistory.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-sm text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600">
                Showing {filteredHistory.length} of {mockHistory.length} exports
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}