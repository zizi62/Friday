import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {ICardPacks, packsApi} from "../components/api/packsApi";

const GET_PACKS_SUCCESS = "GET_PACKS_SUCCESS";

const initialState = {
    packs: []
};

export type InitialStateType = typeof initialState;

export const packsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_PACKS_SUCCESS:
            return {
                ...state,
                packs: [...state.packs, ...action.packs]
            };
        default:
            return state
    }
};

type IGetPacksSuccess = {
    type: typeof GET_PACKS_SUCCESS
    packs: [] | ICardPacks
}

type ActionType = IGetPacksSuccess

export const getPacksSuccess = (packs: ICardPacks): IGetPacksSuccess => {
    return {
        type: GET_PACKS_SUCCESS,
        packs
    }
};

// ******* ThunkCreator *******
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, any>

export const getPacks = (): ThunkActionType => async (dispatch) => {
    try {
        const packs = await packsApi.fetchPacks();
        dispatch(getPacksSuccess(packs))
    } catch (e) {

    }
};
