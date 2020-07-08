import { Dispatch } from "redux";
import { AppStateType } from "./store";
import { getTableDrawingApi } from './../components/api/tableDrawingApi'

const TABLE_DRAWING = 'tableDrawingReducer/TABLE_DRAWING';

const initialState = {
	table: []
};

export interface IInitialStateTypeTable {
	table: Array<object>;
}

interface ItableData {
	type: string;
	data: Array<object>;
}

export const tableDrawingReducer = (state: IInitialStateTypeTable = initialState, action: ItableData) => {
	switch(action.type) {
		case TABLE_DRAWING:
			return {
				...state, table: action.data
			}
		default:
			return state;
	}
};

const tableDrawingAC = (data: Array<object>) => ({ type: TABLE_DRAWING, data })

export const tableDrawingTC= () => async (dispatch: Dispatch, getState: () => AppStateType) => {
  try {
    let token = getState().profilePage.token
			let response = await getTableDrawingApi.getTableDrawing(token);
			console.log(response.data.cardPacks);
			dispatch(tableDrawingAC(response.data.cardPacks))
  } catch (error) {
   
  }
}