'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  BookOpen,
  ChevronRight,
  GraduationCap,
  Globe,
  Palette,
  ArrowRight,
  FlaskConical,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { easeOut } from '@/lib/motion';

type Lang = 'en' | 'fr';

const stages = [
  {
    stage: 'Stage 3',
    label: { en: 'Secondary School', fr: 'Collège' },
    years: { en: 'Years 7–9',        fr: 'Années 7–9' },
    ages:  { en: 'Ages 12–14',       fr: '12–14 ans' },
    accent: '#c49a3c',
    subjects: [
      {
        icon: <BookOpen size={15} />,
        name: { en: 'English Language & Literature', fr: 'Langue & littérature anglaises' },
        desc: {
          en: 'Deepens reading, prose analysis, essay writing and narrative skills through carefully selected literary texts.',
          fr: "Approfondissement de la lecture, de l'analyse de prose, de l'essai et du récit à travers des textes littéraires sélectionnés.",
        },
      },
      {
        icon: <BookOpen size={15} />,
        name: { en: 'English Grammar & Vocabulary', fr: 'Grammaire & vocabulaire anglais' },
        desc: {
          en: 'Structured study of grammar rules, punctuation, sentence construction and vocabulary enrichment.',
          fr: "Étude structurée des règles grammaticales, de la ponctuation, de la construction de phrases et de l'enrichissement lexical.",
        },
      },
      {
        icon: <GraduationCap size={15} />,
        name: { en: 'Oral Communication & Debate', fr: 'Communication orale & débat' },
        desc: {
          en: 'Public speaking, structured debate, active listening and persuasive argument building in formal and informal contexts.',
          fr: 'Prise de parole en public, débat structuré, écoute active et argumentation persuasive dans des contextes formels et informels.',
        },
      },
      {
        icon: <Palette size={15} />,
        name: { en: 'Creative Writing', fr: 'Écriture créative' },
        desc: {
          en: 'Crafting short stories, poetry, scripts and personal essays with a focus on voice, style and originality.',
          fr: "Rédaction de nouvelles, poésie, scripts et essais personnels en mettant l'accent sur la voix, le style et l'originalité.",
        },
      },
      {
        icon: <BookOpen size={15} />,
        name: { en: 'Reading Comprehension', fr: 'Compréhension de lecture' },
        desc: {
          en: 'Analysis of fiction and non-fiction texts, inference, critical thinking and understanding authorial intent.',
          fr: "Analyse de textes fictifs et non fictifs, inférence, pensée critique et compréhension de l'intention de l'auteur.",
        },
      },
      {
        icon: <GraduationCap size={15} />,
        name: { en: 'Presentation Skills', fr: 'Techniques de présentation' },
        desc: {
          en: 'Planning, structuring and delivering effective presentations with confidence and visual aids.',
          fr: 'Planification, structuration et présentation efficaces avec confiance et supports visuels.',
        },
      },
    ],
  },
  {
    stage: 'Stage 4',
    label: { en: 'GCSE',         fr: 'GCSE' },
    years: { en: 'Years 10–11',  fr: 'Années 10–11' },
    ages:  { en: 'Ages 14–16',   fr: '14–16 ans' },
    accent: '#1a3a52',
    subjects: [
      {
        icon: <BookOpen size={15} />,
        name: { en: 'English Language & Literature', fr: 'Langue & littérature anglaises' },
        desc: {
          en: 'Cambridge-aligned study of language techniques, literary movements and comparative text analysis.',
          fr: "Étude alignée Cambridge des techniques linguistiques, des mouvements littéraires et de l'analyse comparative de textes.",
        },
      },
      {
        icon: <GraduationCap size={15} />,
        name: { en: 'Academic English', fr: 'Anglais académique' },
        desc: {
          en: 'Formal register, essay construction, argumentation and the academic conventions required for higher education.',
          fr: "Registre formel, construction d'essais, argumentation et conventions académiques requises pour l'enseignement supérieur.",
        },
      },
      {
        icon: <Palette size={15} />,
        name: { en: 'Creative Writing', fr: 'Écriture créative' },
        desc: {
          en: 'Developing a distinctive writing voice through advanced narrative structures, experimental forms and editing techniques.',
          fr: "Développement d'une voix d'écriture distinctive à travers des structures narratives avancées et des techniques d'édition.",
        },
      },
      {
        icon: <GraduationCap size={15} />,
        name: { en: 'Debate & Public Speaking', fr: 'Débat & art oratoire' },
        desc: {
          en: 'Structured argumentation, rebuttal, rhetoric and advanced oral presentation for academic and civic contexts.',
          fr: 'Argumentation structurée, réfutation, rhétorique et présentation orale avancée pour des contextes académiques et civiques.',
        },
      },
      {
        icon: <Globe size={15} />,
        name: { en: 'Media & Communication Skills', fr: 'Médias & compétences en communication' },
        desc: {
          en: 'Critical analysis of media texts, advertising, digital communication and multimodal literacy.',
          fr: 'Analyse critique des textes médiatiques, de la publicité, de la communication numérique et de la littératie multimodale.',
        },
      },
      {
        icon: <FlaskConical size={15} />,
        name: { en: 'Study Skills & Exam Technique', fr: "Méthodes d'étude & technique d'examen" },
        desc: {
          en: 'Time management, note-taking strategies, revision methods and practice tailored to Cambridge and IELTS formats.',
          fr: "Gestion du temps, stratégies de prise de notes et pratique d'examen adaptées aux formats Cambridge et IELTS.",
        },
      },
    ],
  },
  {
    stage: 'Stage 5',
    label: { en: 'Sixth Form',    fr: 'Terminale / Prépa' },
    years: { en: 'Years 12–13',  fr: 'Années 12–13' },
    ages:  { en: 'Ages 16–18',   fr: '16–18 ans' },
    accent: '#7a3a2a',
    subjects: [
      {
        icon: <BookOpen size={15} />,
        name: { en: 'Advanced English Literature', fr: 'Littérature anglaise avancée' },
        desc: {
          en: 'In-depth study of canonical and contemporary works, literary theory, and comparative analysis across periods and cultures.',
          fr: "Étude approfondie d'œuvres canoniques et contemporaines, théorie littéraire et analyse comparative à travers les périodes et cultures.",
        },
      },
      {
        icon: <FlaskConical size={15} />,
        name: { en: 'Academic Research & Writing', fr: 'Recherche académique & rédaction' },
        desc: {
          en: 'University-level research methodology, citation practice, critical synthesis and extended essay composition.',
          fr: "Méthodologie de recherche universitaire, pratique de citation, synthèse critique et rédaction d'essais étendus.",
        },
      },
      {
        icon: <GraduationCap size={15} />,
        name: { en: 'Debate & Public Speaking', fr: 'Débat & art oratoire' },
        desc: {
          en: 'Advanced rhetoric, Model United Nations, TEDx-style talks and competitive debate for future leaders.',
          fr: 'Rhétorique avancée, modèles des Nations Unies, conférences de style TEDx et débat compétitif pour les futurs leaders.',
        },
      },
      {
        icon: <Palette size={15} />,
        name: { en: 'Creative & Media English', fr: 'Anglais créatif & médias' },
        desc: {
          en: 'Scriptwriting, broadcast journalism, podcasting and creative non-fiction with professional publication as a goal.',
          fr: "Écriture de scripts, journalisme radiodiffusé, podcasting et non-fiction créative avec publication professionnelle comme objectif.",
        },
      },
      {
        icon: <Globe size={15} />,
        name: { en: 'Global English Studies', fr: "Études d'anglais mondial" },
        desc: {
          en: 'World Englishes, postcolonial literature, cross-cultural communication and language in international contexts.',
          fr: "Anglais mondial, littérature postcoloniale, communication interculturelle et langage dans les contextes internationaux.",
        },
      },
    ],
  },
];

