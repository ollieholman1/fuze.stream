import React from "react";

import { useState } from "react";

import SideNavBarElement from "./SideNavBarElement";

import './styles/SideNavBarStyles.css';

const SideNavBar = (props) => {
  const sideNavState = props.sideNavState == 0 ? 'collapsed' : 'expanded';

  return (
    <div className={"side-nav " + sideNavState}>
      <SideNavBarElement isSelected={true} iconName="fa-house" elementText="Home"/>
      <SideNavBarElement iconName="fa-fire" elementText="Trending"/>
      <SideNavBarElement iconName="fa-clock-rotate-left" elementText="History"/>
    </div>
  )
}

export default SideNavBar;