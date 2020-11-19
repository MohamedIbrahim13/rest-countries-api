import React,{createContext, useState} from 'react';

export const Theme =  createContext();

const ThemeProvider = (props) => {
    const [lightTheme,setLight] = useState({
        isLight:true,light:{searchColor:'#858585',fontColor:'#111517',ui:'#fafafa',bgCard:'white'},dark:{searchColor:'white',fontColor:'white',ui:'#202c37',bgCard:'#2b3945'}
    });
    
    const changeTheme =()=>{
        setLight({...lightTheme,isLight: !lightTheme.isLight});
    };
    return (
        <Theme.Provider value={{...lightTheme,changeTheme}}>
            {props.children}
        </Theme.Provider>
    )
}

export default ThemeProvider
