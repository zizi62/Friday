import React, { useState, useCallback } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { NavLink } from 'react-router-dom';
import { SIGN_IN_PATH } from '../../Routes/Routes';
import { useDispatch } from 'react-redux';
import { setForgotPassword } from '../../../Redux/forgotPasswordReducer';


interface IForgotPasswordProps {
	error: string;
};

const ForgotPassword: React.FC<IForgotPasswordProps> = (props) => {

	const [email, setEmailValue] = useState<string>('');
	const dispatch = useDispatch();

	const setEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.currentTarget.value);
	}, [setEmailValue]);

	const setForgotPass = () => {
		dispatch(setForgotPassword(email));
	};

	return (
		<div>
			<Input 
			type='email' 
			placeholder='email' 
			onChange={setEmail} 
			value={email} 
			error={props.error} />

			<Button onClick={setForgotPass}>Send email</Button>
			<NavLink to={SIGN_IN_PATH}>Sign in</NavLink>
		</div>
	);
};

export default ForgotPassword;