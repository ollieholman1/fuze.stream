import React from "react";
import './styles.css';

const CategoryTitle = (props) => {
    const hasTopSpacing = props.topSpacing === 'true' ? 'top-title-margin' : '';

    return (
        <>
        <div className={"category-title " + hasTopSpacing}>
                <span style={{fontFamily: 'Roboto', fontSize: '23px', fontWeight: '400'}}>{ props.title }</span>
                <div style={{height: '1px', background: 'rgba(0,0,0,0.05)', width: '100%'}}></div>
            </div>
        </>
    )
}


export default CategoryTitle;