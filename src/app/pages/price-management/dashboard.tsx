import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart, Area } from "recharts";
import { TrendingUp, TrendingDown, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const priceTrendData = [
  { date: "01/01", hanoi: 20500, hcm: 20800, danang: 20600, volumeHN: 750, volumeHCM: 1050, volumeDN: 380, ma7HN: null, ma7HCM: null },
  { date: "02/01", hanoi: 20700, hcm: 21000, danang: 20800, volumeHN: 820, volumeHCM: 1120, volumeDN: 420, ma7HN: null, ma7HCM: null },
  { date: "03/01", hanoi: 20900, hcm: 21200, danang: 21000, volumeHN: 880, volumeHCM: 1180, volumeDN: 450, ma7HN: null, ma7HCM: null },
  { date: "04/01", hanoi: 21100, hcm: 21400, danang: 21200, volumeHN: 920, volumeHCM: 1250, volumeDN: 480, ma7HN: null, ma7HCM: null },
  { date: "05/01", hanoi: 21300, hcm: 21600, danang: 21400, volumeHN: 850, volumeHCM: 1180, volumeDN: 420, ma7HN: null, ma7HCM: null },
  { date: "06/01", hanoi: 21500, hcm: 21800, danang: 21600, volumeHN: 900, volumeHCM: 1220, volumeDN: 460, ma7HN: null, ma7HCM: null },
  { date: "07/01", hanoi: 21700, hcm: 22000, danang: 21800, volumeHN: 960, volumeHCM: 1300, volumeDN: 490, ma7HN: 21100, ma7HCM: 21400 },
  { date: "08/01", hanoi: 21900, hcm: 22200, danang: 22000, volumeHN: 1020, volumeHCM: 1380, volumeDN: 520, ma7HN: 21250, ma7HCM: 21550 },
  { date: "09/01", hanoi: 22100, hcm: 22400, danang: 22200, volumeHN: 880, volumeHCM: 1200, volumeDN: 440, ma7HN: 21400, ma7HCM: 21700 },
  { date: "10/01", hanoi: 22300, hcm: 22600, danang: 22400, volumeHN: 940, volumeHCM: 1280, volumeDN: 480, ma7HN: 21550, ma7HCM: 21850 },
  { date: "11/01", hanoi: 22500, hcm: 22800, danang: 22600, volumeHN: 1000, volumeHCM: 1340, volumeDN: 510, ma7HN: 21700, ma7HCM: 22000 },
  { date: "12/01", hanoi: 22700, hcm: 23000, danang: 22800, volumeHN: 1060, volumeHCM: 1420, volumeDN: 540, ma7HN: 21850, ma7HCM: 22150 },
  { date: "13/01", hanoi: 22900, hcm: 23200, danang: 23000, volumeHN: 920, volumeHCM: 1260, volumeDN: 470, ma7HN: 22000, ma7HCM: 22300 },
  { date: "14/01", hanoi: 23100, hcm: 23400, danang: 23200, volumeHN: 980, volumeHCM: 1320, volumeDN: 500, ma7HN: 22150, ma7HCM: 22450 },
  { date: "15/01", hanoi: 23300, hcm: 23600, danang: 23400, volumeHN: 1040, volumeHCM: 1400, volumeDN: 530, ma7HN: 22300, ma7HCM: 22600 },
  { date: "16/01", hanoi: 23500, hcm: 23800, danang: 23600, volumeHN: 1100, volumeHCM: 1480, volumeDN: 560, ma7HN: 22450, ma7HCM: 22750 },
  { date: "17/01", hanoi: 23700, hcm: 24000, danang: 23800, volumeHN: 960, volumeHCM: 1300, volumeDN: 490, ma7HN: 22600, ma7HCM: 22900 },
  { date: "18/01", hanoi: 23900, hcm: 24200, danang: 24000, volumeHN: 1020, volumeHCM: 1380, volumeDN: 520, ma7HN: 22750, ma7HCM: 23050 },
  { date: "19/01", hanoi: 24100, hcm: 24400, danang: 24200, volumeHN: 1080, volumeHCM: 1460, volumeDN: 550, ma7HN: 22900, ma7HCM: 23200 },
  { date: "20/01", hanoi: 24300, hcm: 24600, danang: 24400, volumeHN: 1140, volumeHCM: 1540, volumeDN: 580, ma7HN: 23050, ma7HCM: 23350 },
  { date: "21/01", hanoi: 24500, hcm: 24800, danang: 24600, volumeHN: 1000, volumeHCM: 1360, volumeDN: 510, ma7HN: 23200, ma7HCM: 23500 },
  { date: "22/01", hanoi: 24700, hcm: 25000, danang: 24800, volumeHN: 1060, volumeHCM: 1440, volumeDN: 540, ma7HN: 23350, ma7HCM: 23650 },
  { date: "23/01", hanoi: 24900, hcm: 25200, danang: 25000, volumeHN: 1120, volumeHCM: 1520, volumeDN: 570, ma7HN: 23500, ma7HCM: 23800 },
  { date: "24/01", hanoi: 25100, hcm: 25400, danang: 25200, volumeHN: 1180, volumeHCM: 1600, volumeDN: 600, ma7HN: 23650, ma7HCM: 23950 },
  { date: "25/01", hanoi: 25300, hcm: 25600, danang: 25400, volumeHN: 1040, volumeHCM: 1420, volumeDN: 530, ma7HN: 23800, ma7HCM: 24100 },
  { date: "26/01", hanoi: 25500, hcm: 25800, danang: 25600, volumeHN: 1100, volumeHCM: 1500, volumeDN: 560, ma7HN: 23950, ma7HCM: 24250 },
  { date: "27/01", hanoi: 25700, hcm: 26000, danang: 25800, volumeHN: 1160, volumeHCM: 1580, volumeDN: 590, ma7HN: 24100, ma7HCM: 24400 },
  { date: "28/01", hanoi: 25900, hcm: 26200, danang: 26000, volumeHN: 1220, volumeHCM: 1660, volumeDN: 620, ma7HN: 24250, ma7HCM: 24550 },
  { date: "29/01", hanoi: 26100, hcm: 26400, danang: 26200, volumeHN: 1080, volumeHCM: 1480, volumeDN: 550, ma7HN: 24400, ma7HCM: 24700 },
  { date: "30/01", hanoi: 26300, hcm: 26600, danang: 26400, volumeHN: 1140, volumeHCM: 1560, volumeDN: 580, ma7HN: 24550, ma7HCM: 24850 },
];

const topIncreaseData = [
  { province: "TP. HCM", increase: 8.2 },
  { province: "Hà Nội", increase: 7.6 },
  { province: "Đà Nẵng", increase: 7.1 },
  { province: "Hải Phòng", increase: 6.8 },
  { province: "Cần Thơ", increase: 6.5 },
];

const provinceHeatmapData = [
  { province: "Hà Nội", level: "high", color: "bg-red-500", value: 7.6 },
  { province: "TP. HCM", level: "high", color: "bg-red-500", value: 8.2 },
  { province: "Đà Nẵng", level: "medium", color: "bg-orange-500", value: 7.1 },
  { province: "Hải Phòng", level: "medium", color: "bg-orange-500", value: 6.8 },
  { province: "Cần Thơ", level: "medium", color: "bg-orange-500", value: 6.5 },
  { province: "Bình Dương", level: "low", color: "bg-yellow-500", value: 4.2 },
  { province: "Đồng Nai", level: "low", color: "bg-yellow-500", value: 3.8 },
  { province: "Khánh Hòa", level: "stable", color: "bg-green-500", value: 2.1 },
];

// Stock-style custom tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
        <p className="font-semibold text-gray-900 mb-2">{data.date}</p>
        <div className="space-y-1 text-sm">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between gap-4">
              <span className="text-gray-600">{entry.name}:</span>
              <span className="font-semibold" style={{ color: entry.color }}>
                {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}đ
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function PriceDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard biến động giá</h1>
              <p className="text-gray-600">Phân tích trực quan biến động giá theo khu vực</p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="gasoline">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Mặt hàng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasoline">Xăng RON 95</SelectItem>
                  <SelectItem value="diesel">Dầu diesel</SelectItem>
                  <SelectItem value="lpg">Gas LPG</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="national">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Khu vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">Toàn quốc</SelectItem>
                  <SelectItem value="north">Miền Bắc</SelectItem>
                  <SelectItem value="central">Miền Trung</SelectItem>
                  <SelectItem value="south">Miền Nam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Price Trend by Region - Stock Style */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Xu hướng giá theo khu vực</h3>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600">Hà Nội</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  <span className="text-gray-600">TP. HCM</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                  <span className="text-gray-600">Đà Nẵng</span>
                </div>
                <div className="mx-2">|</div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-purple-600"></div>
                  <span className="text-gray-600">MA(7)</span>
                </div>
              </div>
            </div>
            
            {/* Main Price Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={priceTrendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <defs>
                  <linearGradient id="colorHN" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#155dfc" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#155dfc" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorHCM" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f54900" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#f54900" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDN" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#009689" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#009689" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 10 }} 
                  stroke="#666"
                  interval="preserveStartEnd"
                  minTickGap={25}
                />
                <YAxis 
                  domain={[20000, 27000]}
                  tick={{ fontSize: 11 }} 
                  stroke="#666"
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                  width={45}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="hanoi" fill="url(#colorHN)" stroke="none" />
                <Area type="monotone" dataKey="hcm" fill="url(#colorHCM)" stroke="none" />
                <Area type="monotone" dataKey="danang" fill="url(#colorDN)" stroke="none" />
                <Line 
                  type="monotone" 
                  dataKey="hanoi" 
                  stroke="#155dfc" 
                  strokeWidth={2.5} 
                  name="Hà Nội" 
                  dot={false}
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="hcm" 
                  stroke="#f54900" 
                  strokeWidth={2.5} 
                  name="TP. HCM" 
                  dot={false}
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="danang" 
                  stroke="#009689" 
                  strokeWidth={2.5} 
                  name="Đà Nẵng" 
                  dot={false}
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="ma7HN" 
                  stroke="#9333ea" 
                  strokeWidth={1.5} 
                  strokeDasharray="5 5" 
                  dot={false}
                  connectNulls
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="ma7HCM" 
                  stroke="#dc2626" 
                  strokeWidth={1.5} 
                  strokeDasharray="5 5" 
                  dot={false}
                  connectNulls
                  isAnimationActive={true}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Volume Indicator */}
            <ResponsiveContainer width="100%" height={70}>
              <BarChart data={priceTrendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 9 }} 
                  stroke="#666"
                  interval="preserveStartEnd"
                  minTickGap={25}
                />
                <YAxis hide domain={[0, 2000]} />
                <Tooltip 
                  content={({ active, payload }: any) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-300 rounded px-2 py-1 text-xs">
                          <p className="font-semibold mb-1">{payload[0].payload.date}</p>
                          <div className="space-y-0.5">
                            <div><span className="text-blue-600">HN:</span> {payload[0].payload.volumeHN}K</div>
                            <div><span className="text-orange-600">HCM:</span> {payload[0].payload.volumeHCM}K</div>
                            <div><span className="text-teal-600">DN:</span> {payload[0].payload.volumeDN}K</div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="volumeHN" fill="#155dfc" opacity={0.6} />
                <Bar dataKey="volumeHCM" fill="#f54900" opacity={0.6} />
                <Bar dataKey="volumeDN" fill="#009689" opacity={0.6} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 text-center mt-1">Khối lượng giao dịch (ngàn lít)</p>
          </div>

          {/* Top Provinces with Highest Increase */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top tỉnh/thành tăng giá cao nhất</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={topIncreaseData} layout="vertical">
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#f54900" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#ff8800" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" horizontal={false} />
                <XAxis type="number" unit="%" tick={{ fontSize: 11 }} stroke="#666" />
                <YAxis dataKey="province" type="category" width={100} tick={{ fontSize: 11 }} stroke="#666" />
                <Tooltip 
                  content={({ active, payload }: any) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-300 rounded px-3 py-2 shadow-lg">
                          <p className="font-semibold text-gray-900">{payload[0].payload.province}</p>
                          <p className="text-sm text-orange-600">Tăng: <span className="font-bold">{payload[0].value}%</span></p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="increase" fill="url(#barGradient)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Province Heatmap */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Bản đồ nhiệt theo tỉnh/thành</h3>
            <div className="space-y-3">
              {provinceHeatmapData.map((item) => (
                <div key={item.province} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{item.province}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${item.color}`}
                        style={{ width: `${Math.min(item.value * 10, 100)}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-bold w-14 text-right ${item.value > 5 ? "text-red-600" : item.value > 3 ? "text-orange-600" : "text-green-600"}`}>
                      {item.value > 0 ? "+" : ""}{item.value}%
                    </span>
                    {item.value > 0 ? (
                      <TrendingUp className="h-4 w-4 text-red-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Ổn định (&lt;3%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Theo dõi (3-5%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Nguy cơ (5-7%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Khẩn cấp (&gt;7%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <span className="text-xl">📊</span> Phân tích tự động
            </h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Giá xăng RON95 tại khu vực miền Nam tăng <strong>8.2%</strong> trong 7 ngày qua, 
              cao hơn mức trung bình toàn quốc (7.1%). TP. Hồ Chí Minh ghi nhận mức tăng cao nhất.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-lg p-6">
            <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
              <span className="text-xl">⚠️</span> Cảnh báo
            </h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              Có <strong>12 tỉnh/thành phố</strong> ghi nhận mức tăng giá vượt ngưỡng theo dõi. 
              Khuyến nghị tăng cường giám sát và chuẩn bị phương án bình ổn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}