import { useState } from "react";
import { ViolationOverview } from "./overview";
import { CategoriesPage } from "./categories";
import { DetectionPage } from "./detection";
import { RiskAlertPage } from "./risk-alert";
import { LivestreamPage } from "./livestream";
import { ViolationLogPage } from "./violation-log";
import { PageHeader } from "@/app/components/page-header";
import { EcommerceViolationSidebar } from "@/app/components/EcommerceViolationSidebar";
import { MobileTopBar } from "@/app/components/MobileTopBar";

interface EcommerceViolationModuleProps {
  onBack: () => void;
}

export type ViolationPage = "overview" | "categories" | "detection" | "risk-alert" | "livestream" | "violation-log";

export function EcommerceViolationModule({ onBack }: EcommerceViolationModuleProps) {
  const [currentPage, setCurrentPage] = useState<ViolationPage>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page: ViolationPage) => {
    setCurrentPage(page);
  };

  const handleBackToOverview = () => {
    setCurrentPage("overview");
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case "categories":
        return "Danh mục vi phạm";
      case "detection":
        return "Phát hiện vi phạm";
      case "risk-alert":
        return "Cảnh báo rủi ro";
      case "livestream":
        return "Giám sát livestream";
      case "violation-log":
        return "Nhật ký xử lý";
      default:
        return "Kiểm soát vi phạm";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <PageHeader onNavigateToHome={onBack} />
      
      {/* Mobile Top Bar with Menu button */}
      <MobileTopBar 
        title={getPageTitle()} 
        onBack={currentPage !== "overview" ? handleBackToOverview : onBack}
        onToggleSidebar={() => setSidebarOpen(true)}
      />
      
      {/* Main Content with Sidebar */}
      <div className="flex pt-14 lg:pt-16">
        <EcommerceViolationSidebar 
          activePage={currentPage} 
          onNavigate={handleNavigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 w-full lg:w-auto">
          {currentPage === "overview" && (
            <ViolationOverview onNavigate={handleNavigate} onBack={onBack} />
          )}
          {currentPage === "categories" && (
            <CategoriesPage onBack={handleBackToOverview} onNavigate={handleNavigate} />
          )}
          {currentPage === "detection" && (
            <DetectionPage onBack={handleBackToOverview} onNavigate={handleNavigate} />
          )}
          {currentPage === "risk-alert" && (
            <RiskAlertPage onBack={handleBackToOverview} onNavigate={handleNavigate} />
          )}
          {currentPage === "livestream" && (
            <LivestreamPage onBack={handleBackToOverview} onNavigate={handleNavigate} />
          )}
          {currentPage === "violation-log" && (
            <ViolationLogPage onBack={handleBackToOverview} onNavigate={handleNavigate} />
          )}
        </div>
      </div>
    </div>
  );
}