import axios from "axios";


const instance = axios.create({baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'});

export const forgotPassApi = {
	async forgotPass(email: string) {
		return await instance.post<any>(`auth/forgot`, { email });
	}
};