import React from "react";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollMockup from "./ScrollMockup";
import { Link } from "react-router-dom";

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

    tl.from(".hero-title", { y: 100, opacity: 0 })
      .from(".hero-subtitle", { y: 50, opacity: 0 }, "-=0.7")
      .from(".hero-btn", { y: 30, opacity: 0, clearProps: "all" }, "-=0.7");
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-orange-300 via-white to-green-300">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Nav />

        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="text-center px-6 max-w-3xl z-10">
          <h1 className="hero-title text-4xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Digital Freedom Gallery
            </span>
          </h1>

          <p className="hero-subtitle mt-4 text-xl md:text-2xl text-gray-700 font-medium">
            Code a Vision. Design the Nation.
            <br />
            A tribute to India's past, present & digital future.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery"
              className="hero-btn px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            >
              Explore Gallery
            </Link>
            <Link
              to='/timeline'
              className="hero-btn px-8 py-4 border-2 border-green-500 hover:bg-green-600 hover:text-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            >
              View Timeline
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          A Journey Through Time
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the evolution of India through interactive horizontal sections
        </p>
      </div>

      <ScrollMockup />
    </div>
  );
};

export default Home;
