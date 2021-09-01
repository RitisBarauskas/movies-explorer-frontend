import {Route, Switch } from 'react-router-dom';
import Movies from  '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/save-movies">
                    <SavedMovies />
                </Route>
                <Route path="/profile">
                    <AboutMe />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/">
                    <AboutProject />
                </Route>
            </Switch>
        </div>
    );
}

export default App;