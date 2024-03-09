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
	setVinyls: React.Dispatch<React.SetStateAction<Vinyl[]>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	setGenre: React.Dispatch<React.SetStateAction<string>>;
}
