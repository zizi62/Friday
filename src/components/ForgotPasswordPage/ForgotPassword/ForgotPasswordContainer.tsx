import React from 'react'
import ForgotPassword from './ForgotPassword'


interface IForgotPasswordContainerProps {

}

const ForgotPasswordContainer: React.FC<IForgotPasswordContainerProps> = () => {
    return <div>
        <h2>FORGOT PASSWORD</h2>
        <ForgotPassword />
    </div>
}

export default ForgotPasswordContainer