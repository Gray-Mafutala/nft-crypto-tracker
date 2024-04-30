import NFTCard from "@/app/components/NFTCard";
import { NFTItemDataType } from ".";

type Props = {
  nftCollection: NFTItemDataType[];
};

// wrapper of one collection nfts
const NftCollectionWrapper = ({ nftCollection }: Props) => {
  return (
    <ul className="opacity-0 -translate-y-5 animate-smoothAppear mt-12 grid grid-cols-4 gap-4">
      {nftCollection.map((nftData) => (
        <li key={nftData.itemName}>
          <NFTCard
            name={nftData.itemName}
            imgSrc={nftData.imgPath}
            collectionName={nftData.collectionName}
            lastPrice={nftData.lastPrice}
            chain={nftData.chain}
          />
        </li>
      ))}
    </ul>
  );
};

export default NftCollectionWrapper;
