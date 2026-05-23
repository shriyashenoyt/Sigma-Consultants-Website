'use client'
import { History, Award, HardHat, Cpu, Globe, User, BookOpen, Train, Briefcase, Camera } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    { 
      name: "Asha Shenoy", 
      role: "Senior Designer", 
      image: "/team/asha.png",
      desc: "Expert in STAAD.Pro and ETABS structural modeling and analysis." 
    },
    { 
    name: "Devraj Hosahallu", 
    role: "Quality Control, Quantity Surveyor & Site Inspector", 
    image: "",
    desc: "Specializes in rigorous material testing standards, project cost estimation, and on-site enforcement of structural design compliance." 
  },
  { 
    name: "Narendra", 
    role: "Quality Control, Quantity Surveyor & Site Inspector", 
    image: "",
    desc: "Expert in cross-verifying structural blueprints with real-world execution, managing material quantities, and ensuring precision site engineering." 
  },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20 overflow-x-hidden">
      
      {/* ================= SECTION 1: THE STORY & STATS ================= */}
      <section className="container mx-auto px-6 mb-24 max-w-6xl">
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

      {/* ================= SECTION 2: THE TECH TOOLKIT ================= */}
      <section className="bg-slate-950 py-20 border-y border-white/5 mb-24">
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
        {/* FIX 1 & 2: Increased font size (text-5xl) and maximized word distance (tracking-[0.15em]) */}
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-20 italic text-center lg:text-left leading-none">
          The <span className="text-engineering-yellow not-italic">Team</span>
        </h2>
        
        {/* Sub-Layout Block 1: Proprietor Leadership & Project Spotlight */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start mb-24">
          
          {/* Profile Photo Display Left Side */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start shrink-0">
            <div className="relative w-full max-w-[280px] aspect-[4/5] bg-slate-900 border border-white/10 p-2">
              <div className="relative w-full h-full bg-slate-950 overflow-hidden">
                <Image 
                  src="/team/sathish.jpeg" 
                  alt="Sathish Shenoy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 left-6 bg-engineering-yellow text-engineering-bg px-3 py-1 font-mono font-black uppercase text-[9px] tracking-widest">
                FOUNDER PROFILE
              </div>
            </div>
            
            <div className="mt-6 text-center lg:text-left">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">Sathish Devanna Shenoy</h2>
              <p className="text-engineering-yellow text-xs font-mono font-bold uppercase tracking-wider mt-1">Proprietor & Managing Director</p>
              
              <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded">
                <BookOpen size={14} className="text-engineering-yellow" />
                <span>Alumnus: NIE Mysore</span>
              </div>
            </div>
          </div>

          {/* Biography & Dynamic Project Picture Spotlight Stack Right Side */}
          <div className="w-full lg:w-[70%] space-y-8">
            {/* Biography Copy */}
            <div>
              <p className="text-engineering-yellow text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-2">Executive Biography</p>
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white mb-4">
                Foundational Engineering Practice (1993 - 2002)
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Before founding Sigma Consultants to launch independent practice, Sathish Shenoy was involved in the design of stations, pipe culverts, syphons, and other key components of the prestigious Konkan Railway project. He also contributed to the construction of bridges and embankments, along with responsibilities in surveying, billing, and overall project execution.
              </p>
            </div>

            {/* FIX 3: Dynamic 3-Picture Project Stack integrated from the list */}
            <div>
              <div className="flex items-center gap-3 text-engineering-yellow font-black uppercase text-xs tracking-widest border-l-2 border-engineering-yellow pl-4 mb-6">
                <Camera size={16} />
                <span>Career Blueprint Snapshots</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Pic 1: Konkan Railway Embankment detaling */}
                <div className="aspect-square bg-slate-900 border border-white/5 relative group overflow-hidden">
                  <Image 
                    src="/team/konkan_railway.jpg" 
                    alt="Konkan Railways"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-300">Konkan Railway Station Detailing</div>
                </div>
                {/* Pic 2: Industrial Masonry Dam Analysis */}
                <div className="aspect-square bg-slate-900 border border-white/5 relative group overflow-hidden">
                  <Image 
                    src="/team/ballarpur_dam.jpg" 
                    alt="Industrial Masonry Dam"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 object-[center_35%]" // FIX: Pulls DAM UP so the crown is safe
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-300">Ballarpur Industries Dam Analysis</div>
                </div>
                {/* Pic 3: IIMB Campus Assets */}
                <div className="aspect-square bg-slate-900 border border-white/5 relative group overflow-hidden">
                  <Image 
                    src="/team/iim-bangalore-campus-pic.jpg" 
                    alt="IIMB Campus"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-300">IIM Bangalore Campus Assets</div>
                </div>
              </div>
            </div>

            {/* Structured Track Record Matrices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Box A: Konkan Railway Deployment */}
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded">
                <div className="flex items-center gap-2 text-engineering-yellow font-bold text-xs uppercase font-mono mb-4 tracking-wider border-b border-white/5 pb-2">
                  <Train size={16} />
                  <span>Konkan Railway Project (1993 - 1996)</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-400 font-medium">
                  <li className="flex items-start gap-2"><span className="text-engineering-yellow font-mono">▪</span> Structural Design of Embankments</li>
                  <li className="flex items-start gap-2"><span className="text-engineering-yellow font-mono">▪</span> Complete Alignment Design of Stations</li>
                  <li className="flex items-start gap-2"><span className="text-engineering-yellow font-mono">▪</span> Structural Evaluation of Culverts & Syphons</li>
                  <li className="flex items-start gap-2"><span className="text-engineering-yellow font-mono">▪</span> Masonry Dam Analysis for M/S Ballarpur Industries</li>
                </ul>
              </div>

              {/* Box B: Engineering Consultants Engagement */}
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded">
                <div className="flex items-center gap-2 text-engineering-yellow font-bold text-xs uppercase font-mono mb-4 tracking-wider border-b border-white/5 pb-2">
                  <Briefcase size={16} />
                  <span>Engineering Consultants India (1997 - 2002)</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-400 font-medium">
                  <li className="flex items-start gap-1.5 truncate" title="IIMB Campus Assets"><span className="text-engineering-yellow font-mono">▪</span> IIM Bangalore Campus Assets</li>
                  <li className="flex items-start gap-1.5"><span className="text-engineering-yellow font-mono">▪</span> BFL Software Facility (Madiwala)</li>
                  <li className="flex items-start gap-1.5 truncate" title="IIPM Plantation Management Campus"><span className="text-engineering-yellow font-mono">▪</span> IIPM Plantation Management Campus</li>
                  <li className="flex items-start gap-1.5"><span className="text-engineering-yellow font-mono">▪</span> Milk Union Chilling Centres</li>
                  <li className="flex items-start gap-1.5"><span className="text-engineering-yellow font-mono">▪</span> Tillani Museum (Bagaluru)</li>
                  <li className="flex items-start gap-1.5"><span className="text-engineering-yellow font-mono">▪</span> Retail Fuel Layout Foundations for IOCL & BPCL</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Sub-Layout Block 2: Engineering Associates Grid (Bigger Circles) */}
        <div className="border-t border-white/5 pt-16 max-w-8xl mx-auto">
          <h3 className="text-3xl font-black uppercase mb-12 tracking-tight text-center italic lg:text-left text-slate-100">
            Engineering <span className="text-engineering-yellow not-italic">Associates</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member, i) => (
              <div key={i} className="group text-center flex flex-col items-center">
                
                {/* FIX 4: Increased Circle container size from max-w-[200px] to [220px] */}
                <div className="relative w-full max-w-[220px] aspect-square mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-engineering-yellow/40 transition-colors duration-500 z-10" />
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 object-[center_20%]" // FIX: Pulls ASHA's face DOWN so her head is safe
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-950 flex items-center justify-center text-slate-700 group-hover:text-engineering-yellow/20 transition-colors duration-500 pt-10">
                        <User 
                          size={140} // Increased placeholder size proportionally
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
                <h4 className="text-base font-bold uppercase text-white tracking-tight mb-0.5">{member.name}</h4>
                <p className="text-engineering-yellow text-[10px] font-mono font-bold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed px-2 max-w-[220px] mx-auto">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}