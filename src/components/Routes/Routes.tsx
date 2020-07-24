import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationContainer from '../RegistrationPage/Registration/RegistrationContainer';
import SetNewPasswordContainer from '../SetNewPasswordPage/SetNewPasswordContainer';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import SignInPage from '../SignInPage/SignInPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PacksTable from '../ziziPacksPage/PacksTable';
import TableCards from './../table/TableCards';
import CardsTable from '../ziziCardsPage/CardsTable';
import LearnPage from '../LearnPage/LearnPage';


export const SIGN_IN_PATH = '/';
export const REGISTER_PATH = '/registration';
export const FORGOT_PASSWORD_PATH = '/forgot-password';
export const SET_NEW_PASSWORD_PATH = '/set-new-password';
export const PROFILE_PATH = '/profile';
export const TABLE_CARDS = '/cards';
export const TABLE_ZIZIPARDS = '/ziziPacks'
export const TABLE_ZIZICARDS = '/ziziCards/'
export const LEARN = '/learn'

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path={SIGN_IN_PATH} component={SignInPage} />
			<Route path={REGISTER_PATH} component={RegistrationContainer} />
			<Route path={FORGOT_PASSWORD_PATH} component={ForgotPasswordPage} />
			<Route path={SET_NEW_PASSWORD_PATH} component={SetNewPasswordContainer} />
			<Route path={PROFILE_PATH} component={ProfilePage} />
			<Route path={TABLE_CARDS} component={TableCards} />
			<Route path={TABLE_ZIZIPARDS} component={PacksTable} />
			<Route path={`${TABLE_ZIZICARDS}/:id?`} component={CardsTable} />
			<Route path = {`${LEARN}/:id?`} component = {LearnPage}/>


		</>
	);
};


export default Routes;
