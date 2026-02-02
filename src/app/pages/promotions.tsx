import { useState } from "react";
import { FileSpreadsheet, Shield, AlertTriangle, Database } from "lucide-react";
import { PromotionFilter } from "@/app/components/promotion-filter";
import { PromotionTable, type PromotionData } from "@/app/components/promotion-table";
import { PromotionDetailModal } from "@/app/components/promotion-detail-modal";
import { toast } from "sonner";

// Mock data - real data structure from the system
const mockPromotions: PromotionData[] = [
  {
    "id": null,
    "code": "shopee-20-10",
    "name": "Shopee 20.10: Bật mí voucher 30K, 100K, 300K, mã hoàn 1 triệu xu",
    "company": "Shopee",
    "time": {
      "start": "2000-10-20",
      "end": "2000-10-20"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-20-10",
    "crawledAt": null,
    "legalStatus": "pending",
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Mỗi khoảng khắc trong cuộc sống đều trở nên ấm áp, hạnh phúc khi chúng ta biết quan tâm hơn đến những người thân yêu! Và 20.10 này lại là dịp để bạn thể hiện được tình yêu đó với những người phụ nữ quan trọng của mình. Bạn nghĩ sao khi Shopee 20.10 này dành tặng cho những người phụ nữ quan trọng của mình 1 căn hộ cao cấp? Những món quà giá trị? Hay những voucher Shopee khủng để người phụ nữ thỏa sức với đam mê mua sắm của mình? Có thể bạn cảm thấy những món quà mà mình vừa nhắc đến quá sức so với kinh tế hiện tại của bạn, nhưng bạn cứ yên tâm. Vì nếu đến với Shopee 20.10 này bạn sẽ có ngay cơ hội để trúng, để săn được những món quà đó 1 cách dễ dàng đó nhé. Để dễ dàng trúng và dễ dàng săn được những món quà khủng, những voucher ngon. Hãy dành chút thời gian đến với bài viết dưới đây để điểm qua những chương trình khuyến mãi sẽ diễn ra trên Shopee dịp 20.10 này đã nhé."
      }
    }
  },
  {
    "id": 4900,
    "code": "khuyen-mai-hyphens-ceradan-tu-ngay-01102025-den-ngay-31122025",
    "name": "KHUYẾN MẠI HYPHENS – CERADAN TỪ NGÀY\n01/10/2025 ĐẾN NGÀY 31/12/2025",
    "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "18 tỉnh thành",
    "productType": "Mỹ phẩm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4900/khuyen-mai-hyphens-ceradan-tu-ngay-01102025-den-ngay-31122025",
    "crawledAt": "2026-02-02T16:01:18.946Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4900/khuyen-mai-hyphens-ceradan-tu-ngay-01102025-den-ngay-31122025",
        "title": "KHUYẾN MẠI HYPHENS – CERADAN TỪ NGÀY\n01/10/2025 ĐẾN NGÀY 31/12/2025",
        "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 5278,
    "code": "mua-xi-mang-tang-ve-du-lich",
    "name": "Mua xi măng tặng vé du lịch",
    "company": "HAMACO",
    "time": {
      "start": "2025-11-12",
      "end": "2025-12-31"
    },
    "location": "Cần Thơ – Cà Mau",
    "productType": "Xi măng bao",
    "discountPercent": null,
    "promotionMethod": "KH thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5278/mua-xi-mang-tang-ve-du-lich",
    "crawledAt": "2026-02-02T16:01:19.616Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5278/mua-xi-mang-tang-ve-du-lich",
        "title": "Mua xi măng tặng vé du lịch",
        "company": "HAMACO",
        "timeRange": "12/11/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-9-9",
    "name": "Lazada 9.9: Voucher 100K đơn 200K, FreeShip Toàn Sàn 0Đ",
    "company": "Lazada",
    "time": {
      "start": "2025-09-09",
      "end": "2025-09-09"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-9-9",
    "crawledAt": null,
    "legalStatus": "rejected",
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Mùa sale lớn nhất tháng 9 đã chính thức khởi động với chương trình Lazada 9.9: Siêu Sale Chính Hãng. Đây là dịp để bạn mua sắm thả ga mà vẫn tiết kiệm hết cỡ nhờ loạt ưu đãi khủng: Voucher Max trị giá đến 1 triệu đồng, siêu voucher gian hàng giảm 30%, Freeship toàn sàn 0Đ, LazFlash chỉ 99K mỗi ngày, Áp Xu giảm đến 50%. Với sự kết hợp giữa sản phẩm chính hãng và mức giá siêu hời, Lazada 9.9 chắc chắn sẽ là cơ hội vàng cho mọi tín đồ săn sale. Vậy chương trình Siêu Sale 9.9.2025 có những voucher Lazada nào hấp dẫn? Cùng Bloggiamgia.vn khám phá chi tiết trong bài viết dưới đây nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "1d-ky-dieu-lazada",
    "name": "Chương trình 1Đ Kỳ Diệu Lazada: Chơi miễn phí - Trúng quà to",
    "company": "Lazada",
    "time": {
      "start": "2020-01-10",
      "end": "2020-01-10"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/1d-ky-dieu-lazada",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "1Đ Kỳ Diệu là chương trình mới ra mắt trên Lazada từ ngày 10/01/2020. Mục đích của chương trình là để khách hàng trải nghiệm thanh toán với ví điện tử eM của Lazada. Bạn chỉ cần thanh toán 1Đ cho sản phẩm yêu thích bằng ví eM thì sẽ có cơ hội được nhận sản phẩm đó hoàn toàn miễn phí. Giá trị thực của các sản phẩm tham gia chương trình này là từ 100.000 đồng đến 12.000.000 đồng. Mỗi ngày sẽ có rất nhiều giải thưởng được tung ra nên cơ hội để bạn chiến thắng cũng sẽ rất lớn. Cụ thể chương trình này như thế nào? Cách tham gia ra sao? Hãy cùng theo dõi ngày sau đây nhé!"
      }
    }
  },
  {
    "id": 4901,
    "code": "chuong-trinh-khuyen-mai-opc-tich-luy-quy-4-2025",
    "name": "CHƯƠNG TRÌNH KHUYẾN MẠI OPC TÍCH LŨY QUÝ\n4 2025",
    "company": "CÔNG TY CỔ PHẦN GONSA",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "DẦU KHUYNH DIỆP OPC 15ml ; -DẦU KHUYNH DIỆP OPC 25ml; -DẦU KHUYNH DIỆP OPC MẸ BỒNG CON 25ml; -KIM TIỀN THẢO (Chai 100BP); -KIM TIỀN THẢO (Chai 100BĐ)",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4901/chuong-trinh-khuyen-mai-opc-tich-luy-quy-4-2025",
    "crawledAt": "2026-02-02T16:01:19.912Z",
    "legalStatus": "pending",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4901/chuong-trinh-khuyen-mai-opc-tich-luy-quy-4-2025",
        "title": "CHƯƠNG TRÌNH KHUYẾN MẠI OPC TÍCH LŨY QUÝ\n4 2025",
        "company": "CÔNG TY CỔ PHẦN GONSA",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4902,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "name": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
    "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "BISOLVON KIDS SYRUP 60ML BOTx1 VN",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4902/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "crawledAt": "2026-02-02T16:01:20.156Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4902/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
        "title": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
        "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-9-9",
    "name": "Shopee 9.9: FreeShip 0Đ, Voucher Xtra 3 Triệu, Voucher Video 50%",
    "company": "Shopee",
    "time": {
      "start": "2025-09-09",
      "end": "2025-09-09"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-9-9",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Ngày 9.9 đang đến gần và Shopee lại khiến tín đồ mua sắm đứng ngồi không yên với loạt voucher Shopee siêu khủng. Trong sự kiện Shopee 9.9 - Ngày Siêu Mua Sắm, bạn có cơ hội nhận Siêu Voucher Xtra giảm đến 3 triệu đồng, Shopee Video giảm đến 50%, cùng khuyến mãi SPayLater giảm đến 150K và Freeship 0Đ mọi đơn. Đây chắc chắn sẽ là thời điểm lý tưởng để bạn săn những món đồ yêu thích với mức giá cực hời. Hãy cùng Bloggiamgia.vn khám phá ngay toàn bộ các ưu đãi hot nhất từ Shopee trong Ngày Siêu Mua Sắm 9.9 này nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "dien-thoai-samsung-giam-gia",
    "name": "5 Điện Thoại Samsung Giảm Giá Mạnh Dịp Siêu Sale 9.9 Lazada",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/dien-thoai-samsung-giam-gia",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Vào dịp Siêu Hội Mua Sắm Lazada 9.9 gian hàng Samsung chính hãng sẽ triển khai rất nhiều chương trình khuyến mãi cực khủng trên Lazada. Đáng chú ý nhất là chương trình giảm giá những mẫu điện thoại đang bán chạy. Trong bài viết này hãy cùng Bloggiamgia.vn tìm hiểu ngay danh sách 5 điện thoại Samsung giảm giá mạnh nhất dịp Siêu Hội Mua Sắm Lazada 9.9 này nha."
      }
    }
  },
  {
    "id": 5279,
    "code": "km-mua-thu-2025",
    "name": "KM mùa thu 2025",
    "company": "Hậu Giang",
    "time": {
      "start": "2025-11-11",
      "end": "2025-12-31"
    },
    "location": "6 tỉnh",
    "productType": "Sứ + sen vòi American Standard",
    "discountPercent": null,
    "promotionMethod": "KH thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5279/km-mua-thu-2025",
    "crawledAt": "2026-02-02T16:01:20.821Z",
    "legalStatus": "expired",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5279/km-mua-thu-2025",
        "title": "KM mùa thu 2025",
        "company": "Hậu Giang",
        "timeRange": "11/11/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4903,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "name": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
    "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "BISOLVON TABLETS 8MG B/30",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4903/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "crawledAt": "2026-02-02T16:01:21.131Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4903/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
        "title": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
        "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4904,
    "code": "khuyen-mai-fontactiv-tu-ngay-01102025-den-ngay-31122025",
    "name": "KHUYẾN MẠI FONTACTIV TỪ NGÀY 01/10/2025\nĐẾN NGÀY 31/12/2025",
    "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "18 tỉnh thành",
    "productType": "hực phẩm dùng cho chế độ ăn đặc biệt",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4904/khuyen-mai-fontactiv-tu-ngay-01102025-den-ngay-31122025",
    "crawledAt": "2026-02-02T16:01:21.422Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4904/khuyen-mai-fontactiv-tu-ngay-01102025-den-ngay-31122025",
        "title": "KHUYẾN MẠI FONTACTIV TỪ NGÀY 01/10/2025\nĐẾN NGÀY 31/12/2025",
        "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-25-8",
    "name": "Shopee 25.8 - Sale Cuối Tháng: Hàng Triệu Deal Xịn, FreeShip 0Đ",
    "company": "Shopee",
    "time": {
      "start": "2025-08-25",
      "end": "2025-08-25"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-25-8",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 25.8 - Sale Cuối Tháng mang đến cho bạn vô vàn ưu đãi hấp dẫn rất đáng mong chờ, bao gồm: Voucher Xtra đến 1 triệu, Freeship 0Đ Mọi đơn, Voucher Mở Sớm giảm 18%,... Trong bài viết này, hãy cùng Bloggiamgia.vn khám phá chi tiết toàn bộ mã giảm giá Shopee 25.8 để có một ngày săn sale thật bùng nổ vào 25/8/2025 bạn nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "van-len-gia-xuong-lazada",
    "name": "Lazada khuyến mãi \"Vận Lên Giá Xuống\" từ ngày 8.8 - 10.8",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/van-len-gia-xuong-lazada",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Hôm nay, Blog Giảm Giá mang đến cho bạn 1 tin vui đến từ Lazada. Đó là từ ngày 8/8 - 10/08, Lazada sẽ có chương trình khuyến mãi lớn mang tên Vận Lên Giá Xuống. Dưới đây là những ưu đãi tốt nhất của chương trình mà chúng tôi đã tổng hợp. Hãy cùng theo dõi nhé!"
      }
    }
  },
  {
    "id": 5280,
    "code": "km-mua-dong-2025",
    "name": "KM mùa đông 2025",
    "company": "Hậu Giang",
    "time": {
      "start": "2025-11-11",
      "end": "2026-03-31"
    },
    "location": "6 tỉnh",
    "productType": "Sứ + sen vòi INAX",
    "discountPercent": null,
    "promotionMethod": "KH thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5280/km-mua-dong-2025",
    "crawledAt": "2026-02-02T16:01:22.020Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5280/km-mua-dong-2025",
        "title": "KM mùa đông 2025",
        "company": "Hậu Giang",
        "timeRange": "11/11/2025 - 31/03/2026"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-15-8",
    "name": "  Shopee 15.8: Voucher Xtra 3 Triệu, Voucher Youtube 18%, FreeShip 0Đ",
    "company": "Shopee",
    "time": {
      "start": "2025-08-15",
      "end": "2025-08-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-15-8",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Ngày 15.8, Shopee tiếp tục chiêu đãi những con nghiện săn sale với chương trình Shopee 15.8 - Sale Giữa Tháng đầy hấp dẫn. Không chỉ mang đến Voucher Xtra giảm đến 3 triệu, người mua còn được Freeship 0Đ mọi đơn và nhận ngay voucher 150K khi kích hoạt SPayLater. Đây chính là thời điểm vàng để vừa sắm đồ yêu thích, vừa tận hưởng ưu đãi khủng giúp tiết kiệm tối đa chi phí. Hãy cùng Bloggiamgia.vn khám phá ngay những mã giảm giá siêu HOT tại Shopee 15.8 ngay bây giờ nhé!"
      }
    }
  },
  {
    "id": 4905,
    "code": "dong-hanh-cung-chan-nuoi",
    "name": "ĐỒNG HÀNH CÙNG CHĂN NUÔI",
    "company": "CÔNG TY CỔ PHẦN VIỆT - PHÁP SẢN XUẤT THỨC ĂN GIA SÚC",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Là sản phẩm thức ăn chăn nuôi gia cầm do Proconco và các thương nhân cùng thực hiện chương trình khuyến mạisản xuất",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4905/dong-hanh-cung-chan-nuoi",
    "crawledAt": "2026-02-02T16:01:22.354Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4905/dong-hanh-cung-chan-nuoi",
        "title": "ĐỒNG HÀNH CÙNG CHĂN NUÔI",
        "company": "CÔNG TY CỔ PHẦN VIỆT - PHÁP SẢN XUẤT THỨC ĂN GIA SÚC",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "juno-lazada-khuyen-mai",
    "name": "5 Túi Xách JUNO Giảm Giá Mạnh Nhất Dịp Lazada Sale 9.9",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/juno-lazada-khuyen-mai",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Juno là một thương hiệu thời trang giày dép, túi xách và phụ kiện, đang được rất nhiều chị em phụ nữ Việt Nam yêu thích và tin dùng. Những sản phẩm của Juno luôn mang đến cho phụ nữ sự tự tin, toả sáng để thành công trong công việc, cuộc sống với phong cách thời trang riêng biệt, ấn tượng."
      }
    }
  },
  {
    "id": 4906,
    "code": "chuong-trinh-tich-luy-diem-thuong-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "name": "Chương trình tích lũy điểm thưởng dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
    "company": "Công Ty TNHH Syngenta Việt Nam",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-26"
    },
    "location": "29 tỉnh thành",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4906/chuong-trinh-tich-luy-diem-thuong-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:22.639Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4906/chuong-trinh-tich-luy-diem-thuong-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
        "title": "Chương trình tích lũy điểm thưởng dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
        "company": "Công Ty TNHH Syngenta Việt Nam",
        "timeRange": "01/10/2025 - 26/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-8-8",
    "name": "Lazada 8.8: Voucher MAX 1 Triệu, Voucher 20%, FreeShip 0Đ",
    "company": "Lazada",
    "time": {
      "start": "2025-08-08",
      "end": "2025-08-08"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-8-8",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Sự kiện mua sắm Lazada 8.8: Sale Như Ý đã chính thức khởi động, mang đến cơn mưa ưu đãi siêu hấp dẫn cho tín đồ săn sale. Với hàng loạt ưu đãi nổi bật như: Voucher MAX giảm đến 1 triệu đồng, Freeship toàn sàn và Voucher giảm 20% từ gian hàng... đây chính là cơ hội vàng để bạn sở hữu sản phẩm yêu thích với mức giá hấp dẫn. Vậy chương trình Lazada Sale 8.8 năm nay có những mã giảm giá Lazada nào hấp dẫn? Cùng Bloggiamgia.vn khám phá chi tiết trong bài viết dưới đây nhé!"
      }
    }
  },
  {
    "id": 5281,
    "code": "chong-tham-hieu-qua",
    "name": "Chống thấm hiệu quả",
    "company": "JOTON",
    "time": {
      "start": "2025-11-07",
      "end": "2025-12-25"
    },
    "location": "10 tỉnh",
    "productType": "Jotad-02 + Jomortar-CT",
    "discountPercent": null,
    "promotionMethod": "Đại lý",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5281/chong-tham-hieu-qua",
    "crawledAt": "2026-02-02T16:01:23.219Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5281/chong-tham-hieu-qua",
        "title": "Chống thấm hiệu quả",
        "company": "JOTON",
        "timeRange": "07/11/2025 - 25/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-20-8",
    "name": "Shopee 20.8: Bật mí voucher hoàn 999K, 99K, mã hoàn 100% xu",
    "company": "Shopee",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-20-8",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Đố anh chị em bí quyết giúp tiết kiệm chi tiêu trong thời điểm khó khăn này là gì? Để mị nói cho mà nghe nha! Đó là đến với dịp Siêu Sale Shopee 20.8 lần này nè. Đến với dịp Shopee 20.8 này bạn không chỉ được mua sắm thoải mái mà còn là mua sắm một cách siêu tiết kiệm đó nhé. Để có thể nắm bắt được cơ hội ngàn vàng này nha. Trước tiên hãy dành chút thời gian ghé bài viết dưới đây. Để cùng mình tìm hiểu qua những chương trình khuyến mãi sẽ diễn ra trong dịp Shopee 20.8 lần này nhé!"
      }
    }
  },
  {
    "id": 4907,
    "code": "chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "name": "Chương trình trưng bày sản phẩm dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
    "company": "Công Ty TNHH Syngenta Việt Nam",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-26"
    },
    "location": "29 tỉnh thành",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4907/chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:23.699Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4907/chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
        "title": "Chương trình trưng bày sản phẩm dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
        "company": "Công Ty TNHH Syngenta Việt Nam",
        "timeRange": "01/10/2025 - 26/12/2025"
      }
    }
  },
  {
    "id": 4907,
    "code": "chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "name": "Chương trình trưng bày sản phẩm dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
    "company": "Công Ty TNHH Syngenta Việt Nam",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-26"
    },
    "location": "29 tỉnh thành",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4907/chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:23.976Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4907/chuong-trinh-trung-bay-san-pham-danh-cho-khach-hang-ban-le-cap-2-quy-4-nam-2025",
        "title": "Chương trình trưng bày sản phẩm dành cho khách hàng\nbán lẻ (Cấp 2) Quý 4 năm 2025.",
        "company": "Công Ty TNHH Syngenta Việt Nam",
        "timeRange": "01/10/2025 - 26/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-8-8",
    "name": "Shopee 8.8 - Siêu Hội Voucher: Voucher 20%, FreeShip 0Đ Mọi Đơn",
    "company": "Shopee",
    "time": {
      "start": "2025-08-08",
      "end": "2025-08-08"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-8-8",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Trong tháng 8 này, Shopee tiếp tục khuấy đảo cộng đồng săn sale với sự kiện Shopee 8.8 - Siêu Hội Voucher đầy hấp dẫn. Người dùng không chỉ được tận hưởng ưu đãi giảm giá đến 20% cho Shopee Video và Shopee VIP, mà còn được miễn phí vận chuyển mọi đơn hàng 0Đ - cơ hội tuyệt vời để săn deal tiết kiệm mà không lo về phí ship. Đây là chương trình siêu sale rất lớn trong năm 2025 mà bất kỳ tín đồ săn deal nào cũng không thể bỏ lỡ. Hãy cùng Bloggiamgia.vn khám phá ngay toàn bộ các ưu đãi hot nhất từ Shopee trong Siêu Hội Voucher 8.8 này nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-26-7",
    "name": "Shopee 26.7: Bật mí Voucher hoàn 88K, 100K xu và loạt deals ngon",
    "company": "Shopee",
    "time": {
      "start": "2021-07-26",
      "end": "2021-07-26"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-26-7",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Khi việc ra ngoài lại được xem là mối nguy hiểm, làm thế nào để bạn có thể mua sắm an toàn? Đừng lo vì bên bạn vẫn luôn có Shopee. Đến với dịp Siêu sale Shopee 26.7 này bạn vừa ngồi nhà, vừa mua sắm được mà lại còn rất tiết kiệm nữa. Nếu bạn đã chẳng may bỏ lỡ những dịp sale khủng trước của Shopee thì đừng bỏ lỡ dịp 26.7 này nha."
      }
    }
  },
  {
    "id": 5282,
    "code": "hoi-vien-doanh-nhan-t12",
    "name": "Hội viên Doanh Nhân – T12",
    "company": "Masan Consumer",
    "time": {
      "start": "2025-12-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Danh mục theo thể lệ",
    "discountPercent": null,
    "promotionMethod": "Hội viên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5282/hoi-vien-doanh-nhan-t12",
    "crawledAt": "2026-02-02T16:01:24.495Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5282/hoi-vien-doanh-nhan-t12",
        "title": "Hội viên Doanh Nhân – T12",
        "company": "Masan Consumer",
        "timeRange": "01/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4908,
    "code": "chuong-trinh-cham-soc-khach-hang-dac-biet-quy-4-nam-2025",
    "name": "Chương trình chăm sóc khách hàng đặc biệt Quý 4 năm\n2025",
    "company": "Công Ty TNHH Syngenta Việt Nam",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-26"
    },
    "location": "29 tỉnh thành",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4908/chuong-trinh-cham-soc-khach-hang-dac-biet-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:24.917Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4908/chuong-trinh-cham-soc-khach-hang-dac-biet-quy-4-nam-2025",
        "title": "Chương trình chăm sóc khách hàng đặc biệt Quý 4 năm\n2025",
        "company": "Công Ty TNHH Syngenta Việt Nam",
        "timeRange": "01/10/2025 - 26/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-25-7",
    "name": "Shopee 25.7: Voucher Youtube 2 Triệu, FreeShip 0Đ, Voucher Xtra 20%",
    "company": "Shopee",
    "time": {
      "start": "2025-07-25",
      "end": "2025-07-25"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-25-7",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 25.7 - Lương Về Sale To là chương trình siêu ưu đãi không thể bỏ lỡ trong dịp cuối tháng 7 dành cho tín đồ mua sắm online. Với hàng loạt mã giảm giá hấp dẫn như Voucher Xtra giảm đến 1 triệu đồng, Voucher Bất Ngờ toàn sàn giảm đến 3 triệu đồng, cùng chính sách Freeship 0Đ mọi đơn hàng, Shopee mang đến cơ hội mua sắm tiết kiệm tối đa. Nếu bạn đang chờ đợi dịp để bung ví mua sắm những món đồ yêu thích, thì 25.7 chính là thời điểm vàng! Cùng Bloggiamgia.vn khám phá chi tiết các mã giảm giá Shopee hấp dẫn trong chương trình Shopee 25.7 ngay sau đây!"
      }
    }
  },
  {
    "id": 4909,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-glaxosmith-kline",
    "name": "“Chương trình khuyến mại” (Nhãn hàng - GLAXOSMITH\nKLINE)",
    "company": "CÔNG TY TNHH DKSH VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "33 tỉnh thành",
    "productType": "KDR SENSODYNE BAC HA 100G trị giá 50.000 (-VAT/VND) KDR SENSODYNE BAC HA 160G trị giá 76.364 (-VAT/VND)",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4909/chuong-trinh-khuyen-mai-nhan-hang-glaxosmith-kline",
    "crawledAt": "2026-02-02T16:01:25.173Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4909/chuong-trinh-khuyen-mai-nhan-hang-glaxosmith-kline",
        "title": "“Chương trình khuyến mại” (Nhãn hàng - GLAXOSMITH\nKLINE)",
        "company": "CÔNG TY TNHH DKSH VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "garnier-lazada-khuyen-mai",
    "name": "4 Deals Garnier HOT Nhất Lazada 17.7 Này Bạn Không Nên Bỏ Lỡ",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/garnier-lazada-khuyen-mai",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Garnier là một thương hiệu hàng đầu của Pháp về mỹ phẩm thiên nhiên ra đời từ năm 1904. Các sản phẩm chăm sóc tóc và da của Garnier ở một số quốc gia được coi là một trong những thương hiệu đáng tin cậy nhất, đặc biệt là ở Châu Á, Trung Quốc và Ấn Độ. Tất cả những sản phẩm của Garnier đều đã được kiểm định rất chặt chẽ về chất lượng, hiệu quả và độ an toàn."
      }
    }
  },
  {
    "id": 5283,
    "code": "khuyen-mai-t112025",
    "name": "Khuyến mại T11/2025",
    "company": "Orion Vina",
    "time": {
      "start": "2025-11-08",
      "end": "2026-01-31"
    },
    "location": "Toàn quốc",
    "productType": "Bánh – Kẹo – Sữa",
    "discountPercent": null,
    "promotionMethod": "KH thân thiết",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5283/khuyen-mai-t112025",
    "crawledAt": "2026-02-02T16:01:25.943Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5283/khuyen-mai-t112025",
        "title": "Khuyến mại T11/2025",
        "company": "Orion Vina",
        "timeRange": "08/11/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-15-7",
    "name": "Shopee 15.7: Voucher 100K, FreeShip 0Đ, Shopee Video giảm 50%",
    "company": "Shopee",
    "time": {
      "start": "2025-07-15",
      "end": "2025-07-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-15-7",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 15.7 - Sale Giữa Tháng chính thức bùng nổ với loạt ưu đãi cực hot dành riêng cho tín đồ săn sale! Duy nhất trong ngày 15.7, hàng loạt voucher khủng sẽ đồng loạt lên sàn như: Voucher Xtra giảm đến 1 triệu đồng, Voucher bất ngờ toàn sàn giảm đến 3 triệu đồng, cùng Freeship 0Đ áp dụng cho mọi đơn hàng. Đây là cơ hội vàng để bạn thỏa sức mua sắm tiết kiệm mà không lo về giá hay phí vận chuyển. Cùng Bloggiamgia.vn khám phá chi tiết các mã giảm giá Shopee hấp dẫn trong chương trình Shopee 15.7 ngay sau đây!"
      }
    }
  },
  {
    "id": 4910,
    "code": "chuong-trinh-tra-thuong-nha-phan-phoi-food-service",
    "name": "Chương trình trả thưởng nhà phân phối Food Service",
    "company": "CÔNG TY CỔ PHẦN MORINAGA NUTRITIONAL FOODS VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Sữa chua, thức uống theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4910/chuong-trinh-tra-thuong-nha-phan-phoi-food-service",
    "crawledAt": "2026-02-02T16:01:26.365Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4910/chuong-trinh-tra-thuong-nha-phan-phoi-food-service",
        "title": "Chương trình trả thưởng nhà phân phối Food Service",
        "company": "CÔNG TY CỔ PHẦN MORINAGA NUTRITIONAL FOODS VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4911,
    "code": "vay-tien-mat-online-tu-20000000-vnd-den-50000000-vnd-uu-dai-800000-vnd-tren-ky-tra-gop",
    "name": "“Vay tiền mặt online từ 20.000.000 VNĐ đến 50.000.000\nVNĐ – Ưu đãi 800.000 VNĐ trên kỳ trả góp”.",
    "company": "CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN HOME CREDIT VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2026-01-31"
    },
    "location": "Toàn quốc",
    "productType": "Các dịch vụ cho vay tiền mặt do Home Credit cung cấp",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4911/vay-tien-mat-online-tu-20000000-vnd-den-50000000-vnd-uu-dai-800000-vnd-tren-ky-tra-gop",
    "crawledAt": "2026-02-02T16:01:26.629Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4911/vay-tien-mat-online-tu-20000000-vnd-den-50000000-vnd-uu-dai-800000-vnd-tren-ky-tra-gop",
        "title": "“Vay tiền mặt online từ 20.000.000 VNĐ đến 50.000.000\nVNĐ – Ưu đãi 800.000 VNĐ trên kỳ trả góp”.",
        "company": "CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN HOME CREDIT VIỆT NAM",
        "timeRange": "01/10/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "samsung-galaxy-s9-va-s9-plus-tren-lazada",
    "name": "Đặt hàng Samsung Galaxy S9 và S9 Plus trên Lazada giảm ngay 1 triệu, nhận quà tặng đến 4 triệu đồng",
    "company": "Lazada",
    "time": {
      "start": "2018-02-26",
      "end": "2018-02-26"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/samsung-galaxy-s9-va-s9-plus-tren-lazada",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Bộ đôi Samsung Galaxy S9 và S9 Plus là 2 smartphone cao cấp nhất của Samsung vừa mới ra mắt ngày 26/2/2018. Với sự thừa hưởng thiết kế từ người tiền nhiệm S8 và S8 Plus, Galaxy S9/S9+ không có nhiều thay đổi về thiết kế. Ở phiên bản này, hãng chỉ tập trung vào nâng cấp camera, tính năng nhận diện khuôn mặt, bên cạnh đó Samsung Galaxy S9 và S9 Plus cũng được trang bị cấu hình mạnh nhất cho smartphone ở thời điểm hiện tại."
      }
    }
  },
  {
    "id": null,
    "code": "lazada-7-7",
    "name": "Lazada 7.7: Giảm 90%, Voucher Max 1 triệu, Voucher Gian Hàng 20%",
    "company": "Lazada",
    "time": {
      "start": "2025-07-07",
      "end": "2025-07-07"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-7-7",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Lazada 7.7 - Sale Rẻ Chạm Sàn là cơ hội tuyệt vời để bạn săn hàng với mức giá siêu hời nhờ loạt ưu đãi cực hấp dẫn như: Giảm đến 90%, voucher MAX giảm tối đa 1 triệu đồng, voucher gian hàng giảm 20%, FreeShip mọi đơn hàng hàng LazMall,..."
      }
    }
  },
  {
    "id": 5284,
    "code": "tich-luy-unilever-t11-t12",
    "name": "Tích lũy Unilever T11-T12",
    "company": "DKSH Việt Nam",
    "time": {
      "start": "2025-11-19",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "ST.IVES các loại",
    "discountPercent": null,
    "promotionMethod": "KH thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5284/tich-luy-unilever-t11-t12",
    "crawledAt": "2026-02-02T16:01:27.237Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5284/tich-luy-unilever-t11-t12",
        "title": "Tích lũy Unilever T11-T12",
        "company": "DKSH Việt Nam",
        "timeRange": "19/11/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4912,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "name": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
    "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4912/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
    "crawledAt": "2026-02-02T16:01:27.572Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4912/chuong-trinh-khuyen-mai-nhan-hang-sanofi-aventis",
        "title": "“Chương trình khuyến mại” (Nhãn hàng – SANOFI\nAVENTIS)",
        "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "ahc-lazada-khuyen-mai",
    "name": "AHC Sale Sập Sàn, Tung Ngàn Voucher Mừng Lazada 9 Tuổi",
    "company": "Lazada",
    "time": {
      "start": "2021-03-01",
      "end": "2021-03-31"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/ahc-lazada-khuyen-mai",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Mang sứ mệnh “tôn vinh vẻ đẹp thuần khiết cho người phụ nữ trên toàn thế giới”. Thương hiệu mỹ phẩm AHC – Hàn Quốc mang đến những sản phẩm chăm sóc da cao cấp với chất lượng là sự hài lòng tuyệt đối của khách hàng. Sản phẩm của AHC phá bỏ mọi giới hạn của các loại kem thông thường với bảng thành phần siêu lành tính không chứa oli, silicone,… Đó chính là những lý do để AHC có thể chiếm trọn niềm tin của chị em phái đẹp trong suốt thời gian vừa qua."
      }
    }
  },
  {
    "id": 4913,
    "code": "hoi-phu-thuong-thang-102025",
    "name": "“HỘI PHÚ THƯƠNG THÁNG 10.2025”",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm thuộc các nhãn hàng Omo, Surf, Comfort, Sunlight, Cif, Vim, Dove, Sunsilk, TRESemme, Clear, Lifebuoy, Pond’s, Hazeline, Vazeline, P/S, Close-up, Rexona, Axe, Knorr",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4913/hoi-phu-thuong-thang-102025",
    "crawledAt": "2026-02-02T16:01:27.825Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4913/hoi-phu-thuong-thang-102025",
        "title": "“HỘI PHÚ THƯƠNG THÁNG 10.2025”",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-7-7",
    "name": "Shopee 7.7 - Sale Hè Freeship: Voucher Youtube 2 Triệu, FreeShip 0Đ",
    "company": "Shopee",
    "time": {
      "start": "2025-07-07",
      "end": "2025-07-07"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-7-7",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 7.7 - Sale Hè Freeship chính thức bùng nổ với loạt ưu đãi siêu hấp dẫn khiến hội mê săn sale không thể ngồi yên! Duy nhất trong ngày 7.7, Shopee tung hàng loạt mã giảm giá cực cháy: Voucher Xtra giảm đến 1 triệu đồng, Voucher toàn sàn giảm đến 3 triệu, Voucher YouTube Shopping giảm đến 2 triệu, cùng ưu đãi Freeship 0Đ mọi đơn 0Đ. Đây là chương trình sale lớn trong năm 2025 mà bất kỳ tín đồ săn deal nào cũng không thể bỏ lỡ. Hãy cùng Bloggiamgia.vn khám phá ngay toàn bộ voucher Shopee 7.7 ngay bây giờ nhé!"
      }
    }
  },
  {
    "id": 5215,
    "code": "tuan-le-san-pham-thai-lan-2026-tai-ha-noi-thailand-week-2026-in-hanoi",
    "name": "Tuần lễ sản phẩm Thái Lan 2026 tại Hà Nội - Thailand Week 2026 in Hanoi",
    "company": "Công ty CP Quảng cáo và hội chợ thương mại Vinexad (Số 9 Đinh Lễ, Phường Tràng Tiền, Thành phố Hà Nội) - Tạ Thu Thủy - 0912585882",
    "time": {
      "start": "2026-01-22",
      "end": "2026-01-25"
    },
    "location": "Trung tâm Triển lãm Quốc tế ICE, số 91 Trần Hưng Đạo, Phường Cửa Nam, Thành phố Hà Nội",
    "productType": "Sản phẩm hàng hóa Thái Lan",
    "discountPercent": null,
    "promotionMethod": "Tổng hợp",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5215/tuan-le-san-pham-thai-lan-2026-tai-ha-noi-thailand-week-2026-in-hanoi",
    "crawledAt": "2026-02-02T16:01:28.447Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5215/tuan-le-san-pham-thai-lan-2026-tai-ha-noi-thailand-week-2026-in-hanoi",
        "title": "Tuần lễ sản phẩm Thái Lan 2026 tại Hà Nội - Thailand Week 2026 in Hanoi",
        "company": "Công ty CP Quảng cáo và hội chợ thương mại Vinexad (Số 9 Đinh Lễ, Phường Tràng Tiền, Thành phố Hà Nội) - Tạ Thu Thủy - 0912585882",
        "timeRange": "22/01/2026 - 25/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "colgate-lazada-khuyen-mai",
    "name": "Colgate Tung Triệu Quà Ngon, Giảm Giá Mạnh Tay Mừng Lazada 9 Tuổi",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/colgate-lazada-khuyen-mai",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Thương hiệu càng lớn thì các chương trình khuyến mãi lại càng được mong chờ. Với thương hiệu sản xuất các sản phẩm gia dụng đình đám như Colgate chắc hẵn bây giờ các tín đồ cũng đang hóng xem tại sinh nhật hoành tráng lần thứ 9 lần này của Lazada, Colgate sẽ mang đến những gì phải không?"
      }
    }
  },
  {
    "id": 4914,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-united-pharma-inc",
    "name": "“Chương trình khuyến mại” (Nhãn hàng – UNITED\nPHARMA INC)",
    "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4914/chuong-trinh-khuyen-mai-nhan-hang-united-pharma-inc",
    "crawledAt": "2026-02-02T16:01:28.784Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4914/chuong-trinh-khuyen-mai-nhan-hang-united-pharma-inc",
        "title": "“Chương trình khuyến mại” (Nhãn hàng – UNITED\nPHARMA INC)",
        "company": "CÔNG TY TNHH DƯỢC PHẨM GIGAMED",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-choice",
    "name": "Bí kíp mua hàng Shopee Choice nhận ưu đãi khủng",
    "company": "Shopee",
    "time": {
      "start": "2024-04-15",
      "end": "2024-04-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-choice",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Kể từ 0h ngày 15/4/2024, Shopee cho ra mắt chương trình Shopee Choice. Khi mua sắm trên Shopee Choice, bạn sẽ được hưởng các ưu đãi đặc biệt như: Được áp dụng voucher Shopee độc quyền có mức giảm đến 90% cho sản phẩm choice, FreeShip, Giao hàng nhanh chóng, Chính sách đổi trả linh hoạt và chất lượng sản phẩm được đảm bảo. Vậy làm sao để hưởng các ưu đãi khi mua hàng trên Shopee Choice? Hãy cùng Blog Giảm Giá tìm hiểu ngay trong bài viết này nhé!"
      }
    }
  },
  {
    "id": 4915,
    "code": "chuong-trinh-khach-hang-thuong-xuyen-khi-mua-san-pham-pg-thang-1011122025-kaw-north",
    "name": "CHƯƠNG TRÌNH KHÁCH HÀNG THƯỜNG XUYÊN\nKHI MUA SẢN PHẨM P&G THÁNG 10.11.12/2025 – KAW – NORTH",
    "company": "CÔNG TY TNHH PROCTER & GAMBLE VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "18 tỉnh thành",
    "productType": "Dầu Gội/Dầu Xả Pantene, Dầu Gội/Dầu Xả Head&Shoulders, Dầu Gội/Dầu Xả Rejoice, Bột giặt Tide, Bột giặt/ Nước Giặt Ariel, Nuosc giặt/Nước xả vải Downy, Sáp thơm/ nước hoa Oto Ampi Bur, Dao Cạo/Lưỡi Dao/Bọt Cạo Râu Gillette, Sản phẩm dương da Olay, Băng Vệ Sinh Whisper, Chỉ Nha Khoa/Bàn Chải Oral B, Xà Phòng Safeguard",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4915/chuong-trinh-khach-hang-thuong-xuyen-khi-mua-san-pham-pg-thang-1011122025-kaw-north",
    "crawledAt": "2026-02-02T16:01:29.026Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4915/chuong-trinh-khach-hang-thuong-xuyen-khi-mua-san-pham-pg-thang-1011122025-kaw-north",
        "title": "CHƯƠNG TRÌNH KHÁCH HÀNG THƯỜNG XUYÊN\nKHI MUA SẢN PHẨM P&G THÁNG 10.11.12/2025 – KAW – NORTH",
        "company": "CÔNG TY TNHH PROCTER & GAMBLE VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "ban-tin-khuyen-mai-tiki",
    "name": "Bản Tin Khuyến Mãi Tiki Là Gì? Có Lợi Ích Gì Khi Đăng Ký?",
    "company": "Tiki",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/ban-tin-khuyen-mai-tiki",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Tiki",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Bạn có muốn mình là một trong những người đầu tiên nhận được thông báo từ Tiki? Có thể là những chương trình khuyến mãi Tiki mới nhất. Những mã giảm giá Tiki tốt nhất. Những sản phẩm bán flash giá sốc không tưởng. Hoặc những ưu đãi riêng mà người khác không có được. Vậy thì hãy nhanh tay đăng ký nhận bản tin khuyến mãi Tiki nhé."
      }
    }
  },
  {
    "id": 5199,
    "code": "chuong-trinh-mo-phan-phoi-sua-chua-an-mc-creamery-thang-12",
    "name": "Chương trình mở phân phối sữa chua ăn MC Creamery tháng 12",
    "company": "Công ty CP giống bò sữa Mộc Châu",
    "time": {
      "start": "2025-12-01",
      "end": "2025-12-31"
    },
    "location": "Thành phố Huế; tỉnh Cao Bằng; tỉnh Hưng Yên; tỉnh Lạng Sơn; thành phố Hà Nội; tỉnh Thanh Hóa",
    "productType": "Các loại sữa chua Mộc Châu Creamery 100g;",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5199/chuong-trinh-mo-phan-phoi-sua-chua-an-mc-creamery-thang-12",
    "crawledAt": "2026-02-02T16:01:29.654Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5199/chuong-trinh-mo-phan-phoi-sua-chua-an-mc-creamery-thang-12",
        "title": "Chương trình mở phân phối sữa chua ăn MC Creamery tháng 12",
        "company": "Công ty CP giống bò sữa Mộc Châu",
        "timeRange": "01/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-25-6",
    "name": "  Shopee 25.6: Freeship 0Đ Mọi Đơn, Voucher Youtube Giảm Đến 2 Triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-06-25",
      "end": "2025-06-25"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-25-6",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Lương về rồi, Shopee chơi lớn cùng đại tiệc mua sắm cực bốc trong sự kiện Shopee 25.6 - Lương Về Sale To. Trong dịp này Shopee mang đến loạt ưu đãi không thể hấp dẫn hơn gồm: Freeship 0Đ cho mọi đơn hàng, Voucher Xtra lên đến 4 triệu đồng, voucher mở sớm giảm 18%, voucher YouTube Shopping giảm 20% tối đa đến 2 triệu, giảm giá sâu đến 66% trên hàng ngàn sản phẩm. Đây chính là dịp lý tưởng để bạn thỏa sức mua sắm các sản phẩm yêu thích với mức giá siêu ưu đãi. Cùng Bloggiamgia.vn khám phá ngay toàn bộ mã giảm giá Shopee có trong dịp Shopee 25.6 này nhé!"
      }
    }
  },
  {
    "id": 4916,
    "code": "khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
    "name": "KHUYẾN MẠI SANOFI TỪ NGÀY 01/10/2025 ĐẾN\nNGÀY 31/12/2025",
    "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "18 tỉnh thành",
    "productType": "Dược phẩm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4916/khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
    "crawledAt": "2026-02-02T16:01:30.039Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4916/khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
        "title": "KHUYẾN MẠI SANOFI TỪ NGÀY 01/10/2025 ĐẾN\nNGÀY 31/12/2025",
        "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4916,
    "code": "khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
    "name": "KHUYẾN MẠI SANOFI TỪ NGÀY 01/10/2025 ĐẾN\nNGÀY 31/12/2025",
    "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "18 tỉnh thành",
    "productType": "Dược phẩm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4916/khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
    "crawledAt": "2026-02-02T16:01:30.229Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4916/khuyen-mai-sanofi-tu-ngay-01102025-den-ngay-31122025",
        "title": "KHUYẾN MẠI SANOFI TỪ NGÀY 01/10/2025 ĐẾN\nNGÀY 31/12/2025",
        "company": "CHI NHÁNH CÔNG TY TNHH DƯỢC PHẨM VÀ TRANG THIẾT BỊ Y TẾ HOÀNG ĐỨC",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "tiki-12-12-2020",
    "name": "Tiki 12.12: Mùa Sale Huyền Thoại 91% – Bấm Là Có",
    "company": "Tiki",
    "time": {
      "start": "2019-12-12",
      "end": "2019-12-12"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/tiki-12-12-2020",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Tiki",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Mỗi năm, dịp 12.12 là những ngày tháng được rất nhiều người trông chờ. Bởi vì các sàn thương mại điện tử đều có những chương trình khuyến mãi, giảm giá rất lớn. Năm nay, Tiki 12.12 cũng tổ chức chương trình ưu đãi mang tên “Bấm Là Có – Để Tiki Lo“. Bài viết này, Bloggiamgia.vn sẽ tổng hợp những nội dung khuyến mãi Tiki HOT nhất trong chương trình này gửi đến bạn. Hãy cùng theo dõi ngay sau đây nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-sale-15-6",
    "name": "  Shopee 15.6: Voucher Xtra 1 Triệu, Mã Youtube Giảm 2 Triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-06-15",
      "end": "2025-06-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-sale-15-6",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 15.06 - Sale Giữa Tháng đã chính bùng nổ với hàng loạt voucher Shopee cực cháy! Đây là cơ hội vàng để bạn săn deal hời với Freeship 0Đ cho mọi đơn hàng, cùng loạt ưu đãi hấp dẫn như giảm đến 1 triệu đồng khi lướt Shopee Live & Shopee Video, voucher mở sớm giảm ngay 18%, và đặc biệt voucher YouTube Shopping giảm đến 22%. Đây là cơ hội vàng để bạn mua sắm tiết kiệm trong tháng 6 này! Hãy cùng Bloggiamgia.vn khám phá ngay những ưu đãi siêu HOT tại Shopee 15.6!"
      }
    }
  },
  {
    "id": 5200,
    "code": "chuong-trinh-tich-luy-doanh-so-thang-122025",
    "name": "Chương trình tích \nlũy doanh số tháng \n12/2025",
    "company": "Công ty TNHH MTV thương mại dịch vụ Thiên Long Hoàn Cầu",
    "time": {
      "start": "2025-12-01",
      "end": "2025-12-31"
    },
    "location": "Thành phố Huế; tỉnh Cao Bằng; tỉnh Hưng Yên; tỉnh Lạng Sơn; thành phố Hà Nội; tỉnh Thanh Hóa",
    "productType": "Tất cả các sản phẩm của Công ty TNHH MTV TM dịch vụ Thiên LongToàn Cầu",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5200/chuong-trinh-tich-luy-doanh-so-thang-122025",
    "crawledAt": "2026-02-02T16:01:30.852Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5200/chuong-trinh-tich-luy-doanh-so-thang-122025",
        "title": "Chương trình tích \nlũy doanh số tháng \n12/2025",
        "company": "Công ty TNHH MTV thương mại dịch vụ Thiên Long Hoàn Cầu",
        "timeRange": "01/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4917,
    "code": "11tb-2025-bl",
    "name": "11/TB 2025-BL",
    "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Hải Phòng",
    "productType": "Thuốc tân dược, thực phẩm chức năng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4917/11tb-2025-bl",
    "crawledAt": "2026-02-02T16:01:31.239Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4917/11tb-2025-bl",
        "title": "11/TB 2025-BL",
        "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "top-tivi-tu-lanh-may-giat-samsung-hot-nhat-tren-lazada-12-12",
    "name": "Top Tivi, Tủ Lạnh, Máy Giặt Samsung HOT Nhất Trên Lazada 12.12",
    "company": "Lazada",
    "time": {
      "start": "2020-12-12",
      "end": "2020-12-12"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/top-tivi-tu-lanh-may-giat-samsung-hot-nhat-tren-lazada-12-12",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Bạn muốn sắm Tivi, tủ lạnh, máy giặt trong dịp cuối năm này? Bạn muốn mua được một thiết bị gia dụng chất lượng tốt nhưng phải có mức giá hấp dẫn? Thậm chí bạn còn muốn nó được khuyến mãi, giảm giá và tặng kèm quà nữa? Nếu bạn đang có nhu cầu như vậy thì đừng bỏ qua thương hiệu Samsung trên Lazada trong dịp 12.12 này."
      }
    }
  },
  {
    "id": null,
    "code": "shopee-6-6",
    "name": "Shopee 6.6 - Siêu Sale Giữa Năm: Siêu Rẻ + Trúng 66 iPhone",
    "company": "Shopee",
    "time": {
      "start": "2025-06-06",
      "end": "2025-06-06"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-6-6",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Siêu Sale Giữa Năm - Shopee 6.6 có gì HOT? Siêu Nhanh Siêu Rẻ, Freeship mọi đơn 0Đ, Cơ hội trúng 66 iPhone, Voucher mở sớm giảm 18%, Voucher Xtra giảm đến 1 Triệu, Voucher Youtube giảm 20% tối đa 2 triệu... là những ưu đãi nổi bật sẽ có trong đợt Siêu sale 6.6 sắp tới của Shopee. Bạn đã sẵn sàng để cháy cùng Siêu Sale Giữa Năm 6.6 của Shopee chưa? Nếu có hãy cùng Bloggiamgia.vn tìm hiểu chi tiết các voucher Shopee sẽ có trong dịp Siêu Sale Giữa Năm này nhé!"
      }
    }
  },
  {
    "id": 4917,
    "code": "11tb-2025-bl",
    "name": "11/TB 2025-BL",
    "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Hải Phòng",
    "productType": "Thuốc tân dược, thực phẩm chức năng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4917/11tb-2025-bl",
    "crawledAt": "2026-02-02T16:01:31.500Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4917/11tb-2025-bl",
        "title": "11/TB 2025-BL",
        "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 5201,
    "code": "chuong-trinh-flash-sale-t122025",
    "name": "Chương trình FLASH SALE T12/2025",
    "company": "Công ty TNHH TM dịch vụ và Đầu tư Nhuận Tín",
    "time": {
      "start": "2025-12-01",
      "end": "2025-12-31"
    },
    "location": "Thành phố Huế; tỉnh Cao Bằng; tỉnh Hưng Yên; tỉnh Lạng Sơn; thành phố Hà Nội; tỉnh Thanh Hóa",
    "productType": "Điện thoại di động Vivo V2440-V50Lite",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5201/chuong-trinh-flash-sale-t122025",
    "crawledAt": "2026-02-02T16:01:32.113Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5201/chuong-trinh-flash-sale-t122025",
        "title": "Chương trình FLASH SALE T12/2025",
        "company": "Công ty TNHH TM dịch vụ và Đầu tư Nhuận Tín",
        "timeRange": "01/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-6-6",
    "name": "Lazada 6.6: Trợ Giá Đến 6.6 Triệu + Giảm 50% Xu + FreeShip Toàn Sàn",
    "company": "Lazada",
    "time": {
      "start": "2025-06-06",
      "end": "2025-06-06"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-6-6",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Lazada 6.6 - Sale Rẻ Kinh Hoàng mang đến cho bạn cơ hội mua sắm với những ưu đãi hấp dẫn không thể bỏ lỡ như: Trợ giá đến 6.6 triệu đồng, Freeship Toàn sàn, Voucher MAX 1 Triệu, Voucher gian hàng giảm đến 20%..."
      }
    }
  },
  {
    "id": 4918,
    "code": "12tb-2025-bl",
    "name": "12/TB 2025-BL",
    "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Hải Phòng",
    "productType": "Thuốc tân dược, thực phẩm chức năng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4918/12tb-2025-bl",
    "crawledAt": "2026-02-02T16:01:32.423Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4918/12tb-2025-bl",
        "title": "12/TB 2025-BL",
        "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4919,
    "code": "13tb-2025-bl",
    "name": "13/TB 2025-BL",
    "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Hải Phòng",
    "productType": "Thuốc tân dược, thực phẩm chức năng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4919/13tb-2025-bl",
    "crawledAt": "2026-02-02T16:01:32.705Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4919/13tb-2025-bl",
        "title": "13/TB 2025-BL",
        "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-25-5",
    "name": "Shopee 25.5: Voucher Youtube 25% tối đa 2 triệu, Voucher Xtra 20%, FreeShip 0Đ",
    "company": "Shopee",
    "time": {
      "start": "2025-05-25",
      "end": "2025-05-25"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-25-5",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Sẵn sàng cháy cùng Shopee 25.5 với hàng loạt ưu đãi hấp dẫn chưa bạn ơi? Tận hưởng Voucher Xtra giảm đến 1 triệu, Voucher YouTube Shopping giảm 25% đến 2 triệu đồng, Freeship Xtra+ giảm 500K và nhiều ưu đãi hấp dẫn khác ngay hôm nay nào. Nhưng giờ hãy dành ít phút cùng Bloggiamgia.vn khám phá ngay toàn bộ mã giảm giá Shopee hot nhất trong dịp Shopee Sale 25.5 trong bài viết này nhé!"
      }
    }
  },
  {
    "id": 5202,
    "code": "cap-mau-khong-thu-tien",
    "name": "Cấp mẫu không thu\ntiền",
    "company": "Công ty cổ phần CASANOVA Việt Nam",
    "time": {
      "start": "2025-12-01",
      "end": "2025-12-31"
    },
    "location": "Tỉnh Lào Cai",
    "productType": "Gạch ốp lát",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5202/cap-mau-khong-thu-tien",
    "crawledAt": "2026-02-02T16:01:33.328Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5202/cap-mau-khong-thu-tien",
        "title": "Cấp mẫu không thu\ntiền",
        "company": "Công ty cổ phần CASANOVA Việt Nam",
        "timeRange": "01/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4920,
    "code": "14tb-2025-bl",
    "name": "14/TB 2025-BL",
    "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Hải Phòng",
    "productType": "Thuốc tân dược, thực phẩm chức năng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4920/14tb-2025-bl",
    "crawledAt": "2026-02-02T16:01:33.692Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4920/14tb-2025-bl",
        "title": "14/TB 2025-BL",
        "company": "CN Cty CP Dược phẩm TV.Pharm tại Hải Dương",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4921,
    "code": "chuong-trinh-sua-chua-green-farm-quy-42025",
    "name": "CHƯƠNG TRÌNH SỮA CHUA GREEN FARM QUÝ\n4/2025",
    "company": "CÔNG TY CỔ PHẦN SỮA VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "12 tỉnh thành",
    "productType": "Tất cả các sản phẩm sữa chua nhãn hàng Vinamilk Green Farm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4921/chuong-trinh-sua-chua-green-farm-quy-42025",
    "crawledAt": "2026-02-02T16:01:33.907Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4921/chuong-trinh-sua-chua-green-farm-quy-42025",
        "title": "CHƯƠNG TRÌNH SỮA CHUA GREEN FARM QUÝ\n4/2025",
        "company": "CÔNG TY CỔ PHẦN SỮA VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-sale-15-5",
    "name": "  Shopee 15.5: Voucher Youtube Shopping giảm 25% tối đa 2 triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-05-15",
      "end": "2025-05-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-sale-15-5 ",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee tưng bừng khuyến mãi giữa tháng với chương trình Shopee 15.5 - Sale Giữa Tháng, dịp sale này hứa hẹn mang đến loạt ưu đãi siêu hấp dẫn cho tất cả mọi người. Nổi bật nhất là mã giảm giá YouTube Shopping giảm đến 25% tối đa 2 triệu đồng đơn từ 200K, cùng với mã Shopee Video độc quyền giảm 40% và Freeship Xtra+ hỗ trợ phí vận chuyển đến 500K. Đây là cơ hội vàng để bạn mua sắm tiết kiệm trong tháng 5 này! Hãy cùng Bloggiamgia.vn khám phá ngay những ưu đãi siêu HOT tại Shopee 15.5!"
      }
    }
  },
  {
    "id": null,
    "code": "dprogram-official-store-12-12",
    "name": "D Program Trên Lazada Dịp 12.12 Nhiều Khuyến Mãi Cực Sốc",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/dprogram-official-store-12-12",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Bạn có một làn da nhạy cảm và đang rất khó khăn trong việc tìm kiếm được một loại mỹ phẩm chăm sóc da? Bạn đang muốn những loại mỹ phẩm cao cấp an toàn cho làn da của mình. Vậy thì những sản phẩm chăm sóc da nhạy cảm đến từ DPROGRAM là một lựa chọn tuyệt vời đấy. Lễ hội mua sắm Lazada 12.12 lần này chúng ta cũng sẽ có rất nhiều khuyến mãi và quà tặng đến từ thương hiệu này. Cùng mình tìm hiểu để chuẩn bị săn DEAL nha!"
      }
    }
  },
  {
    "id": 5203,
    "code": "chuong-trinh-khach-khach-hang-thuong-xuyen-thang-122025",
    "name": "Chương trình khách \nkhách hàng thường\nxuyên tháng 12/2025",
    "company": "Công ty cổ phần dịch vụ cà phê Cao Nguyên",
    "time": {
      "start": "2025-12-19",
      "end": "2026-01-31"
    },
    "location": "Thành phố Cần Thơ; tỉnh Hưng Yên; tỉnh Khánh Hòa; tỉnh Thái Nguyên",
    "productType": "Cà phê truyền thống; cà phê thế hệ mới",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5203/chuong-trinh-khach-khach-hang-thuong-xuyen-thang-122025",
    "crawledAt": "2026-02-02T16:01:34.533Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5203/chuong-trinh-khach-khach-hang-thuong-xuyen-thang-122025",
        "title": "Chương trình khách \nkhách hàng thường\nxuyên tháng 12/2025",
        "company": "Công ty cổ phần dịch vụ cà phê Cao Nguyên",
        "timeRange": "19/12/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": 4922,
    "code": "xai-the-thanh-thoi-e-voucher-toi-noi",
    "name": "Xài thẻ thảnh thơi, E-Voucher tới nơi",
    "company": "NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN VIỆT NAM THỊNH VƯỢNG",
    "time": {
      "start": "2025-10-01",
      "end": "2026-02-28"
    },
    "location": "29 tỉnh thành",
    "productType": "Các dòng thẻ tín dụng của Khối Khách hàng Cá nhân và dòng thẻ tương ứng",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4922/xai-the-thanh-thoi-e-voucher-toi-noi",
    "crawledAt": "2026-02-02T16:01:34.892Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4922/xai-the-thanh-thoi-e-voucher-toi-noi",
        "title": "Xài thẻ thảnh thơi, E-Voucher tới nơi",
        "company": "NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN VIỆT NAM THỊNH VƯỢNG",
        "timeRange": "01/10/2025 - 28/02/2026"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-5-5",
    "name": "Lazada 5.5: Giảm 50%, Voucher Max 1 Triệu, Voucher Chớp Nhoáng 70%",
    "company": "Lazada",
    "time": {
      "start": "2025-05-05",
      "end": "2025-05-05"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-5-5",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Lazada 5.5 đã chính thức khởi động với hàng loạt ưu đãi cực cháy khiến tín đồ mua sắm không thể ngồi yên! Từ ưu đãi giảm giá đến 50%, voucher MAX giảm đến 1 triệu đồng, voucher chớp nhoáng giảm đến 70%, đến loạt voucher gian hàng giảm thêm đến 20%, tất cả đều quy tụ trong đợt sale hoành tráng lần này. Đây là cơ hội tuyệt vời để bạn thỏa sức chốt đơn những món hàng yêu thích với mức giá siêu ưu đãi. Cùng Bloggiamgia.vn khám phá ngay chương trình Lazada 5.5 để không bỏ lỡ bất kỳ voucher Lazada hot nào nhé!"
      }
    }
  },
  {
    "id": 4923,
    "code": "chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
    "name": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ trung bình,\nlớn, cá mập trong quý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4923/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:35.096Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4923/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
        "title": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ trung bình,\nlớn, cá mập trong quý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "samsung-galaxy-a9-pro-khuyen-mai-khung-duy-nhat-tai-lazada",
    "name": "Samsung Galaxy A9 Pro khuyến mãi khủng duy nhất tại Lazada? Có nên mua Galaxy A9 Pro không",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/samsung-galaxy-a9-pro-khuyen-mai-khung-duy-nhat-tai-lazada",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Cuối năm 2016 và đầu năm 2017 Lazada hợp tác với Samsung để giảm giá độc quyền những sản phẩm của Samsung 2016 thì mình thấy sự độc quyền này rất có lợi cho người dùng. Trước đây nghe nói đến độc quyền thì giá thường sẽ cao nhưng độc quyền về giá trên Lazada thì thường thấp nhất thị trường. Điểm qua 1 chút chúng ta có thể thấy Galaxy A3 và A7 2016 đã làm khuynh đảo thị trường, khiến các cửa hàng bán hàng xách tay phải hận Lazada khi bán hàng chính hãng còn rẻ hơn xách tay, tiếp đó là Galaxy J7 2016, ngoài ra còn có J2 và J3 2016. Và gần đây Lazada tiếp tục phá giá Samsung Galaxy A9 Pro - một sản phẩm được biết đến với thời lượng pin cực \"trâu\" và màn hình lớn, dường như Samsung đang đẩy hết hàng A9 Pro để đón Galaxy C9 Pro cực khủng vừa ra mắt. Hãy cùng Blog Giảm Giá điểm qua những ưu nhược điểm của Samsung Galaxy A9 Pro, liệu A9 Pro giảm còn 7.390.000đ có nên mua hay không?"
      }
    }
  },
  {
    "id": 5204,
    "code": "khach-hang-kim-cuong-2026",
    "name": "Khách hàng kim \ncương 2026",
    "company": "Công ty TNHH Hiệp Phong",
    "time": {
      "start": "2025-12-01",
      "end": "2026-01-31"
    },
    "location": "Tỉnh Cao Bằng; tỉnh Điện Biên; tỉnh Quảng Ninh tỉnh Phú Thọ",
    "productType": "Thuốc, thực phẩm chức năng, mỹ phẩm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5204/khach-hang-kim-cuong-2026",
    "crawledAt": "2026-02-02T16:01:35.750Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5204/khach-hang-kim-cuong-2026",
        "title": "Khách hàng kim \ncương 2026",
        "company": "Công ty TNHH Hiệp Phong",
        "timeRange": "01/12/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-sale-5-5",
    "name": "Shopee 5.5 - Siêu Sale Hàng Hiệu: Giảm Đến 50%",
    "company": "Shopee",
    "time": {
      "start": "2025-05-05",
      "end": "2025-05-05"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-sale-5-5",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 5.5 - Siêu Sale Hàng Hiệu chính thức bùng nổ vào 0h ngày 5/5/2025 với loạt ưu đãi cực khủng không thể bỏ lỡ! Từ cơ hội hoàn đến 3 triệu Xu khi mua hàng Shopee trên YouTube, đến loạt deal cực sâu từ Shopee Mall giảm đến 50%, voucher Shopee giảm 100K cho người dùng mới, và miễn phí vận chuyển 0Đ – tất cả đều đang chờ bạn trong ngày sale lớn 5.5. Nếu bạn đang chờ một dịp để mua sắm thật tiết kiệm và hiệu quả, thì Shopee 5.5 chính là thời điểm vàng! Hãy cùng Bloggiamgia.vn khám phá ngay những ưu đãi siêu HOT tại Shopee 5.5!"
      }
    }
  },
  {
    "id": 4924,
    "code": "chuong-trinh-khuyen-mai-khach-hang-than-thiet-mua-san-pham-hat-nem-thit-va-xuong-knorr-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
    "name": "Chương trình khuyến mại khách hàng thân thiết mua sản phẩm hạt nêm thịt và xương\nKnorr dành cho nhóm khách hàng sỉ trung bình, lớn, cá mập trong quý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4924/chuong-trinh-khuyen-mai-khach-hang-than-thiet-mua-san-pham-hat-nem-thit-va-xuong-knorr-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:36.095Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4924/chuong-trinh-khuyen-mai-khach-hang-than-thiet-mua-san-pham-hat-nem-thit-va-xuong-knorr-danh-cho-nhom-khach-hang-si-trung-binh-lon-ca-map-trong-quy-4-nam-2025",
        "title": "Chương trình khuyến mại khách hàng thân thiết mua sản phẩm hạt nêm thịt và xương\nKnorr dành cho nhóm khách hàng sỉ trung bình, lớn, cá mập trong quý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4925,
    "code": "chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-nho-trong-quy-4-nam-2025",
    "name": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ nhỏ trong\nquý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4925/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-nho-trong-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:36.305Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4925/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-nho-trong-quy-4-nam-2025",
        "title": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ nhỏ trong\nquý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-25-4",
    "name": "Shopee 25.4: Mã Video độc quyền giảm 40%, Voucher toàn sàn 3 triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-04-25",
      "end": "2025-04-25"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-25-4",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 25.4 - Lương Về Sale To chính thức đổ bộ với hàng loạt ưu đãi siêu khủng không thể bỏ lỡ! Từ voucher Shopee Video độc quyền giảm 40%, Voucher Xtra giảm đến 1 triệu, miễn phí vận chuyển 0Đ, đến loạt voucher toàn sàn cực cháy giảm tận 3 triệu - tất cả đang chờ bạn săn ngay trong dịp Lương Về Sale To 25.4 này. Dù bạn đang cần sắm đồ gia dụng, mỹ phẩm, thời trang hay đồ công nghệ, Shopee cũng đã chuẩn bị sẵn deal ngon để bạn chốt đơn cực hời. Cùng khám phá ngay loạt voucher Shopee hot nhất trong đợt sale 25.4 này để không bỏ lỡ bất kỳ cơ hội tiết kiệm nào nhé!"
      }
    }
  },
  {
    "id": 5205,
    "code": "chuong-trinh-khuyen-mai-nhan-hang-taisun",
    "name": "Chương trình khuyến\nmại nhãn hàng\nTAISUN",
    "company": "Công ty TNHHDKS H Việt Nam",
    "time": {
      "start": "2025-12-02",
      "end": "2025-12-31"
    },
    "location": "Tỉnh Cao Bằng; tỉnh Điện Biên; tỉnh Quảng Ninh tỉnh Phú Thọ",
    "productType": "SUMATE-TA QUAN SIEU MEM M09",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5205/chuong-trinh-khuyen-mai-nhan-hang-taisun",
    "crawledAt": "2026-02-02T16:01:36.961Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5205/chuong-trinh-khuyen-mai-nhan-hang-taisun",
        "title": "Chương trình khuyến\nmại nhãn hàng\nTAISUN",
        "company": "Công ty TNHHDKS H Việt Nam",
        "timeRange": "02/12/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 4926,
    "code": "chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
    "name": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ khách sạn\nquý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4926/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:37.319Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4926/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
        "title": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ khách sạn\nquý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-15-4",
    "name": "  Shopee 15.4: Voucher Toàn Sàn 3 Triệu, Voucher Video 1 Triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-04-15",
      "end": "2025-04-15"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-15-4",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 15.4 - Sale Giữa Tháng chính thức đổ bộ với loạt ưu đãi \"khó cưỡng\". Từ voucher Shopee Video giảm đến 1 triệu, Voucher Xtra giảm đến 1 triệu, miễn phí vận chuyển 0Đ, đến những voucher bất ngờ trị giá đến 3 triệu và chương trình Mua 1 Tặng 1 siêu hot - tất cả đều đang chờ bạn trong dịp Shopee 15.4. Cùng Bloggiamgia.vn điểm qua những ưu đãi nổi bật nhất trong dịp sale này để không bỏ lỡ bất kỳ voucher HOT nào nhé!"
      }
    }
  },
  {
    "id": 4926,
    "code": "chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
    "name": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ khách sạn\nquý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4926/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:37.617Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4926/chuong-trinh-khuyen-mai-khach-hang-than-thiet-danh-cho-nhom-khach-hang-si-khach-san-quy-4-nam-2025",
        "title": "Chương trình khuyến mại khách hàng thân thiết dành cho nhóm khách hàng sỉ khách sạn\nquý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "top-9-san-pham-cong-nghe-hot-nhat-lazada-sieu-sale-9-9",
    "name": "Top 9 Sản Phẩm Công Nghệ HOT Nhất Lazada Siêu Sale 9.9",
    "company": "Lazada",
    "time": {
      "start": null,
      "end": null
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/top-9-san-pham-cong-nghe-hot-nhat-lazada-sieu-sale-9-9",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Bão “Lazada Siêu Sale 9.9” đổ bộ, “canh me” 9 sản phẩm công nghệ hot nhất, giảm sâu nhất ngay thôi!"
      }
    }
  },
  {
    "id": 5206,
    "code": "tich-luy-san-luong-cung-vitagrow",
    "name": "Tích lũy sản lượng\ncùng VITAGROW+",
    "company": "Chi nhánh Công ty TNHH GUYOMARC’H-VCN tại Hà Nam",
    "time": {
      "start": "2025-12-14",
      "end": "2026-01-31"
    },
    "location": "Tỉnh Vĩnh Long, tỉnh Quảng Trị, thành phố Hồ Chí Minh, tỉnh Đồng Nai",
    "productType": "Sản phẩm hỗn hợp Vitamin, khoáng hữu cơ, chất điện giải, và Acid Amin, ho gia súc, gia cầm (VitaGrow+)",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5206/tich-luy-san-luong-cung-vitagrow",
    "crawledAt": "2026-02-02T16:01:38.167Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5206/tich-luy-san-luong-cung-vitagrow",
        "title": "Tích lũy sản lượng\ncùng VITAGROW+",
        "company": "Chi nhánh Công ty TNHH GUYOMARC’H-VCN tại Hà Nam",
        "timeRange": "14/12/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-4-4",
    "name": "Lazada 4.4: Giảm 50%, Voucher Max 1 Triệu, Voucher 70%",
    "company": "Lazada",
    "time": {
      "start": "2025-04-04",
      "end": "2025-04-04"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/lazada-4-4",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Lazada 4.4 chính là sự kiện mua sắm không thể bỏ lỡ dành cho các tín đồ săn sale. Với hàng loạt ưu đãi hấp dẫn như: Giảm giá lên đến 50%, voucher Max trị giá 1 triệu đồng, Voucher Gian Hàng giảm đến 20%, Voucher chớp nhoáng giảm 70%,... đây là cơ hội tuyệt vời để bạn mua sắm thả ga với mức giá siêu hời. Hãy cùng Bloggiamgia.vn khám phá ngay toàn bộ mã giảm giá Lazada 4.4 ngay trong bài viết này nhé!"
      }
    }
  },
  {
    "id": 4927,
    "code": "chuong-trinh-tich-luy-trung-bay-cua-hang-hoan-hao-quy-4-nam-2025",
    "name": "Chương trình tích lũy trưng bày cửa hàng hoàn hảo quý 4 năm 2025",
    "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các sản phẩm do Công ty TNHH Quốc Tế Unilever Việt Nam sản xuất và phân phối",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4927/chuong-trinh-tich-luy-trung-bay-cua-hang-hoan-hao-quy-4-nam-2025",
    "crawledAt": "2026-02-02T16:01:38.522Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4927/chuong-trinh-tich-luy-trung-bay-cua-hang-hoan-hao-quy-4-nam-2025",
        "title": "Chương trình tích lũy trưng bày cửa hàng hoàn hảo quý 4 năm 2025",
        "company": "CÔNG TY TNHH QUỐC TẾ UNILEVER VIỆT NAM",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-sieu-sale-thuong-hieu",
    "name": "Shopee Khuyến Mãi Siêu Sale Thương Hiệu Tháng 7 Có Gì Hot?",
    "company": "Shopee",
    "time": {
      "start": "2020-07-22",
      "end": "2020-07-22"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-sieu-sale-thuong-hieu",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Hỏi thật nhé! Bạn cảm thấy thế nào với những đợt sale dài ngày trên Shopee trong những tháng gần đây? Riêng mình cảm thấy khá là mệt mỏi vì ngày nào cũng \"thức đêm thức hôm\", nhưng lại không thể bỏ đi ngủ vì những mã săn quá hot. Không biết Shopee có phải đọc được suy nghĩ của mình không, mà sự kiện Shopee Siêu Sale Thương Hiệu chỉ diễn ra duy nhất một ngày 22/07/2020. Cùng Blog Giảm Giá lướt nhanh qua sự kiện Shopee Siêu Sale Thương Hiệu có gì hot và không thể bỏ lỡ nhé!"
      }
    }
  },
  {
    "id": 4928,
    "code": "chuong-trinh-khach-hang-thuong-xuyen-co-so-250924484clvvn-ap-dung-cho-khach-hang-tieu-chuan",
    "name": "Chương trình khách hàng thường xuyên có số\n250924/484/CLVVN áp dụng cho khách hàng tiêu chuẩn",
    "company": "CÔNG TY TNHH WILMAR MARKETING CLV",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "29 tỉnh thành",
    "productType": "Các sản phẩm theo danh sách",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4928/chuong-trinh-khach-hang-thuong-xuyen-co-so-250924484clvvn-ap-dung-cho-khach-hang-tieu-chuan",
    "crawledAt": "2026-02-02T16:01:38.826Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4928/chuong-trinh-khach-hang-thuong-xuyen-co-so-250924484clvvn-ap-dung-cho-khach-hang-tieu-chuan",
        "title": "Chương trình khách hàng thường xuyên có số\n250924/484/CLVVN áp dụng cho khách hàng tiêu chuẩn",
        "company": "CÔNG TY TNHH WILMAR MARKETING CLV",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    }
  },
  {
    "id": 5207,
    "code": "dong-hanh-ben-vung",
    "name": "Đồng hành bền vững",
    "company": "Công ty TNHH Hiệp Phong",
    "time": {
      "start": "2025-12-01",
      "end": "2026-01-31"
    },
    "location": "Tỉnh Cao Bằng; tỉnh Điện Biên; tỉnh Quảng Ninh tỉnh Phú Thọ",
    "productType": "Thuốc, thực phẩm chức năng, mỹ phẩm",
    "discountPercent": null,
    "promotionMethod": "Tổ chức khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5207/dong-hanh-ben-vung",
    "crawledAt": "2026-02-02T16:01:39.364Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/5207/dong-hanh-ben-vung",
        "title": "Đồng hành bền vững",
        "company": "Công ty TNHH Hiệp Phong",
        "timeRange": "01/12/2025 - 31/01/2026"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-4-4",
    "name": "Shopee 4.4: Voucher 4 Triệu, Phí Ship 0Đ, Voucher Video 1 Triệu",
    "company": "Shopee",
    "time": {
      "start": "2025-04-04",
      "end": "2025-04-04"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/shopee-4-4",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Shopee 4.4 - Siêu Hội Freeship là sự kiện mua sắm không thể bỏ lỡ dành cho các tín đồ săn sale. Với hàng loạt ưu đãi hấp dẫn như Voucher Khủng giảm đến 4 triệu đồng, voucher Shopee Video giảm đến 1 triệu đồng và phí ship 0Đ, chương trình Shopee Sale 4.4 hứa hẹn mang đến trải nghiệm mua sắm tiết kiệm nhất. Nếu bạn đang chờ đợi cơ hội để sở hữu những món đồ yêu thích với giá hời, thì đây chính là dịp lý tưởng. Hãy cùng Bloggiamgia.vn khám phá ngay những ưu đãi siêu hot tại Shopee 4.4 ngay trong bài viết này nhé!"
      }
    }
  },
  {
    "id": null,
    "code": "tuan-le-thoi-trang-shopee",
    "name": "Khuyến mãi Tuần lễ Thời Trang Shopee (10/06 - 16/06)",
    "company": "Shopee",
    "time": {
      "start": "2020-06-10",
      "end": "2020-06-10"
    },
    "location": null,
    "productType": null,
    "discountPercent": null,
    "promotionMethod": null,
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "bloggiamgia",
    "sourceUrl": "https://bloggiamgia.vn/tuan-le-thoi-trang-shopee",
    "crawledAt": null,
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "sourceName": "Bloggiamgia.vn",
        "hasHtml": true,
        "content": "Sau khi kết thúc đợt Shopee Sale Giữa Năm 6/6 chưa được bao lâu thì Shopee lại tung ra chương trình khuyến mãi mới. Đó là chương trình Tuần lễ thời trang Shopee diễn ra từ ngày 10/06 - 16/06. Tuy nhiên, các ưu đãi có trong chương trình này không chỉ riêng về ngành Thời trang đâu nhé. Vẫn sẽ có các mã giảm giá Shopee áp dụng toàn sàn cho mọi sản phẩm. Có tặng thêm mã miễn phí vận chuyển. Và đặc biệt là có Freeship 0đ luôn nha! Chi tiết cụ thể mình sẽ nói rõ ngay sau đây."
      }
    }
  },
  {
    "id": 4929,
    "code": "chuong-trinh-khach-hang-than-thiet-fpt-retail",
    "name": "Chương trình khách hàng thân thiết FPT RETAIL",
    "company": "CÔNG TY CỔ PHẦN BÁN LẺ KỸ THUẬT SỐ FPT",
    "time": {
      "start": "2025-10-01",
      "end": "2025-12-31"
    },
    "location": "Toàn quốc",
    "productType": "Các hàng hóa, dịch vụ đang kinh doanh của Công ty Cổ phần bán lẻ kỹ thuật số FPT",
    "discountPercent": null,
    "promotionMethod": "Tổ chức chương trình khách hàng thường xuyên",
    "type": "official",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4929/chuong-trinh-khach-hang-than-thiet-fpt-retail",
    "crawledAt": "2026-02-02T16:01:39.718Z",
    "meta": {
      "rawA": null,
      "rawB": {
        "url": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/4929/chuong-trinh-khach-hang-than-thiet-fpt-retail",
        "title": "Chương trình khách hàng thân thiết FPT RETAIL",
        "company": "CÔNG TY CỔ PHẦN BÁN LẺ KỸ THUẬT SỐ FPT",
        "timeRange": "01/10/2025 - 31/12/2025"
      }
    },
    "legalStatus": "approved"
  },
  {
    "id": null,
    "code": "G22.99-260101-010001",
    "name": "Khuyến mãi TẾT 2026 - Mua 2 tặng 1",
    "company": "CÔNG TY CỔ PHẦN THỰC PHẨM QUỐC TẾ",
    "time": {
      "start": "15/01/2026",
      "end": "15/02/2026"
    },
    "location": "Toàn quốc",
    "productType": "Thực phẩm",
    "discountPercent": null,
    "promotionMethod": "Tặng quà",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 50,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T16:30:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Khuyến mãi TẾT 2026",
        "company": "CTCP Thực phẩm Quốc tế",
        "content": "Mua 2 sản phẩm bất kỳ thuộc danh mục thực phẩm sẽ được tặng thêm 1 sản phẩm miễn phí"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260102-010002",
    "name": "Siêu sale 50% sản phẩm điện tử",
    "company": "CÔNG TY TNHH ĐIỆN MÁY XANH",
    "time": {
      "start": "01/02/2026",
      "end": "28/02/2026"
    },
    "location": "Hà Nội, TP.HCM, Đà Nẵng",
    "productType": "Điện tử, điện lạnh",
    "discountPercent": 50,
    "promotionMethod": "Giảm giá trực tiếp",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 51,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T16:35:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Siêu sale 50%",
        "company": "Điện máy xanh",
        "content": "Giảm giá 50% cho tất cả sản phẩm điện tử, điện lạnh"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260103-010003",
    "name": "Tích điểm đổi quà hấp dẫn - Q1/2026",
    "company": "CÔNG TY CỔ PHẦN BÁN LẺ VINMART",
    "time": {
      "start": "01/01/2026",
      "end": "31/03/2026"
    },
    "location": "Toàn quốc",
    "productType": "Siêu thị",
    "discountPercent": null,
    "promotionMethod": "Tích điểm",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 52,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T16:40:00.000Z",
    "legalStatus": "pending",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Tích điểm Q1",
        "company": "VinMart",
        "content": "Tích điểm mua sắm để đổi quà hấp dẫn trong Quý 1/2026"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260104-010004",
    "name": "Mua thuốc trực tuyến - Giảm 30% đơn đầu tiên",
    "company": "CÔNG TY CỔ PHẦN DƯỢC PHẨM PHARMACITY",
    "time": {
      "start": "01/02/2026",
      "end": "31/12/2026"
    },
    "location": "Toàn quốc",
    "productType": "Dược phẩm",
    "discountPercent": 30,
    "promotionMethod": "Giảm giá lần đầu",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 53,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T16:45:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Giảm 30% đơn đầu",
        "company": "Pharmacity",
        "content": "Khách hàng mua thuốc trực tuyến lần đầu được giảm 30%"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260105-010005",
    "name": "Tuần lễ thời trang - Giảm đến 70%",
    "company": "CÔNG TY CỔ PHẦN THỜI TRANG CANIFA",
    "time": {
      "start": "10/02/2026",
      "end": "20/02/2026"
    },
    "location": "Hà Nội, TP.HCM",
    "productType": "Thời trang",
    "discountPercent": 70,
    "promotionMethod": "Giảm giá",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 54,
    "source": "vietrade",
    "sourceUrl": "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai/6001/tuan-le-thoi-trang",
    "crawledAt": "2026-02-02T16:50:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Tuần lễ thời trang",
        "company": "Canifa",
        "content": "Giảm giá đến 70% toàn bộ sản phẩm thời trang"
      }
    }
  },
  {
    "id": null,
    "code": "shopee-valentine-2026",
    "name": "Shopee Valentine 2026 - Voucher 500K, Freeship 0Đ",
    "company": "Shopee",
    "time": {
      "start": "10/02/2026",
      "end": "14/02/2026"
    },
    "location": "Online",
    "productType": "Tất cả",
    "discountPercent": null,
    "promotionMethod": "Voucher",
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "crawl",
    "sourceUrl": "https://shopee.vn",
    "crawledAt": "2026-02-02T17:00:00.000Z",
    "legalStatus": "pending",
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Shopee",
        "title": "Valentine 2026",
        "content": "Voucher 500K và miễn phí vận chuyển dịp Valentine"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260106-010006",
    "name": "Mua xe máy Honda - Trả góp 0% lãi suất",
    "company": "CÔNG TY TNHH HONDA VIỆT NAM",
    "time": {
      "start": "01/02/2026",
      "end": "30/04/2026"
    },
    "location": "Toàn quốc",
    "productType": "Xe máy",
    "discountPercent": null,
    "promotionMethod": "Trả góp 0%",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 55,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T17:05:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Trả góp 0%",
        "company": "Honda VN",
        "content": "Mua xe máy Honda trả góp với lãi suất 0% trong 12 tháng"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260107-010007",
    "name": "Khuyến mãi sữa bột - Mua 3 tặng 1",
    "company": "CÔNG TY TNHH ABBOTT VIỆT NAM",
    "time": {
      "start": "15/01/2026",
      "end": "15/03/2026"
    },
    "location": "Toàn quốc",
    "productType": "Sữa bột dinh dưỡng",
    "discountPercent": null,
    "promotionMethod": "Mua nhiều tặng nhiều",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 56,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T17:10:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Khuyến mãi sữa",
        "company": "Abbott",
        "content": "Mua 3 lon sữa bột Abbott sẽ được tặng thêm 1 lon"
      }
    }
  },
  {
    "id": null,
    "code": "lazada-super-brand-day",
    "name": "Lazada Super Brand Day - Samsung giảm đến 40%",
    "company": "Lazada",
    "time": {
      "start": "05/02/2026",
      "end": "07/02/2026"
    },
    "location": "Online",
    "productType": "Điện thoại Samsung",
    "discountPercent": 40,
    "promotionMethod": "Flash Sale",
    "type": "unofficial",
    "agencyId": null,
    "total": null,
    "rowStt": null,
    "source": "crawl",
    "sourceUrl": "https://lazada.vn",
    "crawledAt": "2026-02-02T17:15:00.000Z",
    "legalStatus": "pending",
    "meta": {
      "rawA": null,
      "rawB": {
        "platform": "Lazada",
        "title": "Super Brand Day",
        "content": "Điện thoại Samsung giảm giá đến 40%"
      }
    }
  },
  {
    "id": null,
    "code": "G22.99-260108-010008",
    "name": "Vinamilk tri ân khách hàng - Quà tặng 200 triệu",
    "company": "CÔNG TY CỔ PHẦN SỮA VIỆT NAM VINAMILK",
    "time": {
      "start": "01/02/2026",
      "end": "31/05/2026"
    },
    "location": "Toàn quốc",
    "productType": "Sữa tươi, sữa chua",
    "discountPercent": null,
    "promotionMethod": "Quà tặng may mắn",
    "type": "official",
    "agencyId": "-1",
    "total": 36455,
    "rowStt": 57,
    "source": "dichvucong",
    "sourceUrl": null,
    "crawledAt": "2026-02-02T17:20:00.000Z",
    "legalStatus": "approved",
    "meta": {
      "rawA": null,
      "rawB": {
        "title": "Tri ân khách hàng",
        "company": "Vinamilk",
        "content": "Chương trình tri ân với tổng giá trị quà tặng 200 triệu đồng"
      }
    }
  }
];
export function PromotionsPage() {
  const [filters, setFilters] = useState({
    type: "all",
    source: "all",
    startDate: "",
    endDate: "",
    location: "",
    company: "",
    productType: "",
    discountRange: [0, 100],
  });

  const [filteredData, setFilteredData] = useState<PromotionData[]>(mockPromotions);
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const displayData = filteredData;

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    let filtered = [...mockPromotions];

    // Filter by type
    if (filters.type !== "all") {
      filtered = filtered.filter((item) => item.type === filters.type);
    }

    // Filter by source
    if (filters.source !== "all") {
      filtered = filtered.filter((item) => item.source === filters.source);
    }

    // Filter by date range
    if (filters.startDate) {
      filtered = filtered.filter((item) => {
        if (!item.time.start) return false;
        const itemDate = new Date(item.time.start.split("/").reverse().join("-"));
        const filterDate = new Date(filters.startDate);
        return itemDate >= filterDate;
      });
    }

    if (filters.endDate) {
      filtered = filtered.filter((item) => {
        if (!item.time.end) return false;
        const itemDate = new Date(item.time.end.split("/").reverse().join("-"));
        const filterDate = new Date(filters.endDate);
        return itemDate <= filterDate;
      });
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((item) =>
        item.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by company
    if (filters.company) {
      filtered = filtered.filter((item) =>
        item.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    // Filter by product type
    if (filters.productType) {
      filtered = filtered.filter((item) =>
        item.productType?.toLowerCase().includes(filters.productType.toLowerCase())
      );
    }

    // Filter by discount range (only if discountPercent exists)
    filtered = filtered.filter(
      (item) =>
        item.discountPercent === null ||
        (item.discountPercent >= filters.discountRange[0] &&
          item.discountPercent <= filters.discountRange[1])
    );

    setFilteredData(filtered);
    toast.success(`Tìm thấy ${filtered.length} kết quả phù hợp`);
  };

  const handleReset = () => {
    setFilters({
      type: "all",
      source: "all",
      startDate: "",
      endDate: "",
      location: "",
      company: "",
      productType: "",
      discountRange: [0, 100],
    });
    setFilteredData(mockPromotions);
    toast.info("Đã reset bộ lọc");
  };

  const handleExport = () => {
    const confirmExport = window.confirm(
      `Bạn có muốn xuất ${displayData.length} bản ghi theo bộ lọc hiện tại không?`
    );

    if (confirmExport) {
      toast.loading("Đang xuất dữ liệu...");
      setTimeout(() => {
        toast.success(`Đã xuất ${displayData.length} bản ghi ra file Excel thành công!`);
      }, 1500);
    }
  };

  const handleViewDetail = (promotion: PromotionData) => {
    setSelectedPromotion(promotion);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedPromotion(null);
  };

  const officialCount = mockPromotions.filter((p) => p.type === "official").length;
  const unofficialCount = mockPromotions.filter((p) => p.type === "unofficial").length;
  const dichvucongCount = mockPromotions.filter((p) => p.source === "dichvucong").length;
  const vietradeCount = mockPromotions.filter((p) => p.source === "vietrade").length;
  const crawlCount = mockPromotions.filter((p) => p.source === "crawl").length;

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="w-full mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg border border-blue-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tổng số chương trình</p>
                <p className="text-3xl font-bold text-blue-700 mt-1">{displayData.length}</p>
              </div>
              <FileSpreadsheet className="h-10 w-10 text-blue-300" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-green-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chính thức</p>
                <p className="text-3xl font-bold text-green-700 mt-1">
                  {displayData.filter((p) => p.type === "official").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-orange-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Không chính thức</p>
                <p className="text-3xl font-bold text-orange-700 mt-1">
                  {displayData.filter((p) => p.type === "unofficial").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Dịch vụ công</p>
                <p className="text-3xl font-bold text-purple-700 mt-1">
                  {displayData.filter((p) => p.source === "dichvucong").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Database className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-cyan-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Vietrade</p>
                <p className="text-3xl font-bold text-cyan-700 mt-1">
                  {displayData.filter((p) => p.source === "vietrade").length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <Database className="h-6 w-6 text-cyan-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full mb-6">
        <PromotionFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleReset}
          onExport={handleExport}
        />
      </div>

      {/* Data Table */}
      <div className="w-full">
        <PromotionTable data={displayData} onViewDetail={handleViewDetail} />
      </div>

      {/* Detail Modal */}
      <PromotionDetailModal
        promotion={selectedPromotion}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
}