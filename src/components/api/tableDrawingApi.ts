import instance from './instance';


export const getTableDrawingApi = {
	async getTableDrawing() {
		const token = document.cookie;
		return await instance.get(`cards/pack/?token=${token}`);
	}
};