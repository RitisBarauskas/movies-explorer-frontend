import "./MoviesCard.css";
import {useState} from "react";
import {getDurationHM} from "../../utils/Constants";
import {getFullURL} from "../../utils/Utils";

function MoviesCard ({isSaved, data, handleAddMovie}) {

    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        if (isLike) {
            setIsLike(false);
        } else {
            setIsLike(true);
            handleAddMovie(data);
        }
    }
    let likeClassName;
    let pathImage;

    if (!isSaved) {
        likeClassName = `movies-card__like ${isLike ? 'movies-card__like_active' : ''}`;
        pathImage = getFullURL(data.image.url);
    } else {
        likeClassName = `movies-card__like movies-card__like_delete`;
        pathImage = data.image;
    }

    return (
        <li className="movies-card">
            <div className="movies-card__container">
                <h3 className="movies-card__title">{data.nameRU}</h3>
                <p className="movies-card__time">{getDurationHM(data.duration)}</p>
                <button className={likeClassName} onClick={handleLike}> </button>
                <img src={pathImage} className="movies-card__image" alt={data.nameEN}/>
            </div>
        </li>
    )
}

export default MoviesCard;