import React from "react";

import '../SharedLayout/core-styles.css';

import ScrollMenu from "../Menus/ScrollMenu/ScrollMenu";
import VideoRecommendationCard from "../Cards/VideoRecommendationCard/VideoRecommendationCard";
import HorizontalSpace from "../SharedLayout/HorizontalSpace/HorizontalSpace";

import TrendingVideoCard from "../Cards/TrendingVideoCard/TrendingVideoCard";
import DefaultBr from "../SharedLayout/DefaultBr/DefaultBr";

import CategoryTitle from "./components/CategoryTitle/CategoryTitle";
import Container from "../SharedLayout/Container/Container";
import PageContent from "../SharedLayout/PageContent/PageContent";

const HomeScreen = () => {
    return (
        <>
            <Container>
                <PageContent>
                    <CategoryTitle title="Trending" topSpacing="true" />

                    <DefaultBr />

                    <ScrollMenu>
                        <TrendingVideoCard />
                        <TrendingVideoCard />
                        <TrendingVideoCard />
                    </ScrollMenu>

                    <HorizontalSpace />

                    <CategoryTitle title="Recommended" />

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

                    <HorizontalSpace />

                    <CategoryTitle title="Newest" />

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

export default HomeScreen;