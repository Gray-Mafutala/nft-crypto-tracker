"use client";

import React from "react";
import useSWR from "swr";

import { BiLoaderCircle, BiSolidUpArrow } from "react-icons/bi";

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

interface GlobalDataType {
  data: {
    total_market_cap: { [token: string]: number };
    total_volume: { [token: string]: number };
    market_cap_percentage: { [token: string]: number };
    market_cap_change_percentage_24h_usd: number;
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CryptocurrenciesPage = () => {
  const COINGECKO_BASE_API = "https://api.coingecko.com/api/v3";

  const COINS_ENDPOINT =
    "/coins/markets?vs_currency=usd&per_page=40&page=1&price_change_percentage=1h%2C24h%2C7d&precision=10";
  const GLOBAL_ENDPOINT = "/global";

  const cryptoData = useSWR<CryptoDataType[]>(
    `${COINGECKO_BASE_API}${COINS_ENDPOINT}`,
    fetcher
  );

  const globalStats = useSWR<GlobalDataType>(
    `${COINGECKO_BASE_API}${GLOBAL_ENDPOINT}`,
    fetcher
  );

  const sigdig = (val: number, dig: number) => {
    let v = Math.abs(val);
    if (v === 0) return 0.0;

    const f = 10 ** (-Math.ceil(Math.log10(v)) + dig);
    return Math.sign(val) * (Math.round(v * f) / f);
  };

  return (
    <main>
      <section className="flex-centered-section-1240 flex-col ">
        <header>
          <h1 className="font-tt-firs-neue text-3xl font-medium">
            Today's Cryptocurrency Prices by Market Cap
          </h1>

          {globalStats.error && (
            <p className="text-base">
              An error occurred when retrieving the global change in the last 24
              hours.
            </p>
          )}

          {!globalStats.error && globalStats.isLoading && (
            <p className="text-base">
              The global change in the last 24 hours is loading ...
            </p>
          )}

          {!globalStats.error && !globalStats.isLoading && globalStats.data && (
            <p className="flex items-center mt-6 text-base">
              The global change in the last 24 hours is
              <span
                className={`ml-2 mr-[2px] mt-[2px] ${
                  globalStats.data.data.market_cap_change_percentage_24h_usd > 0
                    ? "text-green-600"
                    : "rotate-180 text-red-600"
                }`}
              >
                <BiSolidUpArrow size={12} />
              </span>
              <span
                className={`flex items-center gap-x-1 ${
                  globalStats.data.data.market_cap_change_percentage_24h_usd > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {Math.abs(
                  globalStats.data.data.market_cap_change_percentage_24h_usd
                ).toFixed(1)}
                %
              </span>
            </p>
          )}
        </header>

        {/* prices variation table for all cryptocurrencies */}
        <div className="mt-12">
          {/* if there was an error */}
          {cryptoData.error && (
            <div className="text-center">
              Error: {JSON.stringify(cryptoData.error)}
            </div>
          )}

          {/* is loading */}
          {!cryptoData.error && cryptoData.isLoading && (
            <div className="flex justify-center">
              <span className="animate-spin text-yellow">
                <BiLoaderCircle className="size-6" />
              </span>
            </div>
          )}

          {/* data */}
          {!cryptoData.error && !cryptoData.isLoading && cryptoData.data && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-white border border-grey/20 rounded-lg overflow-hidden">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      #
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      Coin
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      Price
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      1h
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      24h
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      7d
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      24h Volume
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-yellow">
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-off-black">
                  {cryptoData.data &&
                    cryptoData.data?.map((coin, index) => (
                      <tr
                        key={coin.symbol}
                        className={`border-b border-grey/20 hover:bg-gray-700 ${
                          index === (cryptoData.data?.length ?? 0) - 1
                            ? "last:rounded-b-lg"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4">{coin.market_cap_rank}</td>
                        <td className="px-6 py-4 flex items-center space-x-2">
                          <img
                            src={coin.image}
                            alt={coin.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="font-bold">{coin.name}</span>
                          <span className="text-grey">
                            ({coin.symbol.toUpperCase()})
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          
                          {coin.current_price < 0.0001
                            ? coin.current_price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 8,
                                maximumFractionDigits: 8,
                              })
                            : coin.current_price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 2,
                              })}
                        </td>
                        <td className="px-6 py-4">
                          {coin.price_change_percentage_1h_in_currency.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td className="px-6 py-4">
                          {coin.price_change_percentage_24h_in_currency.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td className="px-6 py-4">
                          {coin.price_change_percentage_7d_in_currency.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td className="px-6 py-4">
                          ${coin.total_volume.toLocaleString()}{" "}
                        </td>
                        <td className="px-6 py-4">
                          ${coin.market_cap.toLocaleString()}{" "}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CryptocurrenciesPage;
