'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, BookOpen, Clock, Globe, Palette, Shield, Smile } from 'lucide-react';
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
    { time: '7:30 – 8:30', label: 'Arrival & Free Choice', desc: 'Calm transition into the day with self-selected play stations.' },
    { time: '8:30 – 9:00', label: 'Morning Circle', desc: 'English calendar, weather, and the "Question of the Day" to build speaking confidence.' },
    { time: '9:00 – 9:45', label: 'Literacy & Language', desc: 'Phonics games, picture books, and vocabulary building in English.' },
    { time: '9:45 – 10:15', label: 'Snack Break', desc: 'Healthy snack with structured conversation time in English and French.' },
    { time: '10:15 – 11:15', label: 'Creative Workshop', desc: 'Art, construction, or dramatic play — imagination leads the session.' },
    { time: '11:15 – 12:00', label: 'Outdoor Exploration', desc: 'Garden, movement challenges, and collaborative nature activities.' },
    { time: '12:00 – 12:45', label: 'Lunch', desc: 'Bilingual mealtime with table manners and social conversation.' },
    { time: '12:45 – 14:15', label: 'Rest / Quiet Time', desc: 'Nap for younger children; calm independent activities for older toddlers.' },
    { time: '14:15 – 15:00', label: 'Numeracy & Discovery', desc: 'Counting, colours, shapes, and simple science experiments in English.' },
    { time: '15:00 – 15:30', label: 'Story & Wind-Down', desc: 'A final English story, reflection on the day, and parent handover.' },
  ],
  fr: [
    { time: '7h30 – 8h30', label: 'Accueil & Choix libre', desc: "Transition douce vers la journée avec des ateliers libres au choix de l'enfant." },
    { time: '8h30 – 9h00', label: 'Regroupement du matin', desc: 'Calendrier en anglais, météo et la "Question du jour" pour développer l\'expression orale.' },
    { time: '9h00 – 9h45', label: 'Littératie & Langage', desc: 'Jeux de phonétique, livres illustrés et enrichissement du vocabulaire en anglais.' },
    { time: '9h45 – 10h15', label: 'Collation', desc: 'Collation saine avec un temps de conversation structuré en anglais et en français.' },
    { time: '10h15 – 11h15', label: 'Atelier créatif', desc: "Art, construction ou jeu dramatique — l'imagination guide la séance." },
    { time: '11h15 – 12h00', label: 'Exploration extérieure', desc: 'Jardin, défis de motricité et activités collaboratives en nature.' },
    { time: '12h00 – 12h45', label: 'Déjeuner', desc: 'Repas bilingue avec apprentissage des bonnes manières et conversation sociale.' },
    { time: '12h45 – 14h15', label: 'Repos / Temps calme', desc: 'Sieste pour les plus jeunes ; activités calmes et autonomes pour les grands.' },
    { time: '14h15 – 15h00', label: 'Numératie & Découverte', desc: 'Comptage, couleurs, formes et petites expériences scientifiques en anglais.' },
    { time: '15h00 – 15h30', label: 'Histoire & Retour au calme', desc: 'Dernière histoire en anglais, bilan de la journée et remise aux parents.' },
  ],
};

const features = {
  en: [
    { icon: <BookOpen size={20} />, title: 'Bilingual Immersion', desc: 'English is the primary language of instruction; French is used for cultural bridge activities.' },
    { icon: <Palette size={20} />, title: 'Creative Learning', desc: 'Art, music, and dramatic play are woven into every theme — learning through doing.' },
    { icon: <Globe size={20} />, title: 'Cultural Openness', desc: 'We celebrate world cultures throughout the year through food, stories, and traditions.' },
    { icon: <Shield size={20} />, title: 'Safe Environment', desc: 'All staff are first-aid certified. Our facilities are fully inspected and secured.' },
    { icon: <Smile size={20} />, title: 'Social Confidence', desc: 'Small groups encourage children to express themselves freely and build real friendships.' },
    { icon: <Clock size={20} />, title: 'Extended Hours', desc: 'Full-day sessions (7:30–17:00) available with an optional after-care programme.' },
  ],
  fr: [
    { icon: <BookOpen size={20} />, title: 'Immersion bilingue', desc: "L'anglais est la langue principale d'enseignement ; le français est utilisé comme pont culturel." },
    { icon: <Palette size={20} />, title: 'Apprentissage créatif', desc: "Art, musique et jeu dramatique sont tissés dans chaque thème — apprendre par l'action." },
    { icon: <Globe size={20} />, title: 'Ouverture culturelle', desc: 'Nous célébrons les cultures du monde tout au long de l\'année à travers nourriture, histoires et traditions.' },
    { icon: <Shield size={20} />, title: 'Environnement sécurisé', desc: 'Tout le personnel est formé aux premiers secours. Nos locaux sont entièrement inspectés et sécurisés.' },
    { icon: <Smile size={20} />, title: 'Confiance sociale', desc: 'Les petits groupes encouragent les enfants à s\'exprimer librement et à nouer de vraies amitiés.' },
    { icon: <Clock size={20} />, title: 'Horaires étendus', desc: "Journée complète (7h30–17h00) disponible avec un programme d'accueil périscolaire optionnel." },
  ],
};

