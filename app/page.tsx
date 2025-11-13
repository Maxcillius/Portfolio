'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import TechStack from './components/Techstack';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DSAProfiles from './components/DsaCp';

const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    // { name: 'Work Experience', href: '#work-experience' },
    // { name: 'College Clubs', href: '#college-clubs' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Certifications', href: '#certifications' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="w-full bg-gray-900 shadow-lg rounded-lg border border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300">
          Gourav Deep Shahni
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name} 
              href={item.href} 
              className="text-gray-300 hover:text-orange-500 font-medium tracking-wide transition-colors duration-300 uppercase text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex hover:cursor-pointer items-center space-x-1 p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Connect links"
            >
              <UserIcon />
              <span className="text-sm font-medium hidden sm:block">Connect</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                <Link
                  href="https://github.com/Maxcillius"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-orange-500"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://linkedin.com/in/gouravdeep"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-orange-500"
                >
                  LinkedIn
                </Link>
              </div>
            )}
          </div>
          <Link 
            href="mailto:alphaviperchamber@hotmail.com"
            className="bg-orange-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-orange-700 transition-colors duration-300 shadow-md"
          >
            Contact
          </Link>
          <button className="md:hidden ml-2 p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none">
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}

function ContentSection({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className={`w-full py-25`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            {title}
          </h2>
          
          <div className="w-24 h-1 bg-orange-500 mt-4 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      
      <main 
        id="home"
        className="relative flex h-screen items-center justify-center bg-cover bg-center "
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute top-4 left-4 right-4 z-20 md:top-6 md:left-6 md:right-6">
          <Navbar /> 
        </div>
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest">
            Gourav Deep Shahni
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-wider">
            Link Developer Building The Future
          </p>
          <p className="mt-2 text-md md:text-lg uppercase tracking-widest text-gray-300">
            Full-Stack Engineer • Creative Problem Solver
          </p>
          <Link 
            href="#projects" 
            className="mt-8 bg-orange-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-700 transition-colors duration-300 shadow-lg text-lg"
          >
            View My Work
          </Link>
        </div>
      </main>
      <div className='bg-black/60'>
        <ContentSection id="technologies" title="My Tech Stack">
          <TechStack />
        </ContentSection>
        <ContentSection id="DsaCpProfiles" title="DSA & CP">
          <DSAProfiles/>
        </ContentSection>
        <ContentSection id="education" title="Education">
          <Education/>
        </ContentSection>
        <ContentSection id="projects" title="Projects">
          <Projects/>
        </ContentSection>
        <Footer/>
      </div>
    </>
  );
}