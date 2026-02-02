import svgPaths from "./svg-e1uyqzug8c";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] tracking-[-0.5px]">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container3 />
        <Text1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.141px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[456.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container2 />
        <Navigation />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#155dfc] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[24px] py-[10px] relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-center text-white">Xuất báo cáo</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_45_1397)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_45_1397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[183.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white h-[73px] relative shrink-0 w-full" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[163.5px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.938px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Bộ lọc tìm kiếm</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[60.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Reset</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#155dfc] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Tìm kiếm</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f0fdf4] h-[32px] relative rounded-[8px] shrink-0 w-[67.703px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008236] text-[14px] text-center">Export</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[79.516px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Mở rộng</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[314.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Heading />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function PromotionFilter() {
  return (
    <div className="bg-white h-[59px] relative rounded-[10px] shrink-0 w-full" data-name="PromotionFilter">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[11.75px]" data-name="Primitive.button" />;
}

function TableHead() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="TableHead">
      <PrimitiveButton />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[40px] top-0 w-[50px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">STT</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[90px] top-0 w-[354.031px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Tên chương trình</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[444.03px] top-0 w-[260.859px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Công ty / Đơn vị</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[704.89px] top-0 w-[173.016px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Thời gian áp dụng</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[877.91px] top-0 w-[159.703px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Địa điểm</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Loại mặt hàng</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[10.75px]">Nguồn</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[119.86px] size-[16px] top-[12.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[9.75px]">Thời điểm thu thập</p>
      <Icon1 />
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[41.17px] text-[#0a0a0a] text-[12px] text-center top-[10.75px]">Hành động</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#eff6ff] border-[rgba(0,0,0,0.1)] border-b border-solid h-[40px] left-0 top-0 w-[1629px]" data-name="TableRow">
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
      <TableHead9 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1629px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function PrimitiveButton1() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[40px]" data-name="TableCell">
      <PrimitiveButton1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[40px] top-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[15.5px]">1</p>
    </div>
  );
}

function PromotionTable1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[250px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[12px]">Chương trình chăm sóc khách hàng thường xuyên lâu năm</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[90px] top-0 w-[354.031px]" data-name="TableCell">
      <PromotionTable1 />
    </div>
  );
}

function PromotionTable2() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[16.5px] w-[180px]" data-name="PromotionTable">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] top-[-1px] w-[417px] whitespace-pre-wrap">MOBIFONE NGHỆ AN - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[444.03px] top-0 w-[260.859px]" data-name="TableCell">
      <PromotionTable2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#0a0a0a] text-[12px] whitespace-pre-wrap">01/01/2026</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[75px] whitespace-pre-wrap">→ 31/12/2026</p>
    </div>
  );
}

function PromotionTable3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8.5px] w-[157.016px]" data-name="PromotionTable">
      <Container8 />
      <Container9 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[704.89px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable3 />
    </div>
  );
}

function PromotionTable4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[143.703px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Tỉnh Nghệ An</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[877.91px] top-0 w-[159.703px]" data-name="TableCell">
      <PromotionTable4 />
    </div>
  );
}

function PromotionTable5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[21.406px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px]">N/A</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable5 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#dbeafe] h-[18px] left-[8px] rounded-[8px] top-[15.5px] w-[85.109px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Dịch vụ công</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function PromotionTable6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[92.875px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">02/02/2026 14:04</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableCell">
      <PromotionTable6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[28px] left-[8px] rounded-[8px] top-[10.5px] w-[64.438px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[42.5px] text-[#155dfc] text-[12px] text-center top-[5px]">Xem</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableCell">
      <Button8 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-0 w-[1629px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function PrimitiveButton2() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[40px]" data-name="TableCell">
      <PrimitiveButton2 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[40px] top-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[15.5px]">2</p>
    </div>
  );
}

function PromotionTable7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[250px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#101828] text-[12px] whitespace-pre-wrap">Khuyến mại Xuân 2026</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[90px] top-0 w-[354.031px]" data-name="TableCell">
      <PromotionTable7 />
    </div>
  );
}

function PromotionTable8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[180px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Imexpharm CN Cửu Long 5</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[444.03px] top-0 w-[260.859px]" data-name="TableCell">
      <PromotionTable8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#0a0a0a] text-[12px] whitespace-pre-wrap">03/12/2025</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[75px] whitespace-pre-wrap">→ 15/12/2025</p>
    </div>
  );
}

function PromotionTable9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8.5px] w-[157.016px]" data-name="PromotionTable">
      <Container10 />
      <Container11 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[704.89px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable9 />
    </div>
  );
}

