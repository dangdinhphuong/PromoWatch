import { useState } from "react";
import { ViolationOverview } from "./overview";
import { CategoriesPage } from "./categories";
import { DetectionPage } from "./detection";
import { RiskAlertPage } from "./risk-alert";
import { LivestreamPage } from "./livestream";
import { ViolationLogPage } from "./violation-log";
import { PageHeader } from "@/app/components/page-header";
import { EcommerceViolationSidebar } from "@/app/components/EcommerceViolationSidebar";

interface EcommerceViolationModuleProps {
  onBack: () => void;
}

export type ViolationPage = "overview" | "categories" | "detection" | "risk-alert" | "livestream" | "violation-log";

export function EcommerceViolationModule({ onBack }: EcommerceViolationModuleProps) {
  const [currentPage, setCurrentPage] = useState<ViolationPage>("overview");

  const handleNavigate = (page: ViolationPage) => {
    setCurrentPage(page);
  };

  const handleBackToOverview = () => {
    setCurrentPage("overview");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader onNavigateToHome={onBack} />
      
      {/* Main Content with Sidebar */}
      <div className="flex pt-16">
        <EcommerceViolationSidebar activePage={currentPage} onNavigate={handleNavigate} />
        <div className="flex-1">
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