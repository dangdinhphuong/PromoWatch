import { ChevronLeft } from "lucide-react";

interface ModuleBreadcrumbProps {
  title: string;
  onBack: () => void;
  // Optional props that won't be displayed but accepted for compatibility
  subtitle?: string;
  timeRangeValue?: string;
  platformValue?: string;
  onTimeRangeChange?: (value: string) => void;
  onPlatformChange?: (value: string) => void;
}

export function ModuleBreadcrumb({ title, onBack }: ModuleBreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-200 w-full">
      <div className="max-w-[1600px] mx-auto px-8 py-4 lg:py-6">{/* Changed from px-4 sm:px-6 lg:px-8 to px-8 */}
        {/* Module Title */}
        <h1 className="font-['Arimo',sans-serif] font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-[#1a1a1a]">
          {title}
        </h1>
      </div>
    </div>
  );
}