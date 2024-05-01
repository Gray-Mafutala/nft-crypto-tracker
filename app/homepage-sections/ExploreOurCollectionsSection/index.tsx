"use client";

import { useState } from "react";
import NftCollectionWrapper from "./NftCollectionWrapper";
import nftsData from "../../../data/nfts.json";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import YellowButton, { YellowButtonVariants } from "@/app/ui/YellowButton";
import { IoClose } from "react-icons/io5";
import RoundedButtonClose from "@/app/ui/RoundedButtonClose";

export enum NFTChainsName {
  eth = "eth",
  polygon = "polygon",
  bnb = "bnb",
  matic = "matic",
}

export type NFTItemDataType = {
  itemName: string;
  imgPath: string;
  collectionName: string;
  lastPrice: number;
  chain: NFTChainsName;
};

enum NftCollectionType {
  Trending = "trending",
  AsyncArt = "async-art",
  Morpheus = "morpheus",
  Optimists = "optimists",
  Degentlemen = "degentlemen",
  Monsters = "monsters",
}

type NftCollectionNameTuple = [string, NftCollectionType];

const NFT_COLLECTION_NAME: NftCollectionNameTuple[] = [
  ["Trending", NftCollectionType.Trending],
  ["Async Art", NftCollectionType.AsyncArt],
  ["Morpheus", NftCollectionType.Morpheus],
  ["Optimists", NftCollectionType.Optimists],
  ["Degentlemen", NftCollectionType.Degentlemen],
  ["Monsters", NftCollectionType.Monsters],
];

const ExploreOurCollectionsSection = () => {
  const [currentCollection, setCurrentCollection] = useState<NftCollectionType>(
    NftCollectionType.Trending
  );

  const [showCollectionTabItems, setShowCollectionTabItems] = useState(false);
  const closeCollectionTabItems = () => setShowCollectionTabItems(false);

  return (
    <section
      id="nfts_collections"
      className="flex-centered-section-1240 mt-28 flex-col items-center"
    >
      <header className="text-center">
        <h2>Explore our collections</h2>
        <p className="max-w-[690px] mt-6">
          A non-fungible Token is a non-interchangeable unit of data stored on a
          blockchain, a form of digital ledger that can be sold & traded.
        </p>
      </header>

      {/* NFTs Collection tab - width > 580px */}
      <ul
        className="hidden tablet:grid mt-12 grid-cols-3 desktop:grid-cols-6 
        items-center justify-center text-center gap-x-10 gap-y-6"
      >
        {NFT_COLLECTION_NAME.map((collection) => (
          <li
            key={collection[1]}
            onClick={() => setCurrentCollection(collection[1])}
            className={
              collection[1] === currentCollection
                ? `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-[#242904] bg-gradient-yellow
                    rounded-[110px]`
                : `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-grey bg-off-black
                    rounded-[110px] hover:bg-gradient-yellow hover:text-[#242904] 
                    duration-500`
            }
          >
            {collection[1]}
          </li>
        ))}
      </ul>

      {/* NFTs Collection tab width < 580px */}
      <div className="tablet:hidden mt-8">
        <YellowButton
          addStyles="flex items-center gap-x-6"
          variant={YellowButtonVariants.bottomYellowShadow}
          onClick={() => setShowCollectionTabItems((value) => !value)}
        >
          NFT Collections
          <IoIosArrowDropdownCircle size={24} />
        </YellowButton>

        <ul
          className={
            showCollectionTabItems
              ? `fixed inset-0 z-10 bg-black/80 backdrop-blur-sm
                  flex flex-col items-center pt-9 gap-y-4 text-center
                  translate-y-0 duration-300`
              : `fixed inset-0 z-10 bg-black/80 backdrop-blur-sm
                  flex flex-col items-center pt-9 gap-y-4 text-center
                  -translate-y-[120%] duration-300`
          }
        >
          <RoundedButtonClose onClick={closeCollectionTabItems} />

          {NFT_COLLECTION_NAME.map((collection) => (
            <li
              key={collection[1]}
              onClick={() => {
                setCurrentCollection(collection[1]);
                setShowCollectionTabItems(false);
              }}
              className={
                collection[1] === currentCollection
                  ? `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-[#242904] bg-gradient-yellow
                    rounded-[110px]`
                  : `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-grey bg-off-black
                    rounded-[110px] hover:bg-gradient-yellow hover:text-[#242904] 
                    duration-500`
              }
            >
              {collection[1]}
            </li>
          ))}
        </ul>
      </div>

      {/* NFTs Collection Wrapper */}
      <NftCollectionWrapper
        nftCollection={nftsData[currentCollection] as NFTItemDataType[]}
      />
    </section>
  );
};

export default ExploreOurCollectionsSection;
