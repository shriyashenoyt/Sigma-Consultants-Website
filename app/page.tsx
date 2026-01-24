import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import AboutPreview from '@/components/About';
import SectorBlocks from '@/components/Sector';

export default function Home() {
  return (
    <main className="min-h-screen bg-engineering-bg text-white overflow-x-hidden">
      {/* HERO SECTION WITH BACKGROUND PHOTO 
         - Using a real structural/industrial image from Unsplash
         - Added a dark gradient overlay for readability
      */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* The Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070')",
            // Alternates: 
            // Construction: https://images.unsplash.com/photo-1504307651254-35680f3366d4
            // High-rise: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-engineering-bg/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-6xl relative z-10">
          <p className="text-white text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-80">
            ENGINEERED FOR STRENGTH • DESIGNED FOR SAFETY
          </p>
          
          {/* Keep the parent h1 as is to maintain layout */}
        <h1 className="text-6xl md:text-[100px] font-black uppercase leading-[0.85] tracking-tighter mb-10">
          EXPERTISE IN <br /> 
          {/* Apply a smaller size ONLY to this span */}
          <span className="text-engineering-yellow italic text-5xl md:text-[85px]">
            STRUCTURAL CONSULTANCY
          </span>
        </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Sigma Consultants delivers structural engineering solutions through 
            mathematical precision and future-proof infrastructure design.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <Link href="/projects" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-engineering-yellow transition-all group-hover:w-20"></span>
              VIEW PORTFOLIO
            </Link>
            <Link href="/about" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-white/30 transition-all group-hover:bg-engineering-yellow group-hover:w-20"></span>
              OUR EXPERTISE
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. SECTOR BLOCKS - NEW SECTION */}
      <SectorBlocks />

      {/* 3. ABOUT PREVIEW - AS PER YOUR IMAGE */}
      <AboutPreview />
    </main>
  );
}