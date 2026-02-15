"use client";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            ⚡
          </div>
          XYZFusion
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-500 font-medium">
          <a className="text-blue-600">Home</a>
          <a className="hover:text-gray-900">Features</a>
          <a className="hover:text-gray-900">Pages</a>
          <a className="hover:text-gray-900">Support</a>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">

          <button className="hidden md:block">
            <CiLight
              className={`${
                scrolled ? "text-gray-500" : "text-white"
              } text-[27px]`}
            />
          </button>

          <Link
          href='/user/auth/login'
            className={`hidden md:block ${
              scrolled
                ? "text-gray-500 hover:text-slate-900"
                : "text-white hover:text-slate-900"
            } font-bold`}
          >
            Sign In
          </Link>

          <Link href='/user/auth/register'
            className={`hidden md:block px-6 py-2 rounded-full ${
              !scrolled
                ? "bg-white/20 backdrop-blur-md"
                : "bg-blue-600 font-bold"
            } text-white hover:bg-white/30 transition`}
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu className="text-black" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-lg mt-4 rounded-xl mx-4 p-6 space-y-4">

          <a className="block text-gray-700">Home</a>
          <a className="block text-gray-700">Features</a>
          <a className="block text-gray-700">Pages</a>
          <a className="block text-gray-700">Support</a>

          <hr />

            <Link href='/user/auth/login'
              className="w-full block text-left text-gray-700 hover:text-indigo-600 transition"
            >
            Sign In</Link>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Sign Up
          </button>

        </div>
      )}

    </header>
  );
}
