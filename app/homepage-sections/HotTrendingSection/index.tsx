import { promises as fs } from "fs";

import AvatarProfil from "@/app/components/AvatarProfil";
import nobleCardsLogo from "../../../assets/images/farworld-logo.jpeg";
import AuctionEndCounter from "./AuctionEndCounter";
import HotTrendingCarousel from "./HotTrendingCarousel";
import { NFTChainsName } from "../ExploreOurCollectionsSection";
import PlaceABidButton from "./PlaceABidButton";
import CurrentNFTPrice from "./CurrentNFTPrice";

type NftItem = {
  itemName: string;
  imgPath: string;
  collectionName: number;
  lastPrice: number;
  chain: NFTChainsName;
};

interface NftsData {
  trending: NftItem[];
  art: NftItem[];
  morpheus: NftItem[];
  optimists: NftItem[];
  degentlemen: NftItem[];
  monsters: NftItem[];
}

export type EthPriceType = {
  data: {
    priceUsd: string;
  };
};

const getEthereumPrice = async () => {
  // const baseUrlAndEthEndpoint = "https://api.coincap.io/v2/assets/ethereum";
  const baseUrlAndEthEndpoint =
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
  // const res = await fetch(baseUrlAndEthEndpoint, { cache: "no-store" });

  // // const json = (await res?.json()) as EthPriceType;
  // const json = (await res.json()) as { USD: number };
  // // const ethPriceUsd = parseFloat(json.data.priceUsd).toFixed(4);
  // const ethPriceUsd = json.USD.toFixed(4);

  // return parseFloat(ethPriceUsd);
  return 2616.84;
};

const HotTrendingSection = async () => {
  const nftsFilePromise = fs.readFile(
    process.cwd() + "/data/nfts.json",
    "utf8"
  );

  const ethPriceUsdPromise = getEthereumPrice();

  const [nftsFile, ethPriceUsd] = await Promise.all([
    nftsFilePromise,
    ethPriceUsdPromise,
  ]);

  const nftsData: NftsData = JSON.parse(nftsFile);
  const hotTrendingData = nftsData.trending.map((nftItem) => ({
    img: nftItem.imgPath,
    alt: nftItem.itemName,
    id: nftItem.itemName,
    lastPrice: nftItem.lastPrice,
  }));

  return (
    <section
      id="hot_trending"
      className="mt-16 flex-centered-section-1240 flex-col items-center 
      gap-y-10 laptop:gap-y-14"
    >
      {/* top-content */}
      <header className="text-center">
        <h2>Hot Trending on this week</h2>
        <p className="max-w-[628px] mt-6">
          Various kinds of NFTs that are trending the trend will be reset every
          week. Don’t miss out on the best NFTs every week!
        </p>
      </header>

      {/* bottom-content */}
      <div
        className="w-full max-w-screen-md laptop:max-w-max laptop:w-auto bg-off-black rounded-[20px] p-4 flex 
        items-center justify-center gap-x-12"
      >
        {/* left content - carousel */}
        <div className="hidden laptop:block aspect-square laptop:w-[420px] desktop:w-[500px]">
          <HotTrendingCarousel sliders={hotTrendingData} />
        </div>

        {/* right content - Hot Trending on this week... */}
        <div className="flex flex-col">
          <AvatarProfil
            img={nobleCardsLogo}
            profilName="Farworld"
            addStyles="mt-4"
          />

          <p className="mt-6 laptop:max-w-[530px]">
            A Mysterious World 🪐 Filled With Mysterious Creatures 👾
          </p>

          {/* carousel for small screens */}
          <div className="mt-8 min-w-56 w-full aspect-square laptop:hidden">
            <HotTrendingCarousel sliders={hotTrendingData} />
          </div>

          {/* price and auction end */}
          <div
            className="mt-11 flex flex-col gap-y-8 tablet:flex-row items-center 
            justify-between laptop:justify-start gap-x-9"
          >
            {/* nft last price in eth and usd */}
            <CurrentNFTPrice ethPriceUsd={ethPriceUsd} />

            <div className="flex flex-col items-center tablet:items-start">
              <span
                className="uppercase font-techno-chain bg-gradient-silver 
                bg-clip-text text-transparent"
              >
                Auction END
              </span>

              {/* count down timer */}
              <AuctionEndCounter />
            </div>
          </div>

          <PlaceABidButton />
        </div>
      </div>
    </section>
  );
};

export default HotTrendingSection;
