'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight, GraduationCap, Globe, FlaskConical, Palette, Dumbbell, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { easeOut } from '@/lib/motion';

const subjectIcons: Record<string, React.ReactNode> = {
  'Foundations of Literacy': <BookOpen size={15} />,
  'English Language & Literature': <BookOpen size={15} />,
  'Numeracy & Mathematical Thinking': <span style={{ fontSize: 13, fontWeight: 700 }}>∑</span>,
  'Mathematics': <span style={{ fontSize: 13, fontWeight: 700 }}>∑</span>,
  'World Exploration': <Globe size={15} />,
  'History & Geography': <Globe size={15} />,
  'Sciences': <FlaskConical size={15} />,
  'Creative Arts': <Palette size={15} />,
  'Arts & Humanities': <Palette size={15} />,
  'Physical Education': <Dumbbell size={15} />,
  'Personal & Social Development': <Heart size={15} />,
  'Modern Languages': <Globe size={15} />,
  'Technology & Computing': <GraduationCap size={15} />,
};

const stages = [
  {
    stage: 'Stage 1',
    label: 'Early School',
    years: 'Years 1–2',
    ages: 'Ages 5–7',
    accent: '#c49a3c',
    subjects: [
      { name: 'Foundations of Literacy', desc: 'Phonics, reading comprehension, early writing, storytelling and vocabulary building through immersive activities.' },
      { name: 'Numeracy & Mathematical Thinking', desc: 'Number sense, basic arithmetic, patterns, shapes, and introductory problem-solving through play.' },
      { name: 'World Exploration', desc: 'An introduction to geography, nature, science, and the world around them through hands-on discovery.' },
      { name: 'Creative Arts', desc: 'Drawing, painting, music, drama and crafts that foster self-expression and fine motor skills.' },
      { name: 'Physical Education', desc: 'Movement, coordination, team sports, yoga, and outdoor activities for healthy physical development.' },
      { name: 'Personal & Social Development', desc: 'Emotional intelligence, self-care, forming friendships, and basic citizenship values.' },
    ],
  },
  {
    stage: 'Stage 2',
    label: 'Primary School',
    years: 'Years 3–6',
    ages: 'Ages 8–12',
    accent: '#1a3a52',
    subjects: [
      { name: 'English Language & Literature', desc: 'Advanced reading, writing, grammar, poetry analysis, essay structure, and public speaking skills.' },
      { name: 'Mathematics', desc: 'Algebra foundations, geometry, fractions, data handling, and logical reasoning through real-world problems.' },
      { name: 'Sciences', desc: 'Biology, chemistry basics, physics concepts, experiments, and the scientific method applied in lab settings.' },
      { name: 'History & Geography', desc: 'World history, cultural studies, map work, climate, ecosystems, and current global issues.' },
      { name: 'Modern Languages', desc: 'French and Spanish introduced through conversation, games, songs, and structured grammar lessons.' },
      { name: 'Technology & Computing', desc: 'Digital literacy, coding fundamentals (Scratch/Python), responsible online behaviour, and media creation.' },
      { name: 'Arts & Humanities', desc: 'Visual arts, music theory, drama, ethics, and an exploration of diverse cultural traditions.' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function SyllabusPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        {/* Image pleine visibilité */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/coverImage.jpeg')" }}
        />

        {/* Dégradé latéral : couvre la gauche sans noyer l'image à droite */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.94) 0%, rgba(26,58,82,0.78) 40%, rgba(26,58,82,0.18) 75%, transparent 100%)',
          }}
        />

        {/* Ligne décorative verticale dorée */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[max(2rem,calc(50%-42rem))] top-32 bottom-16 origin-top hidden lg:block"
          style={{ width: 2, backgroundColor: '#c49a3c', opacity: 0.6 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 mb-6 pl-4 border-l-2"
              style={{ borderColor: '#c49a3c' }}
            >
              <p className="text-[#c49a3c] text-xs tracking-[0.35em] uppercase font-semibold">
                {t.syllabus.page.tagline}
              </p>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.06] mb-6 text-white"
            >
              {t.syllabus.page.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.syllabus.page.description}
            </motion.p>

            {/* Pill stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: 'Stage 1 & 2', sub: 'Early · Primary' },
                { label: 'Ages 5–12', sub: 'Core curriculum' },
                { label: 'UK Standard', sub: 'Aligned syllabus' },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="px-4 py-2.5 rounded-full text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'white',
                  }}
                >
                  <span className="font-semibold">{pill.label}</span>
                  <span className="text-white/60 ml-1.5 text-xs">{pill.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-white/25" />
          <ChevronRight size={12} className="text-white/40 rotate-90" />
        </motion.div>
      </section>

      {/* ── CHILDCARE PROGRAMS ── */}
      <section className="py-20 bg-[#f8f2ec] dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">
              {t.syllabus.page.childcareSubtitle}
            </p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white mb-4">
              {t.syllabus.page.childcareTitle}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.syllabus.page.childcareDescription}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              t.syllabus.childcare.nursery,
              t.syllabus.childcare.preschool,
              t.syllabus.childcare.daycare,
            ].map((program, i) => (
              <motion.div
                key={program.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-xl border border-[#e8ddd0] dark:border-slate-800 shadow-sm relative overflow-hidden"
              >
                {/* Accent stripe top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ backgroundColor: '#c49a3c', opacity: 0.7 + i * 0.1 }}
                />
                <h3 className="font-display text-xl font-600 text-[#2a1e10] dark:text-white mb-3 mt-2">
                  {program.name}
                </h3>
                <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STAGES ── */}
      {stages.map((s, si) => (
        <section
          key={s.stage}
          className={`py-20 ${si % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-900'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Stage header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-end gap-6 mb-12 pb-6 border-b border-[#e8ddd0] dark:border-slate-700"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white font-bold font-display text-lg"
                style={{ backgroundColor: s.accent }}
              >
                {si + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs tracking-[0.3em] uppercase font-medium mb-1" style={{ color: s.accent }}>
                  {s.stage}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-600 text-[#2a1e10] dark:text-white leading-tight">
                  {s.label}
                </h2>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-sm font-medium text-[#2a1e10] dark:text-white">{s.years}</span>
                <span className="text-xs text-[#7a6a55] dark:text-gray-400 bg-[#f8f2ec] dark:bg-slate-700 px-3 py-1 rounded-full">
                  {s.ages}
                </span>
              </div>
            </motion.div>

            {/* Subject cards */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {s.subjects.map((sub) => (
                <motion.div
                  key={sub.name}
                  variants={fadeUp}
                  whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: s.accent }}
                    >
                      {subjectIcons[sub.name] ?? <BookOpen size={14} />}
                    </div>
                    <h3 className="font-display text-sm font-600 text-[#2a1e10] dark:text-white leading-snug">
                      {sub.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed">
                    {sub.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── HIGHER STAGES TEASER ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        {/* Motif décoratif */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">
              Continuing Education
            </p>
            <h2 className="font-display text-4xl font-600 mb-4 leading-tight text-white">
              Higher stages available<br />in UK &amp; Italy
            </h2>
            <p className="text-white/65 max-w-xl leading-relaxed">
              Providence Academy continues beyond primary with Secondary, GCSE, and Sixth Form
              programmes — giving students a seamless journey from early years all the way to
              university entrance.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/secondary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold transition-all"
              style={{
                border: '1px solid #c49a3c',
                color: '#c49a3c',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c49a3c';
                (e.currentTarget as HTMLAnchorElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#c49a3c';
              }}
            >
              View secondary stages <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="inline-block w-10 h-0.5 mb-6"
              style={{ backgroundColor: '#c49a3c' }}
            />
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white mb-4">
              Learn more about Providence Academy&apos;s approach
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed">
              Enquire now to receive a full curriculum guide and speak with one of our education advisors.
            </p>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors"
              style={{ backgroundColor: '#4a3220' }}
            >
              Enquire now <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}