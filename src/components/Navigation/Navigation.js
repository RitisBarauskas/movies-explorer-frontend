import {NavLink} from "react-router-dom";
import "./Navigation.css";
import {useState} from "react";


function Navigation() {
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);

    const navigationDisplayClass = `navigation__display ${isBurgerMenu ? 'navigation__display_active' : ''}`;
    const burgerButtonClass = `navigation__burger ${isBurgerMenu ? 'navigation__burger_close' : ''}`;
    const navigationShadowClass = `navigation__shadow ${isBurgerMenu ? 'navigation__shadow_active' : ''}`;

    const handleClickBurger = () => {
        if (isBurgerMenu) {
            setIsBurgerMenu(false);
        } else {
            setIsBurgerMenu(true);
        }
    }

    return (
        <nav className="navigation">
            <div className={navigationDisplayClass}>
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
            <button type="button" className={burgerButtonClass} onClick={handleClickBurger}> </button>
            <div className={navigationShadowClass}> </div>
        </nav>
    )
}

export default Navigation;
