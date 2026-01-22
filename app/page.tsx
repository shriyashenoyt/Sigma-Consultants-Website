import { ArrowRight, ChevronDown } from 'lucide-react';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-engineering-bg text-white overflow-x-hidden">
      {/* Background Blueprint Grid */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none opacity-60"></div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Ambient Glow matching the Logo sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-engineering-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl relative z-10">
          <p className="text-white text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-80">
            Precision Built • Data Driven
          </p>

          <h1 className="text-6xl md:text-[140px] font-black uppercase leading-[0.8] tracking-tighter mb-10">
            Building the <br />
            <span className="text-engineering-yellow italic">Digital Frontier</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Sigma Consultants delivers civil engineering excellence through
            mathematical precision and future-proof infrastructure design.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a href="#projects" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-engineering-yellow transition-all group-hover:w-20"></span>
              View Portfolio
            </a>
            <a href="#about" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-white/30 transition-all group-hover:bg-engineering-yellow group-hover:w-20"></span>
              Our Expertise
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <ChevronDown size={32} />
        </div>
      </section>

      <About />
    </main>
  );
}