import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-brand-card border-y border-brand-border/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 sm:divide-x divide-brand-border/40">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="p-4 space-y-1 group">
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-brand-yellow group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,196,0,0.2)]">
                {stat.value}{stat.suffix}
              </div>
              <div className="font-heading text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] text-brand-gray">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
