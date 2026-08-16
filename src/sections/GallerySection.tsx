import React, { useState } from 'react';
import { Eye, Instagram, Sparkles, Filter } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/gallery';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCat, setSelectedCat] = useState<string>('ALL');

  const categories = ['ALL', 'PERFORMANCES', 'WORKSHOPS', 'EVENTS', 'TRAINING', 'LIFESTYLE'];

  const filteredItems = selectedCat === 'ALL'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(g => g.category === selectedCat);

  return (
    <section id="gallery" className="py-24 bg-brand-dark/95 border-t border-brand-border/60 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL PORTFOLIO</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            PERFORMANCE & <span className="text-brand-yellow">GALLERY</span>
          </h2>

          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            Snapshots of live showcases, intensive masterclasses, studio rehearsals, and urban dance lifestyle.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCat === cat
                  ? 'bg-brand-yellow text-brand-dark shadow-yellow-glow scale-105'
                  : 'bg-brand-card border border-brand-border text-brand-gray hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border/80 cursor-pointer hover:border-brand-yellow transition-all duration-500 shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-purple/40 border border-brand-purple/60 text-white font-bold text-[9px] uppercase tracking-wider">
                  {item.category}
                </span>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h3>

                <p className="text-brand-gray text-xs line-clamp-1">
                  {item.caption}
                </p>
              </div>

              {/* Hover Eye Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-yellow-glow">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
