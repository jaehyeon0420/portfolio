import React, { useEffect, useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Building, AlertTriangle, Trophy, Cpu, GitBranch, BookOpen, Target } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'readme' | 'image' | 'video' | null;
  project: Project | null;
}

interface ParsedSection {
  title: string;
  content: string[];
  type: 'overview' | 'problem' | 'tech' | 'process' | 'result' | 'general';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [project, type]);

  // Parse Markdown into structured sections for better UI
  const parsedReadme = useMemo(() => {
    if (!project || type !== 'readme') return [];

    const lines = project.readme.split('\n');
    const sections: ParsedSection[] = [];
    let currentSection: ParsedSection = { title: '프로젝트 개요', content: [], type: 'overview' };
    
    // Helper to determine section type based on keywords
    const getSectionType = (title: string): ParsedSection['type'] => {
      const t = title.toLowerCase();
      if (t.includes('문제') || t.includes('challenge') || t.includes('pain point')) return 'problem';
      if (t.includes('기술') || t.includes('stack') || t.includes('tech') || t.includes('선정')) return 'tech';
      if (t.includes('과정') || t.includes('process') || t.includes('해결') || t.includes('구현')) return 'process';
      if (t.includes('성과') || t.includes('result') || t.includes('outcomes')) return 'result';
      if (t.includes('개요') || t.includes('overview') || t.includes('summary')) return 'overview';
      return 'general';
    };

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('## ')) {
        if (currentSection.content.length > 0) {
          sections.push(currentSection);
        }
        const title = trimmedLine.replace('## ', '');
        currentSection = { 
          title, 
          content: [], 
          type: getSectionType(title) 
        };
      } else if (trimmedLine.startsWith('# ')) {
        // Skip H1 as it is likely the title which we display in header
      } else {
        if (trimmedLine !== '') currentSection.content.push(line);
      }
    });
    
    // Push the last section
    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  }, [project, type]);

  if (!isOpen || !project || !type) return null;

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Icon mapping for sections
  const SectionIcon = ({ type }: { type: ParsedSection['type'] }) => {
    switch (type) {
      case 'problem': return <AlertTriangle className="text-orange-500" size={20} />;
      case 'result': return <Trophy className="text-green-600" size={20} />;
      case 'tech': return <Cpu className="text-blue-500" size={20} />;
      case 'process': return <GitBranch className="text-purple-500" size={20} />;
      case 'overview': return <Target className="text-indigo-500" size={20} />;
      default: return <BookOpen className="text-slate-500" size={20} />;
    }
  };

  // Style mapping for sections
  const getSectionStyles = (type: ParsedSection['type']) => {
    switch (type) {
      case 'problem': return "bg-orange-50 border-orange-100";
      case 'result': return "bg-green-50 border-green-100";
      case 'tech': return "bg-blue-50 border-blue-100";
      case 'process': return "bg-purple-50 border-purple-100";
      case 'overview': return "bg-indigo-50 border-indigo-100";
      default: return "bg-white border-slate-100";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeInScale_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="flex-none p-6 border-b border-slate-100 bg-white z-10">
          <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                 {project.main_title} : {project.title}
               </h3>
             </div>
             <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
             >
               <X size={24} />
             </button>
          </div>

          {/* Project Meta Info Bar */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
             <div className="flex items-center gap-2">
               <Calendar size={16} className="text-blue-500"/>
               <span className="font-medium">{project.period}</span>
             </div>
             <div className="flex items-center gap-2">
               <Users size={16} className="text-blue-500"/>
               <span>{project.teamSize}명 참여</span>
             </div>
             <div className="flex items-center gap-2">
               <Building size={16} className="text-blue-500"/>
               <span>{project.role}</span>
             </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 custom-scrollbar">
          
          {/* README CASE STUDY VIEW */}
          {type === 'readme' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {parsedReadme.map((section, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-xl border shadow-sm p-6 transition-all hover:shadow-md ${getSectionStyles(section.type)}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                      <SectionIcon type={section.type} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">{section.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {section.content.map((line, i) => {
                      // Formatting logic for bullet points or emphasis
                      const isBullet = line.trim().startsWith('- ');
                      const content = line.replace('- ', '').trim();
                      
                      if (!content) return <br key={i} className="h-2 block"/>;

                      return (
                        <div key={i} className={`text-slate-700 leading-relaxed ${isBullet ? 'flex gap-3' : ''}`}>
                          {isBullet && (
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                          )}
                          <span className={isBullet ? 'flex-1' : ''}>
                             {/* Simple highlighting for text between ** */}
                             {content.split(/(\*\*.*?\*\*)/).map((part, j) => 
                               part.startsWith('**') && part.endsWith('**') ? (
                                 <strong key={j} className="font-bold text-slate-900 bg-yellow-100/50 px-1 rounded">
                                   {part.slice(2, -2)}
                                 </strong>
                               ) : (
                                 part
                               )
                             )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* IMAGE GALLERY VIEW */}
          {type === 'image' && (
            <div className="h-full flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={project.images[currentImgIndex]} 
                  alt={`Project ${project.title} - ${currentImgIndex + 1}`} 
                  className="w-full h-full object-contain"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage} 
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                    >
                        <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                {project.images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImgIndex ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* VIDEO PLAYER VIEW */}
          {type === 'video' && (
             <div className="h-full flex items-center justify-center min-h-[400px]">
               <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                 <video 
                   src={project.videoUrl} 
                   controls 
                   autoPlay 
                   className="w-full h-full"
                 />
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;