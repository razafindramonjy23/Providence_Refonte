'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { easeOut } from '@/lib/motion';

type Lang = 'en' | 'fr';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const awards = [
  { year: '2024', title: { en: 'Best Early Development School', fr: 'Meilleure école de développement précoce' }, body: 'Meridian Child Development Support', desc: { en: 'Awarded for innovation in early childhood education and exceptional learning outcomes for ages 5–7.', fr: "Décerné pour l'innovation en éducation de la petite enfance et les résultats d'apprentissage exceptionnels pour les 5–7 ans." } },
  { year: '2024', title: { en: 'Top UK School', fr: 'Meilleure école au Royaume-Uni' }, body: 'British Education Awards', desc: { en: 'Recognised as one of the top performing private schools in the United Kingdom for academic excellence.', fr: "Reconnue comme l'une des meilleures écoles privées du Royaume-Uni pour l'excellence académique." } },
  { year: '2023', title: { en: 'Top UK School', fr: 'Meilleure école au Royaume-Uni' }, body: 'British Education Awards', desc: { en: 'For the second consecutive year, acknowledged for outstanding teaching methods and pastoral care.', fr: "Pour la deuxième année consécutive, reconnue pour ses méthodes d'enseignement et son accompagnement pastoral." } },
  { year: '2022', title: { en: 'Excellence in Inclusion', fr: "Excellence en inclusion" }, body: 'European Education Council', desc: { en: 'Celebrated for inclusive policies and an adaptive curriculum that serves students from all backgrounds.', fr: "Saluée pour ses politiques inclusives et son programme adaptatif qui sert des élèves de tous horizons." } },
  { year: '2021', title: { en: 'Best International Curriculum', fr: 'Meilleur cursus international' }, body: 'Global Learning Alliance', desc: { en: 'Commended for developing a curriculum that prepares students for internationally recognised higher education.', fr: "Récompensée pour un cursus préparant les élèves aux institutions d'enseignement supérieur reconnues internationalement." } },
];

