import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, Phone, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-slate-300 mb-8 max-w-md text-lg leading-relaxed break-keep">
              AI 프로젝트 협업이나 최신 생성형 모델에 대한 논의에 관심이 있으시다면 언제든지 연락해 주세요.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="p-3 bg-slate-800 rounded-full text-blue-400">
                  <Mail size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                 <div className="p-3 bg-slate-800 rounded-full text-blue-400">
                   <Phone size={20} />
                 </div>
                 <span className="text-lg">{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="grid grid-cols-2 gap-4"
          >
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800 rounded-xl hover:bg-black transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <Github size={32} className="text-white group-hover:scale-110 transition-transform"/>
              <span className="font-semibold">GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800 rounded-xl hover:bg-blue-700 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <Linkedin size={32} className="text-white group-hover:scale-110 transition-transform"/>
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800 rounded-xl hover:bg-red-600 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <Youtube size={32} className="text-white group-hover:scale-110 transition-transform"/>
              <span className="font-semibold">YouTube</span>
            </a>
            <a href={SOCIAL_LINKS.velog} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800 rounded-xl hover:bg-emerald-600 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <BookOpen size={32} className="text-white group-hover:scale-110 transition-transform"/>
              <span className="font-semibold">Velog</span>
            </a>
          </motion.div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;