import { useState } from "react";
import { Search, Filter, Download, Eye, MapPin, Calendar, Plus, Edit2, Trash2, Upload } from "lucide-react";
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
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

interface PriceRecord {
  id: string;
  commodity: string;
  specification: string;
  location: string;
  price: number;
  unit: string;
  source: string;
  collectedTime: string;
  status: "verified" | "pending" | "flagged";
  evidence?: string;
}

const mockPriceData: PriceRecord[] = [
  {
    id: "P001",
    commodity: "Xăng RON 95",
    specification: "Xăng sinh học E5",
    location: "Hà Nội",
    price: 25300,
    unit: "VNĐ/lít",
    source: "Doanh nghiệp",
    collectedTime: "03/02/2026 09:30",
    status: "verified",
    evidence: "https://example.com/evidence1.jpg",
  },
  {
    id: "P002",
    commodity: "Xăng RON 95",
    specification: "Xăng sinh học E5",
    location: "TP. Hồ Chí Minh",
    price: 25500,
    unit: "VNĐ/lít",
    source: "Sở Công Thương",
    collectedTime: "03/02/2026 10:15",
    status: "verified",
  },
  {
    id: "P003",
    commodity: "Dầu Diesel",
    specification: "DO 0.05S",
    location: "Đà Nẵng",
    price: 22800,
    unit: "VNĐ/lít",
    source: "QLTT",
    collectedTime: "03/02/2026 08:45",
    status: "pending",
  },
  {
    id: "P004",
    commodity: "Gas LPG",
    specification: "Bình 12kg",
    location: "Hải Phòng",
    price: 385000,
    unit: "VNĐ/bình",
    source: "Doanh nghiệp",
    collectedTime: "02/02/2026 16:20",
    status: "flagged",
  },
  {
    id: "P005",
    commodity: "Xăng RON 92",
    specification: "Tiêu chuẩn",
    location: "Cần Thơ",
    price: 24100,
    unit: "VNĐ/lít",
    source: "Sở Công Thương",
    collectedTime: "03/02/2026 07:00",
    status: "verified",
  },
];

export function PriceDatabase() {
  const [selectedRecord, setSelectedRecord] = useState<PriceRecord | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "flagged":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "verified":
        return "Đã xác minh";
      case "pending":
        return "Chờ duyệt";
      case "flagged":
        return "Cần kiểm tra";
      default:
        return status;
    }
  };

  const handleViewDetail = (record: PriceRecord) => {
    setSelectedRecord(record);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6 pb-20 lg:pb-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Cơ sở dữ liệu giá tập trung</h1>
          <p className="text-sm sm:text-base text-gray-600">Dữ liệu giá từ địa phương, doanh nghiệp và thị trường</p>
        </div>

        {/* Filter Panel */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Mặt hàng</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Chọn mặt hàng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="gasoline">Xăng</SelectItem>
                  <SelectItem value="diesel">Dầu diesel</SelectItem>
                  <SelectItem value="lpg">Gas LPG</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Loại giá</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Loại giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="listed">Niêm yết</SelectItem>
                  <SelectItem value="transaction">Giao dịch</SelectItem>
                  <SelectItem value="actual">Thực tế</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Tỉnh/Thành phố</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Khu vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toàn quốc</SelectItem>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                  <SelectItem value="danang">Đà Nẵng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Nguồn dữ liệu</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Nguồn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="enterprise">Doanh nghiệp</SelectItem>
                  <SelectItem value="local">Sở Công Thương</SelectItem>
                  <SelectItem value="market">QLTT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Tìm kiếm theo tên mặt hàng, khu vực..."
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Lọc nâng cao
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Download className="h-4 w-4" />
              Xuất Excel
            </Button>
          </div>
        </div>

        {/* Price Records Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Mặt hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Quy cách
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Khu vực
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Nguồn
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Thời gian
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
                {mockPriceData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{record.commodity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{record.specification}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" />
                        {record.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {record.price.toLocaleString()} {record.unit}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{record.source}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="h-3 w-3" />
                        {record.collectedTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          record.status
                        )}`}
                      >
                        {getStatusText(record.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewDetail(record)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Xem
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {mockPriceData.map((record) => (
              <div key={record.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-gray-900">{record.commodity}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      record.status
                    )}`}
                  >
                    {getStatusText(record.status)}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mb-2">{record.specification}</p>

                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl font-bold text-blue-600">
                    {record.price.toLocaleString()}
                    <span className="text-xs text-gray-500 ml-1">{record.unit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <MapPin className="h-3 w-3" />
                    {record.location}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Nguồn: {record.source}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {record.collectedTime}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleViewDetail(record)}
                  className="w-full text-blue-600 hover:text-blue-700"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Xem chi tiết
                </Button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-3 sm:px-6 py-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-gray-600">Hiển thị 1-5 của 247 bản ghi</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Trước
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white text-xs">
                1
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs">
                2
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs">
                3
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Sau
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết bản ghi giá</DialogTitle>
            <DialogDescription>Thông tin chi tiết và minh chứng</DialogDescription>
          </DialogHeader>
          {selectedRecord && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mặt hàng</label>
                  <p className="text-gray-900 font-semibold">{selectedRecord.commodity}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Quy cách</label>
                  <p className="text-gray-900">{selectedRecord.specification}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Giá</label>
                  <p className="text-2xl font-bold text-blue-600">
                    {selectedRecord.price.toLocaleString()} {selectedRecord.unit}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">So với kỳ trước</label>
                  <p className="text-green-600 font-semibold">+5.2% ↑</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Khu vực</label>
                  <p className="text-gray-900">{selectedRecord.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Nguồn dữ liệu</label>
                  <p className="text-gray-900">{selectedRecord.source}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Thời gian thu thập</label>
                  <p className="text-gray-900">{selectedRecord.collectedTime}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      selectedRecord.status
                    )}`}
                  >
                    {getStatusText(selectedRecord.status)}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Minh chứng</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  {selectedRecord.evidence ? (
                    <div className="text-sm text-gray-600">
                      📷 Ảnh chụp niêm yết giá - <a href={selectedRecord.evidence} className="text-blue-600 underline">Xem ảnh</a>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">Chưa có minh chứng</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Nhật ký kiểm duyệt</label>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Đã phê duyệt bởi <strong>Nguyễn Văn A</strong></p>
                      <p className="text-xs text-gray-500">03/02/2026 10:45</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Báo cáo bởi <strong>Sở Công Thương Hà Nội</strong></p>
                      <p className="text-xs text-gray-500">03/02/2026 09:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}