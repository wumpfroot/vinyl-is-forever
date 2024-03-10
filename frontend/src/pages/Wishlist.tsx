import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Props } from "../types";
import GenreFilter from "../components/genreFilter/GenreFilter";
import VinylGrid from "../components/vinylGrid/VinylGrid";

const Wishlist = (props: Props) => {
	const { vinyls, setVinyls, search, setSearch, genre, setGenre } = props;

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
	}, [setVinyls]);

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGenre(e.target.value);
	};
	return (
		<>
			<h1 className="text-4xl">Wishlist</h1>
			<input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search albums..." />
			<GenreFilter onOptionChange={onOptionChange} />
			<VinylGrid vinyls={vinyls} search={search} genre={genre} />
		</>
	);
};
export default Wishlist;
