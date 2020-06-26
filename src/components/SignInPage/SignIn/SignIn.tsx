import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './signIn.module.css'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import {  REGISTER_PATH } from '../../Routes/Routes'


type SignInPropsType = {

}



const SignIn: React.FC<SignInPropsType> = () => {

const [loginValue, setLoginValue] = useState<string| undefined>('')
const [passwordValue, setPasswordValue] = useState<string| undefined>('')
const [rememberMeValue, setRememberMeValue] = useState<boolean>(false)

const [errorText, setError] = useState<string| undefined>('')

const setLogin = (value: string)=>{     
    setLoginValue(value)
}

const setPassword = (value: string)=> {
    setPasswordValue(value)
}

const setRememberMe = (value: boolean)=> {
    setRememberMeValue(value)
}



    return <div className={style.signIn}>
        <Input placeholder='email' type = 'email' onChange ={(e:React.ChangeEvent<HTMLInputElement>) => setLogin(e.currentTarget.value)} value={loginValue} />
        <Input type = 'password'  placeholder='password' onChange ={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} value={passwordValue}/>
        <Input type = 'checkbox' onChange ={(e:React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)} checked={rememberMeValue}/>  
        <span>Remember Me</span>
        <Button>SIGN IN</Button>
        <NavLink to={REGISTER_PATH}>Registration</NavLink>
    </div>
}

export default SignIn