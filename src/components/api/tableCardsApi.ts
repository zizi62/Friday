import axios from "axios";
import { cardsType } from "../../Redux/ziziCardsReducer";



const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type getCardsType = {
    cards : cardsType
    pageCount: number
    page: number
    maxGrade: number
    minGrade: number
    token: string
}

type getCardsDataType =  getCardsType & {error: string}

export const tableCardsApi = {   
    
         async getCards(token: string, cardsPack_id: string) {
             return await instance.get<getCardsDataType>( `cards/card?token=${token}&cardsPack_id=${cardsPack_id}`)
          
        },   
        async setNewCard(newCard: {}, token:string){
            return await instance.post(`cards/card`, {token, newCard})
        },
        async deleteCard (token:string, id: string){
            return await instance.delete(`/cards/pack`)
        }

    }