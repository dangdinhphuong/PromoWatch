import svgPaths from "./svg-gzasujv7n1";

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">SSO</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] tracking-[-0.5px]">SMART SYSTEM SSO v1.9</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container4 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Giới thiệu</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Nền tảng</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[141.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[453.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.55%]" data-name="Group">
      <div className="absolute inset-[4.55%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6562 14.6562">
            <path d={svgPaths.p3c082000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.55%_31.82%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66189 14.6562">
            <path d={svgPaths.p1902cd20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[4.55%] right-[4.55%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6562 1.33238">
            <path d="M0.66619 0.66619H13.99" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33238" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[14.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[14.656px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] overflow-clip pt-[0.672px] px-[0.672px] size-[16px] top-[9px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute border border-[#e5e7eb] border-solid left-0 rounded-[10px] size-[36px] top-[2px]" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[32px] top-[16px] w-[1407px]" data-name="Container">
      <Container2 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[73px] items-start pb-px relative shrink-0 w-full" data-name="PageHeader">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Trung tâm Khuyến mãi</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Quản lý mã giảm giá</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] px-[32px] relative size-full">
        <Heading />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[85px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[256px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] uppercase whitespace-pre-wrap">Platform</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Tất cả</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Lazada</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Tiki</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">ShopeeFood</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Sendo</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[14px] top-0 w-0 whitespace-pre-wrap">Nguyên Kim</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[256px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pl-[-42px] pr-[298px] pt-[183px] relative size-full">
        <Option />
        <Option1 />
        <Option2 />
        <Option3 />
        <Option4 />
        <Option5 />
        <Option6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[74px] relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Label />
        <Dropdown />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1107px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] uppercase whitespace-pre-wrap">Danh mục</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#00a63e] h-[42px] left-0 rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[104.984px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[52px] text-[14px] text-center text-white top-[9px]">Toàn Sản</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[112.98px] rounded-[10px] top-0 w-[142.172px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[71px] text-[#364153] text-[14px] text-center top-[9px]">Shopee Choice</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[263.16px] rounded-[10px] top-0 w-[130.031px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[65.5px] text-[#364153] text-[14px] text-center top-[9px]">Voucher Xtra</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[401.19px] rounded-[10px] top-0 w-[136.172px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[68px] text-[#364153] text-[14px] text-center top-[9px]">Shopee Video</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[545.36px] rounded-[10px] top-0 w-[129.266px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[65.5px] text-[#364153] text-[14px] text-center top-[9px]">Shop nổi bật</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[682.63px] rounded-[10px] top-0 w-[126.859px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63px] text-[#364153] text-[14px] text-center top-[9px]">Shopee Mall</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[817.48px] rounded-[10px] top-0 w-[98.047px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[49px] text-[#364153] text-[14px] text-center top-[9px]">Quốc tế</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[42px] left-[923.53px] rounded-[10px] top-0 w-[106.703px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[53px] text-[#364153] text-[14px] text-center top-[9px]">Đời Sống</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1107px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[74px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Label1 />
        <Container15 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] h-[74px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[110px] items-start left-[24px] pb-px pt-[18px] px-[18px] rounded-[14px] top-[24px] w-[1423px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Container12 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">25%</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">100.000đ</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[213px] whitespace-pre-wrap">Mã METAPAR5JAND20100G giảm 25% tối đa 200000 VND cho đơn hàng từ 100000 VND. Số lượng có hạn. HSD: 1 ngày kể từ khi nhận được mã. Lưu ý: Voucher chỉ áp dụng cho các đơn hàng mua từ chương trình Tiếp thị liên kết của Shopee và sẽ không được hoàn lại sau khi đã hết hiệu lực hoặc hết lượt sử dụng trong bất kỳ trường hợp nào.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container20 />
      <Container21 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.17px] text-[12px] text-center text-white top-[-2px]">Toàn Sàn</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container23 />
      <Paragraph5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3621e000} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon1 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon2 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon3 />
      <Paragraph6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container18 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">20%</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">150.000đ</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[211px] whitespace-pre-wrap">Chỉ áp dụng cho một số sản phẩm nhất định. Mã JAN2045150C1FEB giảm 20% tối đa 45K cho đơn hàng hợp lệ từ 150K trên ứng dụng Shopee. HSD: 28/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[30px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.78px] text-[12px] text-center text-white top-[-2px] w-[54px] whitespace-pre-wrap">Xử Lý Bởi Shopee</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container32 />
      <Paragraph9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container28 />
      <Container31 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p16f07900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon4 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon5 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon6 />
      <Paragraph10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container27 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">20%</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">100.000đ</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[211px] whitespace-pre-wrap">Chỉ áp dụng cho một số sản phẩm nhất định. Mã JAN2040100C1FEB giảm 20% tối đa 40K cho đơn hàng hợp lệ từ 100K trên ứng dụng Shopee. HSD: 28/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container38 />
      <Container39 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text18 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[30px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.78px] text-[12px] text-center text-white top-[-2px] w-[54px] whitespace-pre-wrap">Xử Lý Bởi Shopee</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container41 />
      <Paragraph13 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container37 />
      <Container40 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1da35dc0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon7 />
        <Text19 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon8 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon9 />
      <Paragraph14 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container36 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">30%</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[45.359px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">60.000đ</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[211px] whitespace-pre-wrap">Chỉ áp dụng cho một số sản phẩm nhất định. Mã JAN302060C1FEB giảm 30% tối đa 20K cho đơn hàng hợp lệ từ 60K trên ứng dụng Shopee. HSD: 28/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container47 />
      <Container48 />
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text25 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[30px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.78px] text-[12px] text-center text-white top-[-2px] w-[54px] whitespace-pre-wrap">Xử Lý Bởi Shopee</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container50 />
      <Paragraph17 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1da35dc0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon10 />
        <Text26 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon11 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon12 />
      <Paragraph18 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container45 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">12%</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[62.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">2.000.000đ</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[213px] whitespace-pre-wrap">Mã VCXDPBHH0201A giảm 12% tối đa 1 Triệu cho đơn hàng hợp lệ từ 2 Triệu từ shop Voucher Xtra trên ứng dụng Shopee. HSD: 10/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container56 />
      <Container57 />
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text32 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.92px] text-[12px] text-center text-white top-[-2px]">Voucher Xtra</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container59 />
      <Paragraph21 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container55 />
      <Container58 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1658d2c0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon13 />
        <Text33 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon14 />
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 10/02</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon15 />
      <Paragraph22 />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container54 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">15%</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[45.359px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">50.000đ</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text37 />
      <Text38 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[211px] whitespace-pre-wrap">Mã VCXDPBCBL0201A giảm 15% tối đa 40K cho đơn hàng hợp lệ từ 50K từ shop Voucher Xtra thuộc ngành hàng Quốc tế trên ứng dụng Shopee. HSD: 10/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text39 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.92px] text-[12px] text-center text-white top-[-2px]">Voucher Xtra</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container68 />
      <Paragraph25 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb43a980} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon16 />
        <Text40 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon17 />
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 10/02</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon18 />
      <Paragraph26 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container63 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">18%</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">100.000đ</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[212px] whitespace-pre-wrap">Mã giảm 18% tối đa 100000Đ cho đơn hàng tối thiểu 100000Đ. Áp dụng trên ứng dụng Shopee cho một số sản phẩm tham gia chương trình. Số lượng có hạn. Hạn sử dụng: 23:59 phút ngày 7/2/2026. Lưu ý: Voucher sẽ không được hoàn lại sau khi đã hết hiệu lực hoặc hết lượt sử dụng trong bất kỳ trường hợp nào.</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container74 />
      <Container75 />
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text46 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.64px] text-[12px] text-center text-white top-[-2px]">Shopee Video</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container77 />
      <Paragraph29 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container73 />
      <Container76 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon19 />
        <Text47 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon20 />
          <Text48 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button23 />
      <Button24 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 07/02</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon21 />
      <Paragraph30 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container72 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">10%</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text49 />
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[62.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">1.000.000đ</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text51 />
      <Text52 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[201px] whitespace-pre-wrap">Mã áp dụng trên App cho một số sản phẩm tham gia chương trình. Mã ELHAFM1A giảm 10% tối đa 3000000 cho đơn từ 1000000. HSD: 28/02/2026 23:59. Số lượng có hạn!</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container83 />
      <Container84 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">📱</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text53 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.31px] text-[12px] text-center text-white top-[-2px]">Điện Tử</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container86 />
      <Paragraph33 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container82 />
      <Container85 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon22 />
        <Text54 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon23 />
          <Text55 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon24 />
      <Paragraph34 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container81 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">10%</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text56 />
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">100.000đ</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[210px] whitespace-pre-wrap">Mã áp dụng trên App cho một số sản phẩm tham gia chương trình. Mã ELHAFM2A giảm 10% tối đa 300000 cho đơn từ 100000. HSD: 28/02/2026 23:59. Số lượng có hạn!</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container92 />
      <Container93 />
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">📱</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text60 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.31px] text-[12px] text-center text-white top-[-2px]">Điện Tử</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container95 />
      <Paragraph37 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container91 />
      <Container94 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1658d2c0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon25 />
        <Text61 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon26 />
          <Text62 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon27 />
      <Paragraph38 />
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[3] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container90 />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">20%</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text63 />
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">100.000đ</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text65 />
      <Text66 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[206px] whitespace-pre-wrap">Chỉ áp dụng cho một số sản phẩm nhất định. Mã CHOICE2050100D1FEB giảm 20% tối đa 50K cho đơn hàng hợp lệ từ 100K trên ứng dụng Shopee. HSD: 28/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container101 />
      <Container102 />
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text67 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.63px] text-[12px] text-center text-white top-[-2px]">Shopee Choice</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container104 />
      <Paragraph41 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container100 />
      <Container103 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb43a980} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon28 />
        <Text68 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon29 />
          <Text69 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button29 />
      <Button30 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon30 />
      <Paragraph42 />
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[3] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container99 />
      <Container105 />
      <Container106 />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[48.422px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">40%</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text70 />
      <Text71 />
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[45.359px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">40.000đ</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text72 />
      <Text73 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[206px] whitespace-pre-wrap">Chỉ áp dụng cho một số sản phẩm nhất định. Mã CHOICE402040D1FEB giảm 40% tối đa 20K cho đơn hàng hợp lệ từ 40K trên ứng dụng Shopee. HSD: 28/02/2026 23:59. Số lượng có hạn.</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container110 />
      <Container111 />
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">🛍️</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text74 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.63px] text-[12px] text-center text-white top-[-2px]">Shopee Choice</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container113 />
      <Paragraph45 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container109 />
      <Container112 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text75() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon31 />
        <Text75 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon32 />
          <Text76 />
        </div>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button31 />
      <Button32 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon33 />
      <Paragraph46 />
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[3] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container108 />
      <Container114 />
      <Container115 />
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[11px] w-[36.016px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#364153] text-[14px] whitespace-pre-wrap">Giảm</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[36.02px] top-0 w-[34.625px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f54900] text-[24px]">8%</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[12px] w-[212.75px]" data-name="Container">
      <Text77 />
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[70.234px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a5565] text-[12px]">ĐH tối thiểu:</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[70.23px] top-[5px] w-[52.266px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px]">500.000đ</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[50px] w-[212.75px]" data-name="Container">
      <Text79 />
      <Text80 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[58.5px] left-[12px] overflow-clip top-[82px] w-[212.75px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-2px] w-[200px] whitespace-pre-wrap">Mã ELAPNP2 giảm 8% tối đa 1500000 cho đơn từ 500000. HSD: 28/02/2026 23:59. Số lượng có hạn!</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12px] top-[148.5px] w-[212.75px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#f54900] text-[14px] whitespace-pre-wrap">Shopee</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[200.5px] left-[105px] top-0 w-[236.75px]" data-name="Container">
      <Container119 />
      <Container120 />
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#0a0a0a] text-[24px] whitespace-pre-wrap">📱</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex items-center justify-center left-[24.5px] pr-[0.016px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[12px]" data-name="Container">
      <Text81 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[76px] w-[89px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[15px] left-[44.31px] text-[12px] text-center text-white top-[-2px]">Điện Tử</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[105px]" data-name="Container" style={{ backgroundImage: "linear-gradient(106.707deg, rgb(0, 166, 62) 7.7758%, rgb(0, 130, 54) 92.224%)" }}>
      <Container122 />
      <Paragraph49 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[200.5px] left-px overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-px w-[341.75px]" data-name="Container">
      <Container118 />
      <Container121 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center">Chi tiết</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-px relative size-full">
        <Icon34 />
        <Text82 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_1422)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_1422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white">Copy mã</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-[#00a63e] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pr-[0.016px] relative size-full">
          <Icon35 />
          <Text83 />
        </div>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53px] items-start left-px pt-[9px] px-[8px] top-[201.5px] w-[341.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button33 />
      <Button34 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_61_1410)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_1410">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#00a63e] text-[12px] top-[-1px] w-[65px] whitespace-pre-wrap">HSD: 28/02</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[28px] items-center left-[9px] px-[12px] py-[2px] rounded-[33554400px] top-[182.5px] w-[104.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon36 />
      <Paragraph50 />
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[3] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container117 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(3,_minmax(0,_1fr))] h-[798.5px] left-[24px] top-[150px] w-[1423px]" data-name="Container">
      <Container17 />
      <Container26 />
      <Container35 />
      <Container44 />
      <Container53 />
      <Container62 />
      <Container71 />
      <Container80 />
      <Container89 />
      <Container98 />
      <Container107 />
      <Container116 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#00a63e] text-[14px] text-center">Xem thêm</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[24px] p-[2px] rounded-[10px] top-[972.5px] w-[1423px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#00a63e] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon37 />
      <Text84 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_61_1393)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_61_1393">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1c398e] text-[14px] whitespace-pre-wrap">ℹ Thông tin</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#193cb8] text-[14px]">Các mã giảm giá được tự động thu thập từ nhiều nguồn khác nhau để phục vụ công tác phân tích và hướng dẫn thương mại điện tử hợp pháp và bảo vệ người tiêu dùng khuyến mãi.</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[32px] top-0 w-[1124.453px]" data-name="Container">
      <Heading1 />
      <Paragraph51 />
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Icon38 />
      <Container127 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[76px] items-start left-[24px] pl-[20px] pr-[16px] pt-[16px] rounded-[10px] top-[1044.5px] w-[1423px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container126 />
    </div>
  );
}

function DiscountCodesPage() {
  return (
    <div className="bg-[#f9fafb] h-[1152.5px] relative shrink-0 w-full" data-name="DiscountCodesPage">
      <Container11 />
      <Container16 />
      <Button35 />
      <Container125 />
    </div>
  );
}

function PageLayout() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1310.5px] items-start relative shrink-0 w-full" data-name="PageLayout">
      <PageHeader />
      <Container9 />
      <DiscountCodesPage />
    </div>
  );
}

