import React, { useEffect, useState } from 'react'
import Learn from './Learn'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { setTableData, cardsType, cardType } from '../../Redux/ziziCardsReducer'
import { AppStateType } from '../../Redux/store'
import { useParams } from 'react-router-dom'

type learnContainerPropsType = {

}

export type buttonsType = {
    title: string
    value: string
}
const buttons: Array<buttonsType> = [
    { title: 'Did not know', value: '1' },
    { title: 'Forgot', value: '2' },
    { title: 'Thought for a long time', value: '3' },
    { title: 'Confused', value: '4' },
    { title: 'I knew it!', value: '5' }
]

const getCard = (cards: cardsType) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    return cards[res.id + 1];
  }

const LearnContainer: React.FC<learnContainerPropsType> = () => {
    const [first, setFirst] = useState<boolean>(true);
    const learnList = useSelector((store: AppStateType) => store.tableCardsReducer.cards)
    const {id} = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (first) {
            dispatch(setTableData(id))
            setFirst(false);
        }
        if (learnList.length > 0) setLearnCard(getCard(learnList));
    }, [dispatch, id, learnList, first]);


    const [learnCard, setLearnCard] = useState<cardType>({
        answer: '',
        question: 'string;',
        cardsPack_id: 'string;',
        grade: 0,
        rating: 0,
        shots:0,
        type: 'string;',
        created:' string;',
        updated: 'string;',
        __v: 0,
        _id: 'string;'
    })

    const setNextCard = () => {
        debugger
        if (learnList.length > 0) {
            setLearnCard(getCard(learnList));
        } else {
    
        }
    }
    return <>
        <Learn learnCard={learnCard} buttons={buttons} setNextCard = {setNextCard} />
    </>
}

export default LearnContainer 