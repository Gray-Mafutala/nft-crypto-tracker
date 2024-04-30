import Image, { StaticImageData } from "next/image";
import React from "react";

export enum MarqueeDirection {
  Left,
  Right,
}

type Props = {
  itemList: {
    title: string;
    logo: StaticImageData;
  }[];
  direction: MarqueeDirection;
};

const MarqueeList = ({ itemList, direction }: Props) => {
  return (
    <div
      className="flex-centered-section-1240 gap-x-20 marquee-box-sides-shadow
      overflow-hidden relative w-full select-none"
    >
      <ul
        className={
          direction === MarqueeDirection.Right
            ? `shrink-0 flex justify-around gap-x-20 min-w-full animate-marqueeRight`
            : `shrink-0 flex justify-around gap-x-20 min-w-full animate-marqueeLeft`
        }
      >
        {itemList.map(({ title, logo }) => (
          <li
            key={title}
            className="flex-[0_0_auto] flex justify-center items-center gap-x-2 
            bg-gradient-silver bg-clip-text text-transparent uppercase"
          >
            <Image
              src={logo}
              alt={title}
              className="max-w-16 w-full h-16 object-cover rounded-md"
            />
            <span className="text-xl font-bold font-tt-firs-neue">{title}</span>
          </li>
        ))}
      </ul>

      <ul
        className={
          direction === MarqueeDirection.Right
            ? `shrink-0 flex justify-around gap-x-20 min-w-full animate-marqueeRight`
            : `shrink-0 flex justify-around gap-x-20 min-w-full animate-marqueeLeft`
        }
      >
        {itemList.map(({ title, logo }) => (
          <li
            key={title}
            className="flex-[0_0_auto] flex justify-center items-center gap-x-2 
            bg-gradient-silver bg-clip-text text-transparent uppercase"
          >
            <Image
              src={logo}
              alt={title}
              className="max-w-16 w-full h-16 object-cover rounded-md"
            />
            <span className="text-xl font-bold font-tt-firs-neue">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeList;
