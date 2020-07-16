import { Dispatch } from "redux";
import { AppStateType } from "./store";
import { getTableDrawingApi } from './../components/api/tableDrawingApi';
import { localStorageApi } from "../components/api/profileApi";

const TABLE_DRAWING_TOKEN = 'tableDrawingReducer/TABLE_DRAWING_TOKEN';
const TABLE_DRAWING_DATA = 'tableDrawingReducer/TABLE_DRAWING_DATA';
const TABLE_DRAWING_PAGE = 'tableDrawingReducer/TABLE_DRAWING_PAGE';
const TABLE_DRAWING_TOTAL_COUNT = 'tableDrawingReducer/TABLE_DRAWING_TOTAL_COUNT';
const TABLE_DRAWING_PROMISE = 'tableDrawingReducer/TABLE_DRAWING_PROMISE';

const initialState = {
	token: '',
	cardPacks: [],
	page: 1,
	cardPacksTotalCount: 0,
	promise: new Promise(res => res)
};

export interface IInitialStateTypeTable {
	token: string;
	cardPacks: Array<object>;
	page: number;
	cardPacksTotalCount: number;
	promise: any;
};

interface ItableData {
	type: string;
	token: string;
	cardPacks: Array<object>;
	page: number;
	cardPacksTotalCount: number;
	promise: any;
};

export const tableDrawingReducer = (state: IInitialStateTypeTable = initialState, action: ItableData) => {
	switch (action.type) {
		case TABLE_DRAWING_TOKEN:
			return {
				...state, token: action.token
			}
		case TABLE_DRAWING_DATA:
			return {
				...state, table: action.cardPacks
			}
		case TABLE_DRAWING_PAGE:
			return {
				...state, page: action.page
			}
		case TABLE_DRAWING_TOTAL_COUNT:
			return {
				...state, totalCount: action.cardPacksTotalCount
			}
		case TABLE_DRAWING_PROMISE:
			return {
				...state, totalCount: action.promise
			}
		default:
			return state;
	}
};

const tableDrawingTokenAC = (token: string) => ({ type: TABLE_DRAWING_TOKEN, token });
const tableDrawingCardsPackAC = (cardPacks: Array<object>) => ({ type: TABLE_DRAWING_DATA, cardPacks });
const tableDrawingPageAC = (page: number) => ({ type: TABLE_DRAWING_PAGE, page });
const tableDrawingTotalCountAC = (cardPacksTotalCount: number) => ({ type: TABLE_DRAWING_TOTAL_COUNT, cardPacksTotalCount });
const tableDrawingPromiseAC = (promise: any) => ({ type: TABLE_DRAWING_PROMISE, promise });

export const tableDrawingTC = (pageSize: number, page: number) => async (dispatch: Dispatch, getState: () => AppStateType) => {
	try {
		
		const token: string | null = localStorageApi.getToken();

		if (token) {
			const response: any = await getTableDrawingApi.getTableDrawing(token, pageSize, page);
			dispatch(tableDrawingTokenAC(response.data.token));
			dispatch(tableDrawingCardsPackAC(response.data.cardPacks));
			dispatch(tableDrawingPageAC(response.data.page));
			dispatch(tableDrawingTotalCountAC(response.data.cardPacksTotalCount));
			localStorageApi.setToken(response.data.token);
			const promise = new Promise((resolve: any) => resolve(response.data));
			dispatch(tableDrawingPromiseAC(promise));
		} else {
			return  []
		}
	} catch (error) {
return  []
	}
};