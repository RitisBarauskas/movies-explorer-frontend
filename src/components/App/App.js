import {Route, Switch } from 'react-router-dom';
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

function App() {
    const [cards, setCards] = useState([])

    const isIndex = true;

    useEffect(() => {
        apiMovies.getDataCards().then((cards) => {
            setCards(cards);
            console.log(cards);

        }).catch((err) => console.log(err));
    }, []);
    console.log(cards)
    return (
        <div className="app">
            <Switch>
                <Route path="/movies">
                    <Movies
                        cards={cards}
                    />
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies
                        cards={cards}
                    />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/404">
                    <PageNotFound />
                </Route>
                <Route path="/">
                    <Header
                        isIndex={isIndex}
                    />
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Footer />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
