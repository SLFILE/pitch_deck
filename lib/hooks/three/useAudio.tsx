"use client";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useCallback, useMemo } from "react";

export function useAudio(url: string) {
  const buffer = useLoader(THREE.AudioLoader, url);

  const listener = useMemo(() => new THREE.AudioListener(), []);

  const play = useCallback(() => {
    const sound = new THREE.Audio(listener);
    sound.setBuffer(buffer);
    sound.setVolume(0.5);
    sound.play();
  }, [buffer, listener]);

  return play;
}
