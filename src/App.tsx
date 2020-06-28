import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import store from './Redux/store';



function App() {
  return (

    <HashRouter>
      <Provider store={store}>
      <div className="App">
        <HeaderContainer />
        <Main />
      </div>    
                </Provider>
      
    </HashRouter>
  );
}

export default App;
