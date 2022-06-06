import React, { useContext, useState } from 'react';

import TopNavBarElement from './components/TopNavBarSection/TopNavBarSection.js';
import TopNavBarLogo from './components/TopNavBarLogo/TopNavBarLogo.js';
import TopNavBarAction from './components/TopNavBarAction/TopNavBarAction.js';
import TopNavBarHamburger from './components/TopNavBarHamburger/TopNavBarHambuger.js';

import UserIcon from '../../UserIcon/UserIcon.js';
import SearchBar from '../../SearchBar/SearchBar.js';

import HoverableIcon from '../../Icons/HoverableIcon/HoverableIcon.js';
import StaticIcon from '../../Icons/StaticIcon/StartIcon.js';

import './styles.css';


// Top navigation bar included on every page
// ---


const TopNavBar = (props) => {
  const [notificationIcon, setNotificationIcon] = useState('fa-light');
  const [bounceOnHover, setBounceOnHover] = useState("");

  function toggleSideNavState() {
    const {sideNavState, setSideNavState} = props.sideNavStateData;

    setSideNavState(sideNavState == 0 ? 1 : 0);
  }

  return (
    <div className="nav-bar-container" style={{marginLeft: '00px'}}>
      <TopNavBarElement extraClasses="fixed-element">
        <TopNavBarHamburger onClick={() => toggleSideNavState()}/>
      </TopNavBarElement>

      <TopNavBarElement extraClasses="logo-container fixed-element">
        <TopNavBarLogo />
      </TopNavBarElement>

      <TopNavBarElement extraClasses="search-bar-container">
        <SearchBar />
      </TopNavBarElement>

      <TopNavBarElement extraClasses="quick-action-container pull-right">
      
        <TopNavBarAction actionClass="coin-action">
          <div 
          onMouseOver={() => setBounceOnHover('fa-bounce')}
          onMouseLeave={() => setBounceOnHover('')} 
            >
            1.2K <i className={"fa-solid fa-coin " + bounceOnHover}></i>
          </div>
        </TopNavBarAction>

        <TopNavBarAction actionClass="notification-action">
            <div className="notification-icon-container">
                <HoverableIcon icon="fa-bells" baseType="fa-light" fontSize="17px"/>
            </div>
        </TopNavBarAction>

        <TopNavBarAction actionClass="user-profile-action">
          <UserIcon iconSize="extra-small"/>
          <div className="user-profile-expand-icon">
            {/* <i className="fa-light fa-chevron-down"></i> */}
            <StaticIcon icon="fa-light fa-chevron-down" />
          </div>
        </TopNavBarAction>
      </TopNavBarElement>
    </div>
  )
}

export default TopNavBar;