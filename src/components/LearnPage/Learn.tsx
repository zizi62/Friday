import React from 'react'
import Button from '../common/Button/Button'
import style from './learn.module.css'

type learnPropsType = {

}

const Learn: React.FC<learnPropsType> = (props: learnPropsType) => {
  return <>
  <div className={style.learnBox}>
   <div className={style.questionBox} >question</div>

    <div className={style.checkButton} >
      <Button  >Check</Button>
    </div>

    <div className={style.answerBox}>Answer</div>

    <div className={style.buttonBox}>
      <Button >Did not know</Button>
      <Button >Forgot</Button>
      <Button>Thought for a long time</Button>
      <Button>Confused</Button>
      <Button>I knew it!</Button>
    </div>



    <div className={style.nextButton} >
      <Button>Next</Button>
    </div>
    </div>
  </>
 
}

export default Learn