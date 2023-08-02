import { create } from "zustand";

type ModalView = "sign-out" | "loading";

type ModalState = { view: ModalView; isOpen: boolean };

type ModalActions = { onClose: () => void; onOpen: (type: ModalView) => void };

const useModalStore = create<ModalState & ModalActions>((set) => ({
   view: "sign-out",
   isOpen: false,

   onClose: () => set((state) => ({ ...state, isOpen: false })),
   onOpen: (type: ModalView) => set({ view: type, isOpen: true }),
}));

export default useModalStore;
