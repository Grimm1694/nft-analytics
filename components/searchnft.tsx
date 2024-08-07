import React from 'react';

const SearchNFT: React.FC = () => {
  return (
    <div className="bg-[#111a22] flex flex-col items-center justify-center pt-[60px] px-4 md:px-20">
      <div
        className="flex min-h-full flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/pixabay.avif")',
          minHeight: '60vh', // Ensures the background covers the full viewport height
        }}
      >
        <h1
          className="text-white text-4xl font-black leading-tight tracking-[-0.033em] text-center md:text-5xl"
        >
          Search for NFTs, view predictions, and get personalized insights
        </h1>
        <label className="flex flex-col min-w-40 h-14 w-full max-w-[600px] md:h-16"> {/* Increased max-w */}
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#93adc8] flex border border-[#344d65] bg-[#1a2632] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="20px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-full placeholder:text-[#93adc8] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal md:text-base"
              value=""
            />
            <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#344d65] bg-[#1a2632] pr-[7px]">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] md:text-base"
              >
                <span className="truncate">Submit</span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SearchNFT;