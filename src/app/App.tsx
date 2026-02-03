import { useState } from "react";
import { Layout } from "@/app/components/layout";
import { PageLayout } from "@/app/components/page-layout";
import { PromotionsTablePage } from "@/app/pages/promotions-table";
import { DiscountCodesPage } from "@/app/pages/discount-codes";
import { MappaStylePage } from "@/app/pages/mappa-style";
import { PriceManagementModule } from "@/app/pages/price-management";
import { EcommerceViolationModule } from "@/app/pages/ecommerce-violation";
import { Toaster } from "sonner";

function App() {
  const [activePage, setActivePage] = useState<"promotions" | "discount-codes" | "overview" | "price-management" | "ecommerce-violation">("overview");

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
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
          onNavigate={setActivePage}
        >
          <PromotionsTablePage />
        </PageLayout>
      ) : activePage === "discount-codes" ? (
        <PageLayout 
          pageTitle="Trung tâm Khuyến mãi" 
          sectionTitle="Quản lý mã giảm giá"
          onNavigate={setActivePage}
        >
          <DiscountCodesPage />
        </PageLayout>
      ) : activePage === "price-management" ? (
        <PriceManagementModule onBack={() => setActivePage("overview")} />
      ) : (
        <EcommerceViolationModule onBack={() => setActivePage("overview")} />
      )}
    </>
  );
}

export default App;