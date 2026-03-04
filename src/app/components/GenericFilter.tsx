import { Search, Download, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { useState } from "react";

interface GenericFilterProps {
  onSearch?: () => void;
  onExport?: () => void;
  children?: React.ReactNode;
  showSearchButton?: boolean;
  showExportButton?: boolean;
  showExpandButton?: boolean;
  defaultExpanded?: boolean;
}

export function GenericFilter({
  onSearch,
  onExport,
  children,
  showSearchButton = true,
  showExportButton = true,
  showExpandButton = true,
  defaultExpanded = false,
}: GenericFilterProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

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
          {showSearchButton && onSearch && (
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              onClick={onSearch}
              title="Tìm kiếm"
            >
              <Search className="w-4 h-4 text-gray-700" />
            </button>
          )}
          {showExportButton && onExport && (
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              onClick={onExport}
              title="Export"
            >
              <Download className="w-4 h-4 text-gray-700" />
            </button>
          )}
          {showExpandButton && children && (
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
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      {children && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">{children}</div>
        </div>
      )}
    </div>
  );
}
