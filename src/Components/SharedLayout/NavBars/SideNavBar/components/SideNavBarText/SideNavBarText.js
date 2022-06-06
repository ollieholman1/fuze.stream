import React from "react";

// import './styles/SideNavBarElementTextStyles.css';
import './styles.css';

const SideNavBarText = (props) => {
  return (
    <div className="side-nav-element-text">
      <span>{props.elementText}</span>
    </div>
  );
}

export default SideNavBarText;