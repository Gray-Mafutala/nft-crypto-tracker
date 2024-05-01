"use client";

import useCountDown from "@/hooks/useCountDown";

const AuctionEndCounter = () => {
  const [hours, minutes, seconds] = useCountDown({
    hour: 23,
    min: 43,
    sec: 56,
  });

  return (
    <div className="flex items-center gap-x-5 whitespace-nowrap">
      {/* hour */}
      <div className="flex flex-col">
        <span
          className="mt-3 mb-1 min-w-12 text-3xl font-tt-firs-neue font-medium bg-gradient-yellow
          bg-clip-text text-transparent"
        >
          {hours}{" "}
          <span className="ml-3 bg-gradient-yellow bg-clip-text text-transparent">
            :
          </span>{" "}
        </span>
        <span className="text-sm text-grey font-tt-firs-neue">Hour</span>
      </div>

      {/* min */}
      <div className="flex flex-col">
        <span
          className="mt-3 mb-1 min-w-12 text-3xl font-tt-firs-neue font-medium bg-gradient-yellow
          bg-clip-text text-transparent"
        >
          {minutes}{" "}
          <span className="ml-3 bg-gradient-yellow bg-clip-text text-transparent">
            :
          </span>
        </span>
        <span className="text-sm text-grey font-tt-firs-neue">Min</span>
      </div>

      {/* sec */}
      <div className="flex flex-col">
        <span
          className="mt-3 mb-1 min-w-12 text-3xl font-tt-firs-neue font-medium bg-gradient-yellow
          bg-clip-text text-transparent"
        >
          {seconds}
        </span>
        <span className="text-sm text-grey font-tt-firs-neue">Sec</span>
      </div>
    </div>
  );
};

export default AuctionEndCounter;
