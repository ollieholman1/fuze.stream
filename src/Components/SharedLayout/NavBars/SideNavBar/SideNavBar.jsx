import React from "react";

import SideNavBarSection from "./components/SideNavBarSection/SideNavBarSection";

import './styles.css';


// Collapsible navigation bar included on every page. 
// ---


const SideNavBar = (props) => {
  const sideNavState = props.sideNavState == 0 ? 'collapsed' : 'expanded';

  return (
    <div className={"side-nav " + sideNavState}>
      <SideNavBarSection isSelected={true} iconName="fa-house" elementText="Home"/>
      <SideNavBarSection iconName="fa-fire" elementText="Trending"/>
      <SideNavBarSection iconName="fa-clock-rotate-left" elementText="History"/>
    </div>
  )
}

export default SideNavBar; 