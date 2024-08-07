import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { GlareCard } from "./ui/glarecard";

export async function LumiNiftyDemo() {
  return (
    <div className="h-full w-full pl-20 pr-20 pt-8 bg-[#111a22] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-start justify-center">
        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Why choose LumiNifty<span className="text-[#00FFF1]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">Illuminate Your NFT Journey</h2>
        </BoxReveal>

        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p className="font-semibold text-[#00FFF1]">
              AI-Driven Predictive Analytics:
            </p>
            <p>
              LumiNifty leverages advanced AI/ML models to provide real-time
              predictive analytics for NFT market trends. The platform analyzes
              historical sales data, market sentiment, and external factors to
              forecast future price movements and identify emerging trends.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p className="font-semibold text-[#00FFF1]">
              Personalized NFT Portfolio Optimization:
            </p>
            <p>
              LumiNifty offers personalized portfolio optimization tools that
              utilize AI to recommend adjustments based on individual user
              preferences, risk tolerance, and investment goals. The platform
              continuously monitors the market and user portfolios, providing
              actionable insights and recommendations for maximizing returns.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#00FFF1]">Explore</Button>
        </BoxReveal>
      </div>

      <div className="flex flex-col items-center justify-center">
        <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
          <h2 className="text-[2rem] font-semibold text-white">Integrations</h2>
        </BoxReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[1.5rem]">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full object-contain"
              src="/coinbase.png"
              alt="Coinbase Pay"
            />
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full object-contain"
              src="/safe3.png"
              alt="1inch"
            />
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full object-contain"
              src="/1inch.png"
              alt="Safe"
            />
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full object-contain"
              src="/logo.png"
              alt="WalletConnect"
            />
          </GlareCard>
        </div>
      </div>
    </div>
  );
}