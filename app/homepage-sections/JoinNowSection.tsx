import Image from "next/image";
import YellowButton, { YellowButtonVariants } from "../ui/YellowButton";
import leopardMonkeyImg from "../../assets/images/home-page/join-now-section/leapard-monkey.png";

const JoinNowSection = () => {
  return (
    <section
      className="max-w-6xl mx-auto mt-48 flex justify-between 
      bg-off-black rounded-[20px] px-14"
    >
      <div className="mt-20 mb-12 flex flex-col items-start gap-y-9">
        <h2 className="uppercase font-techno-chain text-5xl leading-[1.3] max-w-md">
          Get free collection for first transaction
        </h2>

        <YellowButton variant={YellowButtonVariants.bottomYellowShadow}>
          Join now
        </YellowButton>
      </div>

      <div className="w-[538px] relative">
        <Image
          src={leopardMonkeyImg}
          alt="NFT Leopard Monkey"
          className="absolute bottom-0 ring-0 w-full h-[442px] object-contain"
        />
      </div>
    </section>
  );
};

export default JoinNowSection;
