import React from 'react';
import { ArrowRight, Play, Sparkles, Instagram, Youtube, MessageSquare, Zap } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

interface HeroSectionProps {
  onOpenBooking: (style?: string) => void;
  onOpenShowreel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenShowreel }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-dark">
      
      {/* Background Visual Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/pranjal_action.jpg"
          alt="Urban Dance Background"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      </div>

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card/90 border border-brand-yellow/40 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-8 shadow-yellow-glow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{SITE_CONFIG.eyebrow}</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[0.95] max-w-5xl mx-auto mb-6">
          WE DON'T JUST TEACH DANCE.<br />
          WE BUILD{' '}
          <span className="text-brand-yellow underline decoration-brand-purple decoration-wavy decoration-2 underline-offset-8 drop-shadow-[0_0_25px_rgba(255,196,0,0.4)]">
            CONFIDENCE.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-brand-gray text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {SITE_CONFIG.heroSubheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-yellow-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>JOIN CLASSES</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-card/80 hover:bg-brand-card border border-brand-border hover:border-brand-purple text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-purple-glow hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-brand-purple/30 text-brand-purple border border-brand-purple/60 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>WATCH SHOWREEL</span>
          </button>
        </div>

        {/* Dancer Persona Chip & Social Links */}
        <div className="pt-8 border-t border-brand-border/40 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-purple/30 border border-brand-purple/60 p-0.5 overflow-hidden">
              <img
                src="/images/about/pranjal_portrait.jpg"
                alt="Pranjal Dancer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-white uppercase tracking-wider">{SITE_CONFIG.ownerName}</div>
              <div className="text-brand-gray text-[10px] uppercase">{SITE_CONFIG.subtitle}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-brand-gray">
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>{SITE_CONFIG.instagram.handle}</span>
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
