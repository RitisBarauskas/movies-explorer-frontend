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

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cards, setCards] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const isIndex = true;

    const history = useHistory();

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            apiAuth.getUser(jwt)
                .then((res) => {
                    if (res) {
                        console.log(res)
                        // setUserEmail(res.email);
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
            apiMovies.getDataCards().then((cards) => {
                setCards(cards);
            }).catch((err) => console.log(err));
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
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    // setUserEmail(data.email);
                    setLoggedIn(true);
                    history.push('/');
                } else {
                    // setIsInfoTooltipAuth(false);
                    // setIsInfoTooltipPopupOpen(true);
                }
            })
            .catch(err => console.log(err));
    }

    const handleSignUp = data => {
        apiAuth.signUp(data)
            .then((res)=> {
                history.push('/signin')
            })
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        // setUserEmail('');
        // setLoggedIn(false);
        // history.push('sign-in');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Switch>
                    <Route path="/movies">
                        <Movies
                            loggedIn={loggedIn}
                            cards={cards}
                        />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies
                            loggedIn={loggedIn}
                            cards={cards}
                        />
                    </Route>
                    <Route path="/profile">
                        <Profile
                            loggedIn={loggedIn}
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
