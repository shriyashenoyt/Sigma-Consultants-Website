'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

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

        {/* Desktop Navigation - Hidden on phones (md:flex only) */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">
            Projects
          </Link>
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

        {/* Hamburger Icon - Only visible on phones (md:hidden) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // X Icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Only visible when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-engineering-navbar border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/projects" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest text-white/90">
            Projects
          </Link>
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