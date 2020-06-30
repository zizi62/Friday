import axios from "axios";


export const instance = axios.create({
    baseURL : 'https://cards-nya-back.herokuapp.com/1.0/'
 
});


export  const setToken = (token: string) => localStorage.setItem('token', token) 

export  const getToken = () => localStorage.getItem('token') 


export const profileApi = {   

    async getProfile(token: string) {

        let response = await instance.post(`auth/me`, {token})
        return response.data
    }
}
