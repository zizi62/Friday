import React, { useEffect } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';

import { setIsAuth } from './Redux/signInReducer';
import { localStorageApi } from './components/api/profileApi';



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    let token = localStorageApi.getToken()
    token && dispatch(setIsAuth(true, token))
  }, [])


  return <div className="App">
    <HeaderContainer />
    <Main />
  </div>
}

export default App;
