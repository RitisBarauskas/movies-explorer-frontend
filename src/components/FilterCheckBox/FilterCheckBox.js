import "./FilterCheckBox.css";

function FilterCheckBox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__container">
                <input className="filter-checkbox__input" type="checkbox" name="shortMovies" id="" />
                <span className="filter-checkbox__visible"> </span>
                Короткометражки
            </label>
        </div>
    )
}

export default FilterCheckBox;