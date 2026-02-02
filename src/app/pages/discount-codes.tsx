import { useState } from "react";
import { Clock, Copy, ExternalLink, Eye, ChevronRight, Database, Bell, Clipboard, Trash2, BarChart3, Map } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { toast } from "sonner";
import { VoucherDetailModal } from "@/app/components/voucher-detail-modal";

interface VoucherData {
  id: string;
  platform: string;
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
}

const mockVouchers: VoucherData[] = [
  // Shopee - Điện tử
  {
    id: "SHOPEE_ELEC_001",
    platform: "Shopee",
    category: "Điện tử",
    discount: "15%",
    minOrder: "500.000đ",
    description: "Giảm 15% cho điện thoại, laptop, phụ kiện",
    expiry: "31/12",
    actionType: "copy",
    code: "SHOPEEELEC15",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Electronics",
    maxDiscount: "300.000đ",
  },
  {
    id: "SHOPEE_ELEC_002",
    platform: "Shopee",
    category: "Điện tử",
    discount: "200.000đ",
    minOrder: "2.000.000đ",
    description: "Voucher 200k cho đơn điện tử từ 2 triệu",
    expiry: "28/02",
    actionType: "copy",
    code: "ELEC200K",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Electronics",
    remaining: "Còn 55%",
  },
  // Shopee - Thời trang
  {
    id: "SHOPEE_FASHION_001",
    platform: "Shopee",
    category: "Thời trang",
    discount: "20%",
    minOrder: "300.000đ",
    description: "Giảm 20% cho thời trang nam nữ",
    expiry: "15/03",
    actionType: "copy",
    code: "FASHION20",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Fashion",
    maxDiscount: "150.000đ",
    remaining: "Còn 72%",
  },
  {
    id: "SHOPEE_FASHION_002",
    platform: "Shopee",
    category: "Thời trang",
    discount: "100.000đ",
    minOrder: "500.000đ",
    description: "Giảm 100k cho thời trang hàng hiệu",
    expiry: "20/03",
    actionType: "copy",
    code: "BRAND100",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Mall Fashion",
  },
  // Shopee - Gia dụng
  {
    id: "SHOPEE_HOME_001",
    platform: "Shopee",
    category: "Gia dụng",
    discount: "10%",
    minOrder: "200.000đ",
    description: "Giảm 10% cho đồ gia dụng, nội thất",
    expiry: "25/02",
    actionType: "copy",
    code: "HOME10",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Home",
    maxDiscount: "100.000đ",
  },
  {
    id: "SHOPEE_HOME_002",
    platform: "Shopee",
    category: "Gia dụng",
    discount: "50.000đ",
    minOrder: "300.000đ",
    description: "Giảm 50k cho đồ nhà bếp",
    expiry: "10/03",
    actionType: "copy",
    code: "KITCHEN50",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Kitchen",
    remaining: "Còn 80%",
  },
  // Shopee - Mỹ phẩm
  {
    id: "SHOPEE_BEAUTY_001",
    platform: "Shopee",
    category: "Mỹ phẩm",
    discount: "25%",
    minOrder: "400.000đ",
    description: "Giảm 25% cho mỹ phẩm chính hãng",
    expiry: "28/02",
    actionType: "copy",
    code: "BEAUTY25",
    icon: "🛍️",
    iconBg: "bg-orange-500",
    source: "Shopee Beauty",
    maxDiscount: "200.000đ",
    remaining: "Còn 45%",
  },
  
  // Lazada - Điện tử
  {
    id: "LAZADA_ELEC_001",
    platform: "Lazada",
    category: "Điện tử",
    discount: "100.000đ",
    minOrder: "1.000.000đ",
    description: "Giảm 100k cho điện thoại, laptop",
    expiry: "05/03",
    actionType: "copy",
    code: "LAZADAELEC100",
    icon: "🏪",
    iconBg: "bg-blue-600",
    source: "Lazada Tech",
    remaining: "Còn 60%",
  },
  {
    id: "LAZADA_ELEC_002",
    platform: "Lazada",
    category: "Điện tử",
    discount: "12%",
    minOrder: "800.000đ",
    description: "Giảm 12% cho phụ kiện điện tử",
    expiry: "12/03",
    actionType: "copy",
    code: "TECH12",
    icon: "🏪",
    iconBg: "bg-blue-600",
    source: "Lazada Accessories",
    maxDiscount: "150.000đ",
  },
  // Lazada - Thời trang
  {
    id: "LAZADA_FASHION_001",
    platform: "Lazada",
    category: "Thời trang",
    discount: "30%",
    minOrder: "600.000đ",
    description: "Giảm 30% cho thời trang quốc tế",
    expiry: "15/03",
    actionType: "copy",
    code: "LAZFASHION30",
    icon: "🏪",
    iconBg: "bg-blue-600",
    source: "Lazada Fashion",
    maxDiscount: "300.000đ",
    remaining: "Còn 38%",
  },
  // Lazada - Mẹ và bé
  {
    id: "LAZADA_BABY_001",
    platform: "Lazada",
    category: "Mẹ và bé",
    discount: "150.000đ",
    minOrder: "1.200.000đ",
    description: "Giảm 150k cho đồ mẹ và bé",
    expiry: "20/03",
    actionType: "copy",
    code: "BABY150",
    icon: "🏪",
    iconBg: "bg-blue-600",
    source: "Lazada Baby",
  },

  // Tiki - Sách
  {
    id: "TIKI_BOOK_001",
    platform: "Tiki",
    category: "Sách",
    discount: "20%",
    minOrder: "200.000đ",
    description: "Giảm 20% cho sách và văn phòng phẩm",
    expiry: "28/02",
    actionType: "copy",
    code: "TIKIBOOK20",
    icon: "📦",
    iconBg: "bg-blue-500",
    source: "Tiki Books",
    maxDiscount: "100.000đ",
    remaining: "Còn 88%",
  },
  {
    id: "TIKI_BOOK_002",
    platform: "Tiki",
    category: "Sách",
    discount: "50.000đ",
    minOrder: "300.000đ",
    description: "Freeship + Giảm 50k cho sách thiếu nhi",
    expiry: "10/03",
    actionType: "copy",
    code: "KIDSBOOK50",
    icon: "📦",
    iconBg: "bg-blue-500",
    source: "Tiki Kids Books",
  },
  // Tiki - Điện tử
  {
    id: "TIKI_ELEC_001",
    platform: "Tiki",
    category: "Điện tử",
    discount: "500.000đ",
    minOrder: "5.000.000đ",
    description: "Giảm 500k cho laptop, máy tính bảng",
    expiry: "31/03",
    actionType: "copy",
    code: "TIKILAPTOP500",
    icon: "📦",
    iconBg: "bg-blue-500",
    source: "Tiki Electronics",
  },
  // Tiki - Gia dụng
  {
    id: "TIKI_HOME_001",
    platform: "Tiki",
    category: "Gia dụng",
    discount: "15%",
    minOrder: "400.000đ",
    description: "Giảm 15% cho đồ gia dụng TikiNow",
    expiry: "25/02",
    actionType: "copy",
    code: "HOME15",
    icon: "📦",
    iconBg: "bg-blue-500",
    source: "Tiki Home",
    maxDiscount: "120.000đ",
    remaining: "Còn 65%",
  },

  // ShopeeFood
  {
    id: "SHOPEEFOOD_001",
    platform: "ShopeeFood",
    category: "Đồ ăn",
    discount: "30.000đ",
    minOrder: "100.000đ",
    description: "Giảm 30k cho đơn đồ ăn từ 100k",
    expiry: "20/02",
    actionType: "copy",
    code: "FOOD30K",
    icon: "🍔",
    iconBg: "bg-red-500",
    source: "ShopeeFood",
    remaining: "Còn 78%",
  },
  {
    id: "SHOPEEFOOD_002",
    platform: "ShopeeFood",
    category: "Đồ uống",
    discount: "20.000đ",
    minOrder: "50.000đ",
    description: "Giảm 20k cho trà sữa, cafe",
    expiry: "28/02",
    actionType: "copy",
    code: "DRINK20K",
    icon: "🍔",
    iconBg: "bg-red-500",
    source: "ShopeeFood Drinks",
    remaining: "Còn 90%",
  },
  {
    id: "SHOPEEFOOD_003",
    platform: "ShopeeFood",
    category: "Đồ ăn",
    discount: "50%",
    minOrder: "0đ",
    description: "Giảm tối đa 40k cho người dùng mới",
    expiry: "28/02",
    actionType: "copy",
    code: "NEWFOOD50",
    icon: "🍔",
    iconBg: "bg-red-500",
    source: "ShopeeFood New User",
    maxDiscount: "40.000đ",
  },

  // Sendo
  {
    id: "SENDO_ELEC_001",
    platform: "Sendo",
    category: "Điện thoại",
    discount: "200.000đ",
    minOrder: "3.000.000đ",
    description: "Giảm 200k cho điện thoại chính hãng",
    expiry: "25/02",
    actionType: "copy",
    code: "SENDOPHONE200",
    icon: "🛒",
    iconBg: "bg-green-600",
    source: "Sendo Mobile",
    remaining: "Còn 50%",
  },
  {
    id: "SENDO_FASHION_001",
    platform: "Sendo",
    category: "Thời trang",
    discount: "20%",
    minOrder: "300.000đ",
    description: "Giảm tối đa 150k cho thời trang",
    expiry: "10/03",
    actionType: "copy",
    code: "SENDOFASHION20",
    icon: "🛒",
    iconBg: "bg-green-600",
    source: "Sendo Fashion",
    maxDiscount: "150.000đ",
  },
  {
    id: "SENDO_HOME_001",
    platform: "Sendo",
    category: "Nội thất",
    discount: "300.000đ",
    minOrder: "2.000.000đ",
    description: "Giảm 300k cho nội thất, trang trí",
    expiry: "18/03",
    actionType: "copy",
    code: "FURNITURE300",
    icon: "🛒",
    iconBg: "bg-green-600",
    source: "Sendo Home",
  },

  // Nguyên Kim
  {
    id: "NK_ELEC_001",
    platform: "Nguyên Kim",
    category: "Điện lạnh",
    discount: "1.000.000đ",
    minOrder: "15.000.000đ",
    description: "Giảm 1 triệu cho tủ lạnh, máy giặt",
    expiry: "31/03",
    actionType: "banner",
    icon: "⚡",
    iconBg: "bg-yellow-500",
    source: "Nguyên Kim Home",
  },
  {
    id: "NK_TV_001",
    platform: "Nguyên Kim",
    category: "Tivi",
    discount: "15%",
    minOrder: "5.000.000đ",
    description: "Giảm 15% tối đa 3 triệu cho Tivi",
    expiry: "10/03",
    actionType: "banner",
    icon: "⚡",
    iconBg: "bg-yellow-500",
    source: "Nguyên Kim TV",
    maxDiscount: "3.000.000đ",
  },
  {
    id: "NK_KITCHEN_001",
    platform: "Nguyên Kim",
    category: "Nhà bếp",
    discount: "500.000đ",
    minOrder: "8.000.000đ",
    description: "Giảm 500k cho thiết bị nhà bếp",
    expiry: "25/03",
    actionType: "banner",
    icon: "⚡",
    iconBg: "bg-yellow-500",
    source: "Nguyên Kim Kitchen",
  },
];

