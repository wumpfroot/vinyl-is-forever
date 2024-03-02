import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

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

	useEffect(() => {
		const fetchVinyls = async () => {
			try {
				const response: AxiosResponse = await axios.get("http://localhost:5555/vinyls");
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

	return (
		<>
			<h1 className="text-4xl">Vinyl Collection</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
				{vinyls.map((vinyl) => (
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
