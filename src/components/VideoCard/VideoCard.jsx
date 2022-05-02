import React from "react";
import { FiMoreVertical } from "react-icons/fi";

import "./VideoCard.scss";

const VideoCard = () => {
   return (
      <div className="app__videoCard-container">
         <div
            className="app__videoCard-thumbnail"
            data-duration="13:49"
            hover-to-play="Keep hovering to play"
         >
            <img src="https://picsum.photos/480/270" alt="thumbnail" />
            <FiMoreVertical className="more-btn" />
         </div>

         <div className="app__videoCard-metadata-container">
            <div className="app__videoCard-channelLogo">
               <img src="https://picsum.photos/36" alt="channel-logo" />
            </div>

            <div className="app__videoCard-metadata">
               <h3>First and every video</h3>
               <p>YouTubeClone</p>
               <p>468K views • 3 days ago</p>
            </div>
         </div>
      </div>
   );
};

export default VideoCard;
