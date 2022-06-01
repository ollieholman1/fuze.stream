import React, { Component, useState } from 'react';
import NavBar from './Components/NavBarElements/NavBar.jsx';
import SideNavBar from './Components/SideNavBarElements/SideNavBar.jsx';
import './Assets/Shared/css/sharedStyles.css';
import './global-variables.css';
import './main.css';
import './script.js';
import './Components/VideoPage/media-queries.css';

import ScrollMenu from './Components/Menus/ScrollMenu/ScrollMenu.js';
import VideoRecommendationCard from './Components/Cards/VideoRecommendationCard/VideoRecommendationCard.js';

import FlexWrapper from './Components/SharedLayout/FlexWrapper/FlexWrapper.js';
import VideoWrapper from './Components/VideoPage/components/VideoWrapper/VideoWrapper.js';
import VideoInformation from './Components/VideoPage/components/VideoInformation/VideoInformation.js';
import VideoSideBarWrapper from './Components/VideoPage/components/VideoSideBarWrapper/VideoSideBarWrapper.js';
import CommentBox from './Components/VideoPage/components/CommentBox/CommentBox.js';
import VideoPlayer from './Components/VideoPage/components/VideoPlayer/VideoPlayer.js';
import Comment from './Components/VideoPage/components/Comment/Comment.js';
import VideoCreatorDetails from './Components/VideoPage/components/VideoCreatorDetails/VideoCreatorDetails.js';

const Container = (props) => {
  return (
    <>
      <div className="contain-content">
        { props.children }
      </div>
    </>
  )
}


const App = () => {
  const [sideNavCollapsedState, setSideNavCollapsedState] = useState('collapsed');

  // 0 = closed, 1 = open
  const [sideNavState, setSideNavState] = useState(0);

  const [likeActionHoverState, setLikeActionHoverState] = useState('fa-thin');
  const [dislikeActionHoverState, setDislikeActionHoverState] = useState('fa-thin');
  const [shareActionHoverState, setShareActionHoverState] = useState('fa-thin');

  const testScroll = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  }

  return(
    <>
      {/* <div className="overlay"></div> */}
      <NavBar sideNavStateData={{sideNavState, setSideNavState}}/>
      
      <SideNavBar sideNavState={sideNavState}/>
      
      <Container>
      <div className={"page-content"}>
        <FlexWrapper>
          <VideoWrapper>
            <VideoPlayer />
            <VideoInformation />
          </VideoWrapper>
          <VideoSideBarWrapper>
            <VideoCreatorDetails/>
            <CommentBox>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentBox>
          </VideoSideBarWrapper>
        </FlexWrapper>
    <br /> <br />
        <ScrollMenu>
          <VideoRecommendationCard src="https://wallpapercave.com/wp/XMnhQSq.jpg" />
          <VideoRecommendationCard src="https://wallpaperaccess.com/full/170249.jpg"/>
          <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-21.jpg" />
          <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs.png" />
          <VideoRecommendationCard src="https://c4.wallpaperflare.com/wallpaper/417/44/10/nature-landscape-clear-mountain-river-stone-pine-forest-and-mountainous-peaks-desktop-wallpaper-hd-4780-wallpaper-preview.jpg" />
          <VideoRecommendationCard src="https://w0.peakpx.com/wallpaper/965/673/HD-wallpaper-green-mountain-and-water-natural-landscape.jpg" />
          <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-21.jpg" />
          <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs.png" />
        </ScrollMenu>
        
      </div>

      </Container>
    </>
  );
}



export default App;