const platforms = [
  "Shopee",
  "Lazada",
  "Tiki",
  "ShopeeFood",
  "Sendo",
  "Nguyên Kim"
];

// Function to get categories for a selected platform
const getCategoriesForPlatform = (platform: string): string[] => {
  const categories = mockVouchers
    .filter(v => v.platform === platform)
    .map(v => v.category);
  return Array.from(new Set(categories)); // Remove duplicates
};

export function DiscountCodesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Shopee");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedVoucher, setSelectedVoucher] = useState<VoucherData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Get categories for the selected platform
  const availableCategories = getCategoriesForPlatform(selectedPlatform);
  
  // Set default category when platform changes
  if (selectedCategory === "" || !availableCategories.includes(selectedCategory)) {
    if (availableCategories.length > 0) {
      setSelectedCategory(availableCategories[0]);
    }
  }

  const filteredVouchers = mockVouchers.filter(
    v => v.platform === selectedPlatform && v.category === selectedCategory
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredVouchers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVouchers = filteredVouchers.slice(startIndex, endIndex);

  const handleCopyCode = (code: string) => {
    // Fallback copy method for when Clipboard API is blocked
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      toast.success(`Đã copy mã: ${code}`);
    } catch (err) {
      toast.error('Không thể copy mã');
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleViewDetails = (voucher: VoucherData) => {
    setSelectedVoucher(voucher);
  };

  const handlePlatformChange = (plat: string) => {
    setSelectedPlatform(plat);
    setCurrentPage(1); // Reset to first page when changing platform
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-6">
      {/* Platform & Category Filter Card */}
      <div className="mb-6 bg-white rounded-xl shadow-md p-4 border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Platform Dropdown */}
          <div className="lg:w-64 flex-shrink-0">
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-3">Platform</h3>
            <select
              value={selectedPlatform}
              onChange={(e) => handlePlatformChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-semibold bg-white hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all h-[42px]"
            >
              {platforms.map((plat) => (
                <option key={plat} value={plat}>
                  {plat}
                </option>
              ))}
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-3">Danh mục</h3>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all h-[42px] ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Voucher Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentVouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 group"
          >
            {/* Voucher Card Content */}
            <div className="flex">
              {/* Left Side - Green Background */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-4 flex flex-col items-center justify-center w-24 relative">
                <div className={`${voucher.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 shadow-lg`}>
                  {voucher.icon}
                </div>
                <div className="text-center text-xs font-semibold leading-tight">
                  {voucher.category}
                </div>
                <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                  <div className="bg-white text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
                    <Clock className="h-3 w-3" />
                    HSD: {voucher.expiry}
                  </div>
                </div>
              </div>

              {/* Right Side - White Background */}
              <div className="flex-1 p-4">
                {/* Discount Amount */}
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-700">Giảm </span>
                  <span className="text-3xl font-bold text-orange-600">{voucher.discount}</span>
                </div>

                {/* Min Order */}
                <div className="text-xs text-gray-600 mb-2">
                  ĐH tối thiểu: <span className="font-semibold">{voucher.minOrder}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">
                  <span className="italic">{voucher.description}</span>
                </p>

                {/* Source Badge */}
                <Badge className="bg-orange-100 text-orange-800 text-xs mb-3">
                  {voucher.source}
                </Badge>

                {/* Actions */}
                <div className="flex gap-2">
                  {voucher.listUrl && (
                    <a
                      href={voucher.listUrl}
                      className="text-blue-600 hover:text-blue-800 text-xs font-semibold hover:underline"
                    >
                      List áp dụng
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="border-t border-gray-200 bg-gray-50 p-3 flex gap-2">
              <Button
                size="sm"
                onClick={() => handleViewDetails(voucher)}
                variant="outline"
                className="flex-1 text-xs gap-1"
              >
                <Eye className="h-3 w-3" />
                Chi tiết
              </Button>
              {voucher.actionType === "copy" && voucher.code ? (
                <Button
                  size="sm"
                  onClick={() => handleCopyCode(voucher.code!)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-xs gap-1"
                >
                  <Copy className="h-3 w-3" />
                  Copy mã
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => window.open("#", "_blank")}
                  className="flex-1 bg-green-700 hover:bg-green-800 text-xs gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  Đến Banner
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Items per page */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 font-medium">Hiển thị:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value={6}>6 mã/trang</option>
              <option value={9}>9 mã/trang</option>
              <option value={12}>12 mã/trang</option>
              <option value={24}>24 mã/trang</option>
            </select>
            <span className="text-sm text-gray-600">
              Hiển thị {startIndex + 1}-{Math.min(endIndex, filteredVouchers.length)} trong tổng số {filteredVouchers.length} mã
            </span>
          </div>

          {/* Page navigation */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              variant="outline"
              className="px-3 py-2"
            >
              Đầu
            </Button>
            <Button
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              className="px-3 py-2"
            >
              ‹ Trước
            </Button>
            
            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        page === currentPage
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <Button
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              className="px-3 py-2"
            >
              Sau ›
            </Button>
            <Button
              size="sm"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              variant="outline"
              className="px-3 py-2"
            >
              Cuối
            </Button>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-2">ℹ️ Thông tin</h3>
        <p className="text-sm text-blue-800">
          Các mã giảm giá được thu thập từ nhiều nguồn khác nhau để phục vụ công tác phân tích xu hướng thị trường và giám sát hoạt động khuyến mãi.
        </p>
      </div>

      {/* Voucher Detail Modal */}
      <VoucherDetailModal
        voucher={selectedVoucher}
        isOpen={selectedVoucher !== null}
        onClose={() => setSelectedVoucher(null)}
      />
    </div>
  );
}