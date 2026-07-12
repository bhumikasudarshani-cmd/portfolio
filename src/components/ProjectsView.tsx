import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code } from "lucide-react";
import { Project } from "../types";

export default function ProjectsView() {
  const projects: Project[] = [
    {
      id: "aether-os",
      title: "Aether OS",
      description: "A secure, client-side container system that renders virtual desktops and sandboxed terminals inside standard web browsers.",
      tags: ["TypeScript", "WebAssembly", "Tailwind CSS"],
    },
    {
      id: "vectra-db",
      title: "Vectra DB",
      description: "Extremely lightweight local-first serverless vector database that queries multidimensional embeddings efficiently in real-time.",
      tags: ["Rust", "WASM", "Vector Indices"],
    },
    {
      id: "scribe-ai",
      title: "Scribe AI",
      description: "Context-aware automated transcription and visual semantic mapper that auto-categorizes meeting notes into bento board nodes.",
      tags: ["Node.js", "Gemini API", "D3.js"],
    },
    {
      id: "pulse-proxy",
      title: "Pulse Proxy",
      description: "Ultra-fast HTTP/3 reverse proxy and TLS terminator featuring automatic load balancing and real-time analytics dashboards.",
      tags: ["Go", "gRPC", "Prometheus"],
    },
    {
      id: "kroma-engine",
      title: "Kroma Engine",
      description: "High-performance GPU-accelerated 2D rendering library that processes vector paths and animations via WebGPU.",
      tags: ["C++", "WebGPU", "WGSL"],
    },
    {
      id: "nova-canvas",
      title: "Nova Canvas",
      description: "Collaborative real-time whiteboarding workspace featuring offline synchronization and CRDT-based layout conflict resolution.",
      tags: ["React", "Yjs", "WebSockets"],
    }
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const leftProjects = projects.slice(0, 3);
  const rightProjects = projects.slice(3, 6);

  const renderProjectCard = (project: Project, idx: number) => {
    return (
      <div
        key={project.id}
        className="relative p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group flex flex-col gap-2 w-full"
        onMouseEnter={() => setHoveredIdx(idx)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {/* Animated subtle blue glow outline */}
        <AnimatePresence>
          {hoveredIdx === idx && (
            <motion.div
              layoutId="glow"
              className="absolute inset-0 rounded-2xl border border-[#2B66FF]/30 shadow-[0_0_15px_rgba(43,102,255,0.06)] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center relative z-10">
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#2B66FF] transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200" />
          </div>
        </div>

        <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed select-text selection:bg-blue-500/30 relative z-10">
          {project.description}
        </p>

        <div className="flex items-center gap-2 mt-2 flex-wrap relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-900/50 text-zinc-400 border border-zinc-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      key="projects-view"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-start select-none w-full"
      id="projects-view"
    >
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight select-none mt-1 leading-none text-[#FACC15] filter drop-shadow-[0_0_20px_rgba(250,204,21,0.35)] mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Left Column Stack - Old Projects */}
        <div className="flex flex-col gap-4 w-full">
          {leftProjects.map((project, idx) => renderProjectCard(project, idx))}
        </div>

        {/* Right Column Stack - New Projects */}
        <div className="flex flex-col gap-4 w-full">
          {rightProjects.map((project, idx) => renderProjectCard(project, idx + 3))}
        </div>
      </div>
    </motion.div>
  );
}
