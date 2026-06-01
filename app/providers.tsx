'use client';

import React from 'react';
import { LanguageProvider } from '@/lib/contexts';

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
