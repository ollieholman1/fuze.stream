import React from "react";
import UserIcon from "../../SharedLayout/UserIcon/UserIcon";

import '../../SharedLayout/css-variables.css';
import './styles.css';

const TrendingVideoCard = () => {
    return (
        <>
            <div className="trending-video-box">
                <div className="trending-video-content">
                    <img 
                        alt="Trending Video"
                        src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000"
                    />
                    <div className="trending-video-overlay">
                        <UserIcon iconSize="medium" />
                        <div className="trending-video-creator-details">
                            <span className="trending-number">#1 trending</span>
                            <span className="video-title">Trending video number 1</span>
                            <span className="video-channel-name">Smithy</span>
                            <span className="video-views">1,000,000 views</span>
                        </div>
                    </div>
                </div>      
            </div>
        </>
    );
}

export default TrendingVideoCard;