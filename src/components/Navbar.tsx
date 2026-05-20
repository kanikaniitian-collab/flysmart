import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from '../types';
import logoImg from '../assets/images/flysmart_logo_1779273756574.png';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ] as const;

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar - Information */}
      <div className="bg-primary-red text-white py-2 px-4 sm:px-6 lg:px-8 text-xs font-sans transition-all duration-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 hover:text-primary-gold transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-primary-gold" />
              <span>+232 76 450887 / +1 (301) 281-7052</span>
            </span>
            <span className="flex items-center space-x-1 hover:text-primary-gold transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 text-primary-gold" />
              <span>flysmarttraveltour@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] tracking-wider uppercase bg-primary-gold/20 text-primary-gold px-2 py-0.5 rounded border border-primary-gold/30 font-semibold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 animate-pulse" /> Global Travel Partner
            </span>
            <span className="flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-primary-gold" />
              <span>Freetown, SL & MD, USA</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-primary-gold/10'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-primary-gold/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary-gold bg-white overflow-hidden flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-md">
                <img
                  src={logoImg}
                  alt="Flysmart Travel Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to inline logo SVG design
                    e.currentTarget.src = "https://picsum.photos/seed/flightlogo/100/100";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display tracking-tight text-primary-red leading-none group-hover:text-primary-gold transition-colors duration-200">
                  FLYSMART
                </span>
                <span className="text-[10px] tracking-widest font-sans uppercase font-medium text-charcoal/80">
                  TRAVEL & TOUR
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium font-display transition-colors duration-200 rounded-full ${
                    activePage === item.id
                      ? 'text-primary-red'
                      : 'text-charcoal/80 hover:text-primary-red'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activePage === item.id && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary-gold/15 rounded-full border border-primary-gold/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => navigateTo('contact')}
                className="bg-primary-red text-white font-display text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:bg-opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center space-x-2 border border-primary-gold/30 group cursor-pointer"
              >
                <span>Enquire Now</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="text-primary-gold font-bold"
                >
                  →
                </motion.span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal focus:outline-none p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white/95 border-t border-neutral-100 mt-2 px-4 py-4 space-y-2 shadow-inner overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium font-display transition-all duration-200 ${
                      activePage === item.id
                        ? 'bg-primary-red text-white shadow-sm'
                        : 'text-charcoal hover:bg-neutral-50 hover:text-primary-red'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile Info & CTA */}
              <div className="pt-4 border-t border-neutral-100 mt-4 space-y-3">
                <div className="text-xs text-charcoal/70 space-y-2 px-3">
                  <p className="flex items-center gap-2 font-medium text-primary-red">
                    <Phone className="w-3.5 h-3.5" /> +232 76 450887 | +1 (301) 281-7052
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-primary-gold" /> flysmarttraveltour@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full bg-primary-gold text-primary-red font-display text-center py-3 rounded-xl font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
                >
                  Instant Free Inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
