import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

const charVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.02 } },
};

function TypeLine({ text, delayStart, className }) {
  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06, delayChildren: delayStart },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariants}>
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.p>
  );
}

const MIN_MS = 3800;

export default function IntroAnimation({ onDone }) {
  const { progress } = useProgress();
  const [visible, setVisible] = useState(
    () => !sessionStorage.getItem("introSeen")
  );

  const finish = () => {
    setVisible(false);
    sessionStorage.setItem("introSeen", "true");
  };

  // Lock body scroll while intro is showing
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => finish(), MIN_MS);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.style.backgroundColor = "";
        document.body.style.overflow = "";
        onDone?.();
      }}
    >
      {visible && (
        // Background on the plain div so it's visible the instant the page loads — no flicker
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 200,
            overflow: "hidden",
            backgroundColor: "#1c0f2f",
          }}
        >
          <motion.div
            style={{ width: "100%", height: "100%" }}
            className="flex flex-col items-center justify-center"
          >
            {/* Ambient top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center top, rgba(153,160,255,0.14) 0%, transparent 70%)",
              }}
            />

            {/* Logo */}
            <motion.img
              src={Logo}
              alt="Sica Studios"
              style={{
                width: "280px",
                maxHeight: "150px",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />

            {/* Divider */}
            <motion.div
              style={{ height: "1px" }}
              className="my-6 bg-[#DFDEFF]/25"
              initial={{ width: 0 }}
              animate={{ width: "170px" }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
            />

            {/* Typewriter lines */}
            <div className="text-center flex flex-col items-center gap-3">
              <TypeLine
                text="CTRL + Creativity"
                delayStart={1.1}
                className="text-[#DFDEFF] text-[1rem] tracking-[8px] uppercase font-light"
              />
              <TypeLine
                text="CTRL + Your Website"
                delayStart={2.6}
                className="text-[#DFDEFF]/50 text-[0.85rem] tracking-[7px] uppercase font-light"
              />
            </div>

            {/* Blinking cursor */}
            <motion.span
              className="text-[#DFDEFF]/40 text-[0.85rem] mt-3 font-mono select-none"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
            >
              _
            </motion.span>

            {/* Progress */}
            <motion.div
              className="absolute flex flex-col items-center gap-2"
              style={{ bottom: "9%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div
                className="rounded-full overflow-hidden bg-white/10"
                style={{ width: "180px", height: "1px" }}
              >
                <motion.div
                  className="h-full bg-[#DFDEFF]/55 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-[#DFDEFF]/30 text-[0.52rem] tracking-[4px] font-mono">
                {String(Math.round(progress)).padStart(3, " ")}%
              </p>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
