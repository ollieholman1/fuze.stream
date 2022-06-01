import React from 'react';
import './styles.css';

const VideoSideBarWrapper = (props) => {
    return (
        <div className="video-side-bar-wrapper">
            {props.children}
        </div>
    )
}

export default VideoSideBarWrapper;