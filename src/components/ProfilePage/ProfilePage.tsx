import React from 'react'
import ProfileContainer from './Profile/ProfileContainer'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/store';


type ProfilePagePropsType = {

}

const ProfilePage :React.FC<ProfilePagePropsType> =()=>{

  const isAuth = useSelector((store: AppStateType) => store.signInPage.isAuth);
    return <div>
      <ProfileContainer/>
    </div>
}

export default ProfilePage