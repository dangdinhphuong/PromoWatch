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

const initialFilters = {
  keyword: "",
  applicableTimeRange: "all",
  applicableStartDate: "",
  applicableEndDate: "",
  type: "all",
  source: "all",
  collectedTimeRange: "all",
  collectedStartDate: "",
  collectedEndDate: "",
};

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
  const [filters, setFilters] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);
  const [pendingToast, setPendingToast] = useState<string | null>(null);

  const [filteredData, setFilteredData] = useState<PromotionData[]>([]);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  const displayData = filteredData;

  useEffect(() => {
    const controller = new AbortController();

    const buildQuery = (targetPage: number) => {
      const params = new URLSearchParams();
      params.set("page", String(targetPage));
      params.set("limit", String(pageSize));

      const addParam = (key: string, value: string) => {
        if (!value || value === "all") return;
        params.set(key, value);
      };

      addParam("keyword", appliedFilters.keyword.trim());
      addParam("type", appliedFilters.type);
      addParam("source", appliedFilters.source);
      addParam("applicableStartDate", appliedFilters.applicableStartDate);
      addParam("applicableEndDate", appliedFilters.applicableEndDate);
      addParam("collectedStartDate", appliedFilters.collectedStartDate);
      addParam("collectedEndDate", appliedFilters.collectedEndDate);

      return params.toString();
    };

    const loadPromotions = async () => {
      try {
        const query = buildQuery(page);
        const response = await fetch(`/api/promotions/data?${query}`, {
          signal: controller.signal,
        });
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

        setPromotions(data);
        setFilteredData(data);
        setPagination(nextPagination);

        if (pendingToast !== null) {
          const suffix = pendingToast ? ` với ${pendingToast}` : "";
          toast.success(`Tìm thấy ${nextPagination.total} kết quả${suffix}`);
          setPendingToast(null);
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        console.error("Load promotions failed:", error);
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
        toast.error("Không tải được dữ liệu khuyến mãi.");
        if (pendingToast !== null) {
          setPendingToast(null);
        }
      }
    };

    loadPromotions();

    return () => {
      controller.abort();
    };
  }, [page, pageSize, appliedFilters]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  const handleSearch = () => {
    const filterInfo: string[] = [];
    if (filters.keyword.trim()) filterInfo.push(`từ khóa "${filters.keyword.trim()}"`);
    if (filters.type !== "all") {
      filterInfo.push(
        `loại ${filters.type === "official" ? "chính thức" : "không chính thức"}`
      );
    }
    if (filters.source !== "all") filterInfo.push(`nguồn ${filters.source}`);

    setPendingToast(filterInfo.join(", "));
    setPage(1);
    setAppliedFilters({ ...filters });
  };
  const handleReset = () => {
    setFilters({ ...initialFilters });
    setAppliedFilters({ ...initialFilters });
    setPage(1);
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

  const tablePagination = pagination;

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
