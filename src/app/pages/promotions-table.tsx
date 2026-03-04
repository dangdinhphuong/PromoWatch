import { useEffect, useState } from "react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import { PromotionTable, type PromotionData } from "@/app/components/promotion-table";
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

const DEFAULT_PAGE_SIZE = 40;

function mapSourceLabel(source: PromotionData["source"]) {
  if (source === "dichvucong") return "Dịch vụ công";
  if (source === "vietrade") return "Vietrade";
  if (source === "bloggiamgia") return "Blog Giảm Giá";
  return "Thu thập tự động";
}

function formatDateTime(value: string | null) {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "N/A";
  return date.toLocaleString("vi-VN");
}

export function PromotionsTablePage() {
  const [filters, setFilters] = useState({ ...initialFilters });
  const [appliedFilters, setAppliedFilters] = useState({ ...initialFilters });
  const [pendingToast, setPendingToast] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });

  const [filteredData, setFilteredData] = useState<PromotionData[]>([]);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const buildQuery = () => {
      const params = new URLSearchParams();

      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.pageSize));

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
        const query = buildQuery();
        const response = await fetch(`/api/promotions/data?${query}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const payload = await response.json();
        const data = Array.isArray(payload?.data) ? payload.data : [];
        setFilteredData(data);
        const payloadPagination = payload?.pagination;
        setPagination((prev) => ({
          page: Number(payloadPagination?.page) || prev.page,
          pageSize: Number(payloadPagination?.pageSize) || prev.pageSize,
          total: Number(payloadPagination?.total) || 0,
          totalPages: Number(payloadPagination?.totalPages) || 0,
          hasNext: Boolean(payloadPagination?.hasNext),
          hasPrev: Boolean(payloadPagination?.hasPrev),
        }));

        if (pendingToast !== null) {
          const total = payloadPagination?.total ?? data.length;
          const suffix = pendingToast ? ` với ${pendingToast}` : "";
          toast.success(`Tìm thấy ${total} kết quả${suffix}`);
          setPendingToast(null);
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        console.error("Load promotions failed:", error);
        setFilteredData([]);
        setPagination((prev) => ({
          ...prev,
          total: 0,
          totalPages: 0,
          hasNext: false,
          hasPrev: false,
        }));
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
  }, [appliedFilters, pendingToast, pagination.page, pagination.pageSize]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const filterInfo: string[] = [];
    if (filters.keyword.trim()) filterInfo.push(`từ khóa "${filters.keyword.trim()}"`);
    if (filters.type !== "all") {
      filterInfo.push(`loại ${filters.type === "official" ? "chính thức" : "không chính thức"}`);
    }
    if (filters.source !== "all") filterInfo.push(`nguồn ${filters.source}`);

    setPendingToast(filterInfo.join(", "));
    setPagination((prev) => ({ ...prev, page: 1 }));
    setAppliedFilters({ ...filters });
  };

  const handleReset = () => {
    setFilters({ ...initialFilters });
    setAppliedFilters({ ...initialFilters });
    setPendingToast(null);
    setPagination((prev) => ({
      ...prev,
      page: 1,
      total: 0,
      totalPages: 0,
      hasNext: false,
      hasPrev: false,
    }));
    toast.info("Đã reset bộ lọc");
  };

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    if (pagination.totalPages > 0 && page > pagination.totalPages) return;
    setPagination((prev) => ({ ...prev, page }));
  };

  const handleExport = () => {
    setIsExportDialogOpen(true);
  };

  const handleConfirmExport = () => {
    try {
      toast.loading("Đang xuất dữ liệu...");

      const excelData = filteredData.map((item, index) => ({
        STT: index + 1,
        "Tên chương trình": item.name,
        "Công ty / Đơn vị": item.company,
        "Ngày bắt đầu": item.time.start,
        "Ngày kết thúc": item.time.end,
        "Địa điểm": item.location || "N/A",
        "Loại mặt hàng": item.productType || "N/A",
        "Nguồn": mapSourceLabel(item.source),
        "Tính pháp lý": item.type === "official" ? "Chính thức" : "Không chính thức",
        "Thời điểm thu thập": formatDateTime(item.crawledAt),
        "Link nguồn": item.sourceUrl || "N/A",
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(excelData);

      ws["!cols"] = [
        { wch: 5 },
        { wch: 50 },
        { wch: 40 },
        { wch: 12 },
        { wch: 12 },
        { wch: 20 },
        { wch: 20 },
        { wch: 15 },
        { wch: 15 },
        { wch: 20 },
        { wch: 50 },
      ];

      XLSX.utils.book_append_sheet(wb, ws, "Tin Khuyến Mãi");

      const now = new Date();
      const dateStr = now.toLocaleDateString("vi-VN").replace(/\//g, "-");
      const timeStr = now.toLocaleTimeString("vi-VN", { hour12: false }).replace(/:/g, "-");
      const fileName = `TinKhuyenMai_${dateStr}_${timeStr}.xlsx`;

      XLSX.writeFile(wb, fileName);

      setTimeout(() => {
        toast.dismiss();
        toast.success(`Đã xuất ${filteredData.length} bản ghi ra file Excel thành công!`);
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
    <div className="p-3 sm:p-4 lg:p-6 pb-20 lg:pb-6">
      {/* Filter Section */}
      <div className="w-full mb-3 sm:mb-4">
        <PromotionFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleReset}
          onExport={handleExport}
        />
      </div>

      {/* Data Table */}
      <div className="w-full overflow-x-auto">
        <PromotionTable
          data={filteredData}
          onViewDetail={handleViewDetail}
          pagination={pagination}
          onPageChange={handlePageChange}
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
        description={`Bạn có muốn xuất tất cả ${filteredData.length} bản ghi không?`}
      />
    </div>
  );
}
