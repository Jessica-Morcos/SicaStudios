import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderArt from "../assets/SSAssets/HeaderArt.png";


const SSImages = import.meta.glob("../assets/SSAssets/SSCase/*.png", { eager: true });

export default function SS() {
  const sortedSSImages = Object.keys(SSImages)
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[0] || 0);
      const numB = parseInt(b.match(/(\d+)/)?.[0] || 0);
      return numA - numB;
    })
    .map((key) => SSImages[key]);

  return (
    <main className="w-full bg-white text-[#2a2a2a] font-futura">
      {/* HEADER */}
       <section className="relative w-full overflow-hidden flex justify-center items-center bg-white">
        <motion.img
          src={HeaderArt}
          alt="SS header visual"
          className="w-full h-auto object-contain"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

     
      {/* CASE STUDY IMAGES */}
      <section className="bg-[#F9FAF9] py-16">
        <div className="mx-auto px-5 text-center">
          {sortedSSImages.map((img, i) => (
            <div key={i} className="mb-12 flex justify-center">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={img.default}
                alt={`SS case page ${i + 1}`}
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
