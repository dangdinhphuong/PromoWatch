import { useState } from "react";
import { Video, Users, AlertCircle, Eye, Download, Filter, Search, Flag, CheckCircle, XCircle } from "lucide-react";
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
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface LivestreamPageProps {
  onBack: () => void;
  onNavigate: (page: ViolationPage) => void;
}

interface Livestream {
  id: string;
  channel: string;
  platform: string;
  streamer: string;
  viewers: number;
  status: "live" | "ended" | "scheduled";
  duration: string;
  flagged: boolean;
  reason: string | null;
  products: number;
  sales: string;
  thumbnail: string;
}

const initialLivestreams: Livestream[] = [
  {
    id: "LS-001",
    channel: "Beauty Shop Official",
    platform: "TikTok",
    streamer: "Nguyễn Thị Mai",
    viewers: 2847,
    status: "live",
    duration: "1h 23m",
    flagged: true,
    reason: "Nghi vấn quảng cáo sai sự thật về hiệu quả sản phẩm",
    products: 12,
    sales: "45 đơn",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
  },
  {
    id: "LS-002",
    channel: "Fashion Hub Live",
    platform: "Shopee",
    streamer: "Trần Văn Nam",
    viewers: 1523,
    status: "live",
    duration: "2h 15m",
    flagged: true,
    reason: "Phát hiện sản phẩm nghi ngờ hàng nhái (túi xách LV)",
    products: 8,
    sales: "78 đơn",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
  },
  {
    id: "LS-003",
    channel: "Tech Gadgets 247",
    platform: "Facebook",
    streamer: "Lê Minh Tuấn",
    viewers: 3421,
    status: "live",
    duration: "45m",
    flagged: false,
    reason: null,
    products: 5,
    sales: "23 đơn",
    thumbnail: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400",
  },
  {
    id: "LS-004",
    channel: "Food Paradise",
    platform: "TikTok",
    streamer: "Phạm Thị Hoa",
    viewers: 892,
    status: "live",
    duration: "30m",
    flagged: true,
    reason: "Bán thực phẩm chức năng không rõ nguồn gốc",
    products: 6,
    sales: "12 đơn",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
  },
  {
    id: "LS-005",
    channel: "Home & Living Store",
    platform: "Lazada",
    streamer: "Võ Thanh Tùng",
    viewers: 645,
    status: "ended",
    duration: "3h 12m",
    flagged: false,
    reason: null,
    products: 15,
    sales: "156 đơn",
    thumbnail: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400",
  },
];

