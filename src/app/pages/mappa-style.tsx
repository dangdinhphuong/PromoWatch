import { Megaphone, Ticket, Database, ShieldAlert, TrendingUp, Users, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface FeatureCard {
  id: string;
  icon: JSX.Element;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  page?: "promotions" | "discount-codes" | "overview" | "price-management" | "ecommerce-violation" | "data-integration";
}

interface MappaStylePageProps {
  onNavigate: (page: "promotions" | "discount-codes" | "overview" | "price-management" | "ecommerce-violation" | "data-integration") => void;
}

const features: FeatureCard[] = [
  {
    id: "promotions",
    icon: <Megaphone className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Tin Khuyến Mãi",
    subtitle: "Trung tâm Khuyến mãi AI",
    description: "Thu thập – phân loại – phát hiện bất thường",
    link: "#",
    page: "promotions"
  },
  {
    id: "vouchers",
    icon: <Ticket className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    title: "Mã Giảm Giá",
    subtitle: "Kho Voucher",
    description: "Phân tích điều kiện – phát hiện mã rủi ro",
    link: "#",
    page: "discount-codes"
  },
  {
    id: "alerts",
    icon: <Database className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    title: "Chuẩn hóa & Tích hợp Dữ liệu",
    subtitle: "Trung tâm ETL & Geocoding",
    description: "Import Excel – ánh xạ tọa độ – chuẩn hóa format",
    link: "#",
    page: "data-integration"
  },
  {
    id: "planning",
    icon: <ShieldAlert className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    title: "Kiểm soát hành vi vi phạm trên TMĐT/nền tảng số",
    subtitle: "Trung tâm Điều hành Giám sát",
    description: "Phát hiện vi phạm – cảnh báo rủi ro – xử lý tập trung",
    link: "#",
    page: "ecommerce-violation"
  },
  {
    id: "storage",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    title: "Quản lý nhà nước về giá & theo dõi/bình ổn",
    subtitle: "Trong phạm vi Bộ Công Thương",
    description: "Giám sát biến động giá – phát hiện bất thường – bình ổn thị trường",
    link: "#",
    page: "price-management"
  },
  {
    id: "reports",
    icon: <Users className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    title: "Phối hợp liên ngành",
    subtitle: "Công an, Hải quan, Biên phòng, BCĐ 389",
    description: "Kết nối đa ngành – chia sẻ thông tin – điều phối tác chiến",
    link: "#"
  }
];

export function MappaStylePage({ onNavigate }: MappaStylePageProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Platform Section - Nền tảng & Lợi ích */}
      <section id="platform-section" className="bg-gray-50">
        <div className="bg-white border-b border-gray-200 pt-6 sm:pt-8 lg:pt-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-8 sm:pb-10 lg:pb-12 text-center">
            {/* Badge */}
            <div className="inline-block bg-blue-50 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Giám sát đa nền tảng
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Chức năng & Ứng dụng
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Giám sát đa nền tảng – Thu thập dữ liệu – Phát hiện vi phạm – Điều hành tập trung
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature) => {
              const handleClick = () => {
                if (feature.page) {
                  onNavigate(feature.page);
                } else {
                  toast.info("Hệ thống đang phát triển", {
                    description: "Tính năng này sẽ sớm được ra mắt trong phiên bản tiếp theo"
                  });
                }
              };

              const handleKeyDown = (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick();
                }
              };

              return (
                <div
                  key={feature.id}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  role="link"
                  tabIndex={0}
                  aria-label={`Xem chi tiết ${feature.title} - ${feature.subtitle}`}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-2 sm:mb-3">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">
                    {feature.description}
                  </p>

                  {/* Link - Keep as visual CTA only, card is clickable */}
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:gap-3">
                    Xem chi tiết
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Footer */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-8 sm:pb-10 lg:pb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 sm:p-5 lg:p-6">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="text-lg sm:text-xl">ℹ️</span> Thông tin
            </h3>
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
              Hệ thống được thiết kế đặc biệt cho cơ quan Quản lý Thị trường nhằm tối ưu hóa quy trình làm việc,
              nâng cao hiệu quả giám sát và quản lý dữ liệu một cách chuyên nghiệp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}