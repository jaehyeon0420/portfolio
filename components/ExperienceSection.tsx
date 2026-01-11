import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import Button from './Button';

const ExperienceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Scroll by one card width approximately (300px + gap)
      const scrollAmount = 320; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col items-center justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Education</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          </motion.div>
          
          <div className="flex gap-2 mt-6 md:absolute md:right-0 md:bottom-1 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
              aria-label="Previous experience"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
              aria-label="Next experience"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 
            Horizontal Scroll Container 
            We want to show 3.5 items. 
            On desktop (md+):
            Container width = 100%
            Gap = 24px (gap-6)
            Item width calculation:
            To fit 3.5 items: 100% / 3.5 ≈ 28.57% width per item.
            We use flex-none and a calculated width.
        */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXPERIENCES.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-none snap-start w-[85vw] sm:w-[45vw] md:w-[calc(100%/3.5-16px)]"
            >
              <div className="h-full bg-white border border-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col relative overflow-hidden group">
                 {/* Top accent bar */}
                 <div className={`absolute top-0 left-0 w-full h-1 ${item.type === 'Education' ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                 
                 <div className="flex items-start justify-between mb-4 mt-2">
                    <div className={`p-2 rounded-lg ${item.type === 'Education' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {item.type === 'Education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${item.type === 'Education' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {item.type === 'Education' ? '교육' : '경력'}
                    </span>
                 </div>

                 <h3 className="text-lg font-bold text-slate-900 mb-1">{item.company}</h3>
                 <p className="text-blue-600 font-medium mb-3 text-sm">{item.role}</p>
                 
                 <div className="flex items-center text-slate-400 text-xs font-medium mb-4">
                    <Calendar size={12} className="mr-1" />
                    {item.period}
                 </div>

                 <ul className="space-y-2 mt-auto">
                   {item.description.map((desc, i) => (
                     <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                       <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                       {desc}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          ))}
          {/* Spacer to allow scrolling past the last item slightly if needed */}
          <div className="w-1 flex-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;