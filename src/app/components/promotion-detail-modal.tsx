import { ExternalLink, X, Calendar, MapPin, Building2, Package, Percent, Clock, FileText, Shield, AlertTriangle, Database } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { PromotionData } from "./promotion-table";

interface PromotionDetailModalProps {
  promotion: PromotionData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PromotionDetailModal({
  promotion,
  isOpen,
  onClose,
}: PromotionDetailModalProps) {
  if (!promotion) return null;

  const getTypeBadge = (type: "official" | "unofficial") => {
    if (type === "official") {
      return (
        <Badge className="bg-green-100 text-green-800 border-green-300 px-3 py-1">
          <Shield className="h-4 w-4 mr-1" />
          Chính thức
        </Badge>
      );
    }
    return (
      <Badge className="bg-orange-100 text-orange-800 border-orange-300 px-3 py-1">
        <AlertTriangle className="h-4 w-4 mr-1" />
        Không chính thức
      </Badge>
    );
  };

  const getSourceBadge = (source: "dichvucong" | "vietrade" | "crawl") => {
    const badges = {
      dichvucong: (
        <Badge className="bg-blue-600 text-white border-blue-700 px-4 py-1.5 text-sm font-semibold">
          <Database className="h-4 w-4 mr-1" />
          Dịch vụ công
        </Badge>
      ),
      vietrade: (
        <Badge className="bg-green-600 text-white border-green-700 px-4 py-1.5 text-sm font-semibold">
          <Database className="h-4 w-4 mr-1" />
          Vietrade
        </Badge>
      ),
      crawl: (
        <Badge className="bg-purple-600 text-white border-purple-700 px-4 py-1.5 text-sm font-semibold">
          <Database className="h-4 w-4 mr-1" />
          Thu thập tự động
        </Badge>
      ),
    };
    return badges[source];
  };

  const highlightKeywords = (text: string) => {
    const keywords = ["giảm giá", "khuyến mãi", "sale", "%", "tặng", "ưu đãi", "miễn phí"];
    let highlighted = text;
    
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlighted = highlighted.replace(
        regex,
        '<mark class="bg-yellow-200 font-semibold px-1 rounded">$1</mark>'
      );
    });
    
