
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.css'
import { SIGN_IN_PATH, REGISTER_PATH, FORGOT_PASSWORD_PATH, SET_NEW_PASSWORD_PATH, PROFILE_PATH } from '../Routes/Routes'



type HeaderPropsType = {

}

 const Header:React.FC<HeaderPropsType> = () =>{

    return <div className={style.header}>
        <NavLink className={style.link} to={SIGN_IN_PATH}>SIGN IN</NavLink>
        <NavLink className={style.link} to={REGISTER_PATH}>REGISTRATION</NavLink>
        <NavLink className={style.link} to = {FORGOT_PASSWORD_PATH}>FORGOT PASSWORD</NavLink>
        <NavLink className={style.link} to = {SET_NEW_PASSWORD_PATH}>SET NEW PASSWORD</NavLink>
        <NavLink className={style.link} to = {PROFILE_PATH}> PROFILE</NavLink>
    </div>

}


export default Header