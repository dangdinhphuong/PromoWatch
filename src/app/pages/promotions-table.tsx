import { useEffect, useState } from "react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import {
  PromotionTable,
  type PromotionData,
  type PromotionPagination,
} from "@/app/components/promotion-table";
import { PromotionDetailModal } from "@/app/components/promotion-detail-modal";
import { AlertDialog } from "@/app/components/ui/alert-dialog";
import { toast } from "sonner";
import * as XLSX from "xlsx";

export function PromotionsTablePage() {
  const [promotions, setPromotions] = useState<PromotionData[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const [pagination, setPagination] = useState<PromotionPagination>({
    page: 1,
    pageSize,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });
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

  const [filteredData, setFilteredData] = useState<PromotionData[]>([]);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  const displayData = filteredData;

  useEffect(() => {
    let isActive = true;

    const loadPromotions = async () => {
      try {
        const response = await fetch(
          `/api/promotions/data?page=${page}&limit=${pageSize}`
        );
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const payload = await response.json();
        const data = Array.isArray(payload?.data) ? payload.data : [];
        const incomingPagination = payload?.pagination;
        const nextPagination: PromotionPagination = incomingPagination
          ? {
              page: incomingPagination.page ?? page,
              pageSize: incomingPagination.pageSize ?? pageSize,
              total: incomingPagination.total ?? data.length,
              totalPages: incomingPagination.totalPages ?? 0,
              hasNext: incomingPagination.hasNext ?? false,
              hasPrev: incomingPagination.hasPrev ?? false,
            }
          : {
              page,
              pageSize,
              total: data.length,
              totalPages: data.length ? 1 : 0,
              hasNext: false,
              hasPrev: false,
            };

        if (isActive) {
          setPromotions(data);
          setFilteredData(data);
          setPagination(nextPagination);
        }
      } catch (error) {
        console.error("Load promotions failed:", error);
        if (isActive) {
          setPromotions([]);
          setFilteredData([]);
          setPagination({
            page,
            pageSize,
            total: 0,
            totalPages: 0,
            hasNext: false,
            hasPrev: false,
          });
          toast.error("Khong tai duoc du lieu khuyen mai.");
        }
      }
    };

    loadPromotions();

    return () => {
      isActive = false;
    };
  }, [page, pageSize]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const parseDate = (dateStr: string | null | undefined): Date | null => {
    if (!dateStr) {
      return null;
    }
    // Parse DD/MM/YYYY or YYYY-MM-DD format
    if (dateStr.includes("/")) {
      const [day, month, year] = dateStr.split("/");
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return Number.isNaN(date.getTime()) ? null : date;
    }
    const date = new Date(dateStr);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const safeLower = (value: string | null | undefined) => (value ?? "").toLowerCase();

  const handleSearch = () => {
    let filtered = [...promotions];

    // 1. Filter by keyword (name, company, code)
    if (filters.keyword.trim()) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter((item) => {
        const name = safeLower(item.name);
        const company = safeLower(item.company);
        const code = safeLower(item.code);
        return name.includes(keyword) || company.includes(keyword) || code.includes(keyword);
      });
    }

    // 2. Filter by applicable time (time.start / time.end)
    if (filters.applicableStartDate) {
      const filterDate = new Date(filters.applicableStartDate);
      filterDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter((item) => {
        const itemStartDate = parseDate(item.time?.start);
        if (!itemStartDate) return false;
        itemStartDate.setHours(0, 0, 0, 0);
        return itemStartDate >= filterDate;
      });
    }

    if (filters.applicableEndDate) {
      const filterDate = new Date(filters.applicableEndDate);
      filterDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter((item) => {
        const itemEndDate = parseDate(item.time?.end);
        if (!itemEndDate) return false;
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
        if (!item.crawledAt) return false;
        const itemDate = new Date(item.crawledAt);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= filterDate;
      });
    }

    if (filters.collectedEndDate) {
      const filterDate = new Date(filters.collectedEndDate);
      filterDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter((item) => {
        if (!item.crawledAt) return false;
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
    setFilteredData(promotions);
    toast.info("Đã reset bộ lọc");
  };

  const handleExport = () => {
    setIsExportDialogOpen(true);
  };

  const handleConfirmExport = () => {
    try {
      toast.loading("Đang xuất dữ liệu...");
      
      // Export ALL data, not just filtered data
      const excelData = promotions.map((item, index) => ({
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
        toast.success(`Đã xuất ${promotions.length} bản ghi ra file Excel thành công!`);
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

  const hasActiveFilters =
    filters.keyword.trim().length > 0 ||
    filters.applicableStartDate ||
    filters.applicableEndDate ||
    filters.type !== "all" ||
    filters.source !== "all" ||
    filters.collectedStartDate ||
    filters.collectedEndDate;
  const tablePagination = hasActiveFilters ? undefined : pagination;

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
        <PromotionTable
          data={displayData}
          onViewDetail={handleViewDetail}
          pagination={tablePagination}
          onPageChange={tablePagination ? setPage : undefined}
        />
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
        description={`Bạn có muốn xuất tất cả ${promotions.length} bản ghi không?`}
      />
    </div>
  );
}
