import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sparkles, Send } from 'lucide-react';
import { ActivePage } from '../types';
import footerLogo from '../assets/images/flysmart_logo_1779273756574.png';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-8 border-t-2 border-primary-gold/35 relative overflow-hidden">
      {/* Decorative vectors inside dark footer */}
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 bg-primary-red/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute left-[-100px] top-[-100px] w-96 h-96 bg-primary-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Left column: Brand & Mission coordinates */}
        <div className="lg:col-span-4 space-y-6">
          <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-12 h-12 rounded-full border border-primary-gold bg-white p-0.5 transition-transform group-hover:scale-105">
              <img
                src={footerLogo}
                alt="Flysmart Travel Emblem"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/footerlogo/100/100";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-display tracking-tight text-white leading-none group-hover:text-primary-gold transition-colors duration-200">
                FLYSMART
              </span>
              <span className="text-[9px] tracking-widest font-sans uppercase text-neutral-400">
                TRAVEL & TOUR
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
            An authorized GSA partner bringing structural efficiency and comfort to transatlantic flights, Freetown airport speedboat crossings, luxury car leasing and concierge hotel packages with verified safety records.
          </p>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 text-amber-500 h-9 rounded-full bg-white/5 hover:bg-primary-red hover:text-white flex items-center justify-center border border-white/10 transition-colors duration-200 cursor-pointer">
              <Facebook className="w-4 h-4 text-white hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gold hover:text-primary-red flex items-center justify-center border border-white/10 transition-colors duration-200 cursor-pointer">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-red hover:text-white flex items-center justify-center border border-white/10 transition-colors duration-200 cursor-pointer">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gold hover:text-primary-red flex items-center justify-center border border-white/10 transition-colors duration-200 cursor-pointer">
              <Linkedin className="w-4 h-4 text-white hover:text-primary-red transition-colors" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick navigation links */}
        <div className="lg:col-span-2 space-y-4 text-left">
          <h4 className="text-sm font-bold font-display text-primary-gold uppercase tracking-wider">
            Quick Nav
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-white hover:translate-x-1 transition-transform tracking-wide cursor-pointer">
                Home Base
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-white hover:translate-x-1 transition-transform tracking-wide cursor-pointer">
                Corporate Profile
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white hover:translate-x-1 transition-transform tracking-wide cursor-pointer">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-white hover:translate-x-1 transition-transform tracking-wide cursor-pointer">
                Inquiry Desk
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate branch offices info */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="text-sm font-bold font-display text-primary-gold uppercase tracking-wider">
            Our Bureaus
          </h4>
          <ul className="space-y-4 text-xs text-neutral-400">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Freetown Headquarters</span>
                <span className="leading-relaxed font-light">26 Liverpool Street, Freetown, Sierra Leone</span>
              </div>
            </li>
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">USA East Coast Liaison</span>
                <span className="leading-relaxed font-light">Rockville, Maryland, 20850 USA</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter or Hot Promotion Alerts */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="text-sm font-bold font-display text-primary-gold uppercase tracking-wider">
            Transatlantic Alert
          </h4>
          <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
            Subscribe to get immediate notification on flight promotions, pricing codeshare contracts and ferry crossways schedules.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2 mt-4">
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary-gold text-white"
              placeholder="Enter corporate email"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary-gold text-primary-red hover:bg-opacity-95 text-xs font-bold py-2.5 rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Subscribe Now</span>
            </button>
          </form>
        </div>

      </div>

      {/* Bottom disclaimer, helpline dialer and credit bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-sans">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <p>© {currentYear} Flysmart Travel and Tour. All rights reserved.</p>
          <p className="text-[10px] sm:border-l sm:border-white/10 sm:pl-6 leading-relaxed">
            IATA Authorized GSA Partner Desks. Freetown & Maryland
          </p>
        </div>
        
        <div className="flex items-center space-x-2 text-neutral-400 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-primary-gold animate-pulse" />
          <span>Slogan: "We travel with you to your destination"</span>
        </div>
      </div>
    </footer>
  );
}
