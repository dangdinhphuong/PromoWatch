import svgPaths from "@/imports/svg-5fdpxdj291";
import { imgGroup } from "@/imports/svg-h35qf";

interface PageHeaderProps {
  onNavigate?: (page: "overview" | "promotions" | "discount-codes") => void;
  onScrollToSection?: (section: "overview" | "platform") => void;
}

export function PageHeader({ onNavigate, onScrollToSection }: PageHeaderProps) {
  const handleIntroClick = () => {
    onNavigate?.("overview");
    setTimeout(() => onScrollToSection?.("overview"), 100);
  };

  const handlePlatformClick = () => {
    onNavigate?.("overview");
    setTimeout(() => onScrollToSection?.("platform"), 100);
  };

  return (
    <div className="bg-white h-[73px] relative w-full border-b border-gray-200 shadow-sm">
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[32px] relative size-full">
        <div className="content-stretch flex h-[40px] items-center justify-between relative w-full">
          {/* Left side - Logo and Title */}
          <div className="h-[40px] flex gap-[32px] items-center">
            {/* Logo and System Name */}
            <div className="h-[40px] flex gap-[12px] items-center cursor-pointer" onClick={() => onNavigate?.("overview")}>
              <div className="bg-[#155dfc] rounded-[10px] size-[40px] flex items-center justify-center">
                <p className="font-bold leading-[20px] text-[14px] text-white">SSO</p>
              </div>
              <p className="font-bold leading-[28px] text-[#101828] text-[20px] tracking-[-0.5px]">
                SMART SYSTEM SSO v1.9
              </p>
            </div>

            {/* Navigation */}
            <div className="h-[20px] flex gap-[24px] items-center">
              <button 
                className="font-normal leading-[20px] text-[#364153] text-[14px] text-center hover:text-[#155dfc] transition-colors"
                onClick={handleIntroClick}
              >
                Giới thiệu
              </button>
              <button 
                className="font-normal leading-[20px] text-[#364153] text-[14px] text-center hover:text-[#155dfc] transition-colors"
                onClick={handlePlatformClick}
              >
                Nền tảng
              </button>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="h-[40px] flex gap-[16px] items-center">
            <button className="relative rounded-[10px] size-[36px] border border-[#e5e7eb] hover:bg-gray-50 transition-colors flex items-center justify-center p-px">
              <div className="relative size-[16px]">
                <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-inherit size-full">
                  <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.333px_-1.333px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgGroup}')` }}>
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                        <g>
                          <path d={svgPaths.p29e83a00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1cb44d00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M0.666665 7.33333H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}