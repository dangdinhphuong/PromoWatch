import { useState } from "react";
import { Eye, ExternalLink, ChevronUp, ChevronDown } from "lucide-react";
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
  id: string;
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  productType: string;
  discount: number;
  sourceType: "official" | "unofficial";
  legalStatus: "registered" | "unknown" | "suspicious";
  sourceUrl: string;
  collectedAt: string;
  attachments?: Array<{
    id: string;
    name: string;
    type: "pdf" | "image" | "excel" | "word" | "other";
    size: string;
    url: string;
  }>;
}

interface PromotionTableProps {
  data: PromotionData[];
  onViewDetail: (promotion: PromotionData) => void;
}

type SortField = "collectedAt" | "discount" | "startDate";
type SortOrder = "asc" | "desc";

export function PromotionTable({ data, onViewDetail }: PromotionTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("collectedAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const itemsPerPage = 10;

  const getSourceBadge = (type: "official" | "unofficial") => {
    if (type === "official") {
      return <Badge className="bg-green-100 text-green-800 border-green-300">Chính thống</Badge>;
    }
    return <Badge className="bg-orange-100 text-orange-800 border-orange-300">Không chính thống</Badge>;
  };

  const getLegalBadge = (status: "registered" | "unknown" | "suspicious") => {
    const badges = {
      registered: <Badge className="bg-blue-100 text-blue-800 border-blue-300">Đã đăng ký</Badge>,
      unknown: <Badge className="bg-gray-100 text-gray-800 border-gray-300">Chưa xác định</Badge>,
      suspicious: <Badge className="bg-red-100 text-red-800 border-red-300">Nghi vấn</Badge>,
    };
    return badges[status];
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(data.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
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
    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    if (sortField === "discount") {
      aValue = Number(aValue);
      bValue = Number(bValue);
    } else {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50 hover:bg-blue-50">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedIds.length === data.length && data.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[60px]">STT</TableHead>
              <TableHead className="min-w-[250px]">Tên chương trình khuyến mãi</TableHead>
              <TableHead className="min-w-[200px]">Công ty / Đơn vị</TableHead>
              <TableHead 
                className="min-w-[180px] cursor-pointer hover:bg-blue-100"
                onClick={() => handleSort("startDate")}
              >
                Thời gian áp dụng <SortIcon field="startDate" />
              </TableHead>
              <TableHead className="min-w-[150px]">Địa điểm</TableHead>
              <TableHead className="min-w-[150px]">Loại mặt hàng</TableHead>
              <TableHead 
                className="w-[100px] cursor-pointer hover:bg-blue-100"
                onClick={() => handleSort("discount")}
              >
                % Giảm giá <SortIcon field="discount" />
              </TableHead>
              <TableHead className="min-w-[140px]">Loại nguồn</TableHead>
              <TableHead className="min-w-[140px]">Trạng thái pháp lý</TableHead>
              <TableHead className="min-w-[100px]">Nguồn</TableHead>
              <TableHead 
                className="min-w-[150px] cursor-pointer hover:bg-blue-100"
                onClick={() => handleSort("collectedAt")}
              >
                Thời điểm thu thập <SortIcon field="collectedAt" />
              </TableHead>
              <TableHead className="w-[100px] text-center">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(item.id)}
                    onCheckedChange={(checked) =>
                      handleSelectOne(item.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.company}</TableCell>
                <TableCell>
                  {item.startDate} - {item.endDate}
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.productType}</TableCell>
                <TableCell className="text-center">
                  <span className="inline-block px-2 py-1 rounded bg-red-50 text-red-700 font-medium">
                    {item.discount}%
                  </span>
                </TableCell>
                <TableCell>{getSourceBadge(item.sourceType)}</TableCell>
                <TableCell>{getLegalBadge(item.legalStatus)}</TableCell>
                <TableCell>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </TableCell>
                <TableCell>{item.collectedAt}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewDetail(item)}
                    className="gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
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
        <div className="text-sm text-gray-700">
          Hiển thị {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedData.length)} trong tổng số {sortedData.length} bản ghi
          {selectedIds.length > 0 && (
            <span className="ml-4 text-blue-600 font-medium">
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