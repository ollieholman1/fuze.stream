import React from 'react';

import './styles.css';


// Page content container used on all screens
// ---


const PageContent = (props) => {
    return (
        <>
            <div className="page-content">
                {props.children}
            </div>
        </>
    )
}

export default PageContent;