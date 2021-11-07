import "./Header.css";
import {NavLink} from "react-router-dom";
import logoPath from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {useState} from "react";


function Header() {
    const [isLogin, setIsLogin] = useState(true);

    const headerClass = `header ${isLogin ? 'header_auth' : ''}`;

    let navigation;

    if (!isLogin) {
        navigation =
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
    } else {
        navigation = <Navigation />
    }

    return (
        <header className={headerClass}>
            <div className="header__container">
                <NavLink className="header__link-logo" to="/">
                    <img className="header__logo" src={logoPath} alt="Логотип"/>
                </NavLink>
                {navigation}
            </div>
        </header>

    )
}

export default Header;
