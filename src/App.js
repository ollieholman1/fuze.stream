import React, { useState } from 'react';

import TopNavBar from './Components/SharedLayout/NavBars/TopNavBar/TopNavBar';
import SideNavBar from './Components/SharedLayout/NavBars/SideNavBar/SideNavBar.jsx';

import HomeScreen from './Components/HomePage/HomeScreen';

const App = () => {
  // 0 = closed, 1 = open
  const [sideNavState, setSideNavState] = useState(0);

  return(
    <>
      <TopNavBar sideNavStateData={{sideNavState, setSideNavState}}/>
      <SideNavBar sideNavState={sideNavState}/>
      
      <HomeScreen />
    </>
  );
}



export default App;
