import React from 'react';
import './styles.css';

const VideoPlayer = () => {
    return (
      <>
        <video controls>
          <source src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" type="video/mp4" />
        </video>
      </>
    )
  }

export default VideoPlayer;