import React from "react";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/email.svg";
import { Mail, Linkedin, Github } from "lucide-react";

export default function SocialSidebar() {
  return (
    <aside className="portrait:hidden  fixed right-[1rem] bottom-[0rem] flex flex-col justify-center items-center z-[9999]">
      <div className="flex flex-col items-center h-full justify-center gap-0">
        {/* Icons */}
        <div className="flex flex-col items-center gap-[1rem] mb-8 mt-[100rem]">
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

        {/* Long Vertical Divider */}
        <div className="w-[2px] bg-[#37004A] my-[1rem] flex-1 min-h-[50px]"></div>

    
        {/* <div className="mt-8">
          <p className="text-[1rem] text-gray-700 font-medium tracking-[0.50rem] [writing-mode:vertical-lr] rotate-[-180]">
            jessica.morcos7@gmail.com
          </p>
        </div> */}
        
      </div>
    </aside>
  );
}