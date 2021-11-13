import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({loggedIn, cards}) => {
    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <div className="movies">
                <SearchForm />
                <MoviesCardList
                    cards={cards}
                />
            </div>
            <Footer />
        </>
    )
};

export default Movies;
