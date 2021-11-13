import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import {useState} from "react";

function SearchForm ({handleFilterCards}) {
    const [data, setData] = useState({
        search: '',
    });

    const handleChange = (evt) => {
        const {name, value} = evt.target

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleFilterCards({words: data, shortMovies});
    }
    const [shortMovies, setShortMovies] = useState(false);

    const handleShortMovies = () => {
        setShortMovies(!shortMovies);
    }

    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__form" onSubmit={handleSubmit}>
                    <div className="search-form__find">
                        <div className="search-form__image">
                        </div>
                        <input
                            className="search-form__input"
                            type="text"
                            placeholder="Фильм"
                            name="search"
                            required
                            onChange={handleChange}
                        />
                        <input type="submit" className="search-form__submit" value="Найти" />
                    </div>
                    <FilterCheckBox
                        isShortMovies={shortMovies}
                        handleShortMovies={handleShortMovies}
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchForm;
