import instance from './instance';


export const getTableDrawingApi = {
	async getTableDrawing(token: string) {
		return await instance.get(`cards/pack/?token=${token}`);
	}
};