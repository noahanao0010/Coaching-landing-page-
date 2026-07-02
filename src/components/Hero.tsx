/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Calendar, ArrowRight, Star, ShieldCheck, HelpCircle } from 'lucide-react';

interface HeroProps {
  onOpenAdmissionModal: () => void;
}

export default function Hero({ onOpenAdmissionModal }: HeroProps) {
  // Safe WhatsApp Link configuration
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello Apex Career Institute! I am interested in seeking admission details for the academic session 2026–27. Please guide me.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative bg-slate-50 overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-blue/5 blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-orange/5 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Admissions Open Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue">
              <Calendar className="h-4 w-4 text-brand-orange animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Admissions Open 2026–27</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-extrabold text-brand-dark tracking-tight leading-[1.15] font-sans">
              Build Your Future with <span className="text-brand-blue bg-linear-to-r from-brand-blue to-blue-800 bg-clip-text text-transparent">Expert Guidance</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Empowering students in our local community for over <span className="font-semibold text-brand-blue">10+ years</span> to crack NEET, JEE, CUET & School Boards. Small batch sizes, experienced educators, and high success rates.
            </p>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 py-2">
              <div className="flex items-center space-x-1.5 text-slate-700 text-xs sm:text-sm font-semibold">
                <Star className="h-4.5 w-4.5 text-brand-orange fill-brand-orange" />
                <span>4.9/5 Rating (Google Reviews)</span>
              </div>
              <div className="hidden sm:block text-slate-300">|</div>
              <div className="flex items-center space-x-1.5 text-slate-700 text-xs sm:text-sm font-semibold">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-green" />
                <span>Government Registered Institute</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="btn-apply-hero"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                {/* Custom Inline SVG WhatsApp Icon */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.947 11.412 1.947c-5.436 0-9.86 4.37-9.864 9.8.001 2.03.547 4.02 1.586 5.783L2.14 21.967l4.507-1.181z" />
                </svg>
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="h-4.5 w-4.5 text-brand-orange" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Background decoration frame */}
            <div className="absolute inset-0 bg-linear-to-tr from-brand-blue/10 to-brand-orange/5 rounded-2xl transform rotate-3 scale-102 -z-10" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-sm sm:max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=500&fit=crop"
                alt="Students in classroom setting, focused learning and success at Apex"
                className="w-full object-cover aspect-4/3 sm:aspect-square lg:aspect-4/5"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3">
                <div className="p-2 bg-brand-orange rounded-lg text-slate-900 shrink-0">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">Direct Scholarship Concessions</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Up to 100% concession based on class percentage or ASAT scores.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
