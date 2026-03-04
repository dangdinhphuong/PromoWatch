import svgPaths from "./svg-wzl8nvzaqv";

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[36px] items-start left-[516.25px] px-[16px] py-[8px] rounded-[33554400px] top-0 w-[167.5px]" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">Giám sát đa nền tảng</p>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[52px] w-[1152px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[576.3px] not-italic text-[#101828] text-[36px] text-center top-[-2px]">{`Chức năng & Ứng dụng`}</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[28px] left-[216px] top-[108px] w-[768px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[384.78px] not-italic text-[#4a5565] text-[18px] text-center top-[-1px]">Giám sát đa nền tảng – Thu thập dữ liệu – Phát hiện vi phạm – Điều hành tập trung</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <H1 />
      <P />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[233px] items-start left-0 pb-px pt-[48px] px-[133.5px] top-0 w-[1467px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Megaphone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Megaphone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Megaphone">
          <path d="M3 11L21 6V18L3 14V11Z" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.paa5e400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <Megaphone />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] whitespace-pre-wrap">Tin Khuyến Mãi</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[149px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">Trung tâm Khuyến mãi AI</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[183.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px]">Thu thập – phân loại – phát hiện bất thường</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[229.5px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight />
    </div>
  );
}

interface ContainerProps {
  onClick?: () => void;
}

function Container2({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Tin Khuyến Mãi - Trung tâm Khuyến mãi AI"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
      <H2 />
      <P1 />
      <P2 />
      <Button />
    </div>
  );
}

function Ticket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Ticket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Ticket">
          <path d={svgPaths.p3a1ce280} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 5V7" id="Vector_2" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 17V19" id="Vector_3" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 11V13" id="Vector_4" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#cefafe] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <Ticket />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] whitespace-pre-wrap">Mã Giảm Giá</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[149px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">Kho Voucher</p>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[183.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px]">Phân tích điều kiện – phát hiện mã rủi ro</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[229.5px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight1 />
    </div>
  );
}

function Container4({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Mã Giảm Giá - Kho Voucher"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container5 />
      <H3 />
      <P3 />
      <P4 />
      <Button1 />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Database">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Database">
          <path d={svgPaths.p11feba00} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b1afa80} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eed8380} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f3e8ff] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <Database />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] whitespace-pre-wrap">{`Chuẩn hóa & Tích hợp Dữ liệu`}</p>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[149px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">{`Trung tâm ETL & Geocoding`}</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[183.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px]">Import Excel – ánh xạ tọa độ – chuẩn hóa format</p>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[229.5px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight2 />
    </div>
  );
}

function Container6({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Chuẩn hóa & Tích hợp Dữ liệu - Trung tâm ETL & Geocoding"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container7 />
      <H4 />
      <P5 />
      <P6 />
      <Button2 />
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ShieldAlert">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ShieldAlert">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#cbfbf1] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <ShieldAlert />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute h-[56px] left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-2px] w-[293px] whitespace-pre-wrap">Kiểm soát hành vi vi phạm trên TMĐT/nền tảng số</p>
    </div>
  );
}

function P7() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[177px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">Trung tâm Điều hành Giám sát</p>
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[45.5px] left-[33px] top-[211.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[287px] whitespace-pre-wrap">Phát hiện vi phạm – cảnh báo rủi ro – xử lý tập trung</p>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[280.25px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight3 />
    </div>
  );
}

function Container8({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Kiểm soát hành vi vi phạm trên TMĐT/nền tảng số - Trung tâm Điều hành Giám sát"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container9 />
      <H5 />
      <P7 />
      <P8 />
      <Button3 />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TrendingUp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TrendingUp">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#ffedd4] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <TrendingUp />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[56px] left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-2px] w-[299px] whitespace-pre-wrap">{`Quản lý nhà nước về giá & theo dõi/bình ổn`}</p>
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[177px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">Trong phạm vi Bộ Công Thương</p>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[45.5px] left-[33px] top-[211.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[301px] whitespace-pre-wrap">Giám sát biến động giá – phát hiện bất thường – bình ổn thị trường</p>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[280.25px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight4 />
    </div>
  );
}

function Container10({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Quản lý nhà nước về giá & theo dõi/bình ổn - Trong phạm vi Bộ Công Thương"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container11 />
      <H6 />
      <P9 />
      <P10 />
      <Button4 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Users">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#fce7f3] content-stretch flex items-center justify-center left-[33px] rounded-[14px] size-[56px] top-[33px]" data-name="Container">
      <Users />
    </div>
  );
}

function H7() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[33px] top-[109px] w-[302px]" data-name="h3">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] whitespace-pre-wrap">Phối hợp liên ngành</p>
    </div>
  );
}

