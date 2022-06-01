import React from 'react';
import './styles.css';

import UserIcon from '../../../SharedLayout/UserIcon/UserIcon';
import HoverableIcon from '../../../SharedLayout/Icons/HoverableIcon/HoverableIcon';

const Comment = () => {
    return (
      <>
        <div className="comment">
          <UserIcon iconSize="small"/>
          <div className="comment-content">
            <span className="comment-author"><b>John Smith</b> <span>10 mins ago</span></span>
            <span className="comment-text">This is the users comment, it goes here.e of a really big comment, how is it going to look!</span>
  
            <div className="comment-actions">
              <div>
                <HoverableIcon baseType="fa-light" icon="fa-thumbs-up" /> <span>678</span>
              </div>
              <div>
                <HoverableIcon baseType="fa-light" icon="fa-thumbs-down" />
              </div>
              <div className="reply">
                <span>REPLY</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Comment;