"use client"
import React, { useEffect, useRef, useState } from 'react';
import TypingAnimation from "@/components/magicui/typing-animation";

const TrendingNFTs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false); // Ref to track if animation has run
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true; // Mark as animated
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const nfts = [
    {
      name: 'Loot (for Adventurers)',
      price: '$5,000',
      change: '+20%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/76fcb794-3a9c-43ec-82e7-3176917604f5.png',
    },
    {
      name: 'Bored Ape Yacht Club',
      price: '$20,000',
      change: '+30%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/275c77f2-3a46-4909-9489-c3da53dc5bc7.png',
    },
    {
      name: 'World of Women',
      price: '$3,000',
      change: '-10%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/442d43ff-5573-4e5d-9576-22289d9194f5.png',
    },
    {
      name: 'The Sevens',
      price: '$1,000',
      change: '+15%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/864e9ff1-7545-45ab-93d3-b878efc58ffb.png',
    },
    {
      name: 'Gutter Cat Gang',
      price: '$700',
      change: '-5%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/7becc66c-f5d6-481d-83dd-60efb8593d62.png',
    },
    {
      name: 'Fidenza',
      price: '$8,000',
      change: '+25%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/fba72493-49ad-43f0-bcb4-a9cdd45e36b6.png',
    },
    {
      name: 'Meebits',
      price: '$10,000',
      change: '-30%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/49fcc8f5-f7e8-42d7-a1e2-9bd537e40871.png',
    },
    {
      name: 'Cool Cats',
      price: '$2,000',
      change: '+10%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/29c82dc3-8861-4b3a-9442-800b1322a75b.png',
    },
    {
      name: 'Mutant Ape Yacht Club',
      price: '$6,000',
      change: '-25%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/ce2fc5dc-4ce3-4672-abd5-7778f191a4a9.png',
    },
    {
      name: 'Art Blocks',
      price: '$4,000',
      change: '+5%',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/caa35464-1c91-48d5-b3fe-2b256914dedb.png',
    },
  ];

  return (
    <div className="bg-[#111a22] px-4 py-6 pr-20 pl-20">
      <div ref={ref} className="text-center">
        <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Check out some of
        </p>
        {isVisible && (
          <TypingAnimation
            className="text-[#00FFF1] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3"
            text="Trending NFTs"
            duration={200}
          />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {nfts.map((nft, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url(${nft.imageUrl})` }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">{nft.name}</p>
              <p className="text-[#93adc8] text-sm font-normal leading-normal">{nft.price}</p>
              <p className="text-[#93adc8] text-sm font-normal leading-normal">{nft.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNFTs;