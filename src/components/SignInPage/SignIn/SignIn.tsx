import React, { useState, ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';
import style from './signIn.module.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { REGISTER_PATH } from '../../Routes/Routes';
import { FORGOT_PASSWORD_PATH } from './../../Routes/Routes';


type SignInPropsType = {
    email : string | undefined
    password: string | undefined
    rememberMe: boolean
    error: string | undefined
    setEmail : (e: ChangeEvent<HTMLInputElement>)=> void
    setPassword : (e: ChangeEvent<HTMLInputElement>)=>void
    setRememberMe : (e: ChangeEvent<HTMLInputElement>)=> void
    signIn:() => void
};


const SignIn: React.FC<SignInPropsType> = (props) => {

const {email, password, rememberMe,error, setEmail, setPassword, setRememberMe, signIn} = props;

    return (
		<div className={style.signIn}>
        <Input placeholder='email' type = 'email' onChange ={setEmail} value={email} error={error}/>
        <Input type = 'password'  placeholder='password' onChange ={setPassword} value={password} error={error}/>
        <Input type = 'checkbox' onChange ={setRememberMe} checked={rememberMe}/>  
        <span>Remember Me</span>
        <Button onClick = {signIn}>SIGN IN</Button>
        <NavLink to={FORGOT_PASSWORD_PATH}>Forgot password?</NavLink>
				<br/>
        <NavLink to={REGISTER_PATH}>Registration</NavLink>
    </div>
		);
};

export default SignIn;