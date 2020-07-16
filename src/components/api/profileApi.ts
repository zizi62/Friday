import axios from "axios";
import { ProfileType } from "../../Redux/profileReducer";

export const instance = axios.create({
    baseURL : 'https://cards-nya-back.herokuapp.com/1.0/'
 
});

export const localStorageApi = {
    setToken(token: string){
        localStorage.setItem('token', token) 
    },
    getToken(){
        return localStorage.getItem('token')
    }
}
export const profileApi = {   
    async getProfile(token: string|null) {
       return await instance.post<ProfileType>(`auth/me`, {token})     
    }
}

