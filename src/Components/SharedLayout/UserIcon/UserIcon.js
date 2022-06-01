import React from 'react';

import './styles.css';

import user_icon from './user-profile-icon-placeholder.png';

const UserIcon = (props) => {
  return (
    <div className={"user-profile-icon " + props.iconSize + "-icon"}>
      <img src={user_icon} alt="User Icon"/>
    </div>
  )
}

export default UserIcon;