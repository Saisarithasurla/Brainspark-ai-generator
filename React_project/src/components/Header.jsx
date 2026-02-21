import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-black py-6 px-8 flex justify-between items-center h-28 bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-sm sticky top-0 z-50">
      <div className="flex items-center ">
        <img className="w-24  animate-bounce object-contain " src="icon.png" alt="brainspark"/>
          <h2 className="text-5xl font-extrabold  leading-normal leading-[1.2 bg-linear-to-r from-blue-800 via-indigo-700 to-purple-800 bg-clip-text text-transparent
          drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]"> BrainSpark</h2>
      </div>
      <nav>
        <ul className="flex items-center gap-6 text-lg font-medium p-12">
          <li><Link  className="text-3xl font-bold text-black hover:text-amber-500"to="/">Home</Link></li>
          <li><Link  className="text-3xl font-bold text-black hover:text-amber-500 " to="/about">About</Link></li>
          <li><Link  className="text-3xl font-bold text-black hover:text-amber-500" to="/contact">Contact</Link></li>
        </ul>
      </nav>
</header>
  );
}
export default Header;
