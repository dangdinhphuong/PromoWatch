import { useState } from "react";
import { Layout } from "@/app/components/layout";
import { PageLayout } from "@/app/components/page-layout";
import { PromotionsTablePage } from "@/app/pages/promotions-table";
import { DiscountCodesPage } from "@/app/pages/discount-codes";
import { MappaStylePage } from "@/app/pages/mappa-style";
import { PriceManagementModule } from "@/app/pages/price-management";
import { EcommerceViolationModule } from "@/app/pages/ecommerce-violation";
import { DataIntegrationModule } from "@/app/pages/data-integration";
import { PWAMeta } from "@/app/components/PWAMeta";
import { PWAInstallBanner } from "@/app/components/PWAInstallBanner";
import { MobileBottomNav } from "@/app/components/MobileBottomNav";
import { Toaster } from "sonner";

function App() {
  const [activePage, setActivePage] = useState<"promotions" | "discount-codes" | "overview" | "price-management" | "ecommerce-violation" | "data-integration">("overview");

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <PWAMeta />
      <PWAInstallBanner />
      <Toaster position="top-right" richColors />

      {/* Main Content with bottom padding for mobile nav */}
      <div className="pb-0 lg:pb-0 mb-[72px] lg:mb-0">
        {activePage === "overview" ? (
          <Layout
            activePage={activePage}
            onPageChange={setActivePage}
            onScrollToSection={handleScrollToSection}
          >
            <MappaStylePage onNavigate={setActivePage} />
          </Layout>
        ) : activePage === "promotions" ? (
          <PageLayout
            pageTitle="Trung tâm Khuyến mãi"
            sectionTitle="Quản lý tin khuyến mãi"
            onNavigateToHome={() => setActivePage("overview")}
          >
            <PromotionsTablePage />
          </PageLayout>
        ) : activePage === "discount-codes" ? (
          <PageLayout
            pageTitle="Trung tâm Khuyến mãi"
            sectionTitle="Quản lý mã giảm giá"
            onNavigateToHome={() => setActivePage("overview")}
          >
            <DiscountCodesPage />
          </PageLayout>
        ) : activePage === "price-management" ? (
          <PriceManagementModule onBack={() => setActivePage("overview")} />
        ) : activePage === "data-integration" ? (
          <DataIntegrationModule onBack={() => setActivePage("overview")} />
        ) : (
          <EcommerceViolationModule onBack={() => setActivePage("overview")} />
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activePage={activePage} onNavigate={setActivePage} />
    </>
  );
}

export default App;
