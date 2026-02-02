import svgPaths from "./svg-hqzmgc8qwf";

function Icon() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 18.6667">
            <path d={svgPaths.p20e4d6c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.33%_51.67%_20.8%_23.72%]" data-name="Vector">
        <div className="absolute inset-[-26.26%_-16.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5448 7.74477">
            <path d={svgPaths.p1ad6aa00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[10px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-white top-[-3px] tracking-[-0.75px]">TIN KHUYẾN MÃI</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#dbeafe] text-[16px] top-[-2px]">Hệ thống quản lý và giám sát chương trình khuyến mãi</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[388.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-gradient-to-r from-[#1447e6] h-[112px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#1c398e] w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Tổng số chương trình</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1447e6] text-[30px] top-[-3px]">12</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[60px] relative shrink-0 w-[133.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3e7fa800} id="Vector" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p108df500} id="Vector_2" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M13.3333 21.6667H16.6667" id="Vector_3" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M23.3333 21.6667H26.6667" id="Vector_4" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M13.3333 28.3333H16.6667" id="Vector_5" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M23.3333 28.3333H26.6667" id="Vector_6" stroke="var(--stroke-0, #8EC5FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Icon1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Đã đăng ký</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#008236] text-[30px] top-[-3px]">9</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[60px] relative shrink-0 w-[69.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[11.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[24px] left-0 text-[#008236] text-[16px] top-[-2px]">✓</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Chưa xác định</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ca3500] text-[30px] top-[-3px]">1</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[60px] relative shrink-0 w-[87.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[7.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#ca3500] text-[16px] top-[-2px]">?</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Nghi vấn</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#c10007] text-[30px] top-[-3px]">2</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[60px] relative shrink-0 w-[55.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#c10007] text-[16px] top-[-2px]">!</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[102px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Loại nguồn</p>
    </div>
  );
}

function PrimitiveSpan() {
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

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Trạng thái pháp lý</p>
    </div>
  );
}

function PrimitiveSpan1() {
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

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Từ ngày</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <Input />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Đến ngày</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[4] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Địa điểm</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.438px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Toàn quốc</p>
      </div>
    </div>
  );
}

function Icon4() {
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
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Doanh nghiệp</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px]">Nhập tên doanh nghiệp</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel5 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">Loại mặt hàng</p>
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

function Icon5() {
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
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel6 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[14px]">% Giảm giá: 0% - 100%</p>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#030213] h-[16px] left-0 rounded-[33554400px] top-0 w-[341.5px]" data-name="Text" />;
}

function Slider() {
  return <div className="absolute bg-white border border-[#030213] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-0" data-name="Slider" />;
}

function Slider1() {
  return <div className="absolute bg-white border border-[#030213] border-solid left-[325.5px] rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-0" data-name="Slider" />;
}

