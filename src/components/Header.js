import React, { useContext } from 'react';
import { Theme } from '../contexts/Theme';



const Header = () => {
  const  {isLight,light,dark,changeTheme} = useContext(Theme);
  const theme = isLight ? light:dark;
  return (
    <>
      <header style={{background:theme.bgCard,color:theme.fontColor}}>
        <div className="container">
            <p>Where in the world?</p>
            <p onClick={changeTheme}><span><i className="fas fa-moon"></i></span>{isLight ? 'Light Mode':'Dark Mode'}</p>
        </div>
      </header>
    </>
  )
}

export default Header
