"use client";

import useCountDown from "@/hooks/useCountDown";

type Props = {
  hour?: number;
  min?: number;
  sec?: number;
};

const getRandomInt = (min: number, max: number): number => {
  const rand = Math.random();
  return Math.floor(rand * (max - min + 1)) + min;
};

const AuctionEndCounter = ({ hour, min, sec }: Props) => {
  const randomHour = getRandomInt(10, 23);
  const randomMin = getRandomInt(1, 59);
  const randomSec = getRandomInt(1, 59);

  const hourToAssign = hour !== undefined ? hour : randomHour;
  const minToAssign = min !== undefined ? min : randomMin;
  const secToAssign = sec !== undefined ? sec : randomSec;

  const [hours, minutes, seconds] = useCountDown({
    hour: hourToAssign,
    min: minToAssign,
    sec: secToAssign,
  });

  return (
    <div
      className="font-bold font-tt-firs-neue bg-gradient-yellow
      bg-clip-text text-transparent flex text-center"
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
