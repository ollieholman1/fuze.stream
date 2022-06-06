import React from 'react';
// import './styles/NavBarElementStyles.css';
import './styles.css';

const TopNavBarElement = (props) => {
  return (
    <div className={"nav-bar-element-container " + props.extraClasses}>
      {props.children}
    </div>
  );
}

export default TopNavBarElement;