import React, {useState} from 'react';

import './styles.css';


// Font awesome icon which changes state on hover
// ---


const HoverableIcon = (props) => {
    const [iconType, setIconType] = useState(props.baseType);
  
    const iconClass = iconType + ' ' + props.icon;
  
    function alternateType() {
      const nextIconState = iconType === props.baseType ? 'fa-solid' : props.baseType;
  
      setIconType(nextIconState);
    }
  
    return (
      <i 
        style={{fontSize: props.fontSize}}
        className={iconClass}
        onMouseOver={() => alternateType()}
        onMouseLeave={() => alternateType()}
      ></i>
    )
  }

export default HoverableIcon;