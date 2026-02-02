import { ReactNode } from "react";
import { PageHeader } from "@/app/components/page-header";

interface LayoutProps {
  children: ReactNode;
  activePage: "promotions" | "discount-codes" | "overview";
  onPageChange: (page: "promotions" | "discount-codes" | "overview") => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function Layout({ children, activePage, onPageChange, onScrollToSection }: LayoutProps) {
  const handleHeaderNavigate = (page: "overview" | "promotions" | "discount-codes") => {
    onPageChange(page);
  };

  const handleScrollToSection = (section: "overview" | "platform") => {
    const sectionId = section === "overview" ? "overview-section" : "platform-section";
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader onNavigate={handleHeaderNavigate} onScrollToSection={handleScrollToSection} />
      
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}