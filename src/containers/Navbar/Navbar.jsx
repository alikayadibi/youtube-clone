import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { FaMicrophone, FaUserAlt } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { images } from "../../constants";
import "./Navbar.scss";
import { updateIsMenuOpen } from "../../features/isMenuOpen/isMenuOpenSlice";

const tags = [
   "All",
   "Elon Musk",
   "Talk Shows",
   "Minecraft",
   "Comedies",
   "Jeff Bezos",
   "Javascript",
   "Podcasts",
   "Mixes",
   "Music",
   "Alternative Rock",
   "CSS3",
   "React",
   "Recently Uploaded",
   "Live",
   "Watched",
   "New to you",
];

const Navbar = () => {
   const dispatch = useDispatch();
   const isMenuOpen = useSelector((state) => state.isMenuOpen.isMenuOpen);

   let scrollTags = null;

   const handleTagsScrollLeft = () => {
      scrollTags.scrollLeft += 300;
   };
   const handleTagsScrollRight = () => {
      scrollTags.scrollLeft -= 300;
   };

   let navbarWidth;
   if (isMenuOpen) {
      navbarWidth = "app__navbar-fullW";
   }
   useEffect(() => {
      if (!isMenuOpen) {
         document.getElementById("navbar-second-half-tags").style.width =
            "100%";
      } else {
         document.getElementById("navbar-second-half-tags").style.width =
            "calc(100% - 250.5px)";
      }
   }, [isMenuOpen]);

   useEffect(() => {
      scrollTags = document.querySelector(".app___navbar-tags-list");
      scrollTags.addEventListener("wheel", (evt) => {
         evt.preventDefault();
         scrollTags.scrollLeft += evt.deltaY * 3;
      });
   }, []);

   return (
      <div className="app___navbar">
         <div className="app___navbar-first-half">
            <div
               className="app___navbar-menu-icon app__flex"
               onClick={() => dispatch(updateIsMenuOpen())}
            >
               <AiOutlineMenu />
            </div>

            <div className="app___navbar-logo-container">
               <div className="app___navbar-logo">
                  <img src={images.ytLogo} alt="yt-logo" />
                  <div></div>
                  <p>YouTube</p>
               </div>
            </div>

            <div className="app___navbar-search app__flex">
               <div className="app___navbar-search-input">
                  <input type="text" placeholder="Search" />
                  <AiOutlineSearch />
               </div>
               <div className="app___navbar-search-mic app__flex">
                  <FaMicrophone />
               </div>
            </div>

            <div className="app___navbar-btns-container app__flex">
               <div className="app___navbar-btns">
                  <BiVideoPlus className="app___navbar-btns-btn" />
                  <MdApps className="app___navbar-btns-btn" />
                  <AiOutlineBell className="app___navbar-btns-btn" />
                  <FaUserAlt className="app___navbar-btns-btn" />
               </div>
            </div>
         </div>

         <div className="app___navbar-second-half">
            <div
               id="navbar-second-half-tags"
               className="app___navbar-tags app__flex"
            >
               <div
                  className="app___navbar-tags-arrow app__flex"
                  onClick={handleTagsScrollRight}
               >
                  <BsChevronLeft />
               </div>
               <div className="app___navbar-tags-list app__flex">
                  {tags.map((tag, i) => (
                     <div className="app___navbar-tags-item" key={i}>
                        <p>{tag}</p>
                     </div>
                  ))}
               </div>
               <div
                  className="app___navbar-tags-arrow app__flex"
                  onClick={handleTagsScrollLeft}
               >
                  <BsChevronRight />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
