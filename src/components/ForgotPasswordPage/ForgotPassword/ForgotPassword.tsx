import React from 'react'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { NavLink } from 'react-router-dom'
import { FORGOT_PASSWORD_PATH, SIGN_IN_PATH } from '../../Routes/Routes'


interface IForgotPasswordProps {

}

const ForgotPassword: React.FC<IForgotPasswordProps> = ()=>{
    return <div>
       <Input type = 'email' placeholder = 'email'/>
       <NavLink to={FORGOT_PASSWORD_PATH}> Forgot password?</NavLink>
       <Button>SEND NEW PASSWORD</Button>
       <NavLink to={SIGN_IN_PATH}>SIGN IN</NavLink>
</div>
}

export default ForgotPassword