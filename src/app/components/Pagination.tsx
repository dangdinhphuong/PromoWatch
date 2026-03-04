import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  showPageSize?: boolean;
  pageSizeOptions?: number[];
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  showPageSize = true,
  pageSizeOptions = [5, 10, 20, 50, 100],
}: PaginationProps) {
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalItems);

  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () => onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => onPageChange(totalPages);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-gray-50 border-t border-gray-200">
      {/* Left: Items info */}
      <div className="text-sm text-gray-600 order-2 sm:order-1">
        Hiển thị <span className="font-semibold text-gray-900">{startIndex}</span> đến <span className="font-semibold text-gray-900">{endIndex}</span> trong tổng số{" "}
        <span className="font-semibold text-gray-900">{totalItems}</span> kết quả
      </div>

      {/* Center: Page navigation */}
      <div className="flex items-center gap-2 order-1 sm:order-2">
        {/* First Page */}
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className="h-9 w-9 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors hidden sm:flex"
          title="Trang đầu"
        >
          <ChevronsLeft className="h-4 w-4 text-gray-600" />
        </button>

        {/* Previous Page */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="h-9 w-9 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Trang trước"
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </button>

        {/* Page Numbers */}
        <div className="hidden sm:flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-400 select-none">
                  •••
                </span>
              );
            }

            return (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`h-9 min-w-[36px] px-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Mobile: Current Page Display */}
        <div className="sm:hidden px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg">
          Trang {currentPage} / {totalPages}
        </div>

        {/* Next Page */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="h-9 w-9 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Trang sau"
        >
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </button>

        {/* Last Page */}
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className="h-9 w-9 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors hidden sm:flex"
          title="Trang cuối"
        >
          <ChevronsRight className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Right: Page size selector */}
      {showPageSize && onPageSizeChange && (
        <div className="flex items-center gap-2 text-sm order-3">
          <span className="text-gray-600 hidden sm:inline">Hiển thị</span>
          <Select value={pageSize.toString()} onValueChange={(value) => onPageSizeChange(Number(value))}>
            <SelectTrigger className="h-9 w-[80px] border-gray-300 bg-white rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-gray-600">mục/trang</span>
        </div>
      )}
    </div>
  );
}