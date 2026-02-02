import { ReactNode } from "react";
import { Megaphone, Ticket, Globe, ShieldAlert, ClipboardList, Building2, BarChart } from "lucide-react";
import { toast } from "sonner";

interface LayoutProps {
  children: ReactNode;
  activePage: "promotions" | "discount-codes" | "overview";
  onPageChange: (page: "promotions" | "discount-codes" | "overview") => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function Layout({ children, activePage, onPageChange, onScrollToSection }: LayoutProps) {
  const handleMenuClick = (action: "page" | "scroll", target: string) => {
    if (action === "page") {
      onPageChange(target as "promotions" | "discount-codes" | "overview");
    } else if (action === "scroll" && onScrollToSection) {
      onScrollToSection(target);
    }
  };

  const handleIntroClick = () => {
    handleMenuClick("page", "overview");
    setTimeout(() => handleMenuClick("scroll", "overview-section"), 100);
  };

  const handlePlatformClick = () => {
    handleMenuClick("page", "overview");
    setTimeout(() => handleMenuClick("scroll", "platform-section"), 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - MAPPA Style */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand & Navigation */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SSO</span>
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  SMART SYSTEM SSO v1.9
                </span>
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-6">
                <button
                  onClick={handleIntroClick}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Giới thiệu
                </button>
                <button
                  onClick={handlePlatformClick}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Nền tảng
                </button>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
                Xuất báo cáo
              </button>
              <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Globe className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}