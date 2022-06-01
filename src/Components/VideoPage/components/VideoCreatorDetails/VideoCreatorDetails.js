import React from 'react';
import './styles.css';

import UserIcon from '../../../SharedLayout/UserIcon/UserIcon';

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
    )
}

export default VideoCreatorDetails;