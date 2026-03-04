import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { usePWAInstall } from "@/app/hooks/usePWAInstall";

interface AppHeaderProps {
  onNavigateToHome?: () => void;
}

export function AppHeader({ onNavigateToHome }: AppHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();

  return (
    <div className="hidden lg:block bg-white border-b border-gray-200 h-[60px] w-full sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo and Navigation - Desktop */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo and Title */}
          <button 
            onClick={onNavigateToHome}
            className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-7 w-7 lg:h-8 lg:w-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-[12px] lg:text-[14px]">SSO</span>
            </div>
            <span className="font-['Arimo',sans-serif] font-bold text-[14px] lg:text-[16px] text-[#1a1a1a] hidden sm:block">
              SMART SYSTEM SSO v1.9
            </span>
            <span className="font-['Arimo',sans-serif] font-bold text-[14px] text-[#1a1a1a] sm:hidden">
              SSO v1.9
            </span>
          </button>

          {/* Navigation - Desktop only */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="font-['Arimo',sans-serif] text-[14px] text-[#666666] hover:text-[#1a1a1a] transition-colors">
              Giới thiệu
            </button>
            <button 
              onClick={onNavigateToHome}
              className="font-['Arimo',sans-serif] text-[14px] text-[#666666] hover:text-[#1a1a1a] transition-colors"
            >
              Nền tảng
            </button>
          </div>
        </div>

        {/* Right side - Settings + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Settings Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#666666]" />
            ) : (
              <Menu className="w-5 h-5 text-[#666666]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button className="w-full text-left font-['Arimo',sans-serif] text-[14px] text-[#666666] hover:text-[#1a1a1a] transition-colors py-2">
              Giới thiệu
            </button>
            <button 
              onClick={() => {
                onNavigateToHome?.();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left font-['Arimo',sans-serif] text-[14px] text-[#666666] hover:text-[#1a1a1a] transition-colors py-2"
            >
              Nền tảng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}