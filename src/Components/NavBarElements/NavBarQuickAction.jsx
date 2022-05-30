import React from "react";

import './styles/NavBarQuickActionStyles.css';

const NavBarQuickAction = (props) => {
  return (
    <div className={"quick-action " + props.actionClass}>
      {props.children}
    </div>
  )
}

export default NavBarQuickAction;