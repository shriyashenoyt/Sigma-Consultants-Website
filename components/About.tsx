import { HardHat, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-engineering-bg border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Enforced strict structural limits to align grid content elegantly */}
        <div className="w-full max-w-2xl mx-auto text-center">
          
          {/* Silver Jubilee Tag Badge */}
          <div className="inline-block bg-engineering-yellow text-engineering-bg px-3 py-1.5 mb-6 font-black uppercase tracking-widest text-[9px] font-mono">
            25 Year Silver Jubilee
          </div>

          <div className="text-white">
            <h2 className="text-engineering-yellow text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-3">
              Our Legacy
            </h2>
            
            {/* Reduced from text-5xl to clean text-4xl baseline */}
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-5 italic tracking-tight">
              Engineering Driven by <span className="text-engineering-yellow not-italic">Experience.</span>
            </h3>
            
            {/* Smoothed base text hierarchy from text-lg to text-sm/base mixed values */}
            <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-xl mx-auto">
              Led by our MD and Senior Designer, Sigma Consultants enters its 25th year of excellence. 
              With 10,000+ projects and some global presence, we specialize in high-precision structural design for 
              industrial, public, and residential sectors.
            </p>
            
            {/* Technical Highlights Container: Tightened grid columns spacing footprint */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-lg mx-auto border-t border-white/10 pt-6">
              <div className="flex gap-3 items-start">
                <Cpu size={18} className="text-engineering-yellow shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-400 leading-snug">
                  Advanced Modeling with <span className="text-white font-bold tracking-wide">STAAD.PRO & ETABS.</span>
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <HardHat size={18} className="text-engineering-yellow shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-400 leading-snug">
                  Dedicated <span className="text-white font-bold tracking-wide">Site Inspection</span> for absolute integrity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}