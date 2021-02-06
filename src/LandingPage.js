import React, {useState,useEffect} from 'react';
import AppHeader from './components_LP/AppHeader';
import WhyUs from './components_LP/WhyUs';
import WhatTheySay from './components_LP/WhatTheySay';
import Offers from './components_LP/Offers';


function LandingPage({isConnected, setIsConnected}) {
    return (
        <div>
          <AppHeader isConnected = {isConnected}  setIsConnected = {setIsConnected}/>
          <WhyUs />
          <Offers />
          <WhatTheySay />
        </div>
      );

}

export default LandingPage;