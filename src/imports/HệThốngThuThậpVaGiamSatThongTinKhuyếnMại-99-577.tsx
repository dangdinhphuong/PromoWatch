import svgPaths from "./svg-00cmp2dha9";

function PrimitiveSpan() {
  return (
    <div className="h-[21px] relative shrink-0 w-[42px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">7 ngày</p>
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
    <div className="bg-white h-[36px] relative rounded-[10px] shrink-0 w-[92px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[99.094px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Tất cả nền tảng</p>
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
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[10px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-center left-[1239px] top-[126.5px] w-[284px]" data-name="Container">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p217cc880} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[58px] text-[#666] text-[14px] text-center top-0">Quay lại trang chủ</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[-8px] px-[8px] rounded-[10px] top-0 w-[156.453px]" data-name="Button">
      <Icon2 />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[84px] left-0 top-[44px] w-[608px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-0 tracking-[-0.7px] w-[615px] whitespace-pre-wrap">Kiểm soát hành vi vi phạm trên TMĐT / nền tảng số</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.5px] left-0 top-[140px] w-[621px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#666] text-[15px] top-0">Trung tâm điều hành giám sát – phát hiện và xử lý vi phạm tập trung</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[162.5px] left-0 top-0 w-[621px]" data-name="Container">
      <Button />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[162.5px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[188.5px] items-start left-0 pb-px pt-[24px] px-[45px] top-0 w-[1613px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px] tracking-[0.325px] uppercase">Tổng số gian hàng giám sát</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[89.391px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a1a1a] text-[36px] top-[-3px]">8,542</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[101.39px] size-[20px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p81c900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Icon3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Trên 5 nền tảng chính</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] relative size-full">
        <Paragraph1 />
        <Container7 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px] tracking-[0.325px] uppercase">Vi phạm phát hiện</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[59.281px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#e7000b] text-[36px] top-[-3px]">735</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[71.28px] size-[20px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p51e37f1} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Icon4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">↑ 18% so với tuần trước</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[2] relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] relative size-full">
        <Paragraph4 />
        <Container9 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px] tracking-[0.325px] uppercase">Cảnh báo rủi ro đang mở</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[40.078px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[36px] top-[-3px]">89</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[52.08px] size-[20px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p337986c0} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Icon5 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Đang theo dõi</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-[3] relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f54900] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] relative size-full">
        <Paragraph7 />
        <Container11 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px] tracking-[0.325px] uppercase">Vụ việc đã xử lý</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[55.219px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#00a63e] text-[36px] top-[-3px]">412</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[67.22px] size-[20px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_90_600)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_90_600">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Icon6 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Tỷ lệ xử lý: 56%</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-[4] relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] relative size-full">
        <Paragraph10 />
        <Container13 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[87px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[152px] items-start left-0 pb-px pt-[32px] px-[38.5px] top-[188.5px] w-[1613px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-2px]">Xu hướng vi phạm theo thời gian</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">18 ngày qua - tất cả loại vi phạm</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[271.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[694.656px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Surface() {
  return <div className="h-[340px] shrink-0 w-full" data-name="Surface" />;
}

function LineChart() {
  return (
    <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="LineChart">
      <Surface />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[464.5px] items-start left-0 pb-px pt-[25px] px-[25px] rounded-[4px] top-0 w-[1016px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container16 />
      <LineChart />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-2px]">Phân loại vi phạm</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[127.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Hàng giả, hàng nhái</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#e7000b] text-[14px] top-[-1px]">312</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Text1 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#e7000b] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container23() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[247.094px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pt-[8px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[185.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Cạnh tranh không lành mạnh</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#f54900] text-[14px] top-[-1px]">189</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Text2 />
    </div>
  );
}

function Container28() {
  return <div className="bg-[#f54900] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container27() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[315.25px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f54900] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pt-[8px] relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[137.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Quảng cáo sai sự thật</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#d08700] text-[14px] top-[-1px]">156</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Text3 />
    </div>
  );
}

function Container32() {
  return <div className="bg-[#d08700] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container31() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[336.547px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pt-[8px] relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[112.578px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">{`Lừa đảo & dữ liệu`}</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#9810fa] text-[14px] top-[-1px]">78</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Text4 />
    </div>
  );
}

function Container36() {
  return <div className="bg-[#9810fa] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container35() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[379.141px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pt-[8px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[224px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container25 />
      <Container29 />
      <Container33 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[314px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading2 />
        <Container20 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Cảnh báo nổi bật</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[42.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21.125px] left-0 text-[#666] text-[13px] top-[-1px] w-[436px] whitespace-pre-wrap">Phát hiện 15 gian hàng nghi vấn bán hàng giả trên Shopee, tập trung tại TP. HCM. Đề xuất thanh tra khẩn cấp và phối hợp với nền tảng để xử lý.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#fef2f2] h-[111.25px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-l-4 border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[20px] pt-[20px] relative size-full">
        <Heading3 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[464.5px] items-start left-[1040px] top-0 w-[496px]" data-name="Container">
      <Container19 />
      <Container37 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[464.5px] left-[38.5px] top-[372.5px] w-[1536px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-2px]">Cảnh báo đang hiệu lực</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Các vi phạm nghiêm trọng cần xử lý ưu tiên</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[91.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[20px] px-[24px] relative size-full">
        <Heading4 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container43() {
  return <div className="bg-[#e7000b] h-[48px] rounded-[33554400px] shrink-0 w-[4px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">FashionHub Official</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-1px]">Shopee</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40.5px] items-start left-0 top-[3.5px] w-[346.5px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Loại vi phạm</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Hàng giả, hàng nhái</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[42.5px] items-start left-[370.5px] top-[2.5px] w-[346.5px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Mức độ rủi ro</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[92.781px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#c10007] text-[12px] top-[3px]">Cao - 92/100</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[47.5px] left-[741px] top-0 w-[223px]" data-name="Container">
      <Paragraph24 />
      <Text5 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Trạng thái</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#fef9c2] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[98.563px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#a65f00] text-[12px] top-[3px]">Đang điều tra</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[47.5px] left-[988px] top-0 w-[223px]" data-name="Container">
      <Paragraph25 />
      <Text6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[32px] left-[1348.81px] rounded-[8px] top-[7.75px] w-[109.188px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[5.25px]">Xem chi tiết →</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[47.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
        <Button1 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-[16px] px-[24px] top-0 w-[1534px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Container51() {
  return <div className="bg-[#f54900] h-[48px] rounded-[33554400px] shrink-0 w-[4px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">BeautyStore88</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-1px]">Lazada</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40.5px] items-start left-0 top-[3.5px] w-[346.5px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Loại vi phạm</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Quảng cáo sai sự thật</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[42.5px] items-start left-[370.5px] top-[2.5px] w-[346.5px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Mức độ rủi ro</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#ffedd4] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[85.5px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#ca3500] text-[12px] top-[3px]">TB - 78/100</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[47.5px] left-[741px] top-0 w-[223px]" data-name="Container">
      <Paragraph30 />
      <Text7 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Trạng thái</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#dbeafe] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[102.094px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#1447e6] text-[12px] top-[3px]">Đang theo dõi</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[47.5px] left-[988px] top-0 w-[223px]" data-name="Container">
      <Paragraph31 />
      <Text8 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[32px] left-[1348.81px] rounded-[8px] top-[7.75px] w-[109.188px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[5.25px]">Xem chi tiết →</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] h-[47.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
        <Button2 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-[16px] px-[24px] top-[81px] w-[1534px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function Container58() {
  return <div className="bg-[#e7000b] h-[48px] rounded-[33554400px] shrink-0 w-[4px]" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">SuperFood Market</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-1px]">Facebook</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40.5px] items-start left-0 top-[3.5px] w-[346.5px]" data-name="Container">
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Loại vi phạm</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-1px]">Hàng cấm lưu hành</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[42.5px] items-start left-[370.5px] top-[2.5px] w-[346.5px]" data-name="Container">
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Mức độ rủi ro</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[92.781px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#c10007] text-[12px] top-[3px]">Cao - 95/100</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[47.5px] left-[741px] top-0 w-[223px]" data-name="Container">
      <Paragraph36 />
      <Text9 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[223px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-1px]">Trạng thái</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[26px] left-0 rounded-[4px] top-[21.5px] w-[128.188px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#8200db] text-[12px] top-[3px]">Đã chuyển công an</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[47.5px] left-[988px] top-0 w-[223px]" data-name="Container">
      <Paragraph37 />
      <Text10 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[32px] left-[1348.81px] rounded-[8px] top-[7.75px] w-[109.188px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[5.25px]">Xem chi tiết →</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] h-[47.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container60 />
        <Container61 />
        <Container62 />
        <Container63 />
        <Button3 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[48px] items-center left-[24px] top-[178px] w-[1486px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container49 />
      <Container57 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[335.5px] items-start left-[38.5px] p-px rounded-[4px] top-[869px] w-[1536px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-2px]">Các chức năng</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3px]">📋</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">Danh mục vi phạm</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-2px] w-[231px] whitespace-pre-wrap">Tiêu chuẩn hóa danh mục hành vi vi phạm TMĐT</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[159.5px] items-start left-0 pb-px pt-[21px] px-[21px] rounded-[4px] top-0 w-[294.391px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container66 />
      <Heading6 />
      <Paragraph38 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3px]">🔍</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">Phát hiện vi phạm</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-2px] w-[247px] whitespace-pre-wrap">Phát hiện gian hàng, tài khoản và nội dung vi phạm</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[159.5px] items-start left-[310.39px] pb-px pt-[21px] px-[21px] rounded-[4px] top-0 w-[294.406px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container67 />
      <Heading7 />
      <Paragraph39 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3px]">🚨</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">Cảnh báo rủi ro</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-2px] w-[246px] whitespace-pre-wrap">Đánh giá mức độ nghiêm trọng và ưu tiên xử lý</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[159.5px] items-start left-[620.8px] pb-px pt-[21px] px-[21px] rounded-[4px] top-0 w-[294.391px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container68 />
      <Heading8 />
      <Paragraph40 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3px]">📹</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">Giám sát Livestream</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-2px]">Theo dõi nội dung thời gian thực</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[159.5px] items-start left-[931.19px] pb-px pt-[30.75px] px-[21px] rounded-[4px] top-0 w-[294.406px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container69 />
      <Heading9 />
      <Paragraph41 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3px]">📝</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-1px]">Nhật ký vi phạm</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-2px]">Quản lý tập trung các vụ việc xử lý</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[159.5px] items-start left-[1241.59px] pb-px pt-[30.75px] px-[21px] rounded-[4px] top-0 w-[294.391px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container70 />
      <Heading10 />
      <Paragraph42 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[159.5px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[234.5px] items-start left-[6.5px] px-[32px] top-[1228.5px] w-[1600px]" data-name="Container">
      <Heading5 />
      <Container65 />
    </div>
  );
}

function PY() {
  return (
    <div className="bg-[#fafafa] h-[1463px] relative shrink-0 w-full" data-name="pY">
      <Container />
      <Container4 />
      <Container14 />
      <Container38 />
      <Container64 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <PY />
    </div>
  );
}