const milestones = {
  en: [
    { age: '18 mo', milestone: 'Points to familiar objects, says 10–20 words in either language.' },
    { age: '2 yrs', milestone: 'Combines 2 words ("more milk", "big dog"), follows simple 2-step instructions.' },
    { age: '2½ yrs', milestone: 'Uses pronouns (I, me, you), asks simple questions, sings familiar songs.' },
    { age: '3 yrs', milestone: 'Speaks in short sentences, talks about the day, bilingual vocabulary of 200+ words.' },
  ],
  fr: [
    { age: '18 mois', milestone: 'Désigne des objets familiers, dit 10 à 20 mots dans l\'une ou l\'autre langue.' },
    { age: '2 ans', milestone: 'Associe 2 mots ("encore lait", "grand chien"), suit des instructions simples en 2 étapes.' },
    { age: '2 ans ½', milestone: 'Utilise les pronoms (je, moi, tu), pose des questions simples, chante des comptines.' },
    { age: '3 ans', milestone: "Parle en courtes phrases, raconte sa journée, vocabulaire bilingue de plus de 200 mots." },
  ],
};

const testimonials = [
  {
    quote: {
      en: "My son went from zero English to counting and singing in English within three months. The team is patient, warm, and truly passionate about early language.",
      fr: "Mon fils est passé de zéro anglais à compter et chanter en anglais en trois mois. L'équipe est patiente, chaleureuse et vraiment passionnée par le langage précoce.",
    },
    author: 'Andry R.',
    role: { en: 'Parent of Liam, 2 years', fr: 'Parent de Liam, 2 ans' },
    avatar: 'AR',
    color: '#1a3a52',
  },
  {
    quote: {
      en: "The daily programme is incredible — structured but never rigid. My daughter runs in every morning and does not want to leave in the afternoon.",
      fr: "Le programme quotidien est incroyable — structuré mais jamais rigide. Ma fille court chaque matin et ne veut pas partir l'après-midi.",
    },
    author: 'Mirana F.',
    role: { en: 'Parent of Zoé, 2½ years', fr: 'Parent de Zoé, 2 ans ½' },
    avatar: 'MF',
    color: '#c41e3a',
  },
  {
    quote: {
      en: "As expat parents, we were worried about language. Providence Daycare gave our son a bilingual head start we could never have managed at home.",
      fr: "En tant que parents expatriés, nous étions inquiets pour la langue. La garderie Providence a donné à notre fils une longueur d'avance bilingue que nous n'aurions jamais pu gérer à la maison.",
    },
    author: 'Sophie & Marc D.',
    role: { en: 'Parents of Hugo, 3 years', fr: 'Parents de Hugo, 3 ans' },
    avatar: 'SD',
    color: '#0F6E56',
  },
];

