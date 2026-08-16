import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl();

  return (
    <>
      {/* Desktop Floating Badge (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-extrabold pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-dark/95 backdrop-blur-lg border-t border-brand-border p-3 shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-emerald-500 active:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WHATSAPP PRANJAL NOW</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
};
