import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function PolaroidModel(props) {
  const group = useRef();
  const [hasEjected, setHasEjected] = useState(false);
  const { scene, animations } = useGLTF("/models/Polaroid_rig.glb");

  const { actions } = useAnimations(animations, group);

  // Play idle animation on loop automatically
  useEffect(() => {
    const idleAction = actions["CamIdle"];
    
    if (idleAction) {
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
          if (idleAction) {
            idleAction.stop();
          }

          ejectAction.reset();
          ejectAction.setEffectiveWeight(1);
          ejectAction.timeScale = 1;
          ejectAction.setLoop(2, 1); // LoopOnce
          ejectAction.clampWhenFinished = true;
          ejectAction.play();

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

