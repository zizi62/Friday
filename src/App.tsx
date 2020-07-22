import React, { useEffect } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setIsAuth } from './Redux/signInReducer';
import { localStorageApi } from './components/api/profileApi';
import ModalWindow from './components/Modal/ModalWindow';
import { AppStateType } from './Redux/store';



function App() {
	const modal = useSelector((state: AppStateType) => state.modal)

  const dispatch = useDispatch()
  useEffect(() => {
    let token = localStorageApi.getToken()
    token && dispatch(setIsAuth(true, token))
  }, [])


  return <div className="App">
		{modal.show && <ModalWindow />}
		
    <HeaderContainer />
    <Main />
  </div>
}

export default App;
