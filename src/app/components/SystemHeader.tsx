import svgPaths from "@/imports/svg-ux7c4j797s";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface SystemHeaderProps {
  title: string;
  subtitle: string;
  onBack: () => void;
  timeRangeValue?: string;
  onTimeRangeChange?: (value: string) => void;
  platformValue?: string;
  onPlatformChange?: (value: string) => void;
}

export function SystemHeader({ 
  title, 
  subtitle, 
  onBack,
  timeRangeValue = "7",
  onTimeRangeChange,
  platformValue = "all",
  onPlatformChange,
}: SystemHeaderProps) {
  return (
    <div className="bg-white border-b border-[#e5e7eb] w-full">
      <div className="max-w-[1613px] mx-auto px-[45px] pt-6 pb-px">
        <div className="flex items-end justify-between w-full h-[162.5px]">
          {/* Left side - Title and Subtitle */}
          <div className="relative h-[162.5px] w-[621px]">
            {/* Title */}
            <h1 className="absolute left-0 top-[44px] w-[608px] font-['Arimo',sans-serif] font-bold text-[28px] leading-[42px] tracking-[-0.7px] text-[#1a1a1a] whitespace-pre-wrap">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="absolute left-0 top-[140px] w-[621px] font-['Arimo',sans-serif] text-[15px] leading-[22.5px] text-[#666666]">
              {subtitle}
            </p>
          </div>

          {/* Right side - Filters */}
          <div className="flex items-center gap-3 h-9">
            {/* Time Range Filter */}
            <Select value={timeRangeValue} onValueChange={onTimeRangeChange}>
              <SelectTrigger className="w-[92px] h-9 border-[#d1d5dc] bg-white rounded-[10px] font-['Arimo',sans-serif] text-[14px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24 giờ</SelectItem>
                <SelectItem value="7">7 ngày</SelectItem>
                <SelectItem value="30">30 ngày</SelectItem>
                <SelectItem value="90">90 ngày</SelectItem>
              </SelectContent>
            </Select>

            {/* Platform Filter */}
            <Select value={platformValue} onValueChange={onPlatformChange}>
              <SelectTrigger className="min-w-[180px] h-9 border-[#d1d5dc] bg-white rounded-[10px] font-['Arimo',sans-serif] text-[14px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả nền tảng</SelectItem>
                <SelectItem value="marketplace">Sàn TMĐT</SelectItem>
                <SelectItem value="social">Mạng xã hội</SelectItem>
                <SelectItem value="livestream">Livestream</SelectItem>
                <SelectItem value="north">Miền Bắc</SelectItem>
                <SelectItem value="central">Miền Trung</SelectItem>
                <SelectItem value="south">Miền Nam</SelectItem>
                <SelectItem value="nationwide">Toàn quốc</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}