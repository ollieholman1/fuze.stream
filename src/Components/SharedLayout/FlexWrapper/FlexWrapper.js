import React from 'react';
import './styles.css';


// Flex wrapper handles the top-level layout of all pages
// e.g, the video page contains a FlexWrapper which positions the video player & right video pane
// ---


const FlexWrapper = (props) => {
    return (
        <>
        <div className="flex-wrapper">
            { props.children }
        </div>
        </>
    );
}

export default FlexWrapper;