import "./AboutProject.css";

const AboutProject = () => {
    return (
        <div className="about-project" id="about-project">
            <div className="about-project__container">
                <h2 className="about-project__title">
                    О проекте
                </h2>
                <article className="about-project__article">
                    <h3 className="about-project__article-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__article-text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </article>
                <article className="about-project__article">
                    <h3 className="about-project__article-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__article-text">
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </article>
                <div className="about-project__timeline">
                    <div className="about-project__timeline-backend">
                        1 неделя
                    </div>
                    <div className="about-project__timeline-frontend">
                        4 недели
                    </div>
                    <p className="about-project__timeline-subtitle">
                        Back-end
                    </p>
                    <p className="about-project__timeline-subtitle">
                        Front-end
                    </p>
                </div>
            </div>
        </div>
    )
};

export default AboutProject;
