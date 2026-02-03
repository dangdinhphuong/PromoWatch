import { ReactNode } from "react";
import { PageHeader } from "@/app/components/page-header";

interface PageLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  sectionTitle?: string;
  onNavigate?: (page: "overview" | "promotions" | "discount-codes") => void;
  onNavigateToHome?: () => void;
}

export function PageLayout({ children, pageTitle, sectionTitle, onNavigate, onNavigateToHome }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader onNavigate={onNavigate} onNavigateToHome={onNavigateToHome} />
      
      {/* Page Title Section with top padding for fixed header */}
      {pageTitle && (
        <div className="bg-white border-b border-gray-200 mt-16">
          <div className="px-8 py-4">
            <h1 className="text-xl font-bold text-gray-900">{pageTitle}</h1>
            {sectionTitle && (
              <p className="text-sm text-gray-600 mt-1">{sectionTitle}</p>
            )}
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`w-full ${!pageTitle ? 'mt-16' : ''}`}>
        {children}
      </div>
    </div>
  );
}