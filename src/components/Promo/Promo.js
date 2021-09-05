import "./Promo.css";
import {NavLink} from "react-router-dom";
import promoImagePath from "../../images/promo_logo.svg";


function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <div className="promo__info">
                    <h1 className="promo__title">
                        Учебный проект студента факультета<br />Веб-разработки.
                    </h1>
                    <p className="promo__subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                    <button className="promo__link">
                        Узнать больше
                    </button>
                </div>
                <img src={promoImagePath} className="promo__image" alt="Логотип промо" />
            </div>
        </div>
    )
}

export default Promo;
