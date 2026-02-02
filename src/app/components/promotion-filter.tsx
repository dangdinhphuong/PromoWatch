import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface PromotionFilterProps {
  onSearch: () => void;
  onReset: () => void;
  onExport: () => void;
  filters: {
    keyword: string;
    applicableTimeRange: string;
    applicableStartDate: string;
    applicableEndDate: string;
    type: string;
    source: string;
    collectedTimeRange: string;
    collectedStartDate: string;
    collectedEndDate: string;
  };
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
      const todayStr = today.toISOString().split('T')[0];
      onFilterChange("applicableStartDate", todayStr);
      onFilterChange("applicableEndDate", todayStr);
    } else if (value === "next7days") {
      const next7 = new Date(today);
      next7.setDate(today.getDate() + 7);
      onFilterChange("applicableStartDate", today.toISOString().split('T')[0]);
      onFilterChange("applicableEndDate", next7.toISOString().split('T')[0]);
    } else if (value === "thisMonth") {
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      onFilterChange("applicableStartDate", firstDay.toISOString().split('T')[0]);
      onFilterChange("applicableEndDate", lastDay.toISOString().split('T')[0]);
    } else if (value === "thisQuarter") {
      const quarter = Math.floor(today.getMonth() / 3);
      const firstDay = new Date(today.getFullYear(), quarter * 3, 1);
      const lastDay = new Date(today.getFullYear(), quarter * 3 + 3, 0);
      onFilterChange("applicableStartDate", firstDay.toISOString().split('T')[0]);
      onFilterChange("applicableEndDate", lastDay.toISOString().split('T')[0]);
    } else if (value === "custom") {
      // Tùy chọn - không làm gì
    }
  };

  const handleCollectedTimeRangeChange = (value: string) => {
    onFilterChange("collectedTimeRange", value);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (value === "today") {
      const todayStr = today.toISOString().split('T')[0];
      onFilterChange("collectedStartDate", todayStr);
      onFilterChange("collectedEndDate", todayStr);
    } else if (value === "last7days") {
      const last7 = new Date(today);
      last7.setDate(today.getDate() - 7);
      onFilterChange("collectedStartDate", last7.toISOString().split('T')[0]);
      onFilterChange("collectedEndDate", today.toISOString().split('T')[0]);
    } else if (value === "custom") {
      // Tùy chọn
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header with action buttons */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">Bộ lọc tìm kiếm</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8" onClick={onReset}>
            Reset
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8" onClick={onSearch}>
            Tìm kiếm
          </Button>
          <Button variant="outline" size="sm" className="bg-green-50 border-green-600 text-green-700 hover:bg-green-100 h-8" onClick={onExport}>
            Export
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Thu gọn" : "Mở rộng"}
          </Button>
        </div>
      </div>

      {/* Collapsible Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Row 1: Keyword */}
          <div className="space-y-1.5">
            <Label htmlFor="keyword" className="text-sm font-medium">Từ khóa</Label>
            <Input
              id="keyword"
              type="text"
              placeholder="Tìm theo tên, công ty, mã..."
              value={filters.keyword}
              onChange={(e) => onFilterChange("keyword", e.target.value)}
              className="h-9"
            />
          </div>

          {/* Row 2: Time range filters - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Thời gian áp dụng */}
            <div className="space-y-1.5 p-3 bg-blue-50 rounded-md border border-blue-200">
              <Label className="text-sm font-medium text-gray-900">Thời gian áp dụng</Label>
              <div className="grid grid-cols-3 gap-2">
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
              <Label className="text-sm font-medium text-gray-900">Thời điểm thu thập</Label>
              <div className="grid grid-cols-3 gap-2">
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
