import { create } from "zustand";
import { Props, Vinyl } from "./types";

export const useVinylStore = create<Props>((set) => ({
	vinyls: [],
	search: "",
	genre: "",
	vinylInfo: null as Vinyl | null,
	setVinyls: (vinyls) => set({ vinyls }),
	setSearch: (search) => set({ search }),
	setGenre: (genre) => set({ genre }),
	setVinylInfo: (vinyl: Vinyl | null) => set({ vinylInfo: vinyl }),
}));
