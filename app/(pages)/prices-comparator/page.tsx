"use client";

import { useState } from "react";
import Header from "./Header";
import ComboboxSearch from "./ComboboxSearch";
import DisplayError from "@/app/ui/DisplayError";
import LoadingSpinner from "@/app/ui/LoadingSpinner";
import PriceOnExchangeCard from "./PriceOnExchangeCard";
import SortingButton, { SortingOptions } from "./SortingButton";
import useSortingStore from "@/store/sortingOptionStore";

const topExchanges = [
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

type ResultsImportantsData = {
  baseSymbol: string;
  exchangeId: string;
  priceUsd: string;
  updated: string;
};

const PricesComparatorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ResultsImportantsData[]>([]);
  const [error, setError] = useState<Error | null>();

  const sortingOption = useSortingStore((state) => state.sortingOption);

  const removeDuplicatesAndKeepLatest = (
    results: ResultsImportantsData[]
  ): ResultsImportantsData[] => {
    const uniqueExchangeIds = Array.from(
      new Set(results.map((item) => item.exchangeId))
    );

    return uniqueExchangeIds
      .map((exchangeId) => {
        const filteredResults = results
          .filter((item) => item.exchangeId === exchangeId)
          .sort(
            (a, b) =>
              new Date(b.updated).getTime() - new Date(a.updated).getTime()
          );

        if (
          filteredResults.length === 1 &&
          filteredResults[0].priceUsd === null
        ) {
          return null;
        }

        const latestNonNullPrice = filteredResults.find(
          (item) => item.priceUsd !== null
        );
        return latestNonNullPrice || filteredResults[0];
      })
      .filter((item): item is ResultsImportantsData => item !== null);
  };

  // search a token in combobox
  const handleSearch = (searchValue: string) => {
    if (!searchValue) return;

    const cryptoId = searchValue.toLowerCase();
    setIsLoading(true);
    setError(null);
    fetch(`https://api.coincap.io/v2/markets?baseId=${cryptoId}`)
      .then((data) => data.json())
      .then((dataAsJson) => {
        setResults(removeDuplicatesAndKeepLatest(dataAsJson?.data));
        handleSort(sortingOption);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sort results data
  const handleSort = (option: SortingOptions) => {
    switch (option) {
      case "exchange-id":
        setResults((prevResults) =>
          [...prevResults].sort((item1, item2) => {
            const index1 = topExchanges.indexOf(item1.exchangeId);
            const index2 = topExchanges.indexOf(item2.exchangeId);
            if (index1 === -1 && index2 === -1) return 0;
            if (index1 === -1) return 1;
            if (index2 === -1) return -1;
            return index1 - index2;
          })
        );
        break;

      case "price-asc":
        setResults((prevResults) =>
          [...prevResults].sort(
            (item1, item2) =>
              parseFloat(item1.priceUsd) - parseFloat(item2.priceUsd)
          )
        );
        break;

      case "price-desc":
        setResults((prevResults) =>
          [...prevResults].sort(
            (item1, item2) =>
              parseFloat(item2.priceUsd) - parseFloat(item1.priceUsd)
          )
        );
        break;

      default:
        setResults((prevResults) =>
          [...prevResults].sort((item1, item2) =>
            item1.exchangeId.localeCompare(item2.exchangeId)
          )
        );
        break;
    }
  };

  const getPriceColor = (price: number) => {
    const allPrices = removeDuplicatesAndKeepLatest(
      results as ResultsImportantsData[]
    )
      .map((item) => parseFloat(item.priceUsd))
      .filter((price) => !isNaN(price));

    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);
    const midPrice = (minPrice + maxPrice) / 2;

    if (price === minPrice) return "bg-green-500";
    if (price === maxPrice) return "bg-red-500";

    const range = maxPrice - minPrice;
    const normalizedPrice = (price - minPrice) / range;

    if (price < midPrice) {
      return normalizedPrice < 0.2
        ? "bg-green-400"
        : normalizedPrice < 0.4
        ? "bg-green-300"
        : "bg-orange-300";
    } else {
      return normalizedPrice < 0.6
        ? "bg-orange-300"
        : normalizedPrice < 0.8
        ? "bg-red-300"
        : "bg-red-400";
    }
  };

  return (
    <main className="max-w-[1240px] mx-auto flex flex-col gap-y-5 items-center">
      <Header />

      {/* Combobox and SearchButton */}
      <div className="flex justify-center gap-x-3 w-full ">
        <ComboboxSearch handleSearch={handleSearch} />
        <SortingButton handleSort={handleSort} />
      </div>

      {/* error */}
      {error && <DisplayError />}

      {/* loading */}
      {!error && isLoading && <LoadingSpinner />}

      {/* results */}
      {!error && !isLoading && (
        <section
          className="w-full grid grid-cols-1 justify-items-center mobileL:grid-cols-2
          tablet:grid-cols-3 laptop:grid-cols-4 gap-6"
        >
          {results.map(({ exchangeId, priceUsd, updated }) => (
            <PriceOnExchangeCard
              key={exchangeId}
              exchangeId={exchangeId}
              priceUsd={priceUsd}
              date={updated}
              priceColor={getPriceColor(parseFloat(priceUsd))}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default PricesComparatorPage;
