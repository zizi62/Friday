import axios from "axios";

export type ICardPacks = Array<ICard>

export type ICard = {
    cardsCount: number
    created: string
    deckCover: string
    grade: number
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

export const packsApi = {
    fetchPacks(): Promise<any> {
        return instance.get<any>('cards/pack').then(res => res.data.cardPacks)
    }
};