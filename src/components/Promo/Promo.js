import "./Promo.css";


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
                <button className="promo__link">
                    Узнать больше
                </button>
            </div>
        </div>
    )
}

export default Promo;
