"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";

interface CryptoDataType {
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  circulating_supply: number;
}

interface LiveCryptoPriceType {
  name: string;
  price: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const convertToObjectArray = (
  obj: Record<string, string>
): LiveCryptoPriceType[] => {
  return Object.entries(obj).map(([name, price]) => ({ name, price }));
};

const CryptocurrenciesPage = () => {
  const [cryptosData, setCryptosData] = useState<CryptoDataType[]>();
  const [liveCryptosPrice, setLiveCryptosPrice] =
    useState<LiveCryptoPriceType[]>();
  const [readMore, setReadMore] = useState(false);

  // to fetch data from coingecko
  const COINGECKO_BASE_API = "https://api.coingecko.com/api/v3";
  const COINGECKO_ENDPOINT =
    "/coins/markets?vs_currency=usd&per_page=40&page=1&price_change_percentage=1h%2C24h%2C7d&precision=4";
  const { data, isLoading, error } = useSWR(
    `${COINGECKO_BASE_API}${COINGECKO_ENDPOINT}`,
    fetcher
  );

  // to get real-time cryptos prices
  useEffect(() => {
    !error && !isLoading && setCryptosData(data);
    console.log("data:", data);

    const COINCAP_SOCKET_URL = "wss://ws.coincap.io/prices?assets=ALL";
    const COINCAP_SOCKET_URL2 = "wss://ws.coincap.io/trades/binance";
    const tradeWs = new WebSocket(COINCAP_SOCKET_URL2);

    tradeWs.onmessage = (event) => {
      const msgData = JSON.parse(event.data);
      const dataAsArray = convertToObjectArray(msgData);
      setLiveCryptosPrice(dataAsArray);
    };

    console.log("liveCryptosPrice:", liveCryptosPrice);

    return () => tradeWs.close();
  }, []);

  return (
    <main>
      <section className="hidden flex-centered-section-1240 flex-col ">
        <header>
          <h1 className="font-tt-firs-neue text-3xl font-medium">
            Today's Cryptocurrency Prices by Market Cap
          </h1>

          <p className="mt-6 text-base">
            The global cryptocurrency market cap today is $2.54 Trillion, a 0.9%
            change in the last 24 hours.{" "}
            <span
              onClick={() => setReadMore((value) => !value)}
              className="underline hover:no-underline cursor-pointer
                hover:text-yellow duration-200"
            >
              {readMore ? "Read less" : "Read more"}
            </span>
          </p>
          <p
            className={
              readMore
                ? `text-base overflow-hidden mt-4`
                : `max-h-0 text-base overflow-hidden`
            }
          >
            Hide Total cryptocurrency trading volume in the last day is at $69.7
            Billion. Bitcoin dominance is at 51% and Ethereum dominance is at
            15.1%. CoinGecko is now tracking 13,982 cryptocurrencies. The
            largest gainers in the industry right now are Polkadot Ecosystem and
            Algorand Ecosystem cryptocurrencies.
          </p>
        </header>

        {/* prices variation table for all cryptocurrencies */}
        <div className="mt-12">
          {/* if there was an error */}
          {error && (
            <div className="text-center">Error: {JSON.stringify(error)}</div>
          )}

          {/* is loading */}
          {!error && isLoading && (
            <div className="text-center">is loading...</div>
          )}

          {!error && !isLoading && data && (
            <div className="flex text-sm font-medium">
              {/* left content - rank and coin's name columns */}
              <div className="flex text-left">
                {/* rank column */}
                <div className="flex flex-col">
                  {/* title - # */}
                  <h6
                    className="w-[38px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    #
                  </h6>

                  {/* ranks */}
                  {cryptosData?.map(({ market_cap_rank, symbol }) => (
                    <span key={symbol} className="w-[38px] py-8">
                      {market_cap_rank}
                    </span>
                  ))}
                </div>

                {/* coin's name column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[216px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    Coin
                  </h6>

                  {/* names */}
                  {cryptosData?.map(({ name, symbol }) => (
                    <p
                      key={symbol}
                      className="w-[216px] py-8 text-base text-white font-bold"
                    >
                      {name} {""}{" "}
                      <span className="text-grey">{symbol.toUpperCase()}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* right content - % in 1h, 24h, 7d, 24h Volume...  */}
              <div className="flex-grow flex text-right overflow-x-auto scrollbar-w-2">
                {/* price column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-28 py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    Price
                  </h6>

                  {/* prices */}
                  {cryptosData?.map(({ current_price, symbol }) => (
                    <span key={symbol} className="w-28 py-8">
                      {current_price}
                    </span>
                  ))}
                </div>

                {/* 1h column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[76px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    1h
                  </h6>

                  {/* items */}
                  {cryptosData?.map(
                    ({ price_change_percentage_1h_in_currency, symbol }) => (
                      <span key={symbol} className="w-[76px] py-8">
                        {price_change_percentage_1h_in_currency}
                      </span>
                    )
                  )}
                </div>

                {/* 24h column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[76px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    24h
                  </h6>

                  {/* items */}
                  {cryptosData?.map(
                    ({ price_change_percentage_24h_in_currency, symbol }) => (
                      <span key={symbol} className="w-[76px] py-8">
                        {price_change_percentage_24h_in_currency}
                      </span>
                    )
                  )}
                </div>

                {/* 7d column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[76px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    7d
                  </h6>

                  {/* items */}
                  {cryptosData?.map(
                    ({ price_change_percentage_7d_in_currency, symbol }) => (
                      <span key={symbol} className="w-[76px] py-8">
                        {price_change_percentage_7d_in_currency}
                      </span>
                    )
                  )}
                </div>

                {/* 24h Volume column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[168px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    24h Volume
                  </h6>

                  {/* items */}
                  {cryptosData?.map(({ total_volume, symbol }) => (
                    <span key={symbol} className="w-[168px] py-8">
                      {total_volume}
                    </span>
                  ))}
                </div>

                {/* Market Cap */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-36 py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    Market Cap
                  </h6>

                  {/* items */}
                  {cryptosData?.map(({ market_cap, symbol }) => (
                    <span key={symbol} className="w-36 py-8">
                      {market_cap}
                    </span>
                  ))}
                </div>

                {/* Circulating Supply column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[196px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    Circulating Supply
                  </h6>

                  {/* items */}
                  {cryptosData?.map(({ circulating_supply, symbol }) => (
                    <span key={symbol} className="w-[196] py-8">
                      {circulating_supply}
                    </span>
                  ))}
                </div>

                {/* Last 7 Days column */}
                <div className="flex flex-col">
                  {/* title */}
                  <h6
                    className="w-[184px] py-4 border-y border-y-grey/20
                    cursor-pointer hover:text-yellow duration-200"
                  >
                    Last 7 Days
                  </h6>

                  {/* graphics */}
                  {cryptosData?.map(({ symbol }) => (
                    <div key={symbol} className="max-w-[184px] py-8">
                      Last 7 Days
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="text-center">
        <h1 className="font-tt-firs-neue text-3xl font-medium">
        Today's Cryptocurrency Prices by Market Cap
        </h1>

        <p className="animate-pulse text-yellow mt-4 [text-shadow:0px_6px_8px_#cbfe00]">
          Coming soon...
        </p>
      </section>
    </main>
  );
};

export default CryptocurrenciesPage;
