import React from 'react';
import './styles/NavBarElementStyles.css';

const NavBarElement = (props) => {
  return (
    <div className={"nav-bar-element-container " + props.extraClasses}>
      {props.children}
    </div>
  );
}

export default NavBarElement;