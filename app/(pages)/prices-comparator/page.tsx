"use client";

import YellowButton, { YellowButtonPaddings } from "@/app/ui/YellowButton";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const PricesComparatorPage = () => {
  const [searchValue, setSearchValue] = useState("Bitcoin");
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const hanleSubmit = (cryptoId: string) => {
    fetch(`https://api.coincap.io/v2/markets?baseId=${cryptoId}`)
      .then((result) => result.json())
      .then((data) => setResult(data))
      .catch((err) => setError(err));
  };

  return (
    <main>
      <section className="text-center flex flex-col gap-y-8 items-center">
        <header className="flex flex-col items-center gap-y-5">
          <h1 className="font-tt-firs-neue text-3xl font-medium">
            Exchange Watch
          </h1>

          <p className="text-base">
            Compare Crypto Prices Across Top Exchanges 🚀
          </p>
        </header>

        <div
          className="max-w-96 w-full min-w-56 border border-grey/50
          rounded-lg bg-off-black/60 px-5 py-6"
        >
          {/* select the crypto for which price comparison is needed */}
          <div>
            <div className="relative">
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={(e) =>
                  (e.code === "Enter" || e.code === "NumpadEnter") &&
                  hanleSubmit(searchValue)
                }
                className="rounded-md py-2 px-5 text-off-black w-full text-xl
                font-medium outline-none focus:outline-grey/50
                outline-offset-[3px] pr-20 duration-300"
              />

              <YellowButton
                addStyles="absolute top-1 right-2 text-off-black/60 px-2 py-1
                rounded-full hover:text-yellow active:text-off-black/60"
                size={YellowButtonPaddings.small}
                onClick={hanleSubmit}
              >
                <FaSearch size={24} />
              </YellowButton>
            </div>

            {/* crypto list to be displayed according to what is entered */}
            <ul></ul>
          </div>

          {/* result box */}
          <div className="text-center">
            {error && JSON.stringify(error)}
            {result && JSON.stringify(result)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricesComparatorPage;
