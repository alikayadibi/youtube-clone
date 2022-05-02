import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./VideoContainer.scss";
import { VideoCard } from "../../components";

const VideoContainer = () => {
   const isMenuOpen = useSelector((state) => state.isMenuOpen.isMenuOpen);
   const [videoContainerWidth, setVideoContainerWidth] = useState("");

   const videoContainerLarge = "app__videoContainer-menu-close";
   const videoContainerSmall = "app__videoContainer-menu-open";
   useEffect(() => {
      if (window.screen.width > 720) {
         if (isMenuOpen) {
            setVideoContainerWidth(videoContainerSmall);
         } else {
            setVideoContainerWidth(videoContainerLarge);
         }
      } else {
         setVideoContainerWidth(videoContainerLarge);
      }
   }, [isMenuOpen]);

   return (
      <div className="app__flex app__videoContainer-container">
         <div className={`app__videoContainer ${videoContainerWidth}`}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
         </div>
      </div>
   );
};

export default VideoContainer;
