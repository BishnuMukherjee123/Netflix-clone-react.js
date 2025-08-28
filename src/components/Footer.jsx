import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import insta_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

function Footer() {
  return (
    <div className="py-7.5 px-[4%] max-w-[1000px] mx-auto my-0">
      <div className="flex gap-5 my-10 mx-0">
        <img src={facebook_icon} alt="" className="w-[30px] h-[30px] cursor-pointer"/>
        <img src={insta_icon} alt="" className="w-[30px] h-[30px] cursor-pointer"/>
        <img src={twitter_icon} alt="" className="w-[30px] h-[30px] cursor-pointer"/>
        <img src={youtube_icon} alt="" className="w-[30px] h-[30px] cursor-pointer"/>
      </div>
      <ul className="grid md:grid-cols-[auto_auto_auto_auto] grid-cols-[auto_auto] md:gap-[15px] gap-2 mb-7.5 list-none">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-gray-600 text-[14px]">© 1997-2023 Netflix, Inc. HD</p>
    </div>
  );
}

export default Footer;
