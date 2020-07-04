import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {IUser, signUpApi} from "../components/api/signUpApi";

const IS_REGISTER_SUCCESS = 'signUp/IIS_REGISTER_SUCCESS';
const SET_REGISTER_ERROR = 'signUp/SET_REGISTER_ERROR';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    error: '',
    success: false,
    loading: false
};

export type InitialStateRegisterType = typeof initialState;

export const registrationReducer = (state = initialState, action: ActionType): InitialStateRegisterType => {
    switch (action.type) {
        case IS_REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false
            };
        case SET_REGISTER_ERROR:
            return {
                ...state,
                error: action.error,
                success: false,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
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
};

type ISetLoading = {
    type: typeof SET_LOADING
};

type ActionType = ISetRegisterError | ISetRegisterSuccess | ISetLoading

// ******* ActionCreator *******
export const setRegisterError = (error: string): ISetRegisterError => ({type: SET_REGISTER_ERROR, error});
export const setRegisterSuccess = (): ISetRegisterSuccess => ({type: IS_REGISTER_SUCCESS});
export const setLoading = (): ISetLoading => ({type: SET_LOADING});

// ******* ThunkCreator *******
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const fetchSignUp = (email: string, password: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setLoading());
        const success = await signUpApi.fetchRegister(email, password);

        if(success) {
            dispatch(setRegisterSuccess());
        }

    } catch (e) {
        dispatch(setRegisterError(e.message));
    }
};

