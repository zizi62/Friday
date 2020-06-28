import React, { useState, useCallback } from 'react'
import SignIn from './SignIn'
import style from './signIn.module.css'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../../Redux/signInReducer'


type SignInContainerPropsType = {

}

const SignInContainer : React.FC<SignInContainerPropsType>=()=>{

const [email, setEmailValue] = useState<string>('')
const [password, setPasswordValue] = useState<string>('')
const [rememberMe, setRememberMeValue] = useState<boolean>(false)

const [errorText, setError] = useState<string| undefined>('')

const dispatch = useDispatch();
const signIn = useCallback(
    () => dispatch(signInSuccess (email, password, rememberMe)),
    [email, password, rememberMe, dispatch]
);
// const {loading} = useSelector((store: AppStoreType) => store.login);

    
const setEmail = useCallback ((e: React.ChangeEvent<HTMLInputElement>) =>  setEmailValue(e.currentTarget.value) , [setEmailValue] );
const setPassword = useCallback ((e: React.ChangeEvent<HTMLInputElement>) =>  setPasswordValue(e.currentTarget.value) , [setPasswordValue] );
const setRememberMe = useCallback ((e: React.ChangeEvent<HTMLInputElement>) =>  setRememberMeValue(e.currentTarget.checked) , [setRememberMeValue] );

    return <div className={style.wraper}>
       <h2>SIGN IN</h2> 
        <SignIn email={email} 
        password={password} 
        rememberMe={rememberMe} 
        setEmail = {setEmail}
        setPassword ={setPassword}
        setRememberMe ={setRememberMe}
        signIn = {signIn}/>
        </div>
}

export default SignInContainer