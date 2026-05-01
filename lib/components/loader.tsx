"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Mesh } from "three";
import useModel from "../hooks/three/useModel";
import { models } from "../utils/model";
import * as THREE from "three";

const Loader = () => {
  const { scene, Model } = useModel(models.mall_logo);

  const sphereRef = useRef<Mesh>(null);

  const Sphere = () => {
    useFrame((state, delta) => {
      if (sphereRef.current) {
        sphereRef.current.rotation.z += delta * 4;
      }
    });
    return (
      <Model
        scale={[4, 4, 4]}
        ref={sphereRef}
        object={scene}
        postion={models.mall_logo.position}
        roatation={models.mall_logo.rotation}
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
        <ambientLight intensity={0.2} color={"blue"} />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default Loader;
