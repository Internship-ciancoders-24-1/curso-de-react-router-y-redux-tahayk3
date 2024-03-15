import React from "react";

import '../assets/styles/components/Register.scss';

import { Link } from 'react-router-dom';

const Register = () =>(
    <section className="register">
        <section className="register__container">
            <h2>Registrar</h2>
            <form className="register__container--from">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="COntraseña" />
                <button className="button">Registrame</button>
            </form>
            <Link to="/login">Iniciar sesion</Link>
        </section>
    </section>
);

export default Register;