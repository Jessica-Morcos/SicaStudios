import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PolaroidHeaderVideo from "../assets/polaroidHeader.mp4";
import { Download } from "lucide-react";

export default function Polaroid() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.addEventListener("ended", () => {
      vid.pause();
      vid.currentTime = vid.duration;
    });
  }, []);

  return (
    <main className="w-full font-futura text-[#2a2a2a]">

      {/* HEADER VIDEO */}
      <section className="relative w-full h-[100dvh] overflow-hidden flex justify-center items-center">
        <motion.video
          ref={videoRef}
          src={PolaroidHeaderVideo}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="absolute z-[50] right-[15rem] text-center"
        >
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-xl">
            Polaroid
          </h1>
          <p className="text-white text-lg md:text-2xl mt-3 opacity-90 drop-shadow-lg">
            A 3D Rendered Snapshot Story
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div
        className="
          w-full 
          bg-gradient-to-b
          from-[#909090]
          via-[#d5d5d5]
          to-[#ececec]
          min-h-[90dvh]
          pt-20
          
        "
      >

        {/* POLAROID INFO UI SECTION */}
        <section className="w-full px-3">
          <div className="max-w-5xl mx-auto">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-14"
            >
              <p className="text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                This Polaroid animation was entirely modeled and rendered in Blender.
                The goal was to recreate the charm of a vintage instant camera printing
                a fresh photograph.
              </p>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4">Project Breakdown</h3>

              <ul className="text-gray-700 text-lg leading-relaxed space-y-3 mb-10">
                <li>• Fully modeled in Blender (camera, film, environment)</li>
                <li>• Cycles render engine for realistic lighting + shadows</li>
                <li>• Procedural materials for plastic, glass, and paper</li>
               
              </ul>

              {/* Download Button */}
              <div className="flex justify-center">
                <a
                  href="/models/Polaroid_rig_Small.glb"
                  download="Polaroid_3D_Model.glb"
                  className="px-8 py-4 bg-[#37004A] text-white rounded-full text-lg font-semibold shadow-md hover:bg-[#4e1864] transition-all duration-200 flex items-center gap-3"
                >
                  <Download size={22} strokeWidth={2.5} />
                  Download Polaroid .GLB
                </a>
              </div>
            </motion.div>

          </div>
        </section>
      
      </div>
    <footer className="bottom-0 text-center py-[1rem] ">
      <p className="text-sm text-gray-600 tracking-wide">
        © {new Date().getFullYear()} Jessica Morcos
      </p>
    </footer>
    </main>
  );
}
