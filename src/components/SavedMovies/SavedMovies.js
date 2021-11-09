import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({cards}) => {
    return (
        <>
            <Header />
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