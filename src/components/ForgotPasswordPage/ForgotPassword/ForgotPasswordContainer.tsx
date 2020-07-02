import React from 'react';
import ForgotPassword from './ForgotPassword';
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage';

import { useSelector } from 'react-redux';
import { AppStateType } from '../../../Redux/store';

interface IForgotPasswordContainerProps {

};


const ForgotPasswordContainer: React.FC<IForgotPasswordContainerProps> = () => {

	const error = useSelector((store: AppStateType) => store.forgotPasswordPage.error);

	return (
		<div>
			<h2>FORGOT PASSWORD</h2>
			{!!error && <ErrorMessage message={error} />}
			<ForgotPassword error={error} />
		</div>
	);
};

export default ForgotPasswordContainer;