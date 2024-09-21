import React from 'react';
import "./registro.css"

const registro: React.FC = () => {
    return (
        <div className="contenedor">
        <div className="formulario">
            <img src="foto_sesion/logo.png" alt="Logo de la página"/> 
            <h2>Registro</h2>
            <form action="validacion_registro.jsp" method="post">
            
            	<div className="inputbox">
                    <label htmlFor="usuario">Nombre de usuario</label>
                    <input type="text" id="usuario" name="usuario" placeholder="Ingrese su nombre de usuario" required/>
                </div>
                
                <div className="inputbox">
                    <label htmlFor="nombre" >Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required/>
                </div>
                
                  <div className="inputbox">
                    <label htmlFor="apellido" >Apellido</label>
                    <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" required/>
               	  </div>

               	 <div className="inputbox">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Ingrese su correo electronico" required/>
              	  </div>

              	  <div className="inputbox">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña " required/>
              	  </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>    
    );
};

export default registro;