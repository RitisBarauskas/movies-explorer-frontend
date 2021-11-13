import "./Login.css";
import {Link} from "react-router-dom";
import logoPath from "../../images/logo.svg"
import {useState} from "react";

const Login = ({handleSignIn}) => {

    const [data, setData] = useState({
        email: '',
        password: ''
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
        handleSignIn(data);
    }

    return (
        <section className="login">
            <Link to="/" className="login__link-logo">
                <img src={logoPath} className="login__logo" alt="Логотип" />
            </Link>
            <h2 className="login__title">
                Добро пожаловать!
            </h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__label">
                    E-mail
                    <input
                        className="login__input"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </label>
                <span className="login__error-text">{errors.email}&nbsp;</span>
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
                        onChange={handleChange}
                    />
                </label>
                <span className="login__error-text">{errors.password}&nbsp;</span>
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