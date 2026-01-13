import React from 'react';

export interface Project {
  id: string;
  main_title: string;
  title: string;
  period1: string;
  period2: string;
  teamSize: number;
  role: string;
  kind : string;
  description: string;
  techStack: string[];
  readme: string;
  thumnailimage: string;
  videoUrl: string;
  github_url : string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Education' | 'Experience';
}

export interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  category: 'Strong' | 'Knowledgeable' | 'ETC';
  skills: string[];
}