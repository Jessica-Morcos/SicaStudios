import React, { useRef, useState } from "react";
import { motion, useDragControls, useInView } from "framer-motion";
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

function DraggableProjectCard({ project, index, boardRef }) {
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.article
      className={`project-polaroid ${isDragging ? "is-dragging" : ""}`}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={boardRef}
      dragElastic={0.12}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      style={{
        rotate: project.rotate,
        zIndex: 10 + index,
      }}
      whileDrag={{
        scale: 1.04,
        rotate: 0,
        zIndex: 40,
      }}
    >
      <button
        type="button"
        className="project-drag-tag"
        aria-label={`Drag ${project.title} project card`}
        onPointerDown={(event) => dragControls.start(event)}
      >
        {project.title}
      </button>

      <Link
        to={project.link}
        className="flip-card project-click-card"
        aria-label={`Open ${project.title} project`}
      >
        <div className="flip-inner">
          <div className="flip-front flex items-center justify-center">
            <img
              src={project.front}
              alt={`${project.title} front`}
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
          <div className="flip-back flex items-center justify-center">
            <img
              src={project.back}
              alt={`${project.title} back`}
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const boardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { title: "Huskd", front: HuskdFront, back: HuskdBack, link: "/Huskd", rotate: -7 },
    { title: "Sica Studios", front: SS_F, back: SS_B, link: "/sicastudios", rotate: 4 },
    { title: "Polaroid", front: PolaroidFront, back: PolaroidBack, link: "/polaroid", rotate: -3 },
    { title: "Ribbits", front: RibbitsFront, back: RibbitsBack, link: "/ribbitsrobots", rotate: 6 },
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

      {/* ----- Interactive Cards Board ----- */}
      <div className="project-board-wrap">
        <div className="project-instructions">
          <span></span>
          Hover
          <strong>·</strong>
          Drag
          <strong>·</strong>
          Click
        </div>

        <div ref={boardRef} className="project-board">
          {projects.map((p, i) => (
            <DraggableProjectCard
              key={p.title}
              project={p}
              index={i}
              boardRef={boardRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
