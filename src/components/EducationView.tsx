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
      className="flex flex-col lg:items-end items-start justify-start gap-6 w-full select-none"
      id="education-view-section"
    >
      {/* Title Block - Aligned right on desktop, left on mobile */}
      <div className="flex flex-col lg:items-end items-start lg:text-right text-left w-full lg:w-[380px]">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1.5 mb-2 leading-tight font-sans">
          Academic journey
        </h2>
      </div>

      {/* Card Wrapper - Aligned right on desktop, full-width/left-aligned on mobile */}
      <div className="w-full lg:w-[380px] flex-shrink-0">
        {educationList.map((edu) => {
          const isCurrent = edu.period.includes("PRESENT");
          return (
            <div
              key={edu.id}
              className="w-full p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase ${isCurrent ? "text-[#EAB308]" : "text-zinc-500"}`}>
                {edu.period}
              </span>

              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                {edu.degree}
              </h3>

              <div className="flex flex-col gap-1.5 mt-1">
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
