/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  fees: number;
  originalFees?: number;
  mode: 'Offline' | 'Online' | 'Hybrid';
  description: string;
  syllabus: string[];
  icon: string;
  targetClass: string;
}

export interface Faculty {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  intro: string;
  image: string;
}

export interface Result {
  id: string;
  name: string;
  exam: string;
  score: string;
  year: string;
  rank?: string;
  course: string;
  image: string;
  badge?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  course: string;
  message: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Rejected';
  date: string;
  notes?: string;
}

export interface AdmissionApplication {
  id: string;
  name: string;
  fatherName: string;
  mobile: string;
  email: string;
  course: string;
  lastClassPercentage: string;
  address: string;
  status: 'Pending' | 'Contacted' | 'Selected' | 'Rejected';
  date: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Student' | 'Parent';
  text: string;
  rating: number;
  image: string;
  courseName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Lab' | 'Events' | 'Achievements';
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Admission' | 'Classes' | 'Fees' | 'General';
}
