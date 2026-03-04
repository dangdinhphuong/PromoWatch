import { TrendingUp, MapPin, AlertTriangle, TrendingDown, Bell } from "lucide-react";
import { ComposedChart, Area, Line, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { SystemHeader } from "@/app/components/SystemHeader";
import { PageHeader } from "@/app/components/page-header";
import { useState } from "react";

export type PriceManagementPage = 
  | "overview"
  | "price-database"
  | "price-fluctuation-dashboard"
  | "alert-threshold"
  | "price-forecast"
  | "policy-action-log";

interface PriceManagementOverviewProps {
  onNavigate: (page: PriceManagementPage) => void;
}

// Mock data for stock-style price trends with OHLC (Open, High, Low, Close) and volume
const priceTrendData = [
  { date: "01/01", open: 20500, high: 20800, low: 20400, close: 20700, volume: 980000, ma7: null, ma30: null },
  { date: "02/01", open: 20700, high: 21000, low: 20600, close: 20900, volume: 1050000, ma7: null, ma30: null },
  { date: "03/01", open: 20900, high: 21200, low: 20800, close: 21100, volume: 1120000, ma7: null, ma30: null },
  { date: "04/01", open: 21100, high: 21400, low: 21000, close: 21300, volume: 1180000, ma7: null, ma30: null },
  { date: "05/01", open: 21300, high: 21600, low: 21200, close: 21500, volume: 1240000, ma7: null, ma30: null },
  { date: "06/01", open: 21500, high: 21700, low: 21400, close: 21600, volume: 1100000, ma7: null, ma30: null },
  { date: "07/01", open: 21600, high: 21900, low: 21500, close: 21800, volume: 1280000, ma7: 21200, ma30: null },
  { date: "08/01", open: 21800, high: 22100, low: 21700, close: 22000, volume: 1350000, ma7: 21350, ma30: null },
  { date: "09/01", open: 22000, high: 22200, low: 21900, close: 22100, volume: 1190000, ma7: 21500, ma30: null },
  { date: "10/01", open: 22100, high: 22400, low: 22000, close: 22300, volume: 1420000, ma7: 21650, ma30: null },
  { date: "11/01", open: 22300, high: 22500, low: 22200, close: 22400, volume: 1310000, ma7: 21800, ma30: null },
  { date: "12/01", open: 22400, high: 22600, low: 22300, close: 22500, volume: 1260000, ma7: 21950, ma30: null },
  { date: "13/01", open: 22500, high: 22700, low: 22400, close: 22600, volume: 1380000, ma7: 22100, ma30: null },
  { date: "14/01", open: 22600, high: 22800, low: 22500, close: 22700, volume: 1450000, ma7: 22250, ma30: null },
  { date: "15/01", open: 22700, high: 22900, low: 22600, close: 22800, volume: 1330000, ma7: 22400, ma30: null },
  { date: "16/01", open: 22800, high: 23000, low: 22700, close: 22900, volume: 1280000, ma7: 22550, ma30: null },
  { date: "17/01", open: 22900, high: 23100, low: 22800, close: 23000, volume: 1410000, ma7: 22700, ma30: null },
  { date: "18/01", open: 23000, high: 23200, low: 22900, close: 23100, volume: 1490000, ma7: 22850, ma30: null },
  { date: "19/01", open: 23100, high: 23300, low: 23000, close: 23200, volume: 1370000, ma7: 23000, ma30: null },
  { date: "20/01", open: 23200, high: 23400, low: 23100, close: 23300, volume: 1320000, ma7: 23150, ma30: null },
  { date: "21/01", open: 23300, high: 23500, low: 23200, close: 23400, volume: 1440000, ma7: 23300, ma30: 21850 },
  { date: "22/01", open: 23400, high: 23600, low: 23300, close: 23500, volume: 1510000, ma7: 23450, ma30: 22000 },
  { date: "23/01", open: 23500, high: 23700, low: 23400, close: 23600, volume: 1390000, ma7: 23600, ma30: 22150 },
  { date: "24/01", open: 23600, high: 23800, low: 23500, close: 23700, volume: 1460000, ma7: 23750, ma30: 22300 },
  { date: "25/01", open: 23700, high: 23900, low: 23600, close: 23800, volume: 1530000, ma7: 23900, ma30: 22450 },
  { date: "26/01", open: 23800, high: 24000, low: 23700, close: 23900, volume: 1420000, ma7: 24050, ma30: 22600 },
  { date: "27/01", open: 23900, high: 24100, low: 23800, close: 24000, volume: 1480000, ma7: 24200, ma30: 22750 },
  { date: "28/01", open: 24000, high: 24300, low: 23900, close: 24200, volume: 1550000, ma7: 24350, ma30: 22900 },
  { date: "29/01", open: 24200, high: 24500, low: 24100, close: 24400, volume: 1610000, ma7: 24500, ma30: 23050 },
  { date: "30/01", open: 24400, high: 24700, low: 24300, close: 24600, volume: 1520000, ma7: 24650, ma30: 23200 },
  { date: "31/01", open: 24600, high: 24900, low: 24500, close: 24800, volume: 1590000, ma7: 24800, ma30: 23350 },
  { date: "01/02", open: 24800, high: 25100, low: 24700, close: 25000, volume: 1660000, ma7: 24950, ma30: 23500 },
  { date: "02/02", open: 25000, high: 25300, low: 24900, close: 25200, volume: 1720000, ma7: 25100, ma30: 23650 },
  { date: "03/02", open: 25200, high: 25500, low: 25100, close: 25300, volume: 1780000, ma7: 25250, ma30: 23800 },
];

// Custom tooltip for stock-style display
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
        <p className="font-semibold text-gray-900 mb-2">{data.date}</p>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Mở cửa:</span>
            <span className="font-medium text-gray-900">{data.open?.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Cao nhất:</span>
            <span className="font-medium text-green-600">{data.high?.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Thấp nhất:</span>
            <span className="font-medium text-red-600">{data.low?.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Đóng cửa:</span>
            <span className="font-bold text-blue-600">{data.close?.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between gap-4 pt-1 border-t border-gray-200">
            <span className="text-gray-600">Khối lượng:</span>
            <span className="font-medium text-gray-900">{(data.volume / 1000).toFixed(0)}K</span>
          </div>
          {data.ma7 && (
            <div className="flex justify-between gap-4">
              <span className="text-gray-600">MA(7):</span>
              <span className="font-medium text-purple-600">{data.ma7?.toLocaleString()}đ</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

const navigationCards = [
  {
    id: "database",
    title: "CSDL Giá",
    description: "Dữ liệu giá từ địa phương, doanh nghiệp và thị trường",
    icon: "📊",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-100",
    page: "price-database" as const,
  },
  {
    id: "dashboard",
    title: "Dashboard Biến động",
    description: "Phân tích trực quan biến động giá theo khu vực",
    icon: "📈",
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-100",
    page: "price-fluctuation-dashboard" as const,
  },
  {
    id: "alerts",
    title: "Cảnh báo Ngưỡng",
    description: "Phát hiện sớm biến động bất thường",
    icon: "🚨",
    color: "bg-orange-50 text-orange-600",
    borderColor: "border-orange-100",
    page: "alert-threshold" as const,
  },
  {
    id: "forecast",
    title: "Dự báo Giá",
    description: "Dự báo xu hướng giá ngắn hạn",
    icon: "🔮",
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-100",
    page: "price-forecast" as const,
  },
  {
    id: "policy",
    title: "Nhật ký Quyết sách",
    description: "Theo dõi và đánh giá tác động chính sách",
    icon: "📋",
    color: "bg-cyan-50 text-cyan-600",
    borderColor: "border-cyan-100",
    page: "policy-action-log" as const,
  },
];

// Mock data for regions monitoring
const regionsData = [
  {
    id: 1,
    province: "TP. Hồ Chí Minh",
    region: "Miền Nam",
    currentPrice: 26800,
    product: "Gạo thường",
    change: 9.2,
    status: "high",
    statusText: "Cảnh báo cao",
    barColor: "bg-red-600"
  },
  {
    id: 2,
    province: "Cần Thơ",
    region: "Đồng bằng sông Cửu Long",
    currentPrice: 25900,
    product: "Gạo thường",
    change: 6.8,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 3,
    province: "An Giang",
    region: "Đồng bằng sông Cửu Long",
    currentPrice: 25400,
    product: "Gạo thường",
    change: 5.5,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 4,
    province: "Hà Nội",
    region: "Miền Bắc",
    currentPrice: 27200,
    product: "Gạo thường",
    change: 8.1,
    status: "high",
    statusText: "Cảnh báo cao",
    barColor: "bg-red-600"
  },
  {
    id: 5,
    province: "Đà Nẵng",
    region: "Miền Trung",
    currentPrice: 26100,
    product: "Gạo thường",
    change: 7.3,
    status: "high",
    statusText: "Cảnh báo cao",
    barColor: "bg-red-600"
  },
  {
    id: 6,
    province: "Hải Phòng",
    region: "Miền Bắc",
    currentPrice: 25800,
    product: "Gạo thường",
    change: 6.2,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 7,
    province: "Long An",
    region: "Đồng bằng sông Cửu Long",
    currentPrice: 25600,
    product: "Gạo thường",
    change: 5.9,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 8,
    province: "Tiền Giang",
    region: "Đồng bằng sông Cửu Long",
    currentPrice: 25300,
    product: "Gạo thường",
    change: 5.4,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 9,
    province: "Bình Dương",
    region: "Miền Nam",
    currentPrice: 26500,
    product: "Gạo thường",
    change: 8.7,
    status: "high",
    statusText: "Cảnh báo cao",
    barColor: "bg-red-600"
  },
  {
    id: 10,
    province: "Đồng Nai",
    region: "Miền Nam",
    currentPrice: 26300,
    product: "Gạo thường",
    change: 7.8,
    status: "high",
    statusText: "Cảnh báo cao",
    barColor: "bg-red-600"
  },
  {
    id: 11,
    province: "Bà Rịa - Vũng Tàu",
    region: "Miền Nam",
    currentPrice: 25900,
    product: "Gạo thường",
    change: 6.5,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  },
  {
    id: 12,
    province: "Kiên Giang",
    region: "Đồng bằng sông Cửu Long",
    currentPrice: 25200,
    product: "Gạo thường",
    change: 5.2,
    status: "medium",
    statusText: "Theo dõi",
    barColor: "bg-orange-600"
  }
];

export function PriceManagementOverview({ onNavigate }: PriceManagementOverviewProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] p-3 sm:p-4 lg:p-6 pb-20 lg:pb-6 relative">
      {/* Status Summary - Large panels */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4 lg:mb-6">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Panel 1 */}
            <div className="border-l-4 border-blue-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Giá trung bình toàn quốc</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-[#1a1a1a] leading-none">25,300₫</p>
                <span className="text-[15px] text-[#666666]">/kg</span>
              </div>
              <p className="text-[13px] text-[#666666]">RCHD/Hà Nội</p>
            </div>

            {/* Panel 2 */}
            <div className="border-l-4 border-green-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Biến động 7 ngày</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-green-600 leading-none">+7.6%</p>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-[13px] text-[#666666]">↑ 1,800₫ so với tuần trước</p>
            </div>

            {/* Panel 3 */}
            <div className="border-l-4 border-orange-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Khu vực biến động</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-orange-600 leading-none">12</p>
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Tỉnh/thành phố</p>
            </div>

            {/* Panel 4 */}
            <div className="border-l-4 border-red-600 pl-5">
              <p className="text-[13px] text-[#666666] mb-2 font-medium uppercase tracking-wide">Cảnh báo hiệu lực</p>
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[36px] font-semibold text-red-600 leading-none">5</p>
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <p className="text-[13px] text-[#666666]">Tăng trên 5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 8/4 Grid */}
      <div className="mb-4 lg:mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left - Primary Chart (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded p-4 lg:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-1">Xu hướng giá toàn quốc</h2>
                <p className="text-[13px] text-[#666666]">Gạo thường - 34 ngày qua</p>
              </div>
              <div className="flex items-center gap-6 text-[12px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-blue-600"></div>
                  <span className="text-[#666666]">MA7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-purple-600" style={{ borderTop: "2px dashed" }}></div>
                  <span className="text-[#666666]">MA30</span>
                </div>
              </div>
            </div>
            
            {/* Price Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={priceTrendData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 11, fill: "#999" }}
                  stroke="#e5e5e5"
                  interval="preserveStartEnd"
                  minTickGap={30}
                />
                <YAxis 
                  domain={[20000, 26000]}
                  tick={{ fontSize: 11, fill: "#999" }}
                  stroke="#e5e5e5"
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                  width={50}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="close" 
                  fill="url(#colorPrice)" 
                  stroke="#2563eb" 
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="ma7" 
                  stroke="#9333ea" 
                  strokeWidth={1.5} 
                  dot={false}
                  strokeDasharray="5 5"
                  connectNulls
                />
                <Line 
                  type="monotone" 
                  dataKey="ma30" 
                  stroke="#f97316" 
                  strokeWidth={1.5} 
                  dot={false}
                  strokeDasharray="3 3"
                  connectNulls
                />
              </ComposedChart>
            </ResponsiveContainer>
            
            {/* Volume Chart */}
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart data={priceTrendData} margin={{ top: 5, right: 10, bottom: 0, left: 10 }}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" hide />
                <YAxis hide domain={[800000, 2000000]} />
                <Tooltip 
                  content={({ active, payload }: any) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-300 rounded px-2 py-1 text-xs shadow-lg">
                          <span className="text-gray-600">Khối lượng: </span>
                          <span className="font-semibold">{(payload[0].value / 1000).toFixed(0)}K</span>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  fill="url(#colorVolume)" 
                  stroke="#64748b"
                  strokeWidth={1}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Right - Situation Awareness (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Map/Heatmap */}
            <div className="bg-white border border-gray-200 rounded p-6">
              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-4">Bản đồ nhiệt biến động giá</h3>
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlNWU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-[13px] font-medium text-gray-600">Bản đồ Việt Nam</p>
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-600">Ổn định</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-600">Tăng nhẹ</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-gray-600">Tăng cao</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight Text */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r">
              <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">Nhận định tự động</h4>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Giá gạo tăng 7.6% trong 7 ngày qua, tập trung tại 12 tỉnh/thành. 
                Miền Nam ghi nhận mức tăng cao nhất (+9.2%). 
                Cần theo dõi sát diễn biến tại TP. HCM và Đồng bằng sông Cửu Long.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action-oriented Section: Khu vực cần theo dõi */}
      <div className="mb-4 lg:mb-6">
        <div className="bg-white border border-gray-200 rounded overflow-hidden">
          <div className="px-4 sm:px-6 py-4 lg:py-5 border-b border-gray-200">
            <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#1a1a1a]">Khu vực cần theo dõi</h2>
            <p className="text-[13px] text-[#666666] mt-1">Tỉnh/thành phố có biến động giá vượt ngưỡng cảnh báo</p>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[5%]"></th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[25%]">Tỉnh/Thành phố</th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[20%]">Giá hiện tại</th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[15%]">Biến động</th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[20%]">Trạng thái</th>
                  <th className="px-6 py-3 text-right text-[12px] font-semibold text-[#666666] uppercase tracking-wide w-[15%]">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {regionsData.map((region) => (
                  <tr key={region.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className={`w-1 h-12 ${region.barColor} rounded-full`}></div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[15px] font-semibold text-[#1a1a1a]">{region.province}</p>
                      <p className="text-[13px] text-[#999999] mt-0.5">{region.region}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[16px] font-semibold text-[#1a1a1a]">{region.currentPrice.toLocaleString()}₫</p>
                      <p className="text-[12px] text-[#666666] mt-0.5">{region.product}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`text-[16px] font-semibold ${region.status === "high" ? "text-red-600" : "text-orange-600"}`}>+{region.change}%</p>
                      <p className="text-[12px] text-[#666666] mt-0.5">So với tuần trước</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1.5 text-[13px] font-${region.status === "high" ? "semibold" : "medium"} ${region.status === "high" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"} rounded`}>{region.statusText}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-[13px] text-blue-600 hover:text-blue-700">
                        Xem chi tiết →
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-100">
            {regionsData.map((region) => (
              <div key={region.id} className="px-4 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`w-1 h-16 ${region.barColor} rounded-full flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <p className="text-[14px] font-semibold text-[#1a1a1a]">{region.province}</p>
                      <p className="text-[12px] text-[#999999]">{region.region} • {region.product}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[11px] text-[#999999] mb-0.5">Giá hiện tại</p>
                        <p className="text-[15px] font-semibold text-[#1a1a1a]">{region.currentPrice.toLocaleString()}₫</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-[#999999] mb-0.5">Biến động</p>
                        <p className={`text-[15px] font-semibold ${region.status === "high" ? "text-red-600" : "text-orange-600"}`}>+{region.change}%</p>
                      </div>
                    </div>
                    <div>
                      <span className={`inline-flex px-2 py-1 text-[11px] font-${region.status === "high" ? "semibold" : "medium"} ${region.status === "high" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"} rounded`}>{region.statusText}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[13px] text-blue-600 hover:text-blue-700 w-full justify-center">
                      Xem chi tiết →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate("alert-threshold")}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 px-5 py-3 font-medium text-[14px] group z-50"
      >
        <Bell className="h-5 w-5 animate-pulse group-hover:animate-none" />
        <span>Tạo quy tắc cảnh báo</span>
      </button>
    </div>
  );
}