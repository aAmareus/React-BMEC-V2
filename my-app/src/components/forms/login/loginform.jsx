import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import './login.css';

import TLogo from '../../img/logoBN.png';

const Loginform = () => {

    // Navigation hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(email.endsWith('@gmail.com')) {
            navigate('/user/dashboard');
        } else if(email.endsWith('@admin.bec.cl')) {
            navigate('/admin/dashboard');
        } else {
            alert('Credenciales inválidas. Por favor, verifica tu correo electrónico.');
        }

    }
  return (
    <>
        <Container className='login-form-container'>
            <div className="form-layout">
                <div className="welcome-title">
                    <h3>¡Bienvenid@ a nuestra plataforma!</h3>
                </div>
                <div className="img-holder">
                    <img src={TLogo} alt="Logo" />
                </div>

                <div className="fields">
                    <h3>¡Ingresa tus credenciales!</h3>
                    <input 
                    type="text" 
                    name="nameIpt" 
                    id="name" 
                    placeholder='Correo'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="passIpt" id="pass" placeholder='Contraseña' />

                    <button className='btn submit-btn'
                            onClick={handleSubmit}
                    >
                        <span>Iniciar sesión</span>
                    </button>

                    <span className='register-link'>
                        ¿No tienes cuenta?
                        <Link to="/register" className='redirect'> Regístrate aquí</Link>
                    </span>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Loginform;