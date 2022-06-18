import React, { useState } from 'react';

import TopNavBar from './Components/SharedLayout/NavBars/TopNavBar/TopNavBar';
import SideNavBar from './Components/SharedLayout/NavBars/SideNavBar/SideNavBar.jsx';

import HomeScreen from './Pages/HomePage/HomeScreen';
import VideoScreen from './Pages/VideoPage/VideoScreen';

import './test.css';
import HorizontalSpace from './Components/SharedLayout/HorizontalSpace/HorizontalSpace';

const App = () => {
  // 0 = closed, 1 = open
  const [sideNavState, setSideNavState] = useState(0);

  return(
    <>
      <TopNavBar sideNavStateData={{sideNavState, setSideNavState}}/>
      <SideNavBar sideNavState={sideNavState}/>
      
      {/* <HomeScreen /> */}
      {/* <HomeScreen /> */}
      <div className="login-pane">

        <div> {/* Stops scrolling placeholder from being changed by parents flex display */}
          <div className="infinite-scroll-container">
            <div className="video-container large-video">
              <div className="large-video-placeholder shimmer"></div>

              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>
            
            <div className="video-container large-video">
              <div className="large-video-placeholder shimmer"></div>
              
              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>

            <div className="video-container large-video">
            <div className="large-video-placeholder shimmer"></div>

            <div className="shimmer video-text-placeholder large-text"></div>
            <div className="shimmer video-text-placeholder small-text"></div>
            </div>
            
            <div className="video-container large-video">
              <div className="large-video-placeholder shimmer"></div>
              
              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>
          </div>

          <div className="infinite-scroll-container">
            <div className="video-container small-video">
              <div className="small-video-placeholder shimmer"></div>

              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>
            
            <div className="video-container small-video">
              <div className="small-video-placeholder shimmer"></div>
              
              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>

            <div className="video-container small-video">
              <div className="small-video-placeholder shimmer"></div>
              
              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>

            <div className="video-container small-video">
              <div className="small-video-placeholder shimmer"></div>
              
              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>

            <div className="video-container small-video" style={{width: '50px !important'}}>
              <div className="small-video-placeholder shimmer"></div>

              <div className="shimmer video-text-placeholder large-text"></div>
              <div className="shimmer video-text-placeholder small-text"></div>
            </div>
          </div>
        </div>
        
        <div className="login-content">
          <h1>Welcome</h1>
          <p>Please sign in below</p>

          <input placeholder='E-mail' />
          <HorizontalSpace/>
          <input placeholder='Password' />
          <HorizontalSpace />
          <div className="atest">
            <div className="bar"></div>
            <div className="textt">OR</div>
            <div className="bar"></div>
          </div>
        </div>

      </div>
    </>
  );
}



export default App;