function P11() {
  return (
    <div className="absolute h-[22.75px] left-[33px] top-[149px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px]">Công an, Hải quan, Biên phòng, BCĐ 389</p>
    </div>
  );
}

function P12() {
  return (
    <div className="absolute h-[45.5px] left-[33px] top-[183.75px] w-[302px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[297px] whitespace-pre-wrap">Kết nối đa ngành – chia sẻ thông tin – điều phối tác chiến</p>
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="absolute left-[83.81px] size-[16px] top-[2px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronRight">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[252.25px] w-[99.813px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[38px] not-italic text-[#155dfc] text-[14px] text-center top-[-1px]">Xem chi tiết</p>
      <ChevronRight5 />
    </div>
  );
}

function Container12({ onClick }: ContainerProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div 
      className="bg-white col-3 justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
      data-name="Container"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label="Xem chi tiết Phối hợp liên ngành - Công an, Hải quan, Biên phòng, BCĐ 389"
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container13 />
      <H7 />
      <P11 />
      <P12 />
      <Button5 />
    </div>
  );
}

interface Div2Props {
  onCardClick?: (page: string) => void;
}

function Div2({ onCardClick }: Div2Props) {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__minmax(0,283.50fr)_minmax(0,1fr)] h-[641.75px] left-[157.5px] top-[281px] w-[1152px]" data-name="div">
      <Container2 onClick={() => onCardClick?.('promotions')} />
      <Container4 onClick={() => onCardClick?.('discount-codes')} />
      <Container6 onClick={() => onCardClick?.('data-integration')} />
      <Container8 onClick={() => onCardClick?.('ecommerce-violation')} />
      <Container10 onClick={() => onCardClick?.('price-management')} />
      <Container12 onClick={() => onCardClick?.('inter-agency')} />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-0 w-[27.469px]" data-name="span">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#1c398e] text-[20px] whitespace-pre-wrap">ℹ️</p>
    </div>
  );
}

function H8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <Span />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[35.47px] not-italic text-[#1c398e] text-[16px] top-0">{` Thông tin`}</p>
    </div>
  );
}

function P13() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#193cb8] text-[14px] top-[-1px]">Hệ thống được thiết kế đặc biệt cho cơ quan Quản lý Thị trường nhằm tối ưu hóa quy trình làm việc, nâng cao hiệu quả giám sát và quản lý dữ liệu một cách chuyên nghiệp.</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col gap-[8px] h-[106.75px] items-start left-[157.5px] pl-[28px] pr-[24px] pt-[24px] rounded-[10px] top-[970.75px] w-[1152px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <H8 />
      <P13 />
    </div>
  );
}

interface Section1Props {
  onCardClick?: (page: string) => void;
}

function Section1({ onCardClick }: Section1Props) {
  return (
    <div className="bg-[#f9fafb] h-[1125.5px] relative shrink-0 w-full" data-name="section">
      <Div1 />
      <Div2 onCardClick={onCardClick} />
      <Div3 />
    </div>
  );
}

function MainContent({ onCardClick }: Section1Props) {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1125.5px] items-start relative shrink-0 w-full" data-name="Main Content">
      <Section1 onCardClick={onCardClick} />
    </div>
  );
}

function Div({ onCardClick }: Section1Props) {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1189.5px] items-start pt-[64px] relative shrink-0 w-full" data-name="div">
      <MainContent onCardClick={onCardClick} />
    </div>
  );
}

function SM({ onCardClick }: Section1Props) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[870px] items-start left-0 top-0 w-[1467px]" data-name="sM">
      <Section />
      <Div onCardClick={onCardClick} />
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.313px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Span1 />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="h1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1px] tracking-[-0.45px]">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container17 />
        <H />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.172px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.141px]" data-name="nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[40px] relative shrink-0 w-[433.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container16 />
        <Nav />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Settings">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Settings">
          <path d={svgPaths.p2338cf00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Settings />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
          <Container15 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-0 pb-px top-[200px] w-[1467px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

interface HThngThuThpVaGiamSatThongTinKhuynMiProps {
  onNavigate?: (page: string) => void;
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi({ onNavigate }: HThngThuThpVaGiamSatThongTinKhuynMiProps) {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <SM onCardClick={onNavigate} />
      <Div4 />
    </div>
  );
}