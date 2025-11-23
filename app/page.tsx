'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import TechStack from './components/Techstack';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DSAProfiles from './components/DsaCp';
import logo from '../public/logo.ico'
import Image from 'next/image';

/* --- SVG ICONS --- */

const UserIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

/* --- ANIMATION VARIANTS --- */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const floatingOrb: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.17, 0.55, 0.55, 1] },
  },
};

/* --- NAVBAR --- */

type NavItem = { name: string; href: string };

function Navbar() {
  const [isDropdownOpen, setDropdown] = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Tech', href: '#technologies' },
    { name: 'DSA & CP', href: '#DsaCpProfiles' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(t))
        setDropdown(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(t))
        setMobileMenu(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
      className="w-full rounded-lg border border-gray-700/40 bg-gray-900/75 shadow-xl backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image src={logo} height={35} width={35} alt='logo'/>
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-lg font-semibold tracking-wide text-white hover:text-cyan-300 md:text-xl"
            >
              Gourav Deep Shahni
            </Link>
            <span className="hidden text-xs uppercase tracking-[0.25em] text-gray-400 sm:block">
              Developer · Systems · Problem Solving
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-gray-300/90 hover:text-cyan-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Connect dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdown((p) => !p)}
              className="flex items-center space-x-1 rounded-lg border border-gray-700/70 bg-gray-900/70 px-2 py-1.5 text-gray-200 hover:text-white hover:border-gray-500"
            >
              <UserIcon />
              <span className="hidden text-xs sm:block">Connect</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-700/80 bg-black/90 py-2 shadow-xl">
                <p className="px-4 pb-2 text-[11px] uppercase tracking-[0.16em] text-gray-400">
                  Profiles
                </p>
                <Link
                  href="https://github.com/Maxcillius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/5 hover:text-cyan-300"
                >
                  GitHub · Maxcillius
                </Link>
                <Link
                  href="https://linkedin.com/in/gouravdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/5 hover:text-cyan-300"
                >
                  LinkedIn · Gourav Deep
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="mailto:alphaviperchamber@hotmail.com"
            className="hidden rounded-md bg-orange-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-cyan-500 md:inline-block"
          >
            Contact
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenu((p) => !p)}
            className="ml-2 rounded-md p-2 text-gray-300 hover:bg-gray-800 md:hidden"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="border-t border-gray-800 bg-black/90 px-4 pb-4 pt-2 md:hidden"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-200 hover:bg-white/5 hover:text-cyan-300"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="mailto:alphaviperchamber@hotmail.com"
              className="mt-2 inline-block rounded-md bg-orange-600 px-4 py-2 text-center text-xs font-semibold text-white hover:bg-cyan-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

/* --- CONTENT SECTION WRAPPER --- */

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function ContentSection({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full py-16 md:py-24">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={staggerContainer}
      >
        {/* Title */}
        <div className="mb-10 flex flex-col items-center text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mt-3 max-w-2xl text-sm text-gray-300/90 md:text-base"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            variants={fadeInUp}
            className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-white/40"
          />
        </div>

        {/* Container Card */}
        <motion.div
          variants={fadeInUp}
          className="relative rounded-3xl border border-gray-800/60 bg-black/40 p-4 shadow-xl backdrop-blur-md md:p-6"
        >
          <div className="pointer-events-none absolute inset-px rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* --- PAGE --- */

export default function HomePage() {
  return (
    <>
      <main
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
      >
        {/* Ambient circles */}
        <motion.div
          variants={floatingOrb}
          initial="initial"
          animate="animate"
          className="pointer-events-none absolute -left-40 top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <motion.div
          variants={floatingOrb}
          initial="initial"
          animate="animate"
          className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-950/90 to-black" />

        {/* Navbar */}
        <div className="absolute left-4 right-4 top-4 z-20 md:left-6 md:right-6 md:top-6">
          <Navbar />
        </div>

        {/* Hero */}
        <motion.div
          className="relative z-10 flex max-w-5xl flex-col items-center gap-8 px-4 pt-24 text-center text-white md:pt-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold uppercase tracking-[0.25em] md:text-5xl lg:text-6xl"
          >
            Gourav Deep Shahni
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-sm text-gray-300/95 md:text-base"
          >
            Hi, I{"'"}m Gourav. I like taking on real-world problems and creating simple, useful solutions.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-xs uppercase tracking-[0.25em] text-gray-400 md:text-sm"
          >
            Blending clarity, performance, and minimal aesthetics into every
            build.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-3 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md hover:bg-cyan-500"
            >
              View My Work
            </Link>
            <Link
              href="#technologies"
              className="text-xs font-medium uppercase tracking-[0.2em] text-gray-300 hover:text-cyan-300"
            >
              Explore Stack →
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Sections */}
      <div className="bg-gradient-to-b from-black via-gray-950 to-black pb-12 pt-4">
        <ContentSection
          id="technologies"
          title="My Tech Stack"
          subtitle="A collection of tools and technologies I use to build clean, efficient, and scalable solutions."
        >
          <TechStack />
        </ContentSection>

        <ContentSection
          id="DsaCpProfiles"
          title="DSA & Competitive Programming"
          subtitle="Sharpening logic through algorithmic practice and structured problem solving."
        >
          <DSAProfiles />
        </ContentSection>

        <ContentSection
          id="education"
          title="Education"
          subtitle="Formal learning mixed with hands-on curiosity and continuous exploration."
        >
          <Education />
        </ContentSection>

        <ContentSection
          id="projects"
          title="Projects"
          subtitle="Building thoughtful, high-quality software with structure and intent."
        >
          <Projects />
        </ContentSection>

        <Footer />
      </div>
    </>
  );
}
