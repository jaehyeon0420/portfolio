import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
              Profile
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
              안녕하세요,<br/>
            </h1>
            <h1 className="text-5xl lg:text-3xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
              {PERSONAL_INFO.tagline1}
            </h1>
            <h1 className="text-5xl lg:text-3xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
              {PERSONAL_INFO.tagline2} 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {PERSONAL_INFO.name}
              </span>입니다.
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center md:items-start gap-4 text-slate-600 mb-8 text-sm font-medium">
               <div className="flex items-center gap-2">
                 <Mail size={18} className="text-blue-500" />
                 {PERSONAL_INFO.email}
               </div>
               <div className="flex items-center gap-2">
                 <Phone size={18} className="text-blue-500" />
                 {PERSONAL_INFO.phone}
               </div>
               <div className="flex items-center gap-2">
                 <MapPin size={18} className="text-blue-500" />
                 {PERSONAL_INFO.location}
               </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
               <span className="text-slate-500 text-sm italic">
                  생년월일: {PERSONAL_INFO.dob}
               </span>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-50 h-50 md:w-50 md:h-50 group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500"></div>
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name} 
                className="relative object-cover rounded-[2rem] shadow-2xl border-4 border-white z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;