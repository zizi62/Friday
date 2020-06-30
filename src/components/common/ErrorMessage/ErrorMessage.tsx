import React from 'react'
import style from './errorMessage.module.css'

type ErrorMessagePropsType = {
    message?: string
}


const ErrorMessage: React.FC<ErrorMessagePropsType> = (props) => {

    const { message } = props
    return <>
        <p className={style.error}>{message}</p>
    </>
}

export default ErrorMessage