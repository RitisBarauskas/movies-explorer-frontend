import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

function SearchForm () {
    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <div className="search-form__find">
                        <div className="search-form__image">
                        </div>
                        <input className="search-form__input" type="text" placeholder="Фильм" required />
                        <input type="submit" className="search-form__submit" value="Найти" />
                    </div>
                    <FilterCheckBox />
                </form>
            </div>
        </div>
    )
}

export default SearchForm;
