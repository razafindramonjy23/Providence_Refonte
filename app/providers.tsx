'use client';

import React from 'react';
import { LanguageProvider } from '@/lib/contexts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
