import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import GenreFilter from "../components/genreFilter/GenreFilter";
import VinylGrid from "../components/vinylGrid/VinylGrid";
import { useVinylStore } from "../store";

const Wishlist = () => {
	// const { setVinyls, setSearch, setGenre } = useVinylStore();
	const setVinyls = useVinylStore((state) => state.setVinyls);
	const setSearch = useVinylStore((state) => state.setSearch);
	const setGenre = useVinylStore((state) => state.setGenre);

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
			<VinylGrid />
		</>
	);
};
export default Wishlist;
