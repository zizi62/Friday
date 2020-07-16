import React, {useState, useCallback} from 'react'
import SignIn from './SignIn'
import style from './signIn.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {signInSuccess, setErrorMessage} from '../../../Redux/signInReducer'
import {AppStateType} from '../../../Redux/store'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'


type SignInContainerPropsType = {}

const SignInContainer: React.FC<SignInContainerPropsType> = () => {

    const error = useSelector((store: AppStateType) => store.signInPage.error)

    const [email, setEmailValue] = useState<string>('')
    const [password, setPasswordValue] = useState<string>('')
    const [rememberMe, setRememberMeValue] = useState<boolean>(false)

    const dispatch = useDispatch();
    const signIn = useCallback(
        () => {
            if (email && password) {
                dispatch(signInSuccess(email, password, rememberMe))
                setEmailValue('')
                setPasswordValue('')
                setRememberMeValue(false)
            } else {
                dispatch(setErrorMessage('all fields must be filled'))
                return
            }
        },
        [email, password, rememberMe, dispatch]
    );


    const setEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
        dispatch(setErrorMessage(''))

    }, [setEmailValue]);
    const setPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
        dispatch(setErrorMessage(''))
    }, [setPasswordValue]);
    const setRememberMe = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setRememberMeValue(e.currentTarget.checked), [setRememberMeValue]);

    return <div className={style.wraper}>
        <h2>SIGN IN</h2>
        {error && <ErrorMessage message={error}/>}
        <SignIn email={email}
                password={password}
                rememberMe={rememberMe}
                error={error}
                setEmail={setEmail}
                setPassword={setPassword}
                setRememberMe={setRememberMe}
                signIn={signIn}/>
    </div>
}

export default SignInContainer