export default function DaycarePage() {
  const { language } = useLanguage();
  const lang = language as Lang;

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/students-field-trip.jpeg')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.96) 0%, rgba(26,58,82,0.82) 40%, rgba(26,58,82,0.22) 68%, transparent 100%)',
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
                {lang === 'fr' ? '18 mois – 3 ans · Garderie' : '18 months – 3 yrs · Daycare'}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 text-white leading-[1.07] mb-7"
            >
              {lang === 'fr' ? 'Garderie' : 'Daycare'}
              <span
                className="block text-3xl md:text-4xl font-400 mt-2"
                style={{ color: '#e8d8d0', opacity: 0.85 }}
              >
                {lang === 'fr'
                  ? "Explorer, créer, grandir en anglais"
                  : 'Explore, create, grow in English'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="text-white/78 text-lg leading-relaxed mb-10 max-w-xl"
            >
              {lang === 'fr'
                ? "Notre garderie bilingue accueille les tout-petits de 18 mois à 3 ans dans un environnement stimulant où le jeu, la créativité et l'anglais se fondent naturellement au quotidien."
                : 'Our bilingual daycare welcomes toddlers from 18 months to 3 years in a stimulating environment where play, creativity, and English naturally blend into every day.'}
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
                  {lang === 'fr' ? 'Inscrire mon enfant' : 'Enrol my child'}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/nursey"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/35 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-all duration-200"
                >
                  {lang === 'fr' ? '← Voir la Crèche' : '← See Nursery'}
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
                { value: '18 mo – 3', label: lang === 'fr' ? 'ans' : 'yrs' },
                { value: '1:4', label: lang === 'fr' ? 'éducateur / enfant' : 'educator per child' },
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
          <span style={{ color: '#c41e3a' }}>{lang === 'fr' ? 'Garderie' : 'Daycare'}</span>
        </div>
      </div>

      {/* ── INTRO ── */}
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
                {lang === 'fr' ? 'Notre programme' : 'Our programme'}
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-600 leading-tight mb-6 text-foreground dark:text-white">
              {lang === 'fr'
                ? "L'âge d'or de la curiosité"
                : 'The golden age of curiosity'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {lang === 'fr'
                ? "Entre 18 mois et 3 ans, le cerveau de l'enfant est en pleine explosion linguistique. Notre garderie capitalise sur cette période clé en offrant un bain de langue anglais quotidien, intégré dans des activités qui captivent naturellement les tout-petits : art, musique, jeu symbolique et exploration."
                : "Between 18 months and 3 years, the child's brain is in full language explosion. Our daycare capitalises on this key period by offering daily English immersion, embedded in activities that naturally captivate toddlers: art, music, symbolic play, and exploration."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {lang === 'fr'
                ? "Nos éducateurs bilingues veillent à ce que chaque transition — collation, rangement, promenade — devienne un moment d'apprentissage informel de l'anglais, sans pression ni formalisme."
                : "Our bilingual educators ensure that every transition — snack time, tidy-up, outdoor walk — becomes an informal English learning moment, without pressure or formality."}
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
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3662682/pexels-photo-3662682.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children in daycare"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/30 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 hidden md:block text-white p-5 rounded-xl w-52"
              style={{ backgroundColor: '#1a3a52', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-display text-3xl font-700" style={{ color: '#c41e3a' }}>
                1:4
              </p>
              <p className="text-xs text-white/75 mt-1 leading-snug">
                {lang === 'fr' ? 'Ratio éducateur / enfant' : 'Educator to child ratio'}
              </p>
            </motion.div>
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
              {lang === 'fr' ? 'Une garderie conçue pour s\'épanouir' : 'A daycare designed for flourishing'}
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
              {lang === 'fr' ? 'Une journée pleine et équilibrée' : 'A full and balanced day'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm max-w-xl mx-auto">
              {lang === 'fr'
                ? "Chaque heure est pensée pour alterner stimulation et repos, socialisation et exploration individuelle."
                : "Every hour is designed to alternate stimulation and rest, socialisation and individual exploration."}
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

      {/* ── LANGUAGE MILESTONES ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: '#c41e3a' }}>
              {lang === 'fr' ? 'Jalons du langage' : 'Language milestones'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-600 text-white mb-3">
              {lang === 'fr' ? 'Ce que votre enfant atteindra' : 'What your child will achieve'}
            </h2>
            <p className="text-white/60 max-w-lg mx-auto text-sm leading-relaxed">
              {lang === 'fr'
                ? "Ces jalons sont indicatifs et varient d'un enfant à l'autre. Notre équipe suit chaque progression individuellement."
                : 'These milestones are indicative and vary per child. Our team tracks each progression individually.'}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {milestones[lang].map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="p-6 rounded-xl flex gap-4"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <div
                  className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold self-start"
                  style={{ backgroundColor: '#c41e3a', color: 'white' }}
                >
                  {m.age}
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{m.milestone}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
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
              {lang === 'fr' ? 'Ce que disent les familles' : 'What families say'}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
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
                className="bg-white dark:bg-slate-900 p-7 rounded-xl border border-gray-200 dark:border-slate-700 transition-shadow relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#c41e3a', opacity: 0.4 }} />
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote[lang]}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-600 text-sm text-foreground dark:text-white">{t.author}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{t.role[lang]}</p>
                  </div>
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
              {lang === 'fr' ? 'Toute la filière Providence' : 'The full Providence pathway'}
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
                href: '/nursey',
                img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? '0 – 18 mois' : '0 – 18 months',
                title: lang === 'fr' ? 'Crèche' : 'Nursery',
              },
              {
                href: '/our-method',
                img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? 'Pédagogie' : 'Pedagogy',
                title: lang === 'fr' ? 'Notre méthode' : 'Our method',
              },
              {
                href: '/enquire',
                img: 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=600',
                eyebrow: lang === 'fr' ? 'Inscriptions ouvertes' : 'Enrolment open',
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
              {lang === 'fr' ? 'Une place pour votre enfant ?' : 'A place for your child?'}
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              {lang === 'fr'
                ? "Les effectifs sont réduits pour garantir la qualité. Réservez votre visite dès aujourd'hui pour ne pas manquer la prochaine rentrée."
                : "Cohorts are kept small to guarantee quality. Book your visit today so you do not miss the next intake."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm transition-colors group"
                  style={{ backgroundColor: '#c41e3a' }}
                >
                  {lang === 'fr' ? 'Inscrire mon enfant' : 'Enrol my child'}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/nursey"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-colors border border-white/25 text-white hover:bg-white/10"
                >
                  {lang === 'fr' ? 'Voir la Crèche' : 'See Nursery'}
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
