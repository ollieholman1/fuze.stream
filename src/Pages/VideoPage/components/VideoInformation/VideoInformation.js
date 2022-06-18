import React from 'react';
import './styles.css';

import HoverableIcon from '../../../../Components/SharedLayout/Icons/HoverableIcon/HoverableIcon';
import StaticIcon from '../../../../Components/SharedLayout/Icons/StaticIcon/StartIcon';

const VideoInformation = () => {
    return (
    <>
      <div className="video-information">
        <span className="video-title">This is a placeholder for the video name!</span>
        <div className="video-tags">
          <span>#jubilee</span>
          <span>#2022</span>
          <span>#queen</span>
        </div>
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
        <div className="video-description">This is the video description. <span className="description-expand">EXPAND</span></div>
      </div>
    </>
    )
}

export default VideoInformation;