"use client";

import useCountDown from "@/hooks/useCountDown";
import { useEffect } from "react";

type Props = {
  hour: number;
  min: number;
  sec: number;
};

const AuctionEndCounter = ({ hour, min, sec }: Props) => {
  const [hours, minutes, seconds] = useCountDown({
    hour,
    min,
    sec,
  });

  return (
    <div
      className="font-bold font-tt-firs-neue bg-gradient-yellow
      bg-clip-text text-transparent flex text-center whitespace-nowrap"
    >
      <span className="min-w-9">{hours}</span>
      <span> : </span>
      <span className="min-w-9">{minutes}</span>
      <span> : </span>
      <span className="min-w-9">{seconds}</span>
    </div>
  );
};

export default AuctionEndCounter;
