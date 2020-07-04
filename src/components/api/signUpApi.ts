import axios from "axios";

export type IAddedUser = {
    addedUser: IUser
    success: boolean
}

export type IUser = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}

const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

export const signUpApi = {
    fetchRegister(email: string, password: string): Promise<any> {
        return instance.post<IAddedUser>('auth/register', {email, password}).then(res => res.data.success)
    }
};