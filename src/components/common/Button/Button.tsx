import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import style from './button.module.css'


type ButtonPropsType = {
  
}

const Button:React.FC< DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>& ButtonPropsType> =(props: ButtonPropsType )=>{
    
    return <div>
        <button className = {style.button} {...props} />
    </div>
} 

export default Button