export function LivestreamPage({ onBack, onNavigate }: LivestreamPageProps) {
  const [livestreams, setLivestreams] = useState<Livestream[]>(initialLivestreams);
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [flaggedFilter, setFlaggedFilter] = useState<string>("all");

  // Dialog states
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedLivestream, setSelectedLivestream] = useState<Livestream | null>(null);
  const [reportReason, setReportReason] = useState("");

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      live: { label: "LIVE", className: "bg-red-600 text-white animate-pulse" },
      ended: { label: "Đã kết thúc", className: "bg-gray-100 text-gray-700" },
      scheduled: { label: "Đã lên lịch", className: "bg-blue-100 text-blue-700" },
    };
    return badges[status] || badges.ended;
  };

  // Filter livestreams
  const filteredLivestreams = livestreams.filter((ls) => {
    const matchesSearch = 
      ls.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ls.streamer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ls.reason && ls.reason.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPlatform = platformFilter === "all" || ls.platform === platformFilter;
    const matchesStatus = statusFilter === "all" || ls.status === statusFilter;
    const matchesFlagged = flaggedFilter === "all" || 
      (flaggedFilter === "flagged" && ls.flagged) ||
      (flaggedFilter === "normal" && !ls.flagged);
    return matchesSearch && matchesPlatform && matchesStatus && matchesFlagged;
  });

  // Open detail
  const openDetail = (livestream: Livestream) => {
    setSelectedLivestream(livestream);
    setIsDetailOpen(true);
  };

  // Open report
  const openReport = (livestream: Livestream) => {
    setSelectedLivestream(livestream);
    setReportReason("");
    setIsReportOpen(true);
  };

  // Submit report
  const handleReport = () => {
    if (!selectedLivestream) return;
    setLivestreams(livestreams.map(ls => 
      ls.id === selectedLivestream.id 
        ? { ...ls, flagged: true, reason: reportReason }
        : ls
    ));
    setIsReportOpen(false);
  };

  // Clear flag
  const handleClearFlag = (id: string) => {
    setLivestreams(livestreams.map(ls => 
      ls.id === id ? { ...ls, flagged: false, reason: null } : ls
    ));
  };

  // Export
  const handleExport = () => {
    const dataStr = JSON.stringify(filteredLivestreams, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `livestream-monitoring-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: livestreams.length,
    live: livestreams.filter(ls => ls.status === "live").length,
    flagged: livestreams.filter(ls => ls.flagged).length,
    totalViewers: livestreams.filter(ls => ls.status === "live").reduce((sum, ls) => sum + ls.viewers, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Giám sát Livestream</h2>
            <p className="text-sm text-gray-600">Theo dõi và phát hiện vi phạm trong livestream bán hàng</p>
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
                <SelectItem value="TikTok">TikTok</SelectItem>
                <SelectItem value="Shopee">Shopee</SelectItem>
                <SelectItem value="Lazada">Lazada</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="live">Đang live</SelectItem>
                <SelectItem value="ended">Đã kết thúc</SelectItem>
                <SelectItem value="scheduled">Đã lên lịch</SelectItem>
              </SelectContent>
            </Select>

            <Select value={flaggedFilter} onValueChange={setFlaggedFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Vi phạm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="flagged">Có cảnh báo</SelectItem>
                <SelectItem value="normal">Bình thường</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Lọc nâng cao
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Tìm kiếm kênh, người bán..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng livestream</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Đang live</p>
            <p className="text-3xl font-bold text-red-600">{stats.live}</p>
          </div>
          <div className="bg-white border border-orange-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Có cảnh báo</p>
            <p className="text-3xl font-bold text-orange-600">{stats.flagged}</p>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng người xem</p>
            <p className="text-3xl font-bold text-blue-600">{stats.totalViewers.toLocaleString()}</p>
          </div>
        </div>

        {/* Livestreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLivestreams.map((livestream) => {
            const statusBadge = getStatusBadge(livestream.status);
            return (
              <div
                key={livestream.id}
                className={`bg-white rounded-lg border ${
                  livestream.flagged ? "border-red-300" : "border-gray-200"
                } overflow-hidden shadow-sm hover:shadow-md transition-all`}
              >
                {/* Thumbnail */}
                <div className="relative h-48">
                  <ImageWithFallback
                    src={livestream.thumbnail}
                    alt={livestream.channel}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded ${statusBadge.className}`}>
                      {statusBadge.label}
                    </span>
                  </div>
                  {livestream.flagged && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-red-600 text-white p-2 rounded-full">
                        <AlertCircle className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                  {livestream.status === "live" && (
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {livestream.viewers.toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-base">{livestream.channel}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {livestream.platform}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Người bán: {livestream.streamer}</p>

                  {livestream.flagged && livestream.reason && (
                    <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded">
                      <p className="text-xs text-red-700 flex items-start gap-2">
                        <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        {livestream.reason}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs text-gray-600">
                    <div>
                      <p className="text-gray-500">Thời lượng</p>
                      <p className="font-semibold text-gray-900">{livestream.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Sản phẩm</p>
                      <p className="font-semibold text-gray-900">{livestream.products}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Đơn hàng</p>
                      <p className="font-semibold text-gray-900">{livestream.sales}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => openDetail(livestream)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Chi tiết
                    </Button>
                    {!livestream.flagged ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openReport(livestream)}
                        className="text-orange-600"
                      >
                        <Flag className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleClearFlag(livestream.id)}
                        className="text-green-600"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredLivestreams.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">Không tìm thấy livestream nào</p>
          </div>
        )}
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết Livestream</DialogTitle>
            <DialogDescription>Thông tin đầy đủ về phiên livestream</DialogDescription>
          </DialogHeader>
          {selectedLivestream && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mã livestream</label>
                  <p className="text-gray-900 font-semibold">{selectedLivestream.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded ${getStatusBadge(selectedLivestream.status).className}`}>
                    {getStatusBadge(selectedLivestream.status).label}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Kênh</label>
                  <p className="text-gray-900 font-semibold">{selectedLivestream.channel}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Người bán</label>
                  <p className="text-gray-900">{selectedLivestream.streamer}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nền tảng</label>
                  <p className="text-gray-900">{selectedLivestream.platform}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Người xem</label>
                  <p className="text-2xl font-bold text-blue-600">{selectedLivestream.viewers.toLocaleString()}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Thời lượng</label>
                  <p className="text-gray-900">{selectedLivestream.duration}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Sản phẩm</label>
                  <p className="text-gray-900">{selectedLivestream.products}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Đơn hàng</label>
                  <p className="text-gray-900">{selectedLivestream.sales}</p>
                </div>
              </div>
              {selectedLivestream.flagged && selectedLivestream.reason && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Cảnh báo vi phạm</label>
                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <p className="text-sm text-red-700 flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      {selectedLivestream.reason}
                    </p>
                  </div>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Ảnh thumbnail</label>
                <ImageWithFallback
                  src={selectedLivestream.thumbnail}
                  alt={selectedLivestream.channel}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Đóng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Report Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Báo cáo vi phạm</DialogTitle>
            <DialogDescription>Đánh dấu livestream này có hành vi vi phạm</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Lý do vi phạm *</label>
            <textarea
              className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Mô tả chi tiết hành vi vi phạm..."
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReportOpen(false)}>Hủy</Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700" 
              onClick={handleReport}
              disabled={!reportReason}
            >
              Báo cáo vi phạm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
