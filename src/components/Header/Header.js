import "./Header.css";
import logoPath from "../../images/logo.svg";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink className="header__link-logo" to="/">
                    <img className="header__logo" src={logoPath} alt="Логотип"/>
                </NavLink>
                <nav>
                    <ul className="header__nav">
                        <li className="header__li">
                            <NavLink className="header__link header__link_reg" to="/signup">
                                Регистрация
                            </NavLink>
                        </li>
                        <li className="header__li header__li_login">
                            <NavLink className="header__link header__link_login" to="/signin">
                                Войти
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
