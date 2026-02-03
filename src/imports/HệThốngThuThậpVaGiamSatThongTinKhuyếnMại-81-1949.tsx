import svgPaths from "./svg-r1rukxrpe0";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-3px]">{`Quản lý nhà nước về giá & theo dõi/bình ổn`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px]">Giám sát biến động giá và hỗ trợ điều hành thị trường – Bộ Công Thương</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[68px] relative shrink-0 w-[622.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.422px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">30 ngày</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[150px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.344px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Xăng dầu</p>
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
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[362px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[149px] items-start left-0 pb-px pt-[32px] px-[156px] top-0 w-[1664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[155.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Giá trung bình toàn quốc</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-3px]">25,300đ</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">RON95 / lít</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container8 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[108.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Biến động 7 ngày</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_81_1961)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_81_1961">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Icon3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#00a63e] text-[30px] top-[-3px]">+7.6%</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">↑ 1,800đ so với tuần trước</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container10 />
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Khu vực bất thường</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Icon4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3px]">12</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Tỉnh/thành phố</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container12 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Cảnh báo hiệu lực</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1911e200} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Icon5 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#e7000b] text-[30px] top-[-3px]">5</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Đang theo dõi</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container14 />
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[134px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[204.75px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Xu hướng giá toàn quốc</p>
      </div>
    </div>
  );
}

function Container20() {
  return <div className="bg-[#9810fa] h-[2px] shrink-0 w-[12px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">MA(7)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container20 />
        <Text />
      </div>
    </div>
  );
}

function Container22() {
  return <div className="bg-[#f54900] h-[2px] shrink-0 w-[12px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">MA(30)</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container22 />
        <Text1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[110.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container19 />
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[25px] top-[25px] w-[614px]" data-name="Container">
      <Heading1 />
      <Container18 />
    </div>
  );
}

function Surface() {
  return <div className="h-[240px] shrink-0 w-full" data-name="Surface" />;
}

function ComposedChart() {
  return (
    <div className="absolute content-stretch flex flex-col h-[240px] items-start left-[25px] top-[69px] w-[614px]" data-name="ComposedChart">
      <Surface />
    </div>
  );
}

function Surface1() {
  return <div className="h-[60px] shrink-0 w-full" data-name="Surface" />;
}

function AreaChart() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[25px] top-[309px] w-[614px]" data-name="AreaChart">
      <Surface1 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[25px] top-[373px] w-[614px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] text-center whitespace-pre-wrap">Khối lượng giao dịch</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container17 />
      <ComposedChart />
      <AreaChart />
      <Paragraph13 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Bản đồ nhiệt biến động giá</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[131.33px] size-[64px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.p154c8900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p36845100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[24px] left-0 top-[76px] w-[326.656px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[164.14px] text-[#4a5565] text-[16px] text-center top-[-2px]">Bản đồ Việt Nam</p>
    </div>
  );
}

function Container28() {
  return <div className="bg-[#00c950] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Ổn định</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[66.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container28 />
        <Text2 />
      </div>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#f0b100] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Theo dõi</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[70.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <Text3 />
      </div>
    </div>
  );
}

function Container32() {
  return <div className="bg-[#ff6900] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Nguy cơ</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[68.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container32 />
        <Text4 />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#fb2c36] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Khẩn cấp</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[72.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container34 />
        <Text5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16px] items-center justify-center left-0 top-[116px] w-[326.656px]" data-name="Container">
      <Container27 />
      <Container29 />
      <Container31 />
      <Container33 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[132px] relative shrink-0 w-[326.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Paragraph14 />
        <Container26 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[300px] items-center justify-center p-px relative rounded-[10px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(153.96deg, rgb(240, 253, 244) 0%, rgb(254, 252, 232) 50%, rgb(254, 242, 242) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading2 />
        <Container24 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[414px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Các chức năng</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-[25px] rounded-[10px] size-[48px] top-[25px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#155dfc] text-[24px]">📊</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[89px] w-[390px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">CSDL Giá</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25px] top-[125px] w-[390px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Dữ liệu giá từ địa phương, doanh nghiệp và thị trường</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-[25px] rounded-[8px] top-[161px] w-[91.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[46px] text-[#155dfc] text-[14px] text-center top-[6px]">Xem chi tiết →</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container38 />
      <Heading4 />
      <Paragraph15 />
      <Button />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex items-center justify-center left-[25px] rounded-[10px] size-[48px] top-[25px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#00a63e] text-[24px]">📈</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[89px] w-[390px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Dashboard Biến động</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25px] top-[125px] w-[390px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Phân tích trực quan biến động giá theo khu vực</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[36px] left-[25px] rounded-[8px] top-[161px] w-[91.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[46px] text-[#155dfc] text-[14px] text-center top-[6px]">Xem chi tiết →</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container40 />
      <Heading5 />
      <Paragraph16 />
      <Button1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#ffedd4] content-stretch flex items-center justify-center left-[25px] rounded-[10px] size-[48px] top-[25px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">🚨</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[89px] w-[390px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Cảnh báo Ngưỡng</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25px] top-[125px] w-[390px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Phát hiện sớm biến động bất thường</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[36px] left-[25px] rounded-[8px] top-[161px] w-[91.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[46px] text-[#155dfc] text-[14px] text-center top-[6px]">Xem chi tiết →</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container42 />
      <Heading6 />
      <Paragraph17 />
      <Button2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#f3e8ff] content-stretch flex items-center justify-center left-[25px] rounded-[10px] size-[48px] top-[25px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#9810fa] text-[24px]">🔮</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[89px] w-[390px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Dự báo Giá</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25px] top-[125px] w-[390px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Dự báo xu hướng giá ngắn hạn</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[36px] left-[25px] rounded-[8px] top-[161px] w-[91.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[46px] text-[#155dfc] text-[14px] text-center top-[6px]">Xem chi tiết →</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container44 />
      <Heading7 />
      <Paragraph18 />
      <Button3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#cefafe] content-stretch flex items-center justify-center left-[25px] rounded-[10px] size-[48px] top-[25px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#0092b8] text-[24px]">📋</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[89px] w-[390px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px]">Nhật ký Quyết sách</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25px] top-[125px] w-[390px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Theo dõi và đánh giá tác động chính sách</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[36px] left-[25px] rounded-[8px] top-[161px] w-[91.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[46px] text-[#155dfc] text-[14px] text-center top-[6px]">Xem chi tiết →</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container46 />
      <Heading8 />
      <Paragraph19 />
      <Button4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[460px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container39 />
      <Container41 />
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[504px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container36 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-0 w-[27.469px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#1c398e] text-[20px] whitespace-pre-wrap">ℹ️</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text6 />
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-[35.47px] text-[#1c398e] text-[18px] top-[-1.5px]">Thông tin hệ thống</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#193cb8] text-[14px] top-[-2px] w-[1280px] whitespace-pre-wrap">Hệ thống giám sát và quản lý giá được thiết kế để hỗ trợ Bộ Công Thương trong việc theo dõi biến động giá cả thị trường, phát hiện sớm các bất thường, và hỗ trợ ra quyết định điều hành thị trường kịp thời, minh bạch và hiệu quả.</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#eff6ff] h-[129.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Heading9 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1301.5px] items-start left-[132px] pt-[24px] px-[24px] top-[149px] w-[1400px]" data-name="Container">
      <Container6 />
      <Container15 />
      <Container35 />
      <Container47 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9fafb] h-[1450.5px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function PY() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1450.5px] items-start relative shrink-0 w-full" data-name="pY">
      <Container />
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