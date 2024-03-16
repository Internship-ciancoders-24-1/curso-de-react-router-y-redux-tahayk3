import { useState } from 'react';
import React from "react";

import '../assets/styles/components/Register.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { registerRequest } from '../actions';
import Header from "../components/Header";


const Register = props =>{

    const [form, setValues] = useState({
        email:'',
        name: '',
        password: '',
    });

    const handleInput = event =>{
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        registerRequest(form);
        props.history.push('/');
    }



    return (
        <>
        <Header></Header>
            <section className="register">
                <section className="register__container">
                    <h2>Registrar</h2>
                    <form className="register__container--from" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            className="input" 
                            type="text" 
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input
                            name="email" 
                            className="input" 
                            type="text" 
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name="password" 
                            className="input" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={handleInput} 
                        />
                        <button className="button">Registrame</button>
                    </form>
                    <Link to="/login">Iniciar sesion</Link>
                </section>
            </section>
        </>
    );
}

export default connect(null, null)(Register);