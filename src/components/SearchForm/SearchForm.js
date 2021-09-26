import "./SearchForm.css";

function SearchForm () {
    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <div className="search-form__image">
                    </div>
                    <input className="search-form__input" type="text" placeholder="Фильм" />
                    <input type="submit" className="search-form__submit" value="Найти" />
                    <label className="search-form__short-box">
                        <input className="search-form__checkbox" type="checkbox" name="shortMovies" id="" />
                        <span className="search-form__checkbox-visible"></span>
                        Короткометражки
                    </label>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;
