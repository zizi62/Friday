import React, { useEffect } from 'react'
import Profile from './Profile'
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../Redux/profileReducer';

type ProfileContainerPropsType = {

}

const ProfileContainer: React.FC<ProfileContainerPropsType> = () => {

    const dispatch = useDispatch();
    debugger
    useEffect(() => {
        dispatch(setProfile())
    }, [])

    return <div><Profile /></div>
}

export default ProfileContainer