    return highlighted;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    if (dateStr.includes("/")) return dateStr;
    const date = new Date(dateStr);
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
  };

  const formatDateTime = (isoStr: string) => {
    if (!isoStr) return "N/A";
    const date = new Date(isoStr);
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  // Generate content from meta data
  const getContent = () => {
    if (promotion.meta?.rawB?.content) {
      return promotion.meta.rawB.content;
    }
    
    // Generate default content
    let content = `Chương trình khuyến mãi "${promotion.name}" được tổ chức bởi ${promotion.company}`;
    
    if (promotion.time.start && promotion.time.end) {
      content += `, áp dụng từ ngày ${formatDate(promotion.time.start)} đến ngày ${formatDate(promotion.time.end)}.`;
    }

    if (promotion.location) {
      content += `\n\n📍 KHU VỰC ÁP DỤNG:\n${promotion.location}`;
    }

    if (promotion.productType) {
      content += `\n\n🛒 LOẠI SẢN PHẨM:\n${promotion.productType}`;
    }

    if (promotion.promotionMethod) {
      content += `\n\n🎯 PHƯƠNG THỨC:\n${promotion.promotionMethod}`;
    }

    if (promotion.discountPercent) {
      content += `\n\n💰 GIẢM GIÁ:\n${promotion.discountPercent}%`;
    }

    return content.trim();
  };

  const content = getContent();

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose} modal>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[95vw] max-w-[1400px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-5 border-b border-blue-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <DialogPrimitive.Title className="text-xl font-bold tracking-tight">
                    Chi tiết Chương trình Khuyến Mãi
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-blue-100 text-sm mt-1">
                    Mã số: {promotion.code} • Thu thập: {formatDateTime(promotion.crawledAt)}
                  </DialogPrimitive.Description>
                </div>
              </div>
              <DialogPrimitive.Close className="rounded-lg opacity-90 ring-offset-white transition-all hover:opacity-100 hover:bg-white/20 p-2.5 focus:outline-none focus:ring-2 focus:ring-white">
                <X className="h-5 w-5" />
                <span className="sr-only">Đóng</span>
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="p-6 bg-gray-50">
              {/* Status Banner */}
              <div className="mb-6 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-sm border-l-4 border-blue-600 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Nguồn thu thập:</span>
                    {getSourceBadge(promotion.source)}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Loại:</span>
                    {getTypeBadge(promotion.type)}
                  </div>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-12 gap-6">
                {/* Left Column - Main Info */}
                <div className="col-span-12 lg:col-span-5 space-y-5">
                  {/* Promotion Title Card */}
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Package className="h-7 w-7 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Tên chương trình
                        </h3>
                        <p className="text-xl font-bold text-gray-900 leading-tight">
                          {promotion.name}
                        </p>
                      </div>
                    </div>
                    
                    {/* Discount Badge */}
                    {promotion.discountPercent !== null && (
                      <div className="mt-5 pt-5 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-700">Mức giảm giá:</span>
                          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                            <Percent className="h-7 w-7" />
                            <span className="text-4xl font-bold">{promotion.discountPercent}%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Company Info */}
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-100 p-2.5 rounded-xl">
                        <Building2 className="h-6 w-6 text-green-700" />
                      </div>
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Thông tin đơn vị tổ chức
                      </h3>
                    </div>
                    <p className="text-lg font-bold text-gray-900 pl-12">
                      {promotion.company}
                    </p>
                  </div>

                  {/* Time & Location */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Date Range */}
                    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 p-2.5 rounded-xl">
                          <Calendar className="h-6 w-6 text-purple-700" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Thời gian áp dụng
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-5 pl-12">
                        <div>
                          <span className="text-xs text-gray-500 font-semibold block mb-1.5">Từ ngày:</span>
                          <span className="text-base font-bold text-gray-900">{formatDate(promotion.time.start)}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 font-semibold block mb-1.5">Đến ngày:</span>
                          <span className="text-base font-bold text-gray-900">{formatDate(promotion.time.end)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    {promotion.location && (
                      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-2.5 rounded-xl">
                            <MapPin className="h-6 w-6 text-orange-700" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Khu vực áp dụng
                          </h3>
                        </div>
                        <p className="text-base font-bold text-gray-900 pl-12">
                          {promotion.location}
                        </p>
                      </div>
                    )}

                    {/* Product Type */}
                    {promotion.productType && (
                      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-teal-100 p-2.5 rounded-xl">
                            <Package className="h-6 w-6 text-teal-700" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Loại sản phẩm
                          </h3>
                        </div>
                        <p className="text-base font-bold text-gray-900 pl-12">
                          {promotion.productType}
                        </p>
                      </div>
                    )}

                    {/* Promotion Method */}
                    {promotion.promotionMethod && (
                      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-cyan-100 p-2.5 rounded-xl">
                            <Shield className="h-6 w-6 text-cyan-700" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Phương thức khuyến mãi
                          </h3>
                        </div>
                        <p className="text-base font-bold text-gray-900 pl-12">
                          {promotion.promotionMethod}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 h-full hover:shadow-lg transition-shadow">
                    <div className="border-b border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Nội dung chi tiết chương trình
                      </h3>
                    </div>
                    <div className="p-6">
                      <div 
                        className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: highlightKeywords(content) }}
                      />

                      {/* File attachment info */}
                      {promotion.meta?.rawB?.file && (
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-2 text-blue-800">
                            <FileText className="h-5 w-5" />
                            <span className="font-semibold">File đính kèm:</span>
                          </div>
                          <p className="text-sm text-blue-700 mt-2 font-mono">
                            {promotion.meta.rawB.file}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Thu thập lúc: {formatDateTime(promotion.crawledAt)}</span>
                  </div>
                  <div className="flex gap-3">
                    {promotion.sourceUrl && (
                      <Button
                        onClick={() => window.open(promotion.sourceUrl!, "_blank")}
                        className="gap-2 bg-blue-600 hover:bg-blue-700 px-6 shadow-md hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Mở trang nguồn
                      </Button>
                    )}
                    <Button
                      onClick={onClose}
                      variant="outline"
                      className="gap-2 px-6 border-gray-300 hover:bg-gray-100 transition-all"
                    >
                      <X className="h-4 w-4" />
                      Đóng
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
