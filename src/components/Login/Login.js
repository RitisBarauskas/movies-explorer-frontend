import "./Login.css";
import {Link} from "react-router-dom";
import logoPath from "../../images/logo.svg"

const Login = () => {
    return (
        <section className="login">
            <Link to="/" className="login__link-logo">
                <img src={logoPath} className="login__logo" alt="Логотип" />
            </Link>
            <h2 className="login__title">
                Добро пожаловать!
            </h2>
            <form className="login__form">
                <label className="login__label">
                    E-mail
                    <input
                        className="login__input"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        autoComplete="off"
                    />
                </label>
                <label className="login__label">
                    Пароль
                    <input
                        className="login__input"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        required
                        minLength="8"
                        autoComplete="off"
                    />
                </label>
                <button className="login__button" type="submit">
                    Войти
                </button>
                <p className="login__text">
                    Еще не зарегистрированы?
                    <Link to="/signup" className="login__link">
                        Регистрация
                    </Link>
                </p>
            </form>
        </section>
    )
};

export default Login;