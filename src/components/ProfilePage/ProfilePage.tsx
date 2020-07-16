import React, { useEffect } from 'react'
import ProfileContainer from './Profile/ProfileContainer'
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { Redirect } from 'react-router-dom';
import { SIGN_IN_PATH } from '../Routes/Routes';
import { setProfile } from '../../Redux/profileReducer';


type ProfilePagePropsType = {

}

const ProfilePage :React.FC<ProfilePagePropsType> =()=>{

  const isAuth = useSelector((store: AppStateType) => store.signInPage.isAuth);

    return <div>
       <h2>Profile</h2>
      {
        isAuth? <ProfileContainer/>
        : <Redirect to={SIGN_IN_PATH }/>
      }
     
    </div>
}

export default ProfilePage