function PrimitiveSpan4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text3 />
      <Slider />
      <Slider1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-[4] content-stretch flex flex-col gap-[20px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel7 />
      <PrimitiveSpan4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[140px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[127.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[76px] text-[#0a0a0a] text-[14px] text-center top-[6px]">Reset bộ lọc</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[106.484px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[65px] text-[14px] text-center text-white top-[6px]">Tìm kiếm</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0fdf4] h-[36px] relative rounded-[8px] shrink-0 w-[127.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[76.5px] text-[#008236] text-[14px] text-center top-[6px]">Export Excel</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] h-[53px] items-start justify-end pt-[17px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function PromotionFilter() {
  return (
    <div className="bg-white h-[267px] relative rounded-[10px] shrink-0 w-full" data-name="PromotionFilter">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container19 />
        <Container28 />
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[11.75px]" data-name="Primitive.button" />;
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[24px]" data-name="TableHead">
      <PrimitiveButton4 />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[24px] top-0 w-[39.359px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">STT</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[63.36px] top-0 w-[315.625px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Tên chương trình khuyến mãi</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[378.98px] top-0 w-[217.141px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Công ty / Đơn vị</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[596.13px] top-0 w-[180px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Thời gian áp dụng</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[776.13px] top-0 w-[176.641px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Địa điểm</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[952.77px] top-0 w-[152.547px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Loại mặt hàng</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[1105.31px] top-0 w-[88px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">% Giảm giá</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[1193.31px] top-0 w-[140px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Loại nguồn</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[1333.31px] top-0 w-[140px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Trạng thái pháp lý</p>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="absolute h-[40px] left-[1473.31px] top-0 w-[100px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Nguồn</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[137.84px] size-[16px] top-[13.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableHead11() {
  return (
    <div className="absolute h-[40px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[7.75px]">Thời điểm thu thập</p>
      <Icon9 />
    </div>
  );
}

function TableHead12() {
  return (
    <div className="absolute h-[40px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#0a0a0a] text-[14px] text-center top-[7.75px]">Hành động</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#eff6ff] border-[rgba(0,0,0,0.1)] border-b border-solid h-[40px] left-0 top-0 w-[1822.422px]" data-name="TableRow">
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
      <TableHead10 />
      <TableHead11 />
      <TableHead12 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1822.422px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function PrimitiveButton5() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">1</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Siêu Sale Tết Nguyên Đán - Giảm giá sốc điện tử</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Công ty TNHH Điện Máy Xanh</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">15/01/2026 - 28/02/2026</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Toàn quốc</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Điện tử - Điện lạnh</p>
    </div>
  );
}

function PromotionTable1() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">50%</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable2() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon10 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable2 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">29/01/2026 08:30</p>
    </div>
  );
}

function Icon11() {
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

function Button3() {
  return (
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-0 w-[1822.422px]" data-name="TableRow">
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
      <TableCell11 />
      <TableCell12 />
    </div>
  );
}

function PrimitiveButton6() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton6 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">2</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Khuyến mãi thực phẩm tươi sống cuối tuần</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Siêu thị Co.opMart</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">01/02/2026 - 15/02/2026</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">TP. Hồ Chí Minh</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Thực phẩm - Đồ uống</p>
    </div>
  );
}

function PromotionTable3() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">30%</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable3 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable4() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon12 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable4 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">28/01/2026 14:20</p>
    </div>
  );
}

function Icon13() {
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
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon13 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button4 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[49px] w-[1822.422px]" data-name="TableRow">
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
    </div>
  );
}

function PrimitiveButton7() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton7 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">3</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Flash Sale thời trang 99% - Cực Hot</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Shop Online XYZ (chưa xác định)</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">20/01/2026 - 30/01/2026</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Online</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Thời trang</p>
    </div>
  );
}

function PromotionTable5() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.3px] rounded-[4px] top-[10.5px] w-[43.406px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">99%</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable5 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#ffedd4] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[122.781px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9f2d00] text-[12px]">Không chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffb86a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[67.219px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9f0712] text-[12px]">Nghi vấn</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffa2a2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable6() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon14 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable6 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">27/01/2026 10:15</p>
    </div>
  );
}

function Icon15() {
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
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button5 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[98px] w-[1822.422px]" data-name="TableRow">
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
    </div>
  );
}

function PrimitiveButton8() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton8 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">4</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Tuần lễ vàng mỹ phẩm cao cấp</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">{`Hasaki Beauty & Clinic`}</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">10/02/2026 - 20/02/2026</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Hà Nội, TP.HCM</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Mỹ phẩm</p>
    </div>
  );
}

function PromotionTable7() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.19px] rounded-[4px] top-[10.5px] w-[43.609px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">40%</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable7 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge6 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable8() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon16 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable8 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">26/01/2026 16:45</p>
    </div>
  );
}

function Icon17() {
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
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon17 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button6 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[147px] w-[1822.422px]" data-name="TableRow">
      <TableCell39 />
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
      <TableCell50 />
      <TableCell51 />
    </div>
  );
}

function PrimitiveButton9() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell52() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton9 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">5</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Giảm giá đồ gia dụng nhập khẩu</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">IKEA Việt Nam</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">05/02/2026 - 25/02/2026</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Hà Nội, TP.HCM, Đà Nẵng</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Đồ gia dụng</p>
    </div>
  );
}

function PromotionTable9() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">25%</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable9 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge8 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge9 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable10() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon18 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable10 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">25/01/2026 09:00</p>
    </div>
  );
}

function Icon19() {
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
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon19 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button7 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[196px] w-[1822.422px]" data-name="TableRow">
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
    </div>
  );
}

function PrimitiveButton10() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell65() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton10 />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">6</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Sale bất ngờ - Điện thoại giá rẻ</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Cửa hàng ABC (Facebook)</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">25/01/2026 - 31/01/2026</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Chưa xác định</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Điện tử - Điện lạnh</p>
    </div>
  );
}

function PromotionTable11() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.47px] rounded-[4px] top-[10.5px] w-[43.047px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">70%</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable11 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#ffedd4] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[122.781px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9f2d00] text-[12px]">Không chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffb86a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge10 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[95.141px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1e2939] text-[12px]">Chưa xác định</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge11 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable12() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon20 />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable12 />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">24/01/2026 20:30</p>
    </div>
  );
}

