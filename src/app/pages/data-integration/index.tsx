import { useState } from "react";
import { DataIntegrationOverview } from "./overview";
import { PageHeader } from "@/app/components/page-header";
import { DataIntegrationSidebar } from "./sidebar";
import { ExcelStandardization } from "./excel-standardization";
import { MobileTopBar } from "@/app/components/MobileTopBar";

export type DataIntegrationPage = 
  | "overview"
  | "excel-standardization"
  | "api-standardization"
  | "data-sources"
  | "transformation-rules"
  | "data-quality"
  | "integration-log"
  | "api-management";

interface DataIntegrationModuleProps {
  onBack: () => void;
}

export function DataIntegrationModule({ onBack }: DataIntegrationModuleProps) {
  const [activePage, setActivePage] = useState<DataIntegrationPage>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = () => {
    switch (activePage) {
      case "overview": return "Tổng quan";
      case "excel-standardization": return "Chuẩn hóa Excel";
      case "api-standardization": return "Chuẩn hóa API";
      case "data-sources": return "Nguồn Dữ liệu";
      case "transformation-rules": return "Quy tắc Chuyển đổi";
      case "data-quality": return "Chất lượng Dữ liệu";
      case "integration-log": return "Nhật ký Tích hợp";
      case "api-management": return "Quản lý API";
      default: return "Tổng quan";
    }
  };

  const handleBackToOverview = () => {
    setActivePage("overview");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <PageHeader onNavigateToHome={onBack} />
      
      {/* Mobile Top Bar with Menu button */}
      <MobileTopBar 
        title={getPageTitle()} 
        onBack={activePage !== "overview" ? handleBackToOverview : onBack}
        onToggleSidebar={() => setSidebarOpen(true)}
      />

      {/* Main Content with Sidebar */}
      <div className="flex pt-14 lg:pt-16">
        <DataIntegrationSidebar 
          activePage={activePage} 
          onNavigate={setActivePage}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 w-full lg:w-auto">{/* Changed from min-w-0 */}
          {activePage === "overview" && (
            <DataIntegrationOverview onNavigate={setActivePage} />
          )}
          {activePage === "excel-standardization" && (
            <ExcelStandardization />
          )}
          {activePage === "api-standardization" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Chuẩn hóa API</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
          {activePage === "data-sources" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Nguồn Dữ liệu</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
          {activePage === "transformation-rules" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Quy tắc Chuyển đổi</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
          {activePage === "data-quality" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Chất lượng Dữ liệu</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
          {activePage === "integration-log" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Nhật ký Tích hợp</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
          {activePage === "api-management" && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Quản lý API</h2>
                <p className="text-gray-600">Trang đang được xây dựng...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}