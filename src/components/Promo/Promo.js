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
                <a className="promo__link" href="#about-project">
                    Узнать больше
                </a>
            </div>
        </div>
    )
}

export default Promo;
