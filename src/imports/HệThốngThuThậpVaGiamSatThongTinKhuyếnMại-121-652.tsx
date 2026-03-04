import svgPaths from "./svg-o0efk2678g";

function Heading() {
  return (
    <div className="content-stretch flex h-[27.987px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Trung tâm Khuyến mãi</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Quản lý tin khuyến mãi</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[83.944px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.993px] items-start pt-[15.99px] px-[31.999px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[85.106px] items-start pb-[1.162px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[79.933px] relative shrink-0 w-[30.837px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[31px] whitespace-pre-wrap">Bộ lọc tìm kiếm</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[31.999px] relative rounded-[8px] shrink-0 w-[60.639px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.162px] py-[1.162px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Reset</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] h-[31.999px] relative rounded-[8px] shrink-0 w-[82.474px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Tìm kiếm</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0fdf4] h-[31.999px] relative rounded-[8px] shrink-0 w-[68.026px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.162px] py-[1.162px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008236] text-[14px] text-center">Export</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[31.999px] relative rounded-[8px] shrink-0 w-[79.497px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Mở rộng</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[31.999px] relative shrink-0 w-[314.595px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[105.089px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.162px] pl-[15.99px] pr-[11.09px] relative size-full">
          <Heading2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[107.412px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-[1.162px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[24.25px]" data-name="Primitive.button" />;
}

function HeaderCell() {
  return (
    <div className="absolute h-[64.542px] left-0 top-0 w-[27.987px]" data-name="Header Cell">
      <PrimitiveButton />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[64.542px] left-[27.99px] top-0 w-[48.533px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">STT</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[64.542px] left-[76.52px] top-0 w-[279.983px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Tên chương trình</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[64.542px] left-[356.5px] top-0 w-[249.999px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Công ty / Đơn vị</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[64.542px] left-[606.5px] top-0 w-[139.991px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">{`Thời gian áp dụng `}</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[64.542px] left-[746.49px] top-0 w-[179.994px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Địa điểm</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[64.542px] left-[926.49px] top-0 w-[179.994px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Loại mặt hàng</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[64.542px] left-[1106.48px] top-0 w-[129.228px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Nguồn</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute h-[64.542px] left-[1235.71px] top-0 w-[136.253px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[19.98px]">Pháp lý</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[49.95px] size-[15.99px] top-[35.57px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d={svgPaths.p8912880} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute h-[64.542px] left-[1371.96px] top-0 w-[149.992px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[10px] w-[93px] whitespace-pre-wrap">{`Thời điểm thu thập `}</p>
      <Icon />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute h-[64.542px] left-[1521.96px] top-0 w-[97.557px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[49px] text-[#0a0a0a] text-[14px] text-center top-[19.98px]">Hành động</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#eff6ff] border-[rgba(0,0,0,0.1)] border-b-[1.162px] border-solid h-[64.542px] left-0 top-0 w-[1619.512px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[64.542px] left-0 top-0 w-[1619.512px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function PrimitiveButton1() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[38.94px]" data-name="Primitive.button" />;
}

function TableCell() {
  return (
    <div className="absolute h-[93.328px] left-0 top-0 w-[27.987px]" data-name="Table Cell">
      <PrimitiveButton1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[93.328px] left-[27.99px] top-0 w-[48.533px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[34.66px]">1</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[45.448px] left-[12px] top-[23.94px] w-[255.988px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px] w-[233px] whitespace-pre-wrap">Chương trình chăm sóc khách hàng thường xuyên lâu năm</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[93.328px] left-[76.52px] top-0 w-[279.983px]" data-name="Table Cell">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[68.172px] left-[12px] top-[12.58px] w-[226.005px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#1e2939] text-[14px] top-[-1.84px] w-[193px] whitespace-pre-wrap">MOBIFONE NGHỆ AN - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[93.328px] left-[356.5px] top-0 w-[249.999px]" data-name="Table Cell">
      <Paragraph2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">01/01/2026</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[86px] whitespace-pre-wrap">→ 31/12/2026</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.448px] items-start left-[12px] top-[23.94px] w-[115.997px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[93.328px] left-[606.5px] top-0 w-[139.991px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[93.328px] left-[746.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[34.46px]">Tỉnh Nghệ An</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[93.328px] left-[926.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#99a1af] text-[14px] top-[34.66px]">N/A</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#dbeafe] border-[#8ec5ff] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[31.51px] w-[105.234px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#193cb8] text-[14px] top-[1.99px]">Dịch vụ công</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[93.328px] left-[1106.48px] top-0 w-[129.228px]" data-name="Table Cell">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#d1d5dc] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[31.51px] w-[112.258px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#1e2939] text-[14px] top-[1.99px]">Chưa xác định</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[93.328px] left-[1235.71px] top-0 w-[136.253px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[93.328px] left-[1371.96px] top-0 w-[149.992px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#364153] text-[14px] top-[34.46px]">02/02/2026 14:04</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_663)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_663">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[31.999px] left-[14.54px] rounded-[8px] top-[30.66px] w-[68.462px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[43.97px] text-[#155dfc] text-[14px] text-center top-[4.01px]">Xem</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[93.328px] left-[1521.96px] top-0 w-[97.557px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.162px] border-solid h-[93.328px] left-0 top-0 w-[1619.512px]" data-name="Table Row">
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
      <TableCell10 />
    </div>
  );
}

function PrimitiveButton2() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[27.57px]" data-name="Primitive.button" />;
}

function TableCell11() {
  return (
    <div className="absolute h-[70.604px] left-0 top-0 w-[27.987px]" data-name="Table Cell">
      <PrimitiveButton2 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[70.604px] left-[27.99px] top-0 w-[48.533px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[23.3px]">2</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[255.988px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">Khuyến mại Xuân 2026</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[70.604px] left-[76.52px] top-0 w-[279.983px]" data-name="Table Cell">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[226.005px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#1e2939] text-[14px] top-[-1.84px]">Imexpharm CN Cửu Long 5</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[70.604px] left-[356.5px] top-0 w-[249.999px]" data-name="Table Cell">
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">03/12/2025</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[86px] whitespace-pre-wrap">→ 15/12/2025</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.448px] items-start left-[12px] top-[12.58px] w-[115.997px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[70.604px] left-[606.5px] top-0 w-[139.991px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[70.604px] left-[746.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">Cà Mau</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[70.604px] left-[926.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">Dược phẩm</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#dcfce7] border-[#7bf1a8] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[75.777px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#016630] text-[14px] top-[1.99px]">Vietrade</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[70.604px] left-[1106.48px] top-0 w-[129.228px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#d1d5dc] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[112.258px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#1e2939] text-[14px] top-[1.99px]">Chưa xác định</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[70.604px] left-[1235.71px] top-0 w-[136.253px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[70.604px] left-[1371.96px] top-0 w-[149.992px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#364153] text-[14px] top-[23.1px]">02/02/2026 11:42</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_663)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_663">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[31.999px] left-[14.54px] rounded-[8px] top-[19.29px] w-[68.462px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[43.97px] text-[#155dfc] text-[14px] text-center top-[4.01px]">Xem</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[70.604px] left-[1521.96px] top-0 w-[97.557px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.162px] border-solid h-[70.604px] left-0 top-[93.33px] w-[1619.512px]" data-name="Table Row">
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
    </div>
  );
}

function PrimitiveButton3() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[27.57px]" data-name="Primitive.button" />;
}

function TableCell22() {
  return (
    <div className="absolute h-[70.604px] left-0 top-0 w-[27.987px]" data-name="Table Cell">
      <PrimitiveButton3 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[70.604px] left-[27.99px] top-0 w-[48.533px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[23.3px]">3</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[255.988px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">Chương trình KH thân thiết T12/2025</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[70.604px] left-[76.52px] top-0 w-[279.983px]" data-name="Table Cell">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[226.005px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#1e2939] text-[14px] top-[-1.84px]">Highlands Coffee</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[70.604px] left-[356.5px] top-0 w-[249.999px]" data-name="Table Cell">
      <Paragraph6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">19/12/2025</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[86px] whitespace-pre-wrap">→ 31/01/2026</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.448px] items-start left-[12px] top-[12.58px] w-[115.997px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[70.604px] left-[606.5px] top-0 w-[139.991px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[70.604px] left-[746.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">Toàn quốc</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[70.604px] left-[926.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">Menu Highlands</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#dcfce7] border-[#7bf1a8] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[75.777px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#016630] text-[14px] top-[1.99px]">Vietrade</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[70.604px] left-[1106.48px] top-0 w-[129.228px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#d1d5dc] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[112.258px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#1e2939] text-[14px] top-[1.99px]">Chưa xác định</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[70.604px] left-[1235.71px] top-0 w-[136.253px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[70.604px] left-[1371.96px] top-0 w-[149.992px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#364153] text-[14px] top-[23.1px]">02/02/2026 11:42</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_663)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_663">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[31.999px] left-[14.54px] rounded-[8px] top-[19.29px] w-[68.462px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[43.97px] text-[#155dfc] text-[14px] text-center top-[4.01px]">Xem</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[70.604px] left-[1521.96px] top-0 w-[97.557px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.162px] border-solid h-[70.604px] left-0 top-[163.93px] w-[1619.512px]" data-name="Table Row">
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
    </div>
  );
}

function PrimitiveButton4() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[27.57px]" data-name="Primitive.button" />;
}

function TableCell33() {
  return (
    <div className="absolute h-[70.604px] left-0 top-0 w-[27.987px]" data-name="Table Cell">
      <PrimitiveButton4 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[70.604px] left-[27.99px] top-0 w-[48.533px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[23.3px]">4</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[45.448px] left-[12px] top-[12.58px] w-[255.988px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px] w-[242px] whitespace-pre-wrap">Nhân 2 – Nhân 4 tích điểm đơn hàng Unilever</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[70.604px] left-[76.52px] top-0 w-[279.983px]" data-name="Table Cell">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[226.005px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#1e2939] text-[14px] top-[-1.84px]">Bách Hóa Xanh</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[70.604px] left-[356.5px] top-0 w-[249.999px]" data-name="Table Cell">
      <Paragraph8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">02/12/2025</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[86px] whitespace-pre-wrap">→ 31/12/2025</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.448px] items-start left-[12px] top-[12.58px] w-[115.997px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[70.604px] left-[606.5px] top-0 w-[139.991px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[70.604px] left-[746.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">Toàn quốc</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[70.604px] left-[926.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#1e2939] text-[14px] top-[23.1px]">SP tại Bách Hoá Xanh</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#dcfce7] border-[#7bf1a8] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[75.777px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#016630] text-[14px] top-[1.99px]">Vietrade</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[70.604px] left-[1106.48px] top-0 w-[129.228px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#d1d5dc] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[112.258px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#1e2939] text-[14px] top-[1.99px]">Chưa xác định</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[70.604px] left-[1235.71px] top-0 w-[136.253px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[70.604px] left-[1371.96px] top-0 w-[149.992px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#364153] text-[14px] top-[23.1px]">02/02/2026 11:42</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_663)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_663">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[31.999px] left-[14.54px] rounded-[8px] top-[19.29px] w-[68.462px]" data-name="Button">
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[43.97px] text-[#155dfc] text-[14px] text-center top-[4.01px]">Xem</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[70.604px] left-[1521.96px] top-0 w-[97.557px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.162px] border-solid h-[70.604px] left-0 top-[234.54px] w-[1619.512px]" data-name="Table Row">
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
    </div>
  );
}

function PrimitiveButton5() {
  return <div className="absolute bg-[#f3f3f5] border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[15.99px] top-[27.57px]" data-name="Primitive.button" />;
}

function TableCell44() {
  return (
    <div className="absolute h-[70.023px] left-0 top-0 w-[27.987px]" data-name="Table Cell">
      <PrimitiveButton5 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[70.023px] left-[27.99px] top-0 w-[48.533px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[23.3px]">5</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[45.448px] left-[12px] top-[12.58px] w-[255.988px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px] w-[234px] whitespace-pre-wrap">{`Mừng Lazada 9 Tuổi, Paula's Choice Tặng Quà To Nè Bạn Ơi!`}</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[70.023px] left-[76.52px] top-0 w-[279.983px]" data-name="Table Cell">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[22.724px] left-[12px] top-[23.94px] w-[226.005px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#1e2939] text-[14px] top-[-1.84px]">Lazada</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[70.023px] left-[356.5px] top-0 w-[249.999px]" data-name="Table Cell">
      <Paragraph10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#101828] text-[14px] top-[-1.84px]">31/03/2021</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[22.724px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[86px] whitespace-pre-wrap">→ 31/03/2021</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.448px] items-start left-[12px] top-[12.58px] w-[115.997px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[70.023px] left-[606.5px] top-0 w-[139.991px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[70.023px] left-[746.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#99a1af] text-[14px] top-[23.3px]">N/A</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[70.023px] left-[926.49px] top-0 w-[179.994px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#99a1af] text-[14px] top-[23.3px]">N/A</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#f3e8ff] border-[#dab2ff] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[79.134px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#6e11b0] text-[14px] top-[1.99px]">Thu thập</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[70.023px] left-[1106.48px] top-0 w-[129.228px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#d1d5dc] border-[1.162px] border-solid h-[30.292px] left-[12px] overflow-clip rounded-[8px] top-[20.15px] w-[112.258px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[9.98px] text-[#1e2939] text-[14px] top-[1.99px]">Chưa xác định</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[70.023px] left-[1235.71px] top-0 w-[136.253px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[70.023px] left-[1371.96px] top-0 w-[149.992px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-[12px] text-[#364153] text-[14px] top-[23.1px]">01/02/2026 17:00</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_663)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_663">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[31.999px] left-[14.54px] rounded-[8px] top-[19.29px] w-[68.462px]" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[43.97px] text-[#155dfc] text-[14px] text-center top-[4.01px]">Xem</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[70.023px] left-[1521.96px] top-0 w-[97.557px]" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[70.023px] left-0 top-[305.14px] w-[1619.512px]" data-name="Table Row">
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[375.162px] left-0 top-[64.54px] w-[1619.512px]" data-name="Table Body">
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
    <div className="h-[439.703px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[457.127px] items-start overflow-clip pr-[-1247px] relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[457.127px] items-start left-[1.16px] overflow-clip top-[1.16px] w-[372.512px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[48.025px] relative shrink-0 w-[150.283px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1e2939] text-[16px] top-[-1.84px] w-[137px] whitespace-pre-wrap">Hiển thị 1 - 5 trong tổng số 5 bản ghi</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d={svgPaths.p2e604200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[35.992px] left-0 opacity-50 rounded-[8px] top-0 w-[39.985px]" data-name="Link">
      <Icon6 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-[39.985px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[8px] size-[35.992px] top-0" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[14.01px] text-[#0a0a0a] text-[14px] top-[4.84px]">1</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 size-[35.992px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d={svgPaths.p3cc1d1d0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[35.992px] left-0 opacity-50 rounded-[8px] top-0 w-[39.985px]" data-name="Link">
      <Icon7 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-[39.985px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-[123.947px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.993px] items-center relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-[190.249px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[0.018px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[81.167px] items-center justify-between left-[1.16px] pt-[1.162px] px-[15.99px] top-[458.29px] w-[372.512px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container25 />
      <Navigation />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[540.618px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Container24 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[712.009px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.99px] items-start pt-[23.994px] px-[23.994px] relative size-full">
        <Container3 />
        <Container6 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[956px] items-start relative shrink-0 w-full" data-name="pq">
      <Container />
      <Container2 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[956px] items-start left-0 top-[64px] w-[422.824px]" data-name="Body">
      <Pq />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[26.318px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#155dfc] h-[39.985px] relative rounded-[10px] shrink-0 w-[29.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.018px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] h-[56.011px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] tracking-[-0.45px] w-[130px] whitespace-pre-wrap">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[56.011px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container29 />
        <Heading1 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[39.966px] relative shrink-0 w-[42.925px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[21.73px] text-[#64748b] text-[14px] text-center top-[-2px] w-[33px] whitespace-pre-wrap">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[39.966px] relative shrink-0 w-[41.001px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20.51px] text-[#64748b] text-[14px] text-center top-[-2px] w-[29px] whitespace-pre-wrap">Nền tảng</p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[39.966px] relative shrink-0 w-[107.92px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.994px] items-center relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[56.011px] relative shrink-0 w-[330.821px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.999px] items-center relative size-full">
        <Container28 />
        <Navigation1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_121_656)" id="Icon">
          <path d={svgPaths.p31592d00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_121_656">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[35.992px] relative rounded-[10px] shrink-0 w-[28.006px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.162px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[63.997px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container27 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.159px] items-start left-0 pb-[1.162px] px-[31.999px] top-[63.89px] w-[422.824px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container26 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Header />
    </div>
  );
}