import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: (preselectedClass?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'classes', 'workshops', 'achievements', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CLASSES', href: '#classes', id: 'classes' },
    { label: 'WORKSHOPS', href: '#workshops', id: 'workshops' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/70 py-3.5 shadow-xl' 
        : 'bg-gradient-to-b from-brand-dark/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-yellow via-brand-yellow to-brand-purple p-0.5 shadow-yellow-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-yellow group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-wider text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                {SITE_CONFIG.academyName}
              </span>
              <span className="text-[10px] tracking-widest text-brand-gray uppercase font-semibold">
                Dancer • Choreographer • Mentor
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`px-3 py-1.5 text-xs tracking-wider font-semibold uppercase transition-all duration-200 relative group ${
                    isActive ? 'text-brand-yellow font-bold' : 'text-brand-light/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow rounded-full shadow-yellow-glow" />
                  )}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-cardHover text-brand-light hover:text-brand-yellow transition-all duration-200 group"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-yellow-glow hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 rounded-lg bg-brand-yellow text-brand-dark font-bold text-xs uppercase shadow-yellow-glow"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-brand-border bg-brand-card text-white hover:text-brand-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-brand-dark/95 backdrop-blur-xl border-b border-brand-border p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`text-lg font-bold uppercase tracking-wider py-2 border-b border-brand-border/40 transition-colors flex items-center justify-between ${
                  activeSection === item.id ? 'text-brand-yellow' : 'text-brand-light/90'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-2 h-2 rounded-full bg-brand-yellow shadow-yellow-glow" />}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 rounded-xl bg-brand-yellow text-brand-dark font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-yellow-glow"
              >
                <span>JOIN CLASSES NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP PRANJAL</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
