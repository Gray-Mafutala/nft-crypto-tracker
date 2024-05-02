import Image from "next/image";
import LeopardMonkeyImg from "../../../assets/images/home-page/join-now-section/leapard-monkey.png";
import JoinNowButton from "./JoinNowButton";

const JoinNowSection = () => {
  return (
    <section
      className="max-w-6xl mx-auto mt-32 tabletL:mt-48 flex justify-between 
      bg-off-black rounded-[20px] px-6 mobileL:px-14"
    >
      <div
        className="mt-20 mb-12 flex flex-col items-center text-center 
        tablet:items-start tablet:text-left gap-y-9"
      >
        <h2 className="tablet:max-w-md leading-[1.3]">
          Get free collection for first transaction
        </h2>

        {/* for small screens */}
        <div className="tablet:hidden min-w-56 w-full max-w-96">
          <Image
            src={LeopardMonkeyImg}
            alt="NFT Leopard Monkey"
            className="w-full h-auto max-h-[460px] object-contain"
          />
        </div>

        <JoinNowButton />
      </div>

      <div
        className="hidden tablet:block w-96 laptop:[500px] desktop:w-[540px]
        relative"
      >
        <Image
          src={LeopardMonkeyImg}
          alt="NFT Leopard Monkey"
          className="absolute bottom-0 ring-0 w-full h-auto max-h-[460px]
          object-contain"
        />
      </div>
    </section>
  );
};

export default JoinNowSection;
