import React from "react";

import './styles/SideNavBarElementIconStyles.css';

const SideNavBarElementIcon = (props) => {
  return (
    <div className="side-nav-element-icon">
      <i className={"fa-light " + props.iconName}></i>
    </div>
  );
}

export default SideNavBarElementIcon;