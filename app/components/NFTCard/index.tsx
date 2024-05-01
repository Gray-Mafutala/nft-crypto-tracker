import Image from "next/image";
import YellowButton, {
  YellowButtonPaddings,
  YellowButtonVariants,
} from "@/app/ui/YellowButton";

import AuctionEndCounter from "./AuctionEndCounter";
import { NFTChainsName } from "@/app/homepage-sections/ExploreOurCollectionsSection";
import useSWR from "swr";
import { EthPriceType } from "@/app/homepage-sections/HotTrendingSection";

type Props = {
  name: string;
  imgSrc: string;
  collectionName: string;
  lastPrice: number;
  chain: NFTChainsName;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const NFTCard = ({ name, imgSrc, collectionName, lastPrice, chain }: Props) => {
  const {
    data: ethPriceUsd,
    isLoading,
    error,
  } = useSWR<EthPriceType, any>(
    "https://api.coincap.io/v2/assets/ethereum",
    fetcher
  );

  return (
    <div
      className="w-[272px] mobileM:w-96 tablet:w-72 tabletM:w-80 tabletL:w-96 desktop:w-72 bg-off-black px-3 py-4
      border border-grey/20 rounded-xl flex flex-col"
    >
      <Image
        src={imgSrc}
        alt={name}
        className="mb-6 w-full h-52 object-cover rounded-lg
          cursor-pointer hover:scale-105 duration-200"
        width={400}
        height={400}
      />

      {/* nft name, collection name and yellow Auction btn */}
      <div className="flex items-center justify-between gap-x-8">
        <div className="flex flex-col w-[55%]">
          {/* nft name */}
          <h5
            className="font-tt-firs-neue font-bold text-lg truncate"
            title={name}
          >
            {name}
          </h5>

          {/* collection name */}
          <p className="flex items-center gap-x-2" title={collectionName}>
            <span className="font-medium text-xs text-grey uppercase truncate">
              {collectionName}
            </span>

            <span>
              <svg
                display="block"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                  fill="#feda03"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                  fill="#000000"
                ></path>
              </svg>
            </span>
          </p>
        </div>

        <YellowButton
          variant={YellowButtonVariants.bottomYellowShadow}
          size={YellowButtonPaddings.small}
        >
          Auction
        </YellowButton>
      </div>

      {/* prices */}
      <div
        className="mt-5 pt-4 border-t border-t-grey/20
        flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {/* sets the icon based on the NFT chain */}
          {/* eth */}
          {chain === NFTChainsName.eth && (
            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
              <path d="M11.944 17.97 4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0 4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
            </svg>
          )}

          <div className="flex flex-col gap-y-1">
            <span className="text-grey font-tt-firs-neue">
              $
              {!error &&
                !isLoading &&
                ethPriceUsd?.data &&
                chain === NFTChainsName.eth &&
                (lastPrice * parseFloat(ethPriceUsd?.data.priceUsd)).toFixed(2)}
            </span>

            <span className="text-xl font-techno-chain whitespace-nowrap">
              {lastPrice} {chain.toUpperCase()}
            </span>
          </div>
        </div>

        {/* auction end */}
        <AuctionEndCounter />
      </div>
    </div>
  );
};

export default NFTCard;
