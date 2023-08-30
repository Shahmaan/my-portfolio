// SpaceHelmetCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import SpaceHelmet from "./SpaceHelmet";

const SpaceHelmetCanvas = () => {
  return (
    <Canvas style={{ width: 550 }}>
      <Stage environment={"night"}>
        <SpaceHelmet />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={5} />
    </Canvas>
  );
};

export default SpaceHelmetCanvas;
