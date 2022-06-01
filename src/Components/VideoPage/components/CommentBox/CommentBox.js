import React from 'react';
import './styles.css';

import UserIcon from '../../../SharedLayout/UserIcon/UserIcon';

const CommentBox = (props) => {
    return (
        <>
        <div className="comment-box">
            <div className="comment-box-header">
            <span>Comments</span>
            </div>
            <div className="comment-box-comments">
            { props.children }
            </div>
            <div className="post-comment">
            <UserIcon iconSize="small" />
            <div className="post-comment-input-container">
                <input placeholder='Comment'/>
            </div>
            </div>
        </div>
        </>
    );
}

export default CommentBox;