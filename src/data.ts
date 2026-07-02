/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Faculty, Result, Testimonial, GalleryItem, FAQ } from './types';

export const COURSES: Course[] = [
  {
    id: 'neet-prep',
    title: 'NEET Comprehensive Preparation',
    category: 'NEET',
    duration: '1 or 2 Years Classroom Program',
    fees: 85000,
    originalFees: 110000,
    mode: 'Offline',
    description: 'Intensive medical entrance program with daily practice tests, complete physics, chemistry, biology syllabus coverage, and personal mentorship.',
    syllabus: ['Physics: Mechanics, Thermodynamics, Modern Physics', 'Chemistry: Organic, Inorganic, Physical', 'Biology: Botany, Zoology, Human Physiology', 'Weekly All-India Level Mock Tests'],
    icon: 'Stethoscope',
    targetClass: 'Class 11, 12 & Droppers'
  },
  {
    id: 'jee-main-adv',
    title: 'JEE (Main + Advanced) Prime',
    category: 'JEE',
    duration: '1 or 2 Years Classroom Program',
    fees: 90000,
    originalFees: 120000,
    mode: 'Offline',
    description: 'Premier coaching for IIT aspirants focusing on deep concept building, advanced problem-solving techniques, and rigorous test analysis.',
    syllabus: ['Mathematics: Calculus, Algebra, Coordinate Geometry', 'Physics: Electrodynamics, Mechanics, Optics', 'Chemistry: Physical, Organic, Inorganic', 'Rigorous Test Series & Daily Practice Sheets (DPPs)'],
    icon: 'Atom',
    targetClass: 'Class 11, 12 & Droppers'
  },
  {
    id: 'cuet-ug',
    title: 'CUET (UG) - Common University Entrance',
    category: 'CUET',
    duration: '4 Months Crash Course',
    fees: 25000,
    originalFees: 35000,
    mode: 'Hybrid',
    description: 'Targeted preparation for admission to top Central Universities. General test, English language, and domain subjects included.',
    syllabus: ['Section IA & IB: Language Proficiency (English/Hindi)', 'Section II: Domain Specific Subjects (PCM/PCB/Commerce/Arts)', 'Section III: General Test (Aptitude, GK, Reasoning)', '15 full-length mock tests with analysis'],
    icon: 'GraduationCap',
    targetClass: 'Class 12 Board Students / Passed'
  },
  {
    id: 'class-9-10-board',
    title: 'Class 9th & 10th Foundation Program',
    category: 'Class 9–12',
    duration: '1 Year Academic Program',
    fees: 35000,
    originalFees: 45000,
    mode: 'Offline',
    description: 'Solid foundation building for Mathematics, Science, and Social Science, aligning with School Curriculum & NTSE/Olympiad prep.',
    syllabus: ['School Curriculum (CBSE/ICSE/State Board)', 'NTSE & Science/Maths Olympiad coaching', 'Mental Ability & Logical Reasoning basics', 'Regular Parents-Teachers Meetings (PTMs)'],
    icon: 'BookOpen',
    targetClass: 'Class 9 & 10 Students'
  },
  {
    id: 'class-11-12-pcm',
    title: 'Class 11th & 12th Board + Concept (PCM/B)',
    category: 'Class 9–12',
    duration: '1 Year Academic Program',
    fees: 45000,
    originalFees: 60000,
    mode: 'Offline',
    description: 'Comprehensive board preparation paired with foundational concepts for competitive exams. Excellent school exam scores guaranteed.',
    syllabus: ['Complete School Board Syllabus (CBSE/ICSE/State)', 'Detailed Lab Practical Guidances', 'Previous 10 Years Board Papers Solving sessions', 'Doubt clearing sessions on weekends'],
    icon: 'Compass',
    targetClass: 'Class 11 & 12 Students'
  },
  {
    id: 'spoken-english-pers',
    title: 'Spoken English & Personality Dev.',
    category: 'Spoken English',
    duration: '3 Months Certification',
    fees: 8000,
    originalFees: 12000,
    mode: 'Hybrid',
    description: 'Boost your confidence, fluency, and vocabulary. Includes group discussions, public speaking training, and body language coaching.',
    syllabus: ['Grammar Essentials & Vocabulary enrichment', 'Accent Neutralization & Fluency practices', 'Public Speaking, Debates & Mock Interviews', 'Corporate Etiquette & Resume Writing'],
    icon: 'MessageSquare',
    targetClass: 'Students, Professionals, Homemakers'
  },
  {
    id: 'govt-exams-ssc-bank',
    title: 'Govt. Exams Prep (SSC, Banking, State)',
    category: 'Government Exams',
    duration: '6 Months Comprehensive',
    fees: 18000,
    originalFees: 25000,
    mode: 'Hybrid',
    description: 'Structured course covering Quantitative Aptitude, Reasoning, General Awareness, and English for SSC CGL/CHSL, Banking (IBPS), and state services.',
    syllabus: ['Quantitative Aptitude & Vedic Maths tricks', 'Logical & Analytical Reasoning', 'English Comprehension & Grammar rules', 'General Knowledge, History, Geography, Current Affairs'],
    icon: 'Award',
    targetClass: 'Graduates & Final Year Students'
  },
  {
    id: 'bca-bsc-entrance',
    title: 'BCA / B.Sc IT Entrance Preparation',
    category: 'BCA/B.Sc Entrance',
    duration: '3 Months Crash Course',
    fees: 15000,
    originalFees: 20000,
    mode: 'Online',
    description: 'Coaching for university-specific IT and computer applications entrance tests, focusing on mathematics and basic computing concepts.',
    syllabus: ['Computer Basics & General IT awareness', 'Mathematics (Class 11/12 level)', 'English Language & Comprehension', 'General Aptitude & Logical Reasoning'],
    icon: 'Laptop',
    targetClass: 'Class 12 PCM/Commerce with IP/Computer Science'
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'fac-pk-sharma',
    name: 'Dr. P. K. Sharma',
    subject: 'Physics',
    qualification: 'M.Sc. (Physics), Ph.D. from IIT Delhi',
    experience: '15+ Years',
    intro: 'Ex-HOD of a premier national coaching institute. Passionate about simplifying complex Mechanics and Electrodynamics concepts with practical daily-life examples.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&fit=crop'
  },
  {
    id: 'fac-ananya-sen',
    name: 'Prof. Ananya Sen',
    subject: 'Organic Chemistry',
    qualification: 'M.Sc. (Organic Chemistry), CSIR NET Qualified',
    experience: '12+ Years',
    intro: 'Expert in Organic Reaction Mechanisms. Known for her interactive mnemonic techniques that make memorizing complex reactions effortless and fun.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop'
  },
  {
    id: 'fac-ram-ranjan',
    name: 'Er. Ram Ranjan Prasad',
    subject: 'Mathematics',
    qualification: 'B.Tech. from IIT Kharagpur',
    experience: '10+ Years',
    intro: 'Specializes in high-speed calculative tricks (Vedic mathematics) and advanced calculus. Over 300+ of his mentored students are currently studying in various IITs.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop'
  },
  {
    id: 'fac-simran-kaur',
    name: 'Dr. Simran Kaur',
    subject: 'Biology (Botany & Zoology)',
    qualification: 'M.B.B.S., MD (Physiology)',
    experience: '8+ Years',
    intro: 'Medical practitioner turned educator. Imparts rich anatomical insight to NEET aspirants, bridging the gap between textbook diagrams and actual medical science.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&fit=crop'
  }
];

