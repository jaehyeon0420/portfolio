import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';
import { style } from 'framer-motion/client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'readme' | 'image' | 'video' | null;
  project: Project | null;
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

  // Reset index when modal opens/changes
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [project, type]);

  if (!isOpen || !project || !type) return null;

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeInScale_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-800">
            {project.title} <span className="text-blue-600 uppercase">| {type}</span>
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {type === 'readme' && (
            <div className="prose prose-blue max-w-none text-slate-700 break-keep">
              {/* Simple Markdown rendering simulation */}
              {project.readme.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold mb-4 text-gray-900">{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3 text-gray-800">{line.replace('## ', '')}</h2>;
                if (line.startsWith('- ')) return <li key={idx} className="ml-4 list-disc text-gray-700">{line.replace('- ', '')}</li>;
                if (line.trim() === '') return <br key={idx} />;
                return <p key={idx} className="mb-2 leading-relaxed">{line}</p>;
              })}
            </div>
          )}

          {type === 'image' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <img style={{padding : 10}}
                  src={project.images[currentImgIndex]} 
                  alt={`Project ${project.title} - ${currentImgIndex + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-y-0 left-0 flex items-center px-4">
                 <button onClick={prevImage} className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white text-blue-600 transition-all">
                    <ChevronLeft size={24} />
                 </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-4">
                 <button onClick={nextImage} className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white text-blue-600 transition-all">
                    <ChevronRight size={24} />
                 </button>
              </div>

              <div className="mt-4 flex gap-2 justify-center">
                {project.images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentImgIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          )}

          {type === 'video' && (
             <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-black rounded-lg overflow-hidden">
               <video 
                 src={project.videoUrl} 
                 controls 
                 autoPlay 
                 className="w-full h-full max-h-[70vh]"
               />
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;