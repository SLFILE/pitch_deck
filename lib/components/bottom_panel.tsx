import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
const BottomPanel = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute bottom-0 left-0 w-full h-auto min-h-[300px] bg-[#1a1c20]/60 backdrop-blur-xl border-t border-white/10 p-12 text-white z-50 shadow-2xl rounded-t-3xl"
      >
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8" />

        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomPanel;
