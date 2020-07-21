import { Dispatch } from "redux";
import { setTokenSuccess } from "./profileReducer";
import { tablePacksApi } from "../components/api/tablePaksApi";
import { AppStateType } from "./store";
import { localStorageApi } from "../components/api/profileApi";



const SET_CARDPACKS = 'ziziPacksReducer/SET_CARDPACKS'
const SET_PACK = 'ziziPacksReducer/SET_PACK'
const SET_ERROR = 'ziziPacksReducer/SET_ERROR'

export type packType = {
  _id: string
  user_id: string
  name: string
  // path: string
  // grade: number
  // shots: number
  // rating: number
  // type: string
  created: string
  updated: string
  // __v: number
}

export type cardPacksType = Array<packType> 


const initialState = {
  cardPacks: [] as cardPacksType,
  error: '',
  pageCount: 0,
  page: 0,
  token: 0,
  pack: {
    _id: '',
    name: '',
    created: '',
    updated: '',
    user_id: ''
  }
};

export type InitialStateType = typeof initialState;

export const ziziPacksReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_CARDPACKS:
      return {
        ...state,
        cardPacks: action.cardPacks
      }
    case SET_PACK:
      return {
        ...state,
        pack: action.pack
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}

type ActionType = setCardPacksActionType | setPackActionType | setErrorActionType

type setCardPacksActionType = {
  type: typeof SET_CARDPACKS
  cardPacks: cardPacksType
}

type setPackActionType = {
  type: typeof SET_PACK
  pack: packType
}

type setErrorActionType = {
  type: typeof SET_ERROR
  error: string
  isAuth: boolean
}


export const setTableSuccess = (cardPacks: cardPacksType): setCardPacksActionType => ({ type: SET_CARDPACKS, cardPacks: cardPacks })
export const setNewPack = (pack: packType): setPackActionType => ({ type: SET_PACK, pack: pack })
const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error, isAuth: false })


export const setTableData = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tablePacksApi.getTable(token)
    dispatch(setTableSuccess(response.data.cardPacks))
    dispatch(setTokenSuccess(response.data.token))
    localStorageApi.setToken(response.data.token)
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const setNewPackData = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tablePacksApi.setNewPack({name: 'ziziPack'}, token)
    if(response.data.success){
      let packsResponse = await tablePacksApi.getTable(response.data.token)
      dispatch(setTableSuccess(packsResponse.data.cardPacks))
      localStorageApi.setToken(packsResponse.data.token)
      dispatch(setTokenSuccess(response.data.token))
    }else {
      dispatch(setError('Some ERROR'))
    }
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const deletePack=(id: string)=> async (dispatch: Dispatch) => {
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tablePacksApi.deletePack(token, id)
    if(response.data.success){
      let packsResponse = await tablePacksApi.getTable(response.data.token)
      dispatch(setTableSuccess(packsResponse.data.cardPacks))
      localStorageApi.setToken(packsResponse.data.token)
      dispatch(setTokenSuccess(response.data.token))
    }else {
      dispatch(setError('Some ERROR'))
    }
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
} 

export const setErrorMessage = (error: string) => (dispatch: Dispatch) => {
  dispatch(setError(error))
}
