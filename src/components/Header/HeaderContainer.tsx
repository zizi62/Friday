import React from 'react';
import Header from './Header'
import style from './header.module.css'
 interface IHeaderContainerProps {

 }

const HeaderContainer:React.FC<IHeaderContainerProps>= ()=>{
  return <div className = {style.wraper}>
      <Header/>
  </div>
}

export default HeaderContainer;