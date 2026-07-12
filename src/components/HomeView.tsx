import React from "react";
import { motion } from "motion/react";
import { Download, Briefcase } from "lucide-react";
import { TabType } from "../types";

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
  onShowToast: (message: string) => void;
}

export default function HomeView({ onNavigate, onShowToast }: HomeViewProps) {
  const handleDownload = () => {
    onShowToast("Success! CV downloaded as Bhumika_Sudarshani_CV.pdf");
  };

  return (
    <motion.div
      key="home-view"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left select-none w-full"
      id="home-view"
    >
      <span className="text-zinc-300 font-light text-lg sm:text-xl md:text-2xl tracking-wide">
        Hi I'm
      </span>
      
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight select-none mt-1 leading-none text-[#FACC15] filter drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]">
        Bhumika
      </h1>
      
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight select-none mt-1 leading-none text-white">
        Sudarshani
      </h2>
      
      <p className="text-zinc-400 font-normal text-xs sm:text-sm md:text-base leading-relaxed max-w-md mt-6 select-text selection:bg-blue-500/30">
        Turning ideas into code, and code into impact.
        Computer Science Undergrad, Full-Stack Development, and everything in between.
      </p>

      <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8 flex-wrap w-full">
        <button
          onClick={handleDownload}
          id="btn-download-resume"
          className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-zinc-800 bg-[#09090b]/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 text-xs sm:text-sm font-medium cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.5)] active:scale-95"
        >
          <Download className="w-4 h-4 text-blue-400" />
          <span>Download Resume</span>
        </button>

        <button
          onClick={() => onNavigate("PROJECTS")}
          id="btn-view-projects"
          className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-zinc-800 bg-[#09090b]/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 text-xs sm:text-sm font-medium cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.5)] active:scale-95"
        >
          <Briefcase className="w-4 h-4 text-indigo-400" />
          <span>View Projects</span>
        </button>
      </div>
    </motion.div>
  );
}
