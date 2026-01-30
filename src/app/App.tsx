import { useState } from "react";
import { Megaphone, FileSpreadsheet } from "lucide-react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import { PromotionTable, type PromotionData } from "@/app/components/promotion-table";
import { PromotionDetailModal } from "@/app/components/promotion-detail-modal";
import { toast, Toaster } from "sonner";

// Mock data
const mockPromotions: PromotionData[] = [
  {
    id: "PM-2026-001",
    name: "Siêu Sale Tết Nguyên Đán - Giảm giá sốc điện tử",
    company: "Công ty TNHH Điện Máy Xanh",
    startDate: "15/01/2026",
    endDate: "28/02/2026",
    location: "Toàn quốc",
    productType: "Điện tử - Điện lạnh",
    discount: 50,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-1",
    collectedAt: "29/01/2026 08:30",
    attachments: [
      { id: "f1", name: "Bang_gia_dien_tu_2026.pdf", type: "pdf", size: "2.3 MB", url: "#" },
      { id: "f2", name: "Hinh_anh_san_pham.jpg", type: "image", size: "1.8 MB", url: "#" },
      { id: "f3", name: "Danh_sach_cua_hang.xlsx", type: "excel", size: "456 KB", url: "#" },
    ],
  },
  {
    id: "PM-2026-002",
    name: "Khuyến mãi thực phẩm tươi sống cuối tuần",
    company: "Siêu thị Co.opMart",
    startDate: "01/02/2026",
    endDate: "15/02/2026",
    location: "TP. Hồ Chí Minh",
    productType: "Thực phẩm - Đồ uống",
    discount: 30,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-2",
    collectedAt: "28/01/2026 14:20",
    attachments: [
      { id: "f4", name: "Catalog_thuc_pham.pdf", type: "pdf", size: "3.2 MB", url: "#" },
      { id: "f5", name: "Dieu_khoan_chuong_trinh.docx", type: "word", size: "128 KB", url: "#" },
    ],
  },
  {
    id: "PM-2026-003",
    name: "Flash Sale thời trang 99% - Cực Hot",
    company: "Shop Online XYZ (chưa xác định)",
    startDate: "20/01/2026",
    endDate: "30/01/2026",
    location: "Online",
    productType: "Thời trang",
    discount: 99,
    sourceType: "unofficial",
    legalStatus: "suspicious",
    sourceUrl: "https://example.com/promotion-3",
    collectedAt: "27/01/2026 10:15",
  },
  {
    id: "PM-2026-004",
    name: "Tuần lễ vàng mỹ phẩm cao cấp",
    company: "Hasaki Beauty & Clinic",
    startDate: "10/02/2026",
    endDate: "20/02/2026",
    location: "Hà Nội, TP.HCM",
    productType: "Mỹ phẩm",
    discount: 40,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-4",
    collectedAt: "26/01/2026 16:45",
  },
  {
    id: "PM-2026-005",
    name: "Giảm giá đồ gia dụng nhập khẩu",
    company: "IKEA Việt Nam",
    startDate: "05/02/2026",
    endDate: "25/02/2026",
    location: "Hà Nội, TP.HCM, Đà Nẵng",
    productType: "Đồ gia dụng",
    discount: 25,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-5",
    collectedAt: "25/01/2026 09:00",
  },
  {
    id: "PM-2026-006",
    name: "Sale bất ngờ - Điện thoại giá rẻ",
    company: "Cửa hàng ABC (Facebook)",
    startDate: "25/01/2026",
    endDate: "31/01/2026",
    location: "Chưa xác định",
    productType: "Điện tử - Điện lạnh",
    discount: 70,
    sourceType: "unofficial",
    legalStatus: "unknown",
    sourceUrl: "https://facebook.com/example",
    collectedAt: "24/01/2026 20:30",
  },
  {
    id: "PM-2026-007",
    name: "Khuyến mãi đồ uống mùa lễ hội",
    company: "Vinamilk",
    startDate: "01/02/2026",
    endDate: "28/02/2026",
    location: "Toàn quốc",
    productType: "Thực phẩm - Đồ uống",
    discount: 20,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-7",
    collectedAt: "23/01/2026 11:00",
  },
  {
    id: "PM-2026-008",
    name: "Mua 1 tặng 1 - Thời trang nam xuân hè",
    company: "Coolmate",
    startDate: "15/02/2026",
    endDate: "15/03/2026",
    location: "Online + Cửa hàng",
    productType: "Thời trang",
    discount: 50,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-8",
    collectedAt: "22/01/2026 15:20",
  },
  {
    id: "PM-2026-009",
    name: "Giảm sốc 90% - Nghi vấn lừa đảo",
    company: "Shop không rõ nguồn gốc",
    startDate: "30/01/2026",
    endDate: "05/02/2026",
    location: "Online",
    productType: "Khác",
    discount: 90,
    sourceType: "unofficial",
    legalStatus: "suspicious",
    sourceUrl: "https://suspicious-site.com/promo",
    collectedAt: "21/01/2026 18:50",
  },
  {
    id: "PM-2026-010",
    name: "Khuyến mãi điện lạnh tiết kiệm năng lượng",
    company: "Samsung Electronics Việt Nam",
    startDate: "20/02/2026",
    endDate: "20/03/2026",
    location: "Toàn quốc",
    productType: "Điện tử - Điện lạnh",
    discount: 35,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-10",
    collectedAt: "20/01/2026 13:40",
  },
  {
    id: "PM-2026-011",
    name: "Sale mỹ phẩm Organic 60%",
    company: "Cocoon Vietnam",
    startDate: "01/02/2026",
    endDate: "14/02/2026",
    location: "Hà Nội, TP.HCM",
    productType: "Mỹ phẩm",
    discount: 60,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-11",
    collectedAt: "19/01/2026 10:25",
  },
  {
    id: "PM-2026-012",
    name: "Ưu đãi đồ gia dụng thông minh",
    company: "Xiaomi Store Vietnam",
    startDate: "10/02/2026",
    endDate: "28/02/2026",
    location: "Online + Offline",
    productType: "Đồ gia dụng",
    discount: 45,
    sourceType: "official",
    legalStatus: "registered",
    sourceUrl: "https://example.com/promotion-12",
    collectedAt: "18/01/2026 14:00",
  },
];

