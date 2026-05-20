import { Plane, Building2, Car, Ship, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {

  const servicesData = [
    {
      id: 'airTickets',
      title: 'Air Tickets Booking',
      icon: Plane,
      shortDesc: 'Worldwide flights, customized itineraries, and group ticketing at highly negotiated rates.',
      accent: 'text-primary-red',
      bgColor: 'bg-primary-red/5',
      borderColor: 'border-primary-red/20',
      badge: 'GSA Accredited',
      detailedDesc: 'Flysmart is an authorized General Sales Agent (GSA) and partner to leading global airlines. We provide immediate electronic ticketing, support with complex multi-destination flight routing, custom corporate travel discounts, and priority baggage check assisting.',
      features: [
        'Corporate & Group Travel Contracts',
        'Multi-city Routing & Transit Logistics',
        'Instant Date Changes & Flexible Cancellations',
        '24/7 Dedicated Passenger Re-routing Support',
        'Frequent Flyer Program Syncing'
      ],
      stats: { stat1: '180+', label1: 'Destinations', stat2: '99%', label2: 'Ticketing Accuracy' }
    },
    {
      id: 'hotels',
      title: 'Hotel Booking',
      icon: Building2,
      shortDesc: 'Handpicked verified luxury resorts, city-center premium business apartments, and family suites.',
      accent: 'text-primary-gold',
      bgColor: 'bg-primary-gold/5',
      borderColor: 'border-primary-gold/20',
      badge: 'Best Rates Guaranteed',
      detailedDesc: 'Through our partner networks globally and across West Africa, we offer verified hotel bookings at premium locations. Whether looking for 5-star seaside luxury or budget-friendly business accommodations, our client-first contracts secure extra perks.',
      features: [
        'Exclusive Negotiated Room Rates',
        'Complimentary Early Check-in & Late Check-out',
        'Corporate Conference Venue Coordination',
        'Verified Breakfast Inclusive Bookings',
        'Vetted Safety & Hygiene Corporate Standard'
      ],
      stats: { stat1: '50,000+', label1: 'Vetted Resorts', stat2: '88%', label2: 'Partnership Discounts' }
    },
    {
      id: 'cars',
      title: 'Luxury Car Rental',
      icon: Car,
      shortDesc: 'Chauffeur-driven premium SUVs, secure bulletproof fleets, and VIP airport pickup transfers.',
      accent: 'text-primary-gold',
      bgColor: 'bg-primary-gold/5',
      borderColor: 'border-primary-gold/20',
      badge: 'Chauffeur Driven',
      detailedDesc: 'Travel in comfort and confidence with our modern fleet of meticulously maintained luxury vehicles. Highly professional, security-vetted drivers make executive transits completely quiet, relaxing and secure.',
      features: [
        'Executive SUVs (Toyota Prado, Land Cruiser)',
        'Highly Professional Vetted Local Chauffeurs',
        'Corporate Long-Term Lease Contracts',
        'VIP Airport Meet & Greet Integration',
        'Bulletproof / Secure Transit Options'
      ],
      stats: { stat1: '45+', label1: 'Premium Fleet Vehicles', stat2: '100%', label2: 'Vetted Safety Record' }
    },
    {
      id: 'seaTaxi',
      title: 'Elite Sea Taxi Booking',
      icon: Ship,
      shortDesc: 'Fast executive airport speedboat shuttles connecting Lungi Airport and Freetown wharfs.',
      accent: 'text-primary-red',
      bgColor: 'bg-primary-red/5',
      borderColor: 'border-primary-red/20',
      badge: 'Lungi Airport Link',
      detailedDesc: 'Skip the standard lengthy road trip! Our sea taxi partnerships connect Lungi International Airport directly and comfortably with central Freetown terminals. Travel smoothly across the bay in less than 30 minutes with executive speedboats.',
      features: [
        'Scheduled Airport Boat Connectors',
        'Exclusive VIP Yacht Charters',
        'Baggage Handling & Portal Support',
        'Fully Equipped Life Jackets & Marine Safety Radar',
        'Island Tourism Charters (Banana Island, Tasso Island)'
      ],
      stats: { stat1: '25 Min', label1: 'Transit Time', stat2: '24/7', label2: 'All-Weather Sea Link' }
    }
  ];

  return (
    <section id="services-grid" className="py-20 bg-white relative overflow-hidden">
      
      {/* Wave Accent Background design */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-primary-red/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-primary-gold uppercase px-3 py-1 bg-primary-gold/10 rounded-full border border-primary-gold/20">
              Our Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal mt-2 tracking-tight">
              Integrated Enterprise Travel Solutions
            </h2>
            <div className="h-1 w-12 bg-primary-gold mt-2"></div>
          </div>
          <p className="text-sm text-charcoal/65 max-w-sm font-sans font-light leading-relaxed">
            Bringing elite travel management standards under one roof. We optimize flight procurement, seaside transits, luxury hospitality, and private charters with high digital precision.
          </p>
        </div>

        {/* Primary 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => onSelectService(service.title)}
                className="group cursor-pointer p-6 rounded-3xl border border-neutral-100 shadow-sm bg-white hover:border-primary-red hover:shadow-md transition-all duration-300 relative flex flex-col justify-between h-[280px]"
              >
                {/* Floating Badge */}
                <span className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-gray-50 text-neutral-500 group-hover:bg-primary-red/10 group-hover:text-primary-red transition-all">
                  {service.badge}
                </span>

                <div className="space-y-4 pt-6">
                  {/* Icon with beautiful float effect */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all bg-neutral-50 text-primary-red group-hover:bg-primary-red group-hover:text-white mb-2">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold font-display tracking-tight leading-snug text-[#222222] group-hover:text-primary-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs leading-relaxed font-sans text-gray-550 group-hover:text-gray-650 transition-colors line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-primary-red transition-all">
                    Enquire Details
                  </span>
                  <div className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 group-hover:bg-primary-red/10 group-hover:text-primary-red group-hover:translate-x-1 flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
