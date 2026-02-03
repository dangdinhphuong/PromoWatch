import { useState } from "react";
import { FileText, Eye, Calendar, MapPin, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

interface PolicyRecord {
  id: string;
  name: string;
  commodity: string;
  scope: "national" | "regional";
  region?: string;
  effectiveDate: string;
  endDate?: string;
  status: "active" | "completed" | "planned";
  linkedAlerts: number;
  description: string;
}

const mockPolicies: PolicyRecord[] = [
  {
    id: "PL001",
    name: "Quyết định bình ổn giá xăng dầu tháng 2/2026",
    commodity: "Xăng dầu",
    scope: "national",
    effectiveDate: "01/02/2026",
    endDate: "28/02/2026",
    status: "active",
    linkedAlerts: 2,
    description: "Áp dụng quỹ bình ổn giá xăng dầu để hỗ trợ giảm giá bán lẻ.",
  },
  {
    id: "PL002",
    name: "Điều tiết Gas LPG khu vực miền Nam",
    commodity: "Gas LPG",
    scope: "regional",
    region: "Miền Nam",
    effectiveDate: "25/01/2026",
    endDate: "10/02/2026",
    status: "active",
    linkedAlerts: 1,
    description: "Tăng cường nguồn cung và giám sát giá Gas LPG tại các tỉnh miền Nam.",
  },
  {
    id: "PL003",
    name: "Chương trình bình ổn giá thực phẩm Tết Nguyên Đán",
    commodity: "Thực phẩm thiết yếu",
    scope: "national",
    effectiveDate: "15/01/2026",
    endDate: "05/02/2026",
    status: "completed",
    linkedAlerts: 0,
    description: "Hỗ trợ doanh nghiệp bình ổn giá thực phẩm trong dịp Tết.",
  },
];

// Mock data for before/after comparison
const beforeAfterData = [
  { date: "25/01", before: 25500, after: null },
  { date: "26/01", before: 25700, after: null },
  { date: "27/01", before: 25900, after: null },
  { date: "28/01", before: 26100, after: null },
  { date: "29/01", before: 26300, after: null },
  { date: "30/01", before: 26500, after: null },
  { date: "31/01", before: 26700, after: null },
  { date: "01/02", before: null, after: 25800 },
  { date: "02/02", before: null, after: 25600 },
  { date: "03/02", before: null, after: 25300 },
];

export function PolicyLog() {
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyRecord | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const getScopeText = (scope: string) => {
    return scope === "national" ? "Toàn quốc" : "Khu vực";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-gray-100 text-gray-700";
      case "planned":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Đang hiệu lực";
      case "completed":
        return "Đã hoàn thành";
      case "planned":
        return "Kế hoạch";
      default:
        return status;
    }
  };

  const handleViewDetail = (policy: PolicyRecord) => {
    setSelectedPolicy(policy);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Nhật ký quyết sách bình ổn giá</h1>
            <p className="text-gray-600">Theo dõi và đánh giá tác động các quyết định điều hành</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
            <FileText className="h-4 w-4" />
            Tạo quyết sách mới
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-green-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Đang hiệu lực</p>
            <p className="text-3xl font-bold text-green-600">2</p>
            <p className="text-xs text-gray-500 mt-1">Chính sách</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Đã hoàn thành</p>
            <p className="text-3xl font-bold text-gray-600">1</p>
            <p className="text-xs text-gray-500 mt-1">Chính sách</p>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Hiệu quả trung bình</p>
            <p className="text-3xl font-bold text-blue-600">-4.2%</p>
            <p className="text-xs text-gray-500 mt-1">Giảm giá</p>
          </div>

          <div className="bg-white rounded-lg border border-purple-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Cảnh báo liên kết</p>
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-xs text-gray-500 mt-1">Cảnh báo</p>
          </div>
        </div>

        {/* Policy List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Danh sách quyết sách</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {mockPolicies.map((policy) => (
              <div key={policy.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            policy.status
                          )}`}
                        >
                          {getStatusText(policy.status)}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                          {getScopeText(policy.scope)}
                        </span>
                        {policy.linkedAlerts > 0 && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                            {policy.linkedAlerts} cảnh báo
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{policy.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{policy.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>{policy.commodity}</span>
                        </div>
                        {policy.region && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{policy.region}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {policy.effectiveDate} - {policy.endDate || "Không xác định"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetail(policy)}
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
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Chi tiết quyết sách</DialogTitle>
            <DialogDescription>Thông tin đầy đủ và đánh giá tác động</DialogDescription>
          </DialogHeader>
          {selectedPolicy && (
            <div className="space-y-6">
              {/* Policy Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Tên quyết sách</label>
                  <p className="text-gray-900 font-semibold">{selectedPolicy.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Mặt hàng</label>
                  <p className="text-gray-900">{selectedPolicy.commodity}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Phạm vi</label>
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700"
                  >
                    {getScopeText(selectedPolicy.scope)}
                    {selectedPolicy.region && ` - ${selectedPolicy.region}`}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      selectedPolicy.status
                    )}`}
                  >
                    {getStatusText(selectedPolicy.status)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ngày hiệu lực</label>
                  <p className="text-gray-900">{selectedPolicy.effectiveDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ngày kết thúc</label>
                  <p className="text-gray-900">{selectedPolicy.endDate || "Chưa xác định"}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả chi tiết</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-900">{selectedPolicy.description}</p>
                </div>
              </div>

              {/* Before/After Chart */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  So sánh giá trước và sau chính sách
                </label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={beforeAfterData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <ReferenceLine
                        x="01/02"
                        stroke="red"
                        strokeDasharray="3 3"
                        label="Ngày áp dụng"
                      />
                      <Line
                        type="monotone"
                        dataKey="before"
                        stroke="#f54900"
                        strokeWidth={2}
                        name="Trước chính sách"
                      />
                      <Line
                        type="monotone"
                        dataKey="after"
                        stroke="#009689"
                        strokeWidth={2}
                        name="Sau chính sách"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Impact Assessment */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Đánh giá tác động</label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Giảm giá trung bình</p>
                    <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5" />
                      -4.2%
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Thời gian ổn định</p>
                    <p className="text-2xl font-bold text-gray-900">3 ngày</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Khu vực tác động</p>
                    <p className="text-2xl font-bold text-gray-900">63/63</p>
                    <p className="text-xs text-gray-500">tỉnh/thành</p>
                  </div>
                </div>
              </div>

              {/* Linked Alerts */}
              {selectedPolicy.linkedAlerts > 0 && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Cảnh báo liên kết</label>
                  <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                    <p className="text-sm text-gray-900">
                      Quyết sách này được tạo để xử lý <strong>{selectedPolicy.linkedAlerts}</strong> cảnh báo biến động giá
                    </p>
                  </div>
                </div>
              )}

              {/* Related Surveillance Actions */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Hành động giám sát liên quan</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Triển khai thanh tra</strong> - Sở Công Thương 63 tỉnh/thành
                      </p>
                      <p className="text-xs text-gray-500">01/02/2026 08:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Giám sát chặt chẽ</strong> - Cập nhật giá hàng ngày
                      </p>
                      <p className="text-xs text-gray-500">01/02/2026 - Hiện tại</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Báo cáo định kỳ</strong> - Đánh giá hiệu quả hàng tuần
                      </p>
                      <p className="text-xs text-gray-500">Mỗi thứ 2 hàng tuần</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attached Documents */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Văn bản đính kèm</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 underline cursor-pointer">
                      QD-123-BCT-2026 - Quyết định bình ổn giá xăng dầu.pdf
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 underline cursor-pointer">
                      Phụ lục 1 - Danh sách doanh nghiệp tham gia.xlsx
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Button className="bg-blue-600 hover:bg-blue-700">Xuất báo cáo tác động</Button>
                <Button variant="outline">Chỉnh sửa</Button>
                <Button variant="outline">Gia hạn</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}