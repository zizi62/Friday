import instance from "./instance";

export const forgotPassApi = {
	async forgotPass(email: string) {
		return await instance.post<any>(`auth/forgot`, { email });
	}
};