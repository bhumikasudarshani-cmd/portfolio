import React from "react";
import { motion } from "motion/react";
import { Education } from "../types";

export default function EducationView() {
  const educationList: Education[] = [
    {
      id: "edu-1",
      degree: "B.Tech Computer Science Engineering, JIS UNIVERSITY, KOLKATA",
      institution: "JIS UNIVERSITY, KOLKATA",
      period: "2025 - PRESENT",
      details: [
        "Currently pursuing a Bachelor of Technology in Computer Science Engineering with a CGPA of 9.78."
      ]
    }
  ];

  return (
    <motion.div
      key="education-view"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full select-none"
      id="education-view-section"
    >
      {/* Left Column: Title Block */}
      <div className="flex-1 flex flex-col items-start text-left">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[2px] bg-[#EAB308]" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#EAB308] uppercase">
            EDUCATION
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1.5 mb-4 leading-tight font-sans">
          Academic journey
        </h2>
      </div>

      {/* Right Column: Square Card */}
      <div className="w-full lg:w-[380px] flex-shrink-0">
        {educationList.map((edu) => {
          const isCurrent = edu.period.includes("PRESENT");
          return (
            <div
              key={edu.id}
              className="w-full p-6 rounded-none bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase ${isCurrent ? "text-[#EAB308]" : "text-zinc-500"}`}>
                {edu.period}
              </span>

              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                {edu.degree}
              </h3>

              <div className="h-px bg-zinc-900 w-full my-1" />

              <div className="flex flex-col gap-1.5">
                {edu.details.map((detail, dIdx) => (
                  <p
                    key={dIdx}
                    className="text-[11px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed select-text selection:bg-blue-500/30"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
