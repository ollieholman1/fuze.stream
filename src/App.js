import React, { useState, useRef } from 'react';
import NavBar from './Components/NavBarElements/NavBar.jsx';
import SideNavBar from './Components/SideNavBarElements/SideNavBar.jsx';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './Assets/Shared/css/sharedStyles.css';
import './global-variables.css';
import './main.css';
import './script.js';

import UserIcon from './Components/User/UserProfileIcon.jsx';

const App = () => {
  var scroll_data = {
    'scroll_left': 0,
    'scroll_right': 1
  };

  const [sideNavCollapsedState, setSideNavCollapsedState] = useState('collapsed');

  const [likeActionHoverState, setLikeActionHoverState] = useState('fa-thin');
  const [dislikeActionHoverState, setDislikeActionHoverState] = useState('fa-thin');
  const [shareActionHoverState, setShareActionHoverState] = useState('fa-thin');

  const scrollElement = useRef(null);

  const scrollLeft = () => {
    scrollElement.current.scrollLeft += 340;
  }

  const scrollRecommendation = (direction) => {
    // 0 = left
    // 1 = right
    const scroll_amount = direction ? 340 : -340;

    for (var i = 0; i < 340; i++) {
      scrollElement.current.scrollLeft += i;
    }
    // scrollElement.current.scrollLeft += scroll_amount;
  }

  return(
    <>
      <NavBar sideNavCollapseData={{sideNavCollapsedState, setSideNavCollapsedState}}/>
      <SideNavBar sideNavCollapsedState={sideNavCollapsedState} />
      <div className="contain-content">
      <div className={"page-content " + sideNavCollapsedState + "-content-margin"}>
        <div className="content-wrapper">
          <div className="video-wrapper">
            <div className="video">
              <video controls>
                <source src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" type="video/mp4"/>
              </video>
              <div className="video-information">
                <span className="video-title">This is a placeholder for the video name!</span>
                <div className="temp-flex">
                  <div>
                    <span className="video-views">1,090,134 views | May 19, 2022</span>
                  </div>
                  <div className="right-actions">
                    <div>
                      <i className={likeActionHoverState + " fa-thumbs-up"} onMouseOver={() => setLikeActionHoverState('fa-solid')} onMouseLeave={() => setLikeActionHoverState('fa-thin')}></i><span>17k</span>
                    </div>
                    <div>
                      <i className={dislikeActionHoverState + " fa-thumbs-down"} onMouseOver={() => setDislikeActionHoverState('fa-solid')} onMouseLeave={() => setDislikeActionHoverState('fa-thin')}></i>
                      <span>17k</span>
                    </div>
                    <div>
                      <i className={shareActionHoverState + " fa-share-all"} onMouseOver={() => setShareActionHoverState('fa-solid')} onMouseLeave={() => setShareActionHoverState('fa-thin')}></i>
                    </div>
                  </div>
                </div>
                {/* Contains formatted video description */}
                {/* Algorithm needed to detect description elements and add the revelent HTML */}
                <div className="video-description">This is the video description.</div>
              </div>
            </div>
          </div>
          <div className="video-side-bar-wrapper">
            <div className="channel-box">
              <UserIcon iconSize='medium'/>
              <div className="channel-details">
                <span className="channel-name">Channel Name</span>
                <span className="channel-followers">1.2K followers</span>
              </div>
              <div className="channel-actions">
              <button className="channel-support-button">SUPPORT</button>
                <button className="channel-follow-button">FOLLOW</button>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-header">
                <span>Comments</span>
              </div>
              <div className="comment-box-comments">
                <div className="comment">
                  <UserIcon iconSize="small"/>
                  <div className="comment-content">
                    <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
                    <span className="comment-text">This is the users comment, it goes here. Each comment should vary in height, so the comment content fits. This is an example of a really big comment, how is it going to look!</span>

                    <div className="comment-actions">
                      <div>
                        <i class="fa-light fa-thumbs-up"></i> <span>678</span>
                      </div>
                      <div>
                        <i class="fa-light fa-thumbs-down"></i>
                      </div>
                      <div className="reply">
                        <span>REPLY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <UserIcon iconSize="small"/>
                  <div className="comment-content">
                    <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
                    <span className="comment-text">This is the users comment, it goes here. Each comment should vary in height, so the comment content fits. This is an example of a really big comment, how is it going to look!</span>

                    <div className="comment-actions">
                      <div>
                        <i class="fa-light fa-thumbs-up"></i> <span>678</span>
                      </div>
                      <div>
                        <i class="fa-light fa-thumbs-down"></i>
                      </div>
                      <div className="reply">
                        <span>REPLY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <UserIcon iconSize="small"/>
                  <div className="comment-content">
                    <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
                    <span className="comment-text">This is the users comment, it goes here. Each comment should vary in height, so the comment content fits. This is an example of a really big comment, how is it going to look!</span>

                    <div className="comment-actions">
                      <div>
                        <i class="fa-light fa-thumbs-up"></i> <span>678</span>
                      </div>
                      <div>
                        <i class="fa-light fa-thumbs-down"></i>
                      </div>
                      <div className="reply">
                        <span>REPLY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <UserIcon iconSize="small"/>
                  <div className="comment-content">
                    <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
                    <span className="comment-text">This is the users comment, it goes here. Each comment should vary in height, so the comment content fits. This is an example of a really big comment, how is it going to look!</span>

                    <div className="comment-actions">
                      <div>
                        <i class="fa-light fa-thumbs-up"></i> <span>678</span>
                      </div>
                      <div>
                        <i class="fa-light fa-thumbs-down"></i>
                      </div>
                      <div className="reply">
                        <span>REPLY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <UserIcon iconSize="small"/>
                  <div className="comment-content">
                    <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
                    <span className="comment-text">This is the users comment, it goes here. Each comment should vary in height, so the comment content fits. This is an example of a really big comment, how is it going to look!</span>

                    <div className="comment-actions">
                      <div>
                        <i class="fa-light fa-thumbs-up"></i> <span>678</span>
                      </div>
                      <div>
                        <i class="fa-light fa-thumbs-down"></i>
                      </div>
                      <div className="reply">
                        <span>REPLY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Similar content</h1>
        <div className="recommendations-wrapper" ref={scrollElement}>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-f41731052ef38859a77214e2be972d69_screen.jpg?ts=1630950507" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://image-placeholder.com/images/actual-size/1920x1080.png" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://image-placeholder.com/images/actual-size/1920x1080.png" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://image-placeholder.com/images/actual-size/1920x1080.png" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
          <div className="recommendation-box">
            <div className="recommendation-thumbnail">
              <img alt=" Thumbnail" src="https://image-placeholder.com/images/actual-size/1920x1080.png" />
            </div>
            <div className="recommendation-details">
              <UserIcon iconSize="small"/>
              <div className="video-details">
                <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                <span className="channel-name">Channel Name</span>
                <span className="video-views">1,000,000 views | 5 years ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="over">
            <div>
              <button onClick={() => scrollRecommendation(0)}><i class="fa-light fa-chevron-left"></i></button>
            </div>
            <div>
              <button onClick={() => scrollRecommendation(1)}><i class="fa-light fa-chevron-right"></i></button>
            </div>
        </div>
      </div>

      </div>
    </>
  );
}



export default App;
