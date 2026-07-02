/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { Faculty } from '../types';

interface FacultyProps {
  faculty: Faculty[];
}

export default function FacultySection({ faculty }: FacultyProps) {
  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Mentors & Educators
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Learn from the Best Teachers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            Our faculty consists of highly qualified, compassionate, and experienced domain experts dedicated to personalized student mentoring.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map(teacher => (
            <div 
              key={teacher.id} 
              className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col group"
            >
              
              {/* Photo Area with hover scale */}
              <div className="relative overflow-hidden aspect-square shrink-0">
                <img
                  src={teacher.image}
                  alt={`${teacher.name} - ${teacher.subject} faculty at Apex`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-brand-blue/90 text-white px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg shadow-sm">
                  {teacher.subject}
                </div>
              </div>

              {/* Description Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-sans mb-1 group-hover:text-brand-blue transition-colors">
                    {teacher.name}
                  </h3>
                  
                  {/* Qualifications */}
                  <div className="flex items-start space-x-1.5 text-xs text-slate-500 font-medium mb-3">
                    <GraduationCap className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{teacher.qualification}</span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 italic mb-4">
                    "{teacher.intro}"
                  </p>
                </div>

                {/* Experience counter at the bottom */}
                <div className="pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 text-brand-blue" />
                    <span>Experience</span>
                  </div>
                  <span className="text-brand-blue font-bold">{teacher.experience}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Academic Trust Note */}
        <div className="mt-12 p-4 sm:p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-2.5 bg-brand-blue text-white rounded-xl hidden sm:block shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Need Guidance on Choosing the Right Academic Track?</h4>
              <p className="text-xs text-slate-500">Book a direct, free counseling slot with our senior physics and math educators.</p>
            </div>
          </div>
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-brand-blue hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 whitespace-nowrap"
          >
            Request Counseling Call
          </a>
        </div>

      </div>
    </section>
  );
}
