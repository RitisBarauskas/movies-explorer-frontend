import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({loggedIn, cards}) => {
    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <div className="saved-movies">
                <SearchForm />
                <MoviesCardList
                    isSaved={true}
                    cards={cards}
                />
            </div>
            <Footer />
        </>
    )
};

export default SavedMovies;