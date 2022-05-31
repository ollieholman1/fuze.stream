import React, { Component, useState } from 'react';
import NavBar from './Components/NavBarElements/NavBar.jsx';
import SideNavBar from './Components/SideNavBarElements/SideNavBar.jsx';
import './Assets/Shared/css/sharedStyles.css';
import './global-variables.css';
import './main.css';
import './script.js';

import ScrollMenu from './Components/Menus/ScrollMenu.js';

import UserIcon from './Components/User/UserProfileIcon.jsx';
import VideoRecommendationCard from './Components/Cards/VideoRecommendationCard.js';

const Container = (props) => {
  return (
    <>
      <div className="contain-content">
        { props.children }
      </div>
    </>
  )
}

const VideoPlayer = () => {
  return (
    <>
      <video controls>
        <source src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" type="video/mp4" />
      </video>
    </>
  )
}

const VideoInformation = () => {
  return (
    <>
      <div className="video-information">
        <span className="video-title">This is a placeholder for the video name!</span>
        <div className="temp-flex">
          <div>
            <span className="video-views">1,090,134 views | May 19, 2022</span>
          </div>
          <div className="right-actions">
            <div>
              <HoverableIcon  baseType="fa-thin" icon="fa-thumbs-up" />
              <span>17k</span>
            </div>
            <div>
            <HoverableIcon  baseType="fa-thin" icon="fa-thumbs-down" />
              <span>17k</span>
            </div>
            <div>
            <StaticIcon baseType="fa-thin"  icon="fa-thin fa-share-all" />
            </div>
          </div>
        </div>
        <div className="video-description">This is the video description.</div>
      </div>
    </>
  )
}

const HoverableIcon = (props) => {
  const [iconType, setIconType] = useState(props.baseType);

  const iconClass = iconType + ' ' + props.icon;

  function alternateType() {
    const nextIconState = iconType == props.baseType ? 'fa-solid' : props.baseType;

    setIconType(nextIconState);
  }

  return (
    <i 
      className={iconClass}
      onMouseOver={() => alternateType()}
      onMouseLeave={() => alternateType()}
    ></i>
  )
}

const StaticIcon = (props) => {
  return (
    <i className={props.icon}></i>
  )
}

const VideoCreatorDetails = () => {
  return (
    <>
      <div className="video-creator-details-wrapper">
        <UserIcon size="medium" />
        <div className="video-creator-details">
          <span className="creator-name">Channel Name</span>
          <span className="creator-followers">1.2K followers</span>
        </div>
        <div className="video-creator-actions">
        <button className="creator-support-button">SUPPORT</button>
          <button className="creator-follow-button">FOLLOW</button>
        </div>
      </div>
    </>
  );
}

const Comment = () => {
  return (
    <>
      <div className="comment">
        <UserIcon iconSize="small"/>
        <div className="comment-content">
          <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
          <span className="comment-text">This is the users comment, it goes here.e of a really big comment, how is it going to look!</span>

          <div className="comment-actions">
            <div>
              <HoverableIcon baseType="fa-light" icon="fa-thumbs-up" /><span>678</span>
            </div>
            <div>
               <HoverableIcon baseType="fa-light" icon="fa-thumbs-down" />
            </div>
            <div className="reply">
              <span>REPLY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const App = () => {
  const [sideNavCollapsedState, setSideNavCollapsedState] = useState('collapsed');

  const [likeActionHoverState, setLikeActionHoverState] = useState('fa-thin');
  const [dislikeActionHoverState, setDislikeActionHoverState] = useState('fa-thin');
  const [shareActionHoverState, setShareActionHoverState] = useState('fa-thin');

  const testScroll = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  }

  return(
    <>
      <NavBar sideNavCollapseData={{sideNavCollapsedState, setSideNavCollapsedState}}/>
      <SideNavBar sideNavCollapsedState={sideNavCollapsedState} />
      <Container>
      <div className={"page-content " + sideNavCollapsedState + "-content-margin"}>
        <div className="content-wrapper">
          <div className="video-wrapper">
            <div className="video">
              <VideoPlayer />
              <VideoInformation />
            </div>
          </div>
          <div className="video-side-bar-wrapper">
            <VideoCreatorDetails/>
            <div className="comment-box">
              <div className="comment-box-header">
                <span>Comments</span>
              </div>
              <div className="comment-box-comments">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
              <div className="post-comment">
                <UserIcon iconSize="small" />
                <div className="hi">
                  <input placeholder='Comment'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    <br /> <br />


        <ScrollMenu>
          <VideoRecommendationCard />
          <VideoRecommendationCard />
          <VideoRecommendationCard />
          <VideoRecommendationCard />
          <VideoRecommendationCard />
          <VideoRecommendationCard />
        </ScrollMenu>
      </div>

      </Container>
    </>
  );
}



export default App;
