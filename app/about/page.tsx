import { History, Award, HardHat, Cpu, Globe, User } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    { 
      name: "Sathish Shenoy", 
      role: "Proprietor & Managing Director", 
      image: "/team/sathish.jpeg", 
      desc: "Lead Structural Consultant with 25 years of site-level expertise." 
    },
    { 
      name: "Asha Shenoy", 
      role: "Senior Designer", 
      image: "/team/asha.png",
      desc: "Expert in STAAD.Pro and ETABS structural modeling and analysis." 
    },
    { 
      name: "Devraj Hosahallu", 
      role: "Project Engineer", 
      image: "",
      desc: "Specializing in high-rise residential structural design." 
    },
    { 
      name: "Narendra", 
      role: "Project Engineer", 
      image: "",
      desc: "Expert in AutoCAD technical detailing and blueprint drafting." 
    },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20 overflow-x-hidden">
      
      {/* ================= SECTION 1: THE STORY & STATS ================= */}
      <section className="container mx-auto px-6 mb-28 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          
          {/* Left Side: Editorial Story Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic mb-6 leading-tight tracking-tight">
              A Legacy of <span className="text-engineering-yellow font-bold not-italic">Stability.</span>
            </h1>
            <div className="space-y-5 text-slate-400 text-sm md:text-base leading-relaxed">
              <p>
                Founded in 2002, Sigma Consultants began as a small family-run structural enterprise. Today, we stand in our <span className="text-white font-bold italic">25th Year</span> of trusted service.
              </p>
              <p>
                Run by a dedicated husband-and-wife duo, our office has evolved into a global consultancy firm. While our roots are in India, our structural footprints extend across commercial and industrial landmarks worldwide.
              </p>
              <p>
                We don't just design; we inspect. Every project benefits from the Managing Director's personal on-site involvement, ensuring that what is planned on software is executed with 100% integrity on the field.
              </p>
            </div>
          </div>

          {/* Right Side: Fluid, Non-Overlapping Hexagon Layout Grid */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 py-6">
            
            {/* Hexagon 1: Years of Service */}
            <div className="group relative w-full max-w-[260px] md:max-w-[280px] aspect-square cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <div 
                className="absolute inset-0 bg-slate-900 border border-white/10 transition-all duration-500 group-hover:border-engineering-yellow/40"
                style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
              >
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-25 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-15"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000')" }}
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/20 to-slate-950/80" />
                
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
                  <Award className="text-engineering-yellow mb-2 transition-transform duration-500 group-hover:scale-105" size={36} />
                  <p className="text-4xl md:text-5xl font-mono font-black leading-none text-white tracking-tight">25</p>
                  <p className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mt-2 text-center">Years of Service</p>
                </div>
              </div>
            </div>

            {/* Hexagon 2: Global Projects */}
            <div className="group relative w-full max-w-[260px] md:max-w-[280px] aspect-square cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <div 
                className="absolute inset-0 bg-slate-900 border border-white/10 transition-all duration-500 group-hover:border-engineering-yellow/40"
                style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
              >
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-25 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-15"
                  style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1171')" }}
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/20 to-slate-950/80" />

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
                  <Globe className="text-engineering-yellow mb-2 transition-transform duration-500 group-hover:scale-105" size={36} />
                  <p className="text-4xl md:text-5xl font-mono font-black leading-none text-white tracking-tight">10K+</p>
                  <p className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mt-2 text-center">Projects Completed</p>
                </div>
              </div>
            </div>

          </div> 
        </div> 
      </section>

      {/* ================= SECTION 2: TECH TOOLKIT ================= */}
      <section className="bg-slate-950 py-20 border-y border-white/5 mb-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-xs font-mono font-black text-engineering-yellow uppercase tracking-[0.4em] mb-12">
            The Tech Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-3 max-w-xs mx-auto">
              <div className="w-12 h-12 bg-engineering-yellow/5 border border-engineering-yellow/10 flex items-center justify-center mx-auto text-engineering-yellow rounded">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight">Advanced Modeling</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Rigorous structural stress analysis modeled using <span className="text-slate-300 font-bold">STAAD.Pro</span> and <span className="text-slate-300 font-bold">ETABS</span>.
              </p>
            </div>
            <div className="space-y-3 max-w-xs mx-auto">
              <div className="w-12 h-12 bg-engineering-yellow/5 border border-engineering-yellow/10 flex items-center justify-center mx-auto text-engineering-yellow rounded">
                <History size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight">Precision Drafting</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Blueprints and reinforcement layout files engineered in high-accuracy <span className="text-slate-300 font-bold">AutoCAD</span> frameworks.
              </p>
            </div>
            <div className="space-y-3 max-w-xs mx-auto">
              <div className="w-12 h-12 bg-engineering-yellow/5 border border-engineering-yellow/10 flex items-center justify-center mx-auto text-engineering-yellow rounded">
                <HardHat size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight">On-Site Inspection</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Direct on-site engineering validation visits ensuring structural safety matches design metrics perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE TEAM ================= */}
      <section className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-16 italic tracking-tight">
          The <span className="text-engineering-yellow not-italic">Team</span>
        </h2>
        
        {/* Adjusted grids to perfectly adapt side-by-side components at desktop widths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {team.map((member, i) => (
            <div key={i} className="group text-center flex flex-col items-center">
              
              {/* Fluid Circular Avatar Container */}
              <div className="relative w-full max-w-[220px] md:max-w-[240px] aspect-square mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-engineering-yellow/40 transition-colors duration-500 z-10" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-950 flex items-center justify-center text-slate-700 group-hover:text-engineering-yellow/20 transition-colors duration-500 pt-10">
                      <User 
                        size={150} 
                        strokeWidth={1} 
                        className="transform translate-y-4 transition-transform duration-700 group-hover:scale-102" 
                      />
                    </div>
                  )}
                </div>

                {/* Floating Label Frame */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-engineering-bg px-2.5 py-1 border border-white/10 text-[8px] font-mono font-bold uppercase text-engineering-yellow z-20 whitespace-nowrap select-none">
                  Sigma 
                </div>
              </div>

              {/* Text Meta Fields Block */}
              <h4 className="text-lg font-bold uppercase text-white tracking-tight mb-0.5">{member.name}</h4>
              <p className="text-engineering-yellow text-[11px] font-mono font-bold uppercase tracking-wider mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs leading-relaxed px-2 max-w-[220px] mx-auto">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}