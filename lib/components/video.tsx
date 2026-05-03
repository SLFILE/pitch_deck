import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useAudioRef } from "../context/AudioContext";

interface GlobalVideoOverlayProps {
  isOpen: boolean;
  onClose: (val: boolean) => void;
  videoSrc: string | null;
}

const GlobalVideoOverlay: React.FC<GlobalVideoOverlayProps> = ({
  isOpen,
  onClose,
  videoSrc,
}) => {
  const audioRef = useAudioRef();

  const handleAmbientAudio = () => {
    const ambientSound = audioRef.current;

    if (!ambientSound) return;

    isOpen ? ambientSound.pause() : ambientSound.play().catch(() => {});
  };

  useEffect(() => {
    handleAmbientAudio();

    return () => {
      audioRef.current && audioRef.current.play();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && videoSrc && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl aspect-video bg-[#1a1c20] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />

            <button
              onClick={() => onClose(false)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalVideoOverlay;
