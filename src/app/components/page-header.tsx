import { Settings } from "lucide-react";

interface PageHeaderProps {
  onNavigateToHome?: () => void;
}

export function PageHeader({ onNavigateToHome }: PageHeaderProps) {
  return (
    <div className="hidden lg:block fixed top-0 left-0 right-0 bg-white border-b border-gray-200 h-16 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left side - Logo and Title */}
        <div className="flex items-center gap-8">
          {/* Logo and System Name */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={onNavigateToHome}
          >
            <div className="bg-[#155dfc] rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-[#1047d1] transition-colors">
              <span className="font-bold text-sm text-white">SSO</span>
            </div>
            <h1 className="font-bold text-lg text-[#101828] tracking-tight group-hover:text-[#155dfc] transition-colors">
              SMART SYSTEM SSO v1.9
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button 
              className="text-sm text-[#64748b] hover:text-[#155dfc] transition-colors font-medium"
              onClick={onNavigateToHome}
            >
              Giới thiệu
            </button>
            <button 
              className="text-sm text-[#64748b] hover:text-[#155dfc] transition-colors font-medium"
              onClick={onNavigateToHome}
            >
              Nền tảng
            </button>
          </nav>
        </div>

        {/* Right side - Settings Icon */}
        <button className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center">
          <Settings className="w-4 h-4 text-[#64748b]" />
        </button>
      </div>
    </div>
  );
}