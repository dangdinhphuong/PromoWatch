import { Database, RefreshCw, CheckCircle, AlertTriangle, Activity, Settings } from "lucide-react";

export type DataIntegrationPage = 
  | "overview"
  | "excel-standardization"
  | "api-standardization"
  | "data-sources"
  | "transformation-rules"
  | "data-quality"
  | "integration-log"
  | "api-management";

interface DataIntegrationOverviewProps {
  onNavigate: (page: DataIntegrationPage) => void;
}

const navigationCards = [
  {
    id: "excel",
    title: "Chuẩn hóa Excel",
    description: "Import và mapping dữ liệu từ file Excel",
    icon: "📊",
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-100",
    page: "excel-standardization" as const,
  },
  {
    id: "api",
    title: "Chuẩn hóa API",
    description: "Mapping và transform API response",
    icon: "🔗",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-100",
    page: "api-standardization" as const,
  },
  {
    id: "sources",
    title: "Nguồn Dữ liệu",
    description: "Quản lý kết nối với các nguồn dữ liệu bên ngoài",
    icon: "🔌",
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-100",
    page: "data-sources" as const,
  },
  {
    id: "transformation",
    title: "Quy tắc Chuyển đổi",
    description: "Thiết lập quy tắc chuẩn hóa và mapping dữ liệu",
    icon: "⚙️",
    color: "bg-orange-50 text-orange-600",
    borderColor: "border-orange-100",
    page: "transformation-rules" as const,
  },
  {
    id: "quality",
    title: "Chất lượng Dữ liệu",
    description: "Kiểm tra và đánh giá chất lượng dữ liệu",
    icon: "✓",
    color: "bg-cyan-50 text-cyan-600",
    borderColor: "border-cyan-100",
    page: "data-quality" as const,
  },
  {
    id: "api-mgmt",
    title: "Quản lý API",
    description: "Cấu hình endpoints và API keys",
    icon: "🔑",
    color: "bg-pink-50 text-pink-600",
    borderColor: "border-pink-100",
    page: "api-management" as const,
  },
];

export function DataIntegrationOverview({ onNavigate }: DataIntegrationOverviewProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] p-3 sm:p-4 lg:p-6 pb-20 lg:pb-6">
      {/* Status Summary - Large panels */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4 lg:mb-6">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Panel 1 */}
            <div className="border-l-4 border-blue-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Tổng nguồn dữ liệu</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-[#1a1a1a] leading-none">24</p>
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-[13px] text-[#666666]">18 đang hoạt động</p>
            </div>

            {/* Panel 2 */}
            <div className="border-l-4 border-green-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Đồng bộ hôm nay</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-green-600 leading-none">1,240</p>
                <RefreshCw className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-[13px] text-[#666666]">records đã xử lý</p>
            </div>

            {/* Panel 3 */}
            <div className="border-l-4 border-purple-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Tỷ lệ chính xác</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-purple-600 leading-none">98.5%</p>
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Dữ liệu hợp lệ</p>
            </div>

            {/* Panel 4 */}
            <div className="border-l-4 border-orange-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Cảnh báo lỗi</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-orange-600 leading-none">3</p>
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Cần xử lý</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-4 lg:mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left - System Status */}
          <div className="bg-white border border-gray-200 rounded p-4 lg:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-1">Trạng thái hệ thống</h2>
                <p className="text-[13px] text-[#666666]">Tình trạng các nguồn và quy trình tích hợp</p>
              </div>
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            
            <div className="space-y-4">
              {/* Status Item 1 */}
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">PromoWatch API</p>
                    <p className="text-[12px] text-[#666666]">Đồng bộ cuối: 2 phút trước</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-green-600 bg-white px-3 py-1 rounded">Hoạt động</span>
              </div>

              {/* Status Item 2 */}
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">E-commerce Database</p>
                    <p className="text-[12px] text-[#666666]">Đồng bộ cuối: 5 phút trước</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-green-600 bg-white px-3 py-1 rounded">Hoạt động</span>
              </div>

              {/* Status Item 3 */}
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Price Monitor Feed</p>
                    <p className="text-[12px] text-[#666666]">Đồng bộ cuối: 2 giờ trước</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-orange-600 bg-white px-3 py-1 rounded">Chậm</span>
              </div>

              {/* Status Item 4 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Social Media Crawler</p>
                    <p className="text-[12px] text-[#666666]">Đồng bộ cuối: 1 ngày trước</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-gray-600 bg-white px-3 py-1 rounded">Tạm dừng</span>
              </div>
            </div>
          </div>

          {/* Right - Recent Activities */}
          <div className="bg-white border border-gray-200 rounded p-4 lg:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-1">Hoạt động gần đây</h2>
                <p className="text-[13px] text-[#666666]">Nhật ký tích hợp dữ liệu</p>
              </div>
              <Settings className="h-6 w-6 text-gray-400" />
            </div>

            <div className="space-y-3">
              {/* Activity 1 */}
              <div className="flex gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1a1a]">Đồng bộ dữ liệu khuyến mãi thành công</p>
                  <p className="text-[12px] text-[#666666] mt-0.5">234 records từ PromoWatch API</p>
                  <p className="text-[11px] text-[#999999] mt-1">2 phút trước</p>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="flex gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1a1a]">Cập nhật quy tắc chuẩn hóa giá</p>
                  <p className="text-[12px] text-[#666666] mt-0.5">Rule #PRE-2024-001</p>
                  <p className="text-[11px] text-[#999999] mt-1">15 phút trước</p>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="flex gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1a1a]">Phát hiện lỗi format dữ liệu</p>
                  <p className="text-[12px] text-[#666666] mt-0.5">18 records không đạt chuẩn</p>
                  <p className="text-[11px] text-[#999999] mt-1">1 giờ trước</p>
                </div>
              </div>

              {/* Activity 4 */}
              <div className="flex gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1a1a]">Tích hợp dữ liệu giá hoàn tất</p>
                  <p className="text-[12px] text-[#666666] mt-0.5">567 records từ Price Monitor</p>
                  <p className="text-[11px] text-[#999999] mt-1">3 giờ trước</p>
                </div>
              </div>

              {/* Activity 5 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1a1a]">Thêm nguồn dữ liệu mới</p>
                  <p className="text-[12px] text-[#666666] mt-0.5">Social Media Crawler</p>
                  <p className="text-[11px] text-[#999999] mt-1">1 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Message */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r mb-4 lg:mb-6">
        <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">💡 Thông tin</h4>
        <p className="text-[13px] text-[#666666] leading-relaxed">
          Module "Chuẩn hóa & Tích hợp Dữ liệu" giúp quản lý toàn bộ quy trình thu thập, chuẩn hóa và tích hợp dữ liệu từ nhiều nguồn khác nhau. 
          Hệ thống tự động kiểm tra chất lượng dữ liệu và cảnh báo khi phát hiện bất thường.
        </p>
      </div>

      {/* Navigation to Sub-modules */}
      <div>
        <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#1a1a1a] mb-4">Các chức năng</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
          {navigationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.page)}
              className="bg-white border border-gray-200 rounded p-4 lg:p-5 hover:border-blue-400 hover:shadow-sm transition-all text-left group"
            >
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">{card.icon}</div>
              <h3 className="text-[14px] lg:text-[15px] font-semibold text-[#1a1a1a] mb-1 lg:mb-2 group-hover:text-blue-600">{card.title}</h3>
              <p className="text-[11px] lg:text-[12px] text-[#666666] leading-relaxed">{card.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}