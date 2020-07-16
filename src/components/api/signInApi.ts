import axios from "axios";



const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type signInSuccesType = {
    token: string
}

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


