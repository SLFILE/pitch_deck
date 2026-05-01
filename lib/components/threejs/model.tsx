"use client";

import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { ComponentProps } from "react";

interface ModelProps extends Partial<ComponentProps<"primitive">> {
  config: {
    file: string;
    position?: [number, number, number];
    rotation?: [number, number, number];
  };
}

const Model = ({ config, ...rest }: ModelProps) => {
  const { scene } = useGLTF(config.file);

  return (
    <primitive
      object={scene as Group}
      position={config.position || [0, 0, 0]}
      rotation={config.rotation || [0, 0, 0]}
      {...rest}
    />
  );
};

export default Model;
