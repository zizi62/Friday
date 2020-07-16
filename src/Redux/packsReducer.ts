import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {ICard, ICardPacks, packsApi} from "../components/api/packsApi";

const GET_PACKS_SUCCESS = "GET_PACKS_SUCCESS";

// interface IInitialState {
//     packs: [] | ICard[]
// // }

const initialState = {
    packs: [] as ICard[]
};

type IInitialState  = typeof initialState


export const packsReducer = (state: IInitialState = initialState, action: ActionType): IInitialState => {
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
    packs: ICard[]
}

type ActionType = IGetPacksSuccess

export const getPacksSuccess = (packs: ICard[]): IGetPacksSuccess => {
    return {
        type: GET_PACKS_SUCCESS,
        packs
    }
};

// ******* ThunkCreator *******
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getPacks = (): ThunkActionType => async (dispatch) => {
    try {
        const packs = await packsApi.fetchPacks();
        debugger
        dispatch(getPacksSuccess(packs));

    } catch (e) {

    }
};
