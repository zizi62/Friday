import { profileApi, localStorageApi} from "../components/api/profileApi";
import { Dispatch } from "redux";
import { AppStateType } from "./store";
import { setAuthSuccess } from "./signInReducer";

const SET_PROFILE = 'profile/SET_PROFILE'
const SET_TOKEN = 'profile/SET_TOKEN'
const SET_ERROR = 'profile/SET_ERROR'

export type ProfileType ={
  name: string,
  rememberMe :boolean
  token: string
}

const initialState = {
  profile: {} as ProfileType,
  error : '',
  token : ''


}

export type InitialStateType = typeof initialState;

export const profileReducer = (state= initialState, action: actionType) =>{
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
      case SET_TOKEN:
        return {
          ...state,
          token: action.token
        }
      case SET_ERROR:
        return {
          ...state,
          error: action.error
        } 
    default:
      return state
  }
  
}

type actionType = setProfileSuccessActionType|setErrorActionType|setTokenTypeAction

type setProfileSuccessActionType = ({type : typeof  SET_PROFILE, profile: ProfileType})
type setErrorActionType = ({ type: typeof SET_ERROR, error: string })
type setTokenTypeAction = ({ type: typeof SET_TOKEN, token: string })
 
 
export const setProfileSuccess = (profile : ProfileType):setProfileSuccessActionType => ({type: SET_PROFILE, profile: profile})
export const setTokenSuccess = (token: string):setTokenTypeAction => ({type: SET_TOKEN, token: token})
const  setError = (error: string): setErrorActionType=>({type : SET_ERROR, error : error})


export const setProfile= () => async (dispatch: Dispatch,  getState: () => AppStateType) =>{
  
  try {
    let token = getState().profilePage.token
      let response = await profileApi.getProfile(token)
        dispatch(setProfileSuccess(response.data))
        dispatch(setTokenSuccess(response.data.token))
        localStorageApi.setToken(response.data.token)
        
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
      dispatch(setAuthSuccess(false))
      console.log(error.response.data.error)
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}


