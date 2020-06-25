import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import style from './button.module.css'


type ButtonPropsType = {
    children : string
}

const Button:React.FC< DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>& ButtonPropsType> =(props: ButtonPropsType )=>{
    const { children} = props
    return <div>
        <button className = {style.button} {...props} >{children}</button>
    </div>
} 

export default Button

