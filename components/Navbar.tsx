import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-engineering-bg/95 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/Sigma_logo.png"
                            alt="Sigma Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-black text-white uppercase tracking-tighter">
                            Sigma
                        </span>
                        <span className="text-[10px] font-bold text-engineering-yellow uppercase tracking-[0.3em] mt-1">
                            Consultants
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {['Projects', 'Services', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-engineering-yellow transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-engineering-yellow text-engineering-bg px-6 py-2 text-xs font-black uppercase tracking-tighter hover:bg-white transition-all shadow-lg shadow-engineering-yellow/10">
                        Get Quote
                    </button>
                </div>

                <div className="md:hidden text-engineering-yellow">
                    <Menu size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;