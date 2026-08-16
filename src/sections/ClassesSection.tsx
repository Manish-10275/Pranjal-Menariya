import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, Check, Sparkles, Flame } from 'lucide-react';
import { CLASSES_DATA, DanceClass } from '../data/classes';

interface ClassesSectionProps {
  onSelectClass: (className: string) => void;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({ onSelectClass }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'HIP HOP', 'URBAN', 'BOLLYWOOD', 'CONTEMPORARY', 'CHOREOGRAPHY', 'BEGINNER'];

  const filteredClasses = selectedCategory === 'ALL' 
    ? CLASSES_DATA 
    : CLASSES_DATA.filter(c => c.category === selectedCategory);

  return (
    <section id="classes" className="py-24 bg-brand-dark/95 border-t border-brand-border/60 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            <span>EXPLORE DANCE PROGRAMS</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            FIND YOUR <span className="text-brand-yellow">RHYTHM & STYLE</span>
          </h2>
          
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            Whether you're stepping into a dance studio for the very first time or training for stage performances, our classes are crafted to level up your confidence and execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-yellow text-brand-dark shadow-yellow-glow scale-105'
                  : 'bg-brand-card border border-brand-border text-brand-gray hover:text-white hover:border-brand-yellow/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="group bg-brand-card border border-brand-border/80 rounded-3xl overflow-hidden hover:border-brand-yellow/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90" />
                  
                  {item.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-purple text-white font-extrabold text-[10px] uppercase tracking-wider shadow-lg">
                      {item.badge}
                    </span>
                  )}

                  <span className="absolute bottom-3 right-4 px-3 py-1 rounded-lg bg-brand-dark/90 border border-brand-border text-brand-yellow font-bold text-[10px] uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-brand-purple uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors mt-0.5">
                      {item.name}
                    </h3>
                    <p className="text-brand-gray text-xs mt-1 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Schedule & Duration */}
                  <div className="p-3 rounded-xl bg-brand-dark/60 border border-brand-border/40 space-y-1.5 text-xs text-brand-gray">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>{item.schedule}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="text-xs text-brand-light/90 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectClass(item.name)}
                  className="w-full py-3 rounded-xl bg-brand-dark border border-brand-border group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>EXPLORE CLASS & JOIN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
