import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                <ul className="movies-card-list__list">
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                    <li className="movies-card-list__item">
                        <MoviesCard />
                    </li>
                </ul>
                <button className="movies-card-list__button">Ещё</button>
            </div>
        </div>
    )
}

export default MoviesCardList;