'use client'
import React, { useState } from 'react';
import { Carrusel } from "./Comp/carrusel";
import "./sesion.css";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {

        const [usuarioOEmail, setusuarioOEmail] = useState('');
        const [pass, setpass] = useState('');
        const router = useRouter();

        const handleSubmit = async (e: React.FormEvent) =>{
            e.preventDefault(); 
    
        const res = await fetch('/api/sesion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuarioOEmail,
                pass,
            }),
        });

        const data = await res.json();

            if (res.status === 401) {
                Swal.fire({
                    title: "Error",
                    text: "Usuario/correo o contraseña incorrecta",
                    icon: "error",
                    allowOutsideClick: true,
                    timer: 5000,
                    timerProgressBar: true,
                });
            }

            if(res.ok){
                setpass('');
                setusuarioOEmail('');
                Swal.fire({
                    title: "Exitoso",
                    text: "Se ha regitrado al usuario con exito",
                    icon: "success",
                    allowOutsideClick: true,
                    timer: 1000,
                    timerProgressBar: true,
                    
                })

                setTimeout(() => {
                   
                    router.replace('/main');
                }, 1000);
            }

    }

    return (
        <div className="contenedor">
            <div className="formulario">
                <img src="foto_sesion/logo.png" alt="Logo de la página" />
                <h3 className="titulo">Iniciar sesión</h3>
                <p className="registrarse-link">
                    ¿No tiene una cuenta? <a href="registro">Registrarse</a>
                </p>
                {/* cambiar el action al hacer el back */}
                <form onSubmit={handleSubmit}> 
                    <div className="inputbox">
                        <label htmlFor="usuarioOEmail">Usuario o Correo</label>
                        <input
                            type="text"
                            id="usuarioOEmail"
                            name="usuarioOEmail"
                            placeholder="Ingrese su usuario o correo"
                            value={usuarioOEmail}
                            onChange={(e) => setusuarioOEmail(e.target.value)}
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
                            value={pass}
                            onChange={(e) => setpass(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
            <div className="productos">
                <Carrusel/>
            </div>
        </div>
    );
};

export default Login;
