"use client"
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#111a22] text-white p-4 border-b border-solid border-b-[#243647]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg text-white font-bold leading-tight tracking-[-0.015em]">NFT Forecast</h2>
        </div>
        <button
          className="block lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`hidden lg:flex lg:items-center lg:gap-8`}>
          <div className="flex flex-row lg:items-center lg:gap-8">
            <a className="text-sm font-medium leading-normal" href="#">Market Overview</a>
            <a className="text-sm font-medium leading-normal" href="#">Personalized Insights</a>
            <a className="text-sm font-medium leading-normal" href="#">Trending NFTs</a>
            <a className="text-sm font-medium leading-normal" href="#">Market Sentiment</a>
            <a className="text-sm font-medium leading-normal" href="#">Analytics Dashboard</a>
            <a className="text-sm font-medium leading-normal" href="#">Quick Actions</a>
          </div>
        </nav>
        <button
          className="hidden lg:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Connect Wallet</span>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-start mt-2 bg-[#111a22] p-4 rounded-md shadow-lg">
          <a className="text-sm font-medium leading-normal mb-2" href="#">Market Overview</a>
          <a className="text-sm font-medium leading-normal mb-2" href="#">Personalized Insights</a>
          <a className="text-sm font-medium leading-normal mb-2" href="#">Trending NFTs</a>
          <a className="text-sm font-medium leading-normal mb-2" href="#">Market Sentiment</a>
          <a className="text-sm font-medium leading-normal mb-2" href="#">Analytics Dashboard</a>
          <a className="text-sm font-medium leading-normal mb-2" href="#">Quick Actions</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;