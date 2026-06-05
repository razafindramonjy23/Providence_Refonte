'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronRight, Clock, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';
import { easeOut } from '@/lib/motion';

const countries = [
  'United Kingdom', 'France', 'Italy', 'Germany', 'Spain', 'United States',
  'Canada', 'Australia', 'New Zealand', 'Singapore', 'UAE', 'South Africa', 'Other'
];

type Lang = 'en' | 'fr';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const trustItems = [
  {
    icon: <Clock size={18} />,
    title: { en: 'Response within 24h', fr: 'Réponse sous 24h' },
    desc: {
      en: 'Our admissions team responds to all enquiries within one business day.',
      fr: "Notre équipe d'admission répond à toutes les demandes dans un délai d'un jour ouvrable.",
    },
  },
  {
    icon: <Mail size={18} />,
    title: { en: 'Personal consultation', fr: 'Consultation personnelle' },
    desc: {
      en: 'Each family receives a tailored conversation with an experienced advisor.',
      fr: "Chaque famille bénéficie d'un entretien personnalisé avec un conseiller expérimenté.",
    },
  },
  {
    icon: <MessageSquare size={18} />,
    title: { en: 'No commitment required', fr: 'Sans engagement' },
    desc: {
      en: 'Ask questions freely — there is no obligation to enrol after your enquiry.',
      fr: "Posez vos questions librement — aucune obligation d'inscription après votre demande.",
    },
  },
];

const inputClass =
  'w-full px-4 py-3 border border-[#e0d5c8] dark:border-slate-600 rounded-lg bg-[#faf7f4] dark:bg-slate-700 text-[#2a1e10] dark:text-white placeholder-[#b0a090] dark:placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-slate-600 transition-all text-sm';

