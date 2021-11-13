import "./Profile.css";
import Header from "../Header/Header";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useContext, useState} from "react";


const Profile = ({loggedIn, handleLogout, handleUpdateProfile}) => {
    const currentUser = useContext(CurrentUserContext);
    const [data, setData] = useState({
        email: '',
        name: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        const {name, value} = evt.target

        setData({
            ...data,
            [name]: value
        })

        setErrors({
            ...errors,
            [name]: evt.target.validationMessage
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateProfile(data);
    }

    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="profile">
                <h2 className="profile__title">
                    Привет, {currentUser.name}!
                </h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <label className="profile__label">
                        Имя
                        <input
                            className="profile__input"
                            name="name"
                            placeholder="Имя"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <span className="profile__error-text">{errors.name}&nbsp;</span>
                    <hr className="profile__line" />
                    <label className="profile__label">
                        E-mail
                        <input
                            className="profile__input"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <span className="profile__error-text">{errors.email}&nbsp;</span>
                    <div className="profile__buttons">
                        <button className="profile__button" type="submit">
                            Редактировать
                        </button>
                        <button className="profile__button profile__button_exit" onClick={handleLogout}>
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
};

export default Profile;