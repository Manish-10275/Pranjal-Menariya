import React from 'react';
import { X, Play, Volume2, Sparkles, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl bg-brand-card border border-brand-border rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-brand-border/60 flex items-center justify-between bg-brand-dark/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 border border-brand-yellow text-brand-yellow flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                PRANJAL SHOWREEL & PERFORMANCE HIGHLIGHTS
              </h3>
              <p className="text-brand-gray text-xs">
                Featured Urban & Hip-Hop Choreography Routines (@pranjal_menaria08)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-brand-dark text-brand-gray hover:text-white border border-brand-border hover:border-brand-yellow transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          {/* Visual video backdrop mockup */}
          <img
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
            alt="Pranjal Dance Reel"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/60" />

          {/* Central Play Badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 space-y-4">
            <div className="w-20 h-20 rounded-full bg-brand-yellow/90 hover:bg-brand-yellow text-brand-dark flex items-center justify-center shadow-yellow-glow cursor-pointer transition-all duration-300 hover:scale-110">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/40 border border-brand-purple/60 text-brand-light text-xs font-bold uppercase tracking-wider">
                INSTAGRAM REELS & PERFORMANCES
              </span>
              <h4 className="font-display text-2xl font-bold text-white">
                CHOREOGRAPHY & URBAN STAGE HIGHLIGHTS
              </h4>
              <p className="text-brand-gray text-xs max-w-md mx-auto">
                Discover more than 90+ dance reels, freestyle sessions, and workshop highlights directly on Instagram.
              </p>
            </div>

            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <span>WATCH ALL REELS ON INSTAGRAM</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-brand-dark/80 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-gray">
          <span>{SITE_CONFIG.instagram.handle} • {SITE_CONFIG.instagram.posts} Content Reels</span>
          <button
            onClick={onClose}
            className="text-brand-yellow font-bold uppercase hover:underline"
          >
            CLOSE PLAYER
          </button>
        </div>

      </div>
    </div>
  );
};
