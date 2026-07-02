/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Users, Phone, ArrowUp, AlertCircle, CheckCircle, ShieldAlert } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import FacultySection from './components/Faculty';
import ResultsSection from './components/Results';
import Testimonials from './components/Testimonials';
import PhotoGallery from './components/PhotoGallery';
import AdmissionProcess from './components/AdmissionProcess';
import Contact from './components/Contact';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import AdminDashboard from './components/AdminDashboard';
import { COURSES, FACULTY, RESULTS, TESTIMONIALS, GALLERY, FAQS } from './data';

export default function App() {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  
  // Real-time Notification state for new leads submitted
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnrollClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setIsAdmissionOpen(true);
  };

  const handleOpenGeneralAdmission = () => {
    setSelectedCourseId(undefined);
    setIsAdmissionOpen(true);
  };

  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 6000);
  };

  const handleNewApplication = (app: any) => {
    triggerNotification(`New Admission Registered! Lead ${app.id} saved to Office CRM database.`);
  };

  const handleNewInquiry = (inq: any) => {
    triggerNotification(`New Quick Inquiry Received! Name: ${inq.name}. Saved to Office CRM.`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-orange selection:text-slate-900 font-sans antialiased">
      
      {/* Real-time CRM leads submission indicator */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-brand-orange/30 animate-in fade-in slide-in-from-bottom-8 duration-300 flex items-start space-x-3">
          <div className="p-2 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-xs font-bold font-sans uppercase text-brand-orange tracking-wider">Office CRM Database Alert</h4>
            <p className="text-xs text-slate-300 font-sans leading-snug">{notificationMsg}</p>
            <button 
              onClick={() => { setIsAdminOpen(true); setShowNotification(false); }}
              className="text-[10px] text-brand-blue font-bold hover:underline block pt-1 uppercase tracking-wider"
              id="btn-alert-view-crm"
            >
              Open Office CRM Leads Dashboard →
            </button>
          </div>
        </div>
      )}

      {/* Floater Hint: Shows user how to access counselor's dashboard */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <div className="bg-white/95 backdrop-blur-xs border border-slate-200/80 p-3 rounded-2xl shadow-lg flex items-center space-x-3.5 max-w-xs animate-pulse">
          <div className="p-2 bg-brand-blue text-white rounded-xl">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-sans">Counselor CRM Panel Ready</h4>
            <p className="text-[10px] text-slate-500">Test submissions and view leads inside. <button onClick={() => setIsAdminOpen(true)} className="text-brand-blue font-bold underline">Open Portal</button></p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <Navbar 
        onOpenAdmissionModal={handleOpenGeneralAdmission} 
        onOpenAdminDashboard={() => setIsAdminOpen(true)} 
      />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Area */}
        <Hero onOpenAdmissionModal={handleOpenGeneralAdmission} />

        {/* Highlights Banner & Statistics are integrated within Why Choose Us */}
        <WhyChooseUs />

        {/* Featured Course Catalog */}
        <CoursesSection courses={COURSES} onEnroll={handleEnrollClick} />

        {/* Dynamic 5-Step Admission Pipeline */}
        <AdmissionProcess />

        {/* Faculty Display */}
        <FacultySection faculty={FACULTY} />

        {/* Student Achievements / Hall of fame results */}
        <ResultsSection results={RESULTS} />

        {/* Student/Parent feedback testimonials */}
        <Testimonials testimonials={TESTIMONIALS} />

        {/* Life at Campus Photo Gallery */}
        <PhotoGallery gallery={GALLERY} />

        {/* Frequently Asked Questions */}
        <FAQSection faqs={FAQS} />

        {/* Inquiry Form, Contacts & Map Location */}
        <Contact courses={COURSES} onInquirySubmitted={handleNewInquiry} />
      </main>

      {/* Site Footer */}
      <Footer onOpenAdminDashboard={() => setIsAdminOpen(true)} />

      {/* Admission form Popup Modal */}
      <AdmissionModal 
        isOpen={isAdmissionOpen} 
        onClose={() => setIsAdmissionOpen(false)} 
        courses={COURSES} 
        selectedCourseId={selectedCourseId}
        onSuccess={handleNewApplication}
      />

      {/* Counselor leads CRM manager panel */}
      <AdminDashboard 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        courses={COURSES}
      />

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:right-10 z-40 p-3 bg-brand-blue hover:bg-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to Top"
          id="btn-scroll-top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
