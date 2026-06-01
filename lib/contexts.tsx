'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [isDark, setIsDarkState] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = (localStorage.getItem('language') as Language) || 'fr';
    setLanguageState(savedLang);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkState(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const setIsDark = (dark: boolean) => {
    setIsDarkState(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isDark, setIsDark }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
