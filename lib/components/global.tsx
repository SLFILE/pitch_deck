"use client";
import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import ThreeLight from "./three_point_light";
import { presetlight } from "../utils/lighting";

const GlobalScene = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [128, 60, 20], fov: 30 }}
        flat
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.2,
        }}
      >
        <color attach="background" args={["#222831"]} />

        <OrbitControls
          makeDefault
          minDistance={2}
          maxDistance={1000}
          enableDamping={true}
          dampingFactor={0.05}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        <ThreeLight {...presetlight.home_preset.three_point} />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            mipmapBlur
            intensity={0.0001}
            radius={0.0052}
          />
        </EffectComposer>

        {children}
      </Canvas>
    </div>
  );
};

export default GlobalScene;
