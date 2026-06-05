'use client';

import Link from 'next/link';
import { ChevronRight, Target, Search, RefreshCw, Heart, Brain, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { easeOut } from '@/lib/motion';

type Lang = 'en' | 'fr';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const pillars = [
  {
    number: '01',
    icon: <Search size={22} />,
    title: { en: 'Deep Understanding of Each Child',   fr: 'Comprendre chaque enfant en profondeur' },
    desc:  { en: 'Before any learning can begin, we invest time to truly understand every student — their personality, learning style, interests, pace, and emotional needs. This profile guides how we teach throughout their journey.', fr: "Avant tout apprentissage, nous prenons le temps de vraiment connaître chaque élève — sa personnalité, son style d'apprentissage, ses intérêts, son rythme et ses besoins émotionnels. Ce profil guide notre enseignement tout au long de son parcours." },
  },
  {
    number: '02',
    icon: <Brain size={22} />,
    title: { en: 'Cognitive-First Pedagogy',           fr: 'Pédagogie orientée cognition' },
    desc:  { en: 'We build lessons around how the brain learns — not how textbooks are written. Concepts are introduced using spaced repetition, active retrieval, and inquiry-based learning to form lasting understanding.', fr: "Nous construisons les leçons autour du fonctionnement réel du cerveau. Les concepts sont introduits par la répétition espacée, la récupération active et l'apprentissage par investigation pour former une compréhension durable." },
  },
  {
    number: '03',
    icon: <Layers size={22} />,
    title: { en: 'Integrated Cross-Subject Learning',  fr: 'Apprentissage interdisciplinaire' },
    desc:  { en: 'Knowledge is never siloed. A lesson on the water cycle connects to maths, history, writing, and geography. This cross-subject integration builds richer understanding and strengthens analytical thinking.', fr: "Le savoir n'est jamais cloisonné. Une leçon sur le cycle de l'eau relie les maths, l'histoire, l'écriture et la géographie. Cette intégration renforce la compréhension et la pensée analytique." },
  },
  {
    number: '04',
    icon: <Target size={22} />,
    title: { en: 'Constant Evaluation & Feedback',     fr: 'Évaluation et retour continus' },
    desc:  { en: 'Learning is a process, not an event. We use ongoing formative assessments, teacher observations, and student portfolios to continuously evaluate progress. Parents receive regular insights.', fr: "L'apprentissage est un processus, pas un événement. Nous utilisons des évaluations formatives continues, des observations d'enseignants et des portfolios pour évaluer les progrès en permanence." },
  },
  {
    number: '05',
    icon: <Heart size={22} />,
    title: { en: 'Emotional & Social Intelligence',   fr: 'Intelligence émotionnelle et sociale' },
    desc:  { en: 'Academic excellence cannot flourish without emotional wellbeing. We actively teach empathy, resilience, conflict resolution, and self-awareness — preparing students for relationships and life.', fr: "L'excellence académique ne peut s'épanouir sans bien-être émotionnel. Nous enseignons activement l'empathie, la résilience, la résolution de conflits et la conscience de soi." },
  },
  {
    number: '06',
    icon: <RefreshCw size={22} />,
    title: { en: 'Iterative Curriculum Design',        fr: 'Conception de programme itérative' },
    desc:  { en: 'Our syllabus is never static. Each year, we review outcomes, incorporate new research, and adapt to the evolving world. Feedback from students, parents, and educators shapes continuous improvement.', fr: "Notre programme n'est jamais figé. Chaque année, nous révisons les résultats, intégrons de nouvelles recherches et adaptons notre contenu. Les retours des élèves, parents et enseignants guident l'amélioration continue." },
  },
];

const schedule = [
  { time: '08:30', activity: { en: 'Morning Circle',     fr: 'Cercle du matin' },        desc: { en: 'Students gather for a calm, mindful start — sharing thoughts, setting intentions, and connecting as a group.', fr: "Les élèves se retrouvent pour un début calme et attentif — partager des pensées, fixer des intentions et se connecter en groupe." } },
  { time: '09:00', activity: { en: 'Core Learning Block', fr: "Bloc d'apprentissage" },  desc: { en: 'Deep focus work: reading, writing, maths, or integrated project-based learning with full teacher presence.', fr: "Travail de concentration approfondie : lecture, écriture, maths ou apprentissage par projet avec présence totale de l'enseignant." } },
  { time: '11:00', activity: { en: 'Break & Movement',   fr: 'Pause & mouvement' },      desc: { en: 'Outdoor play, free exploration, and social interaction — essential for cognitive reset and physical health.', fr: "Jeu en plein air, exploration libre et interaction sociale — essentiels pour la réinitialisation cognitive et la santé physique." } },
  { time: '11:30', activity: { en: 'Discovery Hour',     fr: 'Heure de découverte' },    desc: { en: 'Science experiments, art, music, or research projects that ignite curiosity and cross-subject thinking.', fr: "Expériences scientifiques, art, musique ou projets de recherche qui stimulent la curiosité et la pensée interdisciplinaire." } },
  { time: '13:00', activity: { en: 'Lunch & Community',  fr: 'Déjeuner & communauté' },  desc: { en: 'A shared meal, mindful eating, and structured social time with peers across year groups.', fr: "Un repas partagé, une alimentation consciente et un temps social structuré entre élèves de différents niveaux." } },
  { time: '14:00', activity: { en: 'Language & Arts',    fr: 'Langues & arts' },          desc: { en: 'Modern languages, creative writing, drama, or visual arts sessions that enrich expression and cultural awareness.', fr: "Langues modernes, écriture créative, théâtre ou arts visuels qui enrichissent l'expression et la sensibilité culturelle." } },
  { time: '15:30', activity: { en: 'Reflection & Close', fr: 'Réflexion & clôture' },    desc: { en: 'Students review what they learned, share discoveries, and prepare for tomorrow with a positive close.', fr: "Les élèves passent en revue ce qu'ils ont appris, partagent leurs découvertes et se préparent pour le lendemain." } },
];

export default function OurMethodPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as Lang;

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
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
                {t.ourMethod.page.tagline}
              </p>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.06] mb-6 text-white"
            >
              {t.ourMethod.page.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.ourMethod.page.description}
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: '6',        sub: lang === 'fr' ? 'Piliers pédagogiques' : 'Core pillars' },
                { label: '12 yrs',   sub: lang === 'fr' ? "D'expérience"         : 'Of experience' },
                { label: '94%',      sub: lang === 'fr' ? 'Progrès dépassé'      : 'Exceed expected progress' },
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

      {/* ── INTRO ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Learning in action"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/30 via-transparent to-transparent" />
            </div>
            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-5 hidden md:block text-white p-5 rounded-xl"
              style={{ backgroundColor: '#1a3a52', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-display text-2xl font-700" style={{ color: '#c49a3c' }}>12<span className="text-sm"> yrs</span></p>
              <p className="text-xs text-white/75 mt-1 leading-snug">
                {lang === 'fr' ? "D'expérience éprouvée" : 'Of proven experience'}
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 pl-3 border-l-2" style={{ borderColor: '#c49a3c' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c49a3c' }}>
                {lang === 'fr' ? 'La méthode Providence' : 'The Providence Way'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] dark:text-white leading-tight mb-6">
              {lang === 'fr'
                ? "Une éducation qui suit le fonctionnement de l'esprit de l'enfant"
                : "Education that works the way children's minds work"}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-4">
              {lang === 'fr'
                ? "La plupart des écoles enseignent le programme. Nous enseignons à l'enfant. La méthode Providence Academy est fondée sur 12 ans de perfectionnement de ce qui fonctionne vraiment — pas seulement pour les notes, mais pour le développement à vie."
                : "Most schools teach to the curriculum. We teach to the child. The Providence Academy method is built on 12 years of refining what actually works — not just for test scores, but for lifelong development."}
            </p>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-4">
              {lang === 'fr'
                ? "Nos éducateurs sont formés non seulement dans leurs domaines, mais aussi en psychologie du développement, en sciences de l'apprentissage et en bien-être de l'enfant."
                : "Our educators are trained not only in their subject domains, but in developmental psychology, learning science, and child wellbeing. This multi-disciplinary lens shapes every classroom interaction."}
            </p>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed">
              {lang === 'fr'
                ? "Le résultat est un élève curieux, conscient de lui-même, résilient et véritablement préparé pour le monde."
                : "The result is a student who is curious, self-aware, resilient, and genuinely prepared for the world that awaits them."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PILIERS ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c49a3c' }}>
              {lang === 'fr' ? 'Piliers fondamentaux' : 'Core Pillars'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] dark:text-white mb-4">
              {lang === 'fr'
                ? 'Six piliers de la méthode Providence Academy'
                : 'Six pillars of the Providence Academy method'}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
              {lang === 'fr'
                ? "Chaque pilier est une dimension de notre approche holistique. Ensemble, ils forment un système complet pour un développement exceptionnel."
                : "Each pillar is a dimension of our holistic approach. Together they form a comprehensive system for exceptional development."}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow relative overflow-hidden group"
              >
                {/* Accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ backgroundColor: '#c49a3c', opacity: 0.55 }}
                />
                {/* Ghost number */}
                <span
                  className="absolute top-3 right-4 font-display text-6xl font-700 select-none transition-colors duration-300"
                  style={{ color: '#f0e8d8', lineHeight: 1 }}
                >
                  {p.number}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white relative z-10"
                  style={{ backgroundColor: '#1a3a52' }}
                >
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-600 text-[#2a1e10] dark:text-white mb-3 leading-snug pr-6 relative z-10">
                  {p.title[lang]}
                </h3>
                <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed relative z-10">
                  {p.desc[lang]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RECHERCHE ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text + stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 pl-3 border-l-2" style={{ borderColor: '#c49a3c' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c49a3c' }}>
                {lang === 'fr' ? 'Fondé sur la recherche' : 'Evidence-Based'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] dark:text-white leading-tight mb-6">
              {lang === 'fr'
                ? 'Ancré dans la recherche sur le développement'
                : 'Grounded in developmental research'}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-4">
              {lang === 'fr'
                ? "La méthode Providence Academy n'est pas fondée sur la tradition ou la convention. Elle est continuellement mise à jour grâce à des recherches évaluées par des pairs."
                : "The Providence Academy method is not based on tradition or convention. It is continuously updated based on peer-reviewed research from leading institutions in child development, neuroscience, and educational psychology."}
            </p>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-8">
              {lang === 'fr'
                ? "Notre équipe de recherche interne travaille en étroite collaboration avec des partenaires académiques externes pour s'assurer que nos méthodes restent à la pointe."
                : "Our internal research team works closely with external academic partners to ensure our methods remain at the cutting edge of what is known about how children learn best."}
            </p>

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { value: '94%',  label: lang === 'fr' ? 'Élèves dépassent le progrès attendu'     : 'of students exceed expected progress' },
                { value: '98%',  label: lang === 'fr' ? 'Taux de satisfaction des parents'        : 'parent satisfaction rate' },
                { value: '100+', label: lang === 'fr' ? 'Partenariats de recherche mondiaux'      : 'research partnerships worldwide' },
                { value: '3×',   label: lang === 'fr' ? 'Croissance vocabulaire vs. moyenne nat.' : 'faster vocabulary growth vs. national average' },
              ].map((stat) => (
                <motion.div
                  key={stat.value}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="p-4 rounded-xl border border-[#e8ddd0] dark:border-slate-700"
                  style={{ backgroundColor: '#f9f6f1' }}
                >
                  <p className="font-display text-2xl font-600" style={{ color: '#c49a3c' }}>{stat.value}</p>
                  <p className="text-xs text-[#5a5040] dark:text-gray-400 mt-1 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research and teaching"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/25 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── JOURNÉE TYPE ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c49a3c' }}>
              {lang === 'fr' ? 'Vie quotidienne' : 'Daily Life'}
            </p>
            <h2 className="font-display text-4xl font-600 text-white mb-4">
              {lang === 'fr'
                ? 'Une journée type à Providence Academy'
                : 'A typical day at Providence Academy'}
            </h2>
            <p className="text-white/65 max-w-lg mx-auto leading-relaxed">
              {lang === 'fr'
                ? "Structure, exploration et bienveillance tissées dans chaque heure."
                : "Structure, exploration, and care woven into every hour."}
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-6 mb-0"
              >
                {/* Heure */}
                <div className="w-16 shrink-0 text-right pt-1">
                  <span className="text-xs font-medium tracking-wide" style={{ color: '#c49a3c' }}>
                    {item.time}
                  </span>
                </div>

                {/* Ligne verticale + point */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                    style={{ backgroundColor: '#c49a3c' }}
                  />
                  {i < schedule.length - 1 && (
                    <div className="w-px flex-1 mt-1" style={{ backgroundColor: 'rgba(255,255,255,0.15)', minHeight: 40 }} />
                  )}
                </div>

                {/* Contenu */}
                <div className="pb-8">
                  <h4 className="font-display font-600 text-white mb-1">{item.activity[lang]}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc[lang]}</p>
                </div>
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
              {lang === 'fr'
                ? 'Voyez la méthode Providence en action'
                : 'See the Providence Academy method in action'}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed">
              {lang === 'fr'
                ? "Contactez-nous dès aujourd'hui pour organiser une visite ou parler avec l'un de nos conseillers pédagogiques."
                : "Enquire today to arrange a visit or speak with one of our education advisors about how our method would benefit your child."}
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
                <Link
                  href="/syllabus"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-colors"
                  style={{ border: '1px solid #4a3220', color: '#4a3220' }}
                >
                  {lang === 'fr' ? 'Voir le programme' : 'View syllabus'}
                  <ChevronRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
