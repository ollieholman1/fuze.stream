import React from "react";

import './styles.css';

const SideNavBarIcon = (props) => {
    return (
      <div className="side-nav-element-icon">
        <i className={"fa-light " + props.iconName}></i>
      </div>
    );
  }

export default SideNavBarIcon;