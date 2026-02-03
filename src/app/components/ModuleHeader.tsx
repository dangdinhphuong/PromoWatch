import svgPaths from "@/imports/svg-ydczfk9bqi";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface ModuleHeaderProps {
  title: string;
  subtitle: string;
  onBack: () => void;
  filters?: {
    timeRange?: {
      defaultValue: string;
      options: Array<{ value: string; label: string }>;
    };
    category?: {
      defaultValue: string;
      options: Array<{ value: string; label: string }>;
    };
  };
}

export function ModuleHeader({ title, subtitle, onBack, filters }: ModuleHeaderProps) {
  return (
    <div className="bg-white border-b border-[#e5e7eb] w-full">
      <div className="max-w-[1600px] mx-auto px-[38.5px] pt-6 pb-px">
        <div className="flex items-end justify-between w-full mb-6">
          {/* Left side - Title and Subtitle */}
          <div className="flex flex-col gap-3 max-w-[621px]">
            {/* Back button */}
            <button
              onClick={onBack}
              className="flex items-center h-8 rounded-lg gap-2 hover:bg-gray-50 transition-colors w-fit px-2 -ml-2"
            >
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path 
                  d={svgPaths.p217cc880} 
                  stroke="#666666" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
              <span className="font-['Arimo',sans-serif] text-[14px] leading-5 text-[#666666]">
                Quay lại trang chủ
              </span>
            </button>

            {/* Title */}
            <h1 className="font-['Arimo',sans-serif] font-bold text-[28px] leading-[42px] tracking-[-0.7px] text-[#1a1a1a]">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="font-['Arimo',sans-serif] text-[15px] leading-[22.5px] text-[#666666]">
              {subtitle}
            </p>
          </div>

          {/* Right side - Filters */}
          {filters && (
            <div className="flex items-center gap-3 h-9">
              {/* Time Range Filter */}
              {filters.timeRange && (
                <Select defaultValue={filters.timeRange.defaultValue}>
                  <SelectTrigger className="w-[120px] h-9 border-[#d1d5dc] bg-white rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.timeRange.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {/* Category Filter */}
              {filters.category && (
                <Select defaultValue={filters.category.defaultValue}>
                  <SelectTrigger className="min-w-[180px] h-9 border-[#d1d5dc] bg-white rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.category.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
