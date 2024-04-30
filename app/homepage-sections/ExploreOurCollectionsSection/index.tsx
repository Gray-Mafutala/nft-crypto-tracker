"use client";

import { useState } from "react";
import NftCollectionWrapper from "./NftCollectionWrapper";
import nftsData from "../../../data/nfts.json";

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

  return (
    <section
      id="nfts_collections"
      className="flex-centered-section-1240 mt-28 flex-col items-center"
    >
      <header className="text-center">
        <h2 className="uppercase font-techno-chain text-5xl">
          Explore our collections
        </h2>
        <p className="max-w-[628px] mt-6">
          A non-fungible Token is a non-interchangeable unit of data stored on a
          blockchain, a form of digital ledger that can be sold & traded.
        </p>
      </header>

      {/* NFTs Collection tab */}
      <ul className="mt-12 flex items-center justify-center gap-x-10 ">
        {NFT_COLLECTION_NAME.map((collection) => (
          <li
            key={collection[1]}
            onClick={() => setCurrentCollection(collection[1])}
            className={
              collection[1] === currentCollection
                ? `uppercase font-techno-chain inline-block px-8 py-3 select-none cursor-pointer   
                    text-[#242904] bg-gradient-yellow rounded-[110px]`
                : `uppercase font-techno-chain inline-block px-8 py-3 select-none cursor-pointer          
                    text-grey bg-off-black rounded-[110px] 
                    hover:bg-gradient-yellow hover:text-[#242904] 
                    duration-500`
            }
          >
            {collection[1]}
          </li>
        ))}
      </ul>

      {/* NFTs Collection Wrapper */}
      <NftCollectionWrapper
        nftCollection={nftsData[currentCollection] as NFTItemDataType[]}
      />

      <div></div>
    </section>
  );
};

export default ExploreOurCollectionsSection;
