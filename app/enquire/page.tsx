'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

const countries = [
  'United Kingdom', 'France', 'Italy', 'Germany', 'Spain', 'United States',
  'Canada', 'Australia', 'New Zealand', 'Singapore', 'UAE', 'South Africa', 'Other'
];

export default function EnquirePage() {
  const { language } = useLanguage();
  const t = translations[language];
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
        <Navbar />
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-[#1a3a52]/10 dark:bg-red-600/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-[#1a3a52] dark:text-red-500" />
            </div>
            <h2 className="font-display text-3xl font-600 text-[#2a1e10] mb-4">{t.enquire.page.submitted}</h2>
            <p className="text-[#5a5040] leading-relaxed mb-8">
              {t.enquire.page.submittedMessage}
            </p>
            <a
              href="/"
              className="inline-block px-7 py-3 bg-[#1a3a52] dark:bg-red-600 text-white text-sm font-medium rounded hover:bg-[#132844] dark:hover:bg-red-700 transition-colors"
            >
              {t.enquire.page.backToHome}
            </a>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[#1a3a52]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-[#c49a3c] text-xs tracking-[0.4em] uppercase font-medium mb-5">{t.enquire.page.tagline}</p>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-6 leading-tight">
            {t.enquire.page.title}
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
            {t.enquire.page.description}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Parent Details */}
            <div>
              <h2 className="font-display text-2xl font-600 text-[#2a1e10] mb-1">{t.enquire.page.parentDetails}</h2>
              <div className="w-12 h-0.5 bg-[#c49a3c] mb-8" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-white mb-2">{t.enquire.page.firstName} <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder={t.enquire.page.firstName}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-sm bg-white dark:bg-slate-800 text-foreground dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#1a3a52] dark:focus:border-red-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Last name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Parent / guardian last name"
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="Parent / guardian email"
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Phone number <span className="text-[#a89a86] font-normal">(optional)</span></label>
                  <input
                    type="tel"
                    placeholder="Parent / guardian phone number"
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Country of Residence <span className="text-red-500">*</span></label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] focus:outline-none focus:border-[#4a3220] transition-colors text-sm appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select country of residence</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Student Details */}
            <div>
              <h2 className="font-display text-2xl font-600 text-[#2a1e10] mb-1">Student details</h2>
              <div className="w-12 h-0.5 bg-[#c49a3c] mb-8" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">First name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Student first name"
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Last name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Student last name"
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Date of birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3a2a18] mb-2">Desired start date <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] focus:outline-none focus:border-[#4a3220] transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Enquiry Details */}
            <div>
              <h2 className="font-display text-2xl font-600 text-[#2a1e10] mb-1">Enquiry details</h2>
              <div className="w-12 h-0.5 bg-[#c49a3c] mb-8" />
              <div>
                <label className="block text-sm font-medium text-[#3a2a18] mb-2">Your enquiry <span className="text-red-500">*</span></label>
                <p className="text-xs text-[#7a6a55] mb-3">
                  Please provide us with a little more information so that we can help you with your enquiry as efficiently as possible. Feel free to share more about your child and family.
                </p>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your child, your goals, and any questions you have..."
                  className="w-full px-4 py-3 border border-[#d8ccbe] rounded-sm bg-white text-[#2a1e10] placeholder-[#a89a86] focus:outline-none focus:border-[#4a3220] transition-colors text-sm resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-10 py-4 bg-[#4a3220] text-white text-sm font-medium rounded hover:bg-[#3a2515] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : t.enquire.page.submit}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
