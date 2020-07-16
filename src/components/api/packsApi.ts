import axios from "axios";

export type ICardPacks = {
    cardPacks: ICard[]
}

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

const token = `26b39a60-33c5-11ea-be77-e79e9eaf6e2e`;

export const packsApi = {
    fetchPacks(): Promise<any> {
        return instance.get<ICardPacks>('cards/pack', {headers: { token }}).then(res => res.data.cardPacks);
    }
};