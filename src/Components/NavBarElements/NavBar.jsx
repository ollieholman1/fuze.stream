import React, { useContext, useState } from 'react';

import NavBarElement from './NavBarElement.jsx';
import NavBarLogo from './NavBarLogo.jsx';
import NavBarQuickAction from './NavBarQuickAction.jsx';
import NavBarHamburger from './NavBarHamburger.jsx';

import UserIcon from '../User/UserProfileIcon.jsx';
import SearchBar from '../Search/SearchBar.jsx';

import './styles/NavBarStyles.css';

const NavBar = (props) => {
  const [notificationIcon, setNotificationIcon] = useState('fa-light');
  const [bounceOnHover, setBounceOnHover] = useState("");

  const {sideNavCollapsedState, setSideNavCollapsedState} = props.sideNavCollapseData;

  return (
    <div className="nav-bar-container">
      <NavBarElement extraClasses="">
        <NavBarHamburger onClick={() => setSideNavCollapsedState(sideNavCollapsedState == 'collapsed' ? 'expanded' : 'collapsed')}/>
      </NavBarElement>

      <NavBarElement extraClasses="logo-container">
        <NavBarLogo />
      </NavBarElement>

      <NavBarElement extraClasses="search-bar-container">
        <SearchBar />
      </NavBarElement>

      <NavBarElement extraClasses="quick-action-container pull-right">
      
        <NavBarQuickAction actionClass="coin-action">
          <div 
          onMouseOver={() => setBounceOnHover('fa-bounce')}
          onMouseLeave={() => setBounceOnHover('')}
            >
            10,000 <i className={"fa-solid fa-coin " + bounceOnHover}></i>
          </div>
        </NavBarQuickAction>

        <NavBarQuickAction actionClass="notification-action">
          <div className="notification-icon-container" 
            onMouseOver={() => setNotificationIcon('fa-solid')}
            onMouseLeave={() => setNotificationIcon('fa-light')}
            >
            <i className={notificationIcon + " fa-bell"}></i>
          </div>
        </NavBarQuickAction>

        <NavBarQuickAction actionClass="user-profile-action">
          <UserIcon iconSize="small"/>
          <div className="user-profile-expand-icon">
            <i className="fa-light fa-chevron-down"></i>
          </div>
        </NavBarQuickAction>
      </NavBarElement>
    </div>
  )
}

export default NavBar;