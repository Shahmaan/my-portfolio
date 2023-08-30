import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SpaceHelmet = () => {
  const gltf = useLoader(GLTFLoader, "./helmet/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    // You can add animations or updates here
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default SpaceHelmet;
