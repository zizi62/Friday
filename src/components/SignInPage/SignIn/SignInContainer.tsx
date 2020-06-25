import React from 'react'
import SignIn from './SignIn'
import style from './signIn.module.css'


type SignInContainerPropsType = {

}

const SignInContainer : React.FC<SignInContainerPropsType>=()=>{
    return <div className={style.wraper}>
       <h2>SIGN IN</h2> 
        <SignIn/>
        </div>
}

export default SignInContainer