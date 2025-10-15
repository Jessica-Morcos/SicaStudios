import React, { useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import HeaderArt from "../assets/HeaderArt.svg";
import HuskdLockup from "../assets/HuskdLockup.svg";
import HuskdCase from "../assets/HuskdCase.pdf";

// ✅ PDF worker setup
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function Huskd() {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setError(null);
  }, []);

  const onLoadError = useCallback((err) => {
    console.error("PDF load error:", err);
    setError("Could not load PDF");
  }, []);

  return (
    <main className="w-full bg-white text-[#2a2a2a] font-futura">
    {/* HEADER IMAGE */}
<section className="relative w-full bg-white">
  <img
    src={HeaderArt}
    alt="HUSKD header visual"
    className=" h-full object-cover"
    loading="eager"
  />
</section>

{/* HUSKD.CO LOGO + TAGLINE */}
<section className="bg-[#F3F8EE] py-10 md:py-14 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col items-center"
  >
    <img
      src={HuskdLockup}
      alt="HUSKD.CO Logo"
      className="w-full md:w-[70%] lg:w-[50%] h-auto mb-3 object-contain"
    />
    <p className="uppercase tracking-[0.2em] text-[#5b6c5a] text-sm">
      Stripped to the goodness
    </p>
  </motion.div>
</section>


      {/* DELIVERABLES / CHALLENGES / SOLUTIONS */}
      <section className="py-12  font-futura">
        <div className="mx-auto max-w-6xl  px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="  "
          >
            <h2 className="text-[1.5rem] font-bold tracking-[0.25em]">
              DELIVERABLES
            </h2>
            <ul className="mt-3 text-m leading-7">
              <li>• Brand Packaging Design</li>
              <li>• Character Design</li>
              <li>• Coconut Water & Coconut Pudding Packaging</li>
            </ul>
          </motion.div>

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
              coconut imagery, while pudding packaging uses only text-based
              labeling.
            </p>
          </motion.div>

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
              Coconut Water uses bright, tropical illustrations and bold
              freshness; Coconut Pudding focuses on minimal, type-driven
              packaging. Both share the same palette and rhythm for unity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF SECTION */}
      <section className="bg-[#F9FAF9] py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          {error && (
            <p className="text-red-500 mb-6">
              {error} — please check your PDF file path.
            </p>
          )}

          <Document
            file={HuskdCase}
            onLoadSuccess={onLoadSuccess}
            onLoadError={onLoadError}
            loading={<p className="text-gray-500 py-10">Loading PDF…</p>}
          >
            {numPages &&
              Array.from({ length: numPages }, (_, i) => (
                <div key={i} className="mb-12 flex justify-center">
                  <Page
                    pageNumber={i + 1}
                    width={
                      typeof window !== "undefined"
                        ? Math.min(window.innerWidth )
                        : 800
                    }
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
          </Document>
        </div>
      </section>
    </main>
  );
}
