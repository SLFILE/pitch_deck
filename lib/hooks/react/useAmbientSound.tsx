import { useEffect, useRef } from "react";

export default function useAmbientAudio(
  uri?: string,
  volume?: number,
  audioLoop?: boolean,
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(uri);
    audio.loop = audioLoop ?? true;
    audio.volume = volume ?? 0.3;
    audioRef.current = audio;

    const startAudio = () => {
      window.removeEventListener("click", startAudio);
      audio.play();
    };

    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  return {
    audioRef,
  };
}
