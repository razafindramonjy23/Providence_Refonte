'use client';

import Link from 'next/link';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/lib/contexts';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#1a3a52] dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* CTA Banner */}
        <div className="mb-16 pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-600 mb-2 leading-tight">
              Join Providence and start the most<br className="hidden md:block" />
              <span className="text-[#c41e3a]"> engaging experience</span> for your children
            </h3>
            <p className="text-white/60 text-sm mt-3">and family</p>
          </div>
          <Link
            href="/enquire"
            className="shrink-0 inline-block px-8 py-3.5 bg-[#c41e3a] dark:bg-red-600 text-white text-sm font-medium rounded hover:bg-[#a01729] dark:hover:bg-red-700 transition-colors"
          >
            {t.hero.enquireBtn}
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c41e3a] dark:text-red-400 font-medium mb-4">{t.footer.partners}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Work With Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Schools</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Agents</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c41e3a] dark:text-red-400 font-medium mb-4">{t.footer.ourSchool}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">Alumni</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Feedback</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Policies</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c41e3a] dark:text-red-400 font-medium mb-4">{t.footer.stages}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Early</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Primary</Link></li>
              <li><Link href="/secondary" className="hover:text-white transition-colors">Secondary</Link></li>
              <li><Link href="/secondary" className="hover:text-white transition-colors">GCSE</Link></li>
              <li><Link href="/secondary" className="hover:text-white transition-colors">Sixth Form</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c41e3a] dark:text-red-400 font-medium mb-4">{t.footer.updates}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CSR</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-white/40">
          <div>
            <p className="font-display text-white text-lg mb-1">Providence Academy</p>
            <p>33891 Dukengard Avenue 12, Smithbrook, VA 3312, United States</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">{t.footer.termsOfService}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
