import { Settings } from "lucide-react";

interface PageHeaderProps {
  onNavigate?: (page: "overview" | "promotions" | "discount-codes") => void;
  onScrollToSection?: (section: "overview" | "platform") => void;
  onNavigateToHome?: () => void;
}

export function PageHeader({ onNavigate, onScrollToSection, onNavigateToHome }: PageHeaderProps) {
  const handleIntroClick = () => {
    if (onNavigateToHome) {
      onNavigateToHome();
      return;
    }
    onNavigate?.("overview");
    setTimeout(() => onScrollToSection?.("overview"), 100);
  };

  const handlePlatformClick = () => {
    if (onNavigateToHome) {
      onNavigateToHome();
      return;
    }
    onNavigate?.("overview");
    setTimeout(() => onScrollToSection?.("platform"), 100);
  };

  const handleLogoClick = () => {
    if (onNavigateToHome) {
      onNavigateToHome();
      return;
    }
    onNavigate?.("overview");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-full mx-auto px-8 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-8">
            {/* Logo and System Name */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={handleLogoClick}
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
                onClick={handleIntroClick}
              >
                Giới thiệu
              </button>
              <button 
                className="text-sm text-[#64748b] hover:text-[#155dfc] transition-colors font-medium"
                onClick={handlePlatformClick}
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
    </header>
  );
}