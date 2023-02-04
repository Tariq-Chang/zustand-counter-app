import { create } from "zustand";

const useStore = create((set) => ({
  counter: 0,
  incrementCounter: () =>
    set((state) => ({
      counter: state.counter < 10 ? state.counter + 1 : state.counter,
    })),
  decrementCounter: () =>
    set((state) => ({
      counter: state.counter > 0 ? state.counter - 1 : state.counter,
    })),
  resetCounter: () => set(() => ({ counter: 0 })),
}));

export default useStore;
