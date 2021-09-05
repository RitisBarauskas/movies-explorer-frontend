import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <p className="portfolio__title">
                Портфолио
            </p>
            <ul className="portfolio__links">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://ritisbarauskas.github.io/how-to-learn/" target="_blank" rel="noreferrer">
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://ritisbarauskas.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://mesto.website/" target="_blank" rel="noreferrer">
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;
