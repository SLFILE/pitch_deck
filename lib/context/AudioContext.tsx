"use client";

import { useContext, useRef, createContext, ReactNode } from "react";

const AudioContext =
  createContext<React.RefObject<HTMLAudioElement | null> | null>(null);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioContext.Provider value={audioRef}>{children}</AudioContext.Provider>
  );
};

export const useAudioRef = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("This context is only valid in root layout file");
  }

  return context;
};
