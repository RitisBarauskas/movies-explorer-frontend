import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <p className="portfolio__title">
                Портфолио
            </p>
            <ul className="portfolio__links">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://ritisbarauskas.github.io/how-to-learn/">
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://ritisbarauskas.github.io/russian-travel/">
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://mesto.website/">
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;
