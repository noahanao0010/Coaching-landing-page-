/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Stethoscope, Atom, GraduationCap, BookOpen, Compass, 
  MessageSquare, Award, Laptop, Clock, MapPin, ChevronRight, HelpCircle
} from 'lucide-react';
import { Course } from '../types';

interface CoursesProps {
  courses: Course[];
  onEnroll: (courseId: string) => void;
}

export default function Courses({ courses, onEnroll }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'NEET', 'JEE', 'Class 9–12', 'CUET', 'Spoken English', 'Government Exams', 'BCA/B.Sc Entrance'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  // Helper function to render correct icon
  const renderCourseIcon = (iconName: string) => {
    const props = { className: "h-6 w-6 text-brand-blue" };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Atom': return <Atom {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      default: return <GraduationCap {...props} />;
    }
  };

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Featured Courses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            Choose from our highly-specialized academic and career entrance courses designed to maximize understanding and competitive scores.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div 
              key={course.id} 
              className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-slate-300 relative group overflow-hidden"
            >
              {/* Top Banner Ribbon */}
              <div className="absolute top-0 right-0 w-28 h-28 transform overflow-hidden -z-10">
                <div className={`absolute top-4 -right-8 w-28 py-1 text-center text-[9px] font-bold text-white uppercase tracking-wider transform rotate-45 ${
                  course.mode === 'Offline' ? 'bg-brand-blue' :
                  course.mode === 'Online' ? 'bg-brand-green' :
                  'bg-brand-orange'
                }`}>
                  {course.mode}
                </div>
              </div>

              <div>
                {/* Header Row */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-brand-blue/10 rounded-xl">
                    {renderCourseIcon(course.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                      {course.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Target: {course.targetClass}
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-blue transition-colors font-sans">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Core Syllabus Snippets */}
                <div className="space-y-1.5 mb-5 border-t border-slate-200/50 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Key Highlights</span>
                  {course.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600 font-medium">
                      <ChevronRight className="h-3.5 w-3.5 text-brand-orange shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Fees, Mode and Enroll CTA */}
              <div className="pt-4 border-t border-slate-200/60 mt-auto flex items-center justify-between gap-2">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tuition Fees</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-extrabold text-slate-800 font-mono">₹{course.fees.toLocaleString('en-IN')}</span>
                    {course.originalFees && (
                      <span className="text-slate-400 line-through text-xs font-mono">₹{course.originalFees.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onEnroll(course.id)}
                  className="px-4.5 py-2 bg-brand-blue hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  id={`btn-enroll-${course.id}`}
                >
                  Apply Online
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="p-12 text-center text-slate-500 max-w-md mx-auto">
            <p className="text-base font-semibold">No active courses listed in this category.</p>
            <p className="text-xs text-slate-400 mt-1">Please explore our other academic programs above or request customized batches at the front desk.</p>
          </div>
        )}

      </div>
    </section>
  );
}
