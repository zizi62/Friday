import { Dispatch } from "redux";
import { setTokenSuccess } from "./profileReducer";
import { tableApi } from "../components/api/tableZiziApi";
import { AppStateType } from "./store";
import { localStorageApi } from "../components/api/profileApi";



const SET_CARDPACKS = 'tableZiziReducer/SET_CARDPACKS'
const SET_PACK = 'tableZiziReducer/SET_PACK'
const SET_ERROR = 'tableZiziReducer/SET_ERROR'

export type packType = {
  _id: ''
  user_id: ''
  name: "no Name"
  path: ''
  grade: number
  shots: number
  rating: number
  type: ''
  created: ''
  updated: ''
  __v: number
}

export type cardPacksType = packType[]

type InitialStateType = {
  cardPacks : []| cardPacksType,
  error: string,
  pack: {} | packType
  
}


const initialState: InitialStateType = {
  cardPacks :[] ,
  error: '',
  pack: {}
};

// export type InitialStateType = typeof initialState;

export const tableZiziRaducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_CARDPACKS:
      return {
        ...state,
        cardPacks: [...state.cardPacks, action.cardPacks]
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
  cardPacks: []
}

type setPackActionType = {
  type: typeof SET_PACK
  pack: {}
}

type setErrorActionType = {
  type: typeof SET_ERROR
  error: string
  isAuth: boolean
}


export const setTableSuccess = (cardPacks: []): setCardPacksActionType => ({ type: SET_CARDPACKS, cardPacks: cardPacks })
export const setNewPack = (pack: {}): setPackActionType => ({ type: SET_PACK, pack: pack })
const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error, isAuth: false })


export const setTableData = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
  debugger
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tableApi.getTable(token)
    dispatch(setTableSuccess(response.data.cardPacks))
    dispatch(setTokenSuccess(response.data.token))
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
    let response = await tableApi.getTable(token)
    dispatch(setTableSuccess(response.data.cardPacks))
    dispatch(setTokenSuccess(response.data.token))
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
