import React from 'react';

const KeyMetrics = () => {
  return (
    <>
    <div className='bg-[#111a22] pl-20 pr-20 pt-16'>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key Metrics</h2>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#344d65] hover:border-[#00FFF1]">
          <p className="text-white text-base font-medium leading-normal">Total NFT Sales</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">$1.5B</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#344d65] hover:border-[#00FFF1]">
          <p className="text-white text-base font-medium leading-normal">Average NFT Sale Price</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">$3,000</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#344d65] hover:border-[#00FFF1]">
          <p className="text-white text-base font-medium leading-normal">NFT Sales Volume</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">$100M</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#344d65] hover:border-[#00FFF1]">
          <p className="text-white text-base font-medium leading-normal">NFTs Sold</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">50,000</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#344d65] hover:border-[#00FFF1]">
          <p className="text-white text-base font-medium leading-normal">NFTs Listed</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">20,000</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default KeyMetrics;