export default function EnquirePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as Lang;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 rounded-full bg-[#1a3a52]/10 dark:bg-red-600/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-[#1a3a52] dark:text-red-500" />
            </div>
            <h2 className="font-display text-3xl font-600 text-[#2a1e10] dark:text-white mb-4">
              {t.enquire.page.submitted}
            </h2>
            <p className="text-[#5a5040] dark:text-gray-300 leading-relaxed mb-8">
              {t.enquire.page.submittedMessage}
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1a3a52] dark:bg-red-600 text-white text-sm font-medium rounded-sm hover:bg-[#132844] dark:hover:bg-red-700 transition-colors group"
            >
              {t.enquire.page.backToHome}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,58,82,0.96) 0%, rgba(26,58,82,0.80) 45%, rgba(26,58,82,0.20) 80%, transparent 100%)',
          }}
        />

        {/* Gold vertical line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[max(2rem,calc(50%-42rem))] top-32 bottom-16 origin-top hidden lg:block"
          style={{ width: 2, backgroundColor: '#c49a3c', opacity: 0.6 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
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
                {t.enquire.page.tagline}
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.06] mb-6 text-white"
            >
              {t.enquire.page.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.enquire.page.description}
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: lang === 'fr' ? 'Réponse rapide' : 'Fast response',      sub: lang === 'fr' ? 'Sous 24h'  : 'Within 24h' },
                { label: lang === 'fr' ? 'Sans engagement' : 'No commitment',     sub: lang === 'fr' ? 'Consultation gratuite' : 'Free consultation' },
                { label: lang === 'fr' ? '2 campus' : '2 campuses',               sub: lang === 'fr' ? 'Édimbourg · Rome' : 'Edinburgh · Rome' },
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

      {/* ── TRUST SIGNALS ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1a3a52' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.title.en}
                variants={fadeUp}
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0"
                  style={{ backgroundColor: 'rgba(196,154,60,0.22)' }}
                >
                  <span style={{ color: '#c49a3c' }}>{item.icon}</span>
                </div>
                <h3 className="font-display text-base font-600 text-white mb-2">{item.title[lang]}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-24 bg-[#f8f2ec] dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="inline-block w-10 h-0.5 mb-5" style={{ backgroundColor: '#c49a3c' }} />
            <h2 className="font-display text-4xl font-600 text-[#2a1e10] dark:text-white">
              {lang === 'fr' ? 'Votre demande' : 'Your enquiry'}
            </h2>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* 1 — Parent details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-[#e8ddd0] dark:border-slate-700 overflow-hidden"
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: '#1a3a52' }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-700 text-sm shrink-0"
                    style={{ backgroundColor: '#1a3a52' }}
                  >
                    1
                  </div>
                  <h3 className="font-display text-xl font-600 text-[#2a1e10] dark:text-white">
                    {t.enquire.page.parentDetails}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { label: t.enquire.page.firstName, placeholder: t.enquire.page.firstName, type: 'text', required: true },
                    { label: lang === 'fr' ? 'Nom' : 'Last name', placeholder: lang === 'fr' ? 'Nom du parent / tuteur' : 'Parent / guardian last name', type: 'text', required: true },
                    { label: lang === 'fr' ? 'Email' : 'Email', placeholder: lang === 'fr' ? 'Email du parent / tuteur' : 'Parent / guardian email', type: 'email', required: true },
                    { label: lang === 'fr' ? 'Téléphone' : 'Phone', placeholder: lang === 'fr' ? 'Numéro de téléphone' : 'Parent / guardian phone number', type: 'tel', required: false },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                        {field.label}{' '}
                        {field.required
                          ? <span className="text-red-400 normal-case tracking-normal">*</span>
                          : <span className="text-[#b0a090] dark:text-gray-500 normal-case tracking-normal font-normal">({lang === 'fr' ? 'optionnel' : 'optional'})</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={`${inputClass} focus:border-[#1a3a52] dark:focus:border-red-500`}
                      />
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                      {lang === 'fr' ? 'Pays de résidence' : 'Country of Residence'}{' '}
                      <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        defaultValue=""
                        className={`${inputClass} focus:border-[#1a3a52] dark:focus:border-red-500 appearance-none`}
                      >
                        <option value="" disabled>
                          {lang === 'fr' ? 'Sélectionner le pays de résidence' : 'Select country of residence'}
                        </option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#7a6a55] dark:text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2 — Student details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-[#e8ddd0] dark:border-slate-700 overflow-hidden"
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: '#c49a3c' }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-700 text-sm shrink-0"
                    style={{ backgroundColor: '#c49a3c' }}
                  >
                    2
                  </div>
                  <h3 className="font-display text-xl font-600 text-[#2a1e10] dark:text-white">
                    {lang === 'fr' ? "Détails de l'élève" : 'Student details'}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                      {lang === 'fr' ? 'Prénom' : 'First name'} <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <input type="text" required placeholder={lang === 'fr' ? "Prénom de l'élève" : 'Student first name'}
                      className={`${inputClass} focus:border-[#c49a3c] dark:focus:border-amber-400`} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                      {lang === 'fr' ? 'Nom' : 'Last name'} <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <input type="text" required placeholder={lang === 'fr' ? "Nom de l'élève" : 'Student last name'}
                      className={`${inputClass} focus:border-[#c49a3c] dark:focus:border-amber-400`} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                      {lang === 'fr' ? 'Date de naissance' : 'Date of birth'} <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <input type="date" required
                      className={`${inputClass} focus:border-[#c49a3c] dark:focus:border-amber-400`} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                      {lang === 'fr' ? 'Date de début souhaitée' : 'Desired start date'} <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <input type="date" required
                      className={`${inputClass} focus:border-[#c49a3c] dark:focus:border-amber-400`} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 — Enquiry details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-[#e8ddd0] dark:border-slate-700 overflow-hidden"
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: '#7a3a2a' }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-700 text-sm shrink-0"
                    style={{ backgroundColor: '#7a3a2a' }}
                  >
                    3
                  </div>
                  <h3 className="font-display text-xl font-600 text-[#2a1e10] dark:text-white">
                    {lang === 'fr' ? 'Détails de votre demande' : 'Enquiry details'}
                  </h3>
                </div>

                <label className="block text-xs tracking-wide uppercase font-semibold text-[#7a6a55] dark:text-gray-400 mb-2">
                  {lang === 'fr' ? 'Votre message' : 'Your enquiry'} <span className="text-red-400 normal-case tracking-normal">*</span>
                </label>
                <p className="text-xs text-[#9a8a75] dark:text-gray-500 mb-3 leading-relaxed">
                  {lang === 'fr'
                    ? "Partagez quelques informations sur votre enfant et votre famille afin que nous puissions vous aider efficacement."
                    : 'Please provide a little more information so we can help with your enquiry as efficiently as possible. Feel free to share more about your child and family.'}
                </p>
                <textarea
                  required
                  rows={6}
                  placeholder={lang === 'fr'
                    ? "Parlez-nous de votre enfant, de vos objectifs et de vos questions..."
                    : "Tell us about your child, your goals, and any questions you have..."}
                  className={`${inputClass} focus:border-[#7a3a2a] dark:focus:border-red-400 resize-none`}
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.03 }}
                whileTap={loading ? {} : { scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold text-white rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed group"
                style={{ backgroundColor: '#4a3220' }}
              >
                {loading
                  ? (lang === 'fr' ? 'Envoi en cours...' : 'Submitting...')
                  : t.enquire.page.submit}
                {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
              </motion.button>
              <p className="text-xs text-[#9a8a75] dark:text-gray-500">
                {lang === 'fr'
                  ? 'Nous vous répondrons dans un délai d\'un jour ouvrable.'
                  : 'We will respond within one business day.'}
              </p>
            </motion.div>

          </form>
        </div>
      </section>
    </main>
  );
}
