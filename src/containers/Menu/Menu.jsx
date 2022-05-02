import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
   MdOutlineExplore,
   MdSubscriptions,
   MdVideoLibrary,
   MdHistory,
   MdOutlineWatchLater,
} from "react-icons/md";
import { GiTronArrow } from "react-icons/gi";
import { RiVideoLine, RiMenuUnfoldFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

import "./Menu.scss";
import { useSelector } from "react-redux";

const btnGroupOne = [
   {
      icon: <AiFillHome />,
      name: "Home",
   },
   {
      icon: <MdOutlineExplore />,
      name: "Explore",
   },
   {
      icon: <GiTronArrow />,
      name: "Shorts",
   },
   {
      icon: <MdSubscriptions />,
      name: "Subscriptions",
   },
];

const btnGroupTwo = [
   {
      icon: <MdVideoLibrary />,
      name: "Library",
   },
   {
      icon: <MdHistory />,
      name: "History",
   },
   {
      icon: <RiVideoLine />,
      name: "Your Videos",
   },
   {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
   },
   {
      icon: <RiMenuUnfoldFill />,
      name: "Mixed Songs",
   },
   {
      icon: <BsChevronDown />,
      name: "Show More",
   },
];

const subArr = [
   {
      icon: "https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s88-c-k-c0x00ffffff-no-rj",
      name: "Javascript Mastery",
   },
   {
      icon: "https://yt3.ggpht.com/XJV8ul5v0tMtk_JhPQQbf05oYHm98JwWwwxrFdAaKnpbBwplYs6J5r65MBSW1C9mfW7JSB86DQ=s88-c-k-c0x00ffffff-no-rj",
      name: "LastWeekTonight",
   },
   {
      icon: "https://yt3.ggpht.com/TmWtolbeDxuNmTOuv7fLTGt6TgS4dpceivEzVZhrguJz0anfNjOmx0WOVi0hBgo_ZDdpOy29Eg=s88-c-k-c0x00ffffff-no-rj",
      name: "Halocene",
   },
   {
      icon: "https://yt3.ggpht.com/ytc/AKedOLRVT94BfVl1Xw1UCqakso5v7sSWB0QQvLd3fAAKTw=s88-c-k-c0x00ffffff-no-rj",
      name: "Kurzgesagt - In a Nutshell",
   },
   {
      icon: "https://yt3.ggpht.com/PVF4vIcVEtapRrU5SnmbKwK4hTy7n6x_Sfas6ruR_62ZbF2sc5ydQQ0IBPTHvphxcgdBgMcuc_M=s88-c-k-c0x00ffffff-no-rj",
      name: "FORMULA 1",
   },
   {
      icon: "https://yt3.ggpht.com/yti/APfAmoGtTxgkUM7i4WzdMiiwrSxaHmKcbnkP1cADqg=s88-c-k-c0x00ffffff-no-rj-mo",
      name: "Ali Kayadibi",
   },
   {
      icon: "https://yt3.ggpht.com/ZfiMcmejB-ij7aiIe--QDNhE8sLvRJ6WSZtL9OmE0YmH7wJwqY2p6hRFhhwE0Zc7ecaRCn7a1g=s88-c-k-c0x00ffffff-no-rj",
      name: "Violet Orlandi",
   },
];

const Menu = () => {
   const isMenuOpen = useSelector((state) => state.isMenuOpen.isMenuOpen);

   return (
      <div
         className={`app__flex app__menu-container ${
            isMenuOpen ? "app__menu-menu-open" : "app__menu-menu-close"
         }`}
      >
         <div id="app-menu" className="app__menu app__menu-small">
            <div className="app__menu-groupOne">
               {btnGroupOne.map((btn, i) => (
                  <div
                     key={i}
                     className="app__menu-groupOne-btn app__flex"
                     style={{ justifyContent: "flex-start" }}
                  >
                     {btn.icon}
                     <p>{btn.name}</p>
                  </div>
               ))}
            </div>

            <div className="app__menu-groupTwo">
               {btnGroupTwo.map((btn, i) => (
                  <div
                     className="app__menu-groupTwo-btn app__flex"
                     key={i}
                     style={{ justifyContent: "flex-start" }}
                  >
                     {btn.icon}
                     <p>{btn.name}</p>
                  </div>
               ))}
            </div>

            <h3 className="app__menu-subscriptions">SUBSCRIPTIONS</h3>

            <div className="app__menu-subscriptions-list">
               {subArr.map((item, i) => (
                  <div
                     className="app__menu-subscriptions-list-item app__flex"
                     key={i}
                     style={{ justifyContent: "flex-start" }}
                  >
                     <img src={item.icon} alt={item.name} />
                     <p>
                        {item.name.length < 20
                           ? item.name
                           : `${item.name.slice(0, 17)}...`}
                     </p>
                  </div>
               ))}
               <div
                  className="app__menu-show-more app__flex"
                  style={{ justifyContent: "flex-start" }}
               >
                  <BsChevronDown />
                  <p>Show {subArr.length} More</p>
               </div>
            </div>

            {/* REPEATING PART */}
            <div className="app__menu-subscriptions-list">
               {subArr.map((item, i) => (
                  <div
                     className="app__menu-subscriptions-list-item app__flex"
                     key={i}
                     style={{ justifyContent: "flex-start" }}
                  >
                     <img src={item.icon} alt={item.name} />
                     <p>
                        {item.name.length < 20
                           ? item.name
                           : `${item.name.slice(0, 17)}...`}
                     </p>
                  </div>
               ))}
               <div
                  className="app__menu-show-more app__flex"
                  style={{ justifyContent: "flex-start" }}
               >
                  <BsChevronDown />
                  <p>Show {subArr.length} More</p>
               </div>
            </div>
            {/* REPEATING PART */}
         </div>
      </div>
   );
};

export default Menu;
