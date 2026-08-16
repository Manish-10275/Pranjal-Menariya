import React from 'react';
import { Award, Trophy, Star, CheckCircle, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>CREDIBILITY & MILESTONES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            MILESTONES & <span className="text-brand-yellow">ACHIEVEMENTS</span>
          </h2>

          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            A journey built on consistent practice, performance execution, and empowering dancers across the community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-yellow via-brand-purple to-brand-border -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10">
            {ACHIEVEMENTS_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-yellow text-brand-yellow flex items-center justify-center font-bold text-xs z-10 shadow-yellow-glow mb-4 sm:mb-0">
                    <Star className="w-4 h-4 fill-current" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <div className="p-6 rounded-3xl bg-brand-card border border-brand-border hover:border-brand-yellow/50 transition-all duration-300 shadow-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-brand-yellow">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-[10px] font-bold uppercase">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-brand-gray text-xs leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-brand-light/90 border-t border-brand-border/40">
                        <span className="text-brand-gray">{item.location}</span>
                        <span className="font-bold text-brand-yellow flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-brand-yellow" />
                          {item.highlight}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
