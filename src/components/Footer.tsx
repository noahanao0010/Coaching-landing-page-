/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Facebook, Twitter, Youtube, ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAdminDashboard: () => void;
}

export default function Footer({ onOpenAdminDashboard }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-brand-blue rounded-xl text-white group-hover:bg-brand-orange transition-all">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight leading-none">APEX</span>
                <span className="text-[9px] font-bold text-brand-orange tracking-wider uppercase">Career Institute</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Plot 42-A, Janakpuri District Centre, New Delhi. Delivering high-quality trust-based coaching for NEET, JEE, board foundation, spoken English & government exam prep in our community for over a decade.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-slate-800 hover:bg-brand-blue hover:text-white rounded-lg transition-all text-slate-400" aria-label="Facebook Link">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-brand-orange hover:text-slate-900 rounded-lg transition-all text-slate-400" aria-label="Twitter Link">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 hover:text-white rounded-lg transition-all text-slate-400" aria-label="Youtube Link">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-brand-orange transition-colors">Courses List</a></li>
              <li><a href="#why-choose-us" className="hover:text-brand-orange transition-colors">Why Choose Us</a></li>
              <li><a href="#results" className="hover:text-brand-orange transition-colors">Results / Toppers</a></li>
              <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Campus Gallery</a></li>
              <li><a href="#faq" className="hover:text-brand-orange transition-colors">Got Questions?</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">Featured Programs</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>IIT-JEE Prime preparation</li>
              <li>NEET Comprehensive medical track</li>
              <li>CUET UG Entrance preparation</li>
              <li>Class 9th & 10th Foundation</li>
              <li>Class 11th & 12th Board Concept</li>
              <li>Spoken English & Soft Skills</li>
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="lg:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">Helpline Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-orange shrink-0 mt-0.5" />
                <span>Janakpuri District Centre, New Delhi 110058</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-orange shrink-0" />
                <span>admissions@apexcoaching.edu.in</span>
              </li>
            </ul>

            {/* Secret Portal Trigger Link */}
            <div className="pt-2">
              <button
                onClick={onOpenAdminDashboard}
                className="text-[11px] text-slate-500 hover:text-brand-orange flex items-center space-x-1 font-semibold transition-colors cursor-pointer border-t border-slate-800 pt-3 w-full text-left"
                id="btn-admin-footer"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Institute Counselor CRM Portal Login</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Apex Career Institute. All Rights Reserved. Govt. Registered.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Scholarship Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
