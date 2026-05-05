import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce, LoopRepeat } from "three";

export default function PolaroidModel({ trigger = false, ...props }) {
  const group = useRef();
  const [hasEjected, setHasEjected] = useState(false);
  const { scene, animations } = useGLTF("/models/Polaroid_rig_Small.glb");

  const { actions } = useAnimations(animations, group);

  // Play idle animation on loop automatically
  useEffect(() => {
    const idleAction = actions["CamIdle"];
    
    if (idleAction) {
      idleAction.reset();
      idleAction.setLoop(LoopRepeat, Infinity);
      idleAction.play();
    }

    return () => {
      idleAction?.stop();
    };
  }, [actions]);

  // Triggered by the section's IntersectionObserver instead of a scroll listener.
  useEffect(() => {
    if (!trigger || hasEjected || !actions) return;

    const ejectAction = actions["photoEject"];
    const idleAction = actions["CamIdle"];

    if (ejectAction) {
      idleAction?.stop();
      ejectAction.reset();
      ejectAction.setEffectiveWeight(1);
      ejectAction.timeScale = 1;
      ejectAction.setLoop(LoopOnce, 1);
      ejectAction.clampWhenFinished = true;
      ejectAction.play();
      setHasEjected(true);
    }
  }, [actions, hasEjected, trigger]);


  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/Polaroid_rig_Small.glb");
