import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Ticket, Users, Calendar, Compass, Clock, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceInquiry } from '../types';

interface ContactProps {
  prefilledService?: string;
}

export default function Contact({ prefilledService = 'Air tickets Booking' }: ContactProps) {
  const [formData, setFormData] = useState<ServiceInquiry>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: prefilledService,
    destination: '',
    date: '',
    passengers: 1,
    message: ''
  });

  const [submittedInquiries, setSubmittedInquiries] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState('');

  // Sync Prefilled service from search widget clicks
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  // Load prior inquiries from localStorage
  useEffect(() => {
    try {
      const savedInquiries = localStorage.getItem('flysmart_inquiries');
      if (savedInquiries) {
        setSubmittedInquiries(JSON.parse(savedInquiries));
      }
    } catch (e) {
      console.error("Local storage error loading", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = 'FST-' + Math.floor(100000 + Math.random() * 90000);
    const dateSubmitted = new Date().toLocaleDateString();
    
    const newInquiry = {
      ...formData,
      ticketId,
      dateSubmitted,
      status: 'Specialist Assigning',
      priority: 'High'
    };

    const updated = [newInquiry, ...submittedInquiries];
    setSubmittedInquiries(updated);
    localStorage.setItem('flysmart_inquiries', JSON.stringify(updated));

    setSubmittedTicket(ticketId);
    setShowSuccess(true);

    // Reset Form (except service type)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: formData.serviceType,
      destination: '',
      date: '',
      passengers: 1,
      message: ''
    });

    // Hide success alert after 8 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 8000);
  };

  const removeInquiry = (ticketId: string) => {
    const filtered = submittedInquiries.filter(item => item.ticketId !== ticketId);
    setSubmittedInquiries(filtered);
    localStorage.setItem('flysmart_inquiries', JSON.stringify(filtered));
  };

  return (
    <section id="inquiry-form-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute right-[-150px] top-[10%] w-96 h-96 bg-primary-gold/5 rounded-full filter blur-3xl" />
      <div className="absolute left-[-150px] bottom-[20%] w-96 h-96 bg-primary-red/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-primary-red uppercase px-3 py-1 bg-primary-red/5 rounded-full border border-primary-red/15">
            Connect with our Desks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-charcoal tracking-tight">
            Consult a Travel Coordinator Now
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans font-light">
            Need GSA airline ticketing, private speedboat cross-buoy allocations, or vetted hotel arrangements? Complete the enquiry schedule below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official details from reference image */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal">
              Flysmart Travel Bureau
            </h3>
            
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
              Our service desks provide secure flight and transfer logging. Feel free to use our digital form or connect directly with our branch offices listed below.
            </p>

            <div className="space-y-6">
              {/* Branch Address */}
              <div className="flex items-start space-x-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:border-primary-gold/35">
                <div className="w-12 h-12 rounded-xl bg-primary-red text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 uppercase tracking-widest mb-1">Bureau HQ Location</h4>
                  <p className="text-sm font-semibold text-charcoal leading-snug">
                    26 Liverpool Street, Freetown
                  </p>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    Sierra Leone, West Africa (Direct Walk-Ins)
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start space-x-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:border-primary-gold/35">
                <div className="w-12 h-12 rounded-xl bg-primary-gold text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-primary-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 uppercase tracking-widest mb-1">Direct Help Services</h4>
                  <p className="text-sm font-semibold text-charcoal">
                    +232 76 450887
                  </p>
                  <p className="text-sm font-semibold text-charcoal border-t border-neutral-200/50 pt-1 mt-1">
                    +1 (301) 281-7052
                  </p>
                  <p className="text-[11px] text-neutral-500 font-sans mt-1">
                    Emergency Callouts & Offshore GSA allocations
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start space-x-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:border-primary-gold/35">
                <div className="w-12 h-12 rounded-xl bg-neutral-850 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-primary-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 uppercase tracking-widest mb-1">Official Email Desk</h4>
                  <p className="text-sm font-semibold text-charcoal underline hover:text-primary-red transition-colors cursor-pointer">
                    flysmarttraveltour@gmail.com
                  </p>
                  <p className="text-[10px] text-neutral-500 font-sans mt-1">
                    Standard Response Time: Inside 1 Business Hour
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badging Area */}
            <div className="bg-primary-red/5 p-6 rounded-2xl border border-primary-red/15 flex items-start space-x-3 text-left">
              <HeartHandshake className="w-6 h-6 text-primary-red shrink-0" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-primary-red uppercase tracking-wider">Our Guarantee Commitment</h5>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  Whether booking from central Freetown, Sea Coach docks, or Maryland USA, you deal with a direct authorized partner, preventing inflated intermediary fees.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Booking inquiry form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-neutral-100 relative overflow-hidden">
              
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold font-display text-charcoal">
                  Direct Quotation Schedule
                </h4>
                <span className="text-[10px] tracking-widest uppercase font-bold text-primary-gold bg-primary-gold/15 border border-primary-gold/30 px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                  <Clock className="w-3 h-3 text-primary-red" /> live support desk active
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-left text-charcoal">
                
                {/* Dual Input: FullName & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      placeholder="e.g. Alieu Kamara"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      placeholder="e.g. kamara@work.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Dual Input: Phone & Substituted Service Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest">Mobile Contact</label>
                    <input
                      type="tel"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      placeholder="+232-xx-xxxxxx or +1-xxx-xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest">Service Desk Desired</label>
                    <select
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    >
                      <option value="Air Tickets Booking">Air Tickets Booking (GSA flight)</option>
                      <option value="Hotel Booking">Hotel booking (Luxury Resort)</option>
                      <option value="Car Rental">Car Rental (Executive SUV Lease)</option>
                      <option value="Sea Taxi Booking">Sea Taxi Booking (Airport boat link)</option>
                    </select>
                  </div>
                </div>

                {/* Dual Input: Destination & Intended Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest flex items-center gap-1">
                      <Compass className="w-3 zoom-in h-3 text-primary-red" /> Target Destination
                    </label>
                    <input
                      type="text"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      placeholder="e.g. Aberdeen, Freetown or Maryland, USA"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary-gold" /> Target Date of Travel
                    </label>
                    <input
                      type="date"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Traveler Size */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-primary-gold" /> Passenger Headcount
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                    required
                  />
                </div>

                {/* Detailed comments */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-450 uppercase tracking-widest">Inquiry details / Specialized flight routes</label>
                  <textarea
                    rows={3}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary-red font-medium transition-colors resize-none"
                    placeholder="Enter details e.g: preferred airline group, GSA priority requirements, medical baggage requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button with motion effects */}
                <button
                  type="submit"
                  className="w-full bg-primary-red hover:bg-opacity-95 text-white font-display font-bold py-3.5 rounded-xl shadow-lg border border-primary-gold/30 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Submit Inquiry and Generate Ticket</span>
                </button>
              </form>

              {/* Status Success Toast inline */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-6 bottom-6 bg-green-500 text-white p-4 rounded-xl flex items-center justify-between border border-green-600 shadow-xl"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 animate-bounce" />
                      <div className="text-left">
                        <p className="text-xs font-bold text-white leading-snug">Inquiry Submitted Successfully!</p>
                        <p className="text-[10px] text-white/80 font-mono">Specialist Ticket Generated ID: {submittedTicket}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="text-white hover:text-neutral-200 font-bold text-xs px-2 cursor-pointer"
                    >
                      Okay
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Local Live Inquiries Status Tracker */}
        {submittedInquiries.length > 0 && (
          <div className="mt-20 border-t border-neutral-150 pt-16">
            <div className="text-left max-w-2xl mb-8 space-y-2">
              <h4 className="text-xl font-bold font-display text-charcoal">
                Active Live Bookings & Inquiries Tracker
              </h4>
              <p className="text-xs text-charcoal/60">
                Below are the travel tickets queued on your local browser session. Our coordinators are tracking these requests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submittedInquiries.map((inq, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200/60 p-5 rounded-2xl relative shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group text-left text-charcoal"
                >
                  <div className="flex justify-between items-start pb-3 border-b border-neutral-200/50 mb-3">
                    <div className="flex items-center space-x-2">
                      <Ticket className="w-4 h-4 text-primary-red shrink-0" />
                      <span className="text-xs font-mono font-bold text-primary-red">{inq.ticketId}</span>
                    </div>
                    <span className="text-[9px] uppercase font-bold text-white bg-amber-500 border border-amber-600 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> Specialist Reviewing
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3">
                    <div>
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-neutral-400">FullName</h5>
                      <span className="text-xs font-semibold">{inq.fullName}</span>
                    </div>
                    <div>
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-neutral-400">Target Destination</h5>
                      <span className="text-xs font-semibold">{inq.destination}</span>
                    </div>
                    <div>
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-neutral-400">Category</h5>
                      <span className="text-xs font-semibold">{inq.serviceType}</span>
                    </div>
                    <div>
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-neutral-400">Travel Date</h5>
                      <span className="text-xs font-semibold font-mono">{inq.date}</span>
                    </div>
                  </div>

                  {inq.message && (
                    <div className="bg-white p-2.5 rounded border border-neutral-100/50 text-[10px] text-charcoal/70 line-clamp-2 italic mb-3">
                      "{inq.message}"
                    </div>
                  )}

                  <div className="flex justify-between items-center text-[10px] text-neutral-500 pt-3 border-t border-dashed border-neutral-200">
                    <div className="flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary-gold" />
                      <span>Assigned to West Africa GSA desks</span>
                    </div>
                    <button
                      onClick={() => removeInquiry(inq.ticketId)}
                      className="text-primary-red hover:underline font-bold font-sans tracking-wide cursor-pointer"
                    >
                      Cancel Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
