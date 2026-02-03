import svgPaths from "./svg-8qpj7rm2ae";

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Trung tâm Khuyến mãi</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Quản lý tin khuyến mãi</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] px-[32px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[85px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.938px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Bộ lọc tìm kiếm</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[60.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Reset</p>
      </div>
    </div>
  );
}

function Button1() {
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

function Button2() {
  return (
    <div className="bg-[#f0fdf4] h-[32px] relative rounded-[8px] shrink-0 w-[67.703px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008236] text-[14px] text-center">Export</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[76.859px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Thu gọn</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[311.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
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
    <div className="h-[57px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Heading2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Từ khóa</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px]">Tìm theo tên, công ty, mã...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <TextInput />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Thời gian áp dụng</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32.438px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] text-center">Tất cả</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white col-[1] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white col-[2] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="bg-white col-[3] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <DatePicker />
      <DatePicker1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6ff] col-[1] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <PrimitiveLabel1 />
        <Container10 />
      </div>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Thời điểm thu thập</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32.438px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] text-center">Tất cả</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white col-[1] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function DatePicker2() {
  return (
    <div className="bg-white col-[2] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DatePicker3() {
  return (
    <div className="bg-white col-[3] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton1 />
      <DatePicker2 />
      <DatePicker3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#faf5ff] col-[2] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <PrimitiveLabel2 />
        <Container12 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[88px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[86.36px] top-[2px] w-[70.781px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#e7000b] text-[12px]">(Quan trọng)</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[-2px]">Tính pháp lý</p>
      <Text />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.844px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Tất cả</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan2 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Nguồn dữ liệu</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.844px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Tất cả</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan3 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[62px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[276px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
          <Container7 />
          <Container8 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[335px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[14px]" data-name="Primitive.button" />;
}

function HeaderCell() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[28px]" data-name="Header Cell">
      <PrimitiveButton4 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[28px] p-[12px] top-0 w-[48.547px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">STT</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[76.55px] p-[12px] top-0 w-[418.984px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Tên chương trình</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[495.53px] p-[12px] top-0 w-[522.438px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Công ty / Đơn vị</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1017.97px] p-[12px] top-0 w-[144.156px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Thời gian áp dụng</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1162.13px] p-[12px] top-0 w-[111.734px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Địa điểm</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1273.86px] p-[12px] top-0 w-[159.813px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Loại mặt hàng</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1433.67px] p-[12px] top-0 w-[128.953px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Nguồn</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1562.63px] p-[12px] top-0 w-[135.984px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] whitespace-pre-wrap">Pháp lý</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[146.55px] size-[16px] top-[15.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute h-[44.5px] left-[1698.61px] top-0 w-[174.547px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#0a0a0a] text-[14px] top-[10px]">Thời điểm thu thập</p>
      <Icon4 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute content-stretch flex h-[44.5px] items-start left-[1873.16px] p-[12px] top-0 w-[97.578px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Hành động</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#eff6ff] border-[rgba(0,0,0,0.1)] border-b border-solid h-[44.5px] left-0 top-0 w-[1970.734px]" data-name="Table Row">
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
    <div className="absolute h-[44.5px] left-0 top-0 w-[1970.734px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function PrimitiveButton5() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[24.5px]" data-name="Primitive.button" />;
}

function TableCell() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[28px]" data-name="Table Cell">
      <PrimitiveButton5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[65px] left-[28px] top-0 w-[48.547px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[20.5px]">1</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[394.984px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Chương trình chăm sóc khách hàng thường xuyên lâu năm</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[65px] left-[76.55px] top-0 w-[418.984px]" data-name="Table Cell">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[498.438px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">MOBIFONE NGHỆ AN - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[65px] left-[495.53px] top-0 w-[522.438px]" data-name="Table Cell">
      <Paragraph2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">01/01/2026</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[86px] whitespace-pre-wrap">→ 31/12/2026</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[12px] top-[12.5px] w-[120.156px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[65px] left-[1017.97px] top-0 w-[144.156px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[87.734px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Tỉnh Nghệ An</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[65px] left-[1162.13px] top-0 w-[111.734px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[24.969px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#99a1af] text-[14px]">N/A</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[65px] left-[1273.86px] top-0 w-[159.813px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#dbeafe] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[104.953px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#193cb8] text-[14px]">Dịch vụ công</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[65px] left-[1433.67px] top-0 w-[128.953px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[111.984px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[65px] left-[1562.63px] top-0 w-[135.984px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[110.578px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">02/02/2026 14:04</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[65px] left-[1698.61px] top-0 w-[174.547px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[32px] left-[14.53px] rounded-[8px] top-[16.5px] w-[68.516px]" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[44px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[65px] left-[1873.16px] top-0 w-[97.578px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[65px] left-0 top-0 w-[1970.734px]" data-name="Table Row">
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

function PrimitiveButton6() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[24.5px]" data-name="Primitive.button" />;
}

function TableCell11() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[28px]" data-name="Table Cell">
      <PrimitiveButton6 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[65px] left-[28px] top-0 w-[48.547px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[20.5px]">2</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[394.984px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Khuyến mại Xuân 2026</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[65px] left-[76.55px] top-0 w-[418.984px]" data-name="Table Cell">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[498.438px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1e2939] text-[14px] whitespace-pre-wrap">Imexpharm CN Cửu Long 5</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[65px] left-[495.53px] top-0 w-[522.438px]" data-name="Table Cell">
      <Paragraph4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">03/12/2025</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[86px] whitespace-pre-wrap">→ 15/12/2025</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[12px] top-[12.5px] w-[120.156px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[65px] left-[1017.97px] top-0 w-[144.156px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[48.281px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Cà Mau</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[65px] left-[1162.13px] top-0 w-[111.734px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[74.078px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Dược phẩm</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[65px] left-[1273.86px] top-0 w-[159.813px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#dcfce7] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[75.5px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#016630] text-[14px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[65px] left-[1433.67px] top-0 w-[128.953px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[111.984px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[65px] left-[1562.63px] top-0 w-[135.984px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[108.141px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[65px] left-[1698.61px] top-0 w-[174.547px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[32px] left-[14.53px] rounded-[8px] top-[16.5px] w-[68.516px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[44px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[65px] left-[1873.16px] top-0 w-[97.578px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[65px] left-0 top-[65px] w-[1970.734px]" data-name="Table Row">
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

function PrimitiveButton7() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[24.5px]" data-name="Primitive.button" />;
}

function TableCell22() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[28px]" data-name="Table Cell">
      <PrimitiveButton7 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[65px] left-[28px] top-0 w-[48.547px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[20.5px]">3</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[394.984px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Chương trình KH thân thiết T12/2025</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[65px] left-[76.55px] top-0 w-[418.984px]" data-name="Table Cell">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[498.438px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1e2939] text-[14px] whitespace-pre-wrap">Highlands Coffee</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[65px] left-[495.53px] top-0 w-[522.438px]" data-name="Table Cell">
      <Paragraph6 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">19/12/2025</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[86px] whitespace-pre-wrap">→ 31/01/2026</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[12px] top-[12.5px] w-[120.156px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[65px] left-[1017.97px] top-0 w-[144.156px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[65.438px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Toàn quốc</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[65px] left-[1162.13px] top-0 w-[111.734px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[104.719px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Menu Highlands</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[65px] left-[1273.86px] top-0 w-[159.813px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#dcfce7] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[75.5px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#016630] text-[14px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[65px] left-[1433.67px] top-0 w-[128.953px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[111.984px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[65px] left-[1562.63px] top-0 w-[135.984px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[108.141px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[65px] left-[1698.61px] top-0 w-[174.547px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[32px] left-[14.53px] rounded-[8px] top-[16.5px] w-[68.516px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[44px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[65px] left-[1873.16px] top-0 w-[97.578px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[65px] left-0 top-[130px] w-[1970.734px]" data-name="Table Row">
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

function PrimitiveButton8() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[24.5px]" data-name="Primitive.button" />;
}

function TableCell33() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[28px]" data-name="Table Cell">
      <PrimitiveButton8 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[65px] left-[28px] top-0 w-[48.547px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[20.5px]">4</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[394.984px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Nhân 2 – Nhân 4 tích điểm đơn hàng Unilever</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[65px] left-[76.55px] top-0 w-[418.984px]" data-name="Table Cell">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[498.438px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1e2939] text-[14px] whitespace-pre-wrap">Bách Hóa Xanh</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[65px] left-[495.53px] top-0 w-[522.438px]" data-name="Table Cell">
      <Paragraph8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">02/12/2025</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[86px] whitespace-pre-wrap">→ 31/12/2025</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[12px] top-[12.5px] w-[120.156px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[65px] left-[1017.97px] top-0 w-[144.156px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[65.438px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Toàn quốc</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[65px] left-[1162.13px] top-0 w-[111.734px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[135.813px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">SP tại Bách Hoá Xanh</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[65px] left-[1273.86px] top-0 w-[159.813px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#dcfce7] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[75.5px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#016630] text-[14px]">Vietrade</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[65px] left-[1433.67px] top-0 w-[128.953px]" data-name="Table Cell">
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[111.984px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[65px] left-[1562.63px] top-0 w-[135.984px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[108.141px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">02/02/2026 11:42</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[65px] left-[1698.61px] top-0 w-[174.547px]" data-name="Table Cell">
      <Text20 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[32px] left-[14.53px] rounded-[8px] top-[16.5px] w-[68.516px]" data-name="Button">
      <Icon8 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[44px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[65px] left-[1873.16px] top-0 w-[97.578px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[65px] left-0 top-[195px] w-[1970.734px]" data-name="Table Row">
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

function PrimitiveButton9() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[12px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[24.5px]" data-name="Primitive.button" />;
}

function TableCell44() {
  return (
    <div className="absolute h-[64.5px] left-0 top-0 w-[28px]" data-name="Table Cell">
      <PrimitiveButton9 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[64.5px] left-[28px] top-0 w-[48.547px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[#1e2939] text-[14px] top-[20.5px]">5</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[394.984px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">{`Mừng Lazada 9 Tuổi, Paula's Choice Tặng Quà To Nè Bạn Ơi!`}</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[64.5px] left-[76.55px] top-0 w-[418.984px]" data-name="Table Cell">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[22.5px] w-[498.438px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1e2939] text-[14px] whitespace-pre-wrap">Lazada</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[64.5px] left-[495.53px] top-0 w-[522.438px]" data-name="Table Cell">
      <Paragraph10 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">31/03/2021</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[86px] whitespace-pre-wrap">→ 31/03/2021</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[12px] top-[12.5px] w-[120.156px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[64.5px] left-[1017.97px] top-0 w-[144.156px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[24.969px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#99a1af] text-[14px]">N/A</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[64.5px] left-[1162.13px] top-0 w-[111.734px]" data-name="Table Cell">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[24.969px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#99a1af] text-[14px]">N/A</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[64.5px] left-[1273.86px] top-0 w-[159.813px]" data-name="Table Cell">
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[78.844px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6e11b0] text-[14px]">Thu thập</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dab2ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[64.5px] left-[1433.67px] top-0 w-[128.953px]" data-name="Table Cell">
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[30px] left-[12px] rounded-[8px] top-[17.5px] w-[111.984px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e2939] text-[14px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[64.5px] left-[1562.63px] top-0 w-[135.984px]" data-name="Table Cell">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[12px] top-[22.5px] w-[107.578px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">01/02/2026 17:00</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[64.5px] left-[1698.61px] top-0 w-[174.547px]" data-name="Table Cell">
      <Text25 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
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
    <div className="absolute h-[32px] left-[14.53px] rounded-[8px] top-[16.5px] w-[68.516px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[44px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[64.5px] left-[1873.16px] top-0 w-[97.578px]" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[64.5px] left-0 top-[260px] w-[1970.734px]" data-name="Table Row">
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
    <div className="absolute h-[324.5px] left-0 top-[44.5px] w-[1970.734px]" data-name="Table Body">
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
    <div className="h-[369px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[384px] items-start overflow-clip pl-[-342px] pr-[-14.734px] relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[384px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[48px] relative shrink-0 w-[229.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1e2939] text-[16px] top-[-2px] w-[210px] whitespace-pre-wrap">Hiển thị 1 - 5 trong tổng số 5 bản ghi</p>
      </div>
    </div>
  );
}

function Icon10() {
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

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[32px] top-[8px] w-[54.016px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Previous</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[36px] left-0 opacity-50 rounded-[8px] top-0 w-[98.016px]" data-name="Link">
      <Icon10 />
      <Text26 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[8px] size-[36px] top-0" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[14.17px] text-[#0a0a0a] text-[14px] top-[5px]">1</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[8px] w-[30.25px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Next</p>
    </div>
  );
}

function Icon11() {
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

function Link2() {
  return (
    <div className="absolute h-[36px] left-0 opacity-50 rounded-[8px] top-0 w-[74.25px]" data-name="Link">
      <Text27 />
      <Icon11 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[74.25px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[36px] relative shrink-0 w-[216.266px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1352.063px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[0.016px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[16px] relative size-full">
          <Container35 />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[467px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container17 />
        <Container34 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[866px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container3 />
        <Container16 />
      </div>
    </div>
  );
}

function PY() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[951px] items-start left-0 top-0 w-[1664px]" data-name="pY">
      <Container />
      <Container2 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px] tracking-[-0.45px]">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container39 />
        <Heading1 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.141px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-[433.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container38 />
        <Navigation1 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button11 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[32px] top-[-64px] w-[1664px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container36 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <PY />
      <Header />
    </div>
  );
}