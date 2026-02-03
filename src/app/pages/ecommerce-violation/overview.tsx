import { Shield, AlertTriangle, CheckCircle2, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { ViolationPage } from "./index";
import { ModuleBreadcrumb } from "@/app/components/ModuleBreadcrumb";

interface ViolationOverviewProps {
  onNavigate: (page: ViolationPage) => void;
  onBack: () => void;
}

// Mock data for violation trends
const violationTrendData = [
  { date: "01/01", total: 45 },
  { date: "03/01", total: 52 },
  { date: "05/01", total: 48 },
  { date: "07/01", total: 61 },
  { date: "09/01", total: 58 },
  { date: "11/01", total: 67 },
  { date: "13/01", total: 72 },
  { date: "15/01", total: 69 },
  { date: "17/01", total: 78 },
  { date: "19/01", total: 85 },
  { date: "21/01", total: 82 },
  { date: "23/01", total: 91 },
  { date: "25/01", total: 88 },
  { date: "27/01", total: 96 },
  { date: "29/01", total: 103 },
  { date: "31/01", total: 98 },
  { date: "02/02", total: 107 },
  { date: "03/02", total: 112 },
];

const navigationCards = [
  {
    id: "categories",
    title: "Danh mục vi phạm",
    description: "Tiêu chuẩn hóa danh mục hành vi vi phạm TMĐT",
    icon: "📋",
    page: "categories" as const,
  },
  {
    id: "detection",
    title: "Phát hiện vi phạm",
    description: "Phát hiện gian hàng, tài khoản và nội dung vi phạm",
    icon: "🔍",
    page: "detection" as const,
  },
  {
    id: "risk-alert",
    title: "Cảnh báo rủi ro",
    description: "Đánh giá mức độ nghiêm trọng và ưu tiên xử lý",
    icon: "🚨",
    page: "risk-alert" as const,
  },
  {
    id: "livestream",
    title: "Giám sát Livestream",
    description: "Theo dõi nội dung thời gian thực",
    icon: "📹",
    page: "livestream" as const,
  },
  {
    id: "violation-log",
    title: "Nhật ký vi phạm",
    description: "Quản lý tập trung các vụ việc xử lý",
    icon: "📝",
    page: "violation-log" as const,
  },
];

export function ViolationOverview({ onNavigate, onBack }: ViolationOverviewProps) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Module Breadcrumb */}
      <ModuleBreadcrumb
        title="Kiểm soát hành vi vi phạm trên TMĐT / nền tảng số"
        onBack={onBack}
      />

      {/* Status Summary - Large panels */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 py-8">
          <div className="grid grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Tổng số gian hàng giám sát</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-[#1a1a1a] leading-none">8,542</p>
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Trên 5 nền tảng chính</p>
            </div>

            <div className="border-l-4 border-red-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Vi phạm phát hiện</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-red-600 leading-none">735</p>
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <p className="text-[13px] text-[#666666]">↑ 18% so với tuần trước</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Cảnh báo rủi ro đang mở</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-orange-600 leading-none">89</p>
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Đang theo dõi</p>
            </div>

            <div className="border-l-4 border-green-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Vụ việc đã xử lý</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-green-600 leading-none">412</p>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Tỷ lệ xử lý: 56%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 8/4 Grid */}
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left - Primary Chart (8 cols) */}
          <div className="col-span-8 bg-white border border-gray-200 rounded p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-1">Xu hướng vi phạm theo thời gian</h2>
                <p className="text-[13px] text-[#666666]">18 ngày qua - tất cả loại vi phạm</p>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={340}>
              <LineChart data={violationTrendData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                <defs>
                  <linearGradient id="colorViolation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 11, fill: "#999" }}
                  stroke="#e5e5e5"
                  interval="preserveStartEnd"
                  minTickGap={25}
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: "#999" }}
                  stroke="#e5e5e5"
                  width={40}
                />
                <Tooltip 
                  content={({ active, payload }: any) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                          <p className="font-semibold text-gray-900 mb-1">{payload[0].payload.date}</p>
                          <p className="text-sm text-red-600">
                            Vi phạm: <span className="font-bold">{payload[0].value}</span>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  stroke="#dc2626" 
                  strokeWidth={2.5}
                  fill="url(#colorViolation)"
                  dot={{ r: 3, fill: "#dc2626" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Right - Heatmap (4 cols) */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded p-6">
              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-4">Phân loại vi phạm</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Hàng giả, hàng nhái</p>
                    <span className="text-[14px] font-bold text-red-600">312</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-red-600 h-1.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Cạnh tranh không lành mạnh</p>
                    <span className="text-[14px] font-bold text-orange-600">189</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: "26%" }}></div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Quảng cáo sai sự thật</p>
                    <span className="text-[14px] font-bold text-yellow-600">156</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-yellow-600 h-1.5 rounded-full" style={{ width: "21%" }}></div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Lừa đảo & dữ liệu</p>
                    <span className="text-[14px] font-bold text-purple-600">78</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "11%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r">
              <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">Cảnh báo nổi bật</h4>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Phát hiện 15 gian hàng nghi vấn bán hàng giả trên Shopee, tập trung tại TP. HCM. 
                Đề xuất thanh tra khẩn cấp và phối hợp với nền tảng để xử lý.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Section: Cảnh báo đang hiệu lực */}
      <div className="max-w-[1600px] mx-auto px-8 pb-6">
        <div className="bg-white border border-gray-200 rounded">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-[18px] font-semibold text-[#1a1a1a]">Cảnh báo đang hiệu lực</h2>
            <p className="text-[13px] text-[#666666] mt-1">Các vi phạm nghiêm trọng cần xử lý ưu tiên</p>
          </div>
          <div className="divide-y divide-gray-100">
            {/* Row 1 */}
            <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors group">
              <div className="flex items-center gap-6">
                <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                <div className="flex-1 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-3">
                    <p className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-blue-600">FashionHub Official</p>
                    <p className="text-[12px] text-[#999999]">Shopee</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-[13px] text-[#666666] mb-0.5">Loại vi phạm</p>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Hàng giả, hàng nhái</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Mức độ rủi ro</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-red-100 text-red-700 rounded">Cao - 92/100</span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Trạng thái</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-yellow-100 text-yellow-700 rounded">Đang điều tra</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm" className="text-[13px] text-blue-600 hover:text-blue-700">
                      Xem chi tiết →
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors group">
              <div className="flex items-center gap-6">
                <div className="w-1 h-12 bg-orange-600 rounded-full"></div>
                <div className="flex-1 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-3">
                    <p className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-blue-600">BeautyStore88</p>
                    <p className="text-[12px] text-[#999999]">Lazada</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-[13px] text-[#666666] mb-0.5">Loại vi phạm</p>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Quảng cáo sai sự thật</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Mức độ rủi ro</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-orange-100 text-orange-700 rounded">TB - 78/100</span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Trạng thái</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-blue-100 text-blue-700 rounded">Đang theo dõi</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm" className="text-[13px] text-blue-600 hover:text-blue-700">
                      Xem chi tiết →
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors group">
              <div className="flex items-center gap-6">
                <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                <div className="flex-1 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-3">
                    <p className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-blue-600">SuperFood Market</p>
                    <p className="text-[12px] text-[#999999]">Facebook</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-[13px] text-[#666666] mb-0.5">Loại vi phạm</p>
                    <p className="text-[14px] font-semibold text-[#1a1a1a]">Hàng cấm lưu hành</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Mức độ rủi ro</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-red-100 text-red-700 rounded">Cao - 95/100</span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[13px] text-[#666666] mb-0.5">Trạng thái</p>
                    <span className="inline-flex px-3 py-1 text-[12px] font-medium bg-purple-100 text-purple-700 rounded">Đã chuyển công an</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm" className="text-[13px] text-blue-600 hover:text-blue-700">
                      Xem chi tiết →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Sub-modules */}
      <div className="max-w-[1600px] mx-auto px-8 pb-8">
        <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-4">Các chức năng</h2>
        <div className="grid grid-cols-5 gap-4">
          {navigationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.page)}
              className="bg-white border border-gray-200 rounded p-5 hover:border-blue-400 hover:shadow-sm transition-all text-left group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-2 group-hover:text-blue-600">{card.title}</h3>
              <p className="text-[12px] text-[#666666] leading-relaxed">{card.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}