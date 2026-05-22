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

        {/* ================= PART 2: 3-COLUMN MASTER DATA MATRIX ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <MapPin size={14} className="text-engineering-yellow" /> Plant & Warehouse Directory
          </h2>

          {/* 3-Column Header Track */}
          <div className="grid grid-cols-12 pb-4 border-b-2 border-white/10 text-xs font-black uppercase tracking-widest text-engineering-yellow gap-4">
            <div className="col-span-6 md:col-span-7">Industrial Asset / Classification</div>
            <div className="col-span-3 md:col-span-2 text-center md:text-left">Year</div>
            <div className="col-span-3 text-right md:text-left">Client / Operator Company</div>
          </div>

          {/* Data Log Row Component Output Loop */}
          <div className="divide-y divide-white/5">
            {projectLog.map((log, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 py-4 items-center text-xs md:text-sm hover:bg-white/[0.02] transition-colors gap-4 px-1"
              >
                {/* Column 1: Row Counter + Project Asset Name */}
                <div className="col-span-6 md:col-span-7 font-bold uppercase text-white tracking-tight leading-tight pr-2">
                  <span className="text-slate-600 font-mono text-[11px] mr-2 inline-block w-6">{index + 1}.</span>
                  {log.name}
                </div>
                
                {/* Column 2: Implementation Year */}
                <div className="col-span-3 md:col-span-2 text-slate-400 font-mono text-center md:text-left tracking-wide">
                  {log.year}
                </div>

                {/* Column 3: Corporate Client Stakeholder */}
                <div className="col-span-3 text-slate-400 font-medium text-right md:text-left tracking-wide uppercase text-[11px] md:text-xs break-words leading-tight" title={log.client}>
                  {log.client}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}