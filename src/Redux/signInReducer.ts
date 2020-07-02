import { signInApi } from "../components/api/signInApi";
import { setProfileSuccess } from "./profileReducer";
import { Dispatch } from "redux";


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


const setAuthSuccess = (): setAuthSuccessActionType => ({ type: IS_AUTH_SUCCESS, error: '', isAuth: true })
const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error, isAuth: false })


export const signInSuccess = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
  try {
    let response = await signInApi.signIn(email, password, rememberMe)
    dispatch(setAuthSuccess())
    dispatch(setProfileSuccess(response))
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const setErrorMessage = (error: string) => (dispatch: Dispatch) =>{
  dispatch(setError(error))
}
