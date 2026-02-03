import { useState } from "react";
import { Shield, AlertTriangle, TrendingUp, MapPin, Eye, Plus, Download, CheckCircle, XCircle, Filter, Search } from "lucide-react";
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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface RiskAlertPageProps {
  onBack: () => void;
  onNavigate: (page: ViolationPage) => void;
}

interface RiskAlert {
  id: string;
  title: string;
  description: string;
  riskLevel: "critical" | "high" | "medium" | "low";
  platform: string;
  region: string;
  affectedStores: number;
  detectedDate: string;
  priority: string;
  assignedTo: string;
  status: "active" | "investigating" | "resolved" | "dismissed";
}

const initialAlerts: RiskAlert[] = [
  {
    id: "RA-001",
    title: "Phát hiện 15 gian hàng nghi vấn bán hàng giả trên Shopee",
    description: "Tập trung tại TP. HCM, phát hiện thông qua AI image recognition và báo cáo từ người dùng",
    riskLevel: "critical",
    platform: "Shopee",
    region: "TP. Hồ Chí Minh",
    affectedStores: 15,
    detectedDate: "03/02/2026",
    priority: "Khẩn cấp",
    assignedTo: "Thanh tra Thương mại TP.HCM",
    status: "active",
  },
  {
    id: "RA-002",
    title: "Mạng lưới bán thuốc không phép trên Facebook",
    description: "Phát hiện 8 tài khoản liên kết với nhau, bán thuốc kháng sinh và thuốc giảm cân không rõ nguồn gốc",
    riskLevel: "critical",
    platform: "Facebook",
    region: "Hà Nội",
    affectedStores: 8,
    detectedDate: "02/02/2026",
    priority: "Khẩn cấp",
    assignedTo: "Công an Thành phố Hà Nội",
    status: "investigating",
  },
  {
    id: "RA-003",
    title: "Quảng cáo sai sự thật về mỹ phẩm trên Lazada",
    description: "12 gian hàng quảng cáo hiệu quả 'thần kỳ' không có chứng nhận, vi phạm luật quảng cáo",
    riskLevel: "high",
    platform: "Lazada",
    region: "Toàn quốc",
    affectedStores: 12,
    detectedDate: "02/02/2026",
    priority: "Cao",
    assignedTo: "Cục QLTT - Bộ Công Thương",
    status: "active",
  },
  {
    id: "RA-004",
    title: "Bán phá giá thiết bị điện tử trên Tiki",
    description: "Phát hiện hành vi cạnh tranh không lành mạnh, giá bán thấp hơn giá vốn 40%",
    riskLevel: "medium",
    platform: "Tiki",
    region: "Toàn quốc",
    affectedStores: 6,
    detectedDate: "01/02/2026",
    priority: "Trung bình",
    assignedTo: "Cục QLCL - Bộ Công Thương",
    status: "resolved",
  },
  {
    id: "RA-005",
    title: "Livestream bán hàng không rõ nguồn gốc",
    description: "5 kênh livestream trên TikTok bán quần áo, giày dép không có hóa đơn chứng từ",
    riskLevel: "high",
    platform: "TikTok",
    region: "Đồng Nai",
    affectedStores: 5,
    detectedDate: "01/02/2026",
    priority: "Cao",
    assignedTo: "Thanh tra Đồng Nai",
    status: "active",
  },
];

const riskTrendData = [
  { month: "T8", critical: 12, high: 23, medium: 18 },
  { month: "T9", critical: 15, high: 28, medium: 21 },
  { month: "T10", critical: 18, high: 31, medium: 25 },
  { month: "T11", critical: 14, high: 27, medium: 22 },
  { month: "T12", critical: 21, high: 35, medium: 28 },
  { month: "T1", critical: 19, high: 33, medium: 26 },
];

