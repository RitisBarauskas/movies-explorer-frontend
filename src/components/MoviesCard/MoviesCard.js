import "./MoviesCard.css";
import {useState} from "react";
import {getDurationHM, MOVIES_URL} from "../../utils/Constants";

function MoviesCard ({isSaved, data}) {

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

    const getFullURL = (url) => {
        return MOVIES_URL+url;
    }

    return (
        <li className="movies-card">
            <div className="movies-card__container">
                <h3 className="movies-card__title">{data.nameRU}</h3>
                <p className="movies-card__time">{getDurationHM(data.duration)}</p>
                <button className={likeClassName} onClick={handleLike}> </button>
                <img src={getFullURL(data.image.url)} className="movies-card__image" alt={data.nameEN}/>
            </div>
        </li>
    )
}

export default MoviesCard;