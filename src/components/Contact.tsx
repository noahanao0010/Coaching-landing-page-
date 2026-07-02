/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, 
  CheckCircle, ArrowRight, Star 
} from 'lucide-react';
import { Course } from '../types';

interface ContactProps {
  courses: Course[];
  onInquirySubmitted: (inquiry: any) => void;
}

export default function Contact({ courses, onInquirySubmitted }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: courses.length > 0 ? courses[0].id : '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) return setError('Please enter your full name');
    if (!formData.mobile.trim() || formData.mobile.length < 10) return setError('Please enter a valid 10-digit mobile contact');
    if (!formData.message.trim()) return setError('Please enter your inquiry question/message');

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const selectedCourse = courses.find(c => c.id === formData.course);
      const newInquiry = {
        id: 'INQ-' + Date.now().toString().slice(-4),
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        course: selectedCourse ? selectedCourse.title : formData.course,
        message: formData.message,
        status: 'Pending' as const,
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      };

      // Save to localStorage
      const existingInqs = JSON.parse(localStorage.getItem('apex_inquiries') || '[]');
      localStorage.setItem('apex_inquiries', JSON.stringify([newInquiry, ...existingInqs]));

      setIsSubmitting(false);
      setIsSuccess(true);
      onInquirySubmitted(newInquiry);

      // Reset
      setFormData({
        name: '',
        mobile: '',
        email: '',
        course: courses.length > 0 ? courses[0].id : '',
        message: ''
      });
    }, 1000);
  };

  // Safe WhatsApp link triggers
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello Apex! I am browsing your landing page and have an inquiry about the regular class batches. Please contact me.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block mb-1">
            Connect with Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Get in Touch & Clear Your Doubts
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 font-sans">
            Submit a fast web inquiry, call our administrative helpline directly, or visit our district center for immediate counselor support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Contacts and Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contacts details */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-800 font-sans mb-1">Contact Information</h3>
              
              <div className="flex items-start space-x-3.5 text-xs sm:text-sm text-slate-600">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Apex Career Institute</span>
                  <span>Plot 42-A, Janakpuri District Centre (Opposite Metro Pillar 612), Janakpuri, New Delhi, PIN 110058</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-xs sm:text-sm text-slate-600">
                <Phone className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Office Call Helplines</span>
                  <a href="tel:+919876543210" className="hover:text-brand-blue font-semibold">+91 98765 43210</a>
                  <span className="mx-2 text-slate-300">|</span>
                  <a href="tel:+919123456789" className="hover:text-brand-blue font-semibold">+91 91234 56789</a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-xs sm:text-sm text-slate-600">
                <Mail className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Email Desk</span>
                  <a href="mailto:admissions@apexcoaching.edu.in" className="hover:text-brand-blue font-semibold">admissions@apexcoaching.edu.in</a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-xs sm:text-sm text-slate-600">
                <Clock className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Office & Counseling Hours</span>
                  <span>9:00 AM to 7:30 PM (Monday to Saturday)</span>
                  <span className="block text-brand-orange text-xs font-semibold mt-0.5">Sunday Open: 10:00 AM to 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Interactive WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
                <div className="p-2.5 bg-[#25D366] text-white rounded-xl">
                  {/* Inline SVG WhatsApp */}
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.947 11.412 1.947c-5.436 0-9.86 4.37-9.864 9.8.001 2.03.547 4.02 1.586 5.783L2.14 21.967l4.507-1.181z" />
                  </svg>
                </div>
                <div>
                  <span className="font-extrabold text-slate-800 block">Instant Chat Support</span>
                  <span>Connect with frontdesk counselor on WhatsApp</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Google Map Embedded Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/10 lg:aspect-video google-map-container shrink-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.204593466465!2d77.0784307616142!3d28.628221650893077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c0ec80bbf9%3A0x6bf4f6f43e3f433!2sJanakpuri%20District%20Center%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex Career Institute Janakpuri Location Map"
              />
            </div>

          </div>

          {/* Right Column: Web Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm">
            
            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-brand-green">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-sans">Inquiry Submitted Successfully!</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  We have received your career/course query. Our coordinator will call you back on <strong className="text-brand-blue font-mono">{formData.mobile || 'your mobile contact'}</strong> shortly to clear your doubts.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 px-5 py-2 bg-brand-blue hover:bg-blue-800 text-white font-medium text-xs rounded-lg shadow-sm cursor-pointer"
                  id="btn-inquiry-reset"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 font-sans">Quick Inquiry Form</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill out this quick form and our office coordinator will connect with you shortly.</p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-semibold rounded">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanshu Singh"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                      required
                    />
                  </div>

                  {/* Mobile Contact */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-xs">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit number"
                        value={formData.mobile}
                        onChange={e => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full pl-11 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white font-mono"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. priyanshu@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                    />
                  </div>

                  {/* Selected course interest */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Course Interest *</label>
                    <select
                      value={formData.course}
                      onChange={e => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white cursor-pointer text-slate-700"
                    >
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-span-1 sm:col-span-2 space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Inquiry Message / Question *</label>
                    <textarea
                      placeholder="Ask about batch timings, fee installments, online classes support, next demo schedule, etc."
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white resize-none"
                      required
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  id="btn-inquiry-submit"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
