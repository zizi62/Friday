import React, {useCallback, useState} from 'react'
import Registration from './Registration'
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp, setRegisterError} from "../../../Redux/registrationReducer";
import {AppStateType} from "../../../Redux/store";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { Redirect } from 'react-router-dom';
import {SIGN_IN_PATH} from "../../Routes/Routes";
import Loading from "../../common/Loading/Loading";

interface IRegistrationContainerProps {

}

const RegistrationContainer: React.FC<IRegistrationContainerProps> = () => {
    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const [checkPassword, setCheckPasswordValue] = useState('');
    const {error, success, loading} = useSelector((state: AppStateType) => state.registrationPage);

    const dispatch = useDispatch();

    const setEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setEmailValue(e.currentTarget.value);
            dispatch(setRegisterError(""));
    }, [setEmailValue]);

    const setPassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordValue(e.currentTarget.value);
        },[setPasswordValue]
    );

    const setCheckPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckPasswordValue(e.currentTarget.value);
    }, [setCheckPasswordValue]);

    const signUp = useCallback(() => {

        if(password.length !== checkPassword.length || password !== checkPassword) {
            dispatch(setRegisterError("passwords don't match"));
            return;
        }

        if(!!email && !!password && !!checkPassword){
            dispatch(fetchSignUp(email, password));
        }
    }, [email, password, checkPassword]);

    if(success) {
        return <Redirect to={SIGN_IN_PATH} />
    }

    return (
        <div>
            <h2>SIGN UP</h2>

            {loading && <Loading/>}
            {!!error && <ErrorMessage message={error} />}

            <Registration
                loading={loading}
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