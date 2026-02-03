import { LayoutDashboard, FolderOpen, Search, AlertTriangle, Video, FileText } from "lucide-react";

type PageType = "overview" | "categories" | "detection" | "risk-alert" | "livestream" | "violation-log";

interface MenuItem {
  id: PageType;
  icon: JSX.Element;
  iconBg: string;
  title: string;
  description: string;
}

interface EcommerceViolationSidebarProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

const menuItems: MenuItem[] = [
  {
    id: "overview",
    icon: <LayoutDashboard className="w-5 h-5" />,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Tổng quan",
    description: "Xem tổng thể hệ thống giám sát",
  },
  {
    id: "categories",
    icon: <FolderOpen className="w-5 h-5" />,
    iconBg: "bg-purple-100 text-purple-600",
    title: "Danh mục vi phạm",
    description: "Phân loại và quản lý các loại vi phạm",
  },
  {
    id: "detection",
    icon: <Search className="w-5 h-5" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    title: "Phát hiện tự động",
    description: "AI phát hiện vi phạm trên các nền tảng",
  },
  {
    id: "risk-alert",
    icon: <AlertTriangle className="w-5 h-5" />,
    iconBg: "bg-pink-100 text-pink-600",
    title: "Cảnh báo Rủi ro",
    description: "Cảnh báo sớm hành vi vi phạm nghiêm trọng",
  },
  {
    id: "livestream",
    icon: <Video className="w-5 h-5" />,
    iconBg: "bg-orange-100 text-orange-600",
    title: "Giám sát Livestream",
    description: "Theo dõi livestream bán hàng trên TMĐT",
  },
  {
    id: "violation-log",
    icon: <FileText className="w-5 h-5" />,
    iconBg: "bg-teal-100 text-teal-600",
    title: "Nhật ký Vi phạm",
    description: "Lịch sử và xử lý các trường hợp vi phạm",
  },
];

export function EcommerceViolationSidebar({ activePage, onNavigate }: EcommerceViolationSidebarProps) {
  return (
    <div className="w-[280px] bg-white border-r border-gray-200 h-[calc(100vh-64px)] pt-6 px-4 sticky top-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-6 px-2">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Các chức năng</h2>
        <p className="text-xs text-gray-500">Kiểm soát vi phạm TMĐT</p>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
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
  );
}