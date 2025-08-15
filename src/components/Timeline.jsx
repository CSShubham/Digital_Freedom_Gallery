import React from "react";
import { useAppData } from "../contexts/DataContext";
import Nav from "./Nav";
import { NavLink, Outlet } from "react-router-dom";

function Timeline() {
  const {timeline} = useAppData();
  return (
    <>
      <Nav/>
      <div className="min-h-screen w-full overflow-x-hidden  bg-gradient-to-br from-orange-300 via-white to-green-300 ">
      <nav className="flex gap-4 p-4 sticky top-20 overflow-auto  backdrop-blur-lg w-[90%] md:w-[70%] left-[5%] md:left-[12%] rounded-3xl shadow-lg border border-white/20">
        {timeline.map((item) => (
          <NavLink
            key={item.id}
            to={`/timeline/${item.id}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full font-semibold transition-all duration-300 
         ${
           isActive
             ? "bg-gradient-to-br from-orange-600 via-white to-green-600 text-black shadow-md scale-105"
             : "bg-white/60 hover:bg-white text-gray-800 hover:shadow-md hover:scale-105"
         }`
            }
          >
            {item.id}
          </NavLink>
        ))}
      </nav>
     <main className="flex w-full p-2 pb-10 sm:pb-0 ">
        <Outlet />
      </main>
      </div>
    </>
  );
}

export default Timeline;
