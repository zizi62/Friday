import React, { useState, ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import style from './signIn.module.css'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import {  REGISTER_PATH } from '../../Routes/Routes'


type SignInPropsType = {
    email : string | undefined
    password: string | undefined
    rememberMe: boolean
    setEmail : (e: ChangeEvent<HTMLInputElement>)=> void
    setPassword : (e: ChangeEvent<HTMLInputElement>)=>void
    setRememberMe : (e: ChangeEvent<HTMLInputElement>)=> void
    signIn:() => void
}


const SignIn: React.FC<SignInPropsType> = (props) => {

const {email, password, rememberMe , setEmail, setPassword, setRememberMe, signIn} = props

    return <div className={style.signIn}>
        <Input placeholder='email' type = 'email' onChange ={setEmail} value={email} />
        <Input type = 'password'  placeholder='password' onChange ={setPassword} value={password}/>
        <Input type = 'checkbox' onChange ={setRememberMe} checked={rememberMe}/>  
        <span>Remember Me</span>
        <Button onClick = {signIn}>SIGN IN</Button>
        <NavLink to={REGISTER_PATH}>Registration</NavLink>
    </div>
}

export default SignIn