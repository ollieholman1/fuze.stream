import React from 'react';

import '../../Components/SharedLayout/core-styles.css';

import FlexWrapper from '../../Components/SharedLayout/FlexWrapper/FlexWrapper';
import VideoWrapper from './components/VideoWrapper/VideoWrapper';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInformation from './components/VideoInformation/VideoInformation';
import VideoSideBarWrapper from './components/VideoSideBarWrapper/VideoSideBarWrapper';
import VideoCreatorDetails from './components/VideoCreatorDetails/VideoCreatorDetails';
import CommentBox from './components/CommentBox/CommentBox';
import Comment from './components/Comment/Comment';

import HorizontalSpace from '../../Components/SharedLayout/HorizontalSpace/HorizontalSpace';

import ScrollMenu from '../../Components/Menus/ScrollMenu/ScrollMenu';
import VideoRecommendationCard from '../../Components/Cards/VideoRecommendationCard/VideoRecommendationCard';

import './media-queries.css';

import './scripts/content-resize.js';
import Container from '../../Components/SharedLayout/Container/Container';
import PageContent from '../../Components/SharedLayout/PageContent/PageContent';


// This is the video screen, containing the video player and oweer, comments, decription and recommendations.
// ---


const VideoScreen = () => {
    return (
        <>
            <Container>
                <PageContent>
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

                    <HorizontalSpace />

                    <ScrollMenu>
                        <VideoRecommendationCard src="https://wallpapercave.com/wp/XMnhQSq.jpg" />
                        <VideoRecommendationCard src="https://wallpaperaccess.com/full/170249.jpg"/>
                        <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-21.jpg" />
                        <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs.png" />
                        <VideoRecommendationCard src="https://c4.wallpaperflare.com/wallpaper/417/44/10/nature-landscape-clear-mountain-river-stone-pine-forest-and-mountainous-peaks-desktop-wallpaper-hd-4780-wallpaper-preview.jpg" />
                        <VideoRecommendationCard src="https://w0.peakpx.com/wallpaper/965/673/HD-wallpaper-green-mountain-and-water-natural-landscape.jpg" />
                        <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-21.jpg" />
                        <VideoRecommendationCard src="http://wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs.png" />
                    </ScrollMenu>
                </PageContent>
            </Container>

            
        </>
    )
}

export default VideoScreen;
