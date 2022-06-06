import React, { Component, useState } from 'react';

import TopNavBar from './Components/SharedLayout/NavBars/TopNavBar/TopNavBar';
import SideNavBar from './Components/SharedLayout/NavBars/SideNavBar/SideNavBar.jsx';

import Container from './Components/SharedLayout/Container/Container.js';
import PageContent from './Components/SharedLayout/PageContent/PageContent.js';
import VideoScreen from './Components/VideoPage/VideoScreen.js';

import './Components/SharedLayout/core-styles.css';
import './Components/SharedLayout/css-variables.css';


const App = () => {
  // 0 = closed, 1 = open
  const [sideNavState, setSideNavState] = useState(0);

  return(
    <>
      <TopNavBar sideNavStateData={{sideNavState, setSideNavState}}/>
      <SideNavBar sideNavState={sideNavState}/>
      
      <Container>
        <PageContent>
          <VideoScreen />        
        </PageContent>
      </Container>
    </>
  );
}



export default App;
