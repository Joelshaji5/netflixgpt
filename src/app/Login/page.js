import React, { useState } from 'react';
import "../Style/Login.css";

function Login(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const toggleSigninBtn = () => {
        setIsLogin(!isLogin);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div className='loginPage'>
            <div className='LoginFormDiv'>
                <img className='logo' src='/Netflix_Logo.png' alt="Netflix Logo" />
                <form className='form ' autoComplete="off">

                    <h1 className='FormHeading'>{isLogin ? "Sign In" : "Sign Up"}</h1>

                    <input type='text' className='mt-3 p-4' placeholder='Username' value={username} onChange={handleUsernameChange} />
                    <input type='password' className='mt-3 p-4 my-4' placeholder='Password' value={password} onChange={handlePasswordChange} />
                    {!isLogin && <input type='text' placeholder='Name' className='mt-3 p-4 my-4' value={name} onChange={handleNameChange}  />}
                    <input type='Submit' className='mt-3 p-4 my-4 bg-red-600 rounded-lg' value={isLogin ? "Login" : "Sign Up"} onClick={toggleSigninBtn} />
                    <p onClick={toggleSigninBtn}>{isLogin?"click here to login":"click here to signup"}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
