import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG , INITIAL_Z_INDEX} from "../constants";


const useWindowStore = create(
    immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
 
    openWindow: (windowKey ,data = null ) => set((state) => {
    const window = state.windows[windowKey];
     if(!window) return;
    window.isOpen = true;
    window.zIndex = state.nextZIndex;
    window.data = data ?? window.data;
    state.nextZIndex++;
    }),

    closeWindow: (windowKey) => set((state) => {
    const window = state.windows[windowKey];
    if(!window) return;
    window.isOpen = false;
    window.zIndex = INITIAL_Z_INDEX;
    window.data = null;
    }),

    focusWindow: (windowKey) => set((state) => {
    const window = state.windows[windowKey];
    window.zIndex = state.nextZIndex++;
    })
})),
);


export default useWindowStore;