/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, GraduationCap, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAdmissionModal: () => void;
  onOpenAdminDashboard: () => void;
}

export default function Navbar({ onOpenAdmissionModal, onOpenAdminDashboard }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results', href: '#results' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group shrink-0">
            <div className="p-2 bg-brand-blue rounded-xl text-white group-hover:bg-brand-orange transition-all duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-brand-blue tracking-tight leading-none">APEX</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-brand-orange tracking-wider uppercase">Career Institute</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3.5">
            {/* Secret Portal Trigger */}
            <button
              onClick={onOpenAdminDashboard}
              className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-500 hover:text-brand-blue transition-all flex items-center space-x-1 cursor-pointer"
              title="Office Portal CRM dashboard for managing student leads"
              id="btn-admin-portal-header"
            >
              <ShieldCheck className="h-4 w-4 text-slate-400" />
              <span>Office CRM</span>
            </button>

            <a 
              href="tel:+919876543210" 
              className="text-slate-600 hover:text-brand-blue transition-colors flex items-center space-x-1.5 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 text-brand-orange" />
              <span>+91 98765 43210</span>
            </a>

            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-blue hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="btn-apply-header"
            >
              Apply Online 2026–27
            </button>
          </div>

          {/* Mobile Actions for small screens (Only Call and Apply) */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenAdmissionModal}
              className="px-3.5 py-1.5 bg-brand-blue text-white font-bold text-[11px] rounded-lg shadow-sm cursor-pointer"
              id="btn-apply-header-mobile"
            >
              Apply Now
            </button>
            <button
              onClick={onOpenAdminDashboard}
              className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-400 border border-slate-200 rounded-lg cursor-pointer"
              title="CRM Inquiries Dashboard"
              id="btn-admin-portal-header-mobile"
            >
              <ShieldCheck className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 ml-2 rounded-lg text-slate-600 hover:bg-slate-50 border border-slate-100 transition-colors cursor-pointer"
            id="btn-hamburger"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-4 duration-150">
          <div className="px-4 pt-2 pb-6 space-y-1.5">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 px-4 space-y-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center space-x-2 text-base font-bold text-slate-700 hover:text-brand-blue transition-colors"
              >
                <Phone className="h-5 w-5 text-brand-orange" />
                <span>+91 98765 43210</span>
              </a>
              <button
                onClick={() => { handleLinkClick(); onOpenAdmissionModal(); }}
                className="w-full py-3 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-xl shadow-md text-center block text-sm transition-all cursor-pointer"
                id="btn-apply-drawer"
              >
                Apply Online 2026–27
              </button>
              <button
                onClick={() => { handleLinkClick(); onOpenAdminDashboard(); }}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-center block text-xs transition-all cursor-pointer border border-slate-200"
                id="btn-admin-drawer"
              >
                CRM Leads Management Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
