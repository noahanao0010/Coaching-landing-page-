/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Star, Trophy, Users } from 'lucide-react';
import { Result } from '../types';

interface ResultsProps {
  results: Result[];
}

export default function ResultsSection({ results }: ResultsProps) {
  const [filter, setFilter] = useState<'All' | 'NEET' | 'JEE' | 'Boards' | 'CUET'>('All');

  const filteredResults = filter === 'All' 
    ? results 
    : results.filter(r => {
        if (filter === 'NEET') return r.exam.includes('NEET');
        if (filter === 'JEE') return r.exam.includes('JEE');
        if (filter === 'Boards') return r.exam.includes('Boards') || r.exam.includes('Class 12th');
        if (filter === 'CUET') return r.exam.includes('CUET');
        return true;
      });

  return (
    <section id="results" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative vector light */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block mb-1">
            Student Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Historic Hall of Fame
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            Admissions and trust are built on results. Celebrate our community kids who conquered state, district, and national milestones.
          </p>
        </div>

        {/* Results Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['All', 'NEET', 'JEE', 'Boards', 'CUET'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-brand-orange border-brand-orange text-slate-950 font-bold shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab === 'Boards' ? 'Class 10/12 Boards' : tab === 'All' ? 'All Results' : `${tab} Toppers`}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map(student => (
            <div 
              key={student.id} 
              className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-center space-x-4 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
            >
              
              {/* Photo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                <img
                  src={student.image}
                  alt={`${student.name} - ${student.exam} top ranker at Apex`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Score badge directly on photo */}
                <div className="absolute bottom-0 inset-x-0 bg-brand-blue/95 text-white py-0.5 text-[8px] sm:text-[9px] font-extrabold text-center font-mono uppercase tracking-wider">
                  {student.year} Batch
                </div>
              </div>

              {/* Stats and text */}
              <div className="flex-1 min-w-0">
                
                {/* Ranking/Score highlight badge */}
                <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-brand-orange/15 rounded-md text-brand-orange mb-1.5 border border-brand-orange/20">
                  <Trophy className="h-3 w-3 fill-brand-orange shrink-0" />
                  <span className="text-[10px] font-extrabold font-mono uppercase">
                    {student.score}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 truncate font-sans">
                  {student.name}
                </h3>
                
                <p className="text-[11px] text-slate-500 font-semibold truncate">
                  {student.exam}
                </p>

                <p className="text-[10px] text-brand-blue font-bold mt-1 uppercase tracking-wider">
                  {student.course}
                </p>

                {/* Admission Destination Badge */}
                {student.badge && (
                  <div className="mt-2 text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-100 py-1 px-2 rounded-md inline-block">
                    Allocated: <span className="text-brand-green font-extrabold">{student.badge}</span>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

        {/* Micro Achievements Summary */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-200/60 pt-6">
          <div className="flex items-center space-x-1 font-semibold text-slate-700">
            <Trophy className="h-4 w-4 text-brand-orange fill-brand-orange" />
            <span>350+ Medical (NEET) Selections Since 2018</span>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center space-x-1 font-semibold text-slate-700">
            <Trophy className="h-4 w-4 text-brand-orange fill-brand-orange" />
            <span>520+ Engineering (IIT-JEE) Selections Since 2018</span>
          </div>
        </div>

      </div>
    </section>
  );
}
