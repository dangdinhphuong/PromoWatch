import svgPaths from "./svg-ag12sxtdoc";

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">{`Chuẩn hóa & Tích hợp Dữ liệu`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Chuẩn hóa Excel</p>
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

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-3px] tracking-[-0.75px]">Excel Data Normalization</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Transform and export structured Excel data</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[323.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4.66667V8L10.6667 9.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Export History</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[42px] relative rounded-[14px] shrink-0 w-[149.734px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[17px] py-px relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#155dfc] h-[40px] min-h-px min-w-px relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] to-[#4f39f6]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[101px] text-[14px] text-center text-white top-[8px]">New Normalization</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[42px] relative shrink-0 w-[340.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36bb6c80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[42px] left-[1179.05px] rounded-[14px] top-0 w-[89.953px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[56px] text-[#364153] text-[14px] text-center top-[8px]">Filter</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42px] left-0 rounded-[14px] top-0 w-[1167.047px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)]">Search normalizations...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[1167.047px]" data-name="Container">
      <TextInput />
      <Icon3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[190px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[191px] items-start left-0 pb-px top-0 w-[1333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[60.5px] left-0 top-0 w-[301.969px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Name</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[60.5px] left-[301.97px] top-0 w-[154.484px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Data Type</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[60.5px] left-[456.45px] top-0 w-[145.031px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[13px] tracking-[0.6px] uppercase w-[54px] whitespace-pre-wrap">Active Version</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[60.5px] left-[601.48px] top-0 w-[109.625px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Versions</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[60.5px] left-[711.11px] top-0 w-[118.719px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Last Run</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[60.5px] left-[829.83px] top-0 w-[133.578px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Updated By</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[60.5px] left-[963.41px] top-0 w-[103.547px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[#4a5565] text-[12px] top-[21px] tracking-[0.6px] uppercase">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[60.5px] left-[1066.95px] top-0 w-[200.047px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[176.58px] text-[#4a5565] text-[12px] text-right top-[21px] tracking-[0.6px] uppercase">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[60.5px] left-0 top-0 w-[1267px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[60.5px] left-0 top-0 w-[1267px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_166_1800)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_166_1800">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Product Price Normalization</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[24.5px] w-[253.969px]" data-name="Container">
      <Container13 />
      <Text1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[81px] left-0 top-0 w-[301.969px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[81px] left-[301.97px] top-0 w-[154.484px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[16.5px] w-[78px] whitespace-pre-wrap">E-commerce Data</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[27.5px] w-[42.484px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">v2.1</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[81px] left-[456.45px] top-0 w-[145.031px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[81px] left-[601.48px] top-0 w-[109.625px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[16.5px] w-[51px] whitespace-pre-wrap">5 versions</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[81px] left-[711.11px] top-0 w-[118.719px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[16.5px] w-[47px] whitespace-pre-wrap">2 hours ago</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[81px] left-[829.83px] top-0 w-[133.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[16.5px] w-[76px] whitespace-pre-wrap">Nguyễn Văn A</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#ecfdf5] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[27.5px] w-[55.547px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#007a55] text-[12px]">Active</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[81px] left-[963.41px] top-0 w-[103.547px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[8.35%] right-[8.26%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6754 8.00048">
            <path d={svgPaths.p2d210780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 5.33333">
            <path d={svgPaths.p59b1b00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
            <path d={svgPaths.p32713180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 9.33333">
            <path d="M0.666667 8.66667V0.666667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[24.5px] w-[152.047px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[81px] left-[1066.95px] top-0 w-[200.047px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[81px] left-0 top-0 w-[1267px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_166_1800)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_166_1800">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[156.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Promotion Data Cleanup</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[24.5px] w-[253.969px]" data-name="Container">
      <Container16 />
      <Text4 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[81px] left-0 top-0 w-[301.969px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[81px] left-[301.97px] top-0 w-[154.484px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[28.5px]">Marketing Data</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[27.5px] w-[42.484px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">v1.3</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[81px] left-[456.45px] top-0 w-[145.031px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[81px] left-[601.48px] top-0 w-[109.625px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[16.5px] w-[51px] whitespace-pre-wrap">3 versions</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[81px] left-[711.11px] top-0 w-[118.719px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[28.5px]">1 day ago</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[81px] left-[829.83px] top-0 w-[133.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[28.5px]">Trần Thị B</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#ecfdf5] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[27.5px] w-[55.547px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#007a55] text-[12px]">Active</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[81px] left-[963.41px] top-0 w-[103.547px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[8.35%] right-[8.26%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6754 8.00048">
            <path d={svgPaths.p2d210780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 5.33333">
            <path d={svgPaths.p59b1b00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
            <path d={svgPaths.p32713180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 9.33333">
            <path d="M0.666667 8.66667V0.666667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[24.5px] w-[152.047px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[81px] left-[1066.95px] top-0 w-[200.047px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[81px] left-0 top-[81px] w-[1267px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_166_1800)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_166_1800">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[30.781px]" data-name="Container" style={{ backgroundImage: "linear-gradient(133.888deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[116px] whitespace-pre-wrap">Customer Address Standardization</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[16.5px] w-[253.969px]" data-name="Container">
      <Container19 />
      <Text7 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[72.5px] left-0 top-0 w-[301.969px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[72.5px] left-[301.97px] top-0 w-[154.484px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.5px]">Customer Data</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[23.5px] w-[42.484px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">v1.0</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[72.5px] left-[456.45px] top-0 w-[145.031px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[72.5px] left-[601.48px] top-0 w-[109.625px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.5px] w-[56px] whitespace-pre-wrap">1 version</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[72.5px] left-[711.11px] top-0 w-[118.719px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.5px]">Never</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[72.5px] left-[829.83px] top-0 w-[133.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.5px]">Lê Văn C</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[26px] items-center left-[24px] px-[11px] py-[5px] rounded-[10px] top-[23.5px] w-[50.016px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#364153] text-[12px]">Draft</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[72.5px] left-[963.41px] top-0 w-[103.547px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[8.35%] right-[8.26%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6754 8.00048">
            <path d={svgPaths.p2d210780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 4.66539">
            <path d={svgPaths.p3e02d2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 5.33333">
            <path d={svgPaths.p59b1b00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
            <path d={svgPaths.p32713180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 9.33333">
            <path d="M0.666667 8.66667V0.666667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[20.5px] w-[152.047px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[72.5px] left-[1066.95px] top-0 w-[200.047px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[72.5px] left-0 top-[162px] w-[1267px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[234.5px] left-0 top-[60.5px] w-[1267px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[295px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[297px] left-[32px] rounded-[14px] top-[223px] w-[1269px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] h-[904px] relative shrink-0 w-[1333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[904px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pl-[280px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[989px] items-start relative shrink-0 w-full" data-name="pq">
      <Container />
      <Container2 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[904px] items-start left-0 top-[64px] w-[1613px]" data-name="Body">
      <Pq />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3cf37120} fill="var(--fill-0, #364153)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#364153] text-[13px] top-[-1px]">Tổng quan</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] whitespace-pre-wrap">Dashboard</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[17px] py-px relative size-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex items-start px-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] tracking-[0.55px] uppercase whitespace-pre-wrap">Chuẩn hóa dữ liệu</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8.66667H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 8.66667H10.6667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 11.3333H10.6667" id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#155dfc] text-[13px] top-[-1px]">Chuẩn hóa Excel</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#6a7282] text-[11px] top-[-2px] w-[159px] whitespace-pre-wrap">{`Import & mapping dữ liệu Excel`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#eff6ff] h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container27 />
          <Container28 />
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p110bf000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d665f00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#101828] text-[13px] top-[-1px]">Chuẩn hóa API</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px]">{`Mapping & transform API response`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container26 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex items-start px-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] tracking-[0.55px] uppercase whitespace-pre-wrap">Quản lý</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b393280} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3eea2890} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2bdcbd80} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#101828] text-[13px] top-[-1px]">Nguồn Dữ liệu</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] whitespace-pre-wrap">Quản lý kết nối</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#101828] text-[13px] top-[-1px]">Quy tắc Chuyển đổi</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] whitespace-pre-wrap">Thiết lập mapping</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_166_1782)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_166_1782">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#101828] text-[13px] top-[-1px]">Chất lượng Dữ liệu</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] whitespace-pre-wrap">{`Kiểm tra & validate`}</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2338cf00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#101828] text-[13px] top-[-1px]">Quản lý API</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] min-h-px min-w-px relative text-[#6a7282] text-[11px] whitespace-pre-wrap">Cấu hình endpoints</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[244px] items-start relative shrink-0 w-full" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[272.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container32 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Button15 />
        <Container25 />
        <Container31 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white h-[840px] left-0 top-[149px] w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pr-px relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1px] tracking-[-0.45px]">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container45 />
        <Heading4 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.141px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[40px] relative shrink-0 w-[433.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container44 />
        <Navigation />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2338cf00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
          <Container43 />
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-0 pb-px px-[6.5px] top-0 w-[1613px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[rgba(16,24,40,0.5)] h-[904px] left-0 top-0 w-[1613px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Create Normalization</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Configure your Excel normalization</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading5 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[50px] relative shrink-0 w-[215.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[83px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container52 />
          <Button25 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 2.5V12.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(79, 57, 246) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(43,127,255,0.3),0px_4px_6px_0px_rgba(43,127,255,0.3)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[112px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[56.06px] text-[#155dfc] text-[12px] text-center top-[-1px] w-[70px] whitespace-pre-wrap">Upload Excel Sample</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container58 />
        <Text11 />
      </div>
    </div>
  );
}

function Container59() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pr-[16px] relative size-full">
          <Container57 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[32px] relative shrink-0 w-[112px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[56.05px] text-[#6a7282] text-[12px] text-center top-[-1px] w-[78px] whitespace-pre-wrap">Define Output Schema</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container62 />
        <Text12 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pr-[16px] relative size-full">
          <Container61 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_166_1711)" id="Icon">
          <path d={svgPaths.pc921000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bbd80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 5V8.33333" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 11.6667V15" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 1.66667V3.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.83333 6.66667H2.5" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 13.3333H14.1667" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M9.16667 2.5H7.5" id="Vector_8" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_166_1711">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-center">{`Mapping & Rules`}</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container66 />
        <Text13 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[88px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container60 />
      <Container64 />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f9fafb] h-[137px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[316px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_166_1723)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_166_1723">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#d0fae5] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#004f3b] text-[14px] whitespace-pre-wrap">TinKhuyenMai_3-2-2026_14-38-55.xlsx</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#007a55] text-[12px] top-[-1px] w-[59px] whitespace-pre-wrap">3552.54 KB</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.203px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#096] text-[14px] text-center">Change</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
      <Button26 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#ecfdf5] h-[74px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Select Sheet</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-130.5px] size-0 top-[-386px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-130.5px] size-0 top-[-386px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-130.5px] size-0 top-[-386px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="h-[43px] relative rounded-[14px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Container74() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Header Row</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="h-[42px] relative rounded-[14px] shrink-0 w-full" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Label1 />
      <NumberInput />
    </div>
  );
}

function Container73() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[71px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] whitespace-pre-wrap">Data Preview</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[412.531px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[16px] text-[#364153] text-[12px] top-[11px] w-[51px] whitespace-pre-wrap">Column 1</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute h-[40.5px] left-[412.53px] top-0 w-[328.609px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[16px] text-[#364153] text-[12px] top-[11px] w-[53px] whitespace-pre-wrap">Column 2</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute h-[40.5px] left-[741.14px] top-0 w-[326.422px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[16px] text-[#364153] text-[12px] top-[11px] w-[53px] whitespace-pre-wrap">Column 3</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute h-[40.5px] left-[1067.56px] top-0 w-[282.438px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[16px] text-[#364153] text-[12px] top-[11px] w-[53px] whitespace-pre-wrap">Column 4</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[40.5px] left-0 top-0 w-[1350px]" data-name="Table Row">
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[1350px]" data-name="Table Header">
      <TableRow4 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[412.531px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#1c398e] text-[14px] top-[10.5px]">Product Name</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[45px] left-[412.53px] top-0 w-[328.609px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#1c398e] text-[14px] top-[10.5px]">Price</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[45px] left-[741.14px] top-0 w-[326.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#1c398e] text-[14px] top-[10.5px]">Category</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[45px] left-[1067.56px] top-0 w-[282.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#1c398e] text-[14px] top-[10.5px]">Stock</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-[#eff6ff] border-[#f3f4f6] border-b border-solid h-[45px] left-0 top-0 w-[1350px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[412.531px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">iPhone 14</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[45px] left-[412.53px] top-0 w-[328.609px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">25,000,000</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[45px] left-[741.14px] top-0 w-[326.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Electronics</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[45px] left-[1067.56px] top-0 w-[282.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">50</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[45px] left-0 top-[45px] w-[1350px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[412.531px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Samsung TV</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[45px] left-[412.53px] top-0 w-[328.609px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">15,500,000</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[45px] left-[741.14px] top-0 w-[326.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Electronics</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[45px] left-[1067.56px] top-0 w-[282.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">30</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[45px] left-0 top-[90px] w-[1350px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[412.531px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Nike Shoes</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[45px] left-[412.53px] top-0 w-[328.609px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">2,500,000</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[45px] left-[741.14px] top-0 w-[326.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Fashion</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[45px] left-[1067.56px] top-0 w-[282.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">100</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[45px] left-0 top-[135px] w-[1350px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[412.531px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Laptop Dell</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[44.5px] left-[412.53px] top-0 w-[328.609px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">20,000,000</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[44.5px] left-[741.14px] top-0 w-[326.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">Electronics</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[44.5px] left-[1067.56px] top-0 w-[282.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#364153] text-[14px] top-[10.5px]">25</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute h-[44.5px] left-0 top-[180px] w-[1350px]" data-name="Table Row">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[224.5px] left-0 top-[40.5px] w-[1350px]" data-name="Table Body">
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[265px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-white h-[267px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Table1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 top-0 w-[101.516px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">Columns detected:</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[109.52px] px-[11px] py-[5px] rounded-[10px] top-0 w-[100.5px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">Product Name</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[218.02px] px-[11px] py-[5px] rounded-[10px] top-0 w-[48.609px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">Price</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[274.63px] px-[11px] py-[5px] rounded-[10px] top-0 w-[71.781px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">Category</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[26px] items-center left-[354.41px] px-[11px] py-[5px] rounded-[10px] top-0 w-[51.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1447e6] text-[12px]">Stock</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[341px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[534px] items-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container73 />
      <Container76 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[582px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[36px] relative shrink-0 w-[61.703px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[8px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#99a1af] text-[14px] text-center">Back</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-white h-[38px] relative rounded-[14px] shrink-0 w-[75.859px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[17px] py-[9px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Cancel</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[58.25px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#155dfc] h-[36px] min-h-px min-w-px relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] to-[#4f39f6]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[35.5px] text-[14px] text-center text-white top-[6px]">Next</p>
        <Icon33 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[38px] relative shrink-0 w-[182.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button28 />
        <Button29 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f9fafb] h-[71px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[24px] relative size-full">
          <Button27 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[873px] items-start left-[106.5px] rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[16px] w-[1400px]" data-name="Container">
      <Container51 />
      <Container54 />
      <Container67 />
      <Container79 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[905px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[904px] items-start left-0 overflow-clip top-0 w-[1613px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[904px] left-0 overflow-clip top-0 w-[1613px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Container21 />
      <Container41 />
      <Container46 />
    </div>
  );
}