import React from "react";

import SideNavBarElementIcon from "./SideNavBarElementIcon";
import SideNavBarElementText from "./SideNavBarElementText";

import './styles/SideNavBarElementStyles.css';

const SideNavBarElement = (props) => {
  const isSelected = props.isSelected ? 'selected' : '';

  return (
    <div className={"side-nav-element " + isSelected}>
      <SideNavBarElementIcon iconName={props.iconName} />
      <SideNavBarElementText elementText={props.elementText} />
    </div>
  )
}

export default SideNavBarElement;