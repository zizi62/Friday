import axios from "axios";
<<<<<<< HEAD


=======
import {ProfileType} from "../../Redux/profileReducer";
>>>>>>> 2cfa603047737655e37c2de0fc96f3568a22bfb6

const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type signInSuccesType = {
    token: string
}

<<<<<<< HEAD
type getSighInType =  signInSuccesType & {error: string}

export const signInApi = {   
         async signIn(email: string, password: string, rememberMe: boolean) {
             return await instance.post<getSighInType>(`auth/login`, {email, password, rememberMe})
          
        }      
        
//         async signIn(email: string, password: string, rememberMe: boolean) {
//             debugger
//             email = 'zizi@gmail.com'
//             password = '12345678'
//             return await instance.post(`auth/register`, {email, password})
         
//        } 
    }
=======
type getProfileType = ProfileType & { error: string }

export const signInApi = {
    async signIn(email: string, password: string, rememberMe: boolean) {
        return await instance.post<getProfileType>(`auth/login`, {email, password, rememberMe})
    }
};
>>>>>>> 2cfa603047737655e37c2de0fc96f3568a22bfb6


