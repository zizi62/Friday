import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import style from './input.module.css'


type InputPropsType = {
    onEnter?: () => void 
    error?: string
}

const Input: React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputPropsType> = (props: InputPropsType) => {

    const { onEnter, error, ...restProps } = props

    let inputStyle = error ? style.input + ' ' + style.inputError : style.input

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) onEnter && onEnter();
    }

    return <div>
        <input className={inputStyle} type='text' name='myInput' onKeyDown={onKeyPress}  {...restProps} />
       {/* {error? <span className={style.error}>{error}</span>: null}  */}
    </div>
}

export default Input

