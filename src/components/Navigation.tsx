import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TabType } from "../types";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "SKILLS", href: "#skills" },
    { name: "CERTIFICATES", href: "#certificates" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" }
  ];

  const handleLinkClick = (tabName: string) => {
    setActiveTab(tabName as TabType);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation Menu (hidden on mobile/tablet, shown on lg screens) */}
      <nav className="hidden lg:flex items-center gap-1 sm:gap-2 md:gap-4" id="main-nav">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <a
              key={tab.name}
              href={tab.href}
              id={`nav-tab-${tab.name.toLowerCase()}`}
              onClick={() => setActiveTab(tab.name as TabType)}
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
                {tab.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Hamburger Menu Button (shown on mobile/tablet, hidden on lg screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden p-2 rounded-xl border border-white/10 bg-zinc-950/50 backdrop-blur-md text-zinc-400 hover:text-white transition-all cursor-pointer z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                return (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => handleLinkClick(tab.name)}
                    className={`text-lg sm:text-xl font-bold tracking-[0.25em] uppercase transition-colors py-2 px-6 rounded-full ${
                      isActive 
                        ? "text-[#FACC15] border border-[#FACC15]/30 bg-yellow-950/20" 
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
