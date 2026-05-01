import { useVideoTexture } from "@react-three/drei";
import { useLayoutEffect } from "react";
import * as THREE from "three";

type VideoTextureConfig = {
  target: string;
  curl: string;
};

export const useVideo = (
  scene: THREE.Group | THREE.Scene,
  videoTextureData: VideoTextureConfig,
) => {
  const videoTexture = useVideoTexture(videoTextureData.curl || "", {
    muted: true,
    loop: true,
    start: true,
  });

  if (videoTexture) {
    videoTexture.flipY = false;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.colorSpace = THREE.SRGBColorSpace;
  }
  const applyMaterial = (material: THREE.Material) => {
    const newMaterial = material.clone();
    if ("map" in newMaterial) {
      (newMaterial as any).map = videoTexture;
      (newMaterial as any).toneMapped = false;
      (newMaterial as any).emissiveMap = videoTexture;
      (newMaterial as any).emissiveIntensity = 3;
    }
    newMaterial.needsUpdate = true;
    return newMaterial;
  };
  useLayoutEffect(() => {
    if (!videoTextureData) return;
    scene.traverse((child) => {
      if (
        (child as THREE.Mesh).isMesh &&
        child.name === videoTextureData.target
      ) {
        const mesh = child as THREE.Mesh;

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => applyMaterial(m));
        } else {
          mesh.material = applyMaterial(mesh.material);
        }
      }
    });
  }, [scene, videoTexture, videoTexture]);
};
