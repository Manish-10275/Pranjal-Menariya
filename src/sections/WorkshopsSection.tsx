import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Bell, Sparkles } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/workshops';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

interface WorkshopsSectionProps {
  onOpenBooking: (style?: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onOpenBooking }) => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSuccess(true);
    }
  };

  return (
    <section id="workshops" className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTENSIVE MASTERCLASSES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            UPCOMING <span className="text-brand-yellow">DANCE WORKSHOPS</span>
          </h2>

          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            High-intensity masterclass bootcamps designed for fast choreographic growth, camera performance shoots, and musicality breakthroughs.
          </p>
        </div>

        {/* Workshop Cards */}
        {WORKSHOPS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {WORKSHOPS_DATA.map((ws) => (
              <div
                key={ws.id}
                className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden hover:border-brand-purple/60 transition-all duration-300 shadow-2xl flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 relative bg-black">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover min-h-[220px]"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-yellow text-brand-dark font-extrabold text-[10px] uppercase tracking-wider">
                    {ws.seatsLeft} SEATS LEFT
                  </span>
                </div>

                <div className="sm:w-3/5 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-brand-purple uppercase tracking-widest">
                      {ws.style} • {ws.instructor}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                      {ws.title}
                    </h3>
                    <p className="text-brand-gray text-xs leading-relaxed">
                      {ws.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-brand-light/90 border-t border-brand-border/60 pt-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                      <span>{ws.date} ({ws.time})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>{ws.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[10px] text-brand-gray uppercase">FEE</span>
                      <div className="font-display text-xl font-bold text-brand-yellow">{ws.price}</div>
                    </div>

                    <button
                      onClick={() => onOpenBooking(`Workshop: ${ws.title}`)}
                      className="px-5 py-2.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-yellow-glow transition-all"
                    >
                      <span>RESERVE SPOT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Waitlist Box */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-border p-8 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple text-brand-purple mx-auto flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
            WANT TO BE NOTIFIED ABOUT THE NEXT WORKSHOP?
          </h3>

          <p className="text-brand-gray text-xs sm:text-sm max-w-lg mx-auto">
            Join the priority waitlist to get early-bird registration links for upcoming Pranjal masterclasses and city tours.
          </p>

          {!waitlistSuccess ? (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="w-full sm:w-2/3 bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-xs text-white placeholder-brand-gray focus:border-brand-yellow focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-1/3 py-3 rounded-xl bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-xs uppercase tracking-wider shadow-purple-glow transition-all"
              >
                JOIN WAITLIST
              </button>
            </form>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              YOU'RE ON THE PRIORITY WAITLIST! WE'LL NOTIFY YOU FIRST.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
