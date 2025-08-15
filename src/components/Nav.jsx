import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="fixed top-4 w-75 md:w-100 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/20 border justify-between  border-white/30 rounded-full w-full py-3 px-5  md:px-8 md:py-3 shadow-lg flex ">
        <Link
          to="/"
          className=" font-medium hover:text-blue-300 transition"
        >
          Home
        </Link>
        <Link
          to="/timeline"
          className=" font-medium hover:text-blue-300 transition"
        >
          Timeline
        </Link>
        <Link
          to="/gallery"
          className=" font-medium hover:text-blue-300 transition"
        >
          Gallery
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
