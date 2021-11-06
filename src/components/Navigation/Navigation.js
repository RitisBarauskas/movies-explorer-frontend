import {NavLink} from "react-router-dom";
import "./Navigation.css";


function Navigation() {


    return (
        <nav className="navigation">
            <div className="navigation__display">
                <ul className="navigation__nav">
                    <li className="navigation__li">
                        <NavLink className="navigation__link navigation__link_index" to="/">
                            Главная
                        </NavLink>
                    </li>
                    <li className="navigation__li">
                        <NavLink className="navigation__link" to="/movies">
                            Фильмы
                        </NavLink>
                    </li>
                    <li className="navigation__li">
                        <NavLink className="navigation__link" to="/saved-movies">
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>
                <NavLink className="navigation__account" to="/profile">
                    <p className="navigation__account-text">Аккаунт</p>
                    <div className="navigation__account-image"> </div>
                </NavLink>
            </div>
            <button type="button" className="navigation__burger navigation__burger_close"> </button>
            <div className="navigation__shadow"> </div>
        </nav>
    )
}

export default Navigation;
