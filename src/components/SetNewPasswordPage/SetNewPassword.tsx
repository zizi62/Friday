import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { NavLink } from 'react-router-dom'
import { SIGN_IN_PATH } from '../Routes/Routes'

type SetNewPasswordPropsType = {

}

const SetNewPassword: React.FC<SetNewPasswordPropsType> = () => {
    return <div>
        <Input type="password" />
        <Input />
        <Button>SEND PASSWORD</Button>
        <NavLink to={SIGN_IN_PATH}>SIGN IN</NavLink>

    </div>
}

export default SetNewPassword