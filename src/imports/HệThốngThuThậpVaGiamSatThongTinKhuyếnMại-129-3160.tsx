import svgPaths from "./svg-0l5nj8c4si";

function Heading() {
  return (
    <div className="h-[63.961px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#101828] text-[24px] top-[-2px] w-[162px] whitespace-pre-wrap">Cảnh báo biến động giá</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48.025px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-1.84px] w-[205px] whitespace-pre-wrap">Phát hiện sớm và quản lý các biến động bất thường</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[119.972px] relative shrink-0 w-[214.715px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3202)" id="Icon">
          <path d={svgPaths.pb5f4f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p31f20f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3202">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[35.992px] relative rounded-[8px] shrink-0 w-[183.552px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[104.47px] text-[14px] text-center text-white top-[6px]">Tạo quy tắc cảnh báo</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[119.972px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[56.737px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Khẩn cấp</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.983px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9832 19.9832">
        <g clipPath="url(#clip0_129_3243)" id="Icon">
          <path d={svgPaths.p28bb7700} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d="M9.99161 7.49371V10.8242" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d="M9.99161 14.1548H9.99994" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
        </g>
        <defs>
          <clipPath id="clip0_129_3243">
            <rect fill="white" height="19.9832" width="19.9832" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[31.98px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#e7000b] text-[24px] whitespace-pre-wrap">2</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[94.253px] items-start left-0 pb-[1.162px] pt-[17.152px] px-[17.152px] rounded-[10px] top-0 w-[398.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container5 />
      <Paragraph1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[52.889px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Mức cao</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.983px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9832 19.9832">
        <g clipPath="url(#clip0_129_3238)" id="Icon">
          <path d={svgPaths.p28bb7700} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d="M9.99161 7.49371V10.8242" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d="M9.99161 14.1548H9.99994" id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
        </g>
        <defs>
          <clipPath id="clip0_129_3238">
            <rect fill="white" height="19.9832" width="19.9832" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[31.98px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#f54900] text-[24px] whitespace-pre-wrap">1</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[94.253px] items-start left-0 pb-[1.162px] pt-[17.152px] px-[17.152px] rounded-[10px] top-[110.24px] w-[398.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffd6a8] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Paragraph2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[66.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Trung bình</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.983px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9832 19.9832">
        <g clipPath="url(#clip0_129_3250)" id="Icon">
          <path d={svgPaths.p37e6d000} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d={svgPaths.p5075980} id="Vector_2" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
        </g>
        <defs>
          <clipPath id="clip0_129_3250">
            <rect fill="white" height="19.9832" width="19.9832" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[31.98px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#d08700] text-[24px] whitespace-pre-wrap">2</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[94.253px] items-start left-0 pb-[1.162px] pt-[17.152px] px-[17.152px] rounded-[10px] top-[220.49px] w-[398.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fff085] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container9 />
      <Paragraph3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[49.423px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Đã xử lý</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.983px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9832 19.9832">
        <g clipPath="url(#clip0_129_3208)" id="Icon">
          <path d={svgPaths.p25cf580} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          <path d={svgPaths.p3a205d80} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
        </g>
        <defs>
          <clipPath id="clip0_129_3208">
            <rect fill="white" height="19.9832" width="19.9832" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[31.98px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#00a63e] text-[24px] whitespace-pre-wrap">1</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[94.253px] items-start left-0 pb-[1.162px] pt-[17.152px] px-[17.152px] rounded-[10px] top-[330.73px] w-[398.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container11 />
      <Paragraph4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[424.984px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#101828] text-[18px] top-[-1.84px]">Danh sách cảnh báo</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[60.149px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[1.162px] pt-[15.99px] px-[15.99px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3312 16.6643">
            <path d={svgPaths.p2b813b00} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 4.9958">
            <path d="M0.832634 0.832634V4.16317" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67359 1.66527">
            <path d="M0.832634 0.832634H0.840961" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[10px] shrink-0 size-[46.301px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.162px] pt-[13.159px] px-[13.159px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ffe2e2] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[74.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#c10007] text-[12px] top-[1.83px]">Khẩn cấp</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#dbeafe] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[102.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1447e6] text-[12px] top-[1.83px]">Đang theo dõi</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[23.976px] items-center left-0 top-0 w-[193.843px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[56.011px] left-0 top-[31.96px] w-[193.843px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[185px] whitespace-pre-wrap">Xăng RON 95 - TP. Hồ Chí Minh</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-[91.97px] w-[193.843px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Tăng giá vượt 8% trong 7 ngày</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[11.997px] left-0 top-[9.98px] w-[8.367px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36718 11.9972">
        <g clipPath="url(#clip0_129_3228)" id="Icon">
          <path d={svgPaths.p35e661f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
          <path d={svgPaths.p27d0fb00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
        </g>
        <defs>
          <clipPath id="clip0_129_3228">
            <rect fill="white" height="11.9972" width="8.36718" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[77.101px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[12.36px] text-[#6a7282] text-[12px] top-[-2.16px] w-[62px] whitespace-pre-wrap">03/02/2026 10:30</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[46.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[47px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Ngưỡng: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px]">7%</span>
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-[38.024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[27px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Hiện tại: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] text-[#e7000b]">8.2%</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[47.971px] items-center left-0 top-[119.94px] w-[193.843px]" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[167.906px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
        <Heading3 />
        <Paragraph5 />
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[167.906px] items-start left-0 top-0 w-[256.134px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[6.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3222)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3222">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[31.999px] left-[256.13px] rounded-[8px] top-0 w-[91.821px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56.96px] text-[#0a0a0a] text-[14px] text-center top-[2.85px]">Chi tiết</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[167.906px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Button1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[217.057px] items-start left-0 pb-[1.162px] pt-[23.994px] px-[23.994px] top-0 w-[395.944px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container16 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3312 16.6643">
            <path d={svgPaths.p2b813b00} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 4.9958">
            <path d="M0.832634 0.832634V4.16317" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67359 1.66527">
            <path d="M0.832634 0.832634H0.840961" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[10px] shrink-0 size-[46.301px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.162px] pt-[13.159px] px-[13.159px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ffe2e2] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[74.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#c10007] text-[12px] top-[1.83px]">Khẩn cấp</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#dbeafe] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[102.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1447e6] text-[12px] top-[1.83px]">Đang theo dõi</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[23.976px] items-center left-0 top-0 w-[193.843px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28.006px] left-0 top-[31.96px] w-[193.843px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[190px] whitespace-pre-wrap">Xăng RON 95 - Hà Nội</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-[63.96px] w-[193.843px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Tăng giá vượt 7% trong 7 ngày</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[11.997px] left-0 top-[9.98px] w-[8.367px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36718 11.9972">
        <g clipPath="url(#clip0_129_3228)" id="Icon">
          <path d={svgPaths.p35e661f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
          <path d={svgPaths.p27d0fb00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
        </g>
        <defs>
          <clipPath id="clip0_129_3228">
            <rect fill="white" height="11.9972" width="8.36718" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[77.101px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[12.36px] text-[#6a7282] text-[12px] top-[-2.16px] w-[62px] whitespace-pre-wrap">03/02/2026 09:15</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[46.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[47px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Ngưỡng: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px]">7%</span>
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-[38.024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[27px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Hiện tại: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] text-[#e7000b]">7.6%</span>
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[47.971px] items-center left-0 top-[91.93px] w-[193.843px]" data-name="Container">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[139.901px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container30 />
        <Heading4 />
        <Paragraph6 />
        <Container31 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[139.901px] items-start left-0 top-0 w-[256.134px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[6.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3222)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3222">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[31.999px] left-[256.13px] rounded-[8px] top-0 w-[91.821px]" data-name="Button">
      <Icon10 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56.96px] text-[#0a0a0a] text-[14px] text-center top-[2.85px]">Chi tiết</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[139.901px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Button2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[189.051px] items-start left-0 pb-[1.162px] pt-[23.994px] px-[23.994px] top-[217.06px] w-[395.944px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3312 16.6643">
            <path d={svgPaths.p2b813b00} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 4.9958">
            <path d="M0.832634 0.832634V4.16317" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67359 1.66527">
            <path d="M0.832634 0.832634H0.840961" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[46.301px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffb86a] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.162px] pt-[13.159px] px-[13.159px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#ffedd4] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[44.885px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#ca3500] text-[12px] top-[1.83px]">Cao</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#dbeafe] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[102.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1447e6] text-[12px] top-[1.83px]">Đang theo dõi</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[23.976px] items-center left-0 top-0 w-[193.843px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28.006px] left-0 top-[31.96px] w-[193.843px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[181px] whitespace-pre-wrap">Dầu Diesel - Đà Nẵng</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-[63.96px] w-[193.843px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Tăng giá 6.5% trong 5 ngày</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute h-[11.997px] left-0 top-[9.98px] w-[8.367px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36718 11.9972">
        <g clipPath="url(#clip0_129_3228)" id="Icon">
          <path d={svgPaths.p35e661f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
          <path d={svgPaths.p27d0fb00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
        </g>
        <defs>
          <clipPath id="clip0_129_3228">
            <rect fill="white" height="11.9972" width="8.36718" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[77.101px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[12.36px] text-[#6a7282] text-[12px] top-[-2.16px] w-[62px] whitespace-pre-wrap">02/02/2026 16:45</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[46.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[47px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Ngưỡng: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px]">5%</span>
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-[38.024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[27px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Hiện tại: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] text-[#e7000b]">6.5%</span>
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[47.971px] items-center left-0 top-[91.93px] w-[193.843px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[139.901px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container40 />
        <Heading5 />
        <Paragraph7 />
        <Container41 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[139.901px] items-start left-0 top-0 w-[256.134px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[6.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3222)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3222">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[31.999px] left-[256.13px] rounded-[8px] top-0 w-[91.821px]" data-name="Button">
      <Icon13 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56.96px] text-[#0a0a0a] text-[14px] text-center top-[2.85px]">Chi tiết</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[139.901px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button3 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[189.051px] items-start left-0 pb-[1.162px] pt-[23.994px] px-[23.994px] top-[406.11px] w-[395.944px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container36 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.54979 2.49797">
            <path d={svgPaths.p205231e0} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6524 14.1548">
            <path d={svgPaths.p2cf777f0} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#fef9c2] relative rounded-[10px] shrink-0 size-[46.301px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffdf20] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.162px] pt-[13.159px] px-[13.159px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#fef9c2] h-[39.966px] relative rounded-[38977000px] shrink-0 w-[81.585px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#a65f00] text-[12px] top-[1.83px] w-[32px] whitespace-pre-wrap">Trung bình</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#dbeafe] h-[39.966px] relative rounded-[38977000px] shrink-0 w-[100.261px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1447e6] text-[12px] top-[1.83px] w-[58px] whitespace-pre-wrap">Đang theo dõi</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[39.966px] items-center left-0 top-0 w-[193.843px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28.006px] left-0 top-[47.95px] w-[193.843px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[175px] whitespace-pre-wrap">Gas LPG - Hải Phòng</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-[79.95px] w-[193.843px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Biến động giá bất thường</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute h-[11.997px] left-0 top-[9.98px] w-[8.367px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36718 11.9972">
        <g clipPath="url(#clip0_129_3228)" id="Icon">
          <path d={svgPaths.p35e661f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
          <path d={svgPaths.p27d0fb00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
        </g>
        <defs>
          <clipPath id="clip0_129_3228">
            <rect fill="white" height="11.9972" width="8.36718" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[77.101px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[12.36px] text-[#6a7282] text-[12px] top-[-2.16px] w-[62px] whitespace-pre-wrap">02/02/2026 14:20</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[46.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[47px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Ngưỡng: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px]">4%</span>
        </p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-[38.024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[27px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Hiện tại: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] text-[#e7000b]">4.8%</span>
        </p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[47.971px] items-center left-0 top-[107.92px] w-[193.843px]" data-name="Container">
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[155.891px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Heading6 />
        <Paragraph8 />
        <Container51 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[155.891px] items-start left-0 top-0 w-[256.134px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[6.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3222)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3222">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[31.999px] left-[256.13px] rounded-[8px] top-0 w-[91.821px]" data-name="Button">
      <Icon16 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56.96px] text-[#0a0a0a] text-[14px] text-center top-[2.85px]">Chi tiết</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[155.891px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Button4 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[205.041px] items-start left-0 pb-[1.162px] pt-[23.994px] px-[23.994px] top-[595.16px] w-[395.944px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-solid inset-0 pointer-events-none" />
      <Container46 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.318 18.318">
            <path d={svgPaths.p188ffe80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4895 9.99161">
            <path d={svgPaths.p231b3a00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[46.301px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#7bf1a8] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.162px] pt-[13.159px] px-[13.159px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#dcfce7] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[68.208px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#008236] text-[12px] top-[1.83px]">Đã xử lý</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#f3f4f6] h-[23.976px] relative rounded-[38977000px] shrink-0 w-[68.208px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#364153] text-[12px] top-[1.83px]">Đã xử lý</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[23.976px] items-center left-0 top-0 w-[193.843px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[56.011px] left-0 top-[31.96px] w-[193.843px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[163px] whitespace-pre-wrap">Xăng RON 92 - Cần Thơ</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-[91.97px] w-[193.843px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Đã xử lý - Giá ổn định</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute h-[11.997px] left-0 top-[9.98px] w-[8.367px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36718 11.9972">
        <g clipPath="url(#clip0_129_3228)" id="Icon">
          <path d={svgPaths.p35e661f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
          <path d={svgPaths.p27d0fb00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.697265" />
        </g>
        <defs>
          <clipPath id="clip0_129_3228">
            <rect fill="white" height="11.9972" width="8.36718" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[77.101px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[12.36px] text-[#6a7282] text-[12px] top-[-2.16px] w-[62px] whitespace-pre-wrap">01/02/2026 11:00</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-[46.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[47px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Ngưỡng: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px]">5%</span>
        </p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-[38.024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[12px] top-[-2.16px] w-[27px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Hiện tại: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] text-[#e7000b]">3.2%</span>
        </p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[47.971px] items-center left-0 top-[119.94px] w-[193.843px]" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[167.906px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Heading7 />
        <Paragraph9 />
        <Container60 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[167.906px] items-start left-0 top-0 w-[256.134px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[9.98px] size-[15.99px] top-[6.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_3222)" id="Icon">
          <path d={svgPaths.p2c541ce0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p3807100} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_3222">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[31.999px] left-[256.13px] rounded-[8px] top-0 w-[91.821px]" data-name="Button">
      <Icon19 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56.96px] text-[#0a0a0a] text-[14px] text-center top-[2.85px]">Chi tiết</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[167.906px] left-[23.99px] top-[824.19px] w-[347.955px]" data-name="Container">
      <Container56 />
      <Button5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[1016.095px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container25 />
      <Container35 />
      <Container45 />
      <Container55 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[1078.567px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-[1.162px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9fafb] h-[1671.512px] relative shrink-0 w-[398.267px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.994px] items-start relative size-full">
        <Container1 />
        <Container3 />
        <Container12 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[1819.489px] items-start left-0 pl-[11.997px] pt-[67.99px] top-0 w-[422.261px]" data-name="pq">
      <Container />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[24.013px] left-0 top-[-19999.99px] w-[8.639px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-1.84px]">0</p>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white h-[956px] left-0 overflow-clip top-0 w-[422.261px]" data-name="Body">
      <Pq />
      <Text14 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Các chức năng</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Quản lý nhà nước về giá</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[47.952px] items-start left-[15.99px] pt-[7.986px] px-[7.986px] top-[15.99px] w-[246.841px]" data-name="Container">
      <Heading1 />
      <Paragraph10 />
    </div>
  );
}

function Icon20() {
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

function Container68() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Tổng quan</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Xem tổng thể hệ thống</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[1_0_0] h-[37.97px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading8 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[37.97px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[64.288px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container67 />
    </div>
  );
}

function Icon21() {
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

function Container71() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">CSDL Giá</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[147px] whitespace-pre-wrap">Dữ liệu giá phương, doanh nghiệp và thị trường</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading9 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container70 />
    </div>
  );
}

function Icon22() {
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

function Container74() {
  return (
    <div className="bg-[#cefafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Dashboard Biến động</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[149px] whitespace-pre-wrap">Phân tích xu hướng và biến động giá theo thực tế</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading10 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container73 />
    </div>
  );
}

function Icon23() {
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

function Container77() {
  return (
    <div className="bg-[#fce7f3] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1c398e] text-[14px] whitespace-pre-wrap">Cảnh báo Ngưỡng</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[168px] whitespace-pre-wrap">Thiết lập cảnh báo khi giá biến động bất thường</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.996px] items-start relative size-full">
        <Heading11 />
        <Paragraph14 />
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
    <div className="bg-[#eff6ff] h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container76 />
    </div>
  );
}

function Icon24() {
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

function Container80() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Dự báo Giá</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[170px] whitespace-pre-wrap">Dự báo xu hướng giá ngắn hạn và dài hạn</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading12 />
        <Paragraph15 />
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

function Icon25() {
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

function Container83() {
  return (
    <div className="bg-[#cbfbf1] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Nhật ký Quyết sách</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[162px] whitespace-pre-wrap">Theo dõi lịch sử điều chỉnh và chính sách</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading13 />
        <Paragraph16 />
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

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[585.594px] items-start left-[15.99px] top-[79.93px] w-[246.841px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Icon26() {
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

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[234.88px] pt-[7.986px] px-[7.986px] rounded-[38977000px] size-[35.955px] top-[7.99px]" data-name="Button">
      <Icon26 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-r-[1.162px] border-solid h-[899.989px] left-[-279.98px] overflow-clip top-[55.99px] w-[279.983px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Button12 />
    </div>
  );
}

function Icon27() {
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

function Button13() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[35.955px] relative shrink-0 w-[27.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[-7.986px] relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 1.66527">
            <path d="M0.832634 0.832634H14.1548" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[54.831px] items-center justify-between left-0 px-[15.99px] top-0 w-[440.248px]" data-name="Container">
      <Container87 />
      <Button14 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[22.488px] left-[158.81px] overflow-clip top-[16.15px] w-[122.622px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#101828] text-[15px] top-[-0.84px]">Cảnh báo ngưỡng</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b-[1.162px] border-solid h-[55.993px] left-0 top-0 w-[440.248px]" data-name="Container">
      <Container86 />
      <Heading14 />
    </div>
  );
}

function Icon29() {
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

function Text15() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[53.379px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Khuyến mãi</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-0 top-0 w-[88.046px]" data-name="Button">
      <Icon29 />
      <Text15 />
    </div>
  );
}

function Icon30() {
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

function Text16() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[39.894px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Mã giảm</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[88.05px] top-0 w-[88.046px]" data-name="Button">
      <Icon30 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[44.558px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px]">Trang chủ</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col h-[71.983px] items-center justify-end left-[176.09px] pb-[3.993px] pt-[52.998px] top-0 w-[88.046px]" data-name="Container">
      <Text17 />
    </div>
  );
}

function Icon31() {
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

function Text18() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[51.455px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#155dfc] text-[10px] text-center">Quản lý giá</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[264.14px] top-0 w-[88.046px]" data-name="Button">
      <Icon31 />
      <Text18 />
    </div>
  );
}

function Icon32() {
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

function Text19() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[37.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Vi phạm</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[352.18px] top-0 w-[88.064px]" data-name="Button">
      <Icon32 />
      <Text19 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[71.983px] left-0 top-0 w-[440.248px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Container90 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Icon33() {
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

function Button19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[188.11px] rounded-[38977000px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-[63.997px] top-[-32px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon33 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[71.983px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Button19 />
    </div>
  );
}

function Container91() {
  return <div className="bg-white h-0 shrink-0 w-full" data-name="Container" />;
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[73.145px] items-start left-0 pt-[1.162px] top-[882.86px] w-[440.248px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.162px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container88 />
      <Container91 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.8)] h-[956px] left-0 top-0 w-[440.248px]" data-name="Primitive.div" />;
}

function PrimitiveH() {
  return (
    <div className="h-[18.005px] relative shrink-0 w-[417.197px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[18px] left-[208.39px] text-[#0a0a0a] text-[18px] text-center top-[-1.48px] tracking-[-0.45px]">Chi tiết cảnh báo</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[417.197px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#6a7282] text-[14px] text-center whitespace-pre-wrap">Thông tin chi tiết và hành động xử lý</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.99px] h-[43.978px] items-start left-[23.99px] top-[23.99px] w-[417.197px]" data-name="Container">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[18.586px] items-start left-0 top-[3.48px] w-[61.22px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">Mặt hàng</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[24.013px] left-0 top-[24.01px] w-[200.594px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-1.84px]">Xăng RON 95</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[48.025px] left-0 top-0 w-[200.594px]" data-name="Container">
      <Label />
      <Paragraph17 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[18.586px] items-start left-0 top-[3.48px] w-[51.147px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">Khu vực</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[24.013px] left-0 top-[24.01px] w-[200.613px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-1.84px]">TP. Hồ Chí Minh</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[48.025px] left-[216.58px] top-0 w-[200.613px]" data-name="Container">
      <Label1 />
      <Paragraph18 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[18.586px] items-start left-0 top-[3.48px] w-[48.987px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">Mức độ</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[23.976px] left-[48.99px] rounded-[38977000px] top-[2.98px] w-[74.016px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#c10007] text-[12px] top-[1.83px]">Khẩn cấp</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute h-[26.953px] left-0 top-[64.02px] w-[200.594px]" data-name="Container">
      <Label2 />
      <Text20 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex h-[18.586px] items-start left-0 top-[3.48px] w-[63.689px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px]">Trạng thái</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#dbeafe] h-[23.976px] left-[63.69px] rounded-[38977000px] top-[2.98px] w-[102.094px]" data-name="Text">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1447e6] text-[12px] top-[1.83px]">Đang theo dõi</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-[26.953px] left-[216.58px] top-[64.02px] w-[200.613px]" data-name="Container">
      <Label3 />
      <Text21 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[90.968px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Biểu đồ giá và ngưỡng cảnh báo</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.01%_1.31%_14.01%_16.97%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312.913 210.941">
          <g id="Group">
            <path d="M0 210.442H312.913" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M0 157.956H312.913" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M0 105.471H312.913" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M0 52.9853H312.913" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M0 0.499861H312.913" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2.01%_1.31%_14.01%_16.97%]" data-name="Group">
      <div className="absolute inset-[0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313.913 209.942">
          <g id="Group">
            <path d="M0.499861 0V209.942" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M52.652 0V209.942" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M104.804 0V209.942" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M156.956 0V209.942" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M209.109 0V209.942" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
            <path d="M313.413 0V209.942" id="Vector_6" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999722" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.01%_1.31%_14.01%_16.97%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[85.99%_78.72%_6.2%_12.66%]" data-name="Group">
      <div className="absolute inset-[85.99%_83.03%_11.61%_16.97%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_78.72%_6.2%_12.66%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">28/01</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[85.99%_65.1%_6.2%_26.28%]" data-name="Group">
      <div className="absolute inset-[85.99%_69.41%_11.61%_30.59%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_65.1%_6.2%_26.28%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">29/01</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[85.99%_51.48%_6.2%_39.9%]" data-name="Group">
      <div className="absolute inset-[85.99%_55.79%_11.61%_44.21%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_51.48%_6.2%_39.9%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">30/01</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[85.99%_38.12%_6.2%_53.79%]" data-name="Group">
      <div className="absolute inset-[85.99%_42.17%_11.61%_57.83%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_38.12%_6.2%_53.79%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">31/01</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[85.99%_24.24%_6.2%_67.15%]" data-name="Group">
      <div className="absolute inset-[85.99%_28.55%_11.61%_71.45%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_24.24%_6.2%_67.15%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">01/02</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[85.99%_0.75%_6.2%_90.11%]" data-name="Group">
      <div className="absolute inset-[85.99%_1.31%_11.61%_98.69%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 5.99833">
            <path d="M0.499861 5.99833V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.8%_0.75%_6.2%_90.11%] leading-[normal] not-italic text-[#666] text-[11.997px] text-center">03/02</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[85.99%_0.75%_6.2%_12.66%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[85.99%_0.75%_6.2%_12.66%]" data-name="Group">
      <div className="absolute inset-[85.99%_1.31%_14.01%_16.97%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312.913 0.999722">
            <path d="M0 0.499861H312.913" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[82.9%_83.03%_11.1%_12.53%]" data-name="Group">
      <div className="absolute inset-[85.99%_83.03%_14.01%_15.4%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99833 0.999722">
            <path d="M0 0.499861H5.99833" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_85.38%_11.1%_12.53%] leading-[normal] not-italic text-[#666] text-[11.997px] text-right">0</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[61.9%_83.03%_32.1%_6.79%]" data-name="Group">
      <div className="absolute inset-[65%_83.03%_35%_15.4%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99833 0.999722">
            <path d="M0 0.499861H5.99833" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_85.38%_32.1%_6.79%] leading-[normal] not-italic text-[#666] text-[11.997px] text-right">6500</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[40.91%_83.03%_53.09%_5.22%]" data-name="Group">
      <div className="absolute inset-[44%_83.03%_56%_15.4%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99833 0.999722">
            <path d="M0 0.499861H5.99833" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.91%_85.38%_53.09%_5.22%] leading-[normal] not-italic text-[#666] text-[11.997px] text-right">13000</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[19.91%_83.03%_74.09%_5.22%]" data-name="Group">
      <div className="absolute inset-[23.01%_83.03%_76.99%_15.4%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99833 0.999722">
            <path d="M0 0.499861H5.99833" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.91%_85.38%_74.09%_5.22%] leading-[normal] not-italic text-[#666] text-[11.997px] text-right">19500</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[1.72%_83.03%_92.28%_4.7%]" data-name="Group">
      <div className="absolute inset-[2.01%_83.03%_97.99%_15.4%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99833 0.999722">
            <path d="M0 0.499861H5.99833" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.72%_85.38%_92.28%_4.7%] leading-[normal] not-italic text-[#666] text-[11.997px] text-right">26000</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[1.72%_83.03%_11.1%_4.7%]" data-name="Group">
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[1.72%_83.03%_11.1%_4.7%]" data-name="Group">
      <div className="absolute inset-[2.01%_83.03%_14.01%_16.97%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999722 209.942">
            <path d="M0.499861 0V209.942" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <Group12 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[2.15%_1.31%_91.85%_16.97%]" data-name="Group">
      <div className="absolute inset-[5.24%_1.31%_94.76%_16.97%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312.913 0.999722">
            <path d="M0 0.499861H312.913" id="Vector" stroke="var(--stroke-0, #FF0000)" strokeDasharray="3 3" strokeWidth="0.999722" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[2.15%_36.42%_91.85%_51.57%] leading-[normal] not-italic text-[#808080] text-[11.997px] text-center">Ngưỡng</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[2.43%_0.52%_89.68%_16.19%]" data-name="Group">
      <div className="absolute inset-[-5.07%_-0.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320.911 21.7247">
          <g id="Group">
            <path d={svgPaths.p2f010c00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
            <g id="Group_2">
              <path d={svgPaths.p3ad14d60} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p236d6560} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p3716b3f0} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p2710ac70} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p28acb080} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p23482900} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
              <path d={svgPaths.p3f338000} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.99944" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[249.999px] left-0 overflow-clip top-0 w-[382.894px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group11 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="h-[249.999px] relative shrink-0 w-full" data-name="LineChart">
      <Surface />
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#f9fafb] h-[284.303px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[1.162px] pt-[17.152px] px-[17.152px] relative size-full">
        <LineChart />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[7.986px] h-[312.272px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container100 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Nguyên nhân kích hoạt</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Tăng giá vượt 8% trong 7 ngày</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px]">Ngưỡng cảnh báo</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[28.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[26px] whitespace-pre-wrap">7%</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col h-[43.996px] items-start left-0 top-0 w-[183.443px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px]">Giá trị hiện tại</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[28.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e7000b] text-[18px] top-[-1.84px] w-[42px] whitespace-pre-wrap">8.2%</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col h-[43.996px] items-start left-[199.43px] top-0 w-[183.461px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#fefce8] h-[110.28px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[11.997px] items-start pb-[1.162px] pt-[17.152px] px-[17.152px] relative size-full">
        <Paragraph19 />
        <Container103 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[7.986px] h-[138.249px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container102 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Đơn vị phụ trách</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[212px] whitespace-pre-wrap">Sở Công Thương TP. Hồ Chí Minh</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Được giao phụ trách theo dõi và xử lý</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[74.27px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[3.993px] items-start pb-[1.162px] pt-[17.152px] px-[17.152px] relative size-full">
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[7.986px] h-[102.239px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container107 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Nhật ký xử lý</p>
    </div>
  );
}

function Container111() {
  return <div className="absolute bg-[#fb2c36] left-0 rounded-[38977000px] size-[7.986px] top-[5.99px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="absolute h-[19.983px] left-0 top-0 w-[362.91px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[0] left-0 text-[#101828] text-[0px] text-[14px] top-[-2px] w-[244px] whitespace-pre-wrap">
        <span className="leading-[20px]">Cảnh báo được tạo</span>
        <span className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px]">{` - Vượt ngưỡng 7%`}</span>
      </p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[15.99px] left-0 top-[19.98px] w-[362.91px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">03/02/2026 10:30</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[35.973px] left-[19.98px] top-0 w-[362.91px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[35.973px] relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container114() {
  return <div className="absolute bg-[#2b7fff] left-0 rounded-[38977000px] size-[7.986px] top-[5.99px]" data-name="Container" />;
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex h-[19.983px] items-start left-0 top-0 w-[362.91px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Đã giao cho Sở Công Thương</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[15.99px] left-0 top-[19.98px] w-[362.91px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">03/02/2026 10:30</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[35.973px] left-[19.98px] top-0 w-[362.91px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[35.973px] relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[118.248px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[11.997px] items-start pb-[1.162px] pt-[17.152px] px-[17.152px] relative size-full">
        <Container110 />
        <Container113 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[7.986px] h-[146.217px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Container109 />
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#155dfc] h-[35.992px] relative rounded-[8px] shrink-0 w-[154.965px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Cập nhật trạng thái</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[8px] shrink-0 w-[120.843px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17.162px] py-[9.162px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Thêm ghi chú</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[8px] shrink-0 w-[117.395px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17.162px] py-[9.162px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Xuất báo cáo</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[53.143px] items-center pt-[1.162px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[963.06px] items-start left-[23.99px] top-[83.96px] w-[417.197px]" data-name="Container">
      <Container94 />
      <Container99 />
      <Container101 />
      <Container106 />
      <Container108 />
      <Container116 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32762 9.32762">
            <path d={svgPaths.p1eec9700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32762 9.32762">
            <path d={svgPaths.p2f00e9b0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[388.52px] opacity-70 rounded-[6px] size-[15.99px] top-[15.99px]" data-name="Primitive.button">
      <Icon34 />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-white border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid h-[860.385px] left-0 overflow-clip shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[47.81px] w-[440.248px]" data-name="Primitive.div">
      <Container92 />
      <Container93 />
      <PrimitiveButton />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Container64 />
      <Container85 />
      <Navigation />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}