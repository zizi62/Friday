import React, {useState} from 'react'
import Registration from './Registration'
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp, setRegisterError} from "../../../Redux/registrationReducer";
import {AppStateType} from "../../../Redux/store";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";


interface IRegistrationContainerProps {

}

const RegistrationContainer: React.FC<IRegistrationContainerProps> = () => {
    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const [checkPassword, setCheckPasswordValue] = useState('');
    const error = useSelector((state: AppStateType) => state.registrationPage.error);

    const dispatch = useDispatch();

    const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value);
    };

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value);
    };

    const setCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckPasswordValue(e.currentTarget.value);
    };

    const signUp = () => {

        if(password.length !== checkPassword.length || password !== checkPassword) {
            dispatch(setRegisterError("passwords don't match"));
        }

        if(!!email && !!password && !!checkPassword){
            dispatch(fetchSignUp(email, password));
        }
    };

    return (
        <div>
            <h2>SIGN UP</h2>
            {!!error && <ErrorMessage message={error} />}
            <Registration
                email = {email}
                password = {password}
                checkPassword = {checkPassword}
                error = {error}
                setEmail = {setEmail}
                setPassword = {setPassword}
                setCheckPassword = {setCheckPassword}
                signUp = {signUp}
            />
        </div>
    )
};

export default RegistrationContainer;