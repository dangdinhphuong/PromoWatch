import { useState } from "react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import { PromotionTable, type PromotionData } from "@/app/components/promotion-table";
import { PromotionDetailModal } from "@/app/components/promotion-detail-modal";
import { AlertDialog } from "@/app/components/ui/alert-dialog";
import { toast } from "sonner";
import * as XLSX from "xlsx";

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

export function PromotionsTablePage() {
  const [filters, setFilters] = useState({
    keyword: "",
    applicableTimeRange: "all",
    applicableStartDate: "",
    applicableEndDate: "",
    type: "all",
    source: "all",
    collectedTimeRange: "all",
    collectedStartDate: "",
    collectedEndDate: "",
  });

  const [filteredData, setFilteredData] = useState<PromotionData[]>(mockPromotions);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  const displayData = filteredData;

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const parseDate = (dateStr: string): Date => {
    // Parse DD/MM/YYYY or YYYY-MM-DD format
    if (dateStr.includes("/")) {
      const [day, month, year] = dateStr.split("/");
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      return new Date(dateStr);
    }
  };

  const handleSearch = () => {
    let filtered = [...mockPromotions];

    // 1. Filter by keyword (name, company, code)
    if (filters.keyword.trim()) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter((item) => {
        const name = item.name.toLowerCase();
        const company = item.company.toLowerCase();
        const code = item.code.toLowerCase();
        return name.includes(keyword) || company.includes(keyword) || code.includes(keyword);
      });
    }

    // 2. Filter by applicable time (time.start / time.end)
    if (filters.applicableStartDate) {
      const filterDate = new Date(filters.applicableStartDate);
      filterDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter((item) => {
        const itemStartDate = parseDate(item.time.start);
        itemStartDate.setHours(0, 0, 0, 0);
        return itemStartDate >= filterDate;
      });
    }

    if (filters.applicableEndDate) {
      const filterDate = new Date(filters.applicableEndDate);
      filterDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter((item) => {
        const itemEndDate = parseDate(item.time.end);
        itemEndDate.setHours(23, 59, 59, 999);
        return itemEndDate <= filterDate;
      });
    }

    // 3. Filter by type (official/unofficial)
    if (filters.type !== "all") {
      filtered = filtered.filter((item) => item.type === filters.type);
    }

    // 4. Filter by source
    if (filters.source !== "all") {
      filtered = filtered.filter((item) => item.source === filters.source);
    }

    // 5. Filter by collected time (crawledAt)
    if (filters.collectedStartDate) {
      const filterDate = new Date(filters.collectedStartDate);
      filterDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.crawledAt);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= filterDate;
      });
    }

    if (filters.collectedEndDate) {
      const filterDate = new Date(filters.collectedEndDate);
      filterDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.crawledAt);
        itemDate.setHours(23, 59, 59, 999);
        return itemDate <= filterDate;
      });
    }

    setFilteredData(filtered);
    
    // Show detailed filter info
    const filterInfo = [];
    if (filters.keyword) filterInfo.push(`từ khóa "${filters.keyword}"`);
    if (filters.type !== "all") filterInfo.push(`loại ${filters.type === "official" ? "chính thức" : "không chính thức"}`);
    if (filters.source !== "all") filterInfo.push(`nguồn ${filters.source}`);
    
    if (filterInfo.length > 0) {
      toast.success(`Tìm thấy ${filtered.length} kết quả với ${filterInfo.join(", ")}`);
    } else {
      toast.success(`Tìm thấy ${filtered.length} kết quả`);
    }
  };

  const handleReset = () => {
    setFilters({
      keyword: "",
      applicableTimeRange: "all",
      applicableStartDate: "",
      applicableEndDate: "",
      type: "all",
      source: "all",
      collectedTimeRange: "all",
      collectedStartDate: "",
      collectedEndDate: "",
    });
    setFilteredData(mockPromotions);
    toast.info("Đã reset bộ lọc");
  };

  const handleExport = () => {
    setIsExportDialogOpen(true);
  };

  const handleConfirmExport = () => {
    try {
      toast.loading("Đang xuất dữ liệu...");
      
      // Export ALL mock data, not just filtered data
      const excelData = mockPromotions.map((item, index) => ({
        "STT": index + 1,
        "Tên chương trình": item.name,
        "Công ty / Đơn vị": item.company,
        "Ngày bắt đầu": item.time.start,
        "Ngày kết thúc": item.time.end,
        "Địa điểm": item.location || "N/A",
        "Loại mặt hàng": item.productType || "N/A",
        "Nguồn": item.source === "dichvucong" ? "Dịch vụ công" : 
                 item.source === "vietrade" ? "Vietrade" : "Thu thập tự động",
        "Tính pháp lý": item.type === "official" ? "Chính thức" : "Không chính thức",
        "Thời điểm thu thập": new Date(item.crawledAt).toLocaleString("vi-VN"),
        "Link nguồn": item.sourceUrl || "N/A",
      }));

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(excelData);

      // Set column widths
      ws['!cols'] = [
        { wch: 5 },   // STT
        { wch: 50 },  // Tên chương trình
        { wch: 40 },  // Công ty
        { wch: 12 },  // Ngày bắt đầu
        { wch: 12 },  // Ngày kết thúc
        { wch: 20 },  // Địa điểm
        { wch: 20 },  // Loại mặt hàng
        { wch: 15 },  // Nguồn
        { wch: 15 },  // Tính pháp lý
        { wch: 20 },  // Thời điểm thu thập
        { wch: 50 },  // Link nguồn
      ];

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Tin Khuyến Mãi");

      // Generate file name with current date
      const now = new Date();
      const dateStr = now.toLocaleDateString("vi-VN").replace(/\//g, "-");
      const timeStr = now.toLocaleTimeString("vi-VN", { hour12: false }).replace(/:/g, "-");
      const fileName = `TinKhuyenMai_${dateStr}_${timeStr}.xlsx`;

      // Write file
      XLSX.writeFile(wb, fileName);

      setTimeout(() => {
        toast.dismiss();
        toast.success(`Đã xuất ${mockPromotions.length} bản ghi ra file Excel thành công!`);
      }, 800);
    } catch (error) {
      toast.dismiss();
      toast.error("Có lỗi xảy ra khi xuất dữ liệu. Vui lòng thử lại!");
      console.error("Export error:", error);
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
    <div className="p-6">
      {/* Filter Section */}
      <div className="w-full mb-4">
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

      {/* Export Dialog */}
      <AlertDialog
        isOpen={isExportDialogOpen}
        onClose={() => setIsExportDialogOpen(false)}
        onConfirm={handleConfirmExport}
        title="Xuất dữ liệu"
        description={`Bạn có muốn xuất tất cả ${mockPromotions.length} bản ghi không?`}
      />
    </div>
  );
}