import { create } from "zustand";

type SlideChangeNFTPricesStore = {
  currentPrice: number;
  setCurrentPrice: (price: number) => void;
};

const useSlideChangeNFTPricesStore = create<SlideChangeNFTPricesStore>(
  (set) => ({
    currentPrice: 0.02,
    setCurrentPrice: (price: number) => set({ currentPrice: price }),
  })
);

export default useSlideChangeNFTPricesStore;
