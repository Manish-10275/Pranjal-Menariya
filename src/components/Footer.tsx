import React from 'react';
import { Instagram, MessageSquare, Mail, MapPin, ArrowUp, Zap } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/80 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-dark flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                {SITE_CONFIG.academyName}
              </span>
            </div>
            <p className="text-brand-gray text-xs leading-relaxed">
              Empowering dancers with rhythm, urban musicality, performance confidence, and authentic street culture. Founded by professional dancer & choreographer Pranjal.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-gray hover:text-brand-yellow hover:border-brand-yellow/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-gray hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-gray hover:text-brand-purple hover:border-brand-purple/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-widest uppercase mb-4 text-brand-yellow">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-gray font-medium">
              {['Home', 'About Pranjal', 'Dance Classes', 'Workshops', 'Achievements', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '').replace('us', '')}`}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover:bg-brand-yellow transition-colors" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dance Programs */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-widest uppercase mb-4 text-brand-purple">
              PROGRAMS & STYLES
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-gray font-medium">
              <li>Urban Hip-Hop Foundation</li>
              <li>Choreography & Musicality</li>
              <li>Commercial Bollywood Fusion</li>
              <li>Contemporary Street Flow</li>
              <li>1-on-1 Mentorship & Video Reels</li>
              <li>Wedding & Event Choreography</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white tracking-widest uppercase mb-4 text-brand-yellow">
              STUDIO & CONTACT
            </h4>
            <div className="flex items-start gap-3 text-xs text-brand-gray">
              <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.location.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-gray">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp: {SITE_CONFIG.whatsapp.displayNumber}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-gray">
              <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
              <span>{SITE_CONFIG.instagram.handle} ({SITE_CONFIG.instagram.followers} Dancers)</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.academyName}. All rights reserved. Designed for performance & growth.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-card border border-brand-border text-brand-light hover:border-brand-yellow hover:text-brand-yellow transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
