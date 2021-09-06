import {NavLink} from "react-router-dom";
import "./AuthHeader.css";

function AuthHeader() {
    return (
        <nav className="auth-header">
            <ul className="auth-header__nav">
                <li className="auth-header__li">
                    <NavLink className="auth-header__link auth-header__link_reg" to="/signup">
                        Регистрация
                    </NavLink>
                </li>
                <li className="auth-header__li auth-header__li_login">
                    <NavLink className="auth-header__link auth-header__link_login" to="/signin">
                        Войти
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default AuthHeader;