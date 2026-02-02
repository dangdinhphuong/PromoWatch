import { useState } from "react";
import { FileSpreadsheet, Shield, AlertTriangle, Database } from "lucide-react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import { PromotionTable, type PromotionData } from "@/app/components/promotion-table";
import { PromotionDetailModal } from "@/app/components/promotion-detail-modal";
import { toast } from "sonner";

// Mock data - real data structure from the system
const mockPromotions: PromotionData[] = [
  {
    id: null,
    code: "G22.99-251225-020175",
    name: "Chương trình chăm sóc khách hàng thường xuyên lâu năm",
    company: "MOBIFONE NGHỆ AN - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE",
    time: {
      start: "01/01/2026",
      end: "31/12/2026"
    },
    location: "Tỉnh Nghệ An",
    productType: null,
    discountPercent: null,
    promotionMethod: null,
    type: "official",
    agencyId: "-1",
    total: 36662,
    rowStt: 427,
    source: "dichvucong",
    sourceUrl: null,
    crawledAt: "2026-02-02T07:04:37.514Z",
    meta: {
      rawA: null,
      rawB: {
        url: null,
        title: "Chương trình chăm sóc khách hàng thường xuyên lâu năm",
        company: "MOBIFONE NGHỆ AN - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE",
        content: "Chi tiết theo File đính kèm",
        file: "20251225/promotion_96678922-c28c-4cfc-8927-fa00bd3293f5_1766649068050_signed.pdf",
        timeRange: "01/01/2026 - 31/12/2026"
      }
    }
  },
  {
    id: 5269,
    code: "nhan-2-nhan-4-tich-diem-don-hang-unilever",
    name: "Nhân 2 – Nhân 4 tích điểm đơn hàng Unilever",
    company: "Bách Hóa Xanh",
    time: {
      start: "02/12/2025",
      end: "31/12/2025"
    },
    location: "Toàn quốc",
    productType: "SP tại Bách Hoá Xanh",
    discountPercent: null,
    promotionMethod: "Khách hàng thường xuyên",
    type: "official",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "vietrade",
    sourceUrl: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5269/nhan-2-nhan-4-tich-diem-don-hang-unilever",
    crawledAt: "2026-02-02T04:42:08.906Z",
    meta: {
      rawA: null,
      rawB: {
        url: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5269/nhan-2-nhan-4-tich-diem-don-hang-unilever",
        title: "Nhân 2 – Nhân 4 tích điểm đơn hàng Unilever",
        company: "Bách Hóa Xanh",
        timeRange: "02/12/2025 - 31/12/2025"
      }
    }
  },
  {
    id: 5270,
    code: "chuong-trinh-kh-than-thiet-t122025",
    name: "Chương trình KH thân thiết T12/2025",
    company: "Highlands Coffee",
    time: {
      start: "19/12/2025",
      end: "31/01/2026"
    },
    location: "Toàn quốc",
    productType: "Menu Highlands",
    discountPercent: null,
    promotionMethod: "Khách hàng thường xuyên",
    type: "official",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "vietrade",
    sourceUrl: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5270/chuong-trinh-kh-than-thiet-t122025",
    crawledAt: "2026-02-02T04:42:10.210Z",
    meta: {
      rawA: null,
      rawB: {
        url: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5270/chuong-trinh-kh-than-thiet-t122025",
        title: "Chương trình KH thân thiết T12/2025",
        company: "Highlands Coffee",
        timeRange: "19/12/2025 - 31/01/2026"
      }
    }
  },
  {
    id: 5271,
    code: "khuyen-mai-xuan-2026",
    name: "Khuyến mại Xuân 2026",
    company: "Imexpharm CN Cửu Long 5",
    time: {
      start: "03/12/2025",
      end: "15/12/2025"
    },
    location: "Cà Mau",
    productType: "Dược phẩm",
    discountPercent: null,
    promotionMethod: "KH thường xuyên",
    type: "official",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "vietrade",
    sourceUrl: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5271/khuyen-mai-xuan-2026",
    crawledAt: "2026-02-02T04:42:11.559Z",
    meta: {
      rawA: null,
      rawB: {
        url: "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5271/khuyen-mai-xuan-2026",
        title: "Khuyến mại Xuân 2026",
        company: "Imexpharm CN Cửu Long 5",
        timeRange: "03/12/2025 - 15/12/2025"
      }
    }
  },
  {
    id: null,
    code: "paulas-choice-khuyen-mai",
    name: "Mừng Lazada 9 Tuổi, Paula's Choice Tặng Quà To Nè Bạn Ơi!",
    company: "Lazada",
    time: {
      start: "31/03/2021",
      end: "31/03/2021"
    },
    location: null,
    productType: null,
    discountPercent: null,
    promotionMethod: null,
    type: "unofficial",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "crawl",
    sourceUrl: "https://bloggiamgia.vn/paulas-choice-khuyen-mai",
    crawledAt: "2026-02-01T10:00:00.000Z",
    meta: {
      rawA: null,
      rawB: {
        platform: "Lazada",
        sourceName: "Bloggiamgia.vn",
        hasHtml: true,
        content: "HOT HOT HOT! Sự kiện lớn nhất được chờ đợi trong năm đã đến rồi. Paula's Choice đang tổ chức MỪNG SINH NHẬT LẦN THỨ 9 CỦA LAZADA đó!"
      }
    }
  }
];

