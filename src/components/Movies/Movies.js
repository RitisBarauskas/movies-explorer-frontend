import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = () => {
    return (
        <>
            <Header />
            <div className="movies">
                <SearchForm />
                <MoviesCardList />
            </div>
            <Footer />
        </>
    )
};

export default Movies;
