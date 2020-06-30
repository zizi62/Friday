import { profileApi, getToken } from "../components/api/profileApi";

const SET_PROFILE = 'profile/SET_PROFILE'
const SET_ERROR = 'profile/SET_ERROR'

export type ProfileType ={
  email: '',
  isAdmin: false,
  name: '',
  rememberMe: false,
  token: '',
  tokenDeathTime: number,
  __v: 0,
  _id: ''
  success : boolean
}

const initialState = {
 profile: {} as ProfileType ,
  error : '',
  token : ''


}

export type InitialStateType = typeof initialState;

export const profileReducer = (state: InitialStateType = initialState, action:actionType) =>{
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile

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

type actionType = setProfileSuccessActionType |setErrorActionType

type setProfileSuccessActionType = {
 type : typeof  SET_PROFILE
 profile: {}
}
type setErrorActionType = {
  type: typeof SET_ERROR
  error: string 

 }


export const setProfileSuccess = (profile : {}) => ({type: SET_PROFILE, profile :profile })
const  setError = (error: string): setErrorActionType=>({type : SET_ERROR, error : error})

export const setProfile= () => async (dispatch:any)=>{
 
  try {
    debugger
    let token = getToken()
    token = '7c14aed0-b8f5-11ea-82a5-e1ef009c6bcd'
    if(token) {
      let response = await profileApi.getProfile(token)
      if(response.data.success){
        dispatch(setProfileSuccess(response.data))
      }
      else {
        dispatch(setError(response.data.error))
      }
    } 
  } catch (error) {
    debugger
     dispatch(setError('Somethisg wrong'))
  }
}

