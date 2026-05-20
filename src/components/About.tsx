import { Target, Users2, Compass, Award, ShieldAlert, BadgeCheck, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import agencyLogo from '../assets/images/flysmart_logo_1779273756574.png';

export default function About() {
  const coreValues = [
    {
      title: 'Global Trust & Care',
      icon: BadgeCheck,
      desc: 'Accredited by IATA networks, GSA operators, and airline consolidators globally, ensuring safety.'
    },
    {
      title: 'Human-Centric Digital',
      icon: Users2,
      desc: 'Seamless quick search combined with active human-concierge physical desks at key terminals.'
    },
    {
      title: 'Infinite Precision',
      icon: Compass,
      desc: 'Flawless flight ticket combinations, direct sea connections, and luxury road transits.'
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute left-[-200px] top-[10%] w-[500px] h-[500px] bg-primary-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute right-[-200px] bottom-[10%] w-[500px] h-[500px] bg-primary-red/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Main Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Logo Badge Card Area (Left) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-[40px] bg-gradient-to-br from-neutral-50 to-white shadow-2xl border-2 border-primary-gold/20 text-center max-w-sm w-full group overflow-hidden"
            >
              {/* Subtle shining effect over logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="w-48 h-48 rounded-full border-4 border-primary-red shadow-xl mx-auto p-1 mb-6 overflow-hidden bg-white animate-pulse-slow">
                <img
                  src={agencyLogo}
                  alt="Flysmart Crest Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/agencycrest/100/100";
                  }}
                />
              </div>

              <h4 className="text-xl font-bold font-display text-primary-red uppercase tracking-wider mb-2">
                Flysmart Travel and Tour
              </h4>
              <p className="text-xs text-primary-gold font-semibold uppercase tracking-widest border-b border-neutral-100 pb-4 mb-4">
                "We travel with you to your destination"
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <MapPin className="w-4 h-4 text-primary-red" />
                  <span className="font-semibold">Freetown Office: 26 Liverpool St</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <MapPin className="w-4 h-4 text-primary-gold" />
                  <span className="font-semibold">Maryland Office: Rockville, MD, USA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Corporate Story content (Right) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[11px] font-bold tracking-wider text-primary-gold uppercase px-3 py-1 bg-primary-gold/10 rounded-full border border-primary-gold/20">
              Who We Are
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-charcoal tracking-tight leading-tight">
              A Human-Centric Legacy Built on Comfort & Confidence
            </h3>
            <div className="h-1 w-12 bg-primary-gold mt-2"></div>

            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-sans font-light">
              Founded with the bold vision to streamline transit complexities for corporations and global wanderers alike, <strong>Flysmart Travel Agency</strong> bridges West Africa and North America with complete operational cohesion.
            </p>

            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-sans font-light">
              Inspired by clean aesthetics and robust, scalable operations, we have grown from a local ticketing agency in Freetown, Sierra Leone to an international GSA provider coordinating transatlantic airlines flight allocations, luxury vehicle transits, and secure water taxi connections.
            </p>

            {/* Quote block representing their core slogan */}
            <blockquote className="border-l-4 border-primary-gold pl-4 py-1 italic text-charcoal/80 text-sm sm:text-base bg-neutral-50 rounded-r-xl pr-4">
              "We travel with you to your destination, guaranteeing safety, luxurious comfort, and complete booking accuracy so you can traverse the world with confidence."
            </blockquote>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-100">
              <div>
                <div className="text-3xl font-extrabold text-primary-red font-display">12+ Yrs</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Global Service</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-charcoal font-display">15,000+</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Fliers Served</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary-gold font-display">IATA GSA</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Accreditation</div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h4 className="text-2xl font-bold font-display text-charcoal tracking-tight">
              Our Core Cultural Coordinates
            </h4>
            <p className="text-xs text-charcoal/60 uppercase tracking-widest">
              Every flight itinerary and yacht connection rests on three pillars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-primary-gold/30 transition-all duration-300 flex flex-col items-start space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-gold/15 flex items-center justify-center text-primary-red">
                  <val.icon className="w-6 h-6 animate-float" />
                </div>
                <h5 className="text-base font-bold font-display text-charcoal">
                  {val.title}
                </h5>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini CTA visual banner inside About */}
        <div className="bg-neutral-900 rounded-[30px] p-8 sm:p-12 text-white border border-primary-gold/25 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl text-left">
          {/* Wave visual decorations inside white-on-dark card */}
          <div className="absolute right-[-100px] top-[-100px] w-64 h-64 bg-primary-gold/10 rounded-full filter blur-xl" />
          
          <div className="space-y-4 max-w-xl">
            <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white flex items-center gap-2">
              Ready to Navigate the World Seamlessly? <Sparkles className="w-5 h-5 text-primary-gold" />
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans font-light">
              Leverage our GSA allocations and corporate partner benefits. Enter your custom flight, hotel, or sea coach charter enquiry and have a vetted booking specialist construct your transit outline.
            </p>
          </div>

          <a
            href="#inquiry-form-section"
            className="bg-primary-gold hover:bg-opacity-90 text-primary-red font-semibold font-display text-xs px-8 py-4 rounded-xl shadow-lg border border-primary-red/10 group cursor-pointer shrink-0 transition-all duration-200"
          >
            Request Instant Booking Quotation
          </a>
        </div>

      </div>
    </section>
  );
}
