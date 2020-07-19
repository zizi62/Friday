import axios from "axios";
import { cardPacksType } from "../../Redux/ziziPacksReducer";



const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type getTableDataType = {
    cardPacks : cardPacksType
    pageCount: number
    page: number
    token: string
}

type getTableType =  getTableDataType & {error: string}&{success: boolean, token:string}

export const tablePacksApi = {   
         async getTable(token: string) {
             return await instance.get<getTableType>( `/cards/pack?token=${token}`)
        },   
        async setNewPack(cardsPack: {}, token:string){
            debugger
            return await instance.post(`/cards/pack`, {token, cardsPack})
        },
        async deletePack (token:string, id: string){
            return await instance.delete(`/cards/pack`)
        }

    }