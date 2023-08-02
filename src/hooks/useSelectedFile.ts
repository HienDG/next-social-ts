/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type SelectedFileState = {
   file: string | null;
};

type SelectedFileActions = { onUpload: (result: any) => void; onRemove: () => void };

const useSelectedFile = create<SelectedFileState & SelectedFileActions>((set) => ({
   file: null,

   onUpload: (result) => set({ file: result.info.secure_url }),
   onRemove: () => set({ file: null }),
}));

export default useSelectedFile;
