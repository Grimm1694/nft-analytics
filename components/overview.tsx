import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const Overview: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 bg-[#111a22] md:flex-row md:px-20 md:justify-center pt-20">
      <NeonGradientCard className="bg-[#111a22] max-w-full flex-1 items-center justify-center text-center md:max-w-3xl transition-transform duration-300 hover:scale-105 group">
        <div className="bg-[#111a22] flex flex-col gap-2 rounded-xl border border-[#3c4753] p-4 h-full pt-[24px] md:p-6">
          <p className="text-white text-base font-medium leading-normal">Market Overview</p>
          <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
            <svg
              width="100%"
              height="148"
              viewBox="-3 0 478 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                fill="url(#paint0_linear_1131_5935)"
              />
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                stroke="#9dabb8"
                strokeWidth="3"
                strokeLinecap="round"
                className="transition-colors duration-300 group-hover:stroke-[#ff00ff]" // Change stroke color on card hover
              />
              <defs>
                <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#293038" />
                  <stop offset="1" stopColor="#293038" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-around">
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">May 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Aug 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Sep 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Oct 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Nov 2021</p>
            </div>
          </div>
        </div>
      </NeonGradientCard>
      <NeonGradientCard className="bg-[#111a22] max-w-full flex-1 items-center justify-center text-center md:max-w-3xl transition-transform duration-300 hover:scale-105 group">
        <div className="bg-[#111a22] flex flex-col gap-2 rounded-xl border border-[#3c4753] p-4 h-full pt-[24px] md:p-6">
          <p className="text-white text-base font-medium leading-normal">Volume of Art Blocks curated 2 over time</p>
          <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
            <svg
              width="100%"
              height="148"
              viewBox="-3 0 478 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                fill="url(#paint0_linear_1131_5935)"
              />
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                stroke="#9dabb8"
                strokeWidth="3"
                strokeLinecap="round"
                className="transition-colors duration-300 group-hover:stroke-[#ff00ff]" // Change stroke color on card hover
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1131_5935"
                  x1="236"
                  y1="1"
                  x2="236"
                  y2="149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#293038" />
                  <stop offset="1" stopColor="#293038" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-around">
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">May 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Aug 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Sep 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Oct 2021</p>
              <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">Nov 2021</p>
            </div>
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
};

export default Overview;