import React from 'react';

const PortfolioOptimization: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10 bg-[#111a22] pt-[100px]">
      <div className="md:w-1/2 pr-6 pl-12">
        <h1 className="text-3xl font-bold text-white mb-4">Personalized NFT Portfolio Optimization</h1>
        <p className="text-white mb-6">
          LumiNifty provides a cutting-edge personalized NFT portfolio optimization tool designed to enhance your investment strategy. By leveraging advanced AI algorithms, this feature analyzes your NFT portfolio, taking into account your individual preferences, risk tolerance, and investment goals. It continuously monitors market trends and your portfolio's performance, offering actionable insights and recommendations to maximize your returns and minimize risks.
        </p>
        <div className="border border-solid border-[#243647] p-4 bg-[#111a22] shadow rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Highlights</h2>
          <ul className="list-none space-y-4 text-white">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              Utilizes AI to create and recommend investment strategies that align with your unique risk tolerance and financial goals, ensuring a personalized approach to NFT investments.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              Continuously tracks market conditions and trends, providing timely recommendations to adjust your portfolio for optimal performance based on the latest data.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              Conducts ongoing risk assessments of your portfolio, helping you balance potential returns against risks and make informed decisions.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              Delivers clear and actionable insights, including suggestions on buying, selling, or holding specific NFTs to enhance portfolio performance and capitalize on market opportunities.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center bg-[#111a22] ">
        <img src="/nansen.png" alt="Person" className="rounded-lg  w-full h-auto" style={{ maxHeight: '600px' }} />
      </div>
    </div>
  );
};

export default PortfolioOptimization;