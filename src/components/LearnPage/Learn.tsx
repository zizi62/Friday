import React, { useState, useCallback } from 'react'
import Button from '../common/Button/Button'
import style from './learn.module.css'
import { cardsType, cardType } from '../../Redux/ziziCardsReducer'
import { buttonsType } from './LearnContainer'

type learnPropsType = {
  learnCard: cardType
  buttons: Array<buttonsType>
  setNextCard: () => void
}


const Learn: React.FC<learnPropsType> = (props: learnPropsType) => {

  const [isAnswer, setIsAnswer] = useState(false)

  const showAnswer = useCallback(() => {
    setIsAnswer(true)

  }, [setIsAnswer])

  const hideAnswer = useCallback(() => {
    setIsAnswer(false)

  }, [setIsAnswer])

  const sendAnswer = useCallback((button) => {
    alert(button.value)

  }, [setIsAnswer])

  const { learnCard, buttons, setNextCard } = props

  const onNext = useCallback(() => {
    setNextCard()
    setIsAnswer(false)
  }, [setIsAnswer,setNextCard])


  return <>
    <div className={style.learnBox}>
      <div className={style.questionBox} >{learnCard.question}</div>

      <div className={style.checkButton} >
        {isAnswer ? <Button onClick={hideAnswer}>Hide</Button> : <Button onClick={showAnswer}>check</Button>}
      </div>

      <div className={style.answerBox}>
        {isAnswer && <div>{learnCard.answer}</div>}
      </div>

      <div className={style.buttonBox}>
        {buttons.map((button, i) => <Button key={i} onClick={() => sendAnswer(button)}>{button.title}</Button>)}
      </div>
      <div className={style.nextButton} >
      <Button onClick= {onNext} >Next</Button>
      </div>
    </div>
  </>

}

export default Learn