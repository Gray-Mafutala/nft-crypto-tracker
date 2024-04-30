import Image from "next/image";
import HeroNFTImg from "../../assets/images/home-page/hero-section/hero-image.png";
import YellowButton from "@/app/ui/YellowButton";

const HeroSection = () => {
  return (
    <section
      className="flex-centered-section-1240 justify-between items-center bg-gray-grid
      bg-[right_top] bg-no-repeat bg-[rigth_top]"
    >
      {/* left-content - title and outline... */}
      <div className="flex flex-col">
        {/*  */}
        <h1
          className="max-w-xl font-techno-chain text-7xl leading-[1.3]
            font-bold uppercase bg-gradient-silver bg-clip-text text-transparent"
        >
          Tracker of{" "}
          <span
            className="mx-5 relative bg-gradient-yellow bg-clip-text 
              text-transparent after:absolute after:bg-yello-circle 
              after:bg-[length:190px_100px] after:w-[190px] after:h-[100px] 
              after:bg-no-repeat after:-top-2 after:-left-7 after:-z-[1]
              [text-shadow:0px_0px_6px_#d8ff00b3]"
          >
            NFTs
          </span>{" "}
          and cryptos prices
        </h1>

        <p className="max-w-lg mt-8 mb-12 font-tt-firs-neue">
          Discover exclusive NFT collections, track and compare cryptocurrency
          prices in real-time.
        </p>

        <YellowButton
          isLink={true}
          link="/#nfts_collections"
          addStyles="self-start"
        >
          Let’s Explore
        </YellowButton>
      </div>

      {/* right content- hero image */}
      <div
        className="max-w-[500px]
          relative after:absolute after:bottom-16 after:left-[112px] after:w-28
          after:rounded-full after:shadow-[0_-24px_128px_24px_#cbfe00] 
          after:animate-pulse after:-z-[1]"
      >
        {/* drop-shadow-[10px_60px_120px_#cbfe00] */}
        <Image
          className="w-full h-auto object-cover"
          src={HeroNFTImg}
          alt="NFT"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
