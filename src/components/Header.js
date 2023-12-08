import React from "react";
import logo from "../assets/logo.png";
import '../index.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-28 h-16">
      <div className=" w-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-8 items-center text-gray-700 text-xl">
       
        <Link to="/" className=" hover:text-black">Home</Link>
        <Link to="/Projects" className=" hover:text-black">Project</Link>
        <Link to="/Contact" className=" hover:text-black">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
