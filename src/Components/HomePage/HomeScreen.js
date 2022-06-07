import React from "react";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ScrollMenu from "../Menus/ScrollMenu/ScrollMenu";
import FlexWrapper from "../SharedLayout/FlexWrapper/FlexWrapper";
import VideoRecommendationCard from "../Cards/VideoRecommendationCard/VideoRecommendationCard";
import HorizontalSpace from "../SharedLayout/HorizontalSpace/HorizontalSpace";
import UserIcon from "../SharedLayout/UserIcon/UserIcon";

const HomeScreen = () => {
    return (
        <>
        
            <ScrollMenu>
                <div className="trending-video">
                    <div>
                        <UserIcon iconSize="medium" />
                        <div className="trending-video-creator-details">
                            <span className="trending-number">#1 trending</span>
                            <span className="trending-title">Trending video number 1</span>
                            <span className="trending-views">Smithy</span>
                            <span className="trending-views">1,000,000 views</span>
                        </div>
                    </div>
                </div>
                <div className="trending-video">
                    <div>
                        <UserIcon iconSize="medium" />
                        <div className="trending-video-creator-details">
                            <span className="trending-number">#2 trending</span>
                            <span className="trending-title">Trending video number 2</span>
                            <span className="trending-views">Smithy</span>
                            <span className="trending-views">1,000,000 views</span>
                        </div>
                    </div>
                </div>
                <div className="trending-video">
                    <div>
                        <UserIcon iconSize="medium" />
                        <div className="trending-video-creator-details">
                            <span className="trending-number">#3 trending</span>
                            <span className="trending-title">Trending video number 3</span>
                            <span className="trending-views">Smithy</span>
                            <span className="trending-views">1,000,000 views</span>
                        </div>
                    </div>
                </div>
                <div className="trending-video">
                    <div>
                        <UserIcon iconSize="medium" />
                        <div className="trending-video-creator-details">
                            <span className="trending-number">#4 trending</span>
                            <span className="trending-title">Trending video number 4</span>
                            <span className="trending-views">Smithy</span>
                            <span className="trending-views">1,000,000 views</span>
                        </div>
                    </div>
                </div>
            </ScrollMenu>

            <HorizontalSpace />

            <h1>Recommended</h1>

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

            <h1>Newest</h1>

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
         
        </>
        // <p>Home</p>
    )
}

export default HomeScreen;