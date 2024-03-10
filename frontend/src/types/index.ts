export interface Vinyl {
	_id: string;
	title: string;
	artist: string;
	genres: string[];
	release: string;
	coverImg: string;
	owned: boolean;
}

export interface Props {
	vinyls: Vinyl[];
	search: string;
	genre: string;
	setVinyls: (vinyls: Vinyl[]) => void;
	setSearch: (search: string) => void;
	setGenre: (genre: string) => void;
}
