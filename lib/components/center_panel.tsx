import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
const CenterPanel = ({
  onClose,
  children,
}: {
  onClose: (val: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => onClose(false)}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#1a1c20]/80 backdrop-blur-xl border border-white/10 p-12 text-white shadow-2xl rounded-3xl"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CenterPanel;
