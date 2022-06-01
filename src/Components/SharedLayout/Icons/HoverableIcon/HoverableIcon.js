import React, {useState} from 'react';

const HoverableIcon = (props) => {
    const [iconType, setIconType] = useState(props.baseType);
  
    const iconClass = iconType + ' ' + props.icon;
  
    function alternateType() {
      const nextIconState = iconType == props.baseType ? 'fa-solid' : props.baseType;
  
      setIconType(nextIconState);
    }
  
    return (
      <i 
        className={iconClass}
        onMouseOver={() => alternateType()}
        onMouseLeave={() => alternateType()}
      ></i>
    )
  }

export default HoverableIcon;