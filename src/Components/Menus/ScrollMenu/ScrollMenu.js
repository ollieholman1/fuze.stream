import React, {useRef} from "react";

import './styles.css';

const ScrollMenu = (props) => {
    const ref = useRef(null);

    const scroll = (dir) => {
        var scrollOffset = dir == "left" ? 300 : -300;
        ref.current.scrollLeft = ref.current.scrollLeft + scrollOffset;
    }

    return (
        <>
            <div className="scroll-menu-wrapper">
                <div className="scroll-menu-button" onClick={() => scroll("right")}>
                    <button><i className="fa-solid fa-chevron-left"></i></button>
                </div>
                <div className="scroll-menu-content" ref={ref}>
                    { props.children }
                </div>
                <div className="scroll-menu-button" onClick={() => scroll("left")}>
                    <button><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default ScrollMenu;