import { create } from "zustand";

type ComingSoonModalStore = {
  isOpen: boolean;
  showComingSoonModal: () => void;
  closeComingSoonModal: () => void;
};

const useComingSoonModalStore = create<ComingSoonModalStore>((set) => ({
  isOpen: false,
  showComingSoonModal: () => set({ isOpen: true }),
  closeComingSoonModal: () => set({ isOpen: false }),
}));

export default useComingSoonModalStore;
