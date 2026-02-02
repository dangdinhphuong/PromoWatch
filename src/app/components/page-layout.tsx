import { ReactNode } from "react";
import { PageHeader } from "@/app/components/page-header";

interface PageLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  sectionTitle?: string;
  onNavigate?: (page: "overview" | "promotions" | "discount-codes") => void;
}

export function PageLayout({ children, pageTitle, sectionTitle, onNavigate }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader onNavigate={onNavigate} />
      
      {/* Page Title Section */}
      {pageTitle && (
        <div className="bg-white border-b border-gray-200">
          <div className="px-8 py-4">
            <h1 className="text-xl font-bold text-gray-900">{pageTitle}</h1>
            {sectionTitle && (
              <p className="text-sm text-gray-600 mt-1">{sectionTitle}</p>
            )}
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}