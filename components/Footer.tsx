'use client';

import Link from 'next/link';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/lib/contexts';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { easeOut } from '@/lib/motion';

type Lang = 'en' | 'fr';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as Lang;

  const links = {
    partners: [
      { label: { en: 'Work With Us', fr: 'Travailler avec nous' }, href: '#' },
      { label: { en: 'Schools',      fr: 'Écoles' },               href: '#' },
      { label: { en: 'Agents',       fr: 'Agents' },               href: '#' },
    ],
    school: [
      { label: { en: 'Alumni',    fr: 'Anciens élèves' }, href: '/about' },
      { label: { en: 'Careers',   fr: 'Carrières' },      href: '#' },
      { label: { en: 'Feedback',  fr: 'Retours' },        href: '#' },
      { label: { en: 'Policies',  fr: 'Politiques' },     href: '#' },
    ],
    stages: [
      { label: { en: 'Early Years',  fr: 'Petite enfance' }, href: '/' },
      { label: { en: 'Primary',      fr: 'Primaire' },        href: '/' },
      { label: { en: 'Secondary',    fr: 'Secondaire' },      href: '/secondary' },
      { label: { en: 'GCSE',         fr: 'GCSE' },            href: '/secondary' },
      { label: { en: 'Sixth Form',   fr: 'Terminale' },       href: '/secondary' },
    ],
    updates: [
      { label: { en: 'Blog',       fr: 'Blog' },        href: '#' },
      { label: { en: 'CSR',        fr: 'RSE' },         href: '#' },
      { label: { en: 'Community',  fr: 'Communauté' },  href: '#' },
    ],
  };

  const columns = [
    { heading: t.footer.partners, items: links.partners },
    { heading: t.footer.ourSchool, items: links.school },
    { heading: t.footer.stages, items: links.stages },
    { heading: t.footer.updates, items: links.updates },
  ];

  return (
    <footer className="bg-[#1a3a52] dark:bg-slate-950 text-white overflow-hidden">

      {/* ── CTA BANNER ── */}
      <div className="relative border-b border-white/10">
        {/* Subtle diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold rule */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c49a3c]" />
              <span className="text-[#c49a3c] text-xs tracking-[0.35em] uppercase font-medium">
                Providence Academy
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-600 text-white leading-[1.15] max-w-lg">
              {lang === 'fr'
                ? <>Rejoignez Providence et offrez à vos enfants <span style={{ color: '#c49a3c' }}>la meilleure expérience</span> scolaire</>
                : <>Join Providence and start the most <span style={{ color: '#c49a3c' }}>engaging experience</span> for your children</>}
            </h3>
            <p className="text-white/50 text-sm mt-3">
              {lang === 'fr' ? 'Et toute votre famille.' : 'And your whole family.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-[#1a3a52] rounded-sm transition-colors group"
                style={{ backgroundColor: '#c49a3c' }}
              >
                {t.hero.enquireBtn}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN LINKS ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand column */}
          <motion.div
            className="col-span-2 lg:col-span-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl font-600 text-white mb-1">Providence</p>
            <p className="font-display text-2xl font-300 text-white/50 mb-5">Academy</p>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              {lang === 'fr'
                ? "Façonner les esprits de demain grâce à une éducation d'excellence depuis 2012."
                : 'Shaping tomorrow\'s minds through world-class education since 2012.'}
            </p>

            {/* Contact info */}
            <ul className="space-y-2.5 text-xs text-white/45">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 shrink-0 text-[#c49a3c]" />
                <span>Alarobia Amboniloha, Antananarivo</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="shrink-0 text-[#c49a3c]" />
                <a href="mailto:providence_academy@yahoo.com" className="hover:text-white transition-colors">providence_academy@yahoo.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={12} className="mt-0.5 shrink-0 text-[#c49a3c]" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+261330740461" className="hover:text-white transition-colors">+261 33 07 404 61</a>
                  <a href="tel:+261340504461" className="hover:text-white transition-colors">+261 34 50 404 61</a>
                </div>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <Instagram size={15} />, href: '#' },
                { icon: <Linkedin size={15} />,  href: '#' },
                { icon: <Facebook size={15} />,  href: 'https://www.facebook.com/profile.php?id=61575701047791' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: '#c49a3c' }}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 transition-colors hover:border-[#c49a3c]/50"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {columns.map((col, ci) => (
            <motion.div
              key={ci}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.3em] font-semibold mb-5"
                style={{ color: '#c49a3c' }}
              >
                {col.heading}
              </motion.p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <motion.li key={item.label.en} variants={fadeUp}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/50 hover:text-white transition-colors hover:pl-1 inline-block"
                      style={{ transitionProperty: 'color, padding' }}
                    >
                      {item.label[lang]}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Providence Academy.{' '}
            {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
