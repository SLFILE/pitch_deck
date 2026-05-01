"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface ImageConfig {
  id: string;
  title: string;
  description: string;
  uri: string;
  metadata: string;
  name?: string;
}

export default function ImageView({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: (val: boolean) => void;
  items: Record<string, ImageConfig>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsArray = Object.values(items);

  if (!itemsArray || itemsArray.length === 0) return null;

  const activeItem = itemsArray[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(false)}
            className="absolute inset-0 cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl h-[80vh] grid md:grid-cols-[1fr_300px] gap-4 pointer-events-auto"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#1a1c20]  shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.uri}
                    alt={activeItem.metadata || activeItem.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2 text-white"
                >
                  <h2 className="text-4xl font-bold tracking-tight">
                    {activeItem.title}
                  </h2>
                  {activeItem.name && (
                    <p className="text-emerald-400 font-medium text-lg">
                      {activeItem.name}
                    </p>
                  )}
                  {activeItem.description && (
                    <p className="text-orange/70 max-w-xl leading-relaxed line-clamp-3">
                      {activeItem.description}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full overflow-hidden">
              <div className="bg-[#1a1c20]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-xs uppercase tracking-widest font-bold">
                  Gallery {currentIndex + 1} / {itemsArray.length}
                </span>
                <button
                  onClick={() => onClose(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-white/30 hover:text-white-400 transition-colors text-white"
                >
                  <IoClose />
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto pr-2 space-y-3 [ms-overflow-style:none] 
            [scrollbar-width:none] 
            [&::-webkit-scrollbar]:display-none"
              >
                {itemsArray.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-full text-left group relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentIndex === idx
                        ? "border-blue-500 ring-4 ring-blue-500/20"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <div className="aspect-video w-full relative">
                      <Image
                        src={item.uri}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-[10px] text-white font-bold truncate uppercase">
                        {item.name || item.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
