import { create } from "zustand";
import { Props } from "./types";

export const useVinylStore = create<Props>((set) => ({
	vinyls: [],
	search: "",
	genre: "",
	setVinyls: (vinyls) => set({ vinyls }),
	setSearch: (search) => set({ search }),
	setGenre: (genre) => set({ genre }),
}));
