/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, Award, BookOpen, Clock, FileText, 
  MessageSquare, Presentation, ShieldCheck, CheckCircle 
} from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      title: 'Experienced Faculty',
      desc: 'Learn directly from senior lecturers, IIT/NIT alumni, and seasoned medical coaching mentors.',
      icon: Users,
      color: 'bg-blue-50 text-brand-blue border-blue-100'
    },
    {
      title: 'Small Batch Sizes',
      desc: 'A strict cap of 35 students per batch to ensure individual attention, eye-contact, and doubt clarity.',
      icon: ShieldCheck,
      color: 'bg-green-50 text-brand-green border-green-100'
    },
    {
      title: 'Weekly Mock Tests',
      desc: 'Regular board-pattern & competitive exam simulators with detailed diagnostic feedback reports.',
      icon: FileText,
      color: 'bg-amber-50 text-brand-orange border-amber-100'
    },
    {
      title: 'Smart Classrooms',
      desc: 'Our classes are equipped with high-tech interactive visual panels and comfortable ergonomic seating.',
      icon: Presentation,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      title: 'Complete Study Materials',
      desc: 'Syllabus-aligned micro-notes, exhaustive worksheets, and Daily Practice Sheets (DPPs).',
      icon: BookOpen,
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      title: 'Doubt-Clearing Sessions',
      desc: 'Dedicated daily 2-hour doubt desks where students clear individual hurdles with faculty.',
      icon: MessageSquare,
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      title: 'Parent Progress Reports',
      desc: 'Daily SMS/WhatsApp attendance alerts & comprehensive monthly reports of mock test results.',
      icon: Clock,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
    },
    {
      title: 'Direct Scholarship Tests',
      desc: 'Our bi-annual ASAT exam lets meritorious, talented kids claim up to 100% fee waivers.',
      icon: Award,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-100'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Students Guided' },
    { value: '45+', label: 'Expert Faculty' },
    { value: '98%', label: 'Board Exam Success' }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-blue/5 -translate-x-1/2 -translate-y-1/2 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Setting the Standard for Community Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            We prioritize quality coaching, trust, and individual progress above everything else. See how we help kids unlock potential.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-start hover:shadow-lg transition-all duration-300"
              >
                <div className={`p-3 rounded-xl border w-fit ${item.color} mb-4`}>
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="bg-brand-blue text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx % 2 === 0 ? '' : 'sm:border-l sm:border-white/10 lg:border-l-0'}`}>
                <span className="block text-3xl sm:text-4.5xl font-extrabold text-brand-orange font-mono">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-blue-100 mt-1 uppercase tracking-wider font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
