import { HardHat, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-engineering-bg border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        {/* Centered layout to replace the 50/50 split cleanly */}
        <div className="w-full max-w-3xl mx-auto text-center">
          
          {/* Silver Jubilee Tag repositioned as a badge */}
          <div className="inline-block bg-engineering-yellow text-engineering-bg px-4 py-2 mb-8 font-black uppercase tracking-widest text-[10px]">
            25 Year Silver Jubilee
          </div>

          <div className="text-white">
            <h2 className="text-engineering-yellow text-sm font-black uppercase tracking-[0.3em] mb-4">
              Our Legacy
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 italic">
              Engineering Driven by <span className="text-engineering-yellow not-italic">Experience.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Led by our MD and Senior Designer, Sigma Consultants enters its 25th year of excellence. 
              With 10,000+ global projects, we specialize in high-precision structural design for 
              industrial, commercial, and residential sectors.
            </p>
            
            {/* Technical Highlights centered below the text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-xl mx-auto border-t border-white/5 pt-8">
              <div className="flex gap-4 items-start">
                <Cpu className="text-engineering-yellow shrink-0 mt-1" />
                <p className="text-sm font-medium text-slate-300">
                  Advanced Modeling with <span className="text-white font-bold tracking-wider">STAAD.PRO & ETABS.</span>
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <HardHat className="text-engineering-yellow shrink-0 mt-1" />
                <p className="text-sm font-medium text-slate-300">
                  Dedicated <span className="text-white font-bold tracking-wider">Site Inspection</span> for absolute integrity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}