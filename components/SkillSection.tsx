import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Tech Stack</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-slate-100 pb-12 last:border-0 last:pb-0"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-5">
                {skillGroup.category}
              </h3>
              
              <div className="text-lg text-slate-600 leading-relaxed font-normal">
                {skillGroup.skills.map((skill, i) => (
                  <React.Fragment key={skill}>
                    <span className="hover:text-blue-700 transition-colors duration-200">
                      {skill}
                    </span>
                    {i < skillGroup.skills.length - 1 && (
                      <span className="mx-2.5 text-slate-300 font-light">/</span>
                    )}
                  </React.Fragment>
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