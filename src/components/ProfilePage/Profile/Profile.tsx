import React from 'react'
import { ProfileType } from '../../../Redux/profileReducer'



type ProfilePropsType = {
    profile: ProfileType
}

const Profile :React.FC<ProfilePropsType> =(props)=>{
    const {profile} = props
    return <div>
       <h2>{profile.name}</h2>
    </div>
}

export default Profile