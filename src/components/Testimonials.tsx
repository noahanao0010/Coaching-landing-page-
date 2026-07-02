/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Student & Parent Reviews
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Trusted by Local Families
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-sans">
            See why parents and students rate Apex Career Institute as the most dedicated coaching hub in the city.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          
          {/* Big Quote background decoration */}
          <Quote className="absolute top-6 left-6 h-16 w-16 text-slate-200/50 -z-10" />

          <div className="flex flex-col items-center text-center space-y-4">
            
            {/* Rating Stars */}
            <div className="flex items-center space-x-1 text-brand-orange">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm sm:text-base text-slate-700 font-medium italic leading-relaxed max-w-2xl">
              "{active.text}"
            </p>

            {/* User details */}
            <div className="flex items-center space-x-3 pt-4">
              <img
                src={active.image}
                alt={`${active.name} testimony`}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 font-sans">
                  {active.name}
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  <span className="px-1.5 py-0.5 bg-slate-200 text-slate-600 rounded-md font-bold uppercase tracking-wider text-[9px]">
                    {active.role}
                  </span>
                  <span>•</span>
                  <span className="text-brand-blue font-semibold">{active.courseName}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 pt-6 border-t border-slate-200/50 mt-8">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Previous Review"
              id="btn-prev-test"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-400">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Next Review"
              id="btn-next-test"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
