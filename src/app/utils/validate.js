import React from 'react'

 export function checkValidate(emailID , password) {
const isEmailIDValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailID);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

if(!isEmailIDValid)return "Email is not Valid";
if(!isPasswordValid)return "Password is not valid";

return null;
    
}

