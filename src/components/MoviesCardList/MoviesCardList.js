import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({isSaved, cards}) {

    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                <ul className="movies-card-list__list">

                    {cards.map((card, i) => (
                        <MoviesCard
                            isSaved={isSaved}
                            data={card}
                            key={card.id}
                        />
                    ))}
                </ul>
                <button className="movies-card-list__button">Ещё</button>
            </div>
        </div>
    )
}

export default MoviesCardList;