function PY() {
  return (
    <div className="absolute content-stretch flex flex-col h-[896px] items-start left-0 top-0 w-[1471px]" data-name="pY">
      <Section />
      <PageLayout />
    </div>
  );
}

function Toast() {
  return (
    <div className="absolute bg-[#ecfdf3] h-[50.825px] left-[8.9px] rounded-[8px] top-[15.34px] w-[338.2px]" data-name="Toast">
      <div aria-hidden="true" className="absolute border border-[#bffcd9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container129() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[176.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#008a2e] text-[13px] top-[-1px]">Đã tải 15 danh mục từ Shopee</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[39px] top-[16px] w-[176.734px]" data-name="Container">
      <Container129 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #008A2E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex items-center left-[13px] pl-[-1px] size-[16px] top-[17.75px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Toast1() {
  return (
    <div className="absolute bg-[#ecfdf3] border border-[#bffcd9] border-solid h-[53.5px] left-0 rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[356px]" data-name="Toast">
      <Container128 />
      <Container130 />
    </div>
  );
}

function NumberedList() {
  return (
    <div className="absolute h-0 left-[1091px] top-[439px] w-[356px]" data-name="Numbered List">
      <Toast />
      <Toast1 />
    </div>
  );
}

export default function HThngThuThpVaGiamSatThongTinKhuynMi() {
  return (
    <div className="bg-white relative size-full" data-name="Hệ thống thu thập và giám sát thông tin khuyến mại">
      <PY />
      <NumberedList />
    </div>
  );
}