const team = [
  { name: 'Delora Fanning', role: { en: 'Principal', fr: 'Directrice' }, img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'James Hartwell', role: { en: 'Head of Curriculum', fr: 'Responsable du programme' }, img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Nair', role: { en: 'Director of Student Wellbeing', fr: 'Directrice du bien-être élève' }, img: 'https://images.pexels.com/photos/5905897/pexels-photo-5905897.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const stories = [
  {
    title: { en: 'International recognition for a Providence Academy rising star', fr: 'Reconnaissance internationale pour une étoile montante de Providence Academy' },
    quote: { en: "Seeing Maddy achieving things I couldn't when I was her age has brought happy tears to my eyes. Providence Academy didn't just teach her — they believed in her.", fr: "Voir Maddy accomplir des choses que je ne pouvais pas faire à son âge m'a mis les larmes aux yeux. Providence Academy ne s'est pas contenté de lui enseigner — ils ont cru en elle." },
    author: 'Vivianne',
    role: { en: 'Parent of Madeleine, Primary Year 6', fr: 'Parent de Madeleine, Primaire Année 6' },
    img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: { en: 'A school that feels like family', fr: "Une école qui ressemble à une famille" },
    quote: { en: "We moved from Italy three years ago and Providence Academy made our daughter feel at home from day one. The level of care here is extraordinary.", fr: "Nous avons déménagé d'Italie il y a trois ans et Providence Academy a fait en sorte que notre fille se sente chez elle dès le premier jour. Le niveau de bienveillance ici est extraordinaire." },
    author: 'Sofia Rossini',
    role: { en: 'Parent of Elena, Early Years', fr: "Parent d'Elena, Petite enfance" },
    img: 'https://images.pexels.com/photos/5905897/pexels-photo-5905897.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function AboutPage() {
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
            backgroundImage: `url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
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
                {t.aboutPage.tagline}
              </p>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.06] mb-6 text-white"
            >
              {t.aboutPage.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.aboutPage.description}
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: '15,000+', sub: lang === 'fr' ? 'Élèves formés' : 'Students educated' },
                { label: '5×', sub: lang === 'fr' ? 'Prix remportés' : 'Award winner' },
                { label: '12 yrs', sub: lang === 'fr' ? "D'expérience" : 'Of experience' },
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

      {/* ── MISSION ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 pl-3 border-l-2" style={{ borderColor: '#c49a3c' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c49a3c' }}>
                {t.aboutPage.whoAreWe}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] dark:text-white leading-tight mb-6">
              {t.aboutPage.mission}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-4">
              {t.aboutPage.missionDesc1}
            </p>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-4">
              {t.aboutPage.missionDesc2}
            </p>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-8">
              {t.aboutPage.missionDesc3}
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity group"
                style={{ backgroundColor: '#1a3a52' }}
              >
                {t.aboutPage.enquireBtn}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {[
              { src: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Students', cls: '' },
              { src: 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Classroom', cls: 'mt-8' },
              { src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Learning', cls: '-mt-4' },
              { src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Teacher', cls: 'mt-4' },
            ].map((img) => (
              <motion.div
                key={img.alt}
                variants={fadeUp}
                className={`overflow-hidden rounded-xl ${img.cls}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-56 w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c49a3c' }}>
              {t.aboutPage.values}
            </p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white">
              {t.aboutPage.whatDrivesUs}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: <Users size={22} />,
                title: { en: 'Every Child Matters', fr: "Chaque enfant compte" },
                desc: { en: "We invest deeply in understanding each student's unique personality, learning style, and ambitions. No child is treated as a number at Providence Academy.", fr: "Nous investissons profondément dans la compréhension de la personnalité, du style d'apprentissage et des ambitions de chaque élève. Aucun enfant n'est traité comme un numéro." },
              },
              {
                icon: <Globe size={22} />,
                title: { en: 'Global Perspective', fr: 'Perspective mondiale' },
                desc: { en: 'Our curriculum is informed by global research and tailored to local culture, ensuring students are both grounded and globally competitive.', fr: "Notre programme est éclairé par des recherches mondiales et adapté à la culture locale, garantissant que les élèves sont ancrés et compétitifs à l'échelle mondiale." },
              },
              {
                icon: <Award size={22} />,
                title: { en: 'Excellence in All Things', fr: "L'excellence en tout" },
                desc: { en: "From academics to sports, arts to community service — we challenge students to pursue excellence in every dimension of their development.", fr: "De l'académique au sport, des arts au service communautaire — nous encourageons les élèves à poursuivre l'excellence dans chaque dimension de leur développement." },
              },
            ].map((v) => (
              <motion.div
                key={v.title.en}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ backgroundColor: '#c49a3c', opacity: 0.55 }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#1a3a52' }}
                >
                  <span className="text-white">{v.icon}</span>
                </div>
                <h3 className="font-display text-xl font-600 text-[#2a1e10] dark:text-white mb-3">{v.title[lang]}</h3>
                <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed">{v.desc[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RÉCOMPENSES ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c49a3c' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c49a3c' }}>
                {lang === 'fr' ? 'Reconnaissances' : 'Recognition'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] dark:text-white mb-3">
              {lang === 'fr' ? 'Prix & distinctions' : 'Awards & Recognitions'}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-400 max-w-xl leading-relaxed">
              {lang === 'fr'
                ? "Providence Academy est régulièrement reconnue par des organismes internationaux pour sa contribution exceptionnelle au développement de l'enfant."
                : "Providence Academy has been consistently recognised by international bodies for its outstanding contribution to child development and education."}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {awards.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.07)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="flex gap-5 p-6 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow relative overflow-hidden"
                style={{ backgroundColor: '#f9f6f1' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ backgroundColor: '#c49a3c', opacity: 0.4 }} />
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(196,154,60,0.15)' }}>
                  <Award size={20} style={{ color: '#c49a3c' }} />
                </div>
                <div>
                  <span className="text-xs font-medium tracking-wide" style={{ color: '#c49a3c' }}>{a.year}</span>
                  <h3 className="font-display text-lg font-600 text-[#2a1e10] dark:text-white mt-0.5 mb-1">{a.title[lang]}</h3>
                  <p className="text-xs text-[#7a6a55] mb-2">{a.body}</p>
                  <p className="text-sm text-[#5a5040] dark:text-gray-300 leading-relaxed">{a.desc[lang]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)' }}
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
              {lang === 'fr' ? 'Direction' : 'Leadership'}
            </p>
            <h2 className="font-display text-4xl font-600 text-white mb-4">
              {lang === 'fr' ? 'Notre équipe de direction' : 'Meet our team'}
            </h2>
            <p className="text-white/65 max-w-lg mx-auto leading-relaxed">
              {lang === 'fr'
                ? "Notre équipe de direction apporte des décennies d'expérience en éducation, développement de l'enfant et administration scolaire."
                : "Our leadership team brings decades of experience in education, child development, and school administration."}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {team.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 340, damping: 26 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/60 via-transparent to-transparent" />
                </div>
                <h3 className="font-display text-xl font-600 text-white">{p.name}</h3>
                <p className="text-sm mt-1" style={{ color: '#c49a3c' }}>{p.role[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c49a3c' }}>
              {lang === 'fr' ? 'Témoignages' : 'Family Stories'}
            </p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white">
              {lang === 'fr' ? 'Histoires de notre communauté' : 'Stories from our community'}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stories.map((s) => (
              <motion.div
                key={s.title.en}
                variants={fadeUp}
                whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.08)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-[#e8ddd0] dark:border-slate-700 transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ backgroundColor: '#c49a3c', opacity: 0.45 }} />
                <div className="flex gap-5">
                  <img
                    src={s.img}
                    alt={s.author}
                    className="w-16 h-16 rounded-full object-cover shrink-0 border-2"
                    style={{ borderColor: '#c49a3c' }}
                  />
                  <div>
                    <h4 className="font-display text-base font-600 text-[#2a1e10] dark:text-white mb-2 leading-snug">
                      {s.title[lang]}
                    </h4>
                    <p className="text-sm text-[#5a5040] dark:text-gray-300 italic leading-relaxed mb-3">
                      &ldquo;{s.quote[lang]}&rdquo;
                    </p>
                    <p className="text-sm font-600 text-[#4a3220] dark:text-white">{s.author}</p>
                    <p className="text-xs text-[#7a6a55] dark:text-gray-400">{s.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-white dark:bg-slate-950">
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
                ? 'Rejoignez la famille Providence Academy'
                : 'Join the Providence Academy family'}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed">
              {lang === 'fr'
                ? "Prenez contact dès aujourd'hui pour en savoir plus sur nos programmes ou réserver la place de votre enfant."
                : "Get in touch today to learn more about our programmes or to reserve your child's place."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors group"
                  style={{ backgroundColor: '#4a3220' }}
                >
                  {t.aboutPage.enquireBtn}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/our-method"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-colors"
                  style={{ border: '1px solid #4a3220', color: '#4a3220' }}
                >
                  {lang === 'fr' ? 'Notre méthode' : 'Our method'}
                  <ChevronRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
