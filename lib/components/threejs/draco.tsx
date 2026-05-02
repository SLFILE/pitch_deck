import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import { URI } from "@/lib/utils/common";
interface DracoModelProps extends Omit<ThreeElements["primitive"], "object"> {
  model_uri: string;
}

const Draco_Uri = URI.DRACO_COMPRESSION_URI;

const DracoModel = forwardRef<THREE.Object3D, DracoModelProps>(
  ({ model_uri, ...props }, ref) => {
    useGLTF.preload(model_uri, Draco_Uri);

    const { scene } = useGLTF(model_uri, Draco_Uri) as any;

    return <primitive ref={ref} object={scene} {...props} />;
  },
);

DracoModel.displayName = "DracoModel";

export default DracoModel;
