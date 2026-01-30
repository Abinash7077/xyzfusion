"use client";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full min-h-17.5 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className=" mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            ⚡
          </div>
          XYZFusion
        </div>
        <nav className="hidden md:flex items-center gap-8 text-gray-500 font-medium">
          <a className="text-blue-600">Home</a>
          <a className="hover:text-gray-900">Features</a>
          <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
            Pages
          </div>
          <a className="hover:text-gray-900">Support</a>
        </nav>
        <div className="flex items-center gap-5">
          <button className="text-gray-500 hover:text-gray-900 hidden md:block">
            <CiLight
              className={`${
                scrolled ? "text-gray-500" : "text-white"
              } text-lg text-[27px] font-bold`}
            />
          </button>
          <button
            className={`${
              scrolled
                ? "text-gray-500 hover:text-slate-900"
                : "text-white hover:text-slate-900"
            } font-bold`}
          >
            Sign In
          </button>
          <button className={`px-6 py-2 rounded-full ${!scrolled?"bg-white/20 backdrop-blur-md":"bg-blue-600 font-bold "} text-white font-medium hover:bg-white/30 transition`}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
