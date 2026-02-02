import { X, Copy, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { toast } from "sonner";

interface VoucherDetailModalProps {
  voucher: {
    id: string;
    category: string;
    discount: string;
    minOrder: string;
    description: string;
    expiry: string;
    actionType: "banner" | "copy";
    code?: string;
    icon: string;
    iconBg: string;
    listUrl?: string;
    source: string;
    remaining?: string;
    maxDiscount?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VoucherDetailModal({ voucher, isOpen, onClose }: VoucherDetailModalProps) {
  if (!voucher) return null;

  const handleCopyCode = () => {
    if (voucher.code) {
      // Fallback copy method for when Clipboard API is blocked
      const textarea = document.createElement('textarea');
      textarea.value = voucher.code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        toast.success(`Đã copy mã: ${voucher.code}`);
      } catch (err) {
        toast.error('Không thể copy mã');
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <DialogPrimitive.Title className="text-lg font-bold text-gray-900">
              Chi tiết Voucher
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="rounded-lg opacity-70 hover:opacity-100 hover:bg-gray-100 p-2 transition-all">
              <X className="h-5 w-5" />
              <span className="sr-only">Đóng</span>
            </DialogPrimitive.Close>
          </div>

          <DialogPrimitive.Description className="sr-only">
            Thông tin chi tiết về mã giảm giá {voucher.id}
          </DialogPrimitive.Description>

          {/* Content */}
          <div className="p-6">
            {/* Main Discount Title */}
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              Giảm {voucher.discount}
            </h2>

            {/* Information Grid */}
            <div className="space-y-3 mb-5">
              {/* Remaining percentage */}
              {voucher.remaining && (
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-700 font-medium">Còn lại:</span>
                  <span className="text-base font-bold text-gray-900">{voucher.remaining}</span>
                </div>
              )}

              {/* Max discount */}
              {voucher.maxDiscount && (
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-700 font-medium">Tối đa:</span>
                  <span className="text-base font-bold text-gray-900">{voucher.maxDiscount}</span>
                </div>
              )}

              {/* Min order */}
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-700 font-medium">ĐH tối thiểu:</span>
                <span className="text-base font-bold text-gray-900">{voucher.minOrder}</span>
              </div>

              {/* Category */}
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-700 font-medium">Ngành hàng:</span>
                <span className="text-base font-bold text-gray-900">{voucher.category}</span>
              </div>
            </div>

            {/* Notice Section */}
            <div className="mb-5 bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-red-700 mb-1">Lưu ý:</p>
                  <p className="text-sm text-red-700 leading-relaxed">
                    {voucher.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Source Badge */}
            <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-5">
              Nguồn: {voucher.source}
            </Badge>

            {/* Expiry Info */}
            <div className="mb-6 text-sm text-gray-600">
              <span className="font-medium">Hạn sử dụng:</span> {voucher.expiry}/2026
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {voucher.listUrl && (
                <Button
                  variant="outline"
                  className="flex-1 border-green-600 text-green-700 hover:bg-green-50 font-semibold"
                  onClick={() => window.open(voucher.listUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  List áp dụng
                </Button>
              )}
              
              {voucher.actionType === "copy" && voucher.code ? (
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md"
                  onClick={handleCopyCode}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Mã
                </Button>
              ) : (
                <Button
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold shadow-md"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Đến Banner
                </Button>
              )}
            </div>

            {/* Voucher Code Display (if available) */}
            {voucher.code && (
              <div className="mt-5 pt-5 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Mã voucher:</p>
                <div className="bg-gray-100 rounded-lg px-4 py-3 border-2 border-dashed border-gray-300">
                  <code className="text-lg font-bold text-gray-900 tracking-wider">
                    {voucher.code}
                  </code>
                </div>
              </div>
            )}
          </div>

          {/* Warning Footer */}
          <div className="bg-yellow-50 border-t border-yellow-200 px-6 py-3">
            <p className="text-xs text-yellow-800">
              ⚠️ Thông tin từ nguồn không chính thống - Cần xác minh trước khi sử dụng
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}