import React from "react";

import './styles.css';


// Contains the content to a certain width when window has reached a certain width
// Similar to bootstraps container
// ---


const Container = (props) => {
    return (
      <>
        <div className="contain-content">
          { props.children }
        </div>
      </>
    )
  }

export default Container;