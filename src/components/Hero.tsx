import React, { useState } from 'react';
import { Play, ArrowRight, ShieldCheck, Award, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import bannerImg from '../assets/images/travel_hero_banner_1779273737441.png';

interface HeroProps {
  onServiceSearch: (serviceType: string, searchData: any) => void;
}

export default function Hero({ onServiceSearch }: HeroProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Trigger onServiceSearch callback for integration compatibility
    onServiceSearch('General Inquiry', formData);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#111111] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Semi-Translucent Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="Flysmart Global Flight Banner"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Storytelling Banner Copy */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-white text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-[#DFB15B]/15 border border-[#DFB15B]/35 text-[#DFB15B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm self-center lg:self-start">
            <Award className="w-3.5 h-3.5" />
            <span>Award-Winning Global Travel Agency</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-tight">
            Travel with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A31D1D] via-[#DFB15B] to-white font-extrabold">
              Comfort & Confidence.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
            Flysmart Travel and Tour Agency makes ticketing, hotel bookings, boat logistics, and premium luxury car rentals seamless, transparent, and completely hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#services-grid"
              className="w-full sm:w-auto bg-[#A31D1D] hover:bg-[#8C1818] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>Our Premium Services</span>
              <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200" />
            </a>
            <a
              href="#about-section"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Our Story</span>
            </a>
          </div>
        </div>

        {/* Elegant Contacts Form Panel */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 sm:p-8 transform transition-all duration-300">
            <div className="mb-6">
              <span className="text-[#DFB15B] font-bold uppercase tracking-[0.2em] text-[10px] block mb-1">Enquire with Comfort</span>
              <h3 className="text-xl font-bold text-[#222222]">Request a Quote</h3>
              <p className="text-xs text-gray-500 mt-1">Leave us your details and one of our travel managers will call or email you instantly.</p>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 animate-pulse">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#222222]">Enquiry Submitted Successfully</h4>
                <p className="text-xs text-gray-500 max-w-xs">
                  Thank you for starting your trip with Flysmart. A ticketing & holiday consultant is preparing your premium rates and will contact you directly shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', comment: '' });
                  }}
                  className="mt-4 px-6 py-2 bg-[#222222] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-[#222222]">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#DFB15B]" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first and last name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:border-[#DFB15B] font-medium transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#DFB15B]" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:border-[#DFB15B] font-medium transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#DFB15B]" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+232 / +1"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:border-[#DFB15B] font-medium transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#DFB15B]" /> Tell us about your journey
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., Flight from Freetown to MD, USA; premium vehicle lease, airport transit crossing request..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:border-[#DFB15B] font-medium transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#222222] hover:bg-[#111111] text-white font-bold text-[10px] tracking-widest uppercase rounded-full transition-colors font-sans hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer mt-4"
                >
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
