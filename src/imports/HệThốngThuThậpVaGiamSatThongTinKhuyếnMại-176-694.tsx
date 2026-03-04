import svgPaths from "./svg-3snkatqssp";

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
    <div className="bg-white content-stretch flex flex-col h-[85.333px] items-start pb-[1.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.333px] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-3.67px] tracking-[-0.75px]">Chuẩn hóa Dữ liệu Excel</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Chuyển đổi và xuất dữ liệu Excel có cấu trúc</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[310.625px]" data-name="Container">
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
    <div className="h-[20px] relative shrink-0 w-[76.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Lịch sử Xuất</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[42.667px] relative rounded-[14px] shrink-0 w-[135.583px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[17.333px] pr-[1.333px] py-[1.333px] relative size-full">
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
    <div className="bg-gradient-to-r from-[#155dfc] h-[40px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#4f39f6] w-[153.021px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[89.5px] text-[14px] text-center text-white top-[8px]">Chuẩn hóa Mới</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[300.604px]" data-name="Container">
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
    <div className="absolute bg-white border-[#d1d5dc] border-[1.333px] border-solid h-[42.667px] left-[1438.06px] rounded-[14px] top-0 w-[97.938px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[60.5px] text-[#364153] text-[14px] text-center top-[8px]">Bộ lọc</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42.667px] left-0 rounded-[14px] top-0 w-[1426.063px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)]">Tìm kiếm cấu hình chuẩn hóa...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[13.33px]" data-name="Icon">
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
    <div className="absolute h-[42.667px] left-0 top-0 w-[1426.063px]" data-name="Container">
      <TextInput />
      <Icon3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[190.667px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[192px] items-start left-0 pb-[1.333px] px-[184px] top-0 w-[1968px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.333px] border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-0 px-[24px] py-[14px] top-0 w-[301.896px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] tracking-[0.6px] uppercase whitespace-pre-wrap">Tên</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[301.9px] px-[24px] py-[14px] top-0 w-[231.792px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] tracking-[0.6px] uppercase whitespace-pre-wrap">Loại Dữ liệu</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[533.69px] px-[24px] py-[14px] top-0 w-[208.688px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">Phiên bản Đang dùng</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[742.38px] px-[24px] py-[14px] top-0 w-[144.458px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">Số Phiên bản</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[886.83px] px-[24px] py-[14px] top-0 w-[153.542px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">Lần Chạy Cuối</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[1040.38px] px-[24px] py-[14px] top-0 w-[144.833px]" data-name="Header Cell">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">Cập nhật Bởi</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[1185.21px] px-[24px] py-[14px] top-0 w-[136.646px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] tracking-[0.6px] uppercase whitespace-pre-wrap">Trạng thái</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute content-stretch flex h-[44.667px] items-start left-[1321.85px] px-[24px] py-[14px] top-0 w-[211.479px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] text-right tracking-[0.6px] uppercase whitespace-pre-wrap">Thao tác</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[1.333px] border-solid h-[44.667px] left-0 top-0 w-[1533.333px]" data-name="Table Row">
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
    <div className="absolute h-[44.667px] left-0 top-0 w-[1533.333px]" data-name="Table Header">
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
    <div className="h-[20px] relative shrink-0 w-[159.667px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Chuẩn hóa Giá Sản phẩm</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[16.67px] w-[253.896px]" data-name="Container">
      <Container13 />
      <Text1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[65.333px] left-0 top-0 w-[301.896px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[65.333px] left-[301.9px] top-0 w-[231.792px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Dữ liệu Thương mại Điện tử</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#eff6ff] border-[#bedbff] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[43.146px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#1447e6] text-[12px] top-[3px]">v2.1</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[65.333px] left-[533.69px] top-0 w-[208.688px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[65.333px] left-[742.38px] top-0 w-[144.458px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px] w-[74px] whitespace-pre-wrap">5 phiên bản</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[65.333px] left-[886.83px] top-0 w-[153.542px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">2 giờ trước</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[65.333px] left-[1040.38px] top-0 w-[144.833px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Nguyễn Văn A</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#ecfdf5] border-[#a4f4cf] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[81.271px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#007a55] text-[12px] top-[3px]">Hoạt động</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[65.333px] left-[1185.21px] top-0 w-[136.646px]" data-name="Table Cell">
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
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.67px] w-[163.479px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[65.333px] left-[1321.85px] top-0 w-[211.479px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.333px] border-solid h-[65.333px] left-0 top-0 w-[1533.333px]" data-name="Table Row">
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
    <div className="h-[20px] relative shrink-0 w-[186.542px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Làm sạch Dữ liệu Khuyến mãi</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[16.67px] w-[253.896px]" data-name="Container">
      <Container16 />
      <Text4 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[65.333px] left-0 top-0 w-[301.896px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[65.333px] left-[301.9px] top-0 w-[231.792px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Dữ liệu Marketing</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#eff6ff] border-[#bedbff] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[43.146px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#1447e6] text-[12px] top-[3px]">v1.3</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[65.333px] left-[533.69px] top-0 w-[208.688px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[65.333px] left-[742.38px] top-0 w-[144.458px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px] w-[74px] whitespace-pre-wrap">3 phiên bản</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[65.333px] left-[886.83px] top-0 w-[153.542px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">1 ngày trước</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[65.333px] left-[1040.38px] top-0 w-[144.833px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Trần Thị B</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#ecfdf5] border-[#a4f4cf] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[81.271px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#007a55] text-[12px] top-[3px]">Hoạt động</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[65.333px] left-[1185.21px] top-0 w-[136.646px]" data-name="Table Cell">
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
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.67px] w-[163.479px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[65.333px] left-[1321.85px] top-0 w-[211.479px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.333px] border-solid h-[65.333px] left-0 top-[65.33px] w-[1533.333px]" data-name="Table Row">
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
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[193.583px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Chuẩn hóa Địa chỉ Khách hàng</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[16.67px] w-[253.896px]" data-name="Container">
      <Container19 />
      <Text7 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[64.667px] left-0 top-0 w-[301.896px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[64.667px] left-[301.9px] top-0 w-[231.792px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Dữ liệu Khách hàng</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#eff6ff] border-[#bedbff] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[43.146px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#1447e6] text-[12px] top-[3px]">v1.0</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[64.667px] left-[533.69px] top-0 w-[208.688px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[64.667px] left-[742.38px] top-0 w-[144.458px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px] w-[74px] whitespace-pre-wrap">1 phiên bản</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[64.667px] left-[886.83px] top-0 w-[153.542px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Chưa chạy</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[64.667px] left-[1040.38px] top-0 w-[144.833px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[21.67px]">Lê Văn C</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-[1.333px] border-solid h-[26.667px] left-[24px] rounded-[10px] top-[19.33px] w-[52.354px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#364153] text-[12px] top-[3px]">Nháp</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[64.667px] left-[1185.21px] top-0 w-[136.646px]" data-name="Table Cell">
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
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.67px] w-[163.479px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[64.667px] left-[1321.85px] top-0 w-[211.479px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[64.667px] left-0 top-[130.67px] w-[1533.333px]" data-name="Table Row">
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
    <div className="absolute h-[195.333px] left-0 top-[44.67px] w-[1533.333px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[240px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[242.667px] left-[216px] rounded-[14px] top-[224px] w-[1536px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.333px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] h-[1221.333px] relative shrink-0 w-[1968px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[1221.333px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pl-[280px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function PQ() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1306.667px] items-start relative shrink-0 w-full" data-name="pQ">
      <Container />
      <Container2 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1221.333px] items-start left-0 top-[64px] w-[2248px]" data-name="Body">
      <PQ />
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#364153] text-[13px] whitespace-pre-wrap">Tổng quan</p>
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
    <div className="h-[62.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[17.333px] py-[1.333px] relative size-full">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#155dfc] text-[13px] whitespace-pre-wrap">Chuẩn hóa Excel</p>
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
    <div className="bg-[#eff6ff] h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#101828] text-[13px] whitespace-pre-wrap">Chuẩn hóa API</p>
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
    <div className="h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[121.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[149.833px] items-start relative shrink-0 w-full" data-name="Container">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#101828] text-[13px] whitespace-pre-wrap">Nguồn Dữ liệu</p>
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
    <div className="h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#101828] text-[13px] whitespace-pre-wrap">Quy tắc Chuyển đổi</p>
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
    <div className="h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#101828] text-[13px] whitespace-pre-wrap">Chất lượng Dữ liệu</p>
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
    <div className="h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
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
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[19.5px] min-h-px min-w-px relative text-[#101828] text-[13px] whitespace-pre-wrap">Quản lý API</p>
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
    <div className="h-[58.667px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13.333px] py-[1.333px] relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[246.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[275.167px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container32 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[583.667px] relative shrink-0 w-full" data-name="Container">
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
    <div className="absolute bg-white h-[1157.333px] left-0 top-[149.33px] w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pr-[1.333px] relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[1.333px] border-solid inset-0 pointer-events-none" />
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.021px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-1.67px] tracking-[-0.45px]">SMART SYSTEM SSO v1.9</p>
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
    <div className="h-[20px] relative shrink-0 w-[61.979px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.167px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.146px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[40px] relative shrink-0 w-[433.958px]" data-name="Container">
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
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.333px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[62.667px] relative shrink-0 w-full" data-name="Container">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-0 pb-[1.333px] px-[324px] top-0 w-[2248px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.333px] border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <Body />
      <Container21 />
      <Container41 />
    </div>
  );
}