import React from "react";
import { useRef } from "react";

import UserIcon from "../User/UserProfileIcon";

import './styles/videoRecommendationCardStyles.css';

const VideoRecommendationCard = (props) => {
    return (
        <>
    
        <div className="recommendation-box">
            <div className="recommendation-thumbnail">
                <img 
                    alt="Video Recommendation"
                    src="https://image-placeholder.com/images/actual-size/1920x1080.png"
                />
            </div>
            <div className="recommendation-video-details">
                <UserIcon iconSize="small" />
                <div className="video-details">
                    <span className="video-title">What is Fuze? How can it revolutionise social media?</span>
                    <span className="channel-name">Channel Name</span>
                    <span className="video-views">1,000,000 views | 5 years ago</span>
                </div>
            </div>
        </div>

        </>
    );
}

export default VideoRecommendationCard;