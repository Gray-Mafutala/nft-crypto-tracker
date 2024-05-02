"use client";

import ClientPortal from "@/app/components/ClientPortal";
import RoundedButtonClose from "@/app/ui/RoundedButtonClose";
import YellowButton, { YellowButtonVariants } from "@/app/ui/YellowButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { NftCollectionNameTuple, NftCollectionType } from ".";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onToggleDisplay: () => void;
  onClose: () => void;
  NFT_COLLECTION_NAME: NftCollectionNameTuple[];
  currentCollection: NftCollectionType;
  setCurrentCollection: React.Dispatch<React.SetStateAction<NftCollectionType>>;
};

const NFTsCollectionTabMobile = ({
  isOpen,
  onToggleDisplay,
  onClose,
  NFT_COLLECTION_NAME,
  currentCollection,
  setCurrentCollection,
}: Props) => {
  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div className="tablet:hidden mt-8">
      <YellowButton
        addStyles="flex items-center gap-x-6"
        variant={YellowButtonVariants.bottomYellowShadow}
        onClick={onToggleDisplay}
      >
        NFT Collections
        <IoIosArrowDropdownCircle size={24} />
      </YellowButton>

      <ClientPortal>
        <ul
          className={
            isOpen
              ? `fixed inset-0 z-10 bg-black/80 backdrop-blur-sm
                  flex flex-col items-center pt-9 gap-y-4 text-center
                  translate-y-0 duration-300`
              : `fixed inset-0 z-10 bg-black/80 backdrop-blur-sm
                  flex flex-col items-center pt-9 gap-y-4 text-center
                  -translate-y-[120%] duration-300`
          }
        >
          <RoundedButtonClose onClick={onClose} />

          {NFT_COLLECTION_NAME.map((collection) => (
            <li
              key={collection[1]}
              onClick={() => {
                setCurrentCollection(collection[1]);
                onClose();
              }}
              className={
                collection[1] === currentCollection
                  ? `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-[#242904] bg-gradient-yellow
                    rounded-[110px]`
                  : `uppercase font-techno-chain inline-block px-8 py-3 select-none
                    cursor-pointer whitespace-nowrap text-grey bg-off-black
                    rounded-[110px]
                    hover:bg-gradient-yellow hover:text-[#242904] duration-500
                    `
              }
            >
              {collection[1]}
            </li>
          ))}
        </ul>
      </ClientPortal>
    </div>
  );
};

export default NFTsCollectionTabMobile;
