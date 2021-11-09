export const MOVIES_URL = 'https://api.nomoreparties.co';
export const MOVIES_URL_API = 'https://api.nomoreparties.co/beatfilm-movies';


export const getDurationHM = (minutes) => {
    return (Math.trunc(minutes / 60))+'ч '+(minutes % 60)+'мин';
}