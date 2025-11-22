import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Character SVGs
import HeaderIMG from "../assets/HeaderIMG.svg";
import MarriedIMG from "../assets/MarriedCouple.svg";
import CountsIMG from "../assets/thecounts.svg";
import GrantsIMG from "../assets/thegrants.svg";
import KidsIMG from "../assets/thekids.svg";

// Text SVGs
import MarriedText from "../assets/coupletext.svg";
import CountText from "../assets/countlawstext.svg";
import ScaredText from "../assets/scaredlawstext.svg";
import KidsText from "../assets/thekidstext.svg";

export default function RibbitsRobots() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".rr-section");

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          controls.start("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full h-full   scroll-smooth font-futura">

      {/* ===== HEADER ===== */}
      <section className="relative rr-section w-full flex justify-center items-center">
        <motion.img
          src={HeaderIMG}
          alt="Header"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-full object-fill"
        />
      </section>

      {/* ===== MARRIED COUPLE ===== */}
      <section className="rr-section h-screen w-full flex flex-col justify-center items-center bg-[#f5d892] gap-4">
        <motion.img
          src={MarriedIMG}
          alt="Married Couple"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={MarriedText}
          alt="Married Text"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-[70%] max-w-xl scale-[1.15] "
        />
      </section>

      {/* ===== COUNT IN LAWS ===== */}
      <section className="rr-section h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#c78088] to-[#7e1414] gap-4">
        <motion.img
          src={CountsIMG}
          alt="Count In Laws"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={CountText}
          alt="Count In Laws Text"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.15]"
        />
      </section>

      {/* ===== SCARED INLAWS ===== */}
      <section className="rr-section h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#7ecbfa] to-[#154a9d] gap-4">
        <motion.img
          src={GrantsIMG}
          alt="Scared Inlaws"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={ScaredText}
          alt="Scared Inlaws Text"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.25]"
        />
      </section>

      {/* ===== THE KIDS ===== */}
      <section className="rr-section h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#d6fff4] to-[#7ac0b1] gap-4">
        <motion.img
          src={KidsIMG}
          alt="The Kids"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={KidsText}
          alt="The Kids Text"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.15]"
        />
      </section>

    </main>
  );
}
