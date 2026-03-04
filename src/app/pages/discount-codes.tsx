import { useState, useEffect } from "react";
import { Eye, Copy, Clock, ChevronDown, ChevronLeft, ChevronRight, Info, X } from "lucide-react";
import { toast } from "sonner";

interface DiscountCode {
  id: string;
  title: string;
  discount: string;
  discountValue: number;
  discountType: string;
  minOrder: string;
  description: string;
  platform: string;
  category: string;
  expiryDate: string;
  code: string;
  categoryIcon: string;
  thumbnail?: string;
  startDate?: string;
  endDate?: string;
  termsAndConditions?: string;
  link?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface VoucherResponse {
  status: number;
  message: string;
  data: {
    data: any[];
    page: number;
    pageSize: number;
    count: number;
  };
}

const platformOptions = [
  { value: "", label: "Tất cả" },
  { value: "shopee", label: "Shopee" },
  { value: "lazada", label: "Lazada" },
  { value: "tiki", label: "Tiki" },
  { value: "shopeefood", label: "ShopeeFood" },
  { value: "sendo", label: "Sendo" },
  { value: "nguyen-kim", label: "Nguyên Kim" }
];

const categoryIcons: Record<string, string> = {
  "toan-san": "🛍️",
  "doi-tac-thanh-toan": "💳",
  "sac-dep": "💄",
  "quoc-te": "🌏",
  "thoi-trang": "👔",
  "bach-hoa-tieu-dung": "🛒",
  "nha-cua-doi-song": "🏠",
  "gia-dung-doi-song": "🔧",
  "dien-tu": "📱",
  "me-be": "👶",
  "shop-noi-bat": "⭐"
};

// ❌ REMOVED: Mock data - Now using 100% real Piggi API

export function DiscountCodesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("shopee");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [vouchers, setVouchers] = useState<DiscountCode[]>([]);
  const [loadingVouchers, setLoadingVouchers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalVouchers, setTotalVouchers] = useState(0);
  const [selectedVoucher, setSelectedVoucher] = useState<DiscountCode | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const pageSize = 12;

