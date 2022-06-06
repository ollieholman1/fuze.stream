import React from "react";

// import './styles/NavBarQuickActionStyles.css';
import './styles.css';

const TopNavBarAction = (props) => {
  return (
    <div className={"quick-action " + props.actionClass}>
      {props.children}
    </div>
  )
}

export default TopNavBarAction;