import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile_img.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { logout } from "../firebase";

function Navbar() {
  const navRef = useRef();

const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled, navRef]);



  return (
    <div ref={navRef} className={`navbar fixed z-40 flex justify-between text-gray-200 text-sm w-full py-[20px] md:px-[6%] px-[4%] transition-colors duration-600 border-0 ${isScrolled? "bg-[#141414]" : "bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]"}`}>
      <div className="flex items-center md:gap-[20px] gap-[10px]">
        <img className="md:w-[90px] w-[45px]" src={logo} alt="" />
        <ul className="md:flex hidden list-none gap-[20px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browser by Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <FaSearch className="text-xl cursor-pointer"/>
        <p>children</p>
        <FaRegBell className="text-xl cursor-pointer"/>
        <div className="navbar-profile flex group items-center cursor-pointer gap-2.5 relative">
            <img src={profile} alt="" className="rounded-[4px] md:w-[30px] w-[25px] cursor-pointer" />
            <IoMdArrowDropdown />
            <div className="absolute hidden group-hover:block top-full right-0 w-max bg-[#191919] px-[22px] py-[18px] rounded-[2px] underline z-10">
                <p onClick={()=>(logout())} className="text-sm cursor-pointer">
                    Sign Out of Netflix
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
