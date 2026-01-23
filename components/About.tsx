import { Award, HardHat, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-engineering-bg border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative">
             {/* Founder Placeholder */}
            <div className="aspect-square bg-slate-900 border border-white/10 flex items-center justify-center italic text-white/20">
              Founder & Team Portrait Placeholder
            </div>
            <div className="absolute -bottom-6 -right-6 bg-engineering-yellow p-8 text-engineering-bg shadow-2xl">
              <p className="text-4xl font-black italic leading-none">25</p>
              <p className="text-[10px] uppercase font-bold tracking-widest">Silver Jubilee Year</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-engineering-yellow text-sm font-black uppercase tracking-[0.3em] mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 italic">Engineering Driven by <span className="text-engineering-yellow not-italic">Experience.</span></h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Led by our MD and Senior Designer, Sigma Consultants enters its 25th year of excellence. With 10,000+ global projects, we specialize in high-precision structural design for industrial, commercial, and residential sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Cpu className="text-engineering-yellow shrink-0" />
                <p className="text-sm font-medium text-slate-300">Advanced Modeling with <span className="text-white font-bold tracking-wider">STAAD.PRO & ETABS.</span></p>
              </div>
              <div className="flex gap-4">
                <HardHat className="text-engineering-yellow shrink-0" />
                <p className="text-sm font-medium text-slate-300">Dedicated <span className="text-white font-bold tracking-wider">Site Inspection</span> for absolute integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}