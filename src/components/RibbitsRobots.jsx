import { motion } from "framer-motion";

import HeaderIMG from "../assets/HeaderIMG.svg";
import MarriedIMG from "../assets/MarriedCouple.svg";
import CountsIMG from "../assets/thecounts.svg";
import GrantsIMG from "../assets/thegrants.svg";
import KidsIMG from "../assets/thekids.svg";

import MarriedText from "../assets/coupletext.svg";
import CountText from "../assets/countlawstext.svg";
import ScaredText from "../assets/scaredlawstext.svg";
import KidsText from "../assets/thekidstext.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RibbitsRobots() {
  return (
    <main className="w-full h-full scroll-smooth font-futura">

      {/* ===== HEADER ===== */}
      <section className="relative w-full flex justify-center items-center">
        <motion.img
          src={HeaderIMG}
          alt="Header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full object-fill"
        />
      </section>

      {/* ===== MARRIED COUPLE ===== */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-[#f5d892] gap-4">
        <motion.img
          src={MarriedIMG}
          alt="Married Couple"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={MarriedText}
          alt="Married Text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-[70%] max-w-xl scale-[1.15]"
        />
      </section>

      {/* ===== COUNT IN LAWS ===== */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-[#c78088] to-[#7e1414] gap-4">
        <motion.img
          src={CountsIMG}
          alt="Count In Laws"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={CountText}
          alt="Count In Laws Text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.15]"
        />
      </section>

      {/* ===== SCARED INLAWS ===== */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-[#7ecbfa] to-[#154a9d] gap-4">
        <motion.img
          src={GrantsIMG}
          alt="Scared Inlaws"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={ScaredText}
          alt="Scared Inlaws Text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.25]"
        />
      </section>

      {/* ===== THE KIDS ===== */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-[#d6fff4] to-[#7ac0b1] gap-4">
        <motion.img
          src={KidsIMG}
          alt="The Kids"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full max-w-3xl md:max-w-4xl scale-[0.9]"
        />
        <motion.img
          src={KidsText}
          alt="The Kids Text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-[70%] max-w-xl mt-4 scale-[1.15]"
        />
      </section>

    </main>
  );
}
