import { Megaphone, Ticket, Bell, Clipboard, MapPin, BarChart3, ChevronRight, CheckCircle2, Database, TrendingUp, Clock } from "lucide-react";
import { toast } from "sonner";
import { Counter } from "@/app/components/counter";

interface FeatureCard {
  id: string;
  icon: JSX.Element;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  page?: "promotions" | "discount-codes" | "overview";
}

interface MappaStylePageProps {
  onNavigate: (page: "promotions" | "discount-codes" | "overview") => void;
}

const features: FeatureCard[] = [
  {
    id: "promotions",
    icon: <Megaphone className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Tin Khuyến Mãi",
    subtitle: "Trung tâm Khuyến mãi AI",
    description: "AI thu thập – phân loại – phát hiện xu hướng khuyến mãi bất thường",
    link: "#",
    page: "promotions"
  },
  {
    id: "vouchers",
    icon: <Ticket className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    title: "Mã Giảm Giá",
    subtitle: "Kho Voucher",
    description: "AI phân tích điều kiện áp dụng, phát hiện mã rủi ro / gian lận",
    link: "#",
    page: "discount-codes"
  },
  {
    id: "alerts",
    icon: <Bell className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    title: "Cảnh báo & Giám sát",
    subtitle: "Trung tâm Giám sát AI",
    description: "AI phát hiện giá bất thường, hành vi gian lận, cảnh báo sớm",
    link: "#"
  },
  {
    id: "planning",
    icon: <Clipboard className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    title: "Hệ thống Phân công & Theo dõi",
    subtitle: "Trung tâm Điều hành",
    description: "AI gợi ý phân công, ưu tiên vụ việc, theo dõi tiến độ xử lý",
    link: "#"
  },
  {
    id: "storage",
    icon: <MapPin className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    title: "Trung tâm Điều hành Không gian",
    subtitle: "Nền tảng Bản đồ",
    description: "Nền tảng bản đồ tổng hợp dữ liệu thị trường theo không gian và thời gian. Hỗ trợ giám sát đa lớp, phân tích điểm nóng, theo dõi địa bàn và truy cập nhanh thông tin chi tiết phục vụ điều hành.",
    link: "#"
  },
  {
    id: "reports",
    icon: <BarChart3 className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    title: "Báo cáo & Thống kê",
    subtitle: "Trung tâm Phân tích Dữ liệu",
    description: "AI phân tích xu hướng, dự báo rủi ro, hỗ trợ quyết định",
    link: "#"
  }
];

export function MappaStylePage({ onNavigate }: MappaStylePageProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Overview Section - Giới thiệu */}
      <section id="overview-section" className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Giải pháp toàn diện */}
            <div>
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Giải pháp toàn diện
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tại sao cần MAPPA?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">Phân tích xu hướng thị trường tự động</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">Cảnh báo sớm vi phạm bằng AI</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">Truy vết nguồn gốc đa nền tảng</p>
                </div>
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Khu địa bàn */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 text-center mb-1">
                    <Counter end={63} duration={2000} />/<Counter end={63} duration={2000} />
                  </div>
                  <div className="text-sm text-gray-500 text-center">Khu địa bàn</div>
                </div>

                {/* Cơ sở quản lý */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 text-center mb-1">
                    <Counter end={1.2} decimals={1} suffix="M+" duration={2000} />
                  </div>
                  <div className="text-sm text-gray-500 text-center">Cơ sở quản lý</div>
                </div>

                {/* Nguồn tin số ly thừng */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 text-center mb-1">
                    <Counter end={25} suffix="K+" duration={2000} />
                  </div>
                  <div className="text-sm text-gray-500 text-center">Nguồn tin số ly thừng</div>
                </div>

                {/* SLA xử lý */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 text-center mb-1">
                    <Counter end={48} suffix="h" duration={2000} />
                  </div>
                  <div className="text-sm text-gray-500 text-center">SLA xử lý</div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 italic">
                  Số liệu minh họa – sử dụng đúng số liệu đầu vào khai thác nội bộ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - Nền tảng & Lợi ích */}
      <section id="platform-section" className="bg-gray-50">
        <div className="bg-white border-b border-gray-200 pt-12">
          <div className="max-w-[1200px] mx-auto px-6 pb-12 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">
                Khả năng nền tảng
              </span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Chức năng & Ứng dụng</span>
            </div>

            {/* Badge */}
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Giám sát đa nền tảng
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chức năng & Ứng dụng
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hệ thống giám sát và phân tích khuyến mại trên các nền tảng thương mại điện tử trọng điểm, cho phép thu thập dữ liệu, phân tích hành vi và cảnh báo sớm các chương trình có dấu hiệu vi phạm, hỗ trợ công tác quản lý và điều hành tập trung.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-200 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Link */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (feature.page) {
                      onNavigate(feature.page);
                    } else {
                      toast.info("Hệ thống đang phát triển", {
                        description: "Tính năng này sẽ sớm được ra mắt trong phiên bản tiếp theo"
                      });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-3 duration-200"
                >
                  Xem chi tiết
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <span className="text-xl">ℹ️</span> Thông tin
            </h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Hệ thống được thiết kế đặc biệt cho cơ quan Quản lý Thị trường nhằm tối ưu hóa quy trình làm việc,
              nâng cao hiệu quả giám sát và quản lý dữ liệu một cách chuyên nghiệp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}