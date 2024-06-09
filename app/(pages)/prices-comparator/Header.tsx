const Header = () => {
  return (
    <header className="flex flex-col items-center text-center gap-y-5">
      <h1 className="font-tt-firs-neue text-3xl mobileL:text-4xl font-medium">
        Exchange Watch
      </h1>
      <p className="text-base">
        Compare Crypto Prices Across Top{" "}
        <span className="whitespace-nowrap">Exchanges 🚀</span>
      </p>
    </header>
  );
};

export default Header;
