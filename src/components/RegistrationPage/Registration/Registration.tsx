import React from 'react'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { NavLink } from 'react-router-dom'
import { SIGN_IN_PATH } from '../../Routes/Routes'


type RegistrationPropsType = {

}

const Registration: React.FC<RegistrationPropsType> = () => {
    return <div>
        <Input placeholder='login' />
        <Input type='password' placeholder='password' />
        <Input type='password' placeholder='password' />
        <Input type='checkbox' />
        <Button>SIGN UP</Button>
        <NavLink to={SIGN_IN_PATH}>SIGN IN</NavLink>

    </div>
}

export default Registration