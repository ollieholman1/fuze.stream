import React from "react";

import './styles/SideNavBarElementTextStyles.css';

const SideNavBarElementText = (props) => {
  return (
    <div className="side-nav-element-text">
      <span>{props.elementText}</span>
    </div>
  );
}

export default SideNavBarElementText;