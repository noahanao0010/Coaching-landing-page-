/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, PhoneCall, GraduationCap, CheckCircle, Clock, 
  Trash2, Plus, Download, RefreshCw, X, MessageSquare, Search, BookOpen
} from 'lucide-react';
import { Inquiry, AdmissionApplication, Course } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  onDataChange?: () => void;
}

export default function AdminDashboard({ isOpen, onClose, courses, onDataChange }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'applications' | 'inquiries' | 'analytics'>('applications');
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Selected lead for detail modal
  const [selectedLead, setSelectedLead] = useState<{
    type: 'application' | 'inquiry';
    data: any;
  } | null>(null);

  const [noteText, setNoteText] = useState('');

  // Load data from localStorage
  const loadData = () => {
    const savedApps = JSON.parse(localStorage.getItem('apex_applications') || '[]');
    const savedInquiries = JSON.parse(localStorage.getItem('apex_inquiries') || '[]');
    setApplications(savedApps);
    setInquiries(savedInquiries);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Add mock data for testing if empty
  const populateMockData = () => {
    const mockApps: AdmissionApplication[] = [
      {
        id: 'APP-10243',
        name: 'Arjun Mehra',
        fatherName: 'Rajesh Mehra',
        mobile: '9812345678',
        email: 'arjun.mehra@gmail.com',
        course: 'NEET Comprehensive Preparation',
        lastClassPercentage: '94.2% in Class 10 Board',
        address: 'Sec-15, Rohini, New Delhi, Delhi',
        status: 'Pending',
        date: '02 Jul 2026',
        notes: 'Called. Parent requested offline counseling on Saturday.'
      },
      {
        id: 'APP-10211',
        name: 'Sneha Patel',
        fatherName: 'Vipul Patel',
        mobile: '9876543210',
        email: 'sneha.patel@yahoo.com',
        course: 'JEE (Main + Advanced) Prime',
        lastClassPercentage: '91.8% in Class 10 Board',
        address: 'Naranpura, Ahmedabad, Gujarat',
        status: 'Contacted',
        date: '28 Jun 2026',
        notes: 'Highly interested. Sent scholarship details (ASAT).'
      },
      {
        id: 'APP-10189',
        name: 'Rohan Deshmukh',
        fatherName: 'Sanjay Deshmukh',
        mobile: '8877665544',
        email: 'rohan.desh@gmail.com',
        course: 'Class 9th & 10th Foundation Program',
        lastClassPercentage: '85.5% in Class 8 Annual',
        address: 'Kothrud, Pune, Maharashtra',
        status: 'Selected',
        date: '15 Jun 2026',
        notes: 'Fees paid. Batch starts July 10. Roll No: F-104.'
      }
    ];

    const mockInquiries: Inquiry[] = [
      {
        id: 'INQ-431',
        name: 'Preeti Sharma',
        mobile: '9988776655',
        email: 'preeti.sharma99@gmail.com',
        course: 'Spoken English & Personality Dev.',
        message: 'I want to know the batch timings for Spoken English. Are evening batches available for working professionals?',
        status: 'Pending',
        date: '01 Jul 2026',
        notes: ''
      },
      {
        id: 'INQ-412',
        name: 'Manish Rawat',
        mobile: '7766554433',
        email: 'manish.rawat@gmail.com',
        course: 'Govt. Exams Prep (SSC, Banking, State)',
        message: 'Could you please share the syllabus copy and the details of study materials supplied for SSC CGL prep?',
        status: 'Contacted',
        date: '29 Jun 2026',
        notes: 'Syllabus PDF shared on WhatsApp. Student will visit tomorrow.'
      }
    ];

    localStorage.setItem('apex_applications', JSON.stringify(mockApps));
    localStorage.setItem('apex_inquiries', JSON.stringify(mockInquiries));
    loadData();
    if (onDataChange) onDataChange();
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all inquiries and applications? This cannot be undone.')) {
      localStorage.removeItem('apex_applications');
      localStorage.removeItem('apex_inquiries');
      loadData();
      if (onDataChange) onDataChange();
    }
  };

  const deleteItem = (id: string, type: 'app' | 'inq') => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      if (type === 'app') {
        const updated = applications.filter(item => item.id !== id);
        localStorage.setItem('apex_applications', JSON.stringify(updated));
      } else {
        const updated = inquiries.filter(item => item.id !== id);
        localStorage.setItem('apex_inquiries', JSON.stringify(updated));
      }
      loadData();
      if (onDataChange) onDataChange();
      if (selectedLead && selectedLead.data.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const updateStatus = (id: string, type: 'app' | 'inq', newStatus: any) => {
    if (type === 'app') {
      const updated = applications.map(item => {
        if (item.id === id) {
          return { ...item, status: newStatus };
        }
        return item;
      });
      localStorage.setItem('apex_applications', JSON.stringify(updated));
      setApplications(updated);
      if (selectedLead && selectedLead.data.id === id) {
        setSelectedLead({ type: 'application', data: { ...selectedLead.data, status: newStatus } });
      }
    } else {
      const updated = inquiries.map(item => {
        if (item.id === id) {
          return { ...item, status: newStatus };
        }
        return item;
      });
      localStorage.setItem('apex_inquiries', JSON.stringify(updated));
      setInquiries(updated);
      if (selectedLead && selectedLead.data.id === id) {
        setSelectedLead({ type: 'inquiry', data: { ...selectedLead.data, status: newStatus } });
      }
    }
    if (onDataChange) onDataChange();
  };

  const saveNotes = (id: string, type: 'app' | 'inq') => {
    if (type === 'app') {
      const updated = applications.map(item => {
        if (item.id === id) {
          return { ...item, notes: noteText };
        }
        return item;
      });
      localStorage.setItem('apex_applications', JSON.stringify(updated));
      setApplications(updated);
      if (selectedLead) {
        setSelectedLead({ type: 'application', data: { ...selectedLead.data, notes: noteText } });
      }
    } else {
      const updated = inquiries.map(item => {
        if (item.id === id) {
          return { ...item, notes: noteText };
        }
        return item;
      });
      localStorage.setItem('apex_inquiries', JSON.stringify(updated));
      setInquiries(updated);
      if (selectedLead) {
        setSelectedLead({ type: 'inquiry', data: { ...selectedLead.data, notes: noteText } });
      }
    }
    alert('Follow-up notes saved successfully!');
    if (onDataChange) onDataChange();
  };

  // CSV Export Utility
  const exportToCSV = (type: 'applications' | 'inquiries') => {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    if (type === 'applications') {
      csvContent += "ID,Student Name,Father Name,Mobile,Email,Course,Last Class %,Address,Status,Date,Admin Notes\n";
      applications.forEach(app => {
        const row = [
          app.id,
          `"${app.name}"`,
          `"${app.fatherName}"`,
          app.mobile,
          app.email,
          `"${app.course}"`,
          `"${app.lastClassPercentage}"`,
          `"${app.address.replace(/"/g, '""')}"`,
          app.status,
          app.date,
          `"${(app.notes || '').replace(/"/g, '""')}"`
        ].join(",");
        csvContent += row + "\n";
      });
    } else {
      csvContent += "ID,Name,Mobile,Email,Course Interest,Message,Status,Date,Admin Notes\n";
      inquiries.forEach(inq => {
        const row = [
          inq.id,
          `"${inq.name}"`,
          inq.mobile,
          inq.email || '',
          `"${inq.course}"`,
          `"${inq.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
          inq.status,
          inq.date,
          `"${(inq.notes || '').replace(/"/g, '""')}"`
        ].join(",");
        csvContent += row + "\n";
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `apex_${type}_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculations for summary statistics
  const totalAppsCount = applications.length;
  const totalInqsCount = inquiries.length;
  const pendingCount = 
    applications.filter(a => a.status === 'Pending').length + 
    inquiries.filter(i => i.status === 'Pending').length;
  const contactedCount = 
    applications.filter(a => a.status === 'Contacted').length + 
    inquiries.filter(i => i.status === 'Contacted').length;
  const enrolledCount = 
    applications.filter(a => a.status === 'Selected').length + 
    inquiries.filter(i => i.status === 'Enrolled').length;

  // Filter lists
  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.mobile.includes(searchTerm) ||
      app.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.mobile.includes(searchTerm) ||
      inq.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate course inquiry distribution for custom SVG bar chart
  const getCourseData = () => {
    const map: { [key: string]: number } = {};
    courses.forEach(c => { map[c.title] = 0; });
    
    // Add application counts
    applications.forEach(a => {
      if (map[a.course] !== undefined) map[a.course]++;
      else map[a.course] = 1;
    });
    // Add inquiry counts
    inquiries.forEach(i => {
      if (map[i.course] !== undefined) map[i.course]++;
      else map[i.course] = 1;
    });

    return Object.entries(map).map(([name, count]) => ({ name, count })).filter(item => item.count > 0);
  };

  const courseStats = getCourseData();
  const maxCourseCount = Math.max(...courseStats.map(c => c.count), 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="relative w-full max-w-6xl h-[90vh] bg-slate-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-800 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-brand-orange rounded-lg">
              <Users className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-sans">Apex Leads Management Dashboard</h2>
              <p className="text-xs text-slate-300 font-mono">Secured CRM Portal • For Internal Office Administration Use Only</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={populateMockData}
              className="px-3.5 py-1.5 bg-brand-orange hover:bg-orange-600 text-slate-950 font-medium text-xs rounded-lg transition-all flex items-center space-x-1 cursor-pointer"
              title="Populate test inquiries and applications for demonstration"
              id="btn-admin-mock-data"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Load Mock Leads</span>
            </button>
            <button 
              onClick={clearAllData}
              className="px-3.5 py-1.5 bg-red-600/20 hover:bg-red-600 hover:text-white text-red-300 font-medium text-xs rounded-lg transition-all flex items-center space-x-1 cursor-pointer"
              id="btn-admin-clear"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Reset Data</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
              id="btn-admin-close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 bg-slate-100 shrink-0 border-b border-slate-200">
          <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex items-center space-x-3">
            <div className="p-2.5 bg-blue-50 text-brand-blue rounded-lg">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-medium font-sans uppercase">Applications</span>
              <span className="text-xl font-bold text-slate-800 font-mono">{totalAppsCount}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex items-center space-x-3">
            <div className="p-2.5 bg-amber-50 text-brand-orange rounded-lg">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-medium font-sans uppercase">Quick Inquiries</span>
              <span className="text-xl font-bold text-slate-800 font-mono">{totalInqsCount}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex items-center space-x-3 col-span-1">
            <div className="p-2.5 bg-red-50 text-red-500 rounded-lg">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-medium font-sans uppercase">Pending Review</span>
              <span className="text-xl font-bold text-red-600 font-mono">{pendingCount}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex items-center space-x-3 col-span-1">
            <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-lg">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-medium font-sans uppercase">Follow-Ups</span>
              <span className="text-xl font-bold text-yellow-600 font-mono">{contactedCount}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex items-center space-x-3 col-span-2 md:col-span-1">
            <div className="p-2.5 bg-green-50 text-brand-green rounded-lg">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-medium font-sans uppercase">Enrolled</span>
              <span className="text-xl font-bold text-brand-green font-mono">{enrolledCount}</span>
            </div>
          </div>
        </div>

        {/* Toolbar Filter & Navigation */}
        <div className="px-6 py-3 bg-white border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-1.5 border-b sm:border-b-0 pb-2 sm:pb-0">
            <button
              onClick={() => { setActiveTab('applications'); setStatusFilter('All'); }}
              className={`px-4 py-1.5 font-medium text-xs rounded-lg transition-colors cursor-pointer ${
                activeTab === 'applications' 
                  ? 'bg-brand-blue text-white shadow-xs' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              id="tab-applications"
            >
              Admissions Applications ({filteredApps.length})
            </button>
            <button
              onClick={() => { setActiveTab('inquiries'); setStatusFilter('All'); }}
              className={`px-4 py-1.5 font-medium text-xs rounded-lg transition-colors cursor-pointer ${
                activeTab === 'inquiries' 
                  ? 'bg-brand-blue text-white shadow-xs' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              id="tab-inquiries"
            >
              Contact Inquiries ({filteredInquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-1.5 font-medium text-xs rounded-lg transition-colors cursor-pointer ${
                activeTab === 'analytics' 
                  ? 'bg-brand-blue text-white shadow-xs' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              id="tab-analytics"
            >
              Course Demand Analytics
            </button>
          </div>

          {activeTab !== 'analytics' && (
            <div className="flex items-center gap-2">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search lead..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 w-40 sm:w-56 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>

              {/* Status Filter Dropdown */}
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-2 py-1.5 text-xs border border-slate-300 rounded-lg outline-none bg-white cursor-pointer text-slate-700"
              >
                <option value="All">All Statuses</option>
                {activeTab === 'applications' ? (
                  <>
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </>
                ) : (
                  <>
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Rejected">Rejected</option>
                  </>
                )}
              </select>

              {/* CSV Export Button */}
              <button
                onClick={() => exportToCSV(activeTab)}
                className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors border border-slate-200 cursor-pointer"
                title="Export list to CSV Excel file"
                id="btn-export-csv"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Content Panel */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'applications' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                      <th className="p-3">ID</th>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Father's Name</th>
                      <th className="p-3">Mobile</th>
                      <th className="p-3">Course</th>
                      <th className="p-3">Last Class</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApps.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="p-8 text-center text-slate-400">
                          No admission applications found. Click <strong className="text-slate-600">"Load Mock Leads"</strong> above to populate sample entries.
                        </td>
                      </tr>
                    ) : (
                      filteredApps.map(app => (
                        <tr key={app.id} className="hover:bg-slate-50/50">
                          <td className="p-3 font-mono font-bold text-slate-700">{app.id}</td>
                          <td className="p-3 font-medium text-slate-800">{app.name}</td>
                          <td className="p-3 text-slate-600">{app.fatherName}</td>
                          <td className="p-3 text-slate-600 font-mono">{app.mobile}</td>
                          <td className="p-3 text-slate-700 font-medium truncate max-w-[150px]" title={app.course}>{app.course}</td>
                          <td className="p-3 text-slate-500 italic">{app.lastClassPercentage}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                              app.status === 'Pending' ? 'bg-red-100 text-red-700' :
                              app.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                              app.status === 'Selected' ? 'bg-green-100 text-green-700' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-500 font-mono">{app.date}</td>
                          <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => { setSelectedLead({ type: 'application', data: app }); setNoteText(app.notes || ''); }}
                              className="px-2 py-1 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white rounded transition-colors font-medium cursor-pointer"
                            >
                              Manage
                            </button>
                            <button
                              onClick={() => deleteItem(app.id, 'app')}
                              className="p-1 text-slate-400 hover:text-red-600 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                              title="Delete record"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                      <th className="p-3">ID</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Mobile</th>
                      <th className="p-3">Course Interest</th>
                      <th className="p-3">Message</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-slate-400">
                          No inquiries found. Click <strong className="text-slate-600">"Load Mock Leads"</strong> above to populate sample entries.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map(inq => (
                        <tr key={inq.id} className="hover:bg-slate-50/50">
                          <td className="p-3 font-mono font-bold text-slate-700">{inq.id}</td>
                          <td className="p-3 font-medium text-slate-800">{inq.name}</td>
                          <td className="p-3 text-slate-600 font-mono">{inq.mobile}</td>
                          <td className="p-3 text-slate-700 font-medium truncate max-w-[150px]">{inq.course}</td>
                          <td className="p-3 text-slate-500 italic max-w-[200px] truncate" title={inq.message}>{inq.message}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                              inq.status === 'Pending' ? 'bg-red-100 text-red-700' :
                              inq.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                              inq.status === 'Enrolled' ? 'bg-green-100 text-green-700' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {inq.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-500 font-mono">{inq.date}</td>
                          <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => { setSelectedLead({ type: 'inquiry', data: inq }); setNoteText(inq.notes || ''); }}
                              className="px-2 py-1 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white rounded transition-colors font-medium cursor-pointer"
                            >
                              Manage
                            </button>
                            <button
                              onClick={() => deleteItem(inq.id, 'inq')}
                              className="p-1 text-slate-400 hover:text-red-600 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                              title="Delete record"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
              {/* Analytics Graph Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center space-x-2">
                  <BookOpen className="h-4.5 w-4.5 text-brand-blue" />
                  <span>Total Student Demand by Course Category</span>
                </h3>
                {courseStats.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center p-8 text-slate-400 text-xs italic">
                    No active analytical metrics. Fill out a few inquiry/admission forms on the site to see real-time charts!
                  </div>
                ) : (
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    {courseStats.map((item, idx) => {
                      const pct = (item.count / maxCourseCount) * 100;
                      return (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-slate-700">
                            <span className="truncate max-w-[280px]">{item.name}</span>
                            <span className="font-mono text-brand-blue">{item.count} Leads</span>
                          </div>
                          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-brand-blue rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Conversion Statistics Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-green" />
                    <span>Admissions Conversion Funnel</span>
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">Percentage allocation of total generated leads inside CRM databases.</p>
                </div>

                <div className="flex justify-center items-center py-4">
                  {/* Mini visual SVG funnel */}
                  <svg className="w-full max-w-[280px]" viewBox="0 0 100 80">
                    {/* Level 1: Inquiries */}
                    <polygon points="5,5 95,5 85,25 15,25" fill="#1565C0" fillOpacity="0.15" stroke="#1565C0" strokeWidth="0.5" />
                    <text x="50" y="15" fill="#1565C0" fontSize="5" fontWeight="bold" textAnchor="middle">
                      TOTAL LEADS: {totalAppsCount + totalInqsCount}
                    </text>

                    {/* Level 2: Contacted */}
                    <polygon points="17,28 83,28 75,48 25,48" fill="#FF9800" fillOpacity="0.2" stroke="#FF9800" strokeWidth="0.5" />
                    <text x="50" y="38" fill="#E65100" fontSize="5" fontWeight="bold" textAnchor="middle">
                      FOLLOW-UPS ACTIVE: {contactedCount}
                    </text>

                    {/* Level 3: Enrolled */}
                    <polygon points="27,51 73,51 65,71 35,71" fill="#4CAF50" fillOpacity="0.25" stroke="#4CAF50" strokeWidth="0.5" />
                    <text x="50" y="61" fill="#2E7D32" fontSize="5" fontWeight="bold" textAnchor="middle">
                      SUCCESSFULLY ENROLLED: {enrolledCount}
                    </text>
                  </svg>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 block mb-1">CRM Analytics Summary:</span>
                  The conversion funnel shows how many prospective students converted into paid enrollments. Current conversion rate: <strong className="text-brand-green">
                    {totalAppsCount + totalInqsCount > 0 
                      ? Math.round((enrolledCount / (totalAppsCount + totalInqsCount)) * 100) 
                      : 0}%
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lead Detail / Follow-up notes Sub-Modal */}
        {selectedLead && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
              
              <div className="px-5 py-3.5 bg-slate-800 text-white flex justify-between items-center">
                <span className="text-sm font-bold flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-brand-orange" />
                  <span>Lead Management: {selectedLead.data.id}</span>
                </span>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="p-1 hover:bg-slate-700 rounded-full text-slate-300"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="p-5 space-y-4 text-xs">
                {/* Information grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <div>
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Student Name</span>
                    <span className="font-semibold text-slate-800 text-sm">{selectedLead.data.name}</span>
                  </div>
                  {selectedLead.type === 'application' && (
                    <div>
                      <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Father's Name</span>
                      <span className="font-semibold text-slate-800">{selectedLead.data.fatherName}</span>
                    </div>
                  )}
                  <div>
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Mobile Contact</span>
                    <span className="font-semibold text-brand-blue font-mono text-sm">{selectedLead.data.mobile}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Email Address</span>
                    <span className="font-semibold text-slate-700 truncate block">{selectedLead.data.email || 'N/A'}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Desired Course</span>
                    <span className="font-semibold text-slate-800 font-sans">{selectedLead.data.course}</span>
                  </div>
                  {selectedLead.type === 'application' ? (
                    <>
                      <div className="col-span-2">
                        <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Academic Record</span>
                        <span className="font-semibold text-slate-800">{selectedLead.data.lastClassPercentage}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Residential Address</span>
                        <span className="font-semibold text-slate-700">{selectedLead.data.address}</span>
                      </div>
                    </>
                  ) : (
                    <div className="col-span-2">
                      <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Inquiry Message</span>
                      <span className="font-normal text-slate-700 block italic bg-white p-2 border border-slate-100 rounded">{selectedLead.data.message}</span>
                    </div>
                  )}
                  <div>
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Registration Date</span>
                    <span className="font-semibold text-slate-600 font-mono">{selectedLead.data.date}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium font-sans uppercase text-[10px]">Current Status</span>
                    <span className={`px-2 py-0.5 rounded-full font-bold inline-block mt-0.5 text-[9px] ${
                      selectedLead.data.status === 'Pending' ? 'bg-red-100 text-red-700' :
                      selectedLead.data.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {selectedLead.data.status}
                    </span>
                  </div>
                </div>

                {/* Change Status Controls */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Set Status Progress</label>
                  <div className="flex gap-2">
                    {selectedLead.type === 'application' ? (
                      ['Pending', 'Contacted', 'Selected', 'Rejected'].map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => updateStatus(selectedLead.data.id, 'app', s)}
                          className={`px-3 py-1.5 font-semibold rounded-lg text-[11px] transition-colors cursor-pointer flex-1 ${
                            selectedLead.data.status === s 
                              ? 'bg-brand-blue text-white shadow-xs' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {s}
                        </button>
                      ))
                    ) : (
                      ['Pending', 'Contacted', 'Enrolled', 'Rejected'].map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => updateStatus(selectedLead.data.id, 'inq', s)}
                          className={`px-3 py-1.5 font-semibold rounded-lg text-[11px] transition-colors cursor-pointer flex-1 ${
                            selectedLead.data.status === s 
                              ? 'bg-brand-blue text-white shadow-xs' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {s}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Follow up text note */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Counselor / Office Follow-up Notes</label>
                  <textarea
                    placeholder="Enter discussion notes, call feedback, scholarship percentage assigned, batch assigned, etc."
                    rows={3}
                    value={noteText}
                    onChange={e => setNoteText(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none text-slate-700"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => saveNotes(selectedLead.data.id, selectedLead.type === 'application' ? 'app' : 'inq')}
                    className="px-4 py-2 bg-brand-green hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    Save Notes
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
