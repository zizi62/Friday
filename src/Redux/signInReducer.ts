import { signInApi } from "../components/api/signInApi";
import { setTokenSuccess, setProfileSuccess, ProfileType } from "./profileReducer";
import { Dispatch } from "redux";
import { localStorageApi } from "../components/api/profileApi";


const IS_AUTH_SUCCESS = 'signIn/IS_AUTH_SUCCESS'
const SET_ERROR = 'signIn/SET_ERROR'

const initialState = {
  isAuth: false,
  error: ''
};

export type InitialStateType = typeof initialState;

export const signInReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case IS_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: action.isAuth
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}

type ActionType = setAuthSuccessActionType | setErrorActionType

type setAuthSuccessActionType = {
  type: typeof IS_AUTH_SUCCESS
  isAuth: boolean
  error: string
}

type setErrorActionType = {
  type: typeof SET_ERROR
  error: string
  isAuth: boolean
}


export const setAuthSuccess = (isAuth: boolean): setAuthSuccessActionType => ({ type: IS_AUTH_SUCCESS, error: '', isAuth: isAuth })
const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error, isAuth: false })


export const signInSuccess = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
  try {
    let response = await signInApi.signIn(email, password, rememberMe)
    dispatch(setAuthSuccess(true))
    dispatch(setTokenSuccess(response.data.token))
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const siginOutFromProfile = () => (dispatch: Dispatch) => {
  localStorageApi.setToken('')
  dispatch(setAuthSuccess(false))
  dispatch(setProfileSuccess({} as ProfileType))
}

export const setIsAuth = (IsAuth: boolean, token: string) => (dispatch: Dispatch) => {
  dispatch(setAuthSuccess(IsAuth))
  dispatch(setTokenSuccess(token))

}

export const setErrorMessage = (error: string) => (dispatch: Dispatch) => {
  dispatch(setError(error))
}