export const RESULTS: Result[] = [
  {
    id: 'res-priya-patel',
    name: 'Priya Patel',
    exam: 'NEET UG 2025',
    score: '705/720',
    year: '2025',
    rank: 'AIR 42',
    course: 'NEET 2-Year Program',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop',
    badge: 'AIIMS New Delhi'
  },
  {
    id: 'res-aditya-roy',
    name: 'Aditya Roy',
    exam: 'JEE Advanced 2025',
    score: 'AIR 118',
    year: '2025',
    rank: 'AIR 118',
    course: 'JEE Main + Advanced Program',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&fit=crop',
    badge: 'IIT Bombay (CS)'
  },
  {
    id: 'res-mehak-jain',
    name: 'Mehak Jain',
    exam: 'CBSE Class 12th Boards',
    score: '98.6%',
    year: '2025',
    rank: 'District Topper',
    course: 'Class 12th Boards PCM',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop',
    badge: '99/100 in Physics'
  },
  {
    id: 'res-rahul-verma',
    name: 'Rahul Verma',
    exam: 'NEET UG 2024',
    score: '685/720',
    year: '2024',
    rank: 'AIR 312',
    course: 'NEET 1-Year Dropper Batch',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&fit=crop',
    badge: 'MAMC New Delhi'
  },
  {
    id: 'res-vikram-singh',
    name: 'Vikram Singh',
    exam: 'JEE Main 2025',
    score: '99.92 Percentile',
    year: '2025',
    rank: 'State Rank 5',
    course: 'JEE 2-Year Program',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop',
    badge: 'IIT Madras'
  },
  {
    id: 'res-anoushka-das',
    name: 'Anoushka Das',
    exam: 'CUET UG 2025',
    score: '800/800 Perfect Score',
    year: '2025',
    rank: '100th Percentile',
    course: 'CUET UG Program',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&fit=crop',
    badge: 'SRCC DU'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-shyam-sundar',
    name: 'Shyam Sundar (Father of Aditya Roy)',
    role: 'Parent',
    text: 'Choosing Apex Career Institute was the best decision we made for Aditya. The personal attention he received was phenomenal. Teachers like Er. Ram Ranjan Prasad were always available to clear doubts on WhatsApp even at 10 PM. Highly professional yet very caring.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&fit=crop',
    courseName: 'JEE (Main + Advanced) Program'
  },
  {
    id: 'test-priya-patel-st',
    name: 'Priya Patel (AIR 42 NEET)',
    role: 'Student',
    text: 'The weekly micro-tests and monthly syllabus mock tests at Apex simulated the actual NEET atmosphere perfectly. The analysis reports provided after each test helped me identify my weak topics in Chemistry. I owe my AIR 42 entirely to the faculty here!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop',
    courseName: 'NEET Comprehensive Preparation'
  },
  {
    id: 'test-sita-devi',
    name: 'Mrs. Sita Devi (Mother of Mehak Jain)',
    role: 'Parent',
    text: 'As parents, we were worried about school boards alongside JEE preparation. The foundation teachers guided Mehak perfectly. The weekly SMS progress reports and continuous support kept us updated and assured. Her Board score of 98.6% is testimony to their dedication.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=128&h=128&fit=crop',
    courseName: 'Class 12 Board + Concept Program'
  },
  {
    id: 'test-abhishek-st',
    name: 'Abhishek Mishra',
    role: 'Student',
    text: 'The Spoken English and Corporate Etiquette program completely transformed my confidence. Coming from a Hindi medium background, I was very hesitant. The peer mock discussions and soft skill classes enabled me to crack my university interviews easily.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=128&h=128&fit=crop',
    courseName: 'Spoken English & Personality Dev.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-classroom-1',
    title: 'Smart Interactive Classroom Sessions',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'gal-lab-1',
    title: 'Computer Lab for Online Mock Tests',
    category: 'Lab',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'gal-events-1',
    title: 'Oration & Personality Development Workshop',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'gal-achieve-1',
    title: 'Annual Toppers Felicitation Ceremony',
    category: 'Achievements',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'gal-classroom-2',
    title: 'One-on-One Personalized Doubt Solving',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'gal-achieve-2',
    title: 'Proud Parents with Board Merit Rankers',
    category: 'Achievements',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&h=400&fit=crop'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Are demo classes available for new admissions?',
    answer: 'Yes! We provide 3 free demo classes for all secondary, NEET, JEE, and Board courses so that parents and students can evaluate the teaching style, classroom environment, and faculty explanation quality before securing admission.',
    category: 'Admission'
  },
  {
    id: 'faq-2',
    question: 'What is the refund policy if a student withdraws?',
    answer: 'We have a pro-rata refund policy. If a student decides to leave within 15 days of admission, we refund the fee after a minor administrative deduction. Full policy documents can be requested at the inquiry counter during admission.',
    category: 'Fees'
  },
  {
    id: 'faq-3',
    question: 'How do you keep parents updated on student progress?',
    answer: 'We believe parents play a key role. We send automated SMS/WhatsApp alerts for attendance daily. Detailed mock test reports with category-wise marks analysis and teacher comments are shared monthly. We also organize physical Parent-Teacher Meetings (PTMs) every quarter.',
    category: 'Classes'
  },
  {
    id: 'faq-4',
    question: 'Do you offer scholarships for meritorious students?',
    answer: 'Yes! We conduct the Apex Scholarship cum Admission Test (ASAT) twice a year. Based on performance, students can secure up to 100% tuition fee waiver for JEE and NEET programs. Board top rankers also get direct concession.',
    category: 'Fees'
  },
  {
    id: 'faq-5',
    question: 'What happens if a student misses a regular lecture?',
    answer: 'Every classroom is smart-enabled. If a student misses a lecture due to medical or school emergency, they can request the recorded video lecture in our computer lab or app portal. Alternatively, they can clear topics in the Saturday backlog doubt-solving session.',
    category: 'Classes'
  },
  {
    id: 'faq-6',
    question: 'Is transportation facility available for local students?',
    answer: 'We offer specialized, safe pick-up and drop van services covering key residential areas within a 10 km radius of the center. Fees depend on the specific route and distance from the center, which can be configured at the front desk.',
    category: 'General'
  }
];
