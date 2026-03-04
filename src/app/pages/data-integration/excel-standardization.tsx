import { useState } from "react";
import { Plus, History, Eye, Layers, Download, Search, Filter, FileSpreadsheet } from "lucide-react";
import { CreateVersionModal } from "./components/CreateVersionModal";
import { ExportExcelModal } from "./components/ExportExcelModal";
import { ExportHistoryModal } from "./components/ExportHistoryModal";

interface NormalizationConfig {
  id: string;
  name: string;
  dataType: string;
  activeVersion: string;
  versionsCount: number;
  lastRun: string;
  updatedBy: string;
  status: "active" | "draft" | "inactive";
}

const mockData: NormalizationConfig[] = [
  {
    id: "1",
    name: "Chuẩn hóa Giá Sản phẩm",
    dataType: "Dữ liệu Thương mại Điện tử",
    activeVersion: "v2.1",
    versionsCount: 5,
    lastRun: "2 giờ trước",
    updatedBy: "Nguyễn Văn A",
    status: "active"
  },
  {
    id: "2",
    name: "Làm sạch Dữ liệu Khuyến mãi",
    dataType: "Dữ liệu Marketing",
    activeVersion: "v1.3",
    versionsCount: 3,
    lastRun: "1 ngày trước",
    updatedBy: "Trần Thị B",
    status: "active"
  },
  {
    id: "3",
    name: "Chuẩn hóa Địa chỉ Khách hàng",
    dataType: "Dữ liệu Khách hàng",
    activeVersion: "v1.0",
    versionsCount: 1,
    lastRun: "Chưa chạy",
    updatedBy: "Lê Văn C",
    status: "draft"
  }
];

export function ExcelStandardization() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<NormalizationConfig | null>(null);

  const filteredData = mockData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.dataType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "draft":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "inactive":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Hoạt động";
      case "draft":
        return "Bản nháp";
      case "inactive":
        return "Không hoạt động";
      default:
        return status;
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Chuẩn hóa Dữ liệu Excel
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Chuyển đổi và xuất dữ liệu Excel có cấu trúc
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowHistoryModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
              >
                <History className="w-4 h-4" />
                <span className="hidden sm:inline">Lịch sử</span>
              </button>
              <button
                onClick={() => {
                  setSelectedConfig(null);
                  setShowCreateModal(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                Chuẩn hóa Mới
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm cấu hình chuẩn hóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all">
              <Filter className="w-4 h-4" />
              Bộ lọc
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {filteredData.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Chưa có cấu hình chuẩn hóa nào
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Bắt đầu bằng cách tạo cấu hình chuẩn hóa Excel đầu tiên của bạn
              </p>
              <button
                onClick={() => {
                  setSelectedConfig(null);
                  setShowCreateModal(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                Tạo Cấu hình
              </button>
            </div>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredData.map((config) => (
              <div
                key={config.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
              >
                {/* Card Header */}
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="w-5 h-5 text-blue-600" />
                    </div>

                    {/* Title & Status */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
                        {config.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {config.dataType}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${getStatusStyle(config.status)}`}>
                        {getStatusText(config.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body - Info Grid */}
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-gray-500 mb-0.5">Phiên bản</p>
                      <p className="font-semibold text-gray-900">{config.activeVersion}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-0.5">Số phiên bản</p>
                      <p className="font-semibold text-gray-900">{config.versionsCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-0.5">Lần chạy cuối</p>
                      <p className="font-semibold text-gray-900">{config.lastRun}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-0.5">Cập nhật bởi</p>
                      <p className="font-semibold text-gray-900 truncate">{config.updatedBy}</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer - Actions */}
                <div className="px-5 pb-5 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedConfig(config);
                      // Navigate to detail view
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Xem
                  </button>
                  <button
                    onClick={() => {
                      setSelectedConfig(config);
                      setShowCreateModal(true);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Phiên bản
                  </button>
                  <button
                    onClick={() => {
                      setSelectedConfig(config);
                      setShowExportModal(true);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Xuất
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateVersionModal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          setSelectedConfig(null);
        }}
        config={selectedConfig}
      />

      <ExportExcelModal
        isOpen={showExportModal}
        onClose={() => {
          setShowExportModal(false);
          setSelectedConfig(null);
        }}
        config={selectedConfig}
      />

      <ExportHistoryModal
        isOpen={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
      />
    </>
  );
}
