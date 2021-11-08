import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
    return (
        <>
            <Header />
            <div className="saved-movies">
                <SearchForm />
                <MoviesCardList isSaved={true}/>
            </div>
            <Footer />
        </>
    )
};

export default SavedMovies;