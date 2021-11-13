import "./Profile.css";
import Header from "../Header/Header";


const Profile = ({loggedIn}) => {
    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="profile">
                <h2 className="profile__title">
                    Привет, Ритис!
                </h2>
                <form className="profile__form">
                    <label className="profile__label">
                        Имя
                        <input
                            className="profile__input"
                            name="name"
                            placeholder="Имя"
                            required
                        />
                    </label>
                    <hr className="profile__line" />
                    <label className="profile__label">
                        E-mail
                        <input
                            className="profile__input"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            required
                        />
                    </label>
                </form>
                <div className="profile__buttons">
                    <button className="profile__button">
                        Редактировать
                    </button>
                    <button className="profile__button profile__button_exit">
                        Выйти из аккаунта
                    </button>
                </div>
            </section>
        </>
    )
};

export default Profile;