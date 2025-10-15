import React from "react";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/email.svg";
import { Mail, Linkedin, Github } from "lucide-react";

export default function SocialSidebarLeft() {
  return (
    <aside className="portrait:hidden fixed left-[1rem] bottom-[0rem] flex flex-col justify-center items-center z-[9999]">
      <div className="flex flex-col items-center h-full justify-center gap-0">
      
        
         <div className="mt-8">
          <p className="text-[1rem] text-gray-700 font-medium tracking-[0.50rem] [writing-mode:vertical-lr] rotate-180">
            jessica.morcos7@gmail.com
          </p>
        </div>

        {/* Long Vertical Divider */}
        <div className="w-[2px] bg-[#37004A] my-[1rem] flex-1 min-h-[50px]"></div>

    
       
        
      </div>
    </aside>
  );
}