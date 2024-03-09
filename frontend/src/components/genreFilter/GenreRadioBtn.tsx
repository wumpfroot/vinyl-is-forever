interface GenreRadioBtnProps {
	onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	genres: string[];
}

const GenreRadioBtn: React.FC<GenreRadioBtnProps> = ({ onOptionChange, genres }) => {
	return (
		<>
			{genres.map((genre, index) => (
				<div key={index}>
					<input onChange={onOptionChange} type="radio" name="genre" id={genre} value={genre === "all" ? "" : genre} />
					<label htmlFor={genre}>{genre}</label>
				</div>
			))}
		</>
	);
};
export default GenreRadioBtn;
