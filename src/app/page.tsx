'use client'
import React from 'react';
import { Carrusel } from "./Comp/carrusel";
import "./sesion.css";

const Login: React.FC = () => {
    return (
        <div className="contenedor">
            <div className="formulario">
                <img src="foto_sesion/logo.png" alt="Logo de la página" />
                <h3 className="titulo">Iniciar sesión</h3>
                <p className="registrarse-link">
                    ¿No tiene una cuenta? <a href="registro">Registrarse</a>
                </p>
                {/* cambiar el action al hacer el back */}
                <form action="home" method="post"> 
                    <div className="inputbox">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Ingrese su usuario"
                            required
                        />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
            <div className="productos">
                <Carrusel />
            </div>
        </div>
    );
};

export default Login;
