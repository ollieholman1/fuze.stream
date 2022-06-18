import React from 'react';
import './styles.css';

import UserIcon from '../../../../Components/SharedLayout/UserIcon/UserIcon';

const VideoCreatorDetails = () => {
    return (
      <>
        <div className="video-creator-details-wrapper">
          <UserIcon iconSize="small" />
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
    )
}

export default VideoCreatorDetails;