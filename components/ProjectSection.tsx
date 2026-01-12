import React, { useState } from 'react';
import { hover, motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Play, Users } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Button from './Button';
import Modal from './Modal';

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalType, setModalType] = useState<'readme' | 'image' | 'video' | null>(null);

  const openModal = (project: Project, type: 'readme' | 'image' | 'video') => {
    setSelectedProject(project);
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects & Challenges</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <h4 className="text-1xl text-slate-600 mb-4">※ Video는 첫 실행 시, 3~5초의 로딩 시간이 소요될 수 있습니다.</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Header (using first image as cover) */}
              <div className="relative h-48 overflow-hidden bg-slate-200 group">
                {project.videoUrl ? (
                <video 
                   src={project.videoUrl} 
                   controls 
                   className="w-full h-full"
                   poster={project.thumnailimage} 
                 />)
                 : (
                 <img
                  src="files/images/default-image.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />)
                }
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{project.title}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                  {project.kind == 'Project'
                  ? <span className="text-blue-600 flex items-center gap-1">{project.kind}</span>
                  : <span className="text-green-600 flex items-center gap-1">{project.kind}</span>}
                  <span className="flex items-center gap-1"><Users size={14}/> {project.teamSize}명 참여</span>
                  <span className="text-s text-slate-400">{project.period}</span>
                </div>

                <div className="flex items-center text-sm text-slate-500 mb-4 gap-1">
                  담당 역할 :<span className="text-blue-600 font-medium truncate flex-1">{project.role}</span>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3 break-keep">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <Button 
                    variant="ghost" 
                    className="!px-2 !py-2 text-xs" 
                    icon={<FileText size={16}/>}
                    onClick={() => openModal(project, 'readme')}
                  >
                    README
                  </Button>
                  {project.images.length > 0 &&
                  <Button 
                    variant="ghost" 
                    className="!px-2 !py-2 text-xs" 
                    icon={<ImageIcon size={16}/>}
                    onClick={() => openModal(project, 'image')}
                  >
                    IMAGE
                  </Button>
                  }
                  {project.videoUrl &&
                  <Button 
                    variant="ghost" 
                    className="!px-2 !py-2 text-xs" 
                    icon={<Play size={16}/>}
                    onClick={() => openModal(project, 'video')}
                  >
                    VIDEO
                  </Button>
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
        project={selectedProject} 
        type={modalType} 
      />
    </section>
  );
};

export default ProjectSection;