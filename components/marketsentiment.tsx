import React from 'react';

const NFTMarketSentiment = () => {
  return (
    <div className="flex min-w-72 flex-1 flex-col gap-2 bg-[#111a22] pl-20 pr-20 pt-16">
      <p className="text-white text-base font-medium leading-normal">NFT Market Sentiment (7 days)</p>
      <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '20%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 12</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '70%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 13</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '10%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 14</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '40%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 15</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '20%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 16</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '10%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 17</p>
        <div className="border-[#93adc8] bg-[#243647] border-t-2 w-full" style={{ height: '90%' }}></div>
        <p className="text-[#93adc8] text-[13px] font-bold leading-normal tracking-[0.015em]">July 18</p>
      </div>
    </div>
  );
};

export default NFTMarketSentiment;