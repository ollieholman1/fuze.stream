import React from "react";

// import SideNavBarElementIcon from "./SideNavBarElementIcon";
// import SideNavBarIcon from "./components/SideNavBarIcon/SideNavBarIcon";
import SideNavBarIcon from "../SideNavBarIcon/SideNavBarIcon";
import SideNavBarText from "../SideNavBarText/SideNavBarText";
// import SideNavBarElementText from "./SideNavBarElementText";

// import './styles/SideNavBarElementStyles.css';

import './styles.css';

const SideNavBarSection = (props) => {
  const isSelected = props.isSelected ? 'selected' : '';

  return (
    <div className={"side-nav-element " + isSelected}>
      <SideNavBarIcon iconName={props.iconName} />
      <SideNavBarText elementText={props.elementText} />
    </div>
  )
}

export default SideNavBarSection;