import React from "react";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function CubeCanvas() {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Cube />
    </Canvas>
  );
}

export default CubeCanvas;
