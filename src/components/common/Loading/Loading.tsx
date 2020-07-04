import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import style from './loading.module.css'

const Loading: React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}> = (props: {}) => {
    return (
        <p className={style.loading}>Loading...</p>
    )
};

export default Loading;