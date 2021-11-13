import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useState} from "react";

function MoviesCardList ({isSaved, cards, handleAddCards, showCards}) {
    const renderCards = cards.slice(0, showCards);
    const addButtonClass = `movies-card-list__button ${(showCards >= cards.length) && 'movies-card-list__button_hidden'}`;


    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                <ul className="movies-card-list__list">
                    {renderCards.map((card, i) => (
                        <MoviesCard
                            isSaved={isSaved}
                            data={card}
                            key={card.id}
                        />
                    ))}
                </ul>
                <button className={addButtonClass} onClick={handleAddCards}>Ещё</button>
            </div>
        </div>
    )
}

export default MoviesCardList;