import React from 'react';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-cta-gradient relative overflow-hidden text-center border-t border-brand-border/80">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow text-brand-yellow text-xs font-bold uppercase tracking-widest shadow-yellow-glow">
          <Zap className="w-4 h-4 fill-current" />
          <span>START YOUR DANCE JOURNEY TODAY</span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight leading-none">
          READY TO START YOUR <br />
          <span className="text-brand-yellow">DANCE JOURNEY?</span>
        </h2>

        <p className="text-brand-gray text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you're starting from zero or looking to level up your performance execution, let's dance. Book a trial class or reserve your workshop spot now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-yellow-glow hover:scale-105 transition-all"
          >
            <span>JOIN A CLASS NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-emerald-500/60 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>BOOK A WORKSHOP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