function App() {
  const [filters, setFilters] = useState({
    sourceType: "all",
    legalStatus: "all",
    startDate: "",
    endDate: "",
    location: "all",
    company: "",
    productType: "all",
    discountRange: [0, 100],
  });

  const [filteredData, setFilteredData] = useState<PromotionData[]>(mockPromotions);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    let filtered = [...mockPromotions];

    // Filter by source type
    if (filters.sourceType !== "all") {
      filtered = filtered.filter((item) => item.sourceType === filters.sourceType);
    }

    // Filter by legal status
    if (filters.legalStatus !== "all") {
      filtered = filtered.filter((item) => item.legalStatus === filters.legalStatus);
    }

    // Filter by date range
    if (filters.startDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.startDate.split("/").reverse().join("-"));
        const filterDate = new Date(filters.startDate);
        return itemDate >= filterDate;
      });
    }

    if (filters.endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.endDate.split("/").reverse().join("-"));
        const filterDate = new Date(filters.endDate);
        return itemDate <= filterDate;
      });
    }

    // Filter by location
    if (filters.location !== "all") {
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by company
    if (filters.company) {
      filtered = filtered.filter((item) =>
        item.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    // Filter by product type
    if (filters.productType !== "all") {
      filtered = filtered.filter((item) => item.productType === filters.productType);
    }

    // Filter by discount range
    filtered = filtered.filter(
      (item) =>
        item.discount >= filters.discountRange[0] &&
        item.discount <= filters.discountRange[1]
    );

    setFilteredData(filtered);
    toast.success(`Tìm thấy ${filtered.length} kết quả phù hợp`);
  };

  const handleReset = () => {
    setFilters({
      sourceType: "all",
      legalStatus: "all",
      startDate: "",
      endDate: "",
      location: "all",
      company: "",
      productType: "all",
      discountRange: [0, 100],
    });
    setFilteredData(mockPromotions);
    toast.info("Đã reset bộ lọc");
  };

  const handleExport = () => {
    // Mock export functionality
    const confirmExport = window.confirm(
      `Bạn có muốn xuất ${filteredData.length} bản ghi theo bộ lọc hiện tại không?`
    );

    if (confirmExport) {
      // Simulate export delay
      toast.loading("Đang xuất dữ liệu...");
      setTimeout(() => {
        toast.success(`Đã xuất ${filteredData.length} bản ghi ra file Excel thành công!`);
      }, 1500);
    }
  };

  const handleViewDetail = (promotion: PromotionData) => {
    setSelectedPromotion(promotion);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedPromotion(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Toaster position="top-right" richColors />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Megaphone className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">TIN KHUYẾN MÃI</h1>
              <p className="text-blue-100 mt-1">
                Hệ thống quản lý và giám sát chương trình khuyến mãi
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Stats Cards - Full Width */}
        <div className="w-full mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-blue-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Tổng số chương trình</p>
                  <p className="text-3xl font-bold text-blue-700 mt-1">{mockPromotions.length}</p>
                </div>
                <FileSpreadsheet className="h-10 w-10 text-blue-300" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-green-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Đã đăng ký</p>
                  <p className="text-3xl font-bold text-green-700 mt-1">
                    {mockPromotions.filter((p) => p.legalStatus === "registered").length}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-orange-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Chưa xác định</p>
                  <p className="text-3xl font-bold text-orange-700 mt-1">
                    {mockPromotions.filter((p) => p.legalStatus === "unknown").length}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-700 font-bold">?</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-red-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Nghi vấn</p>
                  <p className="text-3xl font-bold text-red-700 mt-1">
                    {mockPromotions.filter((p) => p.legalStatus === "suspicious").length}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-700 font-bold">!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section - Full Width */}
        <div className="w-full mb-6">
          <PromotionFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
            onReset={handleReset}
            onExport={handleExport}
          />
        </div>

        {/* Data Table - Full Width */}
        <div className="w-full">
          <PromotionTable data={filteredData} onViewDetail={handleViewDetail} />
        </div>
      </main>

      {/* Detail Modal */}
      <PromotionDetailModal
        promotion={selectedPromotion}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
}

export default App;