  // Fetch categories when platform changes
  useEffect(() => {
    if (!selectedPlatform) {
      setCategories([]);
      return;
    }

    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const query = new URLSearchParams({
          slugSupplier: selectedPlatform,
          isNotChildren: "true",
          pageSize: "9999",
        });

        const response = await fetch(`/api/piggi/voucher-category?${query.toString()}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        // Map API response to Category interface
        const mappedCategories: Category[] = (data.data || []).map((item: any) => ({
          id: item.id?.toString() || item.categoryId?.toString(),
          name: item.title || item.name,
          slug: item.slug || item.categorySlug
        }));
        
        setCategories(mappedCategories);
        
        // Auto-select "Toàn Sản" (all categories) when platform changes
        setSelectedCategory("");
        setSelectedCategoryId("");
        
        toast.success(`Đã tải ${mappedCategories.length} danh mục từ ${platformOptions.find(p => p.value === selectedPlatform)?.label}`);
      } catch (error: any) {
        console.error("❌ Error fetching categories:", error);
        
        // More detailed error message
        toast.error("Không thể tải danh mục", {
          description: error.message || "Vui lòng thử lại sau"
        });
        
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [selectedPlatform]);

  // Fetch vouchers when platform or category changes
  useEffect(() => {
    if (!selectedPlatform) {
      setVouchers([]);
      return;
    }

    // Reset to page 1 when platform or category changes
    setCurrentPage(1);
    setHasMore(true);

    const fetchVouchers = async () => {
      setLoadingVouchers(true);
      try {
        const query = new URLSearchParams({
          sort: "totalClick,DESC",
          slugSupplier: selectedPlatform,
          page: "1",
          pageSize: String(pageSize),
        });

        if (selectedCategoryId) {
          query.set("categoryIds", selectedCategoryId);
        }

        const response = await fetch(`/api/piggi/voucher?${query.toString()}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: VoucherResponse = await response.json();
        // Map API response to DiscountCode interface
        const mappedVouchers: DiscountCode[] = (data.data?.data || []).map((item: any) => {
          let discountDisplay = "0đ";
          
          if (item.voucherType === "percent") {
            if (item.voucherAmount) {
              discountDisplay = `${item.voucherAmount}%`;
            } else if (item.voucherReward) {
              discountDisplay = `${item.voucherReward}%`;
            } else if (item.maxDiscount) {
              discountDisplay = `${item.maxDiscount}%`;
            }
          } else {
            if (item.voucherAmount) {
              discountDisplay = `${item.voucherAmount.toLocaleString('vi-VN')}đ`;
            } else if (item.maxDiscount) {
              discountDisplay = `${item.maxDiscount.toLocaleString('vi-VN')}đ`;
            } else if (item.voucherReward) {
              discountDisplay = `${item.voucherReward.toLocaleString('vi-VN')}đ`;
            }
          }
          
          let minOrderDisplay = "0đ";
          if (item.minSpend) {
            const minSpendNum = parseInt(item.minSpend);
            minOrderDisplay = `${minSpendNum.toLocaleString('vi-VN')}đ`;
          }
          
          let expiryDisplay = "N/A";
          if (item.expiredAt) {
            const date = new Date(item.expiredAt);
            expiryDisplay = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
          }
          
          const categoryName = item.voucherCategory?.title || "Khác";
          const categorySlug = item.voucherCategory?.slug || "";
          const description = item.longDescription || item.note || item.shortDescription || "Không có mô tả";
          
          return {
            id: item.id?.toString() || item.voucherId,
            title: item.title || "Mã giảm giá",
            discount: discountDisplay,
            discountValue: item.voucherAmount || item.maxDiscount || 0,
            discountType: item.voucherType || "value",
            minOrder: minOrderDisplay,
            description: description,
            platform: item.supplier?.title || selectedPlatform,
            category: categoryName,
            expiryDate: expiryDisplay,
            code: item.voucherCode || "NOCODE",
            categoryIcon: categoryIcons[categorySlug] || "🛍️",
            thumbnail: item.avatar || item.thumbnail,
            startDate: item.startAt,
            endDate: item.expiredAt,
            termsAndConditions: item.usageTerms || item.longDescription,
            link: item.detailLink || item.affLink
          };
        });
        
        setVouchers(mappedVouchers);
        setTotalVouchers(data.data?.count || 0);
        
        // Check if there are more pages
        const totalPages = Math.ceil((data.data?.count || 0) / pageSize);
        setHasMore(totalPages > 1);
        
        toast.success(`Đã tải ${mappedVouchers.length} mã giảm giá`);
      } catch (error: any) {
        console.error("❌ Error fetching vouchers:", error);
        
        // More detailed error message
        toast.error("Không thể tải mã giảm giá", {
          description: error.message || "Vui lòng thử lại sau"
        });
        
        setVouchers([]);
        setTotalVouchers(0);
      } finally {
        setLoadingVouchers(false);
      }
    };

    fetchVouchers();
  }, [selectedPlatform, selectedCategoryId]);

  const handleCopyCode = (code: string) => {
    // Fallback method for clipboard API restrictions
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(
          () => {
            toast.success(`Đã sao chép mã: ${code}`);
          },
          () => {
            // Fallback if clipboard API fails
            fallbackCopyTextToClipboard(code);
          }
        );
      } else {
        // Use fallback method
        fallbackCopyTextToClipboard(code);
      }
    } catch (err) {
      fallbackCopyTextToClipboard(code);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success(`Đã sao chép mã: ${text}`);
      } else {
        toast.error("Không thể sao chép. Vui lòng copy thủ công.");
      }
    } catch (err) {
      toast.error("Không thể sao chép. Vui lòng copy thủ công.");
    }
    
    document.body.removeChild(textArea);
  };

  const handleViewDetails = (id: string) => {
    const voucher = vouchers.find(v => v.id === id);
    if (voucher) {
      setSelectedVoucher(voucher);
    } else {
      toast.info("Chức năng xem chi tiết đang được phát triển");
    }
  };

  const totalCodes = totalVouchers;
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalCodes);
  const totalPages = Math.ceil(totalCodes / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFirstPage = () => {
    handlePageChange(1);
  };

  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const handleLastPage = () => {
    handlePageChange(totalPages);
  };

  const handleLoadMore = async () => {
    if (!hasMore || loadingMore) return;

    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      
      const query = new URLSearchParams({
        sort: "totalClick,DESC",
        slugSupplier: selectedPlatform,
        page: String(nextPage),
        pageSize: String(pageSize),
      });

      if (selectedCategoryId) {
        query.set("categoryIds", selectedCategoryId);
      }

      const response = await fetch(`/api/piggi/voucher?${query.toString()}`);
      
      if (!response.ok) {
        throw new Error("Failed to load more vouchers");
      }

      const data: VoucherResponse = await response.json();
      
      // Map new vouchers
      const newVouchers: DiscountCode[] = data.data.data.map((item: any) => {
        let discountDisplay = "0đ";
        
        if (item.voucherType === "percent") {
          if (item.voucherAmount) {
            discountDisplay = `${item.voucherAmount}%`;
          } else if (item.voucherReward) {
            discountDisplay = `${item.voucherReward}%`;
          } else if (item.maxDiscount) {
            discountDisplay = `${item.maxDiscount}%`;
          }
        } else {
          if (item.voucherAmount) {
            discountDisplay = `${item.voucherAmount.toLocaleString('vi-VN')}đ`;
          } else if (item.maxDiscount) {
            discountDisplay = `${item.maxDiscount.toLocaleString('vi-VN')}đ`;
          } else if (item.voucherReward) {
            discountDisplay = `${item.voucherReward.toLocaleString('vi-VN')}đ`;
          }
        }
        
        let minOrderDisplay = "0đ";
        if (item.minSpend) {
          const minSpendNum = parseInt(item.minSpend);
          minOrderDisplay = `${minSpendNum.toLocaleString('vi-VN')}đ`;
        }
        
        let expiryDisplay = "N/A";
        if (item.expiredAt) {
          const date = new Date(item.expiredAt);
          expiryDisplay = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        }
        
        const categoryName = item.voucherCategory?.title || "Khác";
        const categorySlug = item.voucherCategory?.slug || "";
        const description = item.longDescription || item.note || item.shortDescription || "Không có mô tả";
        
        return {
          id: item.id?.toString() || item.voucherId,
          title: item.title || "Mã giảm giá",
          discount: discountDisplay,
          discountValue: item.voucherAmount || item.maxDiscount || 0,
          discountType: item.voucherType || "value",
          minOrder: minOrderDisplay,
          description: description,
          platform: item.supplier?.title || selectedPlatform,
          category: categoryName,
          expiryDate: expiryDisplay,
          code: item.voucherCode || "NOCODE",
          categoryIcon: categoryIcons[categorySlug] || "🛍️",
          thumbnail: item.avatar || item.thumbnail,
          startDate: item.startAt,
          endDate: item.expiredAt,
          termsAndConditions: item.usageTerms || item.longDescription,
          link: item.detailLink || item.affLink
        };
      });

      // Append new vouchers to existing list
      setVouchers(prev => [...prev, ...newVouchers]);
      setCurrentPage(nextPage);
      
      // Check if there are more pages
      const totalPages = Math.ceil(data.data.count / data.data.pageSize);
      setHasMore(nextPage < totalPages);
      
      toast.success(`Đã tải thêm ${newVouchers.length} mã giảm giá`);
    } catch (error) {
      console.error("Error loading more vouchers:", error);
      toast.error("Không thể tải thêm. Vui lòng thử lại.");
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-6">
      {/* Filter Section */}
      <div className="px-3 sm:px-4 lg:px-6 pt-3 lg:pt-6 pb-4">
        <div className="bg-white rounded-[14px] border border-gray-200 shadow-md p-3 sm:p-4 lg:p-[17px]">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
            {/* Platform Dropdown */}
            <div className="w-full lg:w-64 flex flex-col gap-2 lg:gap-3">
              <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase">
                Platform
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => {
                  setSelectedPlatform(e.target.value);
                  setSelectedCategory("");
                }}
                className="h-[42px] w-full px-4 rounded-[10px] border-2 border-gray-300 text-sm focus:outline-none focus:border-blue-500"
              >
                {platformOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Buttons */}
            <div className="w-full lg:flex-1 flex flex-col gap-2 lg:gap-3">
              <label className="text-xs sm:text-sm font-bold text-gray-700 uppercase">
                Danh mục
              </label>
              <div className="flex gap-2 flex-wrap">
                {loadingCategories ? (
                  <div className="text-xs sm:text-sm text-gray-500">Đang tải danh mục...</div>
                ) : categories.length === 0 ? (
                  <div className="text-xs sm:text-sm text-gray-500">
                    {selectedPlatform ? "Không có danh mục" : "Vui lòng chọn platform"}
                  </div>
                ) : (
                  <>
                    {/* Toàn Sản Button - Always First */}
                    <button
                      onClick={() => {
                        setSelectedCategory("");
                        setSelectedCategoryId("");
                      }}
                      className="h-[36px] sm:h-[42px] px-3 sm:px-4 lg:px-6 rounded-[10px] text-xs sm:text-sm transition-all whitespace-nowrap"
                      style={{
                        backgroundColor: selectedCategory === "" ? "#00a63e" : "#f3f4f6",
                        color: selectedCategory === "" ? "white" : "#364153",
                        boxShadow: selectedCategory === "" ? "0px 4px 6px rgba(0,0,0,0.1)" : "none"
                      }}
                    >
                      Toàn Sản
                    </button>
                    
                    {/* Category Buttons from API */}
                    {categories.slice(0, 7).map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => {
                          setSelectedCategory(category.slug);
                          setSelectedCategoryId(category.id);
                        }}
                        className="h-[36px] sm:h-[42px] px-3 sm:px-4 lg:px-6 rounded-[10px] text-xs sm:text-sm transition-all whitespace-nowrap"
                        style={{
                          backgroundColor: selectedCategory === category.slug ? "#00a63e" : "#f3f4f6",
                          color: selectedCategory === category.slug ? "white" : "#364153",
                          boxShadow: selectedCategory === category.slug ? "0px 4px 6px rgba(0,0,0,0.1)" : "none"
                        }}
                      >
                        {category.name}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voucher Grid */}
      <div className="px-3 sm:px-4 lg:px-6 pb-6">
        <div className="w-full">
          {loadingVouchers ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
                  <div className="flex">
                    <div className="w-1 bg-gray-300"></div>
                    <div className="flex-1 p-4">
                      <div className="h-10 w-10 bg-gray-300 rounded mb-3"></div>
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                      <div className="h-16 bg-gray-300 rounded mb-3"></div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 bg-gray-300 rounded"></div>
                        <div className="flex-1 h-8 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : vouchers.length === 0 ? (
            <div className="flex items-center justify-center py-12 sm:py-20">
              <div className="text-center">
                <p className="text-base sm:text-lg font-bold text-gray-700 mb-2">Không có mã giảm giá</p>
                <p className="text-xs sm:text-sm text-gray-500">Vui lòng chọn platform và danh mục khác</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
              {vouchers.map((code) => (
                <div
                  key={code.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative"
                >
                  {/* Main Content */}
                  <div className="flex overflow-hidden rounded-t-lg">
                    {/* Left Side - Green Box */}
                    <div
                      className="w-[105px] flex-shrink-0 relative py-3 px-2"
                      style={{
                        backgroundImage: "linear-gradient(119.819deg, rgb(0, 166, 62) 0%, rgb(0, 130, 54) 100%)"
                      }}
                    >
                      {/* Category Icon */}
                      <div className="mx-auto w-14 h-14 bg-orange-500 rounded-xl shadow-lg flex items-center justify-center mb-2">
                        <span className="text-2xl">{code.categoryIcon}</span>
                      </div>

                      {/* Category Label */}
                      <p className="text-xs font-bold text-white text-center leading-tight">{code.category}</p>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 p-3 min-w-0">
                      {/* Discount */}
                      <div className="mb-1.5">
                        <span className="text-sm text-gray-700">Giảm </span>
                        <span className="text-2xl font-bold text-orange-600">{code.discount}</span>
                      </div>

                      {/* Min Order */}
                      <div className="mb-2">
                        <span className="text-xs text-gray-600">ĐH tối thiểu: </span>
                        <span className="text-xs font-bold text-gray-900">{code.minOrder}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-500 italic mb-2 line-clamp-3 leading-relaxed">
                        {code.description}
                      </p>

                      {/* Platform Badge */}
                      <div>
                        <p className="text-sm text-orange-600 font-bold">{code.platform}</p>
                      </div>
                    </div>
                  </div>

                  {/* HSD Badge */}
                  <div className="px-2 pt-2">
                    <div className="inline-flex bg-white rounded-full border-2 border-green-600 shadow-sm px-2.5 py-1 items-center gap-1">
                      <Clock className="w-3 h-3 text-green-600" />
                      <p className="text-xs font-bold text-green-600">HSD: {code.expiryDate}</p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t border-gray-200 mt-2 px-2 py-2 flex gap-2">
                    <button
                      onClick={() => handleViewDetails(code.id)}
                      className="flex-1 h-9 bg-white border border-gray-300 rounded-md flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">Chi tiết</span>
                    </button>
                    <button
                      onClick={() => handleCopyCode(code.code)}
                      className="flex-1 h-9 bg-green-600 rounded-md flex items-center justify-center gap-1 hover:bg-green-700 transition-colors"
                    >
                      <Copy className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">Copy mã</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Load More Button */}
      {!loadingVouchers && vouchers.length > 0 && hasMore && (
        <div className="px-6 pb-6 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="max-w-xs h-10 px-8 bg-white border-2 border-green-600 rounded-lg flex items-center justify-center gap-2 hover:bg-green-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingMore ? (
              <>
                <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm font-bold text-green-700">Đang tải...</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-green-600" />
                <span className="text-sm font-bold text-green-600">Xem thêm</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Info Box */}
      <div className="px-6 pb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 max-w-[1631px]">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-blue-900 mb-1">ℹ Thông tin</h3>
              <p className="text-sm text-blue-800">
                Các mã giảm giá được tự động thu thập từ nhiều nguồn khác nhau để phục vụ công tác phân tích và hướng dẫn thương mại điện tử hợp pháp và bảo vệ người tiêu dùng khuyến mãi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Voucher Details Modal */}
      {selectedVoucher && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedVoucher(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-[480px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Chi tiết Voucher</h3>
              <button
                onClick={() => setSelectedVoucher(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Discount Value - Large Green Text */}
              <div className="text-center py-4 bg-green-50 rounded-lg">
                <p className="text-4xl font-bold text-green-600 mb-1">Giảm {selectedVoucher.discount}</p>
              </div>

              {/* Details Grid */}
              <div className="space-y-3">
                {/* Max Discount */}
                <div className="flex items-start">
                  <span className="text-sm font-normal text-gray-600 w-32 flex-shrink-0">Tối đa:</span>
                  <span className="text-sm font-bold text-gray-900">{selectedVoucher.discount}</span>
                </div>

                {/* Min Order */}
                <div className="flex items-start">
                  <span className="text-sm font-normal text-gray-600 w-32 flex-shrink-0">ĐH tối thiểu:</span>
                  <span className="text-sm font-bold text-gray-900">{selectedVoucher.minOrder}</span>
                </div>

                {/* Category */}
                <div className="flex items-start">
                  <span className="text-sm font-normal text-gray-600 w-32 flex-shrink-0">Ngành hàng:</span>
                  <span className="text-sm font-bold text-gray-900">{selectedVoucher.category}</span>
                </div>

                {/* Note/Description - Pink background */}
                {selectedVoucher.description && (
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-red-700 mb-1">Lưu ý:</p>
                        <p className="text-xs text-red-700">{selectedVoucher.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Source Badge */}
                <div className="flex items-start">
                  <span className="text-sm font-normal text-gray-600 w-32 flex-shrink-0">Nguồn:</span>
                  <span className="inline-block bg-orange-100 px-2 py-1 rounded text-xs text-orange-800 font-medium">
                    {selectedVoucher.platform}
                  </span>
                </div>

                {/* Expiry Date */}
                <div className="flex items-start">
                  <span className="text-sm font-normal text-gray-600 w-32 flex-shrink-0">Hạn sử dụng:</span>
                  <span className="text-sm font-bold text-gray-900">{selectedVoucher.endDate ? new Date(selectedVoucher.endDate).toLocaleDateString('vi-VN') : selectedVoucher.expiryDate}</span>
                </div>

                {/* Voucher Code - Dashed Border */}
                <div className="pt-3">
                  <p className="text-sm font-normal text-gray-600 mb-2">Mã voucher:</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50 text-center">
                    <p className="text-lg font-bold text-gray-900 tracking-wider">{selectedVoucher.code}</p>
                  </div>
                </div>

                {/* Warning Message */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 flex-shrink-0">⚠️</span>
                    <p className="text-xs text-yellow-800">
                      Thông tin từ nguồn không chính thống - Cần xác minh trước khi sử dụng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Copy Button */}
            <div className="p-5 border-t border-gray-200">
              <button
                onClick={() => {
                  handleCopyCode(selectedVoucher.code);
                  setSelectedVoucher(null);
                }}
                className="w-full h-12 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Copy className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">Copy Mã</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
