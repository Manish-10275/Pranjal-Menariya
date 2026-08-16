import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Instagram, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    window.open(createWhatsAppUrl(formData), '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
                LET'S <span className="text-brand-yellow">DANCE</span>
              </h2>

              <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                Have questions about batch timings, fee structures, private choreography, or workshop collaborations? Send us a message!
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border/80 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading text-xs font-bold text-white uppercase">ACADEMY STUDIO LOCATION</div>
                  <div className="text-brand-gray mt-0.5">{SITE_CONFIG.location.address}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border/80 flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading text-xs font-bold text-white uppercase">WHATSAPP DIRECT</div>
                  <div className="text-brand-gray mt-0.5">{SITE_CONFIG.whatsapp.displayNumber}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border/80 flex items-start gap-4">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading text-xs font-bold text-white uppercase">INSTAGRAM DIRECT</div>
                  <div className="text-brand-gray mt-0.5">{SITE_CONFIG.instagram.handle}</div>
                </div>
              </div>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP PRANJAL DIRECTLY</span>
            </a>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-3xl p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">
                  SEND AN ENQUIRY
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white placeholder-brand-gray focus:border-brand-yellow focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white placeholder-brand-gray focus:border-brand-yellow focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white placeholder-brand-gray focus:border-brand-yellow focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1">INTERESTED IN</label>
                    <select
                      value={formData.interest}
                      onChange={e => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white focus:border-brand-yellow focus:outline-none"
                    >
                      <option value="Dance Classes">Regular Dance Classes</option>
                      <option value="Workshops">Upcoming Workshop</option>
                      <option value="Choreography">Private Choreography / Wedding</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white mb-1">YOUR MESSAGE</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dance goals..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white placeholder-brand-gray focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 py-3.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-xs uppercase tracking-wider shadow-yellow-glow transition-all"
                  >
                    SEND ENQUIRY →
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full sm:w-1/2 py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CHAT ON WHATSAPP</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-brand-yellow mx-auto" />
                <h3 className="font-display text-3xl font-bold text-white">MESSAGE SENT!</h3>
                <p className="text-brand-gray text-xs sm:text-sm">
                  Thank you, <span className="text-brand-yellow font-bold">{formData.name}</span>. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs font-bold uppercase"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
