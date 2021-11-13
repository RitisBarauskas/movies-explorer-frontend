import "./FilterCheckBox.css";

function FilterCheckBox({isShortMovies, handleShortMovies}) {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__container">
                <input className="filter-checkbox__input" type="checkbox" name="shortMovies" id="" checked={isShortMovies} onChange={handleShortMovies}/>
                <span className="filter-checkbox__visible"> </span>
                Короткометражки
            </label>
        </div>
    )
}

export default FilterCheckBox;