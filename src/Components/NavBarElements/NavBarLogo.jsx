import React from "react";

import './styles/NavBarLogoStyles.css';

import fuze_logo from '../../Assets/Logos/nav-bar-logo.png';

const NavBarLogo = () => {
  return (
    <div className="nav-bar-logo">
      <img src={fuze_logo} alt="FUZE" />
    </div>
  )
}

export default NavBarLogo;
