import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuestionSection from './components/QuestionSection';
import ExperienceSection from './components/ExperienceSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillSection />
        <QuestionSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;