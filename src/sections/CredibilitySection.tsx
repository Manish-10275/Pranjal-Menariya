import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const CredibilitySection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-card border-y border-brand-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Stage Shows */}
          <div className="p-6 rounded-3xl bg-brand-dark border border-brand-border/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              PERFORMED & CHOREOGRAPHED AT
            </h3>
            <ul className="space-y-2 text-xs text-brand-gray">
              {SITE_CONFIG.credibility.performedAt.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Featured In */}
          <div className="p-6 rounded-3xl bg-brand-dark border border-brand-border/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 text-brand-purple flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              FEATURED IN & RECOGNIZED BY
            </h3>
            <ul className="space-y-2 text-xs text-brand-gray">
              {SITE_CONFIG.credibility.featuredIn.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Certifications */}
          <div className="p-6 rounded-3xl bg-brand-dark border border-brand-border/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              TRAINING & CERTIFICATIONS
            </h3>
            <ul className="space-y-2 text-xs text-brand-gray">
              {SITE_CONFIG.credibility.certifications.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