const locations = [
  {
    flag: '🇬🇧',
    country: { en: 'United Kingdom', fr: 'Royaume-Uni' },
    campus:  { en: 'Edinburgh Campus', fr: "Campus d'Édimbourg" },
    detail:  { en: 'All stages from Early Years to Sixth Form', fr: 'Tous les niveaux, de la petite enfance à la terminale' },
  },
  {
    flag: '🇮🇹',
    country: { en: 'Italy',       fr: 'Italie' },
    campus:  { en: 'Rome Campus', fr: 'Campus de Rome' },
    detail:  { en: 'GCSE and Sixth Form', fr: 'GCSE et Terminale / Prépa' },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function SecondaryPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as Lang;

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.94) 0%, rgba(26,58,82,0.78) 40%, rgba(26,58,82,0.18) 75%, transparent 100%)',
          }}
        />

        {/* Ligne verticale dorée */}
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
                {t.secondary.page.tagline}
              </p>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.06] mb-6 text-white"
            >
              {t.secondary.page.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.secondary.page.description}
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: 'Stage 3–5', sub: lang === 'fr' ? '12–18 ans' : 'Ages 12–18' },
                { label: 'GCSE',      sub: lang === 'fr' ? 'Certifications Cambridge' : 'Cambridge qualifications' },
                { label: lang === 'fr' ? '2 campus' : '2 campuses', sub: lang === 'fr' ? 'Édimbourg · Rome' : 'Edinburgh · Rome' },
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

      {/* ── STAGES ── */}
      {stages.map((s, si) => (
        <section
          key={s.stage}
          className={`py-20 ${si % 2 === 0 ? 'bg-[#f8f2ec] dark:bg-slate-900' : 'bg-white dark:bg-slate-800'}`}
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
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white font-bold font-display text-xl"
                style={{ backgroundColor: s.accent }}
              >
                {si + 3}
              </motion.div>

              <div className="flex-1">
                <p className="text-xs tracking-[0.3em] uppercase font-medium mb-1" style={{ color: s.accent }}>
                  {s.stage}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-600 text-[#2a1e10] dark:text-white leading-tight">
                  {s.label[lang]}
                </h2>
              </div>

              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-sm font-medium text-[#2a1e10] dark:text-white">{s.years[lang]}</span>
                <span
                  className="text-xs text-[#7a6a55] dark:text-gray-400 px-3 py-1 rounded-full"
                  style={{ backgroundColor: si % 2 === 0 ? 'white' : '#f8f2ec' }}
                >
                  {s.ages[lang]}
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
                  key={sub.name.en}
                  variants={fadeUp}
                  whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow relative overflow-hidden"
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                    style={{ backgroundColor: s.accent, opacity: 0.55 }}
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: s.accent }}
                    >
                      {sub.icon}
                    </div>
                    <h3 className="font-display text-sm font-600 text-[#2a1e10] dark:text-white leading-snug">
                      {sub.name[lang]}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed">
                    {sub.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enquire link per stage */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/enquire"
                className="inline-flex items-center gap-1.5 text-sm font-medium pb-0.5 border-b transition-colors"
                style={{ color: s.accent, borderColor: s.accent }}
              >
                {lang === 'fr'
                  ? `S'inscrire · ${s.label[lang]}`
                  : `Enquire about ${s.label[lang]}`}
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── LOCATIONS — navy teaser ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#c49a3c] font-medium mb-3">
              {lang === 'fr' ? 'Disponibilité' : 'Availability'}
            </p>
            <h2 className="font-display text-4xl font-600 mb-4 leading-tight text-white">
              {lang === 'fr'
                ? <>Niveaux supérieurs au<br />Royaume-Uni &amp; en Italie</>
                : <>Higher stages in<br />UK &amp; Italy</>}
            </h2>
            <p className="text-white/65 max-w-md leading-relaxed">
              {lang === 'fr'
                ? "Les programmes GCSE et Terminale sont proposés sur les campus d'Édimbourg et de Rome de Providence Academy."
                : "GCSE and Sixth Form programmes are currently offered at Providence Academy's Edinburgh and Rome campuses."}
            </p>
          </motion.div>

          {/* Location cards */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 shrink-0"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {locations.map((loc) => (
              <motion.div
                key={loc.country.en}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="p-6 rounded-xl text-left min-w-[220px] transition-colors"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <span className="text-2xl mb-3 block">{loc.flag}</span>
                <h3 className="font-display text-base font-600 text-white mb-1">{loc.country[lang]}</h3>
                <p className="text-sm mb-2" style={{ color: '#c49a3c' }}>{loc.campus[lang]}</p>
                <p className="text-xs text-white/55 leading-relaxed">{loc.detail[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-block w-10 h-0.5 mb-6" style={{ backgroundColor: '#c49a3c' }} />
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white mb-4">
              {lang === 'fr' ? 'Réservez la place de votre enfant' : "Secure your child's place"}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed">
              {lang === 'fr'
                ? "Les places sont limitées. Inscrivez-vous maintenant pour parler avec un conseiller Providence Academy et commencer le processus d'admission."
                : "Places are limited. Enquire now to speak with a Providence Academy advisor and begin the application process."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors group"
                  style={{ backgroundColor: '#4a3220' }}
                >
                  {lang === 'fr' ? 'Nous contacter' : 'Enquire now'}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.me/"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-colors"
                  style={{
                    border: '1px solid #4a3220',
                    color: '#4a3220',
                  }}
                >
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
