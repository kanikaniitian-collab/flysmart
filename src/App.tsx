import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ActivePage } from './types';
import { Sparkles, Phone, HelpCircle, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [prefilledService, setPrefilledService] = useState<string>('Air tickets Booking');

  // Smooth scroll helper when switching pages
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Callback from Hero search or Services grid buttons
  const handleServiceInquiryRedirect = (serviceType: string, searchData?: any) => {
    // Standardize name matching our Contact enum selectors
    let formattedService = 'Air tickets Booking';
    if (serviceType.toLowerCase().includes('flight')) formattedService = 'Air Tickets Booking';
    else if (serviceType.toLowerCase().includes('hotel')) formattedService = 'Hotel Booking';
    else if (serviceType.toLowerCase().includes('car')) formattedService = 'Car Rental';
    else if (serviceType.toLowerCase().includes('sea') || serviceType.toLowerCase().includes('taxi')) formattedService = 'Sea Taxi Booking';
    else formattedService = serviceType; // exact name match

    setPrefilledService(formattedService);
    setActivePage('contact');
    
    // Smooth scroll down to the contact and enquiry form anchor
    setTimeout(() => {
      const contactSec = document.getElementById('inquiry-form-section');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };

  return (
    <div className="min-h-screen bg-white text-charcoal flex flex-col justify-between selection:bg-primary-gold/35 selection:text-primary-red">
      
      {/* Dynamic Header & Upper Help desk line */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Container with Page View Transitions */}
      <main className="flex-grow pt-16 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <>
                {/* 1. Immersive Hero Background + Live Inquiry Widget */}
                <Hero onServiceSearch={handleServiceInquiryRedirect} />

                {/* 2. Interactive Enterprise Services */}
                <Services onSelectService={handleServiceInquiryRedirect} />

                {/* 4. Mini Storytelling Preview Grid */}
                <div className="bg-neutral-50 py-20 border-t border-b border-neutral-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
                      <span className="text-xs font-bold tracking-wider text-primary-red uppercase px-3 py-1 bg-primary-red/5 rounded-full border border-primary-red/15">
                        Transatlantic Trust
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight leading-tight text-charcoal">
                        Guaranteeing Smooth Trajectories Between Freetown & North America
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                        As an IATA-aligned GSA partner, Flysmart solves complicated multi-segment pricing and Marine speed coach docking. We align tickets, hotel packages and vetted luxury vehicles to ensure continuous security.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-xs text-charcoal/80">
                          <span className="w-2 h-2 rounded-full bg-primary-gold" />
                          <span>Direct local desks at Freetown core wharf stations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-charcoal/80">
                          <span className="w-2 h-2 rounded-full bg-primary-red" />
                          <span>Complete Codeshare partnerships with Star Alliance / SkyTeam carriers</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handlePageChange('about')}
                        className="text-xs font-extrabold text-primary-red uppercase tracking-widest hover:text-primary-gold flex items-center space-x-1 transition-colors group cursor-pointer pt-2"
                      >
                        <span>Learn our corporate ancestry</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>

                    {/* Fun statistics panels layout */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm text-left">
                        <div className="text-3xl font-extrabold text-primary-gold font-display">100%</div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400">Accurate Tickets</span>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm text-left">
                        <div className="text-3xl font-extrabold text-primary-red font-display">25 Min</div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400">Speedboat Link</span>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm text-left col-span-2">
                        <div className="text-2xl font-bold font-display text-charcoal">" Comfort & Confidence "</div>
                        <span className="text-[10px] font-bold uppercase text-neutral-450">Our Official Slogan Promise</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Live Booking & Inquiry Desk */}
                <Contact prefilledService={prefilledService} />
              </>
            )}

            {activePage === 'about' && (
              <About />
            )}

            {activePage === 'services' && (
              <Services onSelectService={handleServiceInquiryRedirect} />
            )}

            {activePage === 'contact' && (
              <Contact prefilledService={prefilledService} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate footer */}
      <Footer onNavigate={handlePageChange} />

    </div>
  );
}
