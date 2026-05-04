import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Pages with transparent navbar background
  const transparentRoutes = ["/huskd", "/polaroid", "/ribbitsrobots", "/sicastudios"];
  const isTransparent = transparentRoutes.includes(location.pathname.toLowerCase());

  // Polaroid-only styling
  const isPolaroid = location.pathname.toLowerCase() === "/polaroid";

  return (
    <nav
      className={`w-[80%] h-[5rem] mx-auto font-futura rounded-[100rem] flex items-center justify-between transition-all duration-300
      ${
        isTransparent
          ? "bg-transparent mt-0 mb-0 absolute top-0 left-1/2 -translate-x-1/2 z-[999]"
          : " my-[1rem] relative"
      }`
      
    }

    >
      {/* Left: Logo + Tagline */}
      <div className="flex items-center space-x-2">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={Logo}
            alt="Sica Studios Logo"
            className="h-[11rem] w-[20rem] object-contain ml-[2rem]"
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <div className="lg:leading-[1.5rem] hidden sm:block">
          <p
            className={`lg:text-[0.8rem] uppercase lg:tracking-[7px] text-[12px] font-[500]
            ${isPolaroid ? "text-white" : "text-[#37004A]"}`}
          >
            CTRL + Creativity <br /> CTRL + Your Website
          </p>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex space-x-[20px] tracking-[4px] m-[20px] lg:text-[1.3rem] font-[800] px-[20px] [&_a]:no-underline">
        <a
          href="/#about"
          className={`transition-all duration-[200ms]
          ${isPolaroid ? "text-white hover:text-gray-200" : "text-[#37004A] hover:text-[#99A0FF]"}`}
        >
          About
        </a>
        <a
          href="/#projects"
          className={`transition-all duration-[200ms]
          ${isPolaroid ? "text-white hover:text-gray-200" : "text-[#37004A] hover:text-[#99A0FF]"}`}
        >
          Projects
        </a>
        <a
          href="/#contact"
          className={`transition-all duration-[200ms]
          ${isPolaroid ? "text-white hover:text-gray-200" : "text-[#37004A] hover:text-[#99A0FF]"}`}
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className={`sm:hidden mr-6 ${isPolaroid ? "text-white" : "text-[#37004A]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="absolute top-[5rem] right-0 w-[60%]  border border-[#dcdafc]/60 rounded-[1rem] flex flex-col items-center space-y-4 py-4 z-50 shadow-lg animate-fadeIn">
          <a
            href="/#about"
            onClick={() => setIsOpen(false)}
            className={`font-[700] text-[1.2rem] 
            ${isPolaroid ? "text-white" : "text-[#37004A]"} hover:text-[#99A0FF]`}
          >
            About
          </a>
          <a
            href="/#projects"
            onClick={() => setIsOpen(false)}
            className={`font-[700] text-[1.2rem]
            ${isPolaroid ? "text-white" : "text-[#37004A]"} hover:text-[#99A0FF]`}
          >
            Projects
          </a>
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className={`font-[700] text-[1.2rem]
            ${isPolaroid ? "text-white" : "text-[#37004A]"} hover:text-[#99A0FF]`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
