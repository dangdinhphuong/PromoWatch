import { ReactNode } from "react";
import { PageHeader } from "@/app/components/page-header";
import { MobileTopBar } from "@/app/components/MobileTopBar";

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
      {/* Desktop Header */}
      <PageHeader onNavigate={handleHeaderNavigate} onScrollToSection={handleScrollToSection} />
      
      {/* Mobile Top Bar with Logo */}
      <MobileTopBar showLogo={true} />
      
      {/* Main Content with top padding for fixed header */}
      <main className="pt-14 lg:pt-16">{children}</main>
    </div>
  );
}