export function PromotionsPage() {
  const [filters, setFilters] = useState({
    type: "all",
    source: "all",
    startDate: "",
    endDate: "",
    location: "",
    company: "",
    productType: "",
    discountRange: [0, 100],
  });

  const [filteredData, setFilteredData] = useState<PromotionData[]>(mockPromotions);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const displayData = filteredData;

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    let filtered = [...mockPromotions];

    // Filter by type
    if (filters.type !== "all") {
      filtered = filtered.filter((item) => item.type === filters.type);
    }

    // Filter by source
    if (filters.source !== "all") {
      filtered = filtered.filter((item) => item.source === filters.source);
    }

    // Filter by date range
    if (filters.startDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.time.start.split("/").reverse().join("-"));
        const filterDate = new Date(filters.startDate);
        return itemDate >= filterDate;
      });
    }

    if (filters.endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.time.end.split("/").reverse().join("-"));
        const filterDate = new Date(filters.endDate);
        return itemDate <= filterDate;
      });
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((item) =>
        item.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by company
    if (filters.company) {
      filtered = filtered.filter((item) =>
        item.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    // Filter by product type
    if (filters.productType) {
      filtered = filtered.filter((item) =>
        item.productType?.toLowerCase().includes(filters.productType.toLowerCase())
      );
    }

    // Filter by discount range (only if discountPercent exists)
    filtered = filtered.filter(
      (item) =>
        item.discountPercent === null ||
        (item.discountPercent >= filters.discountRange[0] &&
          item.discountPercent <= filters.discountRange[1])
    );

    setFilteredData(filtered);
    toast.success(`Tìm thấy ${filtered.length} kết quả phù hợp`);
  };

  const handleReset = () => {
    setFilters({
      type: "all",
      source: "all",
      startDate: "",
      endDate: "",
      location: "",
      company: "",
      productType: "",
      discountRange: [0, 100],
    });
    setFilteredData(mockPromotions);
    toast.info("Đã reset bộ lọc");
  };

  const handleExport = () => {
    const confirmExport = window.confirm(
      `Bạn có muốn xuất ${displayData.length} bản ghi theo bộ lọc hiện tại không?`
    );

    if (confirmExport) {
      toast.loading("Đang xuất dữ liệu...");
      setTimeout(() => {
        toast.success(`Đã xuất ${displayData.length} bản ghi ra file Excel thành công!`);
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

  const officialCount = mockPromotions.filter((p) => p.type === "official").length;
  const unofficialCount = mockPromotions.filter((p) => p.type === "unofficial").length;
  const dichvucongCount = mockPromotions.filter((p) => p.source === "dichvucong").length;
  const vietradeCount = mockPromotions.filter((p) => p.source === "vietrade").length;
  const crawlCount = mockPromotions.filter((p) => p.source === "crawl").length;

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="w-full mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg border border-blue-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tổng số chương trình</p>
                <p className="text-3xl font-bold text-blue-700 mt-1">{displayData.length}</p>
              </div>
              <FileSpreadsheet className="h-10 w-10 text-blue-300" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-green-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chính thức</p>
                <p className="text-3xl font-bold text-green-700 mt-1">
                  {displayData.filter((p) => p.type === "official").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-orange-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Không chính thức</p>
                <p className="text-3xl font-bold text-orange-700 mt-1">
                  {displayData.filter((p) => p.type === "unofficial").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Dịch vụ công</p>
                <p className="text-3xl font-bold text-purple-700 mt-1">
                  {displayData.filter((p) => p.source === "dichvucong").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Database className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-cyan-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Vietrade</p>
                <p className="text-3xl font-bold text-cyan-700 mt-1">
                  {displayData.filter((p) => p.source === "vietrade").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <Database className="h-6 w-6 text-cyan-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full mb-6">
        <PromotionFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleReset}
          onExport={handleExport}
        />
      </div>

      {/* Data Table */}
      <div className="w-full">
        <PromotionTable data={displayData} onViewDetail={handleViewDetail} />
      </div>

      {/* Detail Modal */}
      <PromotionDetailModal
        promotion={selectedPromotion}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
}
