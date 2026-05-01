import { ModelConfig } from "@/lib/utils/model";

import { useGLTF } from "@react-three/drei";
import { Group } from "three";

import { ComponentProps } from "react";

type vector = [number, number, number];

const useModel = (
  model: ModelConfig,

  position?: vector,
  rotation?: vector,
) => {
  const { scene } = useGLTF(model.file);

  const Model = (props: ComponentProps<"primitive">) => {
    const { object, ...rest } = props;
    return (
      <primitive
        object={scene as Group}
        position={position ?? model.position}
        rotation={rotation ?? model.rotation}
        {...rest}
      />
    );
  };

  return {
    scene,
    Model,
  };
};

export default useModel;
