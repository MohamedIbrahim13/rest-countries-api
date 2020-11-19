import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import ThemeProvider from './contexts/Theme';

function App() {
  
  //console.log(countries);
  return (
    <BrowserRouter>
     
      <>
      <ThemeProvider>
       <Header/>
       <Switch>
         <Route exact path='/' component={Countries} />
         <Route path='/country/:name'  component={CountryDetails}/>
       </Switch>
       </ThemeProvider>
      </>

    </BrowserRouter>
  );
}

export default App;
