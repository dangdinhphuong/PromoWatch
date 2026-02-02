import { useState } from "react";
import { Eye, ExternalLink, ChevronUp, ChevronDown, FileText } from "lucide-react";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

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

interface PromotionTableProps {
  data: PromotionData[];
  onViewDetail: (promotion: PromotionData) => void;
}

type SortField = "crawledAt" | "discountPercent" | "time";
type SortOrder = "asc" | "desc";

export function PromotionTable({ data, onViewDetail }: PromotionTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("crawledAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const itemsPerPage = 10;

  const getSourceBadge = (source: "dichvucong" | "vietrade" | "crawl" | "bloggiamgia") => {
    const badges = {
      dichvucong: <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-sm font-semibold px-2.5 py-1">Dịch vụ công</Badge>,
      vietrade: <Badge className="bg-green-100 text-green-800 border-green-300 text-sm font-semibold px-2.5 py-1">Vietrade</Badge>,
      crawl: <Badge className="bg-purple-100 text-purple-800 border-purple-300 text-sm font-semibold px-2.5 py-1">Thu thập</Badge>,
      bloggiamgia: <Badge className="bg-red-100 text-red-800 border-red-300 text-sm font-semibold px-2.5 py-1">Blog Giảm Giá</Badge>,
    };
    return badges[source];
  };

  const getTypeBadge = (type: "official" | "unofficial") => {
    if (type === "official") {
      return <Badge className="bg-green-100 text-green-800 border-green-300 text-sm font-semibold px-2.5 py-1">Chính thức</Badge>;
    }
    return <Badge className="bg-orange-100 text-orange-800 border-orange-300 text-sm font-semibold px-2.5 py-1">Không chính thức</Badge>;
  };

  const getLegalBadge = (status?: "approved" | "pending" | "rejected" | "expired") => {
    if (!status) return <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-sm font-semibold px-2.5 py-1">Chưa xác định</Badge>;
    
    const badges = {
      approved: <Badge className="bg-green-100 text-green-800 border-green-300 text-sm font-semibold px-2.5 py-1">Hợp lệ</Badge>,
      pending: <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-sm font-semibold px-2.5 py-1">Chờ duyệt</Badge>,
      rejected: <Badge className="bg-red-100 text-red-800 border-red-300 text-sm font-semibold px-2.5 py-1">Từ chối</Badge>,
      expired: <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-sm font-semibold px-2.5 py-1">Hết hạn</Badge>,
    };
    return badges[status];
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(data.map((item) => item.code));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (code: string, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, code]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== code));
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aValue: any;
    let bValue: any;

    if (sortField === "discountPercent") {
      aValue = a.discountPercent || 0;
      bValue = b.discountPercent || 0;
    } else if (sortField === "time") {
      aValue = a.time.start ? new Date(a.time.start.split("/").reverse().join("-")).getTime() : 0;
      bValue = b.time.start ? new Date(b.time.start.split("/").reverse().join("-")).getTime() : 0;
    } else {
      // crawledAt
      aValue = new Date(a.crawledAt || "1970-01-01").getTime();
      bValue = new Date(b.crawledAt || "1970-01-01").getTime();
    }

    if (sortOrder === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === "asc" ? (
      <ChevronUp className="h-4 w-4 inline ml-1" />
    ) : (
      <ChevronDown className="h-4 w-4 inline ml-1" />
    );
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    // If already formatted as DD/MM/YYYY, return as is
    if (dateStr.includes("/")) return dateStr;
    // If ISO format, convert to DD/MM/YYYY
    const date = new Date(dateStr);
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
  };

  const formatDateTime = (isoStr: string) => {
    if (!isoStr) return "N/A";
    const date = new Date(isoStr);
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50 hover:bg-blue-50">
              <TableHead className="w-[40px] p-3">
                <Checkbox
                  checked={selectedIds.length === data.length && data.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[60px] p-3 text-sm font-bold">STT</TableHead>
              <TableHead className="min-w-[280px] p-3 text-sm font-bold">Tên chương trình</TableHead>
              <TableHead className="min-w-[200px] p-3 text-sm font-bold">Công ty / Đơn vị</TableHead>
              <TableHead 
                className="min-w-[150px] p-3 cursor-pointer hover:bg-blue-100 text-sm font-bold"
                onClick={() => handleSort("time")}
              >
                Thời gian áp dụng <SortIcon field="time" />
              </TableHead>
              <TableHead className="min-w-[140px] p-3 text-sm font-bold">Địa điểm</TableHead>
              <TableHead className="min-w-[150px] p-3 text-sm font-bold">Loại mặt hàng</TableHead>
              <TableHead className="min-w-[120px] p-3 text-sm font-bold">Nguồn</TableHead>
              <TableHead className="min-w-[110px] p-3 text-sm font-bold">Pháp lý</TableHead>
              <TableHead 
                className="min-w-[150px] p-3 cursor-pointer hover:bg-blue-100 text-sm font-bold"
                onClick={() => handleSort("crawledAt")}
              >
                Thời điểm thu thập <SortIcon field="crawledAt" />
              </TableHead>
              <TableHead className="w-[100px] p-3 text-center text-sm font-bold">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow
                key={item.code || index}
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell className="p-3">
                  <Checkbox
                    checked={selectedIds.includes(item.code)}
                    onCheckedChange={(checked) =>
                      handleSelectOne(item.code, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell className="p-3 text-sm font-semibold text-gray-800">{startIndex + index + 1}</TableCell>
                <TableCell className="p-3">
                  <div className="max-w-[280px]">
                    <p className="text-sm font-bold text-gray-900 line-clamp-2">{item.name}</p>
                  </div>
                </TableCell>
                <TableCell className="p-3">
                  <div className="max-w-[200px]">
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.company}</p>
                  </div>
                </TableCell>
                <TableCell className="p-3">
                  <div className="text-sm font-semibold whitespace-nowrap">
                    <div className="text-gray-900">{formatDate(item.time.start || "N/A")}</div>
                    <div className="text-gray-600">→ {formatDate(item.time.end || "N/A")}</div>
                  </div>
                </TableCell>
                <TableCell className="p-3">
                  {item.location ? (
                    <span className="text-sm font-medium text-gray-800 line-clamp-1">{item.location}</span>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell className="p-3">
                  {item.productType ? (
                    <span className="text-sm font-medium text-gray-800 line-clamp-1">{item.productType}</span>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell className="p-3">{getSourceBadge(item.source)}</TableCell>
                <TableCell className="p-3">{getLegalBadge(item.legalStatus)}</TableCell>
                <TableCell className="p-3">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{formatDateTime(item.crawledAt || "1970-01-01T00:00:00Z")}</span>
                </TableCell>
                <TableCell className="p-3 text-center">
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

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="text-base font-semibold text-gray-800">
          Hiển thị {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedData.length)} trong tổng số {sortedData.length} bản ghi
          {selectedIds.length > 0 && (
            <span className="ml-4 text-blue-600 font-bold">
              ({selectedIds.length} dòng được chọn)
            </span>
          )}
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}