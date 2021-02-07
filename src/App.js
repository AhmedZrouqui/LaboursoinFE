import React, {useState,useEffect} from 'react';
import Navbar from './components_LP/Navbar';
import AppFooter from './components_LP/AppFooter';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import utils from './utils';
import Auth from './Authentication/Auth';
import axios from 'axios';
import MyAccount from './MyAccount';

function App() {
  
  
  const [isConnected, setIsConnected] = useState(false)

  //function to check if the JWT is Valid or not

  //this will be executed once every refresh.
  useEffect( async () => {

    setIsConnected((await Auth()))

  }, [isConnected])

  return (
    <Router>
      <div>
        <Navbar isConnected = {isConnected}  setIsConnected = {setIsConnected} />
          <Switch> 
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/account" exact render={() => <MyAccount/>} />
          </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