export function RiskAlertPage({ onBack, onNavigate }: RiskAlertPageProps) {
  const [alerts, setAlerts] = useState<RiskAlert[]>(initialAlerts);
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");

  // Dialog states
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isResolveOpen, setIsResolveOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<RiskAlert | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    riskLevel: "medium" as const,
    platform: "",
    region: "",
    affectedStores: 0,
    assignedTo: "",
  });

  const getRiskBadge = (level: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      critical: { label: "Nghiêm trọng", className: "bg-red-600 text-white" },
      high: { label: "Cao", className: "bg-orange-100 text-orange-700 border border-orange-300" },
      medium: { label: "Trung bình", className: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
      low: { label: "Thấp", className: "bg-blue-100 text-blue-700 border border-blue-300" },
    };
    return badges[level] || badges.medium;
  };

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      active: { label: "Đang hiệu lực", className: "bg-red-100 text-red-700" },
      investigating: { label: "Đang điều tra", className: "bg-blue-100 text-blue-700" },
      resolved: { label: "Đã xử lý", className: "bg-green-100 text-green-700" },
      dismissed: { label: "Bỏ qua", className: "bg-gray-100 text-gray-700" },
    };
    return badges[status] || badges.active;
  };

  // Filter alerts
  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch = 
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === "all" || alert.riskLevel === riskFilter;
    const matchesStatus = statusFilter === "all" || alert.status === statusFilter;
    const matchesPlatform = platformFilter === "all" || alert.platform === platformFilter;
    return matchesSearch && matchesRisk && matchesStatus && matchesPlatform;
  });

  // Open detail
  const openDetail = (alert: RiskAlert) => {
    setSelectedAlert(alert);
    setIsDetailOpen(true);
  };

  // Add alert
  const handleAdd = () => {
    const newAlert: RiskAlert = {
      id: `RA-${String(alerts.length + 1).padStart(3, '0')}`,
      title: formData.title,
      description: formData.description,
      riskLevel: formData.riskLevel,
      platform: formData.platform,
      region: formData.region,
      affectedStores: formData.affectedStores,
      detectedDate: new Date().toLocaleDateString('vi-VN'),
      priority: formData.riskLevel === "critical" ? "Khẩn cấp" : formData.riskLevel === "high" ? "Cao" : "Trung bình",
      assignedTo: formData.assignedTo,
      status: "active",
    };
    setAlerts([newAlert, ...alerts]);
    setIsAddOpen(false);
    resetForm();
  };

  // Resolve alert
  const handleResolve = () => {
    if (!selectedAlert) return;
    setAlerts(alerts.map(a => 
      a.id === selectedAlert.id ? { ...a, status: "resolved" } : a
    ));
    setIsResolveOpen(false);
    setSelectedAlert(null);
  };

  // Dismiss alert
  const handleDismiss = (id: string) => {
    setAlerts(alerts.map(a => 
      a.id === id ? { ...a, status: "dismissed" } : a
    ));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      riskLevel: "medium",
      platform: "",
      region: "",
      affectedStores: 0,
      assignedTo: "",
    });
  };

  // Export
  const handleExport = () => {
    const dataStr = JSON.stringify(filteredAlerts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `risk-alerts-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: alerts.length,
    active: alerts.filter(a => a.status === "active").length,
    critical: alerts.filter(a => a.riskLevel === "critical").length,
    investigating: alerts.filter(a => a.status === "investigating").length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Cảnh báo rủi ro</h2>
            <p className="text-sm text-gray-600">Hệ thống cảnh báo sớm và quản lý rủi ro vi phạm</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsAddOpen(true)}>
              <Plus className="h-4 w-4" />
              Tạo cảnh báo
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Mức độ rủi ro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="critical">Nghiêm trọng</SelectItem>
                <SelectItem value="high">Cao</SelectItem>
                <SelectItem value="medium">Trung bình</SelectItem>
                <SelectItem value="low">Thấp</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Đang hiệu lực</SelectItem>
                <SelectItem value="investigating">Đang điều tra</SelectItem>
                <SelectItem value="resolved">Đã xử lý</SelectItem>
                <SelectItem value="dismissed">Bỏ qua</SelectItem>
              </SelectContent>
            </Select>

            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Nền tảng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="Shopee">Shopee</SelectItem>
                <SelectItem value="Lazada">Lazada</SelectItem>
                <SelectItem value="Tiki">Tiki</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="TikTok">TikTok</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Lọc nâng cao
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Tìm kiếm cảnh báo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng cảnh báo</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đang hiệu lực</p>
            <p className="text-3xl font-bold text-red-600">{stats.active}</p>
          </div>
          <div className="bg-white border border-orange-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Nghiêm trọng</p>
            <p className="text-3xl font-bold text-orange-600">{stats.critical}</p>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đang điều tra</p>
            <p className="text-3xl font-bold text-blue-600">{stats.investigating}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Xu hướng cảnh báo 6 tháng qua</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={riskTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="critical" stackId="a" fill="#dc2626" name="Nghiêm trọng" />
              <Bar dataKey="high" stackId="a" fill="#f97316" name="Cao" />
              <Bar dataKey="medium" stackId="a" fill="#eab308" name="Trung bình" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => {
            const riskBadge = getRiskBadge(alert.riskLevel);
            const statusBadge = getStatusBadge(alert.status);
            return (
              <div
                key={alert.id}
                className={`bg-white rounded-lg border-l-4 ${
                  alert.riskLevel === "critical" ? "border-red-600" : 
                  alert.riskLevel === "high" ? "border-orange-600" : 
                  "border-yellow-600"
                } border-r border-t border-b border-gray-200 p-6 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-gray-500">{alert.id}</span>
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded ${riskBadge.className}`}>
                        {riskBadge.label}
                      </span>
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded ${statusBadge.className}`}>
                        {statusBadge.label}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-700">
                        {alert.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{alert.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{alert.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{alert.region}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>{alert.affectedStores} gian hàng</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Phát hiện: {alert.detectedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>Giao cho: {alert.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => openDetail(alert)}>
                      <Eye className="h-4 w-4" />
                      Chi tiết
                    </Button>
                    {alert.status === "active" && (
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedAlert(alert);
                            setIsResolveOpen(true);
                          }}
                          className="text-green-600 hover:text-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Xử lý
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDismiss(alert.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Bỏ qua
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredAlerts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">Không tìm thấy cảnh báo nào</p>
          </div>
        )}
      </div>

      {/* Add Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Tạo cảnh báo rủi ro mới</DialogTitle>
            <DialogDescription>Tạo cảnh báo cho hành vi vi phạm nguy hiểm</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Tiêu đề cảnh báo *</label>
              <Input
                placeholder="VD: Phát hiện mạng lưới bán hàng giả..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả chi tiết</label>
              <textarea
                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Mô tả chi tiết về cảnh báo..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mức độ rủi ro</label>
                <Select value={formData.riskLevel} onValueChange={(value: any) => setFormData({ ...formData, riskLevel: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Thấp</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                    <SelectItem value="critical">Nghiêm trọng</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Nền tảng</label>
                <Input
                  placeholder="VD: Shopee, Lazada..."
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Khu vực</label>
                <Input
                  placeholder="VD: Hà Nội, TP.HCM..."
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Số gian hàng bị ảnh hưởng</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={formData.affectedStores || ""}
                  onChange={(e) => setFormData({ ...formData, affectedStores: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Giao cho đơn vị</label>
              <Input
                placeholder="VD: Thanh tra Thương mại TP.HCM"
                value={formData.assignedTo}
                onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)}>Hủy</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAdd} disabled={!formData.title}>
              Tạo cảnh báo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết cảnh báo</DialogTitle>
            <DialogDescription>Thông tin đầy đủ về cảnh báo rủi ro</DialogDescription>
          </DialogHeader>
          {selectedAlert && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mã cảnh báo</label>
                  <p className="text-gray-900 font-semibold">{selectedAlert.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Mức độ rủi ro</label>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${getRiskBadge(selectedAlert.riskLevel).className}`}>
                    {getRiskBadge(selectedAlert.riskLevel).label}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tiêu đề</label>
                <p className="text-lg font-semibold text-gray-900">{selectedAlert.title}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-900">{selectedAlert.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nền tảng</label>
                  <p className="text-gray-900">{selectedAlert.platform}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Khu vực</label>
                  <p className="text-gray-900">{selectedAlert.region}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Gian hàng bị ảnh hưởng</label>
                  <p className="text-2xl font-bold text-red-600">{selectedAlert.affectedStores}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ngày phát hiện</label>
                  <p className="text-gray-900">{selectedAlert.detectedDate}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${getStatusBadge(selectedAlert.status).className}`}>
                    {getStatusBadge(selectedAlert.status).label}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Giao cho</label>
                  <p className="text-gray-900">{selectedAlert.assignedTo}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Đóng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Resolve Dialog */}
      <Dialog open={isResolveOpen} onOpenChange={setIsResolveOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Xác nhận xử lý</DialogTitle>
            <DialogDescription>
              Đánh dấu cảnh báo này đã được xử lý xong?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsResolveOpen(false)}>Hủy</Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleResolve}>
              Xác nhận xử lý
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
