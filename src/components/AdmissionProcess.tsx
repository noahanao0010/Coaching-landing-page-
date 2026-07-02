/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, Users, Play, CreditCard, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      index: 1,
      title: 'Fill Inquiry Form',
      desc: 'Submit your interest online or visit our reception desk. Provide contact details and course of choice.',
      icon: FileText,
      color: 'bg-blue-100 text-brand-blue border-blue-200'
    },
    {
      index: 2,
      title: 'Counseling Session',
      desc: 'Our academic mentor schedules a one-on-one session to understand current grades and career goals.',
      icon: Users,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    {
      index: 3,
      title: '3-Day Demo Classes',
      desc: 'Attend regular classes for three consecutive days for free to experience our study standard first.',
      icon: Play,
      color: 'bg-green-100 text-brand-green border-green-200'
    },
    {
      index: 4,
      title: 'Secure Fee Payment',
      desc: 'Submit fees via flexible payment modes. Pay in parts, or avail direct scholarship concessions.',
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      index: 5,
      title: 'Admission Confirmed',
      desc: 'Receive your official Apex ID Card, syllabus booklet, study materials package and batch allocation schedule.',
      icon: Sparkles,
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            How to Join
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Simple 5-Step Admission Process
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            We maintain total transparency at each milestone. Join our classroom in five simple, straightforward stages.
          </p>
        </div>

        {/* Desktop timeline flow */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          
          {/* Timeline connecting bar */}
          <div className="absolute top-[38px] left-[5%] right-[5%] h-1 bg-linear-to-r from-brand-blue via-brand-orange to-brand-green -z-10 rounded-full" />

          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div key={step.index} className="text-center flex flex-col items-center space-y-3 group">
                
                {/* Visual Circle Indicator with Icon */}
                <div className={`relative w-20 h-20 rounded-full border-4 border-white ${step.color} shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-108`}>
                  <IconComp className="h-7 w-7" />
                  
                  {/* Step Index number bubble */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-slate-900 text-white font-bold font-sans text-xs rounded-full flex items-center justify-center border-2 border-white">
                    {step.index}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-900 pt-2 font-sans group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed px-2">
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-8 relative max-w-md mx-auto">
          {/* Vertical flow connect line */}
          <div className="absolute left-[26px] top-4 bottom-4 w-1 bg-linear-to-b from-brand-blue via-brand-orange to-brand-green -z-10 rounded-full" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.index} className="flex items-start space-x-4">
                
                {/* Visual Icon Circle */}
                <div className={`relative w-14 h-14 rounded-full border-2 border-white ${step.color} shadow-md flex items-center justify-center shrink-0`}>
                  <IconComp className="h-5.5 w-5.5" />
                  
                  {/* Index bubble */}
                  <span className="absolute -top-1 -right-1 w-5.5 h-5.5 bg-slate-900 text-white font-bold font-sans text-[10px] rounded-full flex items-center justify-center border-2 border-white">
                    {step.index}
                  </span>
                </div>

                {/* Description texts */}
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