function Icon21() {
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
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon21 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button8 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[245px] w-[1822.422px]" data-name="TableRow">
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
    </div>
  );
}

function PrimitiveButton11() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell78() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton11 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">7</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Khuyến mãi đồ uống mùa lễ hội</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Vinamilk</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">01/02/2026 - 28/02/2026</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Toàn quốc</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Thực phẩm - Đồ uống</p>
    </div>
  );
}

function PromotionTable13() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">20%</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable13 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge12 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge13 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable14() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon22 />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable14 />
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">23/01/2026 11:00</p>
    </div>
  );
}

function Icon23() {
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

function Button9() {
  return (
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon23 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button9 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[294px] w-[1822.422px]" data-name="TableRow">
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
    </div>
  );
}

function PrimitiveButton12() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell91() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton12 />
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">8</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Mua 1 tặng 1 - Thời trang nam xuân hè</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Coolmate</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">15/02/2026 - 15/03/2026</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Online + Cửa hàng</p>
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Thời trang</p>
    </div>
  );
}

function PromotionTable15() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">50%</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable15 />
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge14 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge15 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable16() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon24 />
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable16 />
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">22/01/2026 15:20</p>
    </div>
  );
}

function Icon25() {
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

function Button10() {
  return (
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon25 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button10 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[343px] w-[1822.422px]" data-name="TableRow">
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
    </div>
  );
}

function PrimitiveButton13() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell104() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton13 />
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute h-[49px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">9</p>
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute h-[49px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Giảm sốc 90% - Nghi vấn lừa đảo</p>
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute h-[49px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Shop không rõ nguồn gốc</p>
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute h-[49px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">30/01/2026 - 05/02/2026</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute h-[49px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Online</p>
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute h-[49px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Khác</p>
    </div>
  );
}

function PromotionTable17() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.31px] rounded-[4px] top-[10.5px] w-[43.359px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">90%</p>
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute h-[49px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable17 />
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-[#ffedd4] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[122.781px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9f2d00] text-[12px]">Không chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffb86a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute h-[49px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge16 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[67.219px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9f0712] text-[12px]">Nghi vấn</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffa2a2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute h-[49px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge17 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable18() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon26 />
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute h-[49px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable18 />
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute h-[49px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">21/01/2026 18:50</p>
    </div>
  );
}

function Icon27() {
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

function Button11() {
  return (
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon27 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute h-[49px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button11 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[392px] w-[1822.422px]" data-name="TableRow">
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
    </div>
  );
}

function PrimitiveButton14() {
  return <div className="absolute bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Primitive.button" />;
}

function TableCell117() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[24px]" data-name="TableCell">
      <PrimitiveButton14 />
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[48.5px] left-[24px] top-0 w-[39.359px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">10</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute h-[48.5px] left-[63.36px] top-0 w-[315.625px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Khuyến mãi điện lạnh tiết kiệm năng lượng</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute h-[48.5px] left-[378.98px] top-0 w-[217.141px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Samsung Electronics Việt Nam</p>
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute h-[48.5px] left-[596.13px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px] w-[156px] whitespace-pre-wrap">20/02/2026 - 20/03/2026</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute h-[48.5px] left-[776.13px] top-0 w-[176.641px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Toàn quốc</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute h-[48.5px] left-[952.77px] top-0 w-[152.547px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">Điện tử - Điện lạnh</p>
    </div>
  );
}

function PromotionTable19() {
  return (
    <div className="absolute bg-[#fef2f2] h-[28px] left-[22.34px] rounded-[4px] top-[10.5px] w-[43.313px]" data-name="PromotionTable">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[22px] text-[#c10007] text-[14px] text-center top-[2px] w-[28px] whitespace-pre-wrap">35%</p>
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute h-[48.5px] left-[1105.31px] top-0 w-[88px]" data-name="TableCell">
      <PromotionTable19 />
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute h-[48.5px] left-[1193.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge18 />
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute h-[48.5px] left-[1333.31px] top-0 w-[140px]" data-name="TableCell">
      <Badge19 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PromotionTable20() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[14px]" data-name="PromotionTable">
      <Icon28 />
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute h-[48.5px] left-[1473.31px] top-0 w-[100px]" data-name="TableCell">
      <PromotionTable20 />
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute h-[48.5px] left-[1573.31px] top-0 w-[161.844px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[8px] text-[#0a0a0a] text-[14px] top-[12.5px]">20/01/2026 13:40</p>
    </div>
  );
}

function Icon29() {
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

function Button12() {
  return (
    <div className="absolute h-[32px] left-[9.38px] rounded-[8px] top-[8.5px] w-[68.516px]" data-name="Button">
      <Icon29 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[44.5px] text-[#155dfc] text-[14px] text-center top-[4px]">Xem</p>
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute h-[48.5px] left-[1735.16px] top-0 w-[87.266px]" data-name="TableCell">
      <Button12 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[48.5px] left-0 top-[441px] w-[1822.422px]" data-name="TableRow">
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
      <TableCell120 />
      <TableCell121 />
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[489.5px] left-0 top-[40px] w-[1822.422px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[529.5px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col h-[544.5px] items-start overflow-clip pl-[-336px] pr-[-0.422px] relative shrink-0 w-full" data-name="Table">
      <Table1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[544.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0 w-[210.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-2px] w-[196px] whitespace-pre-wrap">Hiển thị 1 - 10 trong tổng số 12 bản ghi</p>
      </div>
    </div>
  );
}

function Icon30() {
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
      <Icon30 />
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

function PaginationLink2() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-0" data-name="PaginationLink">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[14.11px] text-[#0a0a0a] text-[14px] top-[6px]">2</p>
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="PaginationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PaginationLink2 />
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

function Icon31() {
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

function PaginationLink3() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[74.25px]" data-name="PaginationLink">
      <PaginationNext />
      <Icon31 />
    </div>
  );
}

function PaginationItem3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[74.25px]" data-name="PaginationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PaginationLink3 />
      </div>
    </div>
  );
}

function PaginationContent() {
  return (
    <div className="h-[36px] relative shrink-0 w-[256.266px]" data-name="PaginationContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <PaginationItem />
        <PaginationItem1 />
        <PaginationItem2 />
        <PaginationItem3 />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1243.281px]" data-name="Pagination">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[0.016px] relative size-full">
        <PaginationContent />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[16px] relative size-full">
          <Container31 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function PromotionTable() {
  return (
    <div className="bg-white h-[619.5px] relative rounded-[10px] shrink-0 w-full" data-name="PromotionTable">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[1100.5px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[24px] relative size-full">
        <Container3 />
        <PromotionFilter />
        <PromotionTable />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1212.5px] items-start left-0 top-0 w-[1536px]" data-name="App" style={{ backgroundImage: "linear-gradient(141.713deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(239, 246, 255) 100%)" }}>
      <Header />
      <MainContent />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[904px] left-0 top-[309px] w-[1551px]" data-name="Primitive.div" />;
}

function PrimitiveH() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[447px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#1c398e] text-[24px] whitespace-pre-wrap">Chi tiết Tin Khuyến Mãi</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[24px] top-[24px] w-[447px]" data-name="DialogHeader">
      <PrimitiveH />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1c398e] text-[18px] top-[-1px] w-[144px] whitespace-pre-wrap">Thông tin khuyến mãi</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Tên chương trình:</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px] w-[154px] whitespace-pre-wrap">Siêu Sale Tết Nguyên Đán - Giảm giá sốc điện tử</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Paragraph9 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Công ty / Đơn vị:</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px] w-[144px] whitespace-pre-wrap">Công ty TNHH Điện Máy Xanh</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Paragraph10 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Từ ngày:</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px]">15/01/2026</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[4px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Label2 />
      <Paragraph11 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Đến ngày:</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px]">28/02/2026</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[4px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Label3 />
      <Paragraph12 />
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Địa điểm:</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px]">Toàn quốc</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Paragraph13 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Loại mặt hàng:</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px]">Điện tử - Điện lạnh</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Paragraph14 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[169.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">% Giảm giá:</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[44px] left-0 rounded-[10px] top-[24px] w-[72.359px]" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-[16px] text-[#c10007] text-[20px] top-[5px] w-[41px] whitespace-pre-wrap">50%</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container43 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[440px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
      <Container37 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#eff6ff] h-[554px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading1 />
        <Container34 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px] w-[155px] whitespace-pre-wrap">{`Trạng thái & Độ tin cậy`}</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[169.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Loại nguồn:</p>
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-[#dcfce7] h-[22px] left-0 rounded-[8px] top-[30px] w-[85.578px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#016630] text-[12px]">Chính thống</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Badge20 />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[169.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Trạng thái pháp lý:</p>
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-0 rounded-[8px] top-[30px] w-[79.672px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#193cb8] text-[12px]">Đã đăng ký</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Badge21 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Thời điểm thu thập:</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px]">29/01/2026 08:30</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Label9 />
      <Paragraph15 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Mã số:</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1px]">PM-2026-001</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Label10 />
      <Paragraph16 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f9fafb] h-[346px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading2 />
        <Container45 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[24px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container33 />
      <Container44 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px] w-[142px] whitespace-pre-wrap">Nội dung khuyến mãi</p>
    </div>
  );
}

function HighlightedText() {
  return (
    <div className="absolute bg-[#fff085] content-stretch flex h-[21px] items-start left-[132.31px] px-[4px] rounded-[4px] top-[2px] w-[36.891px]" data-name="Highlighted Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-black">Sale</p>
    </div>
  );
}

function HighlightedText1() {
  return (
    <div className="absolute bg-[#fff085] content-stretch flex h-[21px] items-start left-0 px-[4px] rounded-[4px] top-[54px] w-[70.594px]" data-name="Highlighted Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-black">Giảm giá</p>
    </div>
  );
}

function HighlightedText2() {
  return (
    <div className="absolute bg-[#fff085] h-[47px] left-0 rounded-[4px] top-[236px] w-[132.172px]" data-name="Highlighted Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-black top-[-4px] w-[133px] whitespace-pre-wrap">khuyến mãi</p>
    </div>
  );
}

function HighlightedText3() {
  return (
    <div className="absolute bg-[#fff085] content-stretch flex h-[21px] items-start left-[10.78px] px-[4px] rounded-[4px] top-[288px] w-[70.594px]" data-name="Highlighted Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-black">Giảm giá</p>
    </div>
  );
}

function HighlightedText4() {
  return (
    <div className="absolute bg-[#fff085] content-stretch flex h-[21px] items-start left-[103.02px] px-[4px] rounded-[4px] top-[288px] w-[21.094px]" data-name="Highlighted Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-black">%</p>
    </div>
  );
}

function HighlightedText5() {
  return (
    <div className="absolute bg-[#fff085] content-stretch flex h-[21px] items-start left-[10.78px] px-[4px] rounded-[4px] top-[392px] w-[36.891px]" data-name="Highlighted Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-black">Sale</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[988px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[-2px]">Chương trình Siêu</p>
      <HighlightedText />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[24px]">Tết Nguyên Đán -</p>
      <HighlightedText1 />
      <div className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[50px] w-[162px] whitespace-pre-wrap">
        <p className="mb-0">sốc điện tử được tổ chức bởi Công ty TNHH Điện Máy Xanh áp dụng từ 15/01/2026 đến 28/02/2026.</p>
        <p className="mb-0">&nbsp;</p>
        <p>🎯 Ưu đãi</p>
      </div>
      <HighlightedText2 />
      <div className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[258px] w-[34px] whitespace-pre-wrap">
        <p className="mb-0">:</p>
        <p>-</p>
      </div>
      <HighlightedText3 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-[81.38px] text-[#364153] text-[16px] top-[284px]">50</p>
      <HighlightedText4 />
      <div className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[284px] w-[157px] whitespace-pre-wrap">
        <p className="mb-0">cho tất cả sản phẩm thuộc nhóm Điện tử - Điện lạnh</p>
        <p>-</p>
      </div>
      <HighlightedText5 />
      <div className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[388px] w-[234px] whitespace-pre-wrap">
        <p className="mb-0">đặc biệt cuối tuần với nhiều ưu đãi hấp dẫn</p>
        <p className="mb-0">- Tặng voucher cho đơn hàng tiếp theo</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">📍 Khu vực áp dụng: Toàn quốc</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">🛒 Điều kiện:</p>
        <p className="mb-0">- Áp dụng cho tất cả khách hàng</p>
        <p className="mb-0">- Không giới hạn số lượng sản phẩm</p>
        <p className="mb-0">- Không áp dụng đồng thời với các chương trình khác</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">📞 Liên hệ: Hotline 1900 xxxx</p>
        <p>🌐 Website: https://example.com/promotion-1</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[1102px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading3 />
        <Container52 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#155dfc] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon32 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[83.5px] text-[14px] text-center text-white top-[6px]">Mở nguồn gốc</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon33 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[97px] text-[#0a0a0a] text-[14px] text-center top-[6px]">Quay lại danh sách</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start pr-[-111.875px] relative shrink-0 w-full" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container50() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[16px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container51 />
      <Container53 />
    </div>
  );
}

function PromotionDetailModal() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[1154px] left-[24px] top-[88px] w-[447px]" data-name="PromotionDetailModal">
      <Container32 />
      <Container50 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[463px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon34 />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[813.594px] left-[519.5px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[354.2px] w-[512px]" data-name="Primitive.div">
      <DialogHeader />
      <PromotionDetailModal />
      <PrimitiveButton15 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <App />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}