import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationContainer from '../RegistrationPage/Registration/RegistrationContainer';
import SetNewPasswordContainer from '../SetNewPasswordPage/SetNewPasswordContainer';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import SignInPage from '../SignInPage/SignInPage';
import ProfilePage from '../ProfilePage/ProfilePage';


export const SIGN_IN_PATH = '/';
export const REGISTER_PATH = '/registration';
export const FORGOT_PASSWORD_PATH = '/forgot-password';
export const SET_NEW_PASSWORD_PATH = '/set-new-password';
export const PROFILE_PATH = '/profile';


const Routes: React.FC = () => {
	return (
		<>
			<Route exact path={SIGN_IN_PATH} component={SignInPage} />
			<Route path={REGISTER_PATH} component={RegistrationContainer} />
			<Route path={FORGOT_PASSWORD_PATH} component={ForgotPasswordPage} />
			<Route path={SET_NEW_PASSWORD_PATH} component={SetNewPasswordContainer} />
			<Route path={PROFILE_PATH} component={ProfilePage} />
		</>
	);
};


export default Routes;
