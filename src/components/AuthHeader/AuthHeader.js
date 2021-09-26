import {NavLink} from "react-router-dom";
import "./AuthHeader.css";

function AuthHeader() {
    return (
        <nav className="auth-header">
            <ul className="auth-header__nav">
                <li className="auth-header__li">
                    <NavLink className="auth-header__link" to="/movies">
                        Фильмы
                    </NavLink>
                </li>
                <li className="auth-header__li">
                    <NavLink className="auth-header__link" to="/saved-movies">
                        Сохранённые фильмы
                    </NavLink>
                </li>
            </ul>
            <NavLink className="auth-header__account" to="/profile">
                <p className="auth-header__account-text">Аккаунт</p>
                <div className="auth-header__account-image"> </div>
            </NavLink>
        </nav>
    )
}

export default AuthHeader;
