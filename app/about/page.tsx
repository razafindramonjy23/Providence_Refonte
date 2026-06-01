'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Award, Users, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts';
import { translations } from '@/lib/translations';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1800')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[#1a3a52]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-[#c49a3c] text-xs tracking-[0.4em] uppercase font-medium mb-5">{t.aboutPage.tagline}</p>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-6 leading-tight">
            {t.aboutPage.title}
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
            {t.aboutPage.description}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#c41e3a] dark:text-red-400 font-medium mb-3">{t.aboutPage.whoAreWe}</p>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-foreground dark:text-white leading-tight mb-6">
              {t.aboutPage.mission}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {t.aboutPage.missionDesc1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {t.aboutPage.missionDesc2}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t.aboutPage.missionDesc3}
            </p>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3a52] dark:bg-red-600 text-white text-sm font-medium rounded hover:bg-[#132844] dark:hover:bg-red-700 transition-colors"
            >
              {t.aboutPage.enquireBtn} <ChevronRight size={14} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Students"
              className="rounded-sm h-56 w-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Classroom"
              className="rounded-sm h-56 w-full object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Learning"
              className="rounded-sm h-56 w-full object-cover -mt-4"
            />
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Teacher"
              className="rounded-sm h-56 w-full object-cover mt-4"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c41e3a] dark:text-red-400 font-medium mb-3">{t.aboutPage.values}</p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10]">{t.aboutPage.whatDrivesUs}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={22} />,
                title: 'Every Child Matters',
                desc: 'We invest deeply in understanding each student\'s unique personality, learning style, and ambitions. No child is treated as a number at Providence Academy.',
              },
              {
                icon: <Globe size={22} />,
                title: 'Global Perspective',
                desc: 'Our curriculum is informed by global research and tailored to local culture, ensuring students are both grounded and globally competitive.',
              },
              {
                icon: <Award size={22} />,
                title: 'Excellence in All Things',
                desc: 'From academics to sports, arts to community service — we challenge students to pursue excellence in every dimension of their development.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-sm border border-[#e8ddd0]">
                <div className="w-12 h-12 rounded-full bg-[#4a3220]/10 flex items-center justify-center text-[#4a3220] mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-600 text-[#2a1e10] mb-3">{v.title}</h3>
                <p className="text-sm text-[#5a5040] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c41e3a] dark:text-red-400 font-medium mb-3">Recognition</p>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#2a1e10] mb-4">Awards & Recognitions</h2>
            <p className="text-[#5a5040] max-w-xl mx-auto">
              Providence Academy has been consistently recognised by international bodies for its outstanding contribution to child development and education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                year: '2024',
                title: 'Best Early Development School',
                body: 'Meridian Child Development Support',
                desc: 'Awarded for innovation in early childhood education and exceptional learning outcomes for ages 5–7.',
              },
              {
                year: '2024',
                title: 'Top UK School',
                body: 'British Education Awards',
                desc: 'Recognised as one of the top performing private schools in the United Kingdom for academic excellence.',
              },
              {
                year: '2023',
                title: 'Top UK School',
                body: 'British Education Awards',
                desc: 'For the second consecutive year, acknowledged for outstanding teaching methods and pastoral care.',
              },
              {
                year: '2022',
                title: 'Excellence in Inclusion',
                body: 'European Education Council',
                desc: 'Celebrated for its inclusive policies and adaptive curriculum that serves students from all backgrounds.',
              },
              {
                year: '2021',
                title: 'Best International Curriculum',
                body: 'Global Learning Alliance',
                desc: 'Commended for developing a curriculum that prepares students for internationally recognised higher education.',
              },
            ].map((a, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-[#f9f6f1] border border-[#e8ddd0] rounded-sm hover:border-[#c49a3c]/50 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#c49a3c]/15 flex items-center justify-center">
                  <Award size={20} className="text-[#c49a3c]" />
                </div>
                <div>
                  <span className="text-xs text-[#c49a3c] font-medium tracking-wide">{a.year}</span>
                  <h3 className="font-display text-lg font-600 text-[#2a1e10] mt-0.5 mb-1">{a.title}</h3>
                  <p className="text-xs text-[#7a6a55] mb-2">{a.body}</p>
                  <p className="text-sm text-[#5a5040] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#1a3a52] dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c41e3a] dark:text-red-400 font-medium mb-3">Leadership</p>
            <h2 className="font-display text-4xl font-600 mb-4">Meet our team</h2>
            <p className="text-white/70 max-w-lg mx-auto">
              Our leadership team brings decades of experience in education, child development, and school administration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Delora Fanning',
                role: 'Principal',
                img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                name: 'James Hartwell',
                role: 'Head of Curriculum',
                img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                name: 'Priya Nair',
                role: 'Director of Student Wellbeing',
                img: 'https://images.pexels.com/photos/5905897/pexels-photo-5905897.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-72 object-cover object-top rounded-sm mb-4"
                />
                <h3 className="font-display text-xl font-600">{p.name}</h3>
                <p className="text-[#c49a3c] text-sm mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.35em] uppercase text-[#c41e3a] dark:text-red-400 font-medium mb-3">Family Stories</p>
            <h2 className="font-display text-4xl font-600 text-[#2a1e10]">Stories from our community</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'International recognition for Providence Academy rising star',
                quote: "Seeing Maddy achieving things I couldn't when I was her age has brought happy tears to my eyes. Providence Academy didn't just teach her — they believed in her.",
                author: 'Vivianne',
                role: 'Parent of Madeleine, Primary Year 6',
                img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                title: 'A school that feels like family',
                quote: "We moved from Italy three years ago and Providence Academy made our daughter feel at home from day one. The level of care here is extraordinary.",
                author: 'Sofia Rossini',
                role: 'Parent of Elena, Early Years',
                img: 'https://images.pexels.com/photos/5905897/pexels-photo-5905897.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
            ].map((s) => (
              <div key={s.title} className="flex gap-6 p-6 bg-[#f9f6f1] border border-[#e8ddd0] rounded-sm">
                <img
                  src={s.img}
                  alt={s.author}
                  className="w-20 h-20 rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="font-display text-lg font-600 text-[#2a1e10] mb-2">{s.title}</h4>
                  <p className="text-sm text-[#5a5040] italic leading-relaxed mb-3">&ldquo;{s.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-[#4a3220]">{s.author}</p>
                  <p className="text-xs text-[#7a6a55]">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
