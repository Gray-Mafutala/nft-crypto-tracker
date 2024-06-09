import Link from "next/link";

const topExchangeIds = [
  "bibox",
  "binance",
  "bitfinex",
  "bitflyer",
  "bitstamp",
  "digifinex",
  "gateio",
  "gemini",
  "hitbtc",
  "kraken",
];

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
      hover:scale-105 hover:border-yellow duration-300 cursor-pointer"
    >
      {/* crypto exchange */}
      <p className="font-semibold truncate">
        {exchangeId.charAt(0).toUpperCase().concat(exchangeId.slice(1))}
      </p>

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
