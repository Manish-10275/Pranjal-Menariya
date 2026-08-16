import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const InstagramSection: React.FC = () => {
  const igPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80',
      likes: '482',
      comments: '39',
      caption: 'Urban Hip-Hop Routine with the intermediate squad 🔥 #PranjalDance #UrbanDance'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
      likes: '621',
      comments: '54',
      caption: 'Stage presence breakdown from last week’s showcase performance ✨'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80',
      likes: '395',
      comments: '28',
      caption: 'Commercial Bollywood fusion masterclass vibes! Energy was unreal 🚀'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=600&q=80',
      likes: '512',
      comments: '41',
      caption: 'Freestyle session after class. Body isolations & groove focus 💯'
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/50 text-pink-400 text-xs font-bold uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5" />
            <span>FOLLOW THE JOURNEY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            CONNECT ON <span className="text-pink-500">{SITE_CONFIG.instagram.handle}</span>
          </h2>

          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            Over {SITE_CONFIG.instagram.followers} passionate dancers & {SITE_CONFIG.instagram.posts} choreography reels. Check out our daily studio routines and freestyle sessions.
          </p>

          <div className="pt-2">
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW @pranjal_menaria08</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* IG Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {igPosts.map((post) => (
            <a
              key={post.id}
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border hover:border-pink-500/60 transition-all duration-300 shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt="Instagram Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                <div className="flex items-center gap-4 text-xs font-bold text-white">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-pink-500 fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-brand-yellow fill-current" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-brand-light/90 text-xs line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
