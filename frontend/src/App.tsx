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

	const formatReleaseDate = (release: string): string => {
		const options = { year: "numeric", month: "2-digit", day: "2-digit" } as Intl.DateTimeFormatOptions;
		return new Date(release).toLocaleDateString("en-GB", options);
	};

	return (
		<>
			<h1 className="text-4xl">Vinyl Collection</h1>
			<div>
				{vinyls.map((vinyl) => (
					<div className="text-2xl my-5" key={vinyl._id}>
						<h2>
							{vinyl.artist} - {vinyl.title} ({formatReleaseDate(vinyl.release)})
						</h2>
						<img className="w-56 h-auto" src={vinyl.coverImg} alt={`Cover image of ${vinyl.title} by ${vinyl.artist}`} />
					</div>
				))}
			</div>
		</>
	);
}

export default App;
