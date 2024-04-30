import Image from "next/image";

import polygonLogo from "../../assets/images/home-page/partners-section/polygon.png";
import tezosLogo from "../../assets/images/home-page/partners-section/tezos.png";
import solanaLogo from "../../assets/images/home-page/partners-section/solana.png";
import aaveLogo from "../../assets/images/home-page/partners-section/aave.png";
import avalancheLogo from "../../assets/images/home-page/partners-section/avalanche.png";
import celestiaLogo from "../../assets/images/home-page/partners-section/celestia.png";
import tronLogo from "../../assets/images/home-page/partners-section/tron.png";
import algorandLogo from "../../assets/images/home-page/partners-section/algorand.png";

import ethereumLogo from "../../assets/images/home-page/partners-section/ethereum.png";
import bitgetLogo from "../../assets/images/home-page/partners-section/bitget.png";
import raribleLogo from "../../assets/images/home-page/partners-section/rarible.png";
import alchemyLogo from "../../assets/images/home-page/partners-section/alchemy.png";
import binanceLogo from "../../assets/images/home-page/partners-section/binance.png";
import thirdwebLogo from "../../assets/images/home-page/partners-section/thirdweb.png";
import coinbaseLogo from "../../assets/images/home-page/partners-section/coinbase.png";
import arbitrumLogo from "../../assets/images/home-page/partners-section/arbitrum.png";
import MarqueeList, { MarqueeDirection } from "../components/MarqueeList.tsx";

const partnersListTop = [
  { title: "polygon", logo: polygonLogo },
  { title: "tezos", logo: tezosLogo },
  { title: "solana", logo: solanaLogo },
  { title: "aave", logo: aaveLogo },
  { title: "avalanche", logo: avalancheLogo },
  { title: "celestia", logo: celestiaLogo },
  { title: "tron", logo: tronLogo },
  { title: "algorand", logo: algorandLogo },
];

const partnersListBottom = [
  { title: "ethereum", logo: ethereumLogo },
  { title: "bitget", logo: bitgetLogo },
  { title: "rarible", logo: raribleLogo },
  { title: "alchemy", logo: alchemyLogo },
  { title: "binance", logo: binanceLogo },
  { title: "thirdweb", logo: thirdwebLogo },
  { title: "coinbase", logo: coinbaseLogo },
  { title: "arbitrum", logo: arbitrumLogo },
];

const PartnersSection = () => {
  return (
    <section className="mt-28 flex flex-col items-center gap-y-14">
      <h2 id="our_partners" className="uppercase font-techno-chain text-5xl">
        Our Partners
      </h2>

      <div className="flex flex-col gap-y-4 w-full">
        <MarqueeList
          itemList={partnersListTop}
          direction={MarqueeDirection.Left}
        />

        <MarqueeList
          itemList={partnersListBottom}
          direction={MarqueeDirection.Right}
        />
      </div>
    </section>
  );
};

export default PartnersSection;
