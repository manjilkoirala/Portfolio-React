import React from "react";
import logo from "../assets/logo.png";
import '../index.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-28 h-16">
      <Link to="/">
      <div className=" w-10">
        <img src={logo} alt="logo" />
      </div></Link>
      <div className="flex gap-8 items-center text-gray-700 text-xl">
       
        <Link to="/" className=" nav hover:text-black">Home</Link>
        <Link to="/Projects" className="nav hover:text-black">Project</Link>
        <Link to="/Contact" className="nav hover:text-black">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
