import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Cloud } from 'lucide-react';
import { SKILLS } from '../constants';

const SkillSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Language': return <Code size={24} />;
      case 'Backend': return <Server size={24} />;
      case 'Frontend': return <Layout size={24} />;
      case 'Infra': return <Cloud size={24} />;
      default: return <Code size={24} />;
    }
  };

  const getKoreanCategory = (category: string) => {
    switch (category) {
      case 'Language': return '언어';
      case 'Backend': return '백엔드';
      case 'Frontend': return '프론트엔드';
      case 'Infra': return '인프라';
      default: return category;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tech Stack</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto break-keep">
            확장 가능한 AI 시스템과 직관적인 사용자 인터페이스를 구축하기 위해 사용하는 주요 기술들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{getKoreanCategory(skillGroup.category)}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-md border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;