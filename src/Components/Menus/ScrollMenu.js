import React from "react";
import { useRef } from "react";

import UserIcon from "../User/UserProfileIcon";

import './styles/scrollMenuStyles.css';

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

const ScrollMenu = (props) => {
    const ref = useRef(null);

    const scroll = (dir) => {
        var scrollOffset = dir == "left" ? 300 : -300;
        ref.current.scrollLeft = ref.current.scrollLeft + scrollOffset;
    }

    return (
        <>
            <div className="scroll-menu-wrapper">
                <div className="scroll-menu-button" onClick={() => scroll("right")}>
                    <button><i className="fa-solid fa-chevron-left"></i></button>
                </div>
                <div className="scroll-menu-content" ref={ref}>
                    { props.children }
                </div>
                <div className="scroll-menu-button" onClick={() => scroll("left")}>
                    <button><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default ScrollMenu;