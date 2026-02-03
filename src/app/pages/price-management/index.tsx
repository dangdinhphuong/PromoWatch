import { useState } from "react";
import { PriceManagementOverview } from "./overview";
import { PriceDatabase } from "./database";
import { PriceDashboard } from "./dashboard";
import { PriceAlerts } from "./alerts";
import { PriceForecast } from "./forecast";
import { PolicyLog } from "./policy-log";
import { PageHeader } from "@/app/components/page-header";
import { PriceManagementSidebar } from "@/app/components/PriceManagementSidebar";

type PageType = "overview" | "database" | "dashboard" | "alerts" | "forecast" | "policy-log";

interface PriceManagementModuleProps {
  onBack: () => void;
}

export function PriceManagementModule({ onBack }: PriceManagementModuleProps) {
  const [currentPage, setCurrentPage] = useState<PageType>("overview");

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleBackToOverview = () => {
    setCurrentPage("overview");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <PriceManagementOverview onNavigate={handleNavigate} />;
      case "database":
        return <PriceDatabase />;
      case "dashboard":
        return <PriceDashboard />;
      case "alerts":
        return <PriceAlerts />;
      case "forecast":
        return <PriceForecast />;
      case "policy-log":
        return <PolicyLog />;
      default:
        return <PriceManagementOverview onNavigate={handleNavigate} />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case "database":
        return "Cơ sở dữ liệu giá";
      case "dashboard":
        return "Dashboard biến động giá";
      case "alerts":
        return "Cảnh báo ngưỡng";
      case "forecast":
        return "Dự báo giá";
      case "policy-log":
        return "Nhật ký quyết sách";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader onNavigateToHome={onBack} />

      {/* Main Content with Sidebar */}
      <div className="flex pt-16">
        <PriceManagementSidebar activePage={currentPage} onNavigate={handleNavigate} />
        <div className="flex-1">{renderPage()}</div>
      </div>
    </div>
  );
}