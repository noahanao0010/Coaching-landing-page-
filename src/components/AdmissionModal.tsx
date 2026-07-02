/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  selectedCourseId?: string;
  onSuccess: (application: any) => void;
}

export default function AdmissionModal({ isOpen, onClose, courses, selectedCourseId, onSuccess }: AdmissionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    mobile: '',
    email: '',
    course: selectedCourseId || (courses.length > 0 ? courses[0].id : ''),
    lastClassPercentage: '',
    address: '',
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name.trim()) return setError('Please enter Student Name');
    if (!formData.fatherName.trim()) return setError("Please enter Father's/Guardian's Name");
    if (!formData.mobile.trim() || formData.mobile.length < 10) return setError('Please enter a valid 10-digit mobile number');
    if (!formData.email.trim() || !formData.email.includes('@')) return setError('Please enter a valid email address');
    if (!formData.lastClassPercentage.trim()) return setError('Please enter last class score/percentage');
    if (!formData.address.trim()) return setError('Please enter your full residential address');
    if (!formData.terms) return setError('You must agree to the Terms & Conditions');

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const selectedCourse = courses.find(c => c.id === formData.course);
      const newApplication = {
        id: 'APP-' + Date.now().toString().slice(-6),
        name: formData.name,
        fatherName: formData.fatherName,
        mobile: formData.mobile,
        email: formData.email,
        course: selectedCourse ? selectedCourse.title : formData.course,
        lastClassPercentage: formData.lastClassPercentage,
        address: formData.address,
        status: 'Pending' as const,
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      };

      // Save to localStorage
      const existingApps = JSON.parse(localStorage.getItem('apex_applications') || '[]');
      localStorage.setItem('apex_applications', JSON.stringify([newApplication, ...existingApps]));

      // Success
      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccess(newApplication);

      // Reset
      setFormData({
        name: '',
        fatherName: '',
        mobile: '',
        email: '',
        course: courses.length > 0 ? courses[0].id : '',
        lastClassPercentage: '',
        address: '',
        terms: false
      });
    }, 1200);
  };

  const selectedCourseDetails = courses.find(c => c.id === formData.course);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-brand-blue text-white flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-brand-orange" />
            <div>
              <h2 className="text-xl font-bold font-sans">Admission Application 2026–27</h2>
              <p className="text-xs text-blue-100 font-sans">Apex Career Institute • Quality and Trust First</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            id="btn-close-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 font-sans">Registration Successful!</h3>
            <p className="text-slate-600 max-w-md font-sans">
              Thank you for choosing Apex. We have received your application. Our senior academic counselor will call you within <span className="font-semibold text-brand-blue">2 to 4 working hours</span> to schedule your free demo classes and career counseling session.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl w-full max-w-md text-left text-sm text-slate-600 space-y-2">
              <p><span className="font-medium text-slate-800">Support Helpline:</span> +91 98765 43210</p>
              <p><span className="font-medium text-slate-800">Timing:</span> 9:00 AM to 7:00 PM (Daily)</p>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-brand-blue hover:bg-blue-800 text-white font-medium rounded-lg shadow-md transition-colors cursor-pointer"
              id="btn-modal-success-done"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(100vh-160px)] space-y-4">
            
            {error && (
              <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Student Name */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">Student's Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                  required
                />
              </div>

              {/* Father Name */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">Father's / Guardian's Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Suresh Kumar"
                  value={formData.fatherName}
                  onChange={e => setFormData({ ...formData, fatherName: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">Mobile Number *</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-400 text-sm font-medium">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                    className="w-full pl-12 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                  required
                />
              </div>

              {/* Selected Course */}
              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700">Select Desired Course *</label>
                <select
                  value={formData.course}
                  onChange={e => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none bg-white transition-all cursor-pointer"
                >
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.targetClass})
                    </option>
                  ))}
                </select>
              </div>

              {/* Last Class % */}
              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700">Last Class Score / Percentage (e.g., 92% in 10th Board) *</label>
                <input
                  type="text"
                  placeholder="e.g. 88% in 10th CBSE or 9th pursuing"
                  value={formData.lastClassPercentage}
                  onChange={e => setFormData({ ...formData, lastClassPercentage: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                  required
                />
              </div>

              {/* Full Address */}
              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700">Residential Address *</label>
                <textarea
                  placeholder="Flat/House No., Colony, City/Town, State"
                  rows={2}
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all resize-none"
                  required
                />
              </div>
            </div>

            {/* Price Preview Banner */}
            {selectedCourseDetails && (
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex justify-between items-center text-sm">
                <div>
                  <span className="text-slate-500 text-xs block">Course Price Overview</span>
                  <span className="font-semibold text-slate-800">{selectedCourseDetails.title}</span>
                </div>
                <div className="text-right">
                  {selectedCourseDetails.originalFees && (
                    <span className="text-slate-400 line-through text-xs mr-1.5">₹{selectedCourseDetails.originalFees.toLocaleString('en-IN')}</span>
                  )}
                  <span className="font-bold text-brand-blue text-base">₹{selectedCourseDetails.fees.toLocaleString('en-IN')}</span>
                  <span className="text-slate-400 text-xs block">Excl. Scholarships</span>
                </div>
              </div>
            )}

            {/* Terms checkbox */}
            <div className="flex items-start space-x-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.terms}
                onChange={e => setFormData({ ...formData, terms: e.target.checked })}
                className="mt-1 h-4.5 w-4.5 text-brand-blue rounded border-slate-300 focus:ring-brand-blue cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-slate-600 leading-snug select-none cursor-pointer">
                I hereby declare that all details supplied are accurate. I would like to receive SMS, WhatsApp updates, and call guidance on admissions, scholarship offers, and batch timings from Apex.
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                id="btn-modal-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-brand-blue hover:bg-blue-800 text-white font-medium rounded-lg shadow-md transition-all flex items-center space-x-2 cursor-pointer disabled:opacity-50"
                id="btn-modal-submit"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Confirm Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
