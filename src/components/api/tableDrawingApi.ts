import instance from './instance';


export const getTableDrawingApi = {
	async getTableDrawing(token: string, pageSize: number, page: number) {
		return await instance.get(`cards/pack/?token=${token}&pageCount=${pageSize}&page=${page}`);
	}
};