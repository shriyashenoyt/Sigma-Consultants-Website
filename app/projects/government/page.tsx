'use client'
import { motion } from 'framer-motion';
import { MapPin, ShieldAlert, Landmark, History } from 'lucide-react';

export default function GovernmentGallery() {
  // 1. Core Featured Items (Upgraded with downscaled text sizes + smooth hover zoom)
  const featuredProjects = [
    { id: 1, title: "MG Road Boulevard - Bengaluru", img: "/projects/government/government-bg.jpg" },
    { id: 2, title: "Pradhan Mantri Awaz Yojana", img: "/projects/government/pmay-mysore.jpg" },
    { id: 3, title: "Navule Cricket Stadium - Shimoga", img: "/projects/government/cricket_stadium_shimoga.jpg" },
    { id: 4, title: "Marina Beach, Chennai", img: "/projects/government/marina_beach.png" }
  ];

  // 2. Premium Dedicated Heritage Portfolio Data
  const heritageProjects = [
    { name: "Toilet Block and Wazu Khana at Macca Masjid Hyderabad", authority: "Dep. of Archaeology & Museums Telangana", scope: "High-Compliance Heritage Restoration" },
    { name: "Anjaneri Interpretation Centre Nasik", authority: "", scope: "Archaeological Structural Intervention" },
    { name: "Interpretation Centre at Chithradurga", authority: "", scope: "Historic Site Infrastructure" },
    { name: "Bangalore Club - Additions and Alterations", authority: "M/S Bangalore Club", scope: "Classic Colonial Framework Remodeling" },
    { name: "Gulbarga Club - Additions and Alterations", authority: "M/S Gulbarga Club", scope: "Heritage Asset Retrofitting" },
    { name: "Marina Beach Heritage, Chennai, Tamilnadu", authority: "Chennai Metropolitan Development Authority", scope: "Civic Landmark Preservation" }
  ];

  // 3. Standard Civic Infrastructure Registry
  const publicLog = [
    { name: "Cricket Stadium at Shimogga Phase 1", year: "2009", client: "KSCA" },
    { name: "Cricket Stadium at Aluru, Bangalore Phase 1", year: "2007-08", client: "KSCA" },
    { name: "Indoor Stadium, Nagaland", year: "2012", client: "Govt. of Nagaland" },
    { name: "Outdoor Shooting Range, Chikmagalur", year: "2011", client: "District Rifle & Shotgun Association" },
    { name: "MG Road Boulevard Bangalore - Revitalisation", year: "2011", client: "Namma Metro Bangalore" },
    { name: "ED & AIDS Hospital at Bangalore", year: "2012", client: "Namma Metro Bangalore" },
    { name: "Yathri Nivas at Kanakagiri, Sindhanoor", year: "2010", client: "Karnataka Tourism Department" },
    { name: "Yathri Nivas at Dharmasla, Madhyapradesh", year: "2010", client: "Karnataka Tourism Department" },
    { name: "Bus Stand Building at Chitaguppa", year: "2012", client: "M/S KSRTC" },
    { name: "Zilla Panchayath Office at Chiitur", year: "2012", client: "Govt. of Andhra Pradesh" },
    { name: "Dr. B. R. Ambedkar Bhavan at Wadi", year: "2019-20", client: "Karmika Elakhe, Govt. of Karnataka" },
    { name: "Pradhan Mantri Awaz Yojana, Tumkur, Mysore, Chikmangalore", year: "2021", client: "GOI" }
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-24 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20">
          <p className="text-engineering-yellow text-xs font-mono font-black uppercase tracking-[0.5em] mb-2">
            Sector Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tight">
            Government <span className="text-engineering-yellow not-italic">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            High-compliance public infrastructure, urban transportation links, and civic landmarks built 
            to rigorous government standards and strict structural safety mandates.
          </p>
        </div>

        {/* ================= PART 1: COMPACT VISUAL FEATURED GRID (With Sizing & Zoom Fix) ================= */}
        <div className="mb-24">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2 select-none">
            <ShieldAlert size={14} className="text-engineering-yellow" /> Civic Landmarks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative w-full aspect-[4/3] overflow-hidden bg-slate-900 border border-white/10 flex flex-col justify-end p-5 md:p-6 cursor-pointer"
              >
                {/* Background Image Layer with Cinematic Zoom Parallax */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transform scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Content Layer */}
                <div className="relative z-10 min-w-0 pointer-events-none">
                  <span className="text-engineering-yellow text-[8px] font-mono tracking-widest block mb-1">
                    INFRASTRUCTURE CONTEXT 0{project.id}
                  </span>
                  
                  {/* FIX: Reduced from 'text-lg md:text-xl' to 'text-sm md:text-base' for cleaner composition */}
                  <h3 className="text-sm md:text-base font-bold uppercase italic text-white tracking-tight leading-tight break-words group-hover:text-engineering-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: THE HERITAGE & RESTORATION LEDGER ================= */}
        <div className="mb-28 border border-engineering-yellow/20 bg-slate-950/40 p-6 md:p-10 rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/[0.02] pointer-events-none select-none hidden md:block">
            <History size={240} strokeWidth={1} />
          </div>

          <div className="flex items-center gap-3 mb-2">
            <Landmark size={18} className="text-engineering-yellow" />
            <h2 className="text-sm font-mono font-black text-engineering-yellow uppercase tracking-[0.3em]">
              Historic Preservation & Heritage Registry
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-xl mb-10 leading-relaxed">
            Specialized engineering briefs executed under strict regulatory compliance frameworks to protect, reinforce, and alter historical architectural assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {heritageProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-l-2 border-engineering-yellow bg-white/[0.02] p-5 flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[9px] font-mono font-black text-engineering-yellow bg-engineering-yellow/10 border border-engineering-yellow/20 px-2 py-0.5 tracking-wider select-none">
                      {project.scope}
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-bold">PROJ_H{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight leading-tight group-hover:text-engineering-yellow transition-colors duration-300 mt-2 break-words">
                    {project.name}
                  </h3>
                </div>

                {project.authority && (
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-4 pt-3 border-t border-white/5 font-mono">
                    <span className="text-slate-600 normal-case mr-1">Authority:</span>
                    {project.authority}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 3: CHRONOLOGICAL Public Infrastructure Registry ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-2 select-none">
            <MapPin size={14} className="text-engineering-yellow" /> Public Infrastructure Registry
          </h2>

          <div className="relative border-l border-white/10 pl-6 ml-2 space-y-10">
            {publicLog.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative group"
              >
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {log.name}
                    </h3>
                    
                    {log.client && log.client !== "-" && (
                      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                        <span className="text-slate-600 font-mono normal-case mr-1">Authority:</span>
                        {log.client}
                      </p>
                    )}
                  </div>
                  
                  <div className="text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded pl-8 md:pl-2.5 self-start md:self-auto min-w-[90px] text-center shrink-0 tracking-wider">
                    {log.year !== "-" ? log.year : "COMPLETE"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}