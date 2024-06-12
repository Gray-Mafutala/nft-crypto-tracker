import { create } from "zustand";
import { SortingOptions } from "@/app/(pages)/prices-comparator/SortingButton";

type SortingOptionStore = {
  sortingOption: SortingOptions;
  setSortingOption: (option: SortingOptions) => void;
};

const useSortingStore = create<SortingOptionStore>((set) => ({
  sortingOption: "default",
  setSortingOption: (option: SortingOptions) => set({ sortingOption: option }),
}));

export default useSortingStore;
