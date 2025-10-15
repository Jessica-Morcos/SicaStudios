import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import GirlSVG from "../assets/JessGlasses.svg";
import HuskdFront from "../assets/Cards/Huskd_F.svg";
import HuskdBack from "../assets/Cards/Huskd_B.svg";
import PolaroidFront from "../assets/Cards/Polaroid_F.svg";
import PolaroidBack from "../assets/Cards/Polaroid_B.svg";
import RibbitsFront from "../assets/Cards/Ribbits_F.svg";
import RibbitsBack from "../assets/Cards/Ribbits_B.svg";
import SS_F from "../assets/Cards/SS_F.svg";
import SS_B from "../assets/Cards/SS_B.svg";
import "./projects.css";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { front: HuskdFront, back: HuskdBack, link: "/Huskd" },
    { front: SS_F, back: SS_B, link: "/sicastudios" },
    { front: PolaroidFront, back: PolaroidBack, link: "/polaroid" },
    { front: RibbitsFront, back: RibbitsBack, link: "/ribbitsrobots" },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col mx-[2rem] min-h-screen bg-white px-[10px] py-[5rem]"
    >
      {/* ----- Title Section ----- */}
      <div className="flex portrait:mx-[2rem] portrait:w-[95%] items-center portrait:justify-center   justify-between w-[85%]  landscape:ml-[5rem] mb-[3rem]">
         
        <div>
          <h2 className=" text-[2rem] font-bold tracking-[10px] text-black">
            Projects
          </h2>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "10rem", opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mt-1 h-[0.15rem] bg-[#1c0f2f]"
          ></motion.div>
           
        </div>

      <motion.img
              src={GirlSVG}
              alt="Decorative Icon"
              className="h-[10rem] portrait:h-[8rem]  portrait:mb-[2rem] w-auto mr-[0rem]"
              initial={{ opacity: 0, y: 30, rotate: -5 }}       
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}} 
              transition={{ duration: 1.3, ease: "easeOut" }}     
            />
        
     
     
      </div>

      {/* ----- Cards Grid (Vertically Centered) ----- */}
      <div className="flex flex-1 justify-center items-center">
        <div className="grid grid-cols-4  portrait:grid-cols-1  gap-[5rem]">
          {projects.map((p, i) => (
            <Link key={i} to={p.link} className="flip-card w-[15rem] h-[20rem]">
              <div className="flip-inner">
                <div className="flip-front flex items-center justify-center">
                  <img
                    src={p.front}
                    alt="front"
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>
                <div className="flip-back flex items-center justify-center">
                  <img
                    src={p.back}
                    alt="back"
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
