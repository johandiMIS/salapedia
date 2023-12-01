/* eslint-disable react/no-unknown-property */

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CustomMesh = () => {
  // const path = "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@glTFLoader/public/models/monkey.glb";
  const path = "./dinosaurus_monster.glb";
  const gltf = useLoader(GLTFLoader, path);

  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={60} />;
};

function Model() {
  return (
    <div id="canvas-container" style={{ height: "100%", width: "100%" }}>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <CustomMesh />
          <Environment preset="city" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model;
