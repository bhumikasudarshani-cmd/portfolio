import { motion } from 'motion/react';
import { Skill, ThemeConfig } from '../types';

interface SkillListProps {
  skills: Skill[];
  themeConfig: ThemeConfig;
  activeSkillId: string | null;
  onSelectSkill: (id: string | null) => void;
}

export default function SkillList({
  skills,
  themeConfig,
  activeSkillId,
  onSelectSkill,
}: SkillListProps) {
  // Height classes mapping
  const heightMap = {
    thin: 'h-2.5',
    medium: 'h-4',
    thick: 'h-6',
  };

  // Theme styling mapping for the bar fill
  const getBarFillStyle = (skill: Skill) => {
    switch (themeConfig.style) {
      case 'solid-orange':
        return 'bg-[#ff3c00]';
      case 'gradient-red-yellow':
        return 'bg-gradient-to-r from-[#ff3131] via-[#ff5e00] to-[#fff01f]';
      case 'gradient-orange-yellow':
        return 'bg-gradient-to-r from-[#ff5e00] to-[#fff01f]';
      case 'cyberpunk-neon':
        return 'bg-gradient-to-r from-[#ff2a5f] via-[#ff7e15] to-[#f4eb12]';
      default:
        return 'bg-[#ff3c00]';
    }
  };

  // Glow shadow mapping based on style and intensity
  const getGlowStyle = () => {
    if (themeConfig.glowIntensity === 'none') return {};

    const intensityOpacity = {
      low: 0.3,
      medium: 0.6,
      high: 0.9,
    };

    const op = intensityOpacity[themeConfig.glowIntensity];

    let color = 'rgba(255, 60, 0, ';
    if (themeConfig.style === 'gradient-red-yellow' || themeConfig.style === 'gradient-orange-yellow') {
      color = 'rgba(255, 94, 0, ';
    } else if (themeConfig.style === 'cyberpunk-neon') {
      color = 'rgba(255, 42, 95, ';
    }

    return {
      boxShadow: `0 0 15px ${color}${op}), 0 0 30px ${color}${op * 0.5})`,
    };
  };

  return (
    <div className="space-y-9 w-full max-w-4xl mx-auto py-4">
      {skills.map((skill, index) => {
        const isActive = activeSkillId === skill.id;

        return (
          <div
            key={skill.id}
            id={`skill-item-${skill.id}`}
            onClick={() => onSelectSkill(isActive ? null : skill.id)}
            className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-white/[0.04] border border-white/10'
                : 'hover:bg-white/[0.02] border border-transparent'
            }`}
          >
            <div className="flex justify-between items-end mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-zinc-300 font-semibold uppercase">
                  {skill.name}
                </span>
                {skill.category && (
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5 uppercase">
                    {skill.category}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2" />
            </div>

            {/* Background Track with Yellow border */}
            <div className="relative w-full bg-zinc-950/80 rounded-full overflow-hidden border border-white/10 shadow-[0_0_8px_rgba(255,255,255,0.05)]">
              {/* Progress Bar Fill with Neon Reddish Yellow Gradient & Glow */}
              <motion.div
                className="rounded-full transition-all duration-300 h-1.5 bg-gradient-to-r from-[#ff2a00] via-[#ff7c00] to-[#ffea00]"
                initial={themeConfig.animateOnLoad ? { width: 0 } : { width: `${skill.percentage}%` }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{
                  type: 'spring',
                  stiffness: 45,
                  damping: 15,
                  delay: themeConfig.animateOnLoad ? index * 0.1 : 0,
                }}
                style={{
                  boxShadow: '0 0 12px #ff5100, 0 0 25px rgba(255, 124, 0, 0.75), 0 0 35px rgba(255, 234, 0, 0.5)',
                }}
              />
            </div>

            {/* Optional Description / Mini Details displayed when active */}
            {isActive && skill.description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-3 border-t border-white/10"
              >
                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
