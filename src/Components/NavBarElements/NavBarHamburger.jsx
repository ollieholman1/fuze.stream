import React from 'react';

const NavBarHamburger = (props) => {
  return (
    <div className="nav-bar-icon" onClick={props.onClick}>
      <i className="fa-light fa-bars" style={{cursor: 'pointer'}}></i>
    </div>
  )
}

export default NavBarHamburger;