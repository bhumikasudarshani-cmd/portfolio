import React from "react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  category: string;
  progress: number;
  colorClass: string;
  bgColorClass: string;
  icon: React.ReactNode;
}

export default function SkillsView() {
  const row1Skills: SkillItem[] = [
    {
      name: "MongoDB",
      category: "Database",
      progress: 80,
      colorClass: "bg-[#10B981]",
      bgColorClass: "bg-[#10B981]/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 6 7.5 6 13C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13C18 7.5 12 2 12 2Z" fill="#10B981" />
          <path d="M12 2V19C12.3 19 12.5 18.9 12.7 18.7C15.1 17.5 16.5 14.8 16.5 12C16.5 7.5 12 2 12 2Z" fill="#059669" />
          <path d="M12 22V19" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Express.js",
      category: "Backend",
      progress: 75,
      colorClass: "bg-zinc-400",
      bgColorClass: "bg-zinc-800/40",
      icon: (
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800">
          <span className="text-xl font-light font-sans text-zinc-300 tracking-tighter">ex</span>
        </div>
      )
    },
    {
      name: "React",
      category: "Frontend",
      progress: 90,
      colorClass: "bg-[#06B6D4]",
      bgColorClass: "bg-[#06B6D4]/20",
      icon: (
        <svg className="w-12 h-12 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#06B6D4" />
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Runtime",
      progress: 85,
      colorClass: "bg-[#22C55E]",
      bgColorClass: "bg-[#22C55E]/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" stroke="#22C55E" strokeWidth="2" fill="#22C55E" fillOpacity="0.15" />
          <path d="M12 6V18" stroke="#22C55E" strokeWidth="1.5" />
          <path d="M12 6L17 9" stroke="#22C55E" strokeWidth="1.5" />
          <path d="M12 18L7 15" stroke="#22C55E" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const row2Skills: SkillItem[] = [
    {
      name: "C",
      category: "Programming",
      progress: 70,
      colorClass: "bg-blue-500",
      bgColorClass: "bg-blue-500/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C14.5 6.5 12.5 6 11 7C9.2 8.2 8.8 11 9.8 13.5C10.8 16 13.5 17 15.5 16" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "C++",
      category: "Programming",
      progress: 75,
      colorClass: "bg-sky-600",
      bgColorClass: "bg-sky-600/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 8C9.5 6.5 7.5 6 6 7C4.2 8.2 3.8 11 4.8 13.5C5.8 16 8.5 17 10.5 16" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 11H18M16 9V13" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 11H23M21 9V13" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "JavaScript",
      category: "Language",
      progress: 90,
      colorClass: "bg-yellow-500",
      bgColorClass: "bg-yellow-500/20",
      icon: (
        <svg className="w-12 h-12 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F59E0B" />
          <path d="M12 17.5C12 18.3 12.3 18.7 13.2 18.7C14.1 18.7 14.4 18.1 14.4 17.2V13H15.8V17.2C15.8 19.1 14.8 20 13.1 20 11.3 20 10.5 19.1 10.5 17.5H12ZM19.3 16.7C19.3 18.4 18.3 19.2 16.5 19.2C14.8 19.2 14 18.4 14 16.7H15.4C15.4 17.6 15.8 18 16.5 18C17.2 18 17.7 17.6 17.7 16.9C17.7 16.2 17.3 15.9 16.4 15.5L15.6 15.1C14.4 14.6 13.8 13.8 13.8 12.5C13.8 11.1 14.8 10.3 16.5 10.3C18.1 10.3 19.1 11.1 19.1 12.5H17.7C17.7 11.7 17.3 11.4 16.5 11.4C15.8 11.4 15.4 11.7 15.4 12.4C15.4 13 15.8 13.3 16.6 13.6L17.4 14C18.6 14.5 19.3 15.2 19.3 16.7Z" fill="#000000" />
        </svg>
      )
    }
  ];

  const row3Skills: SkillItem[] = [
    {
      name: "Python",
      category: "Scripting",
      progress: 80,
      colorClass: "bg-blue-400",
      bgColorClass: "bg-blue-400/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.7 2 8.7 3.5 8.7 3.5V5.5H12V6H7.5C7.5 6 4 6 4 9.5C4 13 6.8 13 6.8 13H8V11.5C8 10 9.2 8.7 10.7 8.7H14.7C14.7 8.7 16 8.7 16 7.5V4C16 4 16 2 12 2Z" fill="#306998" />
          <path d="M12 22C15.3 22 15.3 20.5 15.3 20.5V18.5H12V18H16.5C16.5 18 20 18 20 14.5C20 11 17.2 11 17.2 11H16V12.5C16 14 14.8 15.3 13.3 15.3H9.3C9.3 15.3 8 15.3 8 16.5V20C8 20 8 22 12 22Z" fill="#FFE873" />
          <circle cx="10" cy="4" r="0.7" fill="#FFFFFF" />
          <circle cx="14" cy="20" r="0.7" fill="#000000" />
        </svg>
      )
    },
    {
      name: "HTML",
      category: "Frontend",
      progress: 95,
      colorClass: "bg-orange-500",
      bgColorClass: "bg-orange-500/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.5 19L12 21L18.5 19L20 2H4Z" fill="#E44D26" />
          <path d="M12 3.5V19.2L17.2 17.6L18.4 3.5H12Z" fill="#F16529" />
          <path d="M12 8H8.5L8.7 10.5H12V13H9.3L9.5 15.5L12 16.2V13.7" fill="#EBEBEB" />
          <path d="M12 8H15.5L15.2 11.5H12V14H14.7L14.4 16.5L12 17.2V14.7" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "CSS",
      category: "Frontend",
      progress: 90,
      colorClass: "bg-blue-600",
      bgColorClass: "bg-blue-600/20",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.5 19L12 21L18.5 19L20 2H4Z" fill="#1572B6" />
          <path d="M12 3.5V19.2L17.2 17.6L18.4 3.5H12Z" fill="#33A9DC" />
          <path d="M12 8H8.5L8.7 10.5H12V13H9.3L9.5 15.5L12 16.2V13.7" fill="#EBEBEB" />
          <path d="M12 8H15.5L15.2 11.5H12V14H14.7L14.4 16.5L12 17.2V14.7" fill="#FFFFFF" />
        </svg>
      )
    }
  ];

  const renderCard = (skill: SkillItem) => (
    <div
      key={skill.name}
      className="flex-1 min-w-[200px] bg-black border border-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center justify-between gap-5 transition-all duration-300 hover:border-zinc-800 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] group"
    >
      {/* Icon Area */}
      <div className="flex items-center justify-center h-16 w-16 mb-2">
        {skill.icon}
      </div>

      {/* Text Info */}
      <div className="flex flex-col gap-1 items-center">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
          {skill.name}
        </h3>
        <span className="text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest font-semibold">
          {skill.category}
        </span>
      </div>

      {/* Custom Progress Bar matching the screenshot exactly */}
      <div className="w-full mt-2">
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${skill.colorClass} transition-all duration-500`}
            style={{ width: `${skill.progress}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      key="skills-view"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-start select-none w-full max-w-5xl mx-auto"
      id="skills-view-section"
    >
      {/* Title block */}
      <div className="flex flex-col items-start mb-10">
        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#4F46E5] uppercase">
          MY SKILLS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-3 leading-tight font-sans">
          Technologies I Work With
        </h2>
      </div>

      {/* Grid container with 3 custom rows */}
      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {row1Skills.map(renderCard)}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {row2Skills.map(renderCard)}
        </div>

        {/* Row 3: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {row3Skills.map(renderCard)}
        </div>
      </div>
    </motion.div>
  );
}
