import "./Header.css";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import {NavLink} from "react-router-dom";
import logoPath from "../../images/logo.svg";
import AuthHeader from "../AuthHeader/AuthHeader";


function Header(isLogin) {
    isLogin = true;
    return (
        <header className={isLogin?"header header_auth":"header"}>
            <div className="header__container">
                <NavLink className="header__link-logo" to="/">
                    <img className="header__logo" src={logoPath} alt="Логотип"/>
                </NavLink>
                {isLogin?<AuthHeader />:<DefaultHeader />}
            </div>
        </header>

    )
}

export default Header;
