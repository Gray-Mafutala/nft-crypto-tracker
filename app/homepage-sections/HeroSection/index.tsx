import Image from "next/image";
import HeroNFTImg from "../../../assets/images/home-page/hero-section/hero-image.png";
import YellowButton from "@/app/ui/YellowButton";

const HeroSection = () => {
  return (
    <section
      className="flex-centered-section-1240 justify-between items-center
      bg-gray-grid bg-[right_top] bg-no-repeat bg-[rigth_top] gap-x-12"
    >
      {/* left-content - title and outline... */}
      <div
        className="w-full flex flex-col items-center text-center
        tabletM:text-left tabletM:items-start"
      >
        <h1
          className="tabletM:max-w-xl font-bold uppercase bg-gradient-silver bg-clip-text 
          text-transparent font-techno-chain text-5xl leading-[1.3]
          laptop:text-[3.75rem] desktop:text-[4.5rem] duration-200"
        >
          Tracker of{" "}
          <span
            className="mx-5 relative bg-gradient-yellow bg-clip-text 
            text-transparent after:absolute after:bg-yello-circle 
            after:bg-no-repeat after:-z-[1]
            after:-top-4 laptop:after:-top-2
            after:-left-4 laptop:after:-left-6 desktop:after:-left-7
            after:bg-[length:120px_90px] after:w-[120px] after:h-[90px]
            laptop:after:bg-[length:160px_90px] laptop:after:w-[160px] laptop:after:h-[90px] 
            desktop:after:bg-[length:190px_100px] desktop:after:w-[190px] desktop:after:h-[100px]
            [text-shadow:0px_0px_6px_#d8ff00b3]"
          >
            NFTs
          </span>{" "}
          and cryptos prices
        </h1>

        <p className="max-w-lg mt-8 font-tt-firs-neue">
          Discover exclusive NFT collections, track and compare cryptocurrency
          prices in real-time.
        </p>

        {/* hero image for small screens */}
        <div
          className="mt-8 tabletM:hidden w-full min-w-56 max-w-sm duration-200
          relative after:absolute after:bottom-16 after:left-[112px] after:w-28
          after:rounded-full after:shadow-[0_-24px_128px_24px_#cbfe00] 
          after:animate-pulse after:-z-[1]"
        >
          <Image
            className="w-full h-auto object-cover"
            src={HeroNFTImg}
            alt="NFT Hero section"
            priority
          />
        </div>

        <YellowButton
          isLink={true}
          link="/#nfts_collections"
          addStyles="mt-10 tabletM:self-start"
        >
          Let’s Explore
        </YellowButton>
      </div>

      {/* right content- hero image */}
      <div
        className="hidden tabletM:block w-full min-w-[300px] max-w-sm
        laptop:max-w-md desktop:max-w-[500px] duration-200
        relative after:absolute after:bottom-16 after:left-[112px] after:w-28
        after:rounded-full after:shadow-[0_-24px_128px_24px_#cbfe00] 
        after:animate-pulse after:-z-[1]"
      >
        <Image
          className="w-full h-auto object-cover"
          src={HeroNFTImg}
          alt="NFT Hero section"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
