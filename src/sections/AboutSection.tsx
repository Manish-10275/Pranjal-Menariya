import React from 'react';
import { ArrowRight, CheckCircle, Award, Sparkles, UserCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border/80 bg-brand-card shadow-2xl group">
              <img
                src="/images/about/pranjal_portrait.jpg"
                alt="Pranjal Dancer & Choreographer"
                className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

              {/* Signature badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/90 backdrop-blur-md border border-brand-yellow/30 shadow-yellow-glow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-2xl font-bold text-white tracking-wider">
                      {SITE_CONFIG.ownerName}
                    </div>
                    <div className="text-brand-yellow text-xs font-bold uppercase tracking-wider">
                      {SITE_CONFIG.subtitle}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-3xl -z-10 blur-xl" />
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE MENTOR</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-none">
              TRANSFORMING PASSION INTO <span className="text-brand-yellow">STAGE CONFIDENCE</span>
            </h2>

            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
              Pranjal is a professional dancer, choreographer, performer, and mentor dedicated to helping dancers of all levels break through self-doubt, build core street rhythm, and command the stage with authority.
            </p>

            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
              With a growing community of over 2,000+ dancers on Instagram (@pranjal_menaria08) and 90+ choreographic performances, Pranjal Dance Academy was founded to deliver structured, high-energy dance education in Urban, Hip-Hop, and Commercial Bollywood.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Structured Curriculum", desc: "Step-by-step progression from basics to stage" },
                { title: "Performance Mindset", desc: "Focus on camera confidence & facial expressions" },
                { title: "Authentic Street Culture", desc: "Pure urban grooves, musicality & cyphers" },
                { title: "Personal Mentorship", desc: "Individual feedback & choreography career guidance" }
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-brand-card border border-brand-border/60 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading text-xs font-bold text-white uppercase">{item.title}</div>
                    <div className="text-[11px] text-brand-gray">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-yellow-glow transition-all"
              >
                <span>MEET PRANJAL & START</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
