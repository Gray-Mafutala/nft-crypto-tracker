import Link from "next/link";
import Image from "next/image";
import nftIcon from "../../assets/images/shared/nft-icon.png";

type Props = {
  addStyles?: string;
};

const NFTIcon = ({ addStyles }: Props) => {
  return (
    <Link
      href="/"
      className={`p-1 hover:-rotate-[30deg] hover:drop-shadow-[4px_12px_16px_#cbfe00]
      active:scale-95 duration-200 ${addStyles}`}
    >
      <Image
        src={nftIcon}
        alt="nft icon"
        className="min-w-12 w-12 h-auto object-cover"
      />
    </Link>
  );
};

export default NFTIcon;
