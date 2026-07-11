import React from "react";
import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center justify-center select-none" id="scroll-indicator">
      {/* Mouse Icon Outline */}
      <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center p-1 bg-black/40">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-blue-500"
          animate={{
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated Text */}
      <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 mt-2.5 uppercase font-mono animate-pulse">
        Scroll Down
      </span>
    </div>
  );
}
