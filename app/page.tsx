import KeyMetrics from "@/components/keymetrics";
import NFTMarketSentiment from "@/components/marketsentiment";
import Navbar from "@/components/nav";
import Overview from "@/components/overview";
import SearchNFT from "@/components/searchnft";
import TrendingNFTs from "@/components/trendingnft";
import { LumiNiftyDemo } from "@/components/whyus";


export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchNFT />
      <Overview />
      <TrendingNFTs />
      <KeyMetrics />
      <LumiNiftyDemo />
      <NFTMarketSentiment />
    </div>
  );
}
