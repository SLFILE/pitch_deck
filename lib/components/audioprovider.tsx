"use client";
import { useState } from "react";
import useAmbientAudio from "../hooks/react/useAmbientSound";
import { motion } from "motion/react";

import { Audio } from "../utils/audio";

const AudioProvider = () => {
  const { audioRef } = useAmbientAudio(Audio.ambient_beta.url);

  const [isPlaying, setIsPlaying] = useState(false);
  const handleAudio = () => {
    if (!audioRef.current) return null;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-9999">
        <button
          onClick={handleAudio}
          className="group flex cursor-pointer items-center gap-3 px-4 py-2 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
        >
          <div className="flex items-center gap-0.75 h-4 w-6 justify-center">
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-0.75 bg-white rounded-full"
                animate={
                  isPlaying
                    ? {
                        height: ["20%", "100%", "20%"],
                      }
                    : {
                        height: "20%",
                      }
                }
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </button>
      </div>
    </>
  );
};

export default AudioProvider;
