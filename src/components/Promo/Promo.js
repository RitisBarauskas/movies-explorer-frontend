import "./Promo.css";
import {NavLink} from "react-router-dom";


function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <p className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <NavLink className="promo__link" to="/about-project">
                    Узнать больше
                </NavLink>
            </div>
        </div>
    )
}

export default Promo;
