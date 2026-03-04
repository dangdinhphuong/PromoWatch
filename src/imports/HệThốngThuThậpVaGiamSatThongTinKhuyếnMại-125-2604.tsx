import svgPaths from "./svg-hvz38l6ci4";
import imgContainer from "figma:asset/4c4c9d64033a1eec90d527957c803c04131c3870.png";
import { imgGroup, imgGroup1 } from "./svg-d5vk7";

function PrimitiveSpan() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-[41.691px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">30 ngày</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p8912880} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[10px] shrink-0 w-[91.985px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13.159px] py-[1.162px] relative size-full">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-[66.302px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Toàn quốc</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p8912880} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[10px] shrink-0 w-[179.994px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13.159px] py-[1.162px] relative size-full">
        <PrimitiveSpan1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[35.992px] items-center left-[1.23px] top-[126.51px] w-[283.976px]" data-name="Container">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[41.999px] left-0 top-[44px] w-[607.991px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[-0.35px] tracking-[-0.7px]">{`Quản lý nhà nước về giá & theo dõi/bình ổn`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.506px] left-0 top-[139.99px] w-[620.986px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#666] text-[15px] top-[0.32px]">Giám sát biến động giá và hỗ trợ điều hành thị trường – Bộ Công Thương</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[162.497px] left-0 top-0 w-[1.234px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[162.497px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[188.652px] items-start left-0 pb-[1.162px] pt-[23.994px] px-[44.994px] top-0 w-[375.198px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[97.466px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] tracking-[0.325px] uppercase w-[46px] whitespace-pre-wrap">Giá trung bình toàn quốc</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[35.992px] left-0 top-0 w-[130.771px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a1a1a] text-[36px] top-[-2.81px]">25,300₫</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[22.488px] left-[142.77px] top-[15.1px] w-[22.143px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#666] text-[15px] top-[-0.84px]">/kg</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[37.589px] relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Text />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[55px] whitespace-pre-wrap">RCHD/Hà Nội</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[223.409px] items-start left-0 pl-[23.468px] top-0 w-[59.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-l-[3.485px] border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
      <Container8 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[77.973px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] tracking-[0.325px] uppercase w-[40px] whitespace-pre-wrap">Biến động 7 ngày</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[35.992px] left-0 top-0 w-[103.328px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#00a63e] text-[36px] top-[-2.81px]">+7.6%</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[19.983px] left-[115.33px] top-[12.54px] w-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0 19.9832">
        <g clipPath="url(#clip0_124_1944)" id="Icon">
          <g id="Vector" />
          <g id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_124_1944">
            <rect fill="white" height="19.9832" width="0" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Icon2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[97.466px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[39px] whitespace-pre-wrap">↑ 1,800₫ so với tuần trước</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[223.409px] items-start left-[83.8px] pl-[23.468px] top-0 w-[59.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-l-[3.485px] border-solid inset-0 pointer-events-none" />
      <Paragraph4 />
      <Container10 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[77.973px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] tracking-[0.325px] uppercase w-[40px] whitespace-pre-wrap">Khu vực biến động</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[35.992px] left-0 top-0 w-[34.485px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[36px] top-[-2.81px]">12</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[19.983px] left-[46.48px] top-[12.54px] w-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0 19.9832">
        <g clipPath="url(#clip0_125_1025)" id="Icon">
          <g id="Vector" />
          <g id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_125_1025">
            <rect fill="white" height="19.9832" width="0" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Icon3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[63px] whitespace-pre-wrap">Tỉnh/thành phố</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[223.409px] items-start left-[167.6px] pl-[23.468px] top-0 w-[59.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f54900] border-l-[3.485px] border-solid inset-0 pointer-events-none" />
      <Paragraph7 />
      <Container12 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[77.973px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] tracking-[0.325px] uppercase w-[38px] whitespace-pre-wrap">Cảnh báo hiệu lực</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[35.992px] left-0 top-0 w-[20.001px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#e7000b] text-[36px] top-[-2.81px]">5</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute h-[19.983px] left-[32px] top-[12.54px] w-[4.338px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33786 19.9832">
        <g clipPath="url(#clip0_125_987)" id="Icon">
          <path d={svgPaths.p38699b80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361489" />
          <path d="M2.16893 9.44938V10.1724" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361489" />
          <path d="M2.16893 10.8953H2.17074" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361489" />
        </g>
        <defs>
          <clipPath id="clip0_125_987">
            <rect fill="white" height="19.9832" width="4.33786" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Icon4 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[58.479px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[28px] whitespace-pre-wrap">Tăng trên 5%</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[223.409px] items-start left-[251.4px] pl-[23.468px] top-0 w-[59.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-l-[3.485px] border-solid inset-0 pointer-events-none" />
      <Paragraph10 />
      <Container14 />
      <Paragraph12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[223.409px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[288.568px] items-start left-0 pb-[1.162px] pt-[31.999px] px-[31.999px] top-[188.65px] w-[375.198px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[135.036px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-1.84px] w-[55px] whitespace-pre-wrap">Xu hướng giá toàn quốc</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[77.973px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[51px] whitespace-pre-wrap">Gạo thường - 34 ngày qua</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[217.002px] relative shrink-0 w-[54.051px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Heading1 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#155dfc] h-[1.997px] shrink-0 w-[31.999px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[17.987px] relative shrink-0 w-[24.993px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666] text-[12px]">MA7</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[17.987px] relative shrink-0 w-[64.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Container21 />
        <Text1 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#9810fa] h-[1.997px] relative shrink-0 w-[31.999px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0a0a0a] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.987px] relative shrink-0 w-[31.454px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666] text-[12px]">MA30</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[17.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Container23 />
        <Text2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[17.987px] relative shrink-0 w-[160.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.994px] items-center relative size-full">
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[217.002px] items-center justify-between pr-[-65.304px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[3.33%_6.71%_13.33%_40.27%]" data-name="Group">
      <div className="absolute inset-[-0.2%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9959 250.987">
          <g id="Group">
            <path d="M0 250.487H78.9959" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" strokeWidth="0.999947" />
            <path d="M0 187.99H78.9959" id="Vector_2" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" strokeWidth="0.999947" />
            <path d="M0 125.493H78.9959" id="Vector_3" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" strokeWidth="0.999947" />
            <path d="M0 62.9967H78.9959" id="Vector_4" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" strokeWidth="0.999947" />
            <path d="M0 0.499974H78.9959" id="Vector_5" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" strokeWidth="0.999947" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[3.33%_6.71%_13.33%_40.27%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[86.67%_51.01%_7.4%_30.2%]" data-name="Group">
      <div className="absolute inset-[86.67%_59.73%_11.33%_40.27%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999947 6">
            <path d="M0.499974 6V0" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[88.27%_51.01%_7.4%_30.2%] leading-[normal] not-italic text-[#999] text-[10.999px] text-center">01/01</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[86.67%_-0.68%_7.4%_79.2%]" data-name="Group">
      <div className="absolute inset-[86.67%_6.71%_11.33%_93.29%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999947 6">
            <path d="M0.499974 6V0" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[88.27%_-0.68%_7.4%_79.2%] leading-[normal] not-italic text-[#999] text-[10.999px] text-center">03/02</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[86.67%_-0.68%_7.4%_30.2%]" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[86.67%_-0.68%_7.4%_30.2%]" data-name="Group">
      <div className="absolute inset-[86.67%_6.71%_13.33%_40.27%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9958 0.999947">
            <path d="M0 0.499974H78.9959" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <Group3 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[84.3%_59.73%_11.36%_20.13%]" data-name="Group">
      <div className="absolute inset-[86.67%_59.73%_13.33%_36.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999947">
            <path d="M0 0.499974H6" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.3%_65.77%_11.36%_20.13%] leading-[normal] not-italic text-[#999] text-[10.999px] text-right">20K</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[63.47%_59.73%_32.2%_20.13%]" data-name="Group">
      <div className="absolute inset-[65.83%_59.73%_34.17%_36.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999947">
            <path d="M0 0.499974H6" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[63.47%_65.77%_32.2%_20.13%] leading-[normal] not-italic text-[#999] text-[10.999px] text-right">22K</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[42.64%_59.73%_53.03%_20.13%]" data-name="Group">
      <div className="absolute inset-[45%_59.73%_55%_36.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999947">
            <path d="M0 0.499974H6" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.63%_65.77%_53.03%_20.13%] leading-[normal] not-italic text-[#999] text-[10.999px] text-right">23K</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[21.8%_59.73%_73.86%_20.13%]" data-name="Group">
      <div className="absolute inset-[24.17%_59.73%_75.83%_36.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999947">
            <path d="M0 0.499974H6" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[21.8%_65.77%_73.86%_20.13%] leading-[normal] not-italic text-[#999] text-[10.999px] text-right">25K</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[0.97%_59.73%_94.7%_20.13%]" data-name="Group">
      <div className="absolute inset-[3.33%_59.73%_96.67%_36.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999947">
            <path d="M0 0.499974H6" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.97%_65.77%_94.7%_20.13%] leading-[normal] not-italic text-[#999] text-[10.999px] text-right">26K</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0.97%_59.73%_11.36%_20.13%]" data-name="Group">
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0.97%_59.73%_11.36%_20.13%]" data-name="Group">
      <div className="absolute inset-[3.33%_59.73%_13.33%_40.27%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999947 249.987">
            <path d="M0.499974 0V249.987" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="0.999947" />
          </svg>
        </div>
      </div>
      <Group7 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[13.06%_6.71%_13.33%_40.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-39.165px] mask-size-[78.996px_261.986px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.34%_-1.26%_0_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.1892 221.582">
          <g id="Group">
            <path d={svgPaths.p3d8f9080} fill="url(#paint0_linear_125_998)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p24f10160} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="2.49987" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_998" x1="1.20132" x2="1.20132" y1="0.760439" y2="221.582">
              <stop offset="0.05" stopColor="#2563EB" stopOpacity="0.15" />
              <stop offset="0.95" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[13.06%_6.71%_13.33%_40.27%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_6.71%_12.67%_40.27%]" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0_6.71%_12.67%_40.27%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[0_6.71%_12.67%_40.27%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[13.75%_6.71%_30%_49.91%]" data-name="Group">
      <div className="absolute inset-[-0.16%_-1.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0333 169.278">
          <g id="Group">
            <path d={svgPaths.p24f7e140} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeDasharray="5 5 5 5 5 5 5 5" strokeWidth="1.49992" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[33.89%_6.71%_39.03%_72.4%]" data-name="Group">
      <div className="absolute inset-[-0.33%_-2.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5201 81.7822">
          <g id="Group">
            <path d={svgPaths.p25062b00} id="Vector" stroke="var(--stroke-0, #F97316)" strokeDasharray="3 3 3 3 3 3 3 3" strokeWidth="1.49992" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[299.984px] left-0 overflow-clip top-0 w-[148.994px]" data-name="Surface">
      <Group />
      <Group2 />
      <Group6 />
      <Group13 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function ComposedChart() {
  return (
    <div className="h-[299.984px] relative shrink-0 w-full" data-name="ComposedChart">
      <Surface />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[25.14%_6.72%_0_6.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-15.079px] mask-size-[128.97px_60.986px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-0.91%_-0.22%_0_-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.575 45.3153">
          <g id="Group">
            <path d={svgPaths.p1e477100} fill="url(#paint0_linear_125_1002)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p33a24980} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="0.999766" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_1002" x1="0.317061" x2="0.317061" y1="0.408797" y2="45.3153">
              <stop offset="0.05" stopColor="#64748B" stopOpacity="0.5" />
              <stop offset="0.95" stopColor="#64748B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[25.14%_6.72%_0_6.72%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_6.72%_-1.67%_6.72%]" data-name="Clip path group">
      <Group21 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[0_6.72%_-1.67%_6.72%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[0_6.72%_-1.67%_6.72%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[59.986px] left-0 overflow-clip top-0 w-[148.994px]" data-name="Surface">
      <Group19 />
    </div>
  );
}

function AreaChart() {
  return (
    <div className="h-[59.986px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[23.994px] h-[1079.148px] items-start left-0 pb-[1.162px] pt-[25.156px] px-[25.156px] rounded-[4px] top-0 w-[199.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container17 />
      <ComposedChart />
      <AreaChart />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[144.075px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1.84px] w-[39px] whitespace-pre-wrap">Bản đồ nhiệt biến động giá</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-0 opacity-40 size-[37.425px] top-0" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-[534.4%] top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[55.83px] size-[47.989px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9888 47.9888">
        <g id="Icon">
          <path d={svgPaths.p1b111300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99906" />
          <path d={svgPaths.p1dca1f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99906" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute content-stretch flex h-[19.493px] items-start left-0 top-[59.99px] w-[159.666px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] min-h-px min-w-px relative text-[#4a5565] text-[13px] text-center whitespace-pre-wrap">Bản đồ Việt Nam</p>
    </div>
  );
}

function Container31() {
  return <div className="bg-[#00c950] h-[11.997px] rounded-[38977000px] shrink-0 w-[7.805px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[27.751px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[14.09px] text-[#4a5565] text-[12px] text-center top-[-2.16px] w-[24px] whitespace-pre-wrap">Ổn định</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[41.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center relative size-full">
        <Container31 />
        <Text3 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#f0b100] h-[11.997px] rounded-[38977000px] shrink-0 w-[7.387px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[29.694px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[15.31px] text-[#4a5565] text-[12px] text-center top-[-2.16px] w-[26px] whitespace-pre-wrap">Tăng nhẹ</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[43.07px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center relative size-full">
        <Container33 />
        <Text4 />
      </div>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#fb2c36] h-[11.997px] rounded-[38977000px] shrink-0 w-[7.532px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[29.548px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[15.23px] text-[#4a5565] text-[12px] text-center top-[-2.16px] w-[26px] whitespace-pre-wrap">Tăng cao</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[43.07px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center relative size-full">
        <Container35 />
        <Text5 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[31.98px] items-center justify-center left-0 top-[95.47px] w-[159.666px]" data-name="Container">
      <Container30 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[127.45px] left-[-61.11px] top-[-45.01px] w-[159.666px]" data-name="Container">
      <Icon5 />
      <Paragraph14 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[37.425px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[247.803px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[15.99px] items-start pb-[1.162px] pt-[25.156px] px-[25.156px] relative size-full">
        <Heading2 />
        <Container26 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[83.926px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a1a1a] text-[14px] top-[-0.84px] w-[35px] whitespace-pre-wrap">Nhận định tự động</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[675.473px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21.125px] left-0 text-[#666] text-[13px] top-[-1.84px] w-[64px] whitespace-pre-wrap">Giá gạo tăng 7.6% trong 7 ngày qua, tập trung tại 12 tỉnh/thành. Miền Nam ghi nhận mức tăng cao nhất (+9.2%). Cần theo dõi sát diễn biến tại TP. HCM và Đồng bằng sông Cửu Long.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#eff6ff] h-[807.351px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-l-[3.485px] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="content-stretch flex flex-col gap-[7.986px] items-start pl-[23.468px] pr-[19.983px] pt-[19.983px] relative size-full">
        <Heading3 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[1079.148px] items-start left-[223.46px] top-0 w-[87.737px]" data-name="Container">
      <Container25 />
      <Container36 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[1079.148px] left-[32px] top-[509.22px] w-[311.201px]" data-name="Container">
      <Container16 />
      <Container24 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-1.84px]">Khu vực cần theo dõi</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[220px] whitespace-pre-wrap">Tỉnh/thành phố có biến động giá vượt ngưỡng cảnh báo</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[111.115px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[3.993px] items-start pb-[1.162px] pt-[19.983px] px-[23.994px] relative size-full">
        <Heading4 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container42() {
  return <div className="bg-[#e7000b] h-[47.989px] rounded-[38977000px] shrink-0 w-0" data-name="Container" />;
}

function Paragraph17() {
  return (
    <div className="absolute h-[67.464px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[43px] whitespace-pre-wrap">TP. Hồ Chí Minh</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[35.973px] left-0 top-[67.46px] w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-2px] w-[27px] whitespace-pre-wrap">Miền Nam</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[103.437px] left-0 top-[0.65px] w-[47.989px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[58.479px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[25px] whitespace-pre-wrap">Giá hiện tại</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1.84px]">26,800₫</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.996px] h-[84.489px] items-start left-[71.98px] top-[10.13px] w-[23.994px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[31px] whitespace-pre-wrap">Biến động</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#e7000b] text-[16px] top-[-1.84px]">+9.2%</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.996px] h-[64.995px] items-start left-[119.97px] top-[19.87px] w-[23.994px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[38.986px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[32px] whitespace-pre-wrap">Trạng thái</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[61.946px] left-0 rounded-[4px] top-[42.8px] w-[51.71px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#c10007] text-[12px] top-[1.99px] w-[28px] whitespace-pre-wrap">Cảnh báo cao</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[104.744px] left-[167.96px] top-0 w-[47.989px]" data-name="Container">
      <Paragraph23 />
      <Text6 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[31.999px] left-[239.94px] rounded-[8px] top-[36.37px] w-[109.173px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[4.24px]">Xem chi tiết →</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] h-[104.744px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container44 />
        <Container45 />
        <Container46 />
        <Container47 />
        <Button />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[23.994px] h-[104.744px] items-center pr-[-27.044px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[137.886px] items-start left-0 pb-[1.162px] pt-[15.99px] px-[23.994px] top-0 w-[308.878px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container41 />
    </div>
  );
}

function Container50() {
  return <div className="bg-[#f54900] h-[47.989px] rounded-[38977000px] shrink-0 w-0" data-name="Container" />;
}

function Paragraph24() {
  return (
    <div className="absolute h-[44.976px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[27px] whitespace-pre-wrap">Cần Thơ</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[89.934px] left-0 top-[44.98px] w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-2px] w-[30px] whitespace-pre-wrap">Đồng bằng sông Cửu Long</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[134.909px] left-0 top-0 w-[47.989px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[58.479px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[25px] whitespace-pre-wrap">Giá hiện tại</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1.84px]">25,900₫</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[84.489px] items-start left-[71.98px] top-[25.21px] w-[23.994px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[31px] whitespace-pre-wrap">Biến động</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#f54900] text-[16px] top-[-1.84px]">+6.8%</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[64.995px] items-start left-[119.97px] top-[34.96px] w-[23.994px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[38.986px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[32px] whitespace-pre-wrap">Trạng thái</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#ffedd4] h-[43.959px] left-0 rounded-[4px] top-[42.8px] w-[51.147px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#ca3500] text-[12px] top-[1.99px] w-[28px] whitespace-pre-wrap">Theo dõi</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[86.757px] left-[167.96px] top-[24.07px] w-[47.989px]" data-name="Container">
      <Paragraph30 />
      <Text7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[31.999px] left-[239.94px] rounded-[8px] top-[51.46px] w-[109.173px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[4.24px]">Xem chi tiết →</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[1_0_0] h-[134.909px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
        <Button1 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[23.994px] h-[134.909px] items-center pr-[-27.044px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[168.051px] items-start left-0 pb-[1.162px] pt-[15.99px] px-[23.994px] top-[137.89px] w-[308.878px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container49 />
    </div>
  );
}

function Container57() {
  return <div className="bg-[#f54900] h-[47.989px] rounded-[38977000px] shrink-0 w-0" data-name="Container" />;
}

function Paragraph31() {
  return (
    <div className="absolute h-[44.976px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[41px] whitespace-pre-wrap">An Giang</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[89.934px] left-0 top-[44.98px] w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-2px] w-[30px] whitespace-pre-wrap">Đồng bằng sông Cửu Long</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[134.909px] left-0 top-0 w-[47.989px]" data-name="Container">
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[58.479px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[25px] whitespace-pre-wrap">Giá hiện tại</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1.84px]">25,400₫</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[84.489px] items-start left-[71.98px] top-[25.21px] w-[23.994px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[38.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[31px] whitespace-pre-wrap">Biến động</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#f54900] text-[16px] top-[-1.84px]">+5.5%</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[64.995px] items-start left-[119.97px] top-[34.96px] w-[23.994px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[38.986px] left-0 top-0 w-[47.989px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[13px] top-[-2px] w-[32px] whitespace-pre-wrap">Trạng thái</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#ffedd4] h-[43.959px] left-0 rounded-[4px] top-[42.8px] w-[51.147px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12px] text-[#ca3500] text-[12px] top-[1.99px] w-[28px] whitespace-pre-wrap">Theo dõi</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[86.757px] left-[167.96px] top-[24.07px] w-[47.989px]" data-name="Container">
      <Paragraph37 />
      <Text8 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[31.999px] left-[239.94px] rounded-[8px] top-[51.46px] w-[109.173px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-[55.5px] text-[#155dfc] text-[13px] text-center top-[4.24px]">Xem chi tiết →</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[134.909px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Container60 />
        <Container61 />
        <Container62 />
        <Button2 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[23.994px] h-[134.909px] items-center left-[23.99px] pr-[-27.044px] top-[321.93px] w-[260.889px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[472.827px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container48 />
      <Container56 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[586.265px] items-start left-[32px] p-[1.162px] rounded-[4px] top-[1620.36px] w-[311.201px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a1a1a] text-[18px] top-[-1.84px]">Các chức năng</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3.32px]">📊</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[44.976px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[36px] whitespace-pre-wrap">CSDL Giá</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[214.425px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-1.84px] w-[47px] whitespace-pre-wrap">Dữ liệu giá từ địa phương, doanh nghiệp và thị trường</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[363.655px] items-start left-0 pb-[1.162px] pt-[24.14px] px-[21.145px] rounded-[4px] top-0 w-[49.441px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container65 />
      <Heading6 />
      <Paragraph38 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3.32px]">📈</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[67.464px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[74px] whitespace-pre-wrap">Dashboard Biến động</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[194.932px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-1.84px] w-[29px] whitespace-pre-wrap">Phân tích trực quan biến động giá theo khu vực</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[363.655px] items-start left-[65.43px] pb-[1.162px] pt-[22.633px] px-[21.145px] rounded-[4px] top-0 w-[49.441px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container66 />
      <Heading7 />
      <Paragraph39 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3.32px]">🚨</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[67.464px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[57px] whitespace-pre-wrap">Cảnh báo Ngưỡng</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[136.452px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-1.84px] w-[41px] whitespace-pre-wrap">Phát hiện sớm biến động bất thường</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[363.655px] items-start left-[130.86px] pb-[1.162px] pt-[51.873px] px-[21.145px] rounded-[4px] top-0 w-[49.459px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container67 />
      <Heading8 />
      <Paragraph40 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3.32px]">🔮</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[67.464px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[26px] whitespace-pre-wrap">Dự báo Giá</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[136.452px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-1.84px] w-[37px] whitespace-pre-wrap">Dự báo xu hướng giá ngắn hạn</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[363.655px] items-start left-[196.31px] pb-[1.162px] pt-[51.873px] px-[21.145px] rounded-[4px] top-0 w-[49.441px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container68 />
      <Heading9 />
      <Paragraph41 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-3.32px]">📋</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[89.952px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#1a1a1a] text-[15px] top-[-0.84px] w-[42px] whitespace-pre-wrap">Nhật ký Quyết sách</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[175.438px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#666] text-[12px] top-[-1.84px] w-[30px] whitespace-pre-wrap">Theo dõi và đánh giá tác động chính sách</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[363.655px] items-start left-[261.74px] pb-[1.162px] pt-[21.145px] px-[21.145px] rounded-[4px] top-0 w-[49.441px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container69 />
      <Heading10 />
      <Paragraph42 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[363.655px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.99px] h-[438.651px] items-start left-0 px-[31.999px] top-[2230.62px] w-[375.198px]" data-name="Container">
      <Heading5 />
      <Container64 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] h-[2669.275px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Container5 />
        <Container15 />
        <Container37 />
        <Container63 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[2725.268px] items-start pt-[55.993px] relative shrink-0 w-full" data-name="pq">
      <Container />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[834.032px] items-start left-0 top-0 w-[375.198px]" data-name="Body">
      <Pq />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[16.498px] left-0 top-[-19999.99px] w-[18.223px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#0a0a0a] text-[11px] top-[-0.84px]">20K</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Các chức năng</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Quản lý nhà nước về giá</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[47.952px] items-start left-[15.99px] pt-[7.986px] px-[7.986px] top-[15.99px] w-[246.841px]" data-name="Container">
      <Heading11 />
      <Paragraph43 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[12.5%] right-[58.33%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49371 9.15897">
            <path d={svgPaths.p1e799f72} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49371 5.82844">
            <path d={svgPaths.p9066a00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[58.33%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49371 9.15897">
            <path d={svgPaths.p1e799f72} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_58.33%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49371 5.82844">
            <path d={svgPaths.p9066a00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1c398e] text-[14px] whitespace-pre-wrap">Tổng quan</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Xem tổng thể hệ thống</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[1_0_0] h-[37.97px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading12 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[37.97px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#eff6ff] h-[64.288px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container73 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6527 16.6527">
            <path d={svgPaths.p167db6e0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 8.32634">
            <path d="M0.832634 7.49371V0.832634" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 11.6569">
            <path d="M0.832634 10.8242V0.832634" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 4.16317">
            <path d="M0.832634 3.33054V0.832634" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">CSDL Giá</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[147px] whitespace-pre-wrap">Dữ liệu giá phương, doanh nghiệp và thị trường</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading13 />
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container76 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6527 16.6527">
            <path d={svgPaths.p167db6e0} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_20.83%_41.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6569 5.82844">
            <path d={svgPaths.pc590fc0} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#cefafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Dashboard Biến động</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[149px] whitespace-pre-wrap">Phân tích xu hướng và biến động giá theo thực tế</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading14 />
        <Paragraph46 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container79 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.54979 2.49797">
            <path d={svgPaths.p205231e0} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6524 14.1548">
            <path d={svgPaths.p2cf777f0} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#fce7f3] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Cảnh báo Ngưỡng</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[168px] whitespace-pre-wrap">Thiết lập cảnh báo khi giá biến động bất thường</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.996px] items-start relative size-full">
        <Heading15 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container82 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3179 9.99161">
            <path d={svgPaths.p37b37b80} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66107 6.66107">
            <path d={svgPaths.p297cc580} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Dự báo Giá</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[170px] whitespace-pre-wrap">Dự báo xu hướng giá ngắn hạn và dài hạn</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading16 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container85 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 18.3179">
            <path d={svgPaths.p2e997270} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66107 6.66107">
            <path d={svgPaths.p16d33f80} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33054 1.66527">
            <path d="M2.4979 0.832634H0.832634" id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.32634 1.66527">
            <path d="M7.49371 0.832634H0.832634" id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.32634 1.66527">
            <path d="M7.49371 0.832634H0.832634" id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[#cbfbf1] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Nhật ký Quyết sách</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[162px] whitespace-pre-wrap">Theo dõi lịch sử điều chỉnh và chính sách</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading17 />
        <Paragraph49 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container88 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[585.594px] items-start left-[15.99px] top-[79.93px] w-[246.841px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6569 11.6569">
            <path d={svgPaths.p4425380} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6569 11.6569">
            <path d={svgPaths.p14085140} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[234.88px] pt-[7.986px] px-[7.986px] rounded-[38977000px] size-[35.955px] top-[7.99px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-r-[1.162px] border-solid h-[795.445px] left-[-279.98px] overflow-clip top-[55.99px] w-[279.983px]" data-name="Container">
      <Container71 />
      <Container72 />
      <Button14 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49371 13.3221">
            <path d={svgPaths.p911d500} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3221 1.66527">
            <path d="M12.4895 0.832634H0.832634" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[35.955px] relative shrink-0 w-[27.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[-7.986px] relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6527 16.6527">
            <path d={svgPaths.p24fa1a80} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66107 6.66107">
            <path d={svgPaths.p2288e800} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex h-[54.831px] items-center justify-between left-0 px-[15.99px] top-0 w-[375.198px]" data-name="Container">
      <Container93 />
      <Button16 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[22.488px] left-[148.98px] overflow-clip top-[16.15px] w-[77.247px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#101828] text-[15px] top-[-0.84px]">Quản lý giá</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b-[1.162px] border-solid h-[55.993px] left-0 top-0 w-[375.198px]" data-name="Container">
      <Container92 />
      <Heading18 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col items-start left-[315.23px] pt-[11.997px] px-[11.997px] rounded-[38977000px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[43.978px] top-[64px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.p13777d80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d="M11.9972 7.99813V20.9951" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d={svgPaths.p1485c660} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d={svgPaths.p3d8712b0} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[53.379px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Khuyến mãi</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-0 top-0 w-[75.032px]" data-name="Button">
      <Icon16 />
      <Text10 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.p204edcb0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d="M12.997 4.99883V6.99883" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d="M12.997 16.996V18.996" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d="M12.997 10.9974V12.9974" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[39.894px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Mã giảm</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[75.03px] top-0 w-[75.032px]" data-name="Button">
      <Icon17 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[44.558px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px]">Trang chủ</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[71.983px] items-center justify-end left-[150.06px] pb-[3.993px] pt-[52.998px] top-0 w-[75.051px]" data-name="Container">
      <Text12 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.p393b5420} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d={svgPaths.p2c76d93e} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[51.455px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#155dfc] text-[10px] text-center">Quản lý giá</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[225.12px] top-0 w-[75.032px]" data-name="Button">
      <Icon18 />
      <Text13 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.pb83f200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[37.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Vi phạm</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[300.15px] top-0 w-[75.032px]" data-name="Button">
      <Icon19 />
      <Text14 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[71.983px] left-0 top-0 w-[375.198px]" data-name="Container">
      <Button18 />
      <Button19 />
      <Container96 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[27.987px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9874 27.9874">
        <g id="Icon">
          <path d={svgPaths.p34aedf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[155.58px] rounded-[38977000px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-[63.997px] top-[-32px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon20 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[71.983px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Button22 />
    </div>
  );
}

function Container97() {
  return <div className="bg-white h-0 shrink-0 w-full" data-name="Container" />;
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[73.145px] items-start left-0 pt-[1.162px] top-[760.89px] w-[375.198px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.162px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container94 />
      <Container97 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Text9 />
      <Container70 />
      <Container91 />
      <Button17 />
      <Navigation />
    </div>
  );
}