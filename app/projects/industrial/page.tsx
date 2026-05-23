'use client'
import { motion } from 'framer-motion';
import { MapPin, Factory } from 'lucide-react';

export default function IndustrialGallery() {
  // 1. Featured items with photos (Maintained in a crisp 2-column structural grid layout)
  const featuredProjects = [
    { id: 1, title: "Industrial Plant Layout", img: "/projects/industrial/industrial-bg.png" },
  ];

  // 2. Full Consolidated Industrial Registry (7 entries matching your official logs)
  const projectLog = [
    { name: "2 MW Hydro Power Plant at Sringeri", year: "2006-07", client: "M/S Chescom" },
    { name: "0.8 MW Hydro Power Plant Raichur", year: "2005", client: "M/S Gescom" },
    { name: "Enaltech Lab at Ambernath Mumbai", year: "-", client: "-" },
    { name: "Industrial Shed at Bykampadi", year: "2008", client: "M/S GWASF" },
    { name: "Oil Storage Silos at Bythakol, Karvar", year: "2022", client: "M/S MMCL" },
    { name: "Factory building at Pananmburur, Mangalore", year: "2025", client: "MK Agroteck" },
    { name: "Factory Building at Rathnagiri Maharastra", year: "2025", client: "MK Agroteck" }
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-2">
            Sector Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white">
            Industrial <span className="text-engineering-yellow">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            High-load foundations, massive clear-span manufacturing facilities, processing plants, and heavy 
            utility generation hubs built to withstand demanding operational conditions.
          </p>
        </div>

        {/* ================= PART 1: VISUAL TABULAR GRID (2 Columns) ================= */}
        <div className="mb-28">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <Factory size={14} className="text-engineering-yellow" /> Featured Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative h-[380px] overflow-hidden bg-slate-900 border border-white/10 flex flex-col justify-end p-8"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                
                {/* Dark Vignette Overlay for permanent text readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Fixed Label Content */}
                <div className="relative z-10">
                  <span className="text-engineering-yellow text-[10px] font-mono tracking-widest block mb-1">
                    INDUSTRIAL LOGIX 0{project.id}
                  </span>
                  <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: CHRONOLOGICAL TIMELINE TRACK ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
            <MapPin size={14} className="text-engineering-yellow" /> Chronological Engineering Ledger
          </h2>

          {/* Master Vertical Timeline Line */}
          <div className="relative border-l border-white/10 pl-6 ml-2 space-y-10">
            {projectLog.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Interactive Node Point Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                {/* Responsive Track Row Container */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Block: Index Counter + Project Name + Operator Tag */}
                  <div className="max-w-3xl">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                      <span className="text-slate-600 font-mono normal-case mr-1">Operator:</span>
                      {log.client !== "-" ? log.client : "Specified Corporate Enterprise"}
                    </p>
                  </div>
                  
                  {/* Right Block: Minimalist Date Badge Track */}
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