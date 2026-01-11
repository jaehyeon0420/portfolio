import React from 'react';

export interface Project {
  id: string;
  title: string;
  period: string;
  teamSize: number;
  role: string;
  kind : string;
  description: string;
  techStack: string[];
  readme: string;
  thumnailimage: string;
  images: string[];
  videoUrl: string;
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
  category: 'Language' | 'Frontend' | 'Backend' | 'Infra';
  skills: string[];
}