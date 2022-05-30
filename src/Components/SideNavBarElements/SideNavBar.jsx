import React from "react";

import SideNavBarElement from "./SideNavBarElement";

import './styles/SideNavBarStyles.css';

const SideNavBar = (props) => {
  return (
    <div className={"side-nav " + props.sideNavCollapsedState}>
      <SideNavBarElement isSelected={true} iconName="fa-house" elementText="Home"/>
      <SideNavBarElement iconName="fa-fire" elementText="Trending"/>
      <SideNavBarElement iconName="fa-clock-rotate-left" elementText="History"/>
    </div>
  )
}

export default SideNavBar;