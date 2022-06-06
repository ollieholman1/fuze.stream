import React from 'react';

const TopNavBarHamburger = (props) => {
  return (
    <div className="nav-bar-icon" onClick={props.onClick}>
      <i className="fa-light fa-bars" style={{cursor: 'pointer'}}></i>
    </div>
  )
}

export default TopNavBarHamburger;