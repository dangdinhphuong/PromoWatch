import { useState } from "react";
import { Layout } from "@/app/components/layout";
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
      <Layout 
        activePage={activePage} 
        onPageChange={setActivePage}
        onScrollToSection={handleScrollToSection}
      >
        {activePage === "overview" ? (
          <MappaStylePage onNavigate={setActivePage} />
        ) : activePage === "promotions" ? (
          <PromotionsTablePage />
        ) : (
          <DiscountCodesPage />
        )}
      </Layout>
    </>
  );
}

export default App;