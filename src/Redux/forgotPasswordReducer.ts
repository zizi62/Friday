import { Dispatch } from 'redux';
import { forgotPassApi } from '../components/api/forgotPassApi';

const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';


const initialState = {
	success: false,
	error: ''
};

type ISetForgotError = {
    type: typeof FORGOT_PASSWORD_ERROR;
    error: string;
};

type ISetForgotSuccess = {
    type: typeof FORGOT_PASSWORD_SUCCESS;
};

export type InitialStateType = typeof initialState;

export const forgotPasswordReducer = (state = initialState, action:any) => {
	switch (action.type) {
		case FORGOT_PASSWORD_SUCCESS:
			return {
				...state, success: true, error: ''
			};
		case FORGOT_PASSWORD_ERROR:
			return {
				...state, error: action.error
			};
	};
  return state;
};

export const forgotPasswordSuccessAC = (): ISetForgotSuccess => {
	return {
		type: FORGOT_PASSWORD_SUCCESS
	};
};

export const forgotPasswordErrorAC = (error: string): ISetForgotError => {
	return {
		type: FORGOT_PASSWORD_ERROR,
		error
	};
};

export const setForgotPassword = (email: string) => async (dispatch: Dispatch) => {
	try {
		await forgotPassApi.forgotPass(email);
	} catch (error) {
		const er = error;
		console.log(er)
		dispatch(forgotPasswordErrorAC(error))
	}
};
