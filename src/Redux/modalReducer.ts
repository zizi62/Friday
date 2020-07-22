import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const SHOW_MODAL = "SHOW_MODAL";

const initialState = {
	show: true
};

export type InitialStateRegisterType = typeof initialState;

export const modalReducer = (state = initialState, action: ActionType): InitialStateRegisterType => {
  switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				show: action.show
			}
    default:
      return state;
  }
};

// ******* ActionCreator *******
type ActionType = IShowModalAC

type IShowModalAC = {
	type: typeof SHOW_MODAL
	show: boolean
}

const showModalAC = (show: boolean): IShowModalAC => ({type: SHOW_MODAL, show}); 


// ******* ThunkCreator *******
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const modalWindow = (): ThunkActionType => async (dispatch, getState) => {
	dispatch(showModalAC(!getState().modal.show));
}