'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Target, Search, RefreshCw, Heart, Brain, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';

const pillars = [
  {
    number: '01',
    icon: <Search size={22} />,
    title: 'Deep Understanding of Each Child',
    desc: 'Before any learning can begin, we invest time to truly understand every student — their personality, learning style, interests, pace, and emotional needs. This profile guides how we teach, what we emphasise, and how we support them throughout their journey.',
  },
  {
    number: '02',
    icon: <Brain size={22} />,
    title: 'Cognitive-First Pedagogy',
    desc: 'We build lessons around how the brain learns — not how textbooks are written. Concepts are introduced in ways that align with cognitive development stages, using spaced repetition, active retrieval, and inquiry-based learning to form lasting understanding.',
  },
  {
    number: '03',
    icon: <Layers size={22} />,
    title: 'Integrated Cross-Subject Learning',
    desc: 'Knowledge is never siloed. A lesson on the water cycle connects to maths, history, writing, and geography. This cross-subject integration builds a richer, more coherent understanding of the world and strengthens analytical thinking.',
  },
  {
    number: '04',
    icon: <Target size={22} />,
    title: 'Constant Evaluation & Feedback',
    desc: 'Learning is a process, not an event. We use ongoing formative assessments, teacher observations, and student portfolios to continuously evaluate progress. Parents receive regular insights and any behavioural or academic shifts are addressed immediately.',
  },
  {
    number: '05',
    icon: <Heart size={22} />,
    title: 'Emotional & Social Intelligence',
    desc: 'Academic excellence cannot flourish without emotional wellbeing. We actively teach empathy, resilience, conflict resolution, and self-awareness — preparing students not just for exams, but for relationships and life.',
  },
  {
    number: '06',
    icon: <RefreshCw size={22} />,
    title: 'Iterative Curriculum Design',
    desc: 'Our syllabus is never static. Each year, we review outcomes, incorporate new research, and adapt to the evolving world. Feedback from students, parents, and educators shapes continuous improvement.',
  },
];

export default function OurMethodPage() {
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
            backgroundImage: `url('https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[#1a3a52]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-[#c49a3c] text-xs tracking-[0.4em] uppercase font-medium mb-5">{t.ourMethod.page.tagline}</p>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-6 leading-tight">
            {t.ourMethod.page.title}
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
            {t.ourMethod.page.description}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Learning in action"
            className="w-full h-[460px] object-cover rounded-sm"
          />
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">The Providence Academy Way</p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] mb-6 leading-tight">
              Education that works the way children&apos;s minds work
            </h2>
            <p className="text-[#5a5040] leading-relaxed mb-4">
              Most schools teach to the curriculum. We teach to the child. The Providence Academy method is built on 12 years of refining what actually works — not just for test scores, but for lifelong development.
            </p>
            <p className="text-[#5a5040] leading-relaxed mb-4">
              Our educators are trained not only in their subject domains, but in developmental psychology, learning science, and child wellbeing. This multi-disciplinary lens shapes every interaction in our classrooms.
            </p>
            <p className="text-[#5a5040] leading-relaxed">
              The result is a student who is curious, self-aware, resilient, and genuinely prepared for the world that awaits them.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Core Pillars</p>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] mb-4">Six pillars of the Providence Academy method</h2>
            <p className="text-[#5a5040] max-w-xl mx-auto">
              Each pillar is a dimension of our holistic approach. Together they form a comprehensive system for exceptional development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="bg-white p-8 rounded-sm border border-[#e8ddd0] hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <span className="absolute top-4 right-4 font-display text-5xl font-700 text-[#f0e8d8] select-none group-hover:text-[#e8d8c0] transition-colors">
                  {p.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#4a3220]/10 flex items-center justify-center text-[#4a3220] mb-5">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-600 text-[#2a1e10] mb-3 leading-snug pr-8">{p.title}</h3>
                <p className="text-sm text-[#5a5040] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Backing */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Evidence-Based</p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] mb-6 leading-tight">
              Grounded in developmental research
            </h2>
            <p className="text-[#5a5040] leading-relaxed mb-4">
              The Providence Academy method is not based on tradition or convention. It is continuously updated based on peer-reviewed research from leading institutions in child development, neuroscience, and educational psychology.
            </p>
            <p className="text-[#5a5040] leading-relaxed mb-8">
              Our internal research team works closely with external academic partners to ensure our methods remain at the cutting edge of what is known about how children learn best.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '94%', label: 'of students exceed expected progress' },
                { value: '98%', label: 'parent satisfaction rate' },
                { value: '100+', label: 'research partnerships worldwide' },
                { value: '3x', label: 'faster vocabulary growth vs. national average' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-[#f9f6f1] border border-[#e8ddd0] rounded-sm">
                  <p className="font-display text-2xl font-600 text-[#c49a3c]">{stat.value}</p>
                  <p className="text-xs text-[#5a5040] mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Research and teaching"
            className="w-full h-[480px] object-cover rounded-sm"
          />
        </div>
      </section>

      {/* A day at Providence Academy */}
      <section className="py-24 bg-[#1a3a52] dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Daily Life</p>
            <h2 className="font-display text-4xl font-600 mb-4">A typical day at Providence Academy</h2>
            <p className="text-white/70 max-w-lg mx-auto">
              Structure, exploration, and care woven into every hour.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { time: '08:30', activity: 'Morning Circle', desc: 'Students gather for a calm, mindful start — sharing thoughts, setting intentions, and connecting as a group.' },
              { time: '09:00', activity: 'Core Learning Block', desc: 'Deep focus work: reading, writing, maths, or integrated project-based learning with full teacher presence.' },
              { time: '11:00', activity: 'Break & Movement', desc: 'Outdoor play, free exploration, and social interaction — essential for cognitive reset and physical health.' },
              { time: '11:30', activity: 'Discovery Hour', desc: 'Science experiments, art, music, or research projects that ignite curiosity and cross-subject thinking.' },
              { time: '13:00', activity: 'Lunch & Community Time', desc: 'A shared meal, mindful eating, and structured social time with peers across year groups.' },
              { time: '14:00', activity: 'Language & Arts', desc: 'Modern languages, creative writing, drama, or visual arts sessions that enrich expression and cultural awareness.' },
              { time: '15:30', activity: 'Reflection & Close', desc: 'Students review what they learned, share discoveries, and prepare for tomorrow with a positive close.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-xs text-[#c49a3c] font-medium tracking-wide">{item.time}</span>
                </div>
                <div className="w-px bg-white/20 shrink-0" />
                <div className="pb-6">
                  <h4 className="font-medium text-white mb-1">{item.activity}</h4>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">Experience it</p>
          <h2 className="font-display text-4xl font-600 text-[#2a1e10] mb-4">
            See the Providence Academy method in action
          </h2>
          <p className="text-[#5a5040] max-w-lg mx-auto mb-8">
            Enquire today to arrange a visit or speak with one of our education advisors about how our method would benefit your child.
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
