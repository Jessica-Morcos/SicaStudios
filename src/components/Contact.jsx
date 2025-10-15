import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import JessSmiling from "../assets/JessSmiling.svg";


import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/email.svg";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
         className=" flex flex-col   justify-start items-start  bg-white"
    >
   
       <div className="flex flex-col   w-full ml-[5rem]">
      
        <h2 className="text-[2rem] font-bold tracking-[10px] text-black">
          Contact
        </h2>
       

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "10rem", opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-1 h-[0.2rem] bg-[#1c0f2f] portrait:mb-[4rem]  mb-[10rem]"
        ></motion.div>
      </div>

      {/* ✨ Image + Text Side-by-Side in the SAME row */}
      <div className="flex portrait:flex-col flex-row items-center justify-between gap-5 w-full  mb-3">
        {/* Left: Illustration */}
        <div className="flex justify-center portrait:items-center portrait:mb-[3rem]  w-full md:w-1/2">
         
           <motion.img
                  src={JessSmiling}
                  alt="Jessica illustration"
                  className="portrait:h-[12rem] h-[16em] w-auto mr-[2rem]"
                  initial={{ opacity: 0, y: 30, rotate: -5 }}       
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}} 
                  transition={{ duration: 2, ease: "easeOut" }}     
                />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 portrait:p-[0.5rem] text-center portrait:mr-0 mr-[5rem]">
          <p className="text-gray-800 leading-[2.5rem] portrait:leading-[1.5rem] landscape:mr-[10rem] portrait:tracking-normal tracking-[0.25rem] portrait:text-[1.2rem] text-[1.4rem]">
            Have an idea, project, or opportunity in mind? <br />
            Reach out! I’m always excited to chat about <br />
            tech, design, and creating better user experiences.
          </p>
         
        </div>

         <div className="landscape:hidden flex flex-row mt-[2rem] items-center h-full justify-center gap-0">
                {/* Icons */}
                <div className="flex flex-row items-center gap-[1rem] ">
                  <a
                    href="mailto:jessica.morcos7@gmail.com"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={MailIcon}
                        alt="Mail"
                        className="h-[2.5rem] w-[2.5rem] object-contain"
                      />
                    </div>
                  </a>
        
                
        
                  <a
                    href="https://linkedin.com/in/jessica-morcos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                       <img
                        src={LinkedinIcon}
                        alt="LinkedinIcon"
                        className="h-[2.5rem] w-[2.5rem] object-contain"
                      />
                    </div>
                  </a>
        
                  <a
                    href="https://github.com/jessica-morcos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                        <img
                        src={GithubIcon}
                        alt="GitHub"
                        className="h-[2.5rem] w-[2.5rem] object-contain"
                      />
                    </div>
                  </a>
                </div>
        
             
                
              </div>
      </div>

 
    
    </section>
  );
}
