import React from 'react';
import './styles.css';

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