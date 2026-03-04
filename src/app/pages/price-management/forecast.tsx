import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

// Historical and forecasted data
const forecastData = [
  { date: "27/01", actual: 23500, forecast: null, lower: null, upper: null },
  { date: "28/01", actual: 23800, forecast: null, lower: null, upper: null },
  { date: "29/01", actual: 24200, forecast: null, lower: null, upper: null },
  { date: "30/01", actual: 24100, forecast: null, lower: null, upper: null },
  { date: "31/01", actual: 24500, forecast: null, lower: null, upper: null },
  { date: "01/02", actual: 24800, forecast: null, lower: null, upper: null },
  { date: "02/02", actual: 25100, forecast: null, lower: null, upper: null },
  { date: "03/02", actual: 25300, forecast: null, lower: null, upper: null },
  { date: "04/02", actual: null, forecast: 25600, lower: 25300, upper: 25900 },
  { date: "05/02", actual: null, forecast: 25900, lower: 25500, upper: 26300 },
  { date: "06/02", actual: null, forecast: 26200, lower: 25700, upper: 26700 },
  { date: "07/02", actual: null, forecast: 26400, lower: 25800, upper: 27000 },
  { date: "08/02", actual: null, forecast: 26600, lower: 25900, upper: 27300 },
  { date: "09/02", actual: null, forecast: 26800, lower: 26000, upper: 27600 },
  { date: "10/02", actual: null, forecast: 27000, lower: 26100, upper: 27900 },
];

const insights = [
  {
    type: "trend",
    icon: <TrendingUp className="h-5 w-5 text-orange-600" />,
    color: "orange",
    title: "Xu hướng tăng",
    description: "Xu hướng tăng giá có khả năng tiếp diễn trong 5-7 ngày tới với mức tăng trung bình 2-3% mỗi ngày.",
  },
  {
    type: "confidence",
    icon: <AlertCircle className="h-5 w-5 text-blue-600" />,
    color: "blue",
    title: "Độ tin cậy cao",
    description: "Mô hình dự báo có độ chính xác 87.5% dựa trên dữ liệu lịch sử 90 ngày gần nhất.",
  },
  {
    type: "recommendation",
    icon: <AlertCircle className="h-5 w-5 text-purple-600" />,
    color: "purple",
    title: "Khuyến nghị",
    description: "Cần chuẩn bị phương án bình ổn giá nếu giá vượt ngưỡng 27,000đ/lít vào cuối tuần.",
  },
];

export function PriceForecast() {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6 pb-20 lg:pb-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Dự báo xu hướng giá</h1>
              <p className="text-gray-600">Dự báo ngắn hạn dựa trên dữ liệu lịch sử và mô hình AI</p>
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
              <Select defaultValue="7days">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Chu kỳ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">7 ngày</SelectItem>
                  <SelectItem value="14days">14 ngày</SelectItem>
                  <SelectItem value="30days">30 ngày</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Forecast Visualization */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Biểu đồ dự báo</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span className="text-gray-600">Giá thực tế</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-600 rounded"></div>
                <span className="text-gray-600">Dự báo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-200 rounded"></div>
                <span className="text-gray-600">Khoảng tin cậy</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              {/* Confidence band */}
              <Area
                type="monotone"
                dataKey="upper"
                stroke="none"
                fill="#fed7aa"
                fillOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="lower"
                stroke="none"
                fill="#ffffff"
                fillOpacity={1}
              />
              {/* Actual price line */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#155dfc"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              {/* Forecast line */}
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#f54900"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Forecast Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Giá hiện tại</p>
            <p className="text-2xl font-bold text-gray-900">25,300đ</p>
            <p className="text-xs text-gray-500 mt-1">03/02/2026</p>
          </div>

          <div className="bg-white rounded-lg border border-orange-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Dự báo 7 ngày</p>
            <p className="text-2xl font-bold text-orange-600">27,000đ</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +6.7% (+1,700đ)
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Khoảng tin cậy</p>
            <p className="text-2xl font-bold text-gray-900">26.1K - 27.9K</p>
            <p className="text-xs text-gray-500 mt-1">95% confidence</p>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Độ chính xác</p>
            <p className="text-2xl font-bold text-blue-600">87.5%</p>
            <p className="text-xs text-gray-500 mt-1">MAPE score</p>
          </div>
        </div>

        {/* Insights */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Phân tích & Khuyến nghị</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border border-${insight.color}-200 p-6 shadow-sm`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-${insight.color}-100`}>
                    {insight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{insight.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Info */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <span className="text-xl">🤖</span> Thông tin mô hình
          </h3>
          <div className="text-sm text-blue-800 leading-relaxed space-y-2">
            <p>
              <strong>Mô hình:</strong> ARIMA + Machine Learning (Random Forest)
            </p>
            <p>
              <strong>Dữ liệu huấn luyện:</strong> 90 ngày gần nhất (04/11/2025 - 02/02/2026)
            </p>
            <p>
              <strong>Tần suất cập nhật:</strong> Hàng ngày vào 06:00 AM
            </p>
            <p>
              <strong>Biến số đầu vào:</strong> Giá lịch sử, giá dầu thế giới, tỷ giá USD/VND, mùa vụ, sự kiện đặc biệt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}