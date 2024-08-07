import KeyMetrics from "@/components/keymetrics";
import NFTMarketSentiment from "@/components/marketsentiment";

import Overview from "@/components/overview";
import PortfolioOptimization from "@/components/portfolio";
import SearchNFT from "@/components/searchnft";
import TrendingNFTs from "@/components/trendingnft";
import { LumiNiftyDemo } from "@/components/whyus";


export default function Home() {
  return (
    <div>
      
      <SearchNFT />
      <Overview />
      <TrendingNFTs />
      <KeyMetrics />
      <LumiNiftyDemo />
      <PortfolioOptimization/>
      <NFTMarketSentiment />
      
    </div>
  );
}
