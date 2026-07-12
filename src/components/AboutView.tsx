import React from "react";
import { motion } from "motion/react";
import { User, Mail, MapPin, Download } from "lucide-react";

interface AboutViewProps {
  onShowToast: (message: string) => void;
}

export default function AboutView({ onShowToast }: AboutViewProps) {
  const handleDownload = () => {
    onShowToast("Success! CV downloaded as Bhumika_Sudarshani_CV.pdf");
  };

  return (
    <motion.div
      key="about-view"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 w-full select-none"
      id="about-view-section"
    >
      {/* Left Column: text content & download button */}
      <div className="flex-1 flex flex-col items-start text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1.5 mb-4 leading-tight">
          About Me
        </h2>
        
        <p className="text-zinc-200 font-normal text-xs sm:text-sm md:text-base leading-relaxed max-w-md select-text selection:bg-blue-500/30">
          I'm Bhumika Sudarshani, a passionate Computer Science Undergrad specializing in Full-Stack development. I love building beautiful, functional and user-friendly web applications that solve real-world problems.
        </p>

        <button
          onClick={handleDownload}
          id="btn-download-cv"
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-black text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/30 transition-all duration-300 text-xs sm:text-sm font-semibold cursor-pointer active:scale-95 mt-6"
        >
          <span>Download CV</span>
          <Download className="w-4 h-4 text-zinc-400 group-hover:text-white" />
        </button>
      </div>

      {/* Right Column: Metadata details box matching the image exactly */}
      <div className="w-full lg:w-[380px] flex-shrink-0">
        <div className="w-full border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
          
          {/* Row 1: Name */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300">
              <User className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Name</span>
              <span className="text-sm font-medium text-zinc-200 select-text selection:bg-blue-500/30">Bhumika Sudarshani</span>
            </div>
          </div>

          <div className="h-px bg-zinc-900/40 w-full" />

          {/* Row 2: Email */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Email</span>
              <span className="text-sm font-medium text-zinc-200 select-text selection:bg-blue-500/30 truncate">bhumikasudarshani@gmail.com</span>
            </div>
          </div>

          <div className="h-px bg-zinc-900/40 w-full" />

          {/* Row 3: Location */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Location</span>
              <span className="text-sm font-medium text-zinc-200 select-text selection:bg-blue-500/30">India</span>
            </div>
          </div>

          <div className="h-px bg-zinc-900/40 w-full" />

          {/* Row 4: Availability */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Availability</span>
              <span className="text-sm font-medium text-zinc-200">Available for work</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
