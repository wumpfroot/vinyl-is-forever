import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import GenreSearch from "./components/GenreSearch";

interface Vinyl {
	_id: string;
	title: string;
	artist: string;
	genres: string[];
	release: string;
	coverImg: string;
}

function App() {
	const [vinyls, setVinyls] = useState<Vinyl[]>([]);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");
	// console.log(vinyls[1].genres[1]);

	useEffect(() => {
		const fetchVinyls = async () => {
			try {
				const response: AxiosResponse = await axios.get("http://localhost:5555/vinyls/owned");
				setVinyls(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchVinyls();
	}, []);

	// USE LATER
	// const formatReleaseDate = (release: string): string => {
	// 	const date = new Date(release);
	// 	const day = date.getDate().toString().padStart(2, "0");
	// 	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	// 	const year = date.getFullYear();
	// 	return `${day}.${month}.${year}`;
	// };

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGenre(e.target.value);
	};

	return (
		<>
			<h1 className="text-4xl">Vinyl Collection</h1>
			<input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search albums..." />
			<GenreSearch onOptionChange={onOptionChange} />
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
				{vinyls
					.filter((album) => {
						const titleMatch = album.title.toLowerCase().includes(search.toLowerCase());
						const artistMatch = album.artist.toLowerCase().includes(search.toLowerCase());
						const genreMatch = !genre || album.genres.some((selectedGenre) => selectedGenre.toLowerCase().includes(genre.toLowerCase()));
						return (search.toLowerCase() === "" || titleMatch || artistMatch) && genreMatch;
					})
					.map((vinyl) => (
						<div key={vinyl._id} className="group text-2xl my-5 relative w-56 text-center cursor-pointer">
							<img className="w-full h-auto hover:scale-110 filter hover:brightness-50 ease-in duration-200" src={vinyl.coverImg} alt={`Cover image of ${vinyl.title} by ${vinyl.artist}`} />

							<p className="select-none pointer-events-none absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 ease-in duration-200">
								{vinyl.artist} - {vinyl.title}
							</p>
						</div>
					))}
			</div>
		</>
	);
}

export default App;
