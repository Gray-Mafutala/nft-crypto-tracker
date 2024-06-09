"use client";

import { useState } from "react";
import Header from "./Header";
import ComboboxSearch from "./ComboboxSearch";
import DisplayError from "@/app/ui/DisplayError";
import LoadingSpinner from "@/app/ui/LoadingSpinner";
import PriceOnExchangeCard from "./PriceOnExchangeCard";

type ResultsImportantsData = {
  baseSymbol: string;
  exchangeId: string;
  priceUsd: string;
  updated: string;
};

const PricesComparatorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ResultsImportantsData[] | null>(null);
  const [error, setError] = useState<Error | null>();

  const handleSubmit = (searchValue: string) => {
    if (!searchValue) return;

    const cryptoId = searchValue.toLowerCase();
    setIsLoading(true);
    setError(null);
    fetch(`https://api.coincap.io/v2/markets?baseId=${cryptoId}`)
      .then((result) => result.json())
      .then((json) => {
        setResults(json?.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      <ComboboxSearch handleSearch={handleSubmit} />

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
          {results &&
            removeDuplicatesAndKeepLatest(results).map(
              ({ exchangeId, priceUsd, updated }) => (
                <PriceOnExchangeCard
                  key={exchangeId}
                  exchangeId={exchangeId}
                  priceUsd={priceUsd}
                  date={updated}
                  priceColor={getPriceColor(parseFloat(priceUsd))}
                />
              )
            )}
        </section>
      )}
    </main>
  );
};

export default PricesComparatorPage;
