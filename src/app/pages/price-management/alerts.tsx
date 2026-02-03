import { useState } from "react";
import { AlertTriangle, Bell, Eye, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

interface Alert {
  id: string;
  level: "green" | "yellow" | "orange" | "red";
  commodity: string;
  region: string;
  triggerReason: string;
  status: "monitoring" | "resolved";
  createdAt: string;
  threshold: number;
  currentValue: number;
}

const mockAlerts: Alert[] = [
  {
    id: "A001",
    level: "red",
    commodity: "Xăng RON 95",
    region: "TP. Hồ Chí Minh",
    triggerReason: "Tăng giá vượt 8% trong 7 ngày",
    status: "monitoring",
    createdAt: "03/02/2026 10:30",
    threshold: 7,
    currentValue: 8.2,
  },
  {
    id: "A002",
    level: "red",
    commodity: "Xăng RON 95",
    region: "Hà Nội",
    triggerReason: "Tăng giá vượt 7% trong 7 ngày",
    status: "monitoring",
    createdAt: "03/02/2026 09:15",
    threshold: 7,
    currentValue: 7.6,
  },
  {
    id: "A003",
    level: "orange",
    commodity: "Dầu Diesel",
    region: "Đà Nẵng",
    triggerReason: "Tăng giá 6.5% trong 5 ngày",
    status: "monitoring",
    createdAt: "02/02/2026 16:45",
    threshold: 5,
    currentValue: 6.5,
  },
  {
    id: "A004",
    level: "yellow",
    commodity: "Gas LPG",
    region: "Hải Phòng",
    triggerReason: "Biến động giá bất thường",
    status: "monitoring",
    createdAt: "02/02/2026 14:20",
    threshold: 4,
    currentValue: 4.8,
  },
  {
    id: "A005",
    level: "green",
    commodity: "Xăng RON 92",
    region: "Cần Thơ",
    triggerReason: "Đã xử lý - Giá ổn định",
    status: "resolved",
    createdAt: "01/02/2026 11:00",
    threshold: 5,
    currentValue: 3.2,
  },
];

const priceChartData = [
  { date: "28/01", price: 23800, threshold: 25000 },
  { date: "29/01", price: 24200, threshold: 25000 },
  { date: "30/01", price: 24100, threshold: 25000 },
  { date: "31/01", price: 24500, threshold: 25000 },
  { date: "01/02", price: 24800, threshold: 25000 },
  { date: "02/02", price: 25100, threshold: 25000 },
  { date: "03/02", price: 25500, threshold: 25000 },
];

export function PriceAlerts() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "red":
        return "bg-red-100 text-red-700 border-red-300";
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "yellow":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "green":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "red":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "orange":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "yellow":
        return <Bell className="h-5 w-5 text-yellow-600" />;
      case "green":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return null;
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case "red":
        return "Khẩn cấp";
      case "orange":
        return "Cao";
      case "yellow":
        return "Trung bình";
      case "green":
        return "Đã xử lý";
      default:
        return level;
    }
  };

  const handleViewDetail = (alert: Alert) => {
    setSelectedAlert(alert);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Cảnh báo biến động giá</h1>
            <p className="text-gray-600">Phát hiện sớm và quản lý các biến động bất thường</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Bell className="h-4 w-4" />
            Tạo quy tắc cảnh báo
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-red-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Khẩn cấp</span>
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-red-600">2</p>
          </div>

          <div className="bg-white rounded-lg border border-orange-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Mức cao</span>
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-orange-600">1</p>
          </div>

          <div className="bg-white rounded-lg border border-yellow-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Trung bình</span>
              <Bell className="h-5 w-5 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">2</p>
          </div>

          <div className="bg-white rounded-lg border border-green-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Đã xử lý</span>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">1</p>
          </div>
        </div>

        {/* Alert List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Danh sách cảnh báo</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {mockAlerts.map((alert) => (
              <div key={alert.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg border ${getLevelColor(alert.level)}`}>
                      {getLevelIcon(alert.level)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                            alert.level
                          )}`}
                        >
                          {getLevelText(alert.level)}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            alert.status === "monitoring"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {alert.status === "monitoring" ? "Đang theo dõi" : "Đã xử lý"}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {alert.commodity} - {alert.region}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{alert.triggerReason}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.createdAt}
                        </div>
                        <div>
                          Ngưỡng: <span className="font-semibold">{alert.threshold}%</span>
                        </div>
                        <div>
                          Hiện tại: <span className="font-semibold text-red-600">{alert.currentValue}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetail(alert)}
                    className="gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Chi tiết
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết cảnh báo</DialogTitle>
            <DialogDescription>Thông tin chi tiết và hành động xử lý</DialogDescription>
          </DialogHeader>
          {selectedAlert && (
            <div className="space-y-6">
              {/* Alert Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mặt hàng</label>
                  <p className="text-gray-900 font-semibold">{selectedAlert.commodity}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Khu vực</label>
                  <p className="text-gray-900 font-semibold">{selectedAlert.region}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Mức độ</label>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                      selectedAlert.level
                    )}`}
                  >
                    {getLevelText(selectedAlert.level)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedAlert.status === "monitoring"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {selectedAlert.status === "monitoring" ? "Đang theo dõi" : "Đã xử lý"}
                  </span>
                </div>
              </div>

              {/* Price Chart */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Biểu đồ giá và ngưỡng cảnh báo
                </label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={priceChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <ReferenceLine y={25000} stroke="red" strokeDasharray="3 3" label="Ngưỡng" />
                      <Line type="monotone" dataKey="price" stroke="#155dfc" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Trigger Explanation */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Nguyên nhân kích hoạt</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-yellow-50">
                  <p className="text-sm text-gray-900">{selectedAlert.triggerReason}</p>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Ngưỡng cảnh báo</p>
                      <p className="text-lg font-bold text-gray-900">{selectedAlert.threshold}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Giá trị hiện tại</p>
                      <p className="text-lg font-bold text-red-600">{selectedAlert.currentValue}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assigned Authority */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Đơn vị phụ trách</label>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-900 font-semibold">Sở Công Thương {selectedAlert.region}</p>
                  <p className="text-xs text-gray-500 mt-1">Được giao phụ trách theo dõi và xử lý</p>
                </div>
              </div>

              {/* Action Timeline */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Nhật ký xử lý</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Cảnh báo được tạo</strong> - Vượt ngưỡng {selectedAlert.threshold}%
                      </p>
                      <p className="text-xs text-gray-500">{selectedAlert.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Đã giao cho Sở Công Thương</strong>
                      </p>
                      <p className="text-xs text-gray-500">{selectedAlert.createdAt}</p>
                    </div>
                  </div>
                  {selectedAlert.status === "resolved" && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <strong>Đã xử lý</strong> - Giá ổn định trở lại
                        </p>
                        <p className="text-xs text-gray-500">01/02/2026 15:30</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Button className="bg-blue-600 hover:bg-blue-700">Cập nhật trạng thái</Button>
                <Button variant="outline">Thêm ghi chú</Button>
                <Button variant="outline">Xuất báo cáo</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}