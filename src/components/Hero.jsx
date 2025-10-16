import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import PolaroidModel from "./PolaroidModel";
import PolaroidModelSmall from "./PolaroidModelSmall";

export default function Hero() {
  const cameraPosition = [-26.331, 0.289, 48.012];
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.3, once: true });

  return (
    <div className="relative" ref={heroRef}>
      {/* 3D Canvas */}
      <div className="absolute portrait:hidden w-full px-[5%] z-10" style={{ height: "200vh" }}>
        <Canvas
          shadows
          frameloop="always"
          dpr={[0.8, 1]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          performance={{ min: 0.6 }}
          camera={{
            position: cameraPosition,
            fov: 45,
            near: 0.1,
            far: 1000,
          }}
        >
          {/* Softer, performant lighting */}
          <ambientLight intensity={2} />
          <directionalLight
            position={[3, 5, 2]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <PolaroidModel
              scale={[4, 4, 4]}
              position={[-5, 10, 0]}
              rotation={[0.05, -0.05, 0]}
              trigger={isInView}
            />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen bg-transparent flex items-center justify-center overflow-hidden portrait:mr-[0rem] mr-[5rem]">
        <div className="relative  z-10 left-[20rem] portrait:left-[0rem]  top-[-10%] portrait:top-[-30%]">
          <h1 className="text-[2.8rem] portrait:text-[2rem]  font-semibold leading-[150%] tracking-[8px] text-center">
            Designer.
            <br />
            Creator.
            <br />
            Problem
            <br />
            solver.
          </h1>
        </div>
        {/* <div className="absolute hidden portrait:block w-full  z-10" style={{ height: "100vh" }}>
        <Canvas
          shadows
          frameloop="always"
          dpr={[0.8, 2]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          performance={{ min: 0.6 }}
          camera={{
            position: cameraPosition,
            fov: 45,
            near: 0.1,
            far: 1000,
          }}
        >
  
          <ambientLight intensity={2} />
          <directionalLight
            position={[3, 9, 2]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[512, 512]}
          />
    

          <Suspense fallback={null}>
            <PolaroidModelSmall
              scale={[5, 5, 5]}
              position={[0,-10, 0]}
              rotation={[0.3, 0, 0]}
              trigger={isInView}
            />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div> */}
      </section>



      {/* About Me Section */}
      <section
        id="about"
        className="relative portrait:h-[50vh] h-[90vh] bg-transparent flex items-center justify-center overflow-hidden"
      >
        <div className="relative portrait:mx-[1rem] top-[-15%] right-[15rem] portrait:right-[0rem] z-10 max-w-[25rem] flex flex-col landscape:items-start  ">
          <div className="flex flex-col w-full">
            <h2 className="text-[2rem] font-bold tracking-[0.5rem] portrait:px-[1rem] ">
              About Me
            </h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "10rem", opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mt-1  h-[0.2rem] bg-[#1c0f2f]"
            />
          </div>

          <p className="leading-[200%] mt-[2rem] text-[1rem] tracking-[2px] portrait:text-center text-left">
            Hi, I'm Jessica, a Computer Science student who loves blending tech
            and design to create seamless, user-friendly experiences. Whether
            I'm coding an app or designing an interface, I aim to make
            technology feel more human, accessible, and visually engaging.
          </p>
        </div>
      </section>
    </div>
  );
}
