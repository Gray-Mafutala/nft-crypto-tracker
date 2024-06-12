import Link from "next/link";

import BiboxLogo from "@/assets/images/crypto-exchange/bibox.svg";
import BinanceLogo from "@/assets/images/crypto-exchange/binance.svg";
import BitfinexLogo from "@/assets/images/crypto-exchange/bitfinex.svg";
import BitflyerLogo from "@/assets/images/crypto-exchange/bitflyer.svg";
import BitstampLogo from "@/assets/images/crypto-exchange/bitstamp.svg";
import DigifinexLogo from "@/assets/images/crypto-exchange/digifinex.svg";
import GateioLogo from "@/assets/images/crypto-exchange/gateio.svg";
import GeminiLogo from "@/assets/images/crypto-exchange/gemini.svg";
import HitBtcLogo from "@/assets/images/crypto-exchange/hitbtc.svg";
import KrakenLogo from "@/assets/images/crypto-exchange/kraken.svg";
import Image, { StaticImageData } from "next/image";

type ExchangeLogos = {
  [key: string]: StaticImageData;
};

const topExchangesLogo: ExchangeLogos = {
  bibox: BiboxLogo,
  binance: BinanceLogo,
  bitfinex: BitfinexLogo,
  bitflyer: BitflyerLogo,
  bitstamp: BitstampLogo,
  digifinex: DigifinexLogo,
  gateio: GateioLogo,
  gemini: GeminiLogo,
  hitbtc: HitBtcLogo,
  kraken: KrakenLogo,
};

type Props = {
  exchangeId: string;
  priceUsd: string;
  date: string;
  priceColor: string;
};

const PriceOnExchangeCard = ({
  exchangeId,
  priceUsd,
  date,
  priceColor,
}: Props) => {
  return (
    <div
      className="max-w-[420px] w-full bg-off-black border border-grey
      whitespace-nowrap p-4 rounded-lg text-xl mobileL:text-2xl
      hover:scale-105 hover:border-yellow duration-300 cursor-pointer
      relative"
    >
      {/* top exchange logo */}
      {topExchangesLogo.hasOwnProperty(exchangeId) && (
        <span className="absolute right-2 top-2">
          <Image
            src={topExchangesLogo[exchangeId]}
            alt=""
            className="min-w-6 min-h-6 w-6 h-6 object-contain"
          />
        </span>
      )}

      {/* crypto exchange */}
      <h4
        className={
          topExchangesLogo.hasOwnProperty(exchangeId)
            ? "bg-gradient-yellow bg-clip-text text-transparent text-xl font-semibold truncate"
            : "bg-gradient-silver bg-clip-text text-transparent text-xl font-semibold truncate"
        }
      >
        {exchangeId.charAt(0).toUpperCase().concat(exchangeId.slice(1))}
      </h4>

      {/* price */}
      <p
        className={`mt-2 py-1 px-2 font-medium font-tt-firs-neue rounded-md w-fit text-off-black ${priceColor}`}
      >
        $
        {priceUsd !== null
          ? new Intl.NumberFormat("en-EN").format(
              parseFloat(parseFloat(priceUsd).toFixed(4))
            )
          : "-"}
      </p>

      {/* date and time */}
      <p className="mt-4 text-sm">
        {new Date(date).toLocaleDateString()} -{" "}
        {new Date(date).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default PriceOnExchangeCard;
