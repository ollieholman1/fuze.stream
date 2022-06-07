import React from "react";

import './styles.css';

const TopNavBarAccountButtons = () => {
    return (
        <>
            <div className="account-button-container">
                <button className="top-nav-bar-button log-in">LOG IN</button>
                <button className="top-nav-bar-button sign-up">SIGN UP</button>
            </div>
        </>
    )
}

export default TopNavBarAccountButtons;