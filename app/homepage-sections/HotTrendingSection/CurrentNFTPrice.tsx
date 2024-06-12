"use client";

import useSlideChangeNFTPricesStore from "@/store/slideChangeNFTPricesStore";
import React from "react";

type Props = {
  ethPriceUsd: number;
};

const CurrentNFTPrice = ({ ethPriceUsd }: Props) => {
  const currentNFTPriceDisplayed = useSlideChangeNFTPricesStore(
    (state) => state.currentPrice
  );

  return (
    <div
      className="tablet:w-1/2 laptop:w-auto flex flex-col tablet:border-r 
      border-grey/20 tablet:pr-9 pr-0 items-center tablet:items-start
      whitespace-nowrap min-w-48"
    >
      <span
        className="uppercase font-techno-chain bg-gradient-silver
        bg-clip-text text-transparent"
      >
        Current Bid
      </span>
      <span className="mt-3 mb-1 text-3xl font-medium font-tt-firs-neue">
        {currentNFTPriceDisplayed} ETH
      </span>
      <span
        className="text-lg text-grey font-medium font-tt-firs-neue 
        -tracking-wide"
      >
        ${(currentNFTPriceDisplayed * ethPriceUsd).toFixed(2)}
      </span>
    </div>
  );
};

export default CurrentNFTPrice;
