import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Sparkles, User, Phone, Mail, MapPin, Calendar, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';
import { CLASSES_DATA } from '../data/classes';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedClass?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedClass }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    experience: 'Beginner',
    style: preselectedClass || 'Hip Hop Foundation',
    batch: 'Evening Batch',
    city: SITE_CONFIG.location.city,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedClass) {
      setFormData(prev => ({ ...prev, style: preselectedClass }));
    }
  }, [preselectedClass]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFC400', '#7C3AED', '#ffffff']
    });
  };

  const handleDirectWhatsApp = () => {
    const url = createWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden">
        
        {/* Glow Accents */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-purple/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-brand-dark/80 text-brand-gray hover:text-white border border-brand-border hover:border-brand-yellow transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>FREE TRIAL & BATCH ENQUIRY</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              JOIN PRANJAL DANCE ACADEMY
            </h3>
            <p className="text-brand-gray text-xs sm:text-sm mb-6 leading-relaxed">
              Fill out your details to request batch timings or reserve a free trial session. We'll connect with you right away!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">FULL NAME *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-gray absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">AGE *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 18"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">PHONE / WHATSAPP *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-gray absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">EMAIL ADDRESS</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-brand-gray absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">PREFERRED DANCE STYLE</label>
                  <select
                    value={formData.style}
                    onChange={e => setFormData({ ...formData, style: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-brand-yellow focus:outline-none transition-colors"
                  >
                    {CLASSES_DATA.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">DANCE EXPERIENCE</label>
                  <select
                    value={formData.experience}
                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-brand-yellow focus:outline-none transition-colors"
                  >
                    <option value="Absolute Beginner">Absolute Beginner (Zero experience)</option>
                    <option value="Beginner">Beginner (Basic rhythm)</option>
                    <option value="Intermediate">Intermediate (Danced before)</option>
                    <option value="Advanced">Advanced / Professional</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">PREFERRED BATCH</label>
                  <select
                    value={formData.batch}
                    onChange={e => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-brand-yellow focus:outline-none transition-colors"
                  >
                    <option value="Evening Batch">Weekday Evening Batch</option>
                    <option value="Weekend Batch">Weekend Intensive Batch</option>
                    <option value="Private Mentorship">Private 1-on-1 Session</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-light/90 mb-1">CITY / LOCATION</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-brand-gray absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-light/90 mb-1">MESSAGE / ANY QUESTIONS</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your dance goals or questions..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-border rounded-xl p-3 text-xs text-white placeholder-brand-gray/60 focus:border-brand-yellow focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-xs uppercase tracking-wider shadow-yellow-glow transition-all"
                >
                  REQUEST FREE TRIAL →
                </button>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full sm:w-1/2 py-3 rounded-xl border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SEND VIA WHATSAPP</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-brand-yellow/20 text-brand-yellow border border-brand-yellow mx-auto flex items-center justify-center shadow-yellow-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white">
              YOU'RE ON THE LIST!
            </h3>
            <p className="text-brand-gray text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-brand-yellow font-bold">{formData.name}</span>. We've received your enquiry for <span className="text-white font-semibold">{formData.style}</span>. We'll contact you shortly with full batch timings and location details.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleDirectWhatsApp}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>OPEN WHATSAPP CHAT NOW</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-brand-dark border border-brand-border text-brand-gray hover:text-white font-bold text-xs uppercase tracking-wider"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
