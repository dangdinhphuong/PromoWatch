import { useState } from "react";
import { Layout } from "@/app/components/layout";
import { PageLayout } from "@/app/components/page-layout";
import { PromotionsTablePage } from "@/app/pages/promotions-table";
import { DiscountCodesPage } from "@/app/pages/discount-codes";
import { MappaStylePage } from "@/app/pages/mappa-style";
import { Toaster } from "sonner";

function App() {
  const [activePage, setActivePage] = useState<"promotions" | "discount-codes" | "overview">("overview");

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
      ) : (
        <PageLayout 
          pageTitle="Trung tâm Khuyến mãi" 
          sectionTitle="Quản lý mã giảm giá"
          onNavigate={setActivePage}
        >
          <DiscountCodesPage />
        </PageLayout>
      )}
    </>
  );
}

export default App;