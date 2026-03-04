import { ArrowLeft, Menu } from "lucide-react";

interface MobileTopBarProps {
  title?: string;
  onBack?: () => void;
  showLogo?: boolean;
  onToggleSidebar?: () => void;
}

export function MobileTopBar({ title, onBack, showLogo = false, onToggleSidebar }: MobileTopBarProps) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 h-14 z-50 safe-area-top">
      <div className="h-full flex items-center justify-between px-4">
        {/* Left - Back button or Logo */}
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          {showLogo && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-[12px]">SSO</span>
              </div>
              <span className="font-['Arimo',sans-serif] font-bold text-[14px] text-[#1a1a1a]">
                SSO v1.9
              </span>
            </div>
          )}
        </div>

        {/* Center - Title */}
        {title && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-semibold text-[15px] text-gray-900 truncate max-w-[200px]">
              {title}
            </h1>
          </div>
        )}

        {/* Right - Menu button (if sidebar available) or Settings */}
        {onToggleSidebar ? (
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        ) : (
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}