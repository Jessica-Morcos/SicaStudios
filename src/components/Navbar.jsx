import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" my-[3rem] w-[80%] h-[5rem]  mx-auto font-futura  bg-[#DFDEFF] rounded-[100rem]   flex items-center justify-between border border-[#dcdafc]/60">
      
      {/* Left: Logo + Tagline */}
      <div className="flex items-center space-x-2 ">
        <Link to="/" onClick={() => window.location.reload()}>
        <img
          src={Logo}
          alt="Sica Studios Logo"
          className="h-[11rem] w-[20rem] object-contain ml-[2rem]"
          style={{ maxWidth: "100px" }}
        />
        </Link>
           <div className="lg:leading-[1.5rem] hidden sm:block">
          <p className="lg:text-[0.8rem] uppercase lg:tracking-[7px] text-[12px] text-[#37004A] font-[500]">
            CTRL + Creativity <br /> CTRL + Your Website
          </p>
        </div>
      </div>

     {/* Desktop Links */}
      <div className="hidden sm:flex space-x-[20px] tracking-[4px] m-[20px] lg:text-[1.3rem] font-[800] px-[20px] [&_a]:no-underline">
        <a
          href="#about"
          className="text-[#37004A] hover:text-[#99A0FF] transition-all duration-[200ms]"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[#37004A] hover:text-[#99A0FF] transition-all duration-[200ms]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#37004A] hover:text-[#99A0FF] transition-all duration-[200ms]"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="sm:hidden text-[#37004A] mr-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="absolute top-[5rem] right-0 w-[60%] bg-[#DFDEFF] border border-[#dcdafc]/60 rounded-[1rem] flex flex-col items-center space-y-4 py-4 z-50 shadow-lg animate-fadeIn">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-[#37004A] font-[700] text-[1.2rem] hover:text-[#99A0FF]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-[#37004A] font-[700] text-[1.2rem] hover:text-[#99A0FF]"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-[#37004A] font-[700] text-[1.2rem] hover:text-[#99A0FF]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
