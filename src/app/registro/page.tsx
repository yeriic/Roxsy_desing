"use client"
import { useState } from 'react';
import "./registro.css"

const Registro: React.FC = () => {
    const [nombre_usu, setnombre_usu] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setcorreo] = useState('');
    const [pass, setpass] = useState('');
    const [contrasenaConfirmar, setContrasenaConfirmar] = useState('');
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
        if (pass !== contrasenaConfirmar) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const res = await fetch('/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre_usu,
                nombre,
                apellido,
                correo,
                pass,
            }),
        });
    };

    return (
        <div className="contenedor">
            <div className="formulario">
                <img src="foto_sesion/logo.png" alt="Logo de la página" />
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className='division'>
                        <div className='div_uno'>
                            <div className="inputbox">
                                <label htmlFor="nombre_usu">Nombre de usuario</label>
                                <input 
                                    type="text" 
                                    id="nombre_usu" 
                                    name="nombre_usu" 
                                    placeholder="Ingrese su nombre de usuario" 
                                    required
                                    value={nombre_usu}
                                    onChange={(e) => setnombre_usu(e.target.value)}
                                />
                            </div>

                            <div className="inputbox">
                                <label htmlFor="nombre" >Nombre</label>
                                <input 
                                    type="text" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Ingrese su nombre" 
                                    required
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="inputbox">
                                <label htmlFor="apellido" >Apellido</label>
                                <input 
                                    type="text" 
                                    id="apellido" 
                                    name="apellido" 
                                    placeholder="Ingrese su apellido" 
                                    required
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='div_dos'>
                            <div className="inputbox">
                                <label htmlFor="correo">Correo electrónico</label>
                                <input 
                                    type="correo" 
                                    id="correo" 
                                    name="correo" 
                                    placeholder="Ingrese su correo electronico" 
                                    required
                                    value={correo}
                                    onChange={(e) => setcorreo(e.target.value)}
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
                                    value={pass}
                                    onChange={(e) => setpass(e.target.value)}
                                />
                            </div>

                            <div className="inputbox">
                                <label htmlFor="contrasena_confirmar">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    id="contrasena_confirmar" 
                                    name="contrasena_confirmar" 
                                    placeholder="Confirme su contraseña" 
                                    required
                                    value={contrasenaConfirmar}
                                    onChange={(e) => setContrasenaConfirmar(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Registro;
