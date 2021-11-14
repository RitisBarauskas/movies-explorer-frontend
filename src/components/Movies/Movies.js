import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({loggedIn, cards, handleFilterCards, showCards, handleAddCards, handleAddMovie}) => {
    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <div className="movies">
                <SearchForm
                    handleFilterCards={handleFilterCards}
                />
                <MoviesCardList
                    cards={cards}
                    handleAddCards={handleAddCards}
                    showCards={showCards}
                    handleAddMovie={handleAddMovie}
                />
            </div>
            <Footer />
        </>
    )
};

export default Movies;
