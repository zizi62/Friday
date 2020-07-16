import React, { useEffect } from 'react'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../../Redux/profileReducer';
import { AppStateType } from '../../../Redux/store';
import Button from '../../common/Button/Button';
import { siginOutFromProfile } from '../../../Redux/signInReducer';

type ProfileContainerPropsType = {

}

const ProfileContainer: React.FC<ProfileContainerPropsType> = () => {

     const profile = useSelector((store: AppStateType )=> store.profilePage.profile)
    const dispatch = useDispatch();

    useEffect(() => {
        !profile.name&&dispatch(setProfile()) 
    }, [])


    const siginOut = ()=> dispatch(siginOutFromProfile())

 

    return <div>
        <Profile profile = {profile}/>
        <Button onClick ={siginOut} >SIGN OUT</Button>
        </div>
}

export default ProfileContainer