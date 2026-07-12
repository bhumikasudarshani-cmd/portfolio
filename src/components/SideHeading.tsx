import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { TabType } from "../types";

interface SideHeadingProps {
  activeTab: TabType;
}

export default function SideHeading({ activeTab }: SideHeadingProps) {
  if (activeTab === "HOME") return null;

  const headings: Record<TabType, { line1: string; line2: string; line3: string }> = {
    HOME: {
      line1: "",
      line2: "",
      line3: ""
    },
    ABOUT: {
      line1: "WHO I AM",
      line2: "ABOUT",
      line3: "ME"
    },
    EDUCATION: {
      line1: "ACADEMIC TRACE",
      line2: "LEARN",
      line3: "GROWTH"
    },
    SKILLS: {
      line1: "TECH STACK",
      line2: "CRAFT",
      line3: "SKILLS"
    },
    CERTIFICATES: {
      line1: "CREDENTIALS",
      line2: "PROVED",
      line3: "VALUES"
    },
    PROJECTS: {
      line1: "SELECTED",
      line2: "DIGITAL",
      line3: "WORKS"
    },
    CONTACT: {
      line1: "SAY HELLO",
      line2: "START",
      line3: "PROJECT"
    }
  };

  const current = headings[activeTab];

  return (
    <div className="flex flex-col items-start lg:items-end justify-center w-full relative h-[180px] lg:h-[220px]" id="side-heading">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#4F46E5] uppercase mb-1 sm:mb-2 select-none filter drop-shadow-[0_0_10px_rgba(79,70,229,0.2)]">
            {current.line1}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wider leading-none text-white select-none">
            {current.line2}
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wider leading-none text-white select-none mt-1 sm:mt-2">
            {current.line3}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
