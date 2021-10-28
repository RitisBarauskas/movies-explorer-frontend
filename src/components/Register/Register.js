import "./Register.css";
import {Link} from "react-router-dom";
import logoPath from "../../images/logo.svg"

const Register = () => {
    return (
        <section className="register">
            <Link to="/" className="register__link-logo">
                <img src={logoPath} className="register__logo" alt="Логотип" />
            </Link>
            <h2 className="register__title">
                Добро пожаловать!
            </h2>
            <form className="register__form">
                <label className="register__label">
                    Имя
                    <input
                        className="register__input"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        required
                        autoComplete="off"
                    />
                </label>
                <label className="register__label">
                    E-mail
                    <input
                        className="register__input"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        autoComplete="off"
                    />
                </label>
                <label className="register__label">
                    Пароль
                    <input
                        className="register__input"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        required
                        minLength="8"
                        autoComplete="off"
                    />
                </label>
                <button className="register__button" type="submit">
                    Зарегистрироваться
                </button>
                <p className="register__text">
                    Уже зарегистрированы?
                    <Link to="/signin" className="register__link">
                        Войти
                    </Link>
                </p>
            </form>
        </section>
    )
};

export default Register;