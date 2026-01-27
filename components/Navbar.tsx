'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileProjectsOpen(false);
  };

  const projectCategories = [
    { name: 'Overview', href: '/projects' },
    { name: 'Temples', href: '/projects/temples' },
    { name: 'Government', href: '/projects/government' },
    { name: 'Residential', href: '/projects/residential' },
    { name: 'Commercial', href: '/projects/commercial' },
    { name: 'Industrial', href: '/projects/industrial' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-engineering-navbar border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group cursor-pointer" onClick={closeMenu}>
          <div className="relative w-20 h-20">
            <Image src="/Sigma_logo.png" alt="Sigma Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-engineering-yellow uppercase tracking-[0.3em] mt-1">Sigma Consultants</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* Projects Dropdown Group */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
          >
            <Link 
              href="/projects" 
              className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all flex items-center gap-1"
            >
              Projects <ChevronDown size={14} className={`transition-transform duration-300 ${isProjectsHovered ? 'rotate-180' : ''}`} />
            </Link>

            {/* Desktop Dropdown Menu */}
            {isProjectsHovered && (
              <div className="absolute top-20 left-0 w-48 bg-slate-950 border border-white/10 py-4 flex flex-col shadow-2xl animate-in fade-in slide-in-from-top-2">
                {projectCategories.map((cat) => (
                  <Link 
                    key={cat.name} 
                    href={cat.href}
                    className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:bg-white/5 hover:text-engineering-yellow transition-all"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">
            About
          </Link>
          <Link href="/awards" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">
            Awards
          </Link>
          <Link href="/contact" className="px-6 py-2 border-2 border-engineering-yellow text-engineering-yellow text-xs font-black uppercase tracking-tighter hover:bg-engineering-yellow hover:text-engineering-bg transition-all">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-engineering-navbar border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          
          {/* Mobile Projects Accordion */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
              className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-engineering-yellow"
            >
              Projects <ChevronDown size={18} className={isMobileProjectsOpen ? 'rotate-180' : ''} />
            </button>
            
            {isMobileProjectsOpen && (
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {projectCategories.map((cat) => (
                  <Link key={cat.name} href={cat.href} onClick={closeMenu} className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest text-white/90">
            About
          </Link>
          <Link href="/awards" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest text-white/90">
            Awards
          </Link>
          <Link href="/contact" onClick={closeMenu} className="inline-block text-center px-6 py-4 border-2 border-engineering-yellow text-engineering-yellow text-sm font-black uppercase tracking-tighter">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;