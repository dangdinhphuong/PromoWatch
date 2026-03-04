import svgPaths from "./svg-wg8fi9oh81";

function Heading1() {
  return (
    <div className="h-[127.922px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#101828] text-[24px] top-[-2px] w-[65px] whitespace-pre-wrap">Danh mục vi phạm</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[119.899px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[64px] whitespace-pre-wrap">Tiêu chuẩn hóa danh mục hành vi vi phạm TMĐT</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[251.814px] items-start left-0 top-0 w-[64.233px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13.16px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d={svgPaths.p144bec20} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p2a562400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M7.9951 9.99388V1.99878" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[8px] shrink-0 w-[92.003px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[58.64px] text-[#0a0a0a] text-[14px] text-center top-[6px]">Export</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[13.16px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d={svgPaths.p144bec20} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p142c7600} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M7.9951 1.99878V9.99388" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[35.992px] relative rounded-[8px] shrink-0 w-[94.217px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[59.14px] text-[#0a0a0a] text-[14px] text-center top-[6px]">Import</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[15.99px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g id="Icon">
          <path d="M3.33129 7.9951H12.6589" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M7.9951 3.33129V12.6589" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#155dfc] flex-[1_0_0] h-[35.992px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[86.97px] text-[14px] text-center text-white top-[6px]">Thêm danh mục</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[35.992px] items-center left-[64.23px] top-[107.9px] w-[360.787px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[251.814px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f3f3f5] h-[35.992px] relative rounded-[8px] shrink-0 w-[148.54px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[16px]">Tìm kiếm danh mục...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[37.825px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Tất cả</p>
      </div>
    </div>
  );
}

function Icon3() {
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
    <div className="bg-[#f3f3f5] h-[35.992px] relative rounded-[8px] shrink-0 w-[199.996px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13.159px] py-[1.162px] relative size-full">
        <PrimitiveSpan />
        <Icon3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[35.992px] items-center relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <PrimitiveButton />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[70.295px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.162px] pt-[17.152px] px-[17.152px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px] tracking-[0.3px] uppercase w-[35px] whitespace-pre-wrap">Tổng danh mục</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-3.32px]">8</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[134.238px] items-start left-0 pb-[1.162px] pt-[21.145px] px-[21.145px] rounded-[10px] top-0 w-[87.701px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[47.971px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px] tracking-[0.3px] uppercase w-[35px] whitespace-pre-wrap">Tổng vi phạm</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#e7000b] text-[30px] top-[-3.32px]">1174</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[134.238px] items-start left-[103.69px] pb-[1.162px] pt-[21.145px] px-[21.145px] rounded-[10px] top-0 w-[87.719px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px] tracking-[0.3px] uppercase w-[48px] whitespace-pre-wrap">Nghiêm trọng</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#e7000b] text-[30px] top-[-3.32px]">5</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.986px] h-[134.238px] items-start left-[207.4px] pb-[1.162px] pt-[21.145px] px-[21.145px] rounded-[10px] top-0 w-[87.719px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[31.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.16px] tracking-[0.3px] uppercase w-[33px] whitespace-pre-wrap">Cập nhật</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[39.966px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[32px] whitespace-pre-wrap">Hôm nay</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[134.238px] items-start left-[311.11px] pb-[1.162px] pt-[21.145px] px-[21.145px] rounded-[10px] top-0 w-[87.719px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[134.238px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[56.011px] relative shrink-0 w-[81.929px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[82px] whitespace-pre-wrap">Hàng giả, hàng nhái</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ffe2e2] h-[19.983px] relative rounded-[4px] shrink-0 w-[40.856px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c10007] text-[12px]">Cao</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[56.011px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Text />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[90.896px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[128px] whitespace-pre-wrap">Sản phẩm vi phạm quyền sở hữu trí tuệ, hàng không rõ nguồn gốc</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[170.883px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container15 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[170.883px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[41.418px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">312</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[39.966px] left-[49.4px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[84.724px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[84.72px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[362.057px] items-start left-0 pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-0 w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container13 />
      <Container16 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[140.028px] relative shrink-0 w-[71.493px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[53px] whitespace-pre-wrap">Cạnh tranh không lành mạnh</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ffedd4] h-[35.973px] relative rounded-[4px] shrink-0 w-[51.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ca3500] text-[12px]">Trung bình</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[140.028px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text3 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[68.172px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[129px] whitespace-pre-wrap">Phá giá, bán phá giá, cản trở đối thủ cạnh tranh</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] h-[232.176px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container22 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[232.176px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[41.418px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">189</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[39.966px] left-[49.4px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[50.421px] relative shrink-0 w-[84.724px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[31.999px] relative shrink-0 w-[111.968px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[67.573px] items-center justify-between pr-[-61.91px] pt-[1.162px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[362.057px] items-start left-[211.41px] pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-0 w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f54900] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container20 />
      <Container23 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[84.017px] relative shrink-0 w-[71.493px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[57px] whitespace-pre-wrap">Quảng cáo sai sự thật</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ffedd4] h-[35.973px] relative rounded-[4px] shrink-0 w-[51.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ca3500] text-[12px]">Trung bình</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[84.017px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text6 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[68.172px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[124px] whitespace-pre-wrap">Thông tin sản phẩm không đúng, phóng đại công dụng</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[176.164px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container29 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[176.164px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[41.418px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">156</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[39.966px] left-[49.4px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[84.724px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[84.72px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[306.046px] items-start left-0 pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[386.05px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container27 />
      <Container30 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[56.011px] relative shrink-0 w-[81.929px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[75px] whitespace-pre-wrap">{`Lừa đảo & dữ liệu`}</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ffe2e2] h-[19.983px] relative rounded-[4px] shrink-0 w-[40.856px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c10007] text-[12px]">Cao</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[56.011px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Text9 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[68.172px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[134px] whitespace-pre-wrap">Thu thập thông tin cá nhân trái phép, lừa đảo khách hàng</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[148.159px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container36 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[148.159px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[27.624px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">78</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[39.966px] left-[35.61px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[70.93px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[70.93px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[306.046px] items-start left-[211.41px] pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[386.05px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[112.022px] relative shrink-0 w-[59.26px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[44px] whitespace-pre-wrap">Hàng cấm lưu hành</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#e7000b] h-[35.973px] relative rounded-[4px] shrink-0 w-[63.525px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white">Nghiêm trọng</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[112.022px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Text12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[45.448px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[114px] whitespace-pre-wrap">Vũ khí, chất cấm, thuốc không phép</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] h-[181.446px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container43 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[181.446px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[27.624px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">45</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[39.966px] left-[35.61px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[70.93px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="flex-[1_0_0] h-[31.999px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[70.93px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[311.328px] items-start left-0 pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[716.09px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container41 />
      <Container44 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[84.017px] relative shrink-0 w-[81.929px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[79px] whitespace-pre-wrap">{`Trốn thuế & hoá đơn`}</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#ffe2e2] h-[19.983px] relative rounded-[4px] shrink-0 w-[40.856px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c10007] text-[12px]">Cao</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[84.017px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Text15 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[45.448px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[129px] whitespace-pre-wrap">Không xuất hóa đơn, khai man thuế</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[153.441px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container50 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[153.441px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[41.418px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">124</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[39.966px] left-[49.4px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[50.421px] relative shrink-0 w-[84.724px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[31.999px] relative shrink-0 w-[111.968px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Button18 />
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[67.573px] items-center justify-between pr-[-61.91px] pt-[1.162px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[311.328px] items-start left-[211.41px] pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[716.09px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f54900] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container48 />
      <Container51 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[140.028px] relative shrink-0 w-[71.493px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[68px] whitespace-pre-wrap">Vi phạm quyền người tiêu dùng</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#ffedd4] h-[35.973px] relative rounded-[4px] shrink-0 w-[51.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ca3500] text-[12px]">Trung bình</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[140.028px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Text18 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[68.172px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[125px] whitespace-pre-wrap">Không bảo hành, không đổi trả, hợp đồng không rõ ràng</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[232.176px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container57 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[232.176px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[41.418px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">203</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[39.966px] left-[49.4px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[84.724px]" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[84.72px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[362.057px] items-start left-0 pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[1051.41px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container55 />
      <Container58 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[84.017px] relative shrink-0 w-[81.929px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.84px] w-[77px] whitespace-pre-wrap">Nội dung không phù hợp</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#ffe2e2] h-[19.983px] relative rounded-[4px] shrink-0 w-[40.856px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c10007] text-[12px]">Cao</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[84.017px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Text21 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[45.448px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[-1.84px] w-[130px] whitespace-pre-wrap">Nội dung khiêu dâm, bạo lực, kích động</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] h-[153.441px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.986px] items-start relative size-full">
        <Container64 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[153.441px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[31.98px] items-start left-0 top-0 w-[27.624px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px]">67</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[39.966px] left-[35.61px] top-[10.45px] w-[35.32px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[36px] whitespace-pre-wrap">vi phạm</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[50.421px] left-0 top-[17.15px] w-[70.93px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1032)" id="Icon">
          <path d={svgPaths.p2a72100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p1e8c900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 5.99633H5.33007" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 8.66136H5.33007" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M10.6601 11.3264H5.33007" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1032">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1022)" id="Icon">
          <path d={svgPaths.p28263900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1022">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9902 15.9902">
        <g clipPath="url(#clip0_129_1025)" id="Icon">
          <path d="M1.99878 3.99755H13.9914" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.p8efaa0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d={svgPaths.pe75c090} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M6.66258 7.32884V11.3264" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
          <path d="M9.32762 7.32884V11.3264" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33252" />
        </g>
        <defs>
          <clipPath id="clip0_129_1025">
            <rect fill="white" height="15.9902" width="15.9902" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[31.999px] items-center left-[70.93px] top-[26.35px] w-[111.968px]" data-name="Container">
      <Button24 />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[67.573px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.162px] inset-0 pointer-events-none" />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.997px] h-[362.057px] items-start left-[211.41px] pb-[1.162px] pl-[27.479px] pr-[25.156px] pt-[25.156px] rounded-br-[4px] rounded-tr-[4px] top-[1051.41px] w-[187.418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-b-[1.162px] border-l-[3.485px] border-r-[1.162px] border-solid border-t-[1.162px] inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Container62 />
      <Container65 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[1413.472px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container19 />
      <Container26 />
      <Container33 />
      <Container40 />
      <Container47 />
      <Container54 />
      <Container61 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9fafb] h-[1949.807px] relative shrink-0 w-[398.829px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.994px] items-start relative size-full">
        <Container1 />
        <Container4 />
        <Container6 />
        <Container11 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="bg-[#f9fafb] h-[2097.784px] relative shrink-0 w-full" data-name="pq">
      <div className="content-stretch flex items-start pl-[11.997px] pt-[67.99px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[938.576px] items-start left-0 top-0 w-[422.824px]" data-name="Body">
      <Pq />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[16.498px] left-0 top-[-19999.99px] w-[5.935px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#0a0a0a] text-[11px] top-[-0.84px]">0</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Các chức năng</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px]">Kiểm soát vi phạm TMĐT</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[47.952px] items-start left-[15.99px] pt-[7.986px] px-[7.986px] top-[15.99px] w-[246.841px]" data-name="Container">
      <Heading10 />
      <Paragraph17 />
    </div>
  );
}

function Icon28() {
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

function Container72() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Tổng quan</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[158px] whitespace-pre-wrap">Xem tổng thể hệ thống giám sát</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading11 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container71 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3209 15.8202">
            <path d={svgPaths.p26d8980} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1c398e] text-[14px] whitespace-pre-wrap">Danh mục vi phạm</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[166px] whitespace-pre-wrap">Phân loại và quản lý các loại vi phạm</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.996px] items-start relative size-full">
        <Heading12 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#eff6ff] h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container74 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9874 14.9874">
            <path d={svgPaths.p2b9275c0} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
        <div className="absolute inset-[-23.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.24559 5.24559">
            <path d={svgPaths.p39d9280} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#cefafe] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Phát hiện tự động</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[160px] whitespace-pre-wrap">AI phát hiện vi phạm trên các nền tảng</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading13 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container77 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3312 16.6643">
            <path d={svgPaths.p2b813b00} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66527 4.9958">
            <path d="M0.832634 0.832634V4.16317" id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67359 1.66527">
            <path d="M0.832634 0.832634H0.840961" id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#fce7f3] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Cảnh báo Rủi ro</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[168px] whitespace-pre-wrap">Cảnh báo sớm hành vi vi phạm nghiêm trọng</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.996px] items-start relative size-full">
        <Heading14 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container80 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[19.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[30.71%_8.33%_30.98%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10.87%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66121 9.32208">
            <path d={svgPaths.p3c934280} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3221 11.6569">
            <path d={svgPaths.p3b36d980} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66527" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Giám sát Livestream</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[162px] whitespace-pre-wrap">Theo dõi livestream bán hàng trên TMĐT</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading15 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container83 />
    </div>
  );
}

function Icon33() {
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

function Container87() {
  return (
    <div className="bg-[#cbfbf1] relative rounded-[10px] shrink-0 size-[35.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex h-[19.983px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Nhật ký Vi phạm</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[31.98px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.16px] w-[170px] whitespace-pre-wrap">Lịch sử và xử lý các trường hợp vi phạm</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[1_0_0] h-[53.96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Heading16 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[53.96px] items-start left-[13.16px] top-[13.16px] w-[220.523px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[80.278px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.162px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container86 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[601.584px] items-start left-[15.99px] top-[79.93px] w-[246.841px]" data-name="Container">
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
    </div>
  );
}

function Icon34() {
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

function Button33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[234.88px] pt-[7.986px] px-[7.986px] rounded-[38977000px] size-[35.955px] top-[7.99px]" data-name="Button">
      <Icon34 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-r-[1.162px] border-solid h-[899.989px] left-[-279.98px] overflow-clip top-[55.99px] w-[279.983px]" data-name="Container">
      <Container69 />
      <Container70 />
      <Button33 />
    </div>
  );
}

function Icon35() {
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

function Button34() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[35.955px] relative shrink-0 w-[27.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[-7.986px] relative size-full">
        <Button34 />
      </div>
    </div>
  );
}

function Icon36() {
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

function Button35() {
  return (
    <div className="relative rounded-[38977000px] shrink-0 size-[35.955px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex h-[54.831px] items-center justify-between left-0 px-[15.99px] top-0 w-[422.824px]" data-name="Container">
      <Container91 />
      <Button35 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[22.488px] left-[147.45px] overflow-clip top-[16.15px] w-[127.922px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#101828] text-[15px] top-[-0.84px]">Danh mục vi phạm</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b-[1.162px] border-solid h-[55.993px] left-0 top-0 w-[422.824px]" data-name="Container">
      <Container90 />
      <Heading />
    </div>
  );
}

function Icon37() {
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

function Text25() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[53.379px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Khuyến mãi</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-0 top-0 w-[84.561px]" data-name="Button">
      <Icon37 />
      <Text25 />
    </div>
  );
}

function Icon38() {
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

function Text26() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[39.894px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Mã giảm</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[84.56px] top-0 w-[84.561px]" data-name="Button">
      <Icon38 />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[44.558px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px]">Trang chủ</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[71.983px] items-center justify-end left-[169.12px] pb-[3.993px] pt-[52.998px] top-0 w-[84.561px]" data-name="Container">
      <Text27 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.p393b5420} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
          <path d={svgPaths.p2c76d93e} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[51.455px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Quản lý giá</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[253.68px] top-0 w-[84.561px]" data-name="Button">
      <Icon39 />
      <Text28 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9944 23.9944">
        <g id="Icon">
          <path d={svgPaths.pb83f200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[37.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#155dfc] text-[10px] text-center">Vi phạm</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[71.983px] items-center justify-center left-[338.24px] top-0 w-[84.579px]" data-name="Button">
      <Icon40 />
      <Text29 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[71.983px] left-0 top-0 w-[422.824px]" data-name="Container">
      <Button36 />
      <Button37 />
      <Container94 />
      <Button38 />
      <Button39 />
    </div>
  );
}

function Icon41() {
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

function Button40() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[179.4px] rounded-[38977000px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-[63.997px] top-[-32px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon41 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[71.983px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Button40 />
    </div>
  );
}

function Container95() {
  return <div className="bg-white h-0 shrink-0 w-full" data-name="Container" />;
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[73.145px] items-start left-0 pt-[1.162px] top-[865.43px] w-[422.824px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.162px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container92 />
      <Container95 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Text24 />
      <Container68 />
      <Container89 />
      <Navigation />
    </div>
  );
}