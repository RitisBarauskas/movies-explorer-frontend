import "./MoviesCard.css";
import imagePath from "../../images/33_word_about_design.png";
import {useState} from "react";

function MoviesCard ({isSaved}) {

    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        if (isLike) {
            setIsLike(false);
        } else {
            setIsLike(true);
        }
    }
    let likeClassName;

    if (!isSaved) {
        likeClassName = `movies-card__like ${isLike ? 'movies-card__like_active' : ''}`;
    } else {
        likeClassName = `movies-card__like movies-card__like_delete`;
    }


    return (
        <div className="movies-card">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <p className="movies-card__time">1ч 42мин</p>
            <button className={likeClassName} onClick={handleLike}> </button>
            <img src={imagePath} className="movies-card__image" alt="Картинка к фильму"/>
        </div>
    )
}

export default MoviesCard;