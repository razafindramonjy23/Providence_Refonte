'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';

const stages = [
  {
    stage: 'Stage 3',
    label: 'Secondary School',
    years: 'Years 7–9',
    ages: 'Ages 12–14',
    img: 'https://images.unsplash.com/photo-1537432376769-00daadf08f29?auto=format&fit=crop&w=800&q=80',
    desc: 'A pivotal English immersion phase where students deepen reading, writing, speaking and listening skills through literature, debate and creative communication.',
    subjects: [
      'English Language & Literature',
      'English Grammar & Vocabulary',
      'Oral Communication & Debate',
      'Creative Writing',
      'Reading Comprehension',
      'Presentation Skills',
    ],
  },
  {
    stage: 'Stage 4',
    label: 'GCSE',
    years: 'Years 10–11',
    ages: 'Ages 14–16',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    desc: 'International English qualifications with expert preparation for Cambridge and IELTS-style exams, plus focused practice in advanced communication and academic English.',
    subjects: [
      'English Language & Literature',
      'Academic English',
      'Creative Writing',
      'Debate & Public Speaking',
      'Media & Communication Skills',
      'Study skills & exam technique',
    ],
  },
  {
    stage: 'Stage 5',
    label: 'Sixth Form',
    years: 'Years 12–13',
    ages: 'Ages 16–18',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    desc: 'Advanced English study for university readiness, research projects, and leadership through language, literature and global communication.',
    subjects: [
      'Advanced English Literature',
      'Academic Research & Writing',
      'Debate & Public Speaking',
      'Creative & Media English',
      'Global English Studies',
    ],
  },
];

export default function SecondaryPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[#1a3a52]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-[#c49a3c] text-xs tracking-[0.4em] uppercase font-medium mb-5">{t.secondary.page.tagline}</p>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-6 leading-tight">
            {t.secondary.page.title}
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
            {t.secondary.page.description}
          </p>
        </div>
      </section>

      {/* Stages */}
      {stages.map((s, i) => (
        <section key={s.stage} className={`py-24 ${i % 2 === 1 ? 'bg-[#f2ece3]' : ''}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'bg-gray-100 dark:bg-slate-800 py-24' : ''} ${i % 2 === 1 ? 'md:grid-flow-row-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-2">{s.stage}</p>
                <h2 className="font-display text-4xl font-600 text-[#2a1e10] mb-1">{s.label}</h2>
                <p className="text-sm text-[#7a6a55] mb-6">{s.years} &bull; {s.ages}</p>
                <p className="text-[#5a5040] leading-relaxed mb-8">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.subjects.map((sub) => (
                    <li key={sub} className="flex items-center gap-3 text-sm text-[#3a2a18]">
                      <BookOpen size={14} className="text-[#c49a3c] shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4a3220] text-white text-sm font-medium rounded hover:bg-[#3a2515] transition-colors"
                >
                  Enquire about {s.label} <ChevronRight size={14} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <img
                  src={s.img}
                  alt={s.label}
                  className="w-full h-[420px] object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Locations */}
      <section className="py-24 bg-[#1a3a52] dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Availability</p>
          <h2 className="font-display text-4xl font-600 mb-4">Higher stages in UK &amp; Italy</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-12">
            GCSE and Sixth Form programmes are currently offered at Providence Academy&apos;s Edinburgh and Rome campuses.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { country: 'United Kingdom', campus: 'Edinburgh Campus', detail: 'All stages from Early to Sixth Form' },
              { country: 'Italy', campus: 'Rome Campus', detail: 'GCSE and Sixth Form' },
            ].map((loc) => (
              <div key={loc.country} className="p-6 border border-white/20 rounded-sm text-left hover:border-[#c49a3c]/60 transition-colors">
                <h3 className="font-display text-xl font-600 mb-1">{loc.country}</h3>
                <p className="text-[#c49a3c] text-sm mb-2">{loc.campus}</p>
                <p className="text-sm text-white/60">{loc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Start today</p>
          <h2 className="font-display text-4xl font-600 text-[#2a1e10] mb-4">
            Secure your child&apos;s place
          </h2>
          <p className="text-[#5a5040] max-w-lg mx-auto mb-8">
            Places are limited. Enquire now to speak with a Providence Academy advisor and begin the application process.
          </p>
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4a3220] text-white text-sm font-medium rounded hover:bg-[#3a2515] transition-colors"
          >
            Enquire now <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
