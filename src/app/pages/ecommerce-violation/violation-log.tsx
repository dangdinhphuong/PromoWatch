import { useState } from "react";
import { FileText, Download, Filter, Calendar, CheckCircle2, Clock, XCircle, AlertTriangle, Eye, Search } from "lucide-react";
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

interface ViolationLogPageProps {
  onBack: () => void;
  onNavigate: (page: ViolationPage) => void;
}

interface ViolationLog {
  id: string;
  title: string;
  store: string;
  platform: string;
  violationType: string;
  reportDate: string;
  handler: string;
  status: "completed" | "investigating" | "pending" | "rejected";
  resolution: string;
  priority: "critical" | "high" | "medium" | "low";
}

const initialLogs: ViolationLog[] = [
  {
    id: "VL-2026-089",
    title: "Xử lý gian hàng bán hàng giả trên Shopee",
    store: "FashionHub Official",
    platform: "Shopee",
    violationType: "Hàng giả, hàng nhái",
    reportDate: "03/02/2026",
    handler: "Thanh tra TP.HCM",
    status: "completed",
    resolution: "Đã đóng cửa gian hàng, phạt 15 triệu đồng",
    priority: "high",
  },
  {
    id: "VL-2026-088",
    title: "Mạng lưới bán thuốc không phép trên Facebook",
    store: "Medicine Online + 7 tài khoản khác",
    platform: "Facebook",
    violationType: "Hàng cấm lưu hành",
    reportDate: "02/02/2026",
    handler: "Công an Hà Nội",
    status: "investigating",
    resolution: "Đang điều tra, đã tạm khóa 8 tài khoản",
    priority: "critical",
  },
  {
    id: "VL-2026-087",
    title: "Quảng cáo sai sự thật về mỹ phẩm",
    store: "BeautyStore88",
    platform: "Lazada",
    violationType: "Quảng cáo sai sự thật",
    reportDate: "02/02/2026",
    handler: "Cục QLTT",
    status: "pending",
    resolution: "Chờ phản hồi từ nền tảng",
    priority: "medium",
  },
  {
    id: "VL-2026-086",
    title: "Bán phá giá thiết bị điện tử",
    store: "TechGadget Store",
    platform: "Tiki",
    violationType: "Cạnh tranh không lành mạnh",
    reportDate: "01/02/2026",
    handler: "Cục QLCL",
    status: "rejected",
    resolution: "Không đủ cơ sở xử lý",
    priority: "low",
  },
  {
    id: "VL-2026-085",
    title: "Livestream bán hàng không rõ nguồn gốc",
    store: "HealthSupplements VN",
    platform: "TikTok",
    violationType: "Hàng không rõ nguồn gốc",
    reportDate: "01/02/2026",
    handler: "Thanh tra Đồng Nai",
    status: "completed",
    resolution: "Phạt 10 triệu, buộc gỡ sản phẩm",
    priority: "medium",
  },
  {
    id: "VL-2026-084",
    title: "Gian hàng bán giày nhái thương hiệu",
    store: "Luxury Fashion",
    platform: "Instagram",
    violationType: "Hàng giả, hàng nhái",
    reportDate: "31/01/2026",
    handler: "Thanh tra TP.HCM",
    status: "investigating",
    resolution: "Đang phối hợp với chủ thương hiệu",
    priority: "high",
  },
];

