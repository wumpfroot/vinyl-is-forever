import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import GenreFilter from "../components/genreFilter/GenreFilter";
import { Vinyl } from "../types";

const Wishlist = () => {
	const [vinyls, setVinyls] = useState<Vinyl[]>([]);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");

	useEffect(() => {
		const fetchWishlistVinyls = async () => {
			try {
				const response: AxiosResponse = await axios.get("http://localhost:5555/vinyls/wishlist");
				setVinyls(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchWishlistVinyls();
	}, []);

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGenre(e.target.value);
	};
	return (
		<>
			<h1 className="text-4xl">Wishlist</h1>
			<input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search albums..." />
			<GenreFilter onOptionChange={onOptionChange} />
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
};
export default Wishlist;
