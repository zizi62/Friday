import React from 'react'
import SignInContainer from './SignIn/SignInContainer'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { Redirect } from 'react-router-dom';
import { PROFILE_PATH } from '../Routes/Routes';



type SignInPageType = {

}

const SignInPage : React.FC<SignInPageType>=()=>{
    const isAuth = useSelector((store: AppStateType) => store.signInPage.isAuth);
    return <>
      {isAuth && <Redirect to={PROFILE_PATH} />}  
        <SignInContainer/>
        </>
}

export default SignInPage