import { History, Award, Users, HardHat, Cpu, Globe } from 'lucide-react';
import Image from 'next/image'; // Import Next.js Image component

export default function AboutPage() {
  const team = [
    { 
      name: "Sathish Shenoy", 
      role: "Managing Director", 
      image: "/sathish.jpg", // Path to your image in /public
      desc: "Lead Structural Consultant with 25 years of site-level expertise." 
    },
    { 
      name: "Asha Shenoy", 
      role: "Senior Designer", 
      image: "/asha.jpg",
      desc: "Expert in STAAD.Pro and ETABS structural modeling and analysis." 
    },
    { 
      name: "Devraj Hosahallu", 
      role: "Site Engineer", 
      image: "/team/devraj.jpg",
      desc: "Specializing in high-rise residential structural design." 
    },
    { 
      name: "Narendra", 
      role: "Site Engineer", 
      image: "/team/narendra.jpg",
      desc: "Expert in AutoCAD technical detailing and blueprint drafting." 
    },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20 overflow-x-hidden">
      
      {/* SECTION 1: THE STORY & STATS */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-6xl font-black uppercase italic mb-8 leading-tight">
              A Legacy of <span className="text-engineering-yellow font-bold">Stability.</span>
            </h1>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Founded in 2002, Sigma Consultants began as a small family-run structural enterprise. Today, we stand in our <span className="text-white font-bold italic">25th Year</span> of excellence.
              </p>
              <p>
                Run by a dedicated husband-and-wife duo, our office has evolved into a global consultancy firm. While our roots are in India, our structural footprints are seen in commercial and industrial landmarks worldwide.
              </p>
              <p>
                We don't just design; we inspect. Every project benefits from the Managing Director's personal on-site involvement, ensuring that what is planned on software is executed with 100% integrity on the field.
              </p>
            </div>
          </div>

          {/* Corrected Stats Grid - Forced Layout Stability */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
            
            {/* Box 1: Years of Service */}
            <div className="group relative flex flex-col items-center justify-center p-12 border border-white/10 bg-slate-950 overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-50 group-hover:opacity-30 transition-opacity duration-700"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000')" }}
              ></div>
              <div className="absolute inset-0 z-[1] bg-engineering-bg/60"></div>
              
              <div className="relative z-10 text-center">
                <Award className="text-engineering-yellow mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" size={54} />
                <p className="text-6xl font-black mb-2 leading-none text-white">25</p>
                <p className="text-xs uppercase font-bold text-slate-400">Years of Service</p>
              </div>
            </div>

            {/* Box 2: Global Projects */}
            <div className="group relative flex flex-col items-center justify-center p-12 border border-white/10 bg-slate-950 overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-50 group-hover:opacity-30 transition-opacity duration-700"
                style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>
              <div className="absolute inset-0 z-[1] bg-engineering-bg/60"></div>

              <div className="relative z-10 text-center">
                <Globe className="text-engineering-yellow mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" size={54} />
                <p className="text-6xl font-black mb-2 leading-none text-white">10K+</p>
                <p className="text-xs uppercase font-bold text-slate-400">Global Projects</p>
              </div>
            </div>
          </div> 
        </div> 
      </section>

      {/* SECTION 2: TECH TOOLKIT */}
      <section className="bg-slate-950 py-24 border-y border-white/5 mb-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-black text-engineering-yellow uppercase tracking-[0.4em] mb-12">The Tech Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-engineering-yellow/10 border border-engineering-yellow/20 flex items-center justify-center mx-auto text-engineering-yellow">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase">Advanced Modeling</h3>
              <p className="text-slate-500 text-sm">Rigorous stress analysis using <span className="text-white font-bold">STAAD.Pro</span> and <span className="text-white font-bold">ETABS</span>.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-engineering-yellow/10 border border-engineering-yellow/20 flex items-center justify-center mx-auto text-engineering-yellow">
                <History size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase">Precision Drafting</h3>
              <p className="text-slate-500 text-sm">Blueprints crafted with millimeter accuracy in <span className="text-white font-bold">AutoCAD</span>.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-engineering-yellow/10 border border-engineering-yellow/20 flex items-center justify-center mx-auto text-engineering-yellow">
                <HardHat size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase">On-Site Inspection</h3>
              <p className="text-slate-500 text-sm">Personal visits ensuring execution matches design intent perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TEAM */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-black uppercase mb-16 italic">The <span className="text-engineering-yellow">Team</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              {/* Image Container */}
              <div className="aspect-[3/4] bg-slate-900 border border-white/10 mb-6 flex items-center justify-center relative overflow-hidden">
                <Image 
                   src={member.image} 
                   alt={member.name}
                   fill
                   className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 text-[10px] font-bold uppercase text-engineering-yellow opacity-40 z-10">
                  Sigma Consultants
                </div>
              </div>
              <h4 className="text-xl font-black uppercase mb-1">{member.name}</h4>
              <p className="text-engineering-yellow text-xs font-bold uppercase mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}