'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/lib/contexts';
import logo from '@/assets/logo/logo.jpeg';

const getNormalizedNavLinks = (lang: 'en' | 'fr') => [
  { label: translations[lang].nav.primary, href: '/' },
  { label: translations[lang].nav.secondary, href: '/secondary' },
  { label: translations[lang].nav.syllabus, href: '/syllabus' },
  { label: translations[lang].nav.ourMethod, href: '/our-method' },
  { label: translations[lang].nav.aboutUs, href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { language, setLanguage, isDark, setIsDark } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le dropdown si clic en dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = getNormalizedNavLinks(language);

  // Couleurs contextuelles selon l'état de la navbar
  const dropdownBg = isDark ? '#0f172a' : '#ffffff';
  const headerBorder = scrolled
    ? isDark ? 'rgba(51,65,85,0.8)' : 'rgba(229,231,235,0.9)'
    : 'rgba(255,255,255,0.15)';
  const navText = scrolled
    ? isDark ? 'rgba(255,255,255,0.85)' : '#374151'
    : 'rgba(255,255,255,0.9)';
  const navHover = scrolled
    ? isDark ? '#f87171' : '#1a3a52'
    : '#ffffff';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white dark:bg-slate-950 shadow-md py-3'
          : 'bg-gradient-to-b from-[#1a3a52]/90 dark:from-slate-900/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Branding */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 relative shrink-0 overflow-hidden rounded-full ${
              isDark
                ? 'ring-1 ring-slate-600/50 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]'
                : scrolled
                  ? 'ring-1 ring-gray-200/80'
                  : 'ring-1 ring-white/30'
            }`}
          >
            <Image
              src={logo}
              alt="Providence Academy"
              fill
              className="object-cover"
              sizes="48px"
            />
          </motion.div>
          <div className="flex flex-col leading-none hidden sm:block">
            <span
              className={`font-display text-lg font-700 tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-[#1a3a52] dark:text-white' : 'text-white dark:text-white'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Providence
            </span>
            <span
              className={`text-[8px] tracking-[0.2em] uppercase font-body font-500 transition-colors duration-300 ${
                scrolled ? 'text-[#c41e3a] dark:text-red-400' : 'text-[#e8d8d0] dark:text-red-300'
              }`}
            >
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={link.href}
                className={`text-sm font-body font-medium tracking-wide transition-all duration-200 relative group ${
                  scrolled
                    ? pathname === link.href
                      ? 'text-[#1a3a52] dark:text-white'
                      : 'text-[#555] dark:text-gray-300 hover:text-[#1a3a52] dark:hover:text-white'
                    : pathname === link.href
                      ? 'text-white'
                      : 'text-white/80 hover:text-white dark:text-white/80 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#c41e3a] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* ── Language Dropdown ── */}
          <div ref={langRef} className="relative">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setLangOpen((v) => !v)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? 'bg-gray-100 dark:bg-slate-800 text-[#1a3a52] dark:text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-base leading-none">
                {language === 'fr' ? '🇫🇷' : '🇺🇸'}
              </span>
              <span className="text-xs font-semibold tracking-wider">
                {language.toUpperCase()}
              </span>
              <motion.span
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="leading-none"
              >
                <ChevronDown size={13} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 top-11 z-50 rounded-xl overflow-hidden min-w-[140px]"
                  style={{
                    backgroundColor: dropdownBg,
                    border: `1px solid ${headerBorder}`,
                    boxShadow: isDark
                      ? '0 8px 32px rgba(0,0,0,0.5)'
                      : '0 8px 32px rgba(0,0,0,0.12)',
                  }}
                >
                  {(['fr', 'en'] as const).map((lang, i) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                      className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                        i === 0 ? '' : 'border-t'
                      }`}
                      style={{
                        color: language === lang ? navHover : navText,
                        fontWeight: language === lang ? 600 : 400,
                        borderColor: headerBorder,
                        backgroundColor:
                          language === lang
                            ? isDark
                              ? 'rgba(196,30,58,0.12)'
                              : 'rgba(26,58,82,0.05)'
                            : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (language !== lang) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = isDark
                            ? 'rgba(255,255,255,0.05)'
                            : 'rgba(26,58,82,0.04)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (language !== lang) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <span className="text-base leading-none">
                        {lang === 'fr' ? '🇫🇷' : '🇺🇸'}
                      </span>
                      <span>{lang === 'fr' ? 'Français' : 'English'}</span>
                      {language === lang && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto text-[#c41e3a] dark:text-red-400"
                        >
                          ✓
                        </motion.span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-lg transition-all duration-200 ${
              scrolled
                ? 'bg-gray-100 dark:bg-slate-800 text-[#1a3a52] dark:text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Enquire Button */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/enquire"
              className={`hidden md:inline-flex ml-2 px-5 py-2 text-sm font-medium rounded transition-all duration-200 ${
                scrolled
                  ? 'bg-[#1a3a52] dark:bg-red-600 text-white hover:bg-[#132844] dark:hover:bg-red-700'
                  : 'bg-[#c41e3a] text-white hover:bg-[#a01729]'
              }`}
            >
              {translations[language].nav.enquire}
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-[#1a3a52] dark:text-white' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800"
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === link.href
                  ? 'text-[#1a3a52] dark:text-red-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#1a3a52] dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switch mobile */}
          <div className="flex gap-2 pt-1 border-t border-gray-100 dark:border-slate-800">
            {(['fr', 'en'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`flex items-center gap-1.5 flex-1 justify-center py-2 rounded-lg text-sm font-medium transition-colors ${
                  language === lang
                    ? 'bg-[#1a3a52] dark:bg-red-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <span>{lang === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
                {lang === 'fr' ? 'Français' : 'English'}
              </button>
            ))}
          </div>

          <Link
            href="/enquire"
            onClick={() => setMobileOpen(false)}
            className="mt-1 px-5 py-2.5 text-sm font-medium bg-[#1a3a52] dark:bg-red-600 text-white rounded text-center hover:bg-[#132844] dark:hover:bg-red-700 transition-colors"
          >
            {translations[language].nav.enquire}
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}