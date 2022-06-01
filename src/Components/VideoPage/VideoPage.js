import React from 'react';

import FlexWrapper from '../SharedLayout/FlexWrapper/FlexWrapper';
import VideoWrapper from './components/VideoWrapper/VideoWrapper';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInformation from './components/VideoInformation/VideoInformation';
import VideoSideBarWrapper from './components/VideoSideBarWrapper/VideoSideBarWrapper';
import VideoCreatorDetails from './components/VideoCreatorDetails/VideoCreatorDetails';
import CommentBox from './components/CommentBox/CommentBox';
import Comment from './components/Comment/Comment';

import '../../main.css';

const VideoScreen = () => {
    return (
        <>
            <FlexWrapper>
                <VideoWrapper>
                    <VideoPlayer />
                    <VideoInformation />
                </VideoWrapper>
                <VideoSideBarWrapper>
                    <VideoCreatorDetails />
                    <CommentBox>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </CommentBox>
                </VideoSideBarWrapper>
            </FlexWrapper>
        </>
    )
}

export default VideoScreen;
