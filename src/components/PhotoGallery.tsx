/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image, Filter } from 'lucide-react';
import { GalleryItem } from '../types';

interface PhotoGalleryProps {
  gallery: GalleryItem[];
}

export default function PhotoGallery({ gallery }: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Classroom' | 'Lab' | 'Events' | 'Achievements'>('All');

  const categories = ['All', 'Classroom', 'Lab', 'Events', 'Achievements'] as const;

  const filteredGallery = activeCategory === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Life at Apex
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Learning Environment & Campus
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            Explore photos of our smart digital classrooms, computer mock-test labs, annual achievements workshops, and felicitation events.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {category === 'All' ? 'View All Campus' : category}
            </button>
          ))}
        </div>

        {/* Images Grid with hover labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map(item => (
            <div 
              key={item.id}
              className="group bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              
              {/* Photo */}
              <div className="relative overflow-hidden aspect-3/2 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="px-2 py-0.5 bg-brand-orange text-slate-900 text-[10px] font-extrabold rounded-md uppercase tracking-wider w-fit mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-white text-xs sm:text-sm font-bold font-sans">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Title label for visible accessibility (non-hover) */}
              <div className="p-3.5 border-t border-slate-100 text-slate-700 text-xs font-semibold truncate block group-hover:text-brand-blue transition-colors">
                {item.title}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
