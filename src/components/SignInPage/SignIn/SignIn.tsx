import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './signIn.module.css'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import {  REGISTER_PATH } from '../../Routes/Routes'


type SignInPropsType = {

}

const SignIn: React.FC<SignInPropsType> = () => {
    return <div className={style.signIn}>
        <Input placeholder='login'/>
        <Input type = 'password'  placeholder='password'/>
        <Input type = 'checkbox'/>  <span>Remember Me</span>
        <Button>SIGN IN</Button>
        <NavLink to={REGISTER_PATH}>Registration</NavLink>
    </div>
}

export default SignIn