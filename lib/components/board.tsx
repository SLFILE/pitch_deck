"use client";
import { motion, AnimatePresence } from "framer-motion";
import CardK from "./cards/card";

import { FeatureBlock } from "../kpi/Lego/kpi_data_lego";

export default function Board({
  isOpen,
  onClose,
  KPI,
}: {
  isOpen: boolean;
  onClose: (val: boolean) => void;
  KPI: FeatureBlock[];
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[80%] h-[80%] grid md:grid-cols-[4fr_1fr] gap-6 pointer-events-auto"
          >
            <div className="  bg-[#1a1c20]/60 backdrop-blur-xl border-l md:border border-white/10 rounded-2xl p-6 md:p-12 text-white z-10 shadow-2xl transition-all duration-500 overflow-hidden">
              <h1 className="font-bold tracking-wider mb-2 text-2xl">
                {KPI[0].branch}
              </h1>
              <div className="overflow-y-auto h-full [&::-webkit-scrollbar]:hidden">
                {KPI && (
                  <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-dense">
                    {KPI.slice(1).map((item, index) => (
                      <CardK key={index} {...item} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex  flex-col gap-4">
              <div className="flex-1  bg-[#1a1c20]/60 backdrop-blur-xl rounded-2xl  p-6">
                <div className="flex w-full justify-end">
                  <button
                    className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    onClick={() => onClose(false)}
                  >
                    <div className="relative w-4 h-4">
                      <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white -rotate-45 transition-transform group-hover:rotate-45" />
                      <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white rotate-45 transition-transform group-hover:-rotate-45" />
                    </div>
                  </button>{" "}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