function PromotionTable10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[143.703px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Cà Mau</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[877.91px] top-0 w-[159.703px]" data-name="TableCell">
      <PromotionTable10 />
    </div>
  );
}

function PromotionTable11() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[157.016px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Dược phẩm</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable11 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#dcfce7] h-[18px] left-[8px] rounded-[8px] top-[15.5px] w-[59.859px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function PromotionTable12() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[92.875px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableCell">
      <PromotionTable12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[28px] left-[8px] rounded-[8px] top-[10.5px] w-[64.438px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[42.5px] text-[#155dfc] text-[12px] text-center top-[5px]">Xem</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableCell">
      <Button9 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[49px] w-[1629px]" data-name="TableRow">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function PrimitiveButton3() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[40px]" data-name="TableCell">
      <PrimitiveButton3 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[40px] top-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[15.5px]">3</p>
    </div>
  );
}

function PromotionTable13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[250px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#101828] text-[12px] whitespace-pre-wrap">Chương trình KH thân thiết T12/2025</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[90px] top-0 w-[354.031px]" data-name="TableCell">
      <PromotionTable13 />
    </div>
  );
}

function PromotionTable14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[180px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Highlands Coffee</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[444.03px] top-0 w-[260.859px]" data-name="TableCell">
      <PromotionTable14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#0a0a0a] text-[12px] whitespace-pre-wrap">19/12/2025</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[75px] whitespace-pre-wrap">→ 31/01/2026</p>
    </div>
  );
}

function PromotionTable15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8.5px] w-[157.016px]" data-name="PromotionTable">
      <Container12 />
      <Container13 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-[704.89px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable15 />
    </div>
  );
}

function PromotionTable16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[143.703px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Toàn quốc</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[877.91px] top-0 w-[159.703px]" data-name="TableCell">
      <PromotionTable16 />
    </div>
  );
}

function PromotionTable17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[157.016px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Menu Highlands</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable17 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#dcfce7] h-[18px] left-[8px] rounded-[8px] top-[15.5px] w-[59.859px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function PromotionTable18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[92.875px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableCell">
      <PromotionTable18 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[28px] left-[8px] rounded-[8px] top-[10.5px] w-[64.438px]" data-name="Button">
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[42.5px] text-[#155dfc] text-[12px] text-center top-[5px]">Xem</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableCell">
      <Button10 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[98px] w-[1629px]" data-name="TableRow">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function PrimitiveButton4() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[40px]" data-name="TableCell">
      <PrimitiveButton4 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[40px] top-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[15.5px]">4</p>
    </div>
  );
}

function PromotionTable19() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[250px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[12px]">Nhân 2 – Nhân 4 tích điểm đơn hàng Unilever</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[90px] top-0 w-[354.031px]" data-name="TableCell">
      <PromotionTable19 />
    </div>
  );
}

function PromotionTable20() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[180px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Bách Hóa Xanh</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[444.03px] top-0 w-[260.859px]" data-name="TableCell">
      <PromotionTable20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#0a0a0a] text-[12px] whitespace-pre-wrap">02/12/2025</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[75px] whitespace-pre-wrap">→ 31/12/2025</p>
    </div>
  );
}

function PromotionTable21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8.5px] w-[157.016px]" data-name="PromotionTable">
      <Container14 />
      <Container15 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[704.89px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable21 />
    </div>
  );
}

function PromotionTable22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[143.703px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Toàn quốc</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-[877.91px] top-0 w-[159.703px]" data-name="TableCell">
      <PromotionTable22 />
    </div>
  );
}

function PromotionTable23() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[157.016px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">SP tại Bách Hoá Xanh</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable23 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#dcfce7] h-[18px] left-[8px] rounded-[8px] top-[15.5px] w-[59.859px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function PromotionTable24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[92.875px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableCell">
      <PromotionTable24 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[28px] left-[8px] rounded-[8px] top-[10.5px] w-[64.438px]" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[42.5px] text-[#155dfc] text-[12px] text-center top-[5px]">Xem</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableCell">
      <Button11 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[147px] w-[1629px]" data-name="TableRow">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function PrimitiveButton5() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell40() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[40px]" data-name="TableCell">
      <PrimitiveButton5 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[48.5px] left-[40px] top-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[#0a0a0a] text-[12px] top-[15.5px]">5</p>
    </div>
  );
}

