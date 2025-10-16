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
