import { ChevronDown, ChevronUp, Search, Download, Filter } from "lucide-react";
import { PromotionFilters } from "../pages/promotions";
import { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

interface PromotionFilterProps {
  onSearch: () => void;
  onReset: () => void;
  onExport: () => void;
  filters: PromotionFilters;
  onFilterChange: (key: string, value: any) => void;
}

export function PromotionFilter({
  onSearch,
  onReset,
  onExport,
  filters,
  onFilterChange,
}: PromotionFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleApplicableTimeRangeChange = (value: string) => {
    onFilterChange("applicableTimeRange", value);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (value === "today") {
      const todayStr = today.toISOString().split("T")[0];
      onFilterChange("applicableStartDate", todayStr);
      onFilterChange("applicableEndDate", todayStr);
    } else if (value === "next7days") {
      const next7 = new Date(today);
      next7.setDate(today.getDate() + 7);
      onFilterChange("applicableStartDate", today.toISOString().split("T")[0]);
      onFilterChange("applicableEndDate", next7.toISOString().split("T")[0]);
    } else if (value === "thisMonth") {
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      onFilterChange("applicableStartDate", firstDay.toISOString().split("T")[0]);
      onFilterChange("applicableEndDate", lastDay.toISOString().split("T")[0]);
    } else if (value === "thisQuarter") {
      const quarter = Math.floor(today.getMonth() / 3);
      const firstDay = new Date(today.getFullYear(), quarter * 3, 1);
      const lastDay = new Date(today.getFullYear(), quarter * 3 + 3, 0);
      onFilterChange("applicableStartDate", firstDay.toISOString().split("T")[0]);
      onFilterChange("applicableEndDate", lastDay.toISOString().split("T")[0]);
    }
  };

  const handleCollectedTimeRangeChange = (value: string) => {
    onFilterChange("collectedTimeRange", value);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (value === "today") {
      const todayStr = today.toISOString().split("T")[0];
      onFilterChange("collectedStartDate", todayStr);
      onFilterChange("collectedEndDate", todayStr);
    } else if (value === "last7days") {
      const last7 = new Date(today);
      last7.setDate(today.getDate() - 7);
      onFilterChange("collectedStartDate", last7.toISOString().split("T")[0]);
      onFilterChange("collectedEndDate", today.toISOString().split("T")[0]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow">
      {/* Header with quick actions */}
      <div className="p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-700" />
          <h2 className="text-sm sm:text-base font-semibold text-gray-900">Bộ lọc</h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            Tìm kiếm nâng cao
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
            onClick={onSearch}
            title="Tìm kiếm"
          >
            <Search className="w-4 h-4 text-gray-700" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
            onClick={onExport}
            title="Export"
          >
            <Download className="w-4 h-4 text-gray-700" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Thu gọn" : "Mở rộng"}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-700" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          {/* Row 1: Keyword */}
          <div className="space-y-1.5">
            <Label htmlFor="keyword" className="text-xs sm:text-sm font-medium">Từ khóa</Label>
            <Input
              id="keyword"
              type="text"
              placeholder="Tìm theo tên, công ty, mã..."
              value={filters.keyword}
              onChange={(e) => onFilterChange("keyword", e.target.value)}
              className="h-9 text-sm"
            />
          </div>

          {/* Row 2: Time range filters - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {/* Thời gian áp dụng */}
            <div className="space-y-1.5 p-3 bg-blue-50 rounded-md border border-blue-200">
              <Label className="text-xs sm:text-sm font-medium text-gray-900">Thời gian áp dụng</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Select value={filters.applicableTimeRange} onValueChange={handleApplicableTimeRangeChange}>
                  <SelectTrigger className="h-9 text-xs bg-white">
                    <SelectValue placeholder="Tất cả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="today">Hôm nay</SelectItem>
                    <SelectItem value="next7days">7 ngày tới</SelectItem>
                    <SelectItem value="thisMonth">Tháng này</SelectItem>
                    <SelectItem value="thisQuarter">Quý này</SelectItem>
                    <SelectItem value="custom">Tùy chọn</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={filters.applicableStartDate}
                  onChange={(e) => {
                    onFilterChange("applicableStartDate", e.target.value);
                    onFilterChange("applicableTimeRange", "custom");
                  }}
                  className="h-9 text-xs bg-white"
                />
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={filters.applicableEndDate}
                  onChange={(e) => {
                    onFilterChange("applicableEndDate", e.target.value);
                    onFilterChange("applicableTimeRange", "custom");
                  }}
                  className="h-9 text-xs bg-white"
                />
              </div>
            </div>

            {/* Thời điểm thu thập */}
            <div className="space-y-1.5 p-3 bg-purple-50 rounded-md border border-purple-200">
              <Label className="text-xs sm:text-sm font-medium text-gray-900">Thời điểm thu thập</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Select value={filters.collectedTimeRange} onValueChange={handleCollectedTimeRangeChange}>
                  <SelectTrigger className="h-9 text-xs bg-white">
                    <SelectValue placeholder="Tất cả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="today">Hôm nay</SelectItem>
                    <SelectItem value="last7days">7 ngày gần đây</SelectItem>
                    <SelectItem value="custom">Tùy chọn</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={filters.collectedStartDate}
                  onChange={(e) => {
                    onFilterChange("collectedStartDate", e.target.value);
                    onFilterChange("collectedTimeRange", "custom");
                  }}
                  className="h-9 text-xs bg-white"
                />
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={filters.collectedEndDate}
                  onChange={(e) => {
                    onFilterChange("collectedEndDate", e.target.value);
                    onFilterChange("collectedTimeRange", "custom");
                  }}
                  className="h-9 text-xs bg-white"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Type & Source - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="type" className="text-sm font-medium">
                Tính pháp lý <span className="text-red-600 text-xs">(Quan trọng)</span>
              </Label>
              <Select value={filters.type} onValueChange={(value) => onFilterChange("type", value)}>
                <SelectTrigger id="type" className="h-9">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="official">Chính thức</SelectItem>
                  <SelectItem value="unofficial">Không chính thức</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="source" className="text-sm font-medium">Nguồn dữ liệu</Label>
              <Select value={filters.source} onValueChange={(value) => onFilterChange("source", value)}>
                <SelectTrigger id="source" className="h-9">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="vietrade">Vietrade</SelectItem>
                  <SelectItem value="dichvucong">Dịch vụ công</SelectItem>
                  <SelectItem value="crawl">Thu thập tự động</SelectItem>
                  <SelectItem value="bloggiamgia">Blog Giảm Giá</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
