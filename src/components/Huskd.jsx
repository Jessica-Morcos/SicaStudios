import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderArt from "../assets/HeaderArt.png";
import HuskdLockup from "../assets/HuskdLockup.svg";

const huskdImages = import.meta.glob("../assets/HuskdCase/*.png", { eager: true });

export default function Huskd() {
  const sortedHuskdImages = Object.keys(huskdImages)
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[0] || 0);
      const numB = parseInt(b.match(/(\d+)/)?.[0] || 0);
      return numA - numB;
    })
    .map((key) => huskdImages[key]);

  return (
    <main className="w-full bg-white text-[#2a2a2a] font-futura">
      {/* HEADER */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={HeaderArt}
          alt="HUSKD header visual"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

      {/* LOGO */}
      <section className="bg-[#F3F8EE] py-10 md:py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img
            src={HuskdLockup}
            alt="HUSKD.CO Logo"
            className="w-full md:w-[70%] lg:w-[50%] h-auto mb-3 object-contain"
          />
        </motion.div>
      </section>
      {/* DELIVERABLES / CHALLENGES / SOLUTIONS */}
      <section className="py-12 font-futura">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* DELIVERABLES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          >
            <h2 className="text-[1.5rem] font-bold tracking-[0.25em]">
              DELIVERABLES
            </h2>
            <ul className="mt-3 text-m leading-7">
              <li>• Brand Packaging Design</li>
              <li>• Character Design</li>
              <li>• Coconut Water &amp; Coconut Pudding Packaging</li>
            </ul>
          </motion.div>

          {/* CHALLENGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[1.5rem] font-bold tracking-[0.25em]">
              CHALLENGES
            </h2>
            <p className="mt-3 text-m leading-7 text-gray-700">
              Create two cohesive packaging designs—Coconut Water and Coconut
              Pudding—that feel playful, refreshing, and approachable. Use a
              specific green (#9DC95A) across both, keeping water packaging with
              coconut imagery, while pudding packaging uses only text-based labeling.
            </p>
          </motion.div>

          {/* SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-[1.5rem] font-bold tracking-[0.25em]">
              SOLUTIONS
            </h2>
            <p className="mt-3 text-m leading-7 text-gray-700">
              Designed a friendly coconut character that unifies both products.
              Coconut Water uses bright, tropical illustrations and bold freshness;
              Coconut Pudding focuses on minimal, type-driven packaging. Both share
              the same palette and rhythm for unity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CASE STUDY IMAGES */}
      <section className="bg-[#F9FAF9] py-16">
        <div className="mx-auto px-5 text-center">
          {sortedHuskdImages.map((img, i) => (
            <div key={i} className="mb-12 flex justify-center">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={img.default}
                alt={`Huskd case page ${i + 1}`}
                className="w-full h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
