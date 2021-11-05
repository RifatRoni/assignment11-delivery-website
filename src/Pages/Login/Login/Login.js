import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import './Login.css';
import { Col, Row } from 'react-bootstrap';
import loginImg from '../../../images/login/login.gif'
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((res) => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className="mt-4">
            <h2 className="text-center">Please Login and Continue</h2>     
                <div className="loginbox">
                    <img src={loginImg} className="w-25" alt="" />                
                    <button onClick={handleGoogleSignIn} className="btn btn-danger w-25">Google Sign In</button> 
                </div>       
        </div>
    );
};

export default Login;