import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </div>
                <nav className="footer__links">
                    <a className="footer__link" href="https://praktikum.yandex.ru/https://github.com/RitisBarauskas" target="_blank">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__link" href="https://www.facebook.com/barauskasritis" target="_blank">
                        Facebook
                    </a>
                    <a className="footer__link" href="https://github.com/RitisBarauskas" target="_blank">
                        Github
                    </a>
                </nav>
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()} BestMovies.fun
                </p>
            </div>
        </footer>
    )
}

export default Footer;
