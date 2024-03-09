import GenreRadioBtn from "./GenreRadioBtn";

interface GenreFilterProp {
	onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const genres = ["all", "jazz", "rock", "pop", "metal"];

const GenreFilter: React.FC<GenreFilterProp> = ({ onOptionChange }) => {
	return (
		<fieldset>
			<legend>Filter by genre:</legend>
			<GenreRadioBtn genres={genres} onOptionChange={onOptionChange} />
		</fieldset>
	);
};
export default GenreFilter;
