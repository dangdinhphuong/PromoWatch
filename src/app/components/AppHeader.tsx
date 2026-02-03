interface AppHeaderProps {
  onNavigateToHome?: () => void;
}

export function AppHeader({ onNavigateToHome }: AppHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 h-[60px] w-full sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo and Title */}
          <button 
            onClick={onNavigateToHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-[14px]">SSO</span>
            </div>
            <span className="font-['Arimo',sans-serif] font-bold text-[16px] text-[#1a1a1a]">
              SMART SYSTEM SSO v1.9
            </span>
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-6">
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

        {/* Settings Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}