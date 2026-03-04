import { FileSpreadsheet, Code, Database, RefreshCw, CheckCircle, Settings, LayoutDashboard, X } from "lucide-react";
import { DataIntegrationPage } from "./index";

interface MenuItem {
  id: DataIntegrationPage;
  icon: JSX.Element;
  iconBg: string;
  title: string;
  description: string;
}

interface DataIntegrationSidebarProps {
  activePage: DataIntegrationPage;
  onNavigate: (page: DataIntegrationPage) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems: MenuItem[] = [
  {
    id: "overview",
    icon: <LayoutDashboard className="w-5 h-5" />,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Tổng quan",
    description: "Xem tổng thể hệ thống",
  },
  {
    id: "excel-standardization",
    icon: <FileSpreadsheet className="w-5 h-5" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    title: "Chuẩn hóa Excel",
    description: "Import & mapping dữ liệu Excel",
  },
  {
    id: "api-standardization",
    icon: <Code className="w-5 h-5" />,
    iconBg: "bg-purple-100 text-purple-600",
    title: "Chuẩn hóa API",
    description: "Mapping & transform API response",
  },
  {
    id: "data-sources",
    icon: <Database className="w-5 h-5" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    title: "Nguồn Dữ liệu",
    description: "Quản lý kết nối",
  },
  {
    id: "transformation-rules",
    icon: <RefreshCw className="w-5 h-5" />,
    iconBg: "bg-orange-100 text-orange-600",
    title: "Quy tắc Chuyển đổi",
    description: "Thiết lập mapping",
  },
  {
    id: "data-quality",
    icon: <CheckCircle className="w-5 h-5" />,
    iconBg: "bg-teal-100 text-teal-600",
    title: "Chất lượng Dữ liệu",
    description: "Kiểm tra & validate",
  },
  {
    id: "api-management",
    icon: <Settings className="w-5 h-5" />,
    iconBg: "bg-pink-100 text-pink-600",
    title: "Quản lý API",
    description: "Cấu hình endpoints",
  },
];

export function DataIntegrationSidebar({ activePage, onNavigate, isOpen = true, onClose }: DataIntegrationSidebarProps) {
  const handleNavigate = (page: DataIntegrationPage) => {
    onNavigate(page);
    onClose?.(); // Close mobile drawer after navigation
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-14 lg:top-16 left-0 z-40 lg:z-0
        w-[280px] bg-white border-r border-gray-200 
        h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)] pt-4 lg:pt-6 px-4 overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button - Mobile only */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="mb-4 lg:mb-6 px-2 pt-2 lg:pt-0">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">Các chức năng</h2>
          <p className="text-xs text-gray-500">Chuẩn hóa & Tích hợp Dữ liệu</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 pb-20 lg:pb-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left p-3 rounded-lg transition-all hover:bg-gray-50 ${
                activePage === item.id
                  ? "bg-blue-50 border-2 border-blue-500 shadow-sm"
                  : "border-2 border-transparent hover:border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`${item.iconBg} rounded-lg p-2 flex-shrink-0`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm font-semibold mb-0.5 ${
                      activePage === item.id ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
