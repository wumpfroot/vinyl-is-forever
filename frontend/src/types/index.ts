export interface Vinyl {
	_id: string;
	title: string;
	artist: string;
	genres: string[];
	release: string;
	coverImg: string;
	owned: boolean;
	description: string;
	favourite_track: string;
}

export interface Props {
	vinyls: Vinyl[];
	search: string;
	genre: string;
	vinylInfo: Vinyl | null;
	setVinyls: (vinyls: Vinyl[]) => void;
	setSearch: (search: string) => void;
	setGenre: (genre: string) => void;
	setVinylInfo: (vinylInfo: Vinyl | null) => void;
}
