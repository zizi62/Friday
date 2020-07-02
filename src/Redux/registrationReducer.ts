import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {IUser, signUpApi} from "../components/api/signUpApi";

const IS_REGISTER_SUCCESS = 'signUp/IIS_REGISTER_SUCCESS';
const SET_REGISTER_ERROR = 'signUp/SET_REGISTER_ERROR';

const initialState = {
    error: '',
    user: {}
};

export type InitialStateRegisterType = typeof initialState;

export const registrationReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case IS_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        case SET_REGISTER_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

type ISetRegisterError = {
    type: typeof SET_REGISTER_ERROR
    error: string
};

type ISetRegisterSuccess = {
    type: typeof IS_REGISTER_SUCCESS
    user: IUser
};

type ActionType = ISetRegisterError | ISetRegisterSuccess

// ******* ActionCreator *******
export const setRegisterError = (error: string): ISetRegisterError => ({type: SET_REGISTER_ERROR, error});
export const setRegisterSuccess = (user: IUser): ISetRegisterSuccess => ({type: IS_REGISTER_SUCCESS, user});


// ******* ThunkCreator *******
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const fetchSignUp = (email: string, password: string): ThunkActionType => async (dispatch) => {
    try {
        const user = await signUpApi.fetchRegister(email, password);
        dispatch(setRegisterSuccess(user));
    } catch (e) {
        dispatch(setRegisterError(e))
    }
};

