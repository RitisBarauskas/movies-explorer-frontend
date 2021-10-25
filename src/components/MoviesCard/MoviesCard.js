import "./MoviesCard.css";
import imagePath from "../../images/33_word_about_design.png";
import likePath from "../../images/like.svg";

function MoviesCard () {
    return (
        <div className="movies-card">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <p className="movies-card__time">1ч 42мин</p>
            <img src={likePath} className="movies-card__like" alt="Лайк фильму"/>
            <img src={imagePath} className="movies-card__image" alt="Картика к фильму"/>
        </div>
    )
}

export default MoviesCard;