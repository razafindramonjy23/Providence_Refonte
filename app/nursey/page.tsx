'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Clock, Heart, Music, Sparkles, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { easeOut } from '@/lib/motion';

type Lang = 'en' | 'fr';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const programme = {
  en: [
    { time: '7:30 – 8:30', label: 'Welcome & Free Play', desc: 'Children arrive, settle in, and engage in open-ended sensory play.' },
    { time: '8:30 – 9:00', label: 'Circle Time', desc: 'Good-morning songs, weather chart, and the English word of the day.' },
    { time: '9:00 – 9:30', label: 'Guided Activity', desc: 'Art, craft, or structured sensory exploration with a qualified educator.' },
    { time: '9:30 – 10:00', label: 'Snack & Social Time', desc: 'Healthy snack in English with vocabulary building around food.' },
    { time: '10:00 – 11:00', label: 'Outdoor / Movement', desc: 'Garden play, gross-motor activities, and nature discovery.' },
    { time: '11:00 – 11:30', label: 'Story & Music', desc: 'Picture-book storytelling and action songs in English.' },
    { time: '11:30 – 12:00', label: 'Wind-Down & Handover', desc: 'Calm independent play, nappy changes, and parent handover.' },
  ],
  fr: [
    { time: '7h30 – 8h30', label: 'Accueil & Jeu libre', desc: "Les enfants arrivent, s'installent et s'engagent dans un jeu sensoriel ouvert." },
    { time: '8h30 – 9h00', label: 'Temps de regroupement', desc: 'Chansons du matin, tableau météo et le mot anglais du jour.' },
    { time: '9h00 – 9h30', label: 'Activité guidée', desc: 'Art, bricolage ou exploration sensorielle structurée avec un éducateur qualifié.' },
    { time: '9h30 – 10h00', label: 'Collation & temps social', desc: 'Collation saine en anglais avec construction de vocabulaire autour des aliments.' },
    { time: '10h00 – 11h00', label: 'Extérieur / Motricité', desc: 'Jeux dans le jardin, activités motrices et découverte de la nature.' },
    { time: '11h00 – 11h30', label: 'Histoire & Musique', desc: 'Lecture de livres illustrés et chansons en anglais.' },
    { time: '11h30 – 12h00', label: 'Retour au calme & remise', desc: "Jeu calme, change, remise aux parents." },
  ],
};

const features = {
  en: [
    { icon: <Heart size={20} />, title: 'Secure Attachment', desc: 'Each infant is assigned a key person who builds a consistent, nurturing bond.' },
    { icon: <Music size={20} />, title: 'English Through Music', desc: 'Songs, rhymes, and movement are the primary tools for early language exposure.' },
    { icon: <Sparkles size={20} />, title: 'Sensory-Rich Spaces', desc: 'Our rooms are designed to stimulate senses safely — textures, lights, and sounds.' },
    { icon: <Users size={20} />, title: 'Low Ratios', desc: '1:3 carer-to-infant ratio so every child receives focused, individual attention.' },
    { icon: <Star size={20} />, title: 'Daily Reports', desc: 'Parents receive a digital daily log — feeds, naps, activities, and milestones.' },
    { icon: <Clock size={20} />, title: 'Flexible Hours', desc: 'Half-day or full-day sessions available to fit around family schedules.' },
  ],
  fr: [
    { icon: <Heart size={20} />, title: 'Attachement sécurisé', desc: 'Chaque nourrisson est suivi par un référent qui construit un lien constant et bienveillant.' },
    { icon: <Music size={20} />, title: "Anglais par la musique", desc: 'Chansons, comptines et mouvement sont les premiers outils d\'éveil à la langue.' },
    { icon: <Sparkles size={20} />, title: 'Espaces sensoriels', desc: 'Nos salles sont conçues pour stimuler les sens en toute sécurité — textures, lumières, sons.' },
    { icon: <Users size={20} />, title: 'Faibles effectifs', desc: 'Ratio 1 adulte pour 3 bébés afin que chaque enfant bénéficie d\'une attention individuelle.' },
    { icon: <Star size={20} />, title: 'Rapports quotidiens', desc: 'Les parents reçoivent un journal numérique : repas, siestes, activités et étapes clés.' },
    { icon: <Clock size={20} />, title: 'Horaires flexibles', desc: 'Sessions demi-journée ou journée complète pour s\'adapter aux familles.' },
  ],
};

const testimonials = [
  {
    quote: {
      en: "Our daughter said her first English word at just 8 months. The nursery team creates such a warm, language-rich environment — we are amazed every week.",
      fr: "Notre fille a dit son premier mot anglais à 8 mois seulement. L'équipe crée un environnement si chaleureux — nous sommes émerveillés chaque semaine.",
    },
    author: 'Hanta R.',
    role: { en: 'Parent of Léonie, 10 months', fr: 'Parent de Léonie, 10 mois' },
    avatar: 'HR',
    color: '#1a3a52',
  },
  {
    quote: {
      en: "Dropping off a baby is always emotional, but from day one the key person knew exactly how to settle her. Now she smiles every morning when we arrive.",
      fr: "Déposer un bébé est toujours émouvant, mais dès le premier jour la référente savait exactement comment la rassurer. Maintenant elle sourit chaque matin.",
    },
    author: 'Soavina M.',
    role: { en: 'Parent of Cléa, 6 months', fr: 'Parent de Cléa, 6 mois' },
    avatar: 'SM',
    color: '#c41e3a',
  },
];

export default function NurseyPage() {
  const { language } = useLanguage();
  const lang = language as Lang;

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/nursery-event.jpg')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.96) 0%, rgba(26,58,82,0.82) 40%, rgba(26,58,82,0.25) 68%, transparent 100%)',
          }}
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-28 bottom-16 origin-top hidden lg:block"
          style={{ left: 'max(1.5rem, calc(50% - 42rem))', width: 2, backgroundColor: '#c41e3a', opacity: 0.55 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 pl-4 border-l-2"
              style={{ borderColor: '#c41e3a' }}
            >
              <p className="text-[#e8d8d0] text-xs tracking-[0.4em] uppercase font-semibold">
                {lang === 'fr' ? '0 – 18 mois · Petite enfance' : '0 – 18 months · Early Years'}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 text-white leading-[1.07] mb-7"
            >
              {lang === 'fr' ? 'Crèche' : 'Nursery'}
              <span
                className="block text-3xl md:text-4xl font-400 mt-2"
                style={{ color: '#e8d8d0', opacity: 0.85 }}
              >
                {lang === 'fr'
                  ? "L'anglais dès les premiers souffles"
                  : 'English from the very first breaths'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="text-white/78 text-lg leading-relaxed mb-10 max-w-xl"
            >
              {lang === 'fr'
                ? "Notre crèche bilingue accueille les nourrissons de 0 à 18 mois dans un cadre sécurisant et bienveillant, où chaque interaction est une occasion d'éveiller l'oreille à l'anglais."
                : 'Our bilingual nursery welcomes infants from 0 to 18 months in a safe, nurturing environment where every interaction is an opportunity to awaken English naturally.'}
            </motion.p>

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
                  {lang === 'fr' ? 'Réserver une visite' : 'Book a visit'}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/daycare"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/35 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-all duration-200"
                >
                  {lang === 'fr' ? 'Voir la Garderie →' : 'See Daycare →'}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { value: '0–18', label: lang === 'fr' ? 'mois' : 'months' },
                { value: '1:3', label: lang === 'fr' ? 'encadrant / bébé' : 'carer per infant' },
                { value: lang === 'fr' ? 'Bilingue' : 'Bilingual', label: 'EN / FR' },
              ].map((s, i) => (
                <div
                  key={i}
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

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-white/25" />
          <ChevronRight size={12} className="text-white/40 rotate-90" />
        </motion.div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-[#1a3a52] dark:hover:text-white transition-colors">
            {lang === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: '#c41e3a' }}>{lang === 'fr' ? 'Crèche' : 'Nursery'}</span>
        </div>
      </div>

      {/* ── INTRO EDITO ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {lang === 'fr' ? 'Notre approche' : 'Our approach'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 leading-tight mb-6 text-foreground dark:text-white">
              {lang === 'fr'
                ? "Un nid bilingue pour les tout-petits"
                : 'A bilingual nest for the very young'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {lang === 'fr'
                ? "Les recherches en neurosciences montrent que les 18 premiers mois de vie sont une fenêtre d'or pour l'acquisition du langage. Notre programme de crèche tire pleinement parti de cette période en exposant les nourrissons à l'anglais à travers des soins quotidiens, des chansons et des interactions spontanées."
                : "Neuroscience research shows that the first 18 months of life are a golden window for language acquisition. Our nursery programme fully harnesses this period by exposing infants to English through daily care, songs, and spontaneous interactions."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {lang === 'fr'
                ? "Chaque bébé est suivi par un référent dédié qui assure une continuité des soins et un lien affectif stable — condition essentielle à tout apprentissage serein."
                : "Every baby is followed by a dedicated key person who ensures continuity of care and a stable emotional bond — an essential condition for any peaceful learning."}
            </p>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity group"
              style={{ backgroundColor: '#1a3a52' }}
            >
              {lang === 'fr' ? 'Prendre rendez-vous' : 'Schedule a visit'}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {[
              { src: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600', cls: '' },
              { src: 'https://images.pexels.com/photos/3662682/pexels-photo-3662682.jpeg?auto=compress&cs=tinysrgb&w=600', cls: 'mt-8' },
              { src: 'https://images.pexels.com/photos/2869236/pexels-photo-2869236.jpeg?auto=compress&cs=tinysrgb&w=600', cls: '-mt-4' },
              { src: 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=600', cls: 'mt-4' },
            ].map((img, i) => (
              <motion.div key={i} variants={fadeUp} className={`overflow-hidden rounded-xl ${img.cls}`}>
                <img src={img.src} alt="" className="h-48 w-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {lang === 'fr' ? 'Ce qui nous distingue' : 'What sets us apart'}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-600 text-foreground dark:text-white">
              {lang === 'fr' ? 'Une crèche pensée pour votre enfant' : 'A nursery built around your baby'}
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features[lang].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#1a3a52', opacity: 0.5 }} />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: '#1a3a52' }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display text-base font-600 text-foreground dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMME JOURNALIER ── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 pl-3 border-l-2" style={{ borderColor: '#c41e3a' }}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#c41e3a' }}>
                {lang === 'fr' ? 'Journée type' : 'Sample day'}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-600 text-foreground dark:text-white">
              {lang === 'fr' ? 'Un programme structuré & bienveillant' : 'A structured, nurturing daily programme'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm max-w-xl mx-auto">
              {lang === 'fr'
                ? "Les routines sont le socle de la sécurité du nourrisson. Chaque moment de la journée est pensé pour allier soins, éveil et bain de langue."
                : "Routines are the foundation of infant security. Every moment of the day is crafted to combine care, stimulation, and language immersion."}
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {programme[lang].map((slot, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="flex gap-5 p-5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:shadow-md transition-shadow group"
              >
                <div
                  className="shrink-0 text-xs font-semibold tabular-nums pt-0.5 w-24"
                  style={{ color: '#c41e3a' }}
                >
                  {slot.time}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-600 text-sm text-foreground dark:text-white mb-0.5">{slot.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{slot.desc}</p>
                </div>
                <div
                  className="shrink-0 w-1.5 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: '#c41e3a' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c41e3a' }}>
              {lang === 'fr' ? 'Témoignages' : 'Family stories'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-600 text-foreground dark:text-white">
              {lang === 'fr' ? 'Ce que disent les parents' : 'What parents say'}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.08)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-gray-200 dark:border-slate-700 transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#c41e3a', opacity: 0.4 }} />
                <div className="flex gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-600 text-sm text-foreground dark:text-white">{t.author}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{t.role[lang]}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &ldquo;{t.quote[lang]}&rdquo;
                </p>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={12} fill="#c41e3a" className="text-[#c41e3a]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CROSS-LINK ── */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-2" style={{ color: '#c41e3a' }}>
              {lang === 'fr' ? 'Autres programmes' : 'Other programmes'}
            </p>
            <h2 className="font-display text-2xl font-600 text-foreground dark:text-white">
              {lang === 'fr' ? 'Continuez le voyage avec nous' : 'Continue the journey with us'}
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                href: '/daycare',
                img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? '18 mois – 3 ans' : '18 months – 3 yrs',
                title: lang === 'fr' ? 'Garderie' : 'Daycare',
              },
              {
                href: '/about',
                img: 'https://images.pexels.com/photos/764525/pexels-photo-764525.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? 'Qui sommes-nous' : 'Who we are',
                title: lang === 'fr' ? 'À propos' : 'About us',
              },
              {
                href: '/enquire',
                img: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? 'Inscriptions' : 'Enrolments',
                title: lang === 'fr' ? 'Nous contacter' : 'Get in touch',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <Link href={card.href}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/85 via-[#1a3a52]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <p className="text-[10px] text-[#e8d8d0] tracking-[0.25em] uppercase mb-1">{card.eyebrow}</p>
                    <h3 className="font-display text-xl font-600">{card.title}</h3>
                  </div>
                  <div
                    className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: 'rgba(196,30,58,0.85)' }}
                  >
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)' }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="inline-block w-8 h-0.5 mb-6" style={{ backgroundColor: '#c41e3a' }} />
            <h2 className="font-display text-4xl font-600 text-white mb-4">
              {lang === 'fr' ? 'Prêt à confier votre bébé ?' : 'Ready to welcome your baby?'}
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              {lang === 'fr'
                ? "Visitez notre crèche et rencontrez l'équipe. Les places sont limitées — réservez dès maintenant."
                : 'Visit our nursery and meet the team. Places are limited — reserve yours today.'}
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors group"
                style={{ backgroundColor: '#c41e3a' }}
              >
                {lang === 'fr' ? 'Réserver une visite' : 'Book a visit'}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
