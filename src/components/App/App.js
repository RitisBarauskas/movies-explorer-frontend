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

function App() {
    return (
        <div className="app">
            <Header />

            <Switch>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies />
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
                <Route path="/">
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
