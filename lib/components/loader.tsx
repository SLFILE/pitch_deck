"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { Mesh } from "three";

import { models } from "../utils/model";
import * as THREE from "three";

const DracoModel = dynamic(() => import("./threejs/draco"), {
  ssr: false,
});

const Loader = () => {
  const sphereRef = useRef<Mesh>(null);

  const Sphere = () => {
    useFrame((state, delta) => {
      if (sphereRef.current) {
        sphereRef.current.rotation.z += delta * 4;
      }
    });
    return (
      <DracoModel
        scale={[4, 4, 4]}
        model_uri={models.mall_logo.file}
        ref={sphereRef}
        position={models.mall_logo.position}
        rotation={models.mall_logo.rotation}
      />
    );
  };
  return (
    <div className="w-full h-full ">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        flat
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.2,
        }}
      >
        <color attach="background" args={["#222831"]} />
        <ambientLight intensity={0.2} color={"blue"} />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default Loader;
