import React, { useState } from 'react';
import "../Style/Login.css";
import { useRef } from 'react';
import {checkValidate} from "../utils/validate"

function Login(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailID, setEmailID] = useState('');

    const [errMessageState, setErrMessageState]=useState(null)
    const name = useRef(null)

    const emailref = useRef(null)
    const passwordref = useRef(null)

    const FormSubmit = () =>{
        //validate the form
        console.log(name?.current?.value);

        console.log(emailref?.current?.value);
        console.log(passwordref?.current?.value);

        const errMessage = (checkValidate(emailref?.current?.value, passwordref?.current?.value))
        setErrMessageState(errMessage);

    //   const errMEssage = checkValidate (emailref?.current?.value ,passwordref?.current?.value);

    }

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
        setEmailID(event.target.value);
    }

    return (
        <div className='loginPage'>
            <div className='LoginFormDiv'>
                <img className='logo' src='/Netflix_Logo.png' alt="Netflix Logo" />
                <form className='form ' onSubmit={(e)=>{
                    e.preventDefault()
                }}>

                    <h1 className='FormHeading'>{isLogin ? "Sign In" : "Sign Up"}</h1>

                    <input ref={name} type='text' className='mt-3 p-4' placeholder='Username' value={username} onChange={handleUsernameChange} />

                    <input ref={passwordref} type='password' className='mt-3 p-4 my-4' placeholder='Password' value={password} onChange={handlePasswordChange} />
                  
                    {!isLogin && <input ref={emailref} type='Email' placeholder='Email' className='mt-3 p-4 my-4' value={emailID} onChange={handleNameChange}  />}
                 
                    <input type='Submit' className='mt-3 p-4 my-4 bg-red-600 rounded-lg' value={isLogin ? "Login" : "Sign Up"} onClick={FormSubmit} />
                    <p>{errMessageState}</p>
                    <p onClick={toggleSigninBtn}>{isLogin?"click here to login":"click here to signup"}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
