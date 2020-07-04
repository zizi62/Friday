import React from 'react'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import {NavLink} from 'react-router-dom'
import {SIGN_IN_PATH} from '../../Routes/Routes'

type RegistrationPropsType = {
    loading: boolean
    email: string
    password: string
    checkPassword: string
    error?: string
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    setCheckPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    signUp: () => void
}

const Registration: React.FC<RegistrationPropsType> = (props) => {
    const {loading, email, password, checkPassword, error, setEmail, setPassword, setCheckPassword, signUp} = props;

    return <div>
        <Input
            placeholder='login'
            value={email}
            onChange={setEmail}
        />
        <Input
            type='password'
            placeholder='password'
            value={password}
            onChange={setPassword}
            error={error}
        />
        <Input
            type='password'
            placeholder='check password'
            value={checkPassword}
            onChange={setCheckPassword}
            error={error}
        />
        <Button
            onClick={signUp}
            disabled={!!loading}
        >
            SIGN UP
        </Button >
        <NavLink to={SIGN_IN_PATH}>SIGN IN</NavLink>
    </div>
};

export default Registration