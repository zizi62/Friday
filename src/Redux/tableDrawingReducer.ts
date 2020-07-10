import { Dispatch } from "redux";
import { AppStateType } from "./store";
import { getTableDrawingApi } from './../components/api/tableDrawingApi';

const TABLE_DRAWING_TOKEN = 'tableDrawingReducer/TABLE_DRAWING_TOKEN';
const TABLE_DRAWING = 'tableDrawingReducer/TABLE_DRAWING';

const initialState = {
	token: '',
	table: []
};

export interface IInitialStateTypeTable {
	token: string;
	table: Array<object>;
};

interface ItableData {
	type: string;
	token: string;
	data: Array<object>;
};

export const tableDrawingReducer = (state: IInitialStateTypeTable = initialState, action: ItableData) => {
	switch (action.type) {
		case TABLE_DRAWING_TOKEN:
			return {
				...state, token: action.token
			}
		case TABLE_DRAWING:
			return {
				...state, table: action.data
			}
		default:
			return state;
	}
};

const tableDrawingTokenAC = (token: string) => ({ type: TABLE_DRAWING_TOKEN, token });
const tableDrawingAC = (data: Array<object>) => ({ type: TABLE_DRAWING, data });

export const tableDrawingTC = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
	try {
		
		const token = getState().profilePage.token;
		// const token: any = getTableDrawingApi.getTableDrawingToken().then(res => res);
		// dispatch(tableDrawingTokenAC(token));
		console.log(token)

		const response: any = await getTableDrawingApi.getTableDrawing();
		dispatch(tableDrawingTokenAC(response.data.token));
		dispatch(tableDrawingAC(response.data.cardPacks));
		console.log(response.data.token);
	} catch (error) {

	}
};