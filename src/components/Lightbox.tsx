import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../data/gallery';
import { SITE_CONFIG } from '../config/siteConfig';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in">
      
      {/* Controls */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-3 rounded-full bg-brand-card/80 border border-brand-border text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-brand-card/80 border border-brand-border text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors hidden sm:flex"
        aria-label="Previous item"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-brand-card/80 border border-brand-border text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors hidden sm:flex"
        aria-label="Next item"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative max-w-5xl w-full bg-brand-card border border-brand-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Media View */}
        <div className="flex-1 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[450px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-border/60 bg-brand-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {item.category}
              </span>
              <span className="text-brand-gray text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.date}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
              {item.title}
            </h3>

            <p className="text-brand-gray text-xs leading-relaxed">
              {item.caption}
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-brand-yellow text-brand-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-yellow-glow"
            >
              <Instagram className="w-4 h-4" />
              <span>VIEW ON INSTAGRAM</span>
            </a>
            
            <div className="flex items-center justify-between text-xs text-brand-gray sm:hidden">
              <button onClick={onPrev} className="px-4 py-2 rounded-lg bg-brand-dark border border-brand-border">PREV</button>
              <button onClick={onNext} className="px-4 py-2 rounded-lg bg-brand-dark border border-brand-border">NEXT</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
