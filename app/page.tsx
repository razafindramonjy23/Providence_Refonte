'use client';

import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Globe, Star, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/lib/contexts';
import HomeImage from '@/assets/Images/Home.jpeg';
import { easeOut } from '@/lib/motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Image pleine visibilité */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
          }}
        />
        {/* Dégradé latéral : texte lisible à gauche, image visible à droite */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.95) 0%, rgba(26,58,82,0.80) 38%, rgba(26,58,82,0.25) 65%, transparent 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Ligne verticale dorée décorative */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-28 bottom-16 origin-top hidden lg:block"
          style={{ left: 'max(1.5rem, calc(50% - 42rem))', width: 2, backgroundColor: '#c41e3a', opacity: 0.55 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 pl-4 border-l-2"
              style={{ borderColor: '#c41e3a' }}
            >
              <p className="text-[#e8d8d0] text-xs tracking-[0.4em] uppercase font-semibold">
                {t.hero.tagline}
              </p>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 text-white leading-[1.07] mb-7"
            >
              {t.hero.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="text-white/78 text-lg leading-relaxed mb-10 max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c41e3a] text-white text-sm font-semibold rounded-sm hover:bg-[#a01729] transition-all duration-200 group"
                >
                  {language === 'fr' ? 'Tester mon niveau gratuitement' : 'Test my level for free'}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/35 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-all duration-200"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(196,30,58,0.25)' }}
                  >
                    <Play size={10} fill="white" className="ml-0.5" />
                  </span>
                  {t.hero.aboutBtn}
                </Link>
              </motion.div>
            </motion.div>

            {/* Pills stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { value: '500+', label: language === 'fr' ? 'Apprenants' : 'Students' },
                { value: '4.9/5', label: language === 'fr' ? 'Note moyenne' : 'Avg rating' },
                { value: '92%', label: language === 'fr' ? 'Réussite' : 'Pass rate' },
              ].map((s) => (
                <div
                  key={s.value}
                  className="px-4 py-2.5 rounded-full text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.09)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'white',
                  }}
                >
                  <span className="font-bold" style={{ color: '#c41e3a' }}>{s.value}</span>
                  <span className="text-white/65 ml-1.5 text-xs">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-white/25" />
          <ChevronRight size={12} className="text-white/40 rotate-90" />
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ backgroundColor: '#1a3a52' }} className="text-white py-10 relative overflow-hidden">
        {/* Motif subtil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 10px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: language === 'fr' ? 'Apprenants formés' : 'Students trained' },
            { value: '4.9/5', label: language === 'fr' ? 'Note moyenne' : 'Average rating' },
            { value: '92%', label: language === 'fr' ? 'Taux de réussite' : 'Pass rate' },
            {
              value: language === 'fr' ? '0–12 ans' : '0–12 yrs',
              label: language === 'fr' ? 'Crèche · Garderie · Primaire' : 'Nursery · Daycare · Primary',
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-700" style={{ color: '#c41e3a' }}>{s.value}</p>
              <p className="text-sm text-white/65 mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={HomeImage.src}
                alt="Students learning"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay subtil pour la photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true, margin: '-80px' }}
              className="absolute -bottom-5 -right-5 hidden md:block text-white p-5 rounded-xl w-48"
              style={{ backgroundColor: '#1a3a52', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-display text-3xl font-700" style={{ color: '#c41e3a' }}>4.9<span className="text-base">/5</span></p>
              <p className="text-xs text-white/75 mt-1 leading-snug">
                {language === 'fr' ? 'Note moyenne des familles' : 'Average family rating'}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {t.about.title}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-foreground dark:text-white leading-tight mb-6">
              {t.about.subtitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {t.about.description1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t.about.description2}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#1a3a52' }}
              >
                {language === 'fr' ? 'Tester mon niveau' : 'Test my level'}
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-foreground dark:text-white text-sm font-medium rounded-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES "Pourquoi nous choisir" ── */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {language === 'fr' ? 'Notre différence' : 'Our difference'}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-600 text-foreground dark:text-white">
              {language === 'fr' ? 'Pourquoi les familles nous font confiance' : 'Why families trust us'}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: <BookOpen size={22} />,
                title: language === 'fr' ? 'Par le jeu & les histoires' : 'Through play & stories',
                desc: language === 'fr'
                  ? "Chansons, jeux sensoriels et routines : l'anglais devient naturel."
                  : 'Songs, sensory play and routines — English begins to feel natural.',
              },
              {
                icon: <Globe size={22} />,
                title: language === 'fr' ? 'Horaires famille' : 'Family-friendly hours',
                desc: language === 'fr'
                  ? 'Accueil et cours pensés pour les emplois du temps des parents.'
                  : 'Care and classes that respect busy family schedules.',
              },
              {
                icon: <Award size={22} />,
                title: language === 'fr' ? 'Enseignants formés' : 'Trained teachers',
                desc: language === 'fr'
                  ? 'Petits groupes et professionnels habitués aux tout-petits.'
                  : 'Small groups with staff used to working with young children.',
              },
              {
                icon: <Star size={22} />,
                title: language === 'fr' ? 'Suivi des parents' : 'Parent partnership',
                desc: language === 'fr'
                  ? 'Nous écoutons vos questions et célébrons chaque petit progrès.'
                  : 'We answer your questions and celebrate every small step forward.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {/* Accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: '#1a3a52', opacity: 0.5 }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: '#1a3a52' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-600 text-foreground dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── KEY STAGES — Petite enfance ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
                <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                  {language === 'fr' ? 'Petite enfance · 0–5 ans' : 'Early years · 0–5'}
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-foreground dark:text-white">
                {language === 'fr' ? 'Crèche, garderie & préscolaire' : 'Nursery, daycare & preschool'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                {language === 'fr'
                  ? "L'anglais dès les premières années, dans un cadre bienveillant."
                  : 'English from the very first years, in a caring environment.'}
              </p>
            </div>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-1.5 text-sm font-medium pb-0.5 border-b transition-colors"
              style={{ color: '#1a3a52', borderColor: '#1a3a52' }}
            >
              {language === 'fr' ? 'Voir tous les programmes' : 'See all programmes'}
              <ChevronRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                href: '/programmes/creche',
                img: 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=800',
                eyebrow: language === 'fr' ? '0–18 mois' : '0–18 months',
                title: language === 'fr' ? 'Crèche' : 'Nursery',
              },
              {
                href: '/programmes/garderie',
                img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
                eyebrow: language === 'fr' ? '18 mois – 3 ans' : '18 months – 3 yrs',
                title: language === 'fr' ? 'Garderie' : 'Daycare',
              },
              {
                href: '/programmes/prescolaire',
                img: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=800',
                eyebrow: language === 'fr' ? '3–5 ans' : '3–5 years',
                title: language === 'fr' ? 'Préscolaire' : 'Preschool',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              >
                <Link href={item.href}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dégradé bas uniquement — image visible en haut */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/85 via-[#1a3a52]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-[10px] text-[#e8d8d0] tracking-[0.25em] uppercase mb-1.5">{item.eyebrow}</p>
                    <h3 className="font-display text-2xl font-600">{item.title}</h3>
                  </div>
                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: 'rgba(196,30,58,0.85)' }}>
                    <ArrowRight size={13} className="text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {language === 'fr' ? 'Notre équipe' : 'Our team'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-foreground dark:text-white leading-tight mb-4">
              {language === 'fr' ? 'Des formateurs certifiés' : 'Certified trainers'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              {language === 'fr'
                ? "Une équipe plurinationale dédiée à l'apprentissage de l'anglais dès le plus jeune âge."
                : 'A multinational team dedicated to English learning from the earliest age.'}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { initials: 'JM', name: 'James Miller', role: language === 'fr' ? 'Anglais des affaires' : 'Business English', flag: '🇺🇸', color: '#1a3a52' },
              { initials: 'SR', name: 'Sarah Reynolds', role: 'IELTS / TOEFL', flag: '🇬🇧', color: '#c41e3a' },
              { initials: 'AR', name: 'Aina Rakoto', role: language === 'fr' ? 'Juniors & Débutants' : 'Juniors & Beginners', flag: '🇲🇬', color: '#0F6E56' },
              { initials: 'TC', name: 'Tom Crawford', role: language === 'fr' ? 'Anglais général' : 'General English', flag: '🇨🇦', color: '#A32D2D' },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow text-center relative overflow-hidden"
              >
                {/* Barre couleur en haut */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: member.color }} />
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 mt-2 flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <p className="font-display text-base font-600 text-foreground dark:text-white mb-1">{member.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{member.role}</p>
                <span className="text-xl">{member.flag}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="inline-block w-8 h-0.5 mb-6" style={{ backgroundColor: '#c41e3a' }} />
            <h2 className="font-display text-4xl font-600 text-white mb-4">
              {language === 'fr' ? 'Prêt à commencer ?' : 'Ready to start?'}
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              {language === 'fr'
                ? 'Testez votre niveau gratuitement et rejoignez la prochaine session.'
                : 'Test your level for free and join the next session.'}
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors group"
                style={{ backgroundColor: '#c41e3a' }}
              >
                {language === 'fr' ? 'Tester mon niveau gratuitement' : 'Test my level for free'}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}