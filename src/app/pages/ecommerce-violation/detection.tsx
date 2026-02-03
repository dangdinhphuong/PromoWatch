import { useState } from "react";
import { Search, Filter, AlertTriangle, Eye, ExternalLink, Download, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { ViolationPage } from "./index";

interface DetectionPageProps {
  onBack: () => void;
  onNavigate: (page: ViolationPage) => void;
}

interface DetectedViolation {
  id: string;
  storeName: string;
  platform: string;
  violationType: string;
  product: string;
  detectedDate: string;
  riskScore: number;
  status: "pending" | "investigating" | "urgent" | "resolved" | "dismissed";
  url: string;
}

const initialViolations: DetectedViolation[] = [
  {
    id: "V001",
    storeName: "FashionHub Official",
    platform: "Shopee",
    violationType: "Hàng giả, hàng nhái",
    product: "Túi xách LV Super Fake 1:1",
    detectedDate: "03/02/2026 14:23",
    riskScore: 92,
    status: "pending",
    url: "shopee.vn/fashionhub-official",
  },
  {
    id: "V002",
    storeName: "BeautyStore88",
    platform: "Lazada",
    violationType: "Quảng cáo sai sự thật",
    product: "Serum trắng da 7 ngày hiệu quả 100%",
    detectedDate: "03/02/2026 13:45",
    riskScore: 78,
    status: "investigating",
    url: "lazada.vn/beautystore88",
  },
  {
    id: "V003",
    storeName: "SuperFood Market",
    platform: "Facebook",
    violationType: "Hàng cấm lưu hành",
    product: "Thuốc giảm cân không rõ nguồn gốc",
    detectedDate: "03/02/2026 12:10",
    riskScore: 95,
    status: "urgent",
    url: "facebook.com/superfoodmarket",
  },
  {
    id: "V004",
    storeName: "TechGadget Store",
    platform: "Tiki",
    violationType: "Hàng giả, hàng nhái",
    product: "Tai nghe AirPods Pro giá rẻ",
    detectedDate: "03/02/2026 11:30",
    riskScore: 85,
    status: "pending",
    url: "tiki.vn/techgadget",
  },
  {
    id: "V005",
    storeName: "HealthSupplements VN",
    platform: "Shopee",
    violationType: "Quảng cáo sai sự thật",
    product: "Viên uống tăng chiều cao 10cm/tháng",
    detectedDate: "03/02/2026 10:15",
    riskScore: 88,
    status: "investigating",
    url: "shopee.vn/healthsupplements",
  },
];

export function DetectionPage({ onBack, onNavigate }: DetectionPageProps) {
  const [violations, setViolations] = useState<DetectedViolation[]>(initialViolations);
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<string>("all");

  // Dialog states
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isStatusChangeOpen, setIsStatusChangeOpen] = useState(false);
  const [selectedViolation, setSelectedViolation] = useState<DetectedViolation | null>(null);
  const [newStatus, setNewStatus] = useState<DetectedViolation["status"]>("pending");

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      pending: { label: "Chờ xử lý", className: "bg-yellow-100 text-yellow-700" },
      investigating: { label: "Đang điều tra", className: "bg-blue-100 text-blue-700" },
      urgent: { label: "Khẩn cấp", className: "bg-red-600 text-white" },
      resolved: { label: "Đã xử lý", className: "bg-green-100 text-green-700" },
      dismissed: { label: "Bỏ qua", className: "bg-gray-100 text-gray-700" },
    };
    return badges[status] || badges.pending;
  };

  const getRiskColor = (score: number) => {
    if (score >= 90) return "text-red-600 font-bold";
    if (score >= 70) return "text-orange-600 font-bold";
    return "text-yellow-600 font-bold";
  };

  // Filter violations
  const filteredViolations = violations.filter((v) => {
    const matchesSearch = 
      v.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.violationType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platformFilter === "all" || v.platform === platformFilter;
    const matchesStatus = statusFilter === "all" || v.status === statusFilter;
    const matchesRisk = riskFilter === "all" || 
      (riskFilter === "high" && v.riskScore >= 80) ||
      (riskFilter === "medium" && v.riskScore >= 50 && v.riskScore < 80) ||
      (riskFilter === "low" && v.riskScore < 50);
    return matchesSearch && matchesPlatform && matchesStatus && matchesRisk;
  });

  // Open detail dialog
  const openDetail = (violation: DetectedViolation) => {
    setSelectedViolation(violation);
    setIsDetailOpen(true);
  };

  // Open status change dialog
  const openStatusChange = (violation: DetectedViolation) => {
    setSelectedViolation(violation);
    setNewStatus(violation.status);
    setIsStatusChangeOpen(true);
  };

  // Update status
  const handleStatusChange = () => {
    if (!selectedViolation) return;
    setViolations(violations.map(v => 
      v.id === selectedViolation.id ? { ...v, status: newStatus } : v
    ));
    setIsStatusChangeOpen(false);
  };

  // Export data
  const handleExport = () => {
    const dataStr = JSON.stringify(filteredViolations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `detected-violations-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Quick actions
  const markAsResolved = (id: string) => {
    setViolations(violations.map(v => 
      v.id === id ? { ...v, status: "resolved" } : v
    ));
  };

  const markAsDismissed = (id: string) => {
    setViolations(violations.map(v => 
      v.id === id ? { ...v, status: "dismissed" } : v
    ));
  };

  const stats = {
    total: violations.length,
    pending: violations.filter(v => v.status === "pending").length,
    urgent: violations.filter(v => v.status === "urgent").length,
    investigating: violations.filter(v => v.status === "investigating").length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Phát hiện vi phạm tự động</h2>
            <p className="text-sm text-gray-600">Hệ thống AI giám sát và phát hiện vi phạm trên các nền tảng</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Nền tảng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả nền tảng</SelectItem>
                <SelectItem value="Shopee">Shopee</SelectItem>
                <SelectItem value="Lazada">Lazada</SelectItem>
                <SelectItem value="Tiki">Tiki</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="pending">Chờ xử lý</SelectItem>
                <SelectItem value="investigating">Đang điều tra</SelectItem>
                <SelectItem value="urgent">Khẩn cấp</SelectItem>
                <SelectItem value="resolved">Đã xử lý</SelectItem>
                <SelectItem value="dismissed">Bỏ qua</SelectItem>
              </SelectContent>
            </Select>

            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Mức độ rủi ro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="high">Cao (≥80)</SelectItem>
                <SelectItem value="medium">Trung bình (50-79)</SelectItem>
                <SelectItem value="low">Thấp (&lt;50)</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Filter className="h-4 w-4 mr-2" />
                Lọc nâng cao
              </Button>
            </div>
          </div>

          <Input
            type="text"
            placeholder="Tìm kiếm theo tên gian hàng, sản phẩm, loại vi phạm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng vi phạm</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white border border-yellow-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Chờ xử lý</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Khẩn cấp</p>
            <p className="text-3xl font-bold text-red-600">{stats.urgent}</p>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đang điều tra</p>
            <p className="text-3xl font-bold text-blue-600">{stats.investigating}</p>
          </div>
        </div>

        {/* Violations Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Gian hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Nền tảng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Loại vi phạm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Rủi ro
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredViolations.map((violation) => (
                  <tr key={violation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{violation.storeName}</div>
                      <div className="text-xs text-gray-500">{violation.detectedDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                        {violation.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{violation.violationType}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">{violation.product}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-lg font-bold ${getRiskColor(violation.riskScore)}`}>
                        {violation.riskScore}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${getStatusBadge(violation.status).className}`}
                      >
                        {getStatusBadge(violation.status).label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDetail(violation)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openStatusChange(violation)}
                          className="h-8 w-8 p-0"
                        >
                          <AlertTriangle className="h-4 w-4" />
                        </Button>
                        {violation.status === "pending" && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsResolved(violation.id)}
                              className="h-8 w-8 p-0 text-green-600"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsDismissed(violation.id)}
                              className="h-8 w-8 p-0 text-gray-400"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Hiển thị {filteredViolations.length} vi phạm
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Trước</Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Sau</Button>
            </div>
          </div>
        </div>

        {/* No results */}
        {filteredViolations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200 mt-6">
            <p className="text-gray-500">Không tìm thấy vi phạm nào</p>
          </div>
        )}
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết vi phạm</DialogTitle>
            <DialogDescription>Thông tin đầy đủ về vi phạm được phát hiện</DialogDescription>
          </DialogHeader>
          {selectedViolation && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mã vi phạm</label>
                  <p className="text-gray-900 font-semibold">{selectedViolation.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Điểm rủi ro</label>
                  <p className={`text-2xl font-bold ${getRiskColor(selectedViolation.riskScore)}`}>
                    {selectedViolation.riskScore}/100
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Tên gian hàng</label>
                  <p className="text-gray-900">{selectedViolation.storeName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Nền tảng</label>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                    {selectedViolation.platform}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Loại vi phạm</label>
                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <p className="text-sm text-gray-900 font-semibold">{selectedViolation.violationType}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Sản phẩm vi phạm</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-900">{selectedViolation.product}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Thời gian phát hiện</label>
                  <p className="text-gray-900">{selectedViolation.detectedDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusBadge(selectedViolation.status).className}`}
                  >
                    {getStatusBadge(selectedViolation.status).label}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Link gian hàng</label>
                <a
                  href={`https://${selectedViolation.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline flex items-center gap-2"
                >
                  {selectedViolation.url}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Bằng chứng AI phát hiện</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <p className="text-sm text-gray-900">Từ khóa nhạy cảm: "fake", "super fake", "1:1"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <p className="text-sm text-gray-900">Giá thấp bất thường so với thị trường</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <p className="text-sm text-gray-900">Hình ảnh sản phẩm không chính chủ</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Đóng</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => {
              setIsDetailOpen(false);
              if (selectedViolation) openStatusChange(selectedViolation);
            }}>
              Cập nhật trạng thái
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Status Change Dialog */}
      <Dialog open={isStatusChangeOpen} onOpenChange={setIsStatusChangeOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cập nhật trạng thái</DialogTitle>
            <DialogDescription>Thay đổi trạng thái xử lý vi phạm</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Trạng thái mới</label>
            <Select value={newStatus} onValueChange={(value: any) => setNewStatus(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Chờ xử lý</SelectItem>
                <SelectItem value="investigating">Đang điều tra</SelectItem>
                <SelectItem value="urgent">Khẩn cấp</SelectItem>
                <SelectItem value="resolved">Đã xử lý</SelectItem>
                <SelectItem value="dismissed">Bỏ qua</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStatusChangeOpen(false)}>Hủy</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleStatusChange}>
              Cập nhật
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
