import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import GenreFilter from "../components/genreFilter/GenreFilter";
import VinylGrid from "../components/vinylGrid/VinylGrid";
import { useVinylStore } from "../store";

function Owned() {
	// const { setVinyls, setSearch, setGenre } = useVinylStore();
	const setVinyls = useVinylStore((state) => state.setVinyls);
	const setSearch = useVinylStore((state) => state.setSearch);
	const setGenre = useVinylStore((state) => state.setGenre);

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
	}, [setVinyls]);

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
			<h1 className="text-4xl">Owned vinyls</h1>
			<input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search albums..." />
			<GenreFilter onOptionChange={onOptionChange} />
			<VinylGrid />
		</>
	);
}

export default Owned;