function PromotionTable25() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[250px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[12px]">{`Mừng Lazada 9 Tuổi, Paula's Choice Tặng Quà To Nè Bạn Ơi!`}</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[48.5px] left-[90px] top-0 w-[354.031px]" data-name="TableCell">
      <PromotionTable25 />
    </div>
  );
}

function PromotionTable26() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] overflow-clip top-[16.5px] w-[180px]" data-name="PromotionTable">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#364153] text-[12px] whitespace-pre-wrap">Lazada</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[48.5px] left-[444.03px] top-0 w-[260.859px]" data-name="TableCell">
      <PromotionTable26 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#0a0a0a] text-[12px] whitespace-pre-wrap">31/03/2021</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[75px] whitespace-pre-wrap">→ 31/03/2021</p>
    </div>
  );
}

function PromotionTable27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8.5px] w-[157.016px]" data-name="PromotionTable">
      <Container16 />
      <Container17 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[48.5px] left-[704.89px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable27 />
    </div>
  );
}

function PromotionTable28() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[21.406px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px]">N/A</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[48.5px] left-[877.91px] top-0 w-[159.703px]" data-name="TableCell">
      <PromotionTable28 />
    </div>
  );
}

function PromotionTable29() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[21.406px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px]">N/A</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[48.5px] left-[1037.61px] top-0 w-[173.016px]" data-name="TableCell">
      <PromotionTable29 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[18px] left-[8px] rounded-[8px] top-[15.5px] w-[62.734px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6e11b0] text-[12px]">Thu thập</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dab2ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[48.5px] left-[1210.63px] top-0 w-[146.406px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function PromotionTable30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[8px] top-[16.5px] w-[92.875px]" data-name="PromotionTable">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">01/02/2026 17:00</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[48.5px] left-[1357.03px] top-0 w-[191.531px]" data-name="TableCell">
      <PromotionTable30 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute h-[28px] left-[8px] rounded-[8px] top-[10.5px] w-[64.438px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[42.5px] text-[#155dfc] text-[12px] text-center top-[5px]">Xem</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[48.5px] left-[1548.56px] top-0 w-[80.438px]" data-name="TableCell">
      <Button12 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[48.5px] left-0 top-[196px] w-[1629px]" data-name="TableRow">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[244.5px] left-0 top-[40px] w-[1629px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[284.5px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[284.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[202.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-2px] w-[181px] whitespace-pre-wrap">Hiển thị 1 - 5 trong tổng số 5 bản ghi</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PaginationPrevious() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[32px] top-[8px] w-[54.016px]" data-name="PaginationPrevious">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Previous</p>
    </div>
  );
}

function PaginationLink() {
  return (
    <div className="absolute h-[36px] left-0 opacity-50 rounded-[8px] top-0 w-[98.016px]" data-name="PaginationLink">
      <Icon7 />
      <PaginationPrevious />
    </div>
  );
}

function PaginationItem() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="PaginationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PaginationLink />
      </div>
    </div>
  );
}

function PaginationLink1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[8px] size-[36px] top-0" data-name="PaginationLink">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[14.17px] text-[#0a0a0a] text-[14px] top-[5px]">1</p>
    </div>
  );
}

function PaginationItem1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="PaginationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PaginationLink1 />
      </div>
    </div>
  );
}

function PaginationNext() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[8px] w-[30.25px]" data-name="PaginationNext">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Next</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[46.25px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PaginationLink2() {
  return (
    <div className="absolute h-[36px] left-0 opacity-50 rounded-[8px] top-0 w-[74.25px]" data-name="PaginationLink">
      <PaginationNext />
      <Icon8 />
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[74.25px]" data-name="PaginationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PaginationLink2 />
      </div>
    </div>
  );
}

function PaginationContent() {
  return (
    <div className="h-[36px] relative shrink-0 w-[216.266px]" data-name="PaginationContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <PaginationItem />
        <PaginationItem1 />
        <PaginationItem2 />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1394.922px]" data-name="Pagination">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PaginationContent />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[16px] relative size-full">
          <Container19 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function PromotionTable() {
  return (
    <div className="bg-white h-[359.5px] relative rounded-[10px] shrink-0 w-full" data-name="PromotionTable">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container7 />
        <Container18 />
      </div>
    </div>
  );
}

function PromotionsTablePage() {
  return (
    <div className="bg-[#f9fafb] h-[482.5px] relative shrink-0 w-full" data-name="PromotionsTablePage">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <PromotionFilter />
        <PromotionTable />
      </div>
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Layout />
      <PromotionsTablePage />
    </div>
  );
}