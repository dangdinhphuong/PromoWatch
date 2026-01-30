import { useState } from "react";
import { Search, RotateCcw, Download, ChevronDown, ChevronUp, Filter } from "lucide-react";
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
import { Slider } from "@/app/components/ui/slider";

interface PromotionFilterProps {
  onSearch: () => void;
  onReset: () => void;
  onExport: () => void;
  filters: {
    sourceType: string;
    legalStatus: string;
    startDate: string;
    endDate: string;
    location: string;
    company: string;
    productType: string;
    discountRange: number[];
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div 
        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Filter className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Bộ lọc tìm kiếm</h3>
            <p className="text-sm text-gray-500">
              {isExpanded ? "Nhấp để thu gọn bộ lọc" : "Nhấp để mở rộng bộ lọc"}
            </p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-5 w-5" />
              Thu gọn
            </>
          ) : (
            <>
              <ChevronDown className="h-5 w-5" />
              Mở rộng
            </>
          )}
        </Button>
      </div>

      {/* Collapsible Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Loại nguồn */}
            <div className="space-y-2">
              <Label htmlFor="sourceType">Loại nguồn</Label>
              <Select
                value={filters.sourceType}
                onValueChange={(value) => onFilterChange("sourceType", value)}
              >
                <SelectTrigger id="sourceType">
                  <SelectValue placeholder="Chọn loại nguồn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="official">Chính thống</SelectItem>
                  <SelectItem value="unofficial">Không chính thống</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Trạng thái pháp lý */}
            <div className="space-y-2">
              <Label htmlFor="legalStatus">Trạng thái pháp lý</Label>
              <Select
                value={filters.legalStatus}
                onValueChange={(value) => onFilterChange("legalStatus", value)}
              >
                <SelectTrigger id="legalStatus">
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="registered">Đã đăng ký</SelectItem>
                  <SelectItem value="unknown">Chưa xác định</SelectItem>
                  <SelectItem value="suspicious">Nghi vấn</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Từ ngày */}
            <div className="space-y-2">
              <Label htmlFor="startDate">Từ ngày</Label>
              <Input
                id="startDate"
                type="date"
                value={filters.startDate}
                onChange={(e) => onFilterChange("startDate", e.target.value)}
              />
            </div>

            {/* Đến ngày */}
            <div className="space-y-2">
              <Label htmlFor="endDate">Đến ngày</Label>
              <Input
                id="endDate"
                type="date"
                value={filters.endDate}
                onChange={(e) => onFilterChange("endDate", e.target.value)}
              />
            </div>

            {/* Địa điểm */}
            <div className="space-y-2">
              <Label htmlFor="location">Địa điểm</Label>
              <Select
                value={filters.location}
                onValueChange={(value) => onFilterChange("location", value)}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Chọn địa điểm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toàn quốc</SelectItem>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                  <SelectItem value="danang">Đà Nẵng</SelectItem>
                  <SelectItem value="cantho">Cần Thơ</SelectItem>
                  <SelectItem value="haiphong">Hải Phòng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Doanh nghiệp */}
            <div className="space-y-2">
              <Label htmlFor="company">Doanh nghiệp</Label>
              <Input
                id="company"
                type="text"
                placeholder="Nhập tên doanh nghiệp"
                value={filters.company}
                onChange={(e) => onFilterChange("company", e.target.value)}
              />
            </div>

            {/* Loại mặt hàng */}
            <div className="space-y-2">
              <Label htmlFor="productType">Loại mặt hàng</Label>
              <Select
                value={filters.productType}
                onValueChange={(value) => onFilterChange("productType", value)}
              >
                <SelectTrigger id="productType">
                  <SelectValue placeholder="Chọn loại mặt hàng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="electronics">Điện tử - Điện lạnh</SelectItem>
                  <SelectItem value="food">Thực phẩm - Đồ uống</SelectItem>
                  <SelectItem value="fashion">Thời trang</SelectItem>
                  <SelectItem value="cosmetics">Mỹ phẩm</SelectItem>
                  <SelectItem value="household">Đồ gia dụng</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* % giảm giá slider */}
            <div className="space-y-2">
              <Label htmlFor="discountRange">
                % Giảm giá: {filters.discountRange[0]}% - {filters.discountRange[1]}%
              </Label>
              <div className="pt-3">
                <Slider
                  id="discountRange"
                  min={0}
                  max={100}
                  step={5}
                  value={filters.discountRange}
                  onValueChange={(value) => onFilterChange("discountRange", value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button onClick={onReset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset bộ lọc
            </Button>
            <Button onClick={onSearch} className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
              Tìm kiếm
            </Button>
            <Button onClick={onExport} variant="outline" className="gap-2 bg-green-50 border-green-600 text-green-700 hover:bg-green-100">
              <Download className="h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}