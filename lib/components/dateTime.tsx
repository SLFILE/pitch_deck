"use client";
import { useEffect, useState } from "react";

const Decor = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const update = () => setTime(new Date());
    update();
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const currentDate = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-2.5 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white/90 text-sm font-medium shadow-2xl">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <time>{currentTime}</time>
      </div>
      <div className="w-px h-3 bg-white/20" />
      <span className="text-white/60 uppercase tracking-widest text-[10px]">
        {currentDate}
      </span>
    </div>
  );
};

export default Decor;
