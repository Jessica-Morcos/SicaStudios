import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useGLTF } from "@react-three/drei";

// Start fetching the GLB before React mounts so it's already in cache when Hero renders
useGLTF.preload("/models/Polaroid_rig.glb");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
