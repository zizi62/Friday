import axios from "axios";



const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type getTableDataType = {
    cardPacks : []
    pageCount: number
    page: number
    token: string
}

type getTableType =  getTableDataType & {error: string}

export const tableApi = {   
         async getTable(token: string) {
             debugger
             return await instance.get<getTableType>( `/cards/pack?token=${token}`)
          
        },   
        async setNewPack(newPack: {}, token:string){
            return await instance.post(`/cards/pack`, {token})
        }

    }