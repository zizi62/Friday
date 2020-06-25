import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main/Main';



function App() {
  return (

    <HashRouter>
      <div className="App">
        <HeaderContainer />
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
