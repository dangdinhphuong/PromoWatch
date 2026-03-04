import { useEffect, useMemo, useState } from "react";
import { Eye, ChevronUp, ChevronDown } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

export interface PromotionData {
  id: string | null;
  code: string;
  name: string;
  company: string;
  time: {
    start: string | null;
    end: string | null;
  };
  location: string | null;
  productType: string | null;
  discountPercent: number | null;
  promotionMethod: string | null;
  type: "official" | "unofficial";
  agencyId: string | null;
  total: number | null;
  rowStt: number | null;
  source: "dichvucong" | "vietrade" | "crawl" | "bloggiamgia";
  sourceUrl: string | null;
  crawledAt: string | null;
  legalStatus?: "approved" | "pending" | "rejected" | "expired";
  meta: {
    rawA: any;
    rawB: any;
  };
}

interface PromotionPagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface PromotionTableProps {
  data: PromotionData[];
  onViewDetail: (promotion: PromotionData) => void;
  pagination: PromotionPagination;
  onPageChange: (page: number) => void;
}

type SortField = "crawledAt" | "discountPercent" | "time";
type SortOrder = "asc" | "desc";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "N/A";
  if (dateStr.includes("/")) return dateStr;

  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "N/A";

  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${date.getFullYear()}`;
}

function formatDateTime(isoStr: string | null) {
  if (!isoStr) return "N/A";
  const date = new Date(isoStr);
  if (Number.isNaN(date.getTime())) return "N/A";

  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

function getVisiblePages(currentPage: number, totalPages: number): Array<number | "..."> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

export function PromotionTable({
  data,
  onViewDetail,
  pagination,
  onPageChange,
}: PromotionTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortField, setSortField] = useState<SortField>("crawledAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  useEffect(() => {
    setSelectedIds([]);
  }, [data, pagination.page]);

  const getSourceBadge = (source: PromotionData["source"]) => {
    const badges = {
      dichvucong: (
        <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-sm font-semibold px-2.5 py-1">
          Dịch vụ công
        </Badge>
      ),
      vietrade: (
        <Badge className="bg-green-100 text-green-800 border-green-300 text-sm font-semibold px-2.5 py-1">
          Vietrade
        </Badge>
      ),
      crawl: (
        <Badge className="bg-purple-100 text-purple-800 border-purple-300 text-sm font-semibold px-2.5 py-1">
          Thu thập
        </Badge>
      ),
      bloggiamgia: (
        <Badge className="bg-red-100 text-red-800 border-red-300 text-sm font-semibold px-2.5 py-1">
          Blog Giảm Giá
        </Badge>
      ),
    };
    return badges[source];
  };

  const getTypeBadge = (type: PromotionData["type"]) => {
    if (type === "official") {
      return (
        <Badge className="bg-green-100 text-green-800 border-green-300 text-sm font-semibold px-2.5 py-1">
          Chính thức
        </Badge>
      );
    }
    return (
      <Badge className="bg-orange-100 text-orange-800 border-orange-300 text-sm font-semibold px-2.5 py-1">
        Không chính thức
      </Badge>
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(data.map((item) => item.code));
      return;
    }
    setSelectedIds([]);
  };

  const handleSelectOne = (code: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => (prev.includes(code) ? prev : [...prev, code]));
      return;
    }
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== code));
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setSortField(field);
    setSortOrder("desc");
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue: number;
      let bValue: number;

      if (sortField === "discountPercent") {
        aValue = a.discountPercent ?? 0;
        bValue = b.discountPercent ?? 0;
      } else if (sortField === "time") {
        aValue = a.time.start ? new Date(a.time.start.split("/").reverse().join("-")).getTime() : 0;
        bValue = b.time.start ? new Date(b.time.start.split("/").reverse().join("-")).getTime() : 0;
      } else {
        aValue = new Date(a.crawledAt || "1970-01-01").getTime();
        bValue = new Date(b.crawledAt || "1970-01-01").getTime();
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });
  }, [data, sortField, sortOrder]);

  const displayData = sortedData;
  const startRow = pagination.total > 0 ? (pagination.page - 1) * pagination.pageSize + 1 : 0;
  const endRow =
    pagination.total > 0
      ? Math.min(pagination.page * pagination.pageSize, pagination.total)
      : 0;
  const pageItems = getVisiblePages(pagination.page, pagination.totalPages);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow overflow-hidden">
      <div className="lg:hidden divide-y divide-gray-200">
        {displayData.map((item, index) => {
          const rowNumber = (pagination.page - 1) * pagination.pageSize + index + 1;
          return (
            <div key={item.code || index} className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedIds.includes(item.code)}
                    onCheckedChange={(checked) => handleSelectOne(item.code, checked as boolean)}
                  />
                  <span className="text-xs font-semibold text-gray-600">#{rowNumber}</span>
                </div>
                <div className="flex gap-1">
                  {getTypeBadge(item.type)}
                  {getSourceBadge(item.source)}
                </div>
              </div>

              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">{item.name}</h3>

              <p className="text-xs text-gray-700 mb-2 font-medium">{item.company}</p>

              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div>
                  <span className="text-gray-500">Thời gian:</span>
                  <p className="font-medium text-gray-900">
                    {formatDate(item.time.start)} - {formatDate(item.time.end)}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Địa điểm:</span>
                  <p className="font-medium text-gray-900">{item.location || "N/A"}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Thu thập: {formatDateTime(item.crawledAt)}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewDetail(item)}
                  className="gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 h-7 text-xs font-semibold px-2"
                >
                  <Eye className="h-3 w-3" />
                  Xem
                </Button>
              </div>
            </div>
          );
        })}

        {displayData.length === 0 && <div className="p-8 text-center text-gray-500">Không có dữ liệu</div>}
      </div>

      <div className="hidden lg:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedIds.length === data.length && data.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="min-w-[80px]">STT</TableHead>
              <TableHead className="min-w-[350px]">Tên chương trình</TableHead>
              <TableHead className="min-w-[250px]">Công ty / Đơn vị</TableHead>
              <TableHead
                className="min-w-[120px] cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("time")}
              >
                <div className="flex items-center gap-1">
                  Thời gian áp dụng
                  {sortField === "time" &&
                    (sortOrder === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="min-w-[120px]">Địa điểm</TableHead>
              <TableHead className="min-w-[120px]">Nguồn</TableHead>
              <TableHead className="min-w-[120px]">Loại</TableHead>
              <TableHead
                className="min-w-[150px] cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("crawledAt")}
              >
                <div className="flex items-center gap-1">
                  Thời điểm thu thập
                  {sortField === "crawledAt" &&
                    (sortOrder === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="w-[120px]">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((item, index) => (
              <TableRow key={item.code || index} className="hover:bg-gray-50 transition-colors">
                <TableCell className="p-3">
                  <Checkbox
                    checked={selectedIds.includes(item.code)}
                    onCheckedChange={(checked) => handleSelectOne(item.code, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="p-3 text-sm font-semibold text-gray-800 whitespace-nowrap">
                  {(pagination.page - 1) * pagination.pageSize + index + 1}
                </TableCell>
                <TableCell className="min-w-[350px] p-3 whitespace-normal">
                  <p className="text-sm font-bold text-gray-900 break-words leading-relaxed">{item.name}</p>
                </TableCell>
                <TableCell className="min-w-[250px] p-3 whitespace-normal">
                  <p className="text-sm font-semibold text-gray-800 break-words leading-relaxed">
                    {item.company}
                  </p>
                </TableCell>
                <TableCell className="min-w-[140px] p-3 whitespace-nowrap">
                  <div className="text-sm font-semibold leading-relaxed">
                    <div className="text-gray-900">{formatDate(item.time.start)}</div>
                    <div className="text-gray-600">→ {formatDate(item.time.end)}</div>
                  </div>
                </TableCell>
                <TableCell className="min-w-[180px] p-3 whitespace-normal">
                  {item.location ? (
                    <span className="text-sm font-medium text-gray-800 break-words leading-relaxed">
                      {item.location}
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap">{getSourceBadge(item.source)}</TableCell>
                <TableCell className="p-3 whitespace-nowrap">{getTypeBadge(item.type)}</TableCell>
                <TableCell className="min-w-[150px] p-3 whitespace-normal">
                  <span className="text-sm font-medium text-gray-700 break-words leading-relaxed">
                    {formatDateTime(item.crawledAt)}
                  </span>
                </TableCell>
                <TableCell className="p-3 text-center whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewDetail(item)}
                    className="gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 h-8 text-sm font-semibold px-3"
                  >
                    <Eye className="h-4 w-4" />
                    Xem
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-4 border-t border-gray-200">
        <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
          Hiển thị {startRow} - {endRow} / {pagination.total} bản ghi
          {selectedIds.length > 0 && (
            <span className="ml-2 sm:ml-4 text-blue-600 font-bold">({selectedIds.length} dòng được chọn)</span>
          )}
        </div>

        {pagination.totalPages > 0 && (
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={!pagination.hasPrev}
            >
              Trước
            </Button>

            {pageItems.map((page, index) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-400 select-none">
                    ...
                  </span>
                );
              }

              return (
                <Button
                  key={page}
                  variant={pagination.page === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </Button>
              );
            })}

            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={!pagination.hasNext}
            >
              Sau
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
