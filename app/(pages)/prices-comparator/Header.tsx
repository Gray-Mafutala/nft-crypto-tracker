const Header = () => {
  return (
    <header className="flex flex-col items-center text-center gap-y-5">
      <h1 className="font-tt-firs-neue text-3xl mobileL:text-4xl font-medium">
        Exchange Watch
      </h1>

      <div className=" flex flex-col items-center gap-y-1">
        <p className="text-base">Compare Crypto Prices Across</p>
        <p className="text-base whitespace-nowrap">
          <span
            className="bg-gradient-yellow text-transparent bg-clip-text
            font-medium"
          >
            Top Exchanges {" "}
          </span>
          🚀
        </p>
      </div>
    </header>
  );
};

export default Header;
