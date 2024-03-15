import React from "react";

import '../assets/styles/components/Login.scss'

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

import { Link } from 'react-router-dom';

const Login = () =>(
    <div className="login">
        <section className="login__container">
            <h2>Inicia sesion</h2>
            <form action="login__container--from">
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesion</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" value="first_checkbox" />Recuerdame
                    </label>
                    <a href="/">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="" />Inicia sesion con Google</div>
                <div><img src={twitterIcon} alt="" />Inicia sesion con Twitter</div>
            </section>
            <p className="login__container--register">
                No tienes una cuenta <Link to="/register">Registrarse</Link>
            </p>
        </section>
    </div>
);

export default Login;