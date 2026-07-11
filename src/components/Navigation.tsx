import React from "react";
import { motion } from "motion/react";
import { TabType } from "../types";

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs: TabType[] = ["HOME", "ABOUT", "EDUCATION", "SKILLS", "CERTIFICATES", "PROJECTS", "CONTACT"];

  return (
    <nav className="flex items-center gap-1 sm:gap-2 md:gap-4" id="main-nav">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            id={`nav-tab-${tab.toLowerCase()}`}
            onClick={() => setActiveTab(tab)}
            className="relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest transition-colors duration-300 focus:outline-none cursor-pointer"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-yellow-950/20 border border-[#FACC15]/40 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isActive ? "text-[#FACC15] font-bold" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {tab}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
