import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" />
            <span>STUDENT REVIEWS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            WHAT OUR <span className="text-brand-yellow">DANCERS SAY</span>
          </h2>

          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            Real feedback from beginners, intermediate dancers, workshop attendees, and parents.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-brand-card border border-brand-border/80 space-y-4 hover:border-brand-yellow/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-brand-yellow">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-[10px] font-bold uppercase">
                    {item.badge}
                  </span>
                </div>

                <p className="text-brand-light/90 text-xs leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 border border-brand-yellow text-brand-yellow flex items-center justify-center font-bold text-xs">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white uppercase">{item.name}</div>
                  <div className="text-[10px] text-brand-gray">{item.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
