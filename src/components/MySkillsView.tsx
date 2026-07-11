import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Skill, ThemeConfig } from "../types";
import SkillList from "./SkillList";

// Initial default skills
const DEFAULT_SKILLS: Skill[] = [
  {
    id: "1",
    name: "HTML",
    percentage: 92,
    category: "Frontend",
    description: "Structure, SEO compliance, semantic elements, and accessibility standards.",
  },
  {
    id: "2",
    name: "CSS",
    percentage: 62,
    category: "Frontend",
    description: "Custom layouts (Grid, Flexbox), animations, design variables, and Tailwind utility systems.",
  },
  {
    id: "3",
    name: "JAVASCRIPT",
    percentage: 84,
    category: "Languages",
    description: "ES6+ standards, promise-based workflows, DOM manipulation, and dynamic state machines.",
  },
  {
    id: "5",
    name: "C",
    percentage: 75,
    category: "Languages",
    description: "Low-level memory management, efficient pointer architectures, and core operating system optimization.",
  },
  {
    id: "6",
    name: "C++",
    percentage: 80,
    category: "Languages",
    description: "Object-oriented performance engineering, templates, meta-programming, and real-time computation.",
  },
  {
    id: "7",
    name: "PYTHON",
    percentage: 88,
    category: "Languages",
    description: "Data science pipeline builds, scripting automation, machine learning orchestration, and microservices.",
  },
];

// Initial theme configuration
const INITIAL_THEME: ThemeConfig = {
  style: "solid-orange",
  glowIntensity: "none",
  pulseAnimation: false,
  barHeight: "medium",
  showPercentage: true, // Show progress percentage text
  animateOnLoad: true,
};

export default function MySkillsView() {
  const [skills] = useState<Skill[]>(() => {
    const saved = localStorage.getItem("portfolio_skills_data_v4");
    return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
  });

  const [themeConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem("portfolio_skills_theme_v4");
    return saved ? JSON.parse(saved) : INITIAL_THEME;
  });

  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  // Sync state to local storage on init
  useEffect(() => {
    if (!localStorage.getItem("portfolio_skills_data_v4")) {
      localStorage.setItem("portfolio_skills_data_v4", JSON.stringify(DEFAULT_SKILLS));
    }
    if (!localStorage.getItem("portfolio_skills_theme_v4")) {
      localStorage.setItem("portfolio_skills_theme_v4", JSON.stringify(INITIAL_THEME));
    }
  }, []);

  return (
    <motion.div
      key="skills-section-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full select-none"
      id="skills-view-section"
    >
      {/* Left Column: Title Block matching Education and About sections */}
      <div className="flex-1 flex flex-col items-start text-left">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[2px] bg-[#ff3c00]" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ff3c00] uppercase">
            SKILLS
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1.5 mb-4 leading-tight font-sans">
          My Skills
        </h2>
      </div>

      {/* Right Column: Skills Panel Card shifted to the right, matching exact card widths */}
      <div className="w-full lg:w-[380px] flex-shrink-0">
        <div className="w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden">
          {/* Skill list */}
          <SkillList
            skills={skills}
            themeConfig={themeConfig}
            activeSkillId={activeSkillId}
            onSelectSkill={setActiveSkillId}
          />
        </div>
      </div>
    </motion.div>
  );
}
