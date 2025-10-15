import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function PolaroidModel(props) {
  const group = useRef();
  const [hasEjected, setHasEjected] = useState(false);
  const { scene, animations } = useGLTF("/models/Polaroid_rig_Small.glb");
  console.log("📸 Polaroid Scene Hierarchy:", scene);

  const { actions } = useAnimations(animations, group);

  // Play idle animation on loop automatically
  useEffect(() => {
    const idleAction = actions["CamIdle"];
    
    if (idleAction) {
      console.log("🔄 Playing CamIdle loop");
      idleAction.reset();
      idleAction.setLoop(1, Infinity); // Loop forever
      idleAction.play();
    }
  }, [actions]);

  // Scroll-triggered photoEject
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 150;

      if (scrollY > triggerPoint && !hasEjected && actions) {
        const ejectAction = actions["photoEject"];
        const idleAction = actions["CamIdle"];
        
        if (ejectAction) {
          console.log("📸 Ejecting photo!");
          console.log("   Duration:", ejectAction.getClip().duration);
          console.log("   Weight before:", ejectAction.getEffectiveWeight());
          
          // STOP idle animation completely
          if (idleAction) {
            idleAction.stop();
          }
          
          // Play eject with full weight
          ejectAction.reset();
          ejectAction.setEffectiveWeight(1);
          ejectAction.timeScale = 1;
          ejectAction.setLoop(2, 1); // LoopOnce
          ejectAction.clampWhenFinished = true;
          ejectAction.play();
          
          console.log("   Weight after:", ejectAction.getEffectiveWeight());
          console.log("   Is running:", ejectAction.isRunning());
          
          setHasEjected(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [actions, hasEjected]);


  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/Polaroid_rig_Small.glb");