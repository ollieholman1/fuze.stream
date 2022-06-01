import React from 'react';
import './styles.css';

const VideoWrapper = (props) => {
  return (
    <>
      <div className="video-wrapper">
        <div className="video">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default VideoWrapper;