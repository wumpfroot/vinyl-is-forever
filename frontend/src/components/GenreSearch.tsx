const GenreSearch = ({ onOptionChange }) => {
	return (
		<fieldset>
			<legend>Filter by genre:</legend>
			<div>
				<input onChange={onOptionChange} type="radio" name="genre" id="jazz" value="" />
				<label htmlFor="jazz">All</label>
			</div>
			<div>
				<input onChange={onOptionChange} type="radio" name="genre" id="jazz" value="jazz" />
				<label htmlFor="jazz">Jazz</label>
			</div>
			<div>
				<input onChange={onOptionChange} type="radio" name="genre" id="rock" value="rock" />
				<label htmlFor="rock">Rock</label>
			</div>
			<div>
				<input onChange={onOptionChange} type="radio" name="genre" id="pop" value="pop" />
				<label htmlFor="pop">Pop</label>
			</div>
		</fieldset>
	);
};
export default GenreSearch;
