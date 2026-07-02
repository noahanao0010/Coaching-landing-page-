/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Admission' | 'Classes' | 'Fees' | 'General'>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1'); // Default first open

  const categories = ['All', 'Admission', 'Classes', 'Fees', 'General'] as const;

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-sans">
            Find immediate answers regarding demo sessions, scholarship concessions, parent alerts, and course batch timing setups.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {category === 'All' ? 'All Questions' : `${category} FAQs`}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-slate-100/50 transition-colors cursor-pointer"
                  id={`btn-faq-toggle-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 pr-4 font-sans">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-brand-orange shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
