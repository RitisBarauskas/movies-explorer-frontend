import {NavLink} from "react-router-dom";
import "./DefaultHeader.css";

function DefaultHeader() {
    return (
        <nav className="default-header">
            <ul className="default-header__nav">
                <li className="default-header__li">
                    <NavLink className="default-header__link default-header__link_reg" to="/signup">
                        Регистрация
                    </NavLink>
                </li>
                <li className="default-header__li default-header__li_login">
                    <NavLink className="default-header__link default-header__link_login" to="/signin">
                        Войти
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default DefaultHeader;