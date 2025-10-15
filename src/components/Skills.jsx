import React from "react";
import Ai from "../assets/ai.png";
import Pr from "../assets/pr.png";
import Figma from "../assets/Figma.png";
import Ps from "../assets/ps.png";
import Html from "../assets/HTML.png";
import js from "../assets/js.svg";
import ReactLogo from "../assets/react1.svg";
import Css from "../assets/css.svg";

export default function Skills() {
  const skills = [Ai, Pr, Figma, Ps, Html, js, ReactLogo, Css];

  return (
    <section className="relative h-[10rem] mb-[5rem] w-full  bg-[#b8dcff] flex items-center">
      <div className="marquee">
        <div className="track gap-[1rem] portrait:gap-[0.5rem]">
          {/* Repeat 3x to ensure seamless overflow beyond viewport */}
          {skills.concat(skills).concat(skills).concat(skills).concat(skills).concat(skills).map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Skill ${index}`}
              className="h-[8rem]   w-auto object-contain mx-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