export function ViolationLogPage({ onBack, onNavigate }: ViolationLogPageProps) {
  const [logs, setLogs] = useState<ViolationLog[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");

  // Dialog states
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<ViolationLog | null>(null);

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; className: string; icon: any }> = {
      completed: { label: "Đã xử lý", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
      investigating: { label: "Đang điều tra", className: "bg-blue-100 text-blue-700", icon: Clock },
      pending: { label: "Chờ xử lý", className: "bg-yellow-100 text-yellow-700", icon: AlertTriangle },
      rejected: { label: "Từ chối", className: "bg-gray-100 text-gray-700", icon: XCircle },
    };
    return badges[status] || badges.pending;
  };

  const getPriorityBadge = (priority: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      critical: { label: "Nghiêm trọng", className: "bg-red-600 text-white" },
      high: { label: "Cao", className: "bg-orange-100 text-orange-700" },
      medium: { label: "Trung bình", className: "bg-yellow-100 text-yellow-700" },
      low: { label: "Thấp", className: "bg-blue-100 text-blue-700" },
    };
    return badges[priority] || badges.medium;
  };

  // Filter logs
  const filteredLogs = logs.filter((log) => {
    const matchesSearch = 
      log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.violationType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.handler.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || log.priority === priorityFilter;
    const matchesPlatform = platformFilter === "all" || log.platform === platformFilter;
    return matchesSearch && matchesStatus && matchesPriority && matchesPlatform;
  });

  // Open detail
  const openDetail = (log: ViolationLog) => {
    setSelectedLog(log);
    setIsDetailOpen(true);
  };

  // Export
  const handleExport = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `violation-logs-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: logs.length,
    completed: logs.filter(l => l.status === "completed").length,
    investigating: logs.filter(l => l.status === "investigating").length,
    pending: logs.filter(l => l.status === "pending").length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Nhật ký xử lý vi phạm</h2>
            <p className="text-sm text-gray-600">Lịch sử xử lý và theo dõi các vụ việc vi phạm</p>
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
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="completed">Đã xử lý</SelectItem>
                <SelectItem value="investigating">Đang điều tra</SelectItem>
                <SelectItem value="pending">Chờ xử lý</SelectItem>
                <SelectItem value="rejected">Từ chối</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Mức độ ưu tiên" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="critical">Nghiêm trọng</SelectItem>
                <SelectItem value="high">Cao</SelectItem>
                <SelectItem value="medium">Trung bình</SelectItem>
                <SelectItem value="low">Thấp</SelectItem>
              </SelectContent>
            </Select>

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
                <SelectItem value="TikTok">TikTok</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Lọc nâng cao
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Tìm kiếm theo mã, tiêu đề, gian hàng, người xử lý..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng hồ sơ</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đã xử lý</p>
            <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đang điều tra</p>
            <p className="text-3xl font-bold text-blue-600">{stats.investigating}</p>
          </div>
          <div className="bg-white border border-yellow-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Chờ xử lý</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Mã hồ sơ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Tiêu đề
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Gian hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Loại vi phạm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Ưu tiên
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
                {filteredLogs.map((log) => {
                  const statusBadge = getStatusBadge(log.status);
                  const priorityBadge = getPriorityBadge(log.priority);
                  const StatusIcon = statusBadge.icon;
                  return (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono font-semibold text-gray-900">{log.id}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {log.reportDate}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 max-w-xs">{log.title}</div>
                        <div className="text-xs text-gray-500">
                          {log.platform} • {log.handler}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{log.store}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{log.violationType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${priorityBadge.className}`}>
                          {priorityBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded flex items-center gap-1 w-fit ${statusBadge.className}`}>
                          <StatusIcon className="h-3 w-3" />
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDetail(log)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Hiển thị {filteredLogs.length} hồ sơ
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Trước</Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Sau</Button>
            </div>
          </div>
        </div>

        {/* No results */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200 mt-6">
            <p className="text-gray-500">Không tìm thấy hồ sơ nào</p>
          </div>
        )}
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết hồ sơ vi phạm</DialogTitle>
            <DialogDescription>Thông tin đầy đủ về vụ việc xử lý vi phạm</DialogDescription>
          </DialogHeader>
          {selectedLog && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mã hồ sơ</label>
                  <p className="text-gray-900 font-mono font-semibold text-lg">{selectedLog.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ngày báo cáo</label>
                  <p className="text-gray-900">{selectedLog.reportDate}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tiêu đề vụ việc</label>
                <p className="text-lg font-semibold text-gray-900">{selectedLog.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Gian hàng vi phạm</label>
                  <p className="text-gray-900">{selectedLog.store}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Nền tảng</label>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                    {selectedLog.platform}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Loại vi phạm</label>
                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <p className="text-sm text-gray-900 font-semibold">{selectedLog.violationType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mức độ ưu tiên</label>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${getPriorityBadge(selectedLog.priority).className}`}>
                    {getPriorityBadge(selectedLog.priority).label}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded flex items-center gap-1 w-fit ${getStatusBadge(selectedLog.status).className}`}>
                    {React.createElement(getStatusBadge(selectedLog.status).icon, { className: "h-3 w-3" })}
                    {getStatusBadge(selectedLog.status).label}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Đơn vị xử lý</label>
                <p className="text-gray-900">{selectedLog.handler}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Kết quả xử lý</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-900">{selectedLog.resolution}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Timeline xử lý</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Nhận báo cáo</strong>
                      </p>
                      <p className="text-xs text-gray-500">{selectedLog.reportDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <strong>Giao cho đơn vị xử lý</strong> - {selectedLog.handler}
                      </p>
                      <p className="text-xs text-gray-500">{selectedLog.reportDate}</p>
                    </div>
                  </div>
                  {selectedLog.status === "completed" && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <strong>Hoàn thành xử lý</strong>
                        </p>
                        <p className="text-xs text-gray-500">{selectedLog.reportDate}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Văn bản liên quan</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 underline cursor-pointer">
                      Báo cáo vi phạm chi tiết - {selectedLog.id}.pdf
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 underline cursor-pointer">
                      Biên bản xử lý - {selectedLog.id}.pdf
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Đóng</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Tải báo cáo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
