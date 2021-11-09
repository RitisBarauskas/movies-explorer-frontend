import {MOVIES_URL_API} from "./Constants";

class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getDataCards() {
        return fetch(this._url, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }
}

const apiMovies = new MoviesApi({
    url: MOVIES_URL_API,
    headers: {
        "content-type": "application/json"
    }
})

export default apiMovies;