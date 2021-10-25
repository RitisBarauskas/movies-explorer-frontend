import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
        </div>
    )
};

export default Movies;
