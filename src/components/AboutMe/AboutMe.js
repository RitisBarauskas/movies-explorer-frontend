import "./AboutMe.css";
import photoMePath from "../../images/photo_me.jpg";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe= () => {
    return (
        <div className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">
                    Студент
                </h2>
                <picture className="about-me__photo-wrapper">
                    <img src={photoMePath} className="about-me__photo" alt="Фото Ритиса Бараускаса"/>
                </picture>
                <p className="about-me__name">
                    Ритис Бараускас
                </p>
                <p className="about-me__about">
                    Fullstack-разработчик, 34 года
                </p>
                <p className="about-me__info">
                    Работаю журналистом в Перми. Пандемия COVID-19 подтолкнула к переосмыслению приоритетов.
                    В 2020 году решил восстановить свои навыки в разработке и выучить новые языки программирования.
                    Так я начал курс по backend (Python) и курс по frontend. Сейчас меняю сферу деятельности и
                    сразу после диплома выхожу на новое место работы backend-разработчиком.
                </p>
                <ul className="about-me__links">
                    <li className="about-me__li">
                        <a className="about-me__link" href="https://www.facebook.com/barauskasritis" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li className="about-me__li">
                        <a className="about-me__link" href="https://github.com/RitisBarauskas" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
            <Portfolio />
        </div>
    )
};

export default AboutMe;
