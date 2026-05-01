import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
const LeftPanel = ({
  children,
  handleState,
}: {
  children: ReactNode;
  handleState: (val: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute top-0 md:top-1/2 right-0 h-full 

 md:right-10 w-full md:w-[450px] h-full md:h-3/4 -translate-y-0 md:-translate-y-1/2 bg-[#1a1c20]/60 backdrop-blur-xl border-l md:border border-white/10 rounded-none md:rounded-3xl p-8 md:p-12 text-white z-10 shadow-2xl transition-all duration-500"
      >
        <div className="w-full flex justify-end sticky">
          <div className="w-full text-start ">
            <h6 className="font-extrabold text-3xl">LEGO LAND</h6>
          </div>
          <button
            className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            onClick={() => handleState(false)}
          >
            <div className="relative w-4 h-4">
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white -rotate-45 transition-transform group-hover:rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white rotate-45 transition-transform group-hover:-rotate-45" />
            </div>
          </button>
        </div>
        <div className="overflow-y-auto h-full [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeftPanel;
