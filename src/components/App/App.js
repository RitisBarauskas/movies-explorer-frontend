import {Route, Switch, useHistory} from 'react-router-dom';
import Movies from  '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import apiMovies from "../../utils/MoviesApi";
import {useEffect, useState} from "react";
import apiAuth from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {getFullURL} from "../../utils/Utils";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cards, setCards] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const isIndex = true;
    const [movies, setMovies] = useState([])
    const [showCards, setShowCards] = useState(4)
    const history = useHistory();

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            apiAuth.getUser(jwt)
                .then((res) => {
                    if (res) {
                        setCurrentUser(res);
                        setLoggedIn(true);
                        history.push('/');
                    }
                })
                .catch(err => console.log(err));
            return jwt;
        }
    }

    useEffect(() => {
        const token = tokenCheck();
        if (token) {
            apiMovies.getDataCards()
                .then((movies) => {
                    setMovies(movies);
                })
                .catch((err) => console.log(err));
        }
    }, [loggedIn]);

    useEffect(() => {
        tokenCheck();
    }, [loggedIn]);

    useEffect(() => {
        if (loggedIn) {
            history.push("/");
        }
    }, [history, loggedIn]);


    const handleSignIn = (data) => {
        apiAuth.signIn(data)
            .then((res) => {
                localStorage.setItem('jwt', res.token);
                setLoggedIn(true);
                history.push('/');
            })
            .catch(err => console.log(err));
    }

    const handleSignUp = (data) => {
        apiAuth.signUp(data)
            .then((res)=> {
                history.push('/signin')
            })
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/signin');
    }

    const handleUpdateProfile = (data) => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            apiAuth.updateProfile({jwt, data})
                .then((res) => {
                    setCurrentUser(res);
                    history.push('/')
                })
                .catch(err => console.log(err))
        }
    }

    const handleFilterCards = ({words, shortMovies}) => {
        let duration = 9999
        if (shortMovies) {
            duration = 40
        }
        const cards = movies.filter((movie) => {
            let name = (movie.nameRU+movie.nameEN).toLowerCase()
            return (name.includes(words.search.toLowerCase()) && movie.duration <= duration)
        })
        setCards(cards);
        setShowCards(4);
    }

    const handleAddCards = () => {
        setShowCards(showCards+1);
    }

    const handleAddMovie = (card) => {
        const saveCard = {
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: getFullURL(card.image.url),
            trailer: card.trailerLink,
            thumbnail: getFullURL(card.image.url),
            movieId: card.id.toString(),
            nameRU: card.nameRU,
            nameEN: card.nameEN,
        }
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            apiAuth.addMovie({jwt, movie: saveCard})
                .then((res) => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Switch>
                    <Route path="/movies">
                        <Movies
                            loggedIn={loggedIn}
                            cards={cards}
                            handleFilterCards={handleFilterCards}
                            handleAddCards={handleAddCards}
                            showCards={showCards}
                            handleAddMovie={handleAddMovie}
                        />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies
                            loggedIn={loggedIn}
                            cards={cards}
                            handleFilterCards={handleFilterCards}
                            handleAddCards={handleAddCards}
                            showCards={showCards}
                        />
                    </Route>
                    <Route path="/profile">
                        <Profile
                            loggedIn={loggedIn}
                            handleLogout={handleLogout}
                            handleUpdateProfile={handleUpdateProfile}
                        />
                    </Route>
                    <Route path="/signin">
                        <Login
                            handleSignIn={handleSignIn}
                        />
                    </Route>
                    <Route path="/signup">
                        <Register
                            handleSignUp={handleSignUp}
                        />
                    </Route>
                    <Route path="/404">
                        <PageNotFound />
                    </Route>
                    <Route path="/">
                        <Header
                            isIndex={isIndex}
                            loggedIn={loggedIn}
                        />
                        <Promo />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
