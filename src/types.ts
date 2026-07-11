export type TabType = "HOME" | "ABOUT" | "EDUCATION" | "SKILLS" | "CERTIFICATES" | "PROJECTS" | "CONTACT";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: string;
  glowColor?: string;
  description?: string;
}

export type ThemeStyle = 'solid-orange' | 'gradient-red-yellow' | 'gradient-orange-yellow' | 'cyberpunk-neon';

export interface ThemeConfig {
  style: ThemeStyle;
  glowIntensity: 'none' | 'low' | 'medium' | 'high';
  pulseAnimation: boolean;
  barHeight: 'thin' | 'medium' | 'thick';
  showPercentage: boolean;
  animateOnLoad: boolean;
}

