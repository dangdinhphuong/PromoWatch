import { Gift, Ticket, TrendingUp, Shield, Database } from "lucide-react";

type PageType = "overview" | "promotions" | "discount-codes" | "price-management" | "ecommerce-violation" | "data-integration";

interface MobileBottomNavProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

export function MobileBottomNav({ activePage, onNavigate }: MobileBottomNavProps) {
  const leftNavItems = [
    {
      id: "promotions" as PageType,
      icon: Gift,
      label: "Khuyến mãi",
    },
    {
      id: "discount-codes" as PageType,
      icon: Ticket,
      label: "Mã giảm",
    },
  ];

  const rightNavItems = [
    {
      id: "price-management" as PageType,
      icon: TrendingUp,
      label: "Quản lý giá",
    },
    {
      id: "data-integration" as PageType,
      icon: Database,
      label: "Tích hợp",
    },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-bottom">
      <div className="relative h-[72px]">
        {/* Grid container */}
        <div className="grid grid-cols-5 h-full">
          {/* Left items */}
          {leftNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 transition-all ${
                  isActive 
                    ? "text-blue-600" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
                <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Center - Home Logo Button (raised) */}
          <div className="flex flex-col items-center justify-center gap-1 relative pt-1">
            <button
              onClick={() => onNavigate("overview")}
              className={`absolute -top-3 flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all hover:shadow-2xl active:scale-95 ${
                activePage === "overview"
                  ? "bg-gradient-to-br from-blue-600 to-blue-700"
                  : "bg-gradient-to-br from-blue-500 to-blue-600"
              }`}
            >
              {/* Icon home */}
              <svg 
                className={`w-5 h-5 transition-all ${
                  activePage === "overview" ? "text-white scale-110" : "text-white"
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              {/* Active indicator ring */}
              {activePage === "overview" && (
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-pulse" />
              )}
            </button>
            {/* Label - positioned to align with other labels */}
            <div className="h-6" /> {/* Spacer for icon height */}
            <span className={`text-[10px] font-medium transition-all ${
              activePage === "overview" ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}>
              Trang chủ
            </span>
          </div>

          {/* Right items */}
          {rightNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 transition-all ${
                  isActive 
                    ? "text-blue-600" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
                <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Safe area for devices with home indicator */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </nav>
  );
}