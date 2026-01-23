import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-engineering-navbar border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-20 h-20">
            <Image src="/Sigma_logo.png" alt="Sigma Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-engineering-yellow uppercase tracking-[0.3em] mt-1">Sigma Consultants</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">
            Projects
          </Link>
          <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">
            About
          </Link>
          <Link href="/awards" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-all">Awards</Link>
          <Link href="/contact" className="px-6 py-2 border-2 border-engineering-yellow text-engineering-yellow text-xs font-black uppercase tracking-tighter hover:bg-engineering-yellow hover:text-engineering-bg transition-all">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;