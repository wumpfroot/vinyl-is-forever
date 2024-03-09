const VinylGrid = (props) => {
	const { vinyls, search, genre } = props;

	return (
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
	);
};
export default VinylGrid;
