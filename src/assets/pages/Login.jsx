import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.svg';
import eyeOnSvg from '../images/icons/eye-show.svg';
import eyeOffSvg from '../images/icons/eye-off.svg';
import EmailSvg from '../images/icons/email.svg';
import colorsCombination from '../images/icons/combination-colors.svg';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [isInput, setIsInput] = useState(true);;

    const handleInput = () => {
        setIsInput(!isInput);
    };

    return (
        <div className='form-login'>
            <div className='form-content'>
                <form className='form-login_content'>
                    <div className='form-login_header-text'>
                        <img className='form-login_logo' src={logo} alt='IDAAN LOGO'/>
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className='form-login_input'>
                        <div className='form-login_input-text_content'>
                            <input className='form-login_input-text' autoComplete='off' type='text' placeholder='Correo electronico'/>
                            <div className='position-absolute'>
                                <img src={EmailSvg}/>
                            </div>
                        </div>
                        <div className='form-login_input-password_content position-relative'>
                            <input className='form-login_input-password' autoComplete='off' type={isInput ? "password" : "text"} placeholder='Contraseña'/>
                            <div className='form-login-password_vectors position-absolute'>
                                <img onClick={handleInput} src={isInput ? eyeOnSvg : eyeOffSvg} alt={isInput ? "Ver contraseña" : "Ocultar Contraseña"} title={isInput ? "Ver contraseña" : "Ocultar Contraseña"}/>
                            </div>
                        </div>
                        <div className='form-login_text-bottom_content'>
                            <div className='form-login_input-checkbox_content'>
                                <label className='form-login_input-checkbox-label'>Recordarme</label>
                                <input className='form-login_input-checkbox' type='checkbox'/>
                            </div>

                            <div className='form-login_text-bottom'>
                                <Link to={"/forgotPassword"}>Olvidé mi contraseña</Link>
                            </div>
                        </div>
                        <button className='btn-secondary w-100 form-login_text-bottom_first'>Iniciar sesión</button>  
                        <button className='btn-primary w-100 form-login_text-bottom_second'><Link to={"/register"} className='text-decoration-none color-inherit'>Registrarme</Link></button>  
                    </div>
                </form>
            </div>
            <div className='form-text'>
                <div>
                    <h1>Bienvenido al IDAAN</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;