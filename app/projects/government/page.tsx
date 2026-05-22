'use client'
import { motion } from 'framer-motion';
import { MapPin, ShieldAlert } from 'lucide-react';

export default function GovernmentGallery() {
  // 1. Featured items with photos (Maintained in a crisp 2-column structural grid layout)
  const featuredProjects = [
    { id: 1, title: "MG Metro Station Bengaluru", img: "/projects/government/government-bg.jpg" },
    { id: 2, title: "PMAY - Mysore & Chikamagalur", img: "/projects/government/pmay-mysore.jpg" },
  ];

  // 2. Comprehensive Data Directory extracted from your official government logs
  const projectLog = [
    { name: "Cricket Stadium at Shimogga Phase 1", year: "2009", client: "KSCA" },
    { name: "Cricket Stadium at Aluru, Bangalore Phase 1", year: "2007-08", client: "KSCA" },
    { name: "Indoor Stadium, Nagaland", year: "2012", client: "Govt. of Nagaland" },
    { name: "Outdoor Shooting Range, Chikmagalur", year: "2011", client: "District Rifle & Shotgun Association" },
    { name: "MG Road Boulevard Bangalore-Revitalisation", year: "2011", client: "Namma Metro Bangalore" },
    { name: "ED & AIDS Hospital at Bangalore", year: "2012", client: "Namma Metro Bangalore" },
    { name: "Yathri Nivas at Kanakagiri, Sindhanoor", year: "2010", client: "Karnataka Tourism Department" },
    { name: "Yathri Nivas at Dharmasla, Madhyapradesh", year: "2010", client: "Karnataka Tourism Department" },
    { name: "Training Institute at Mysore, Kannapuram & Gaziabad", year: "2009", client: "M/S Rudset" },
    { name: "Training Institute at Vettapalyam, Baran, Beharampur & Bilwara", year: "2011", client: "M/S Rudset" },
    { name: "Bus Stand Building at Chitaguppa", year: "2012", client: "M/S KSRTC" },
    { name: "Zilla Panchayath Office at Chiitur", year: "2012", client: "Govt. of Andhra Pradesh" },
    { name: "Dr. B. R. Ambedkar Bhavan at Wadi", year: "2019-20", client: "Karmika Elakhe, Govt. of Karnataka" },
    { name: "Quarantine and Isolation Facility, on Airport Road, Bangalore", year: "-", client: "M/S CPWD" },
    { name: "Marina Beach Heritage, Chennai", year: "2025", client: "Govt. of Tamil Nadu" },
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
            Government <span className="text-engineering-yellow">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            High-compliance public infrastructure and civic foundations designed to meticulous 
            government standards, combining structural resilience with absolute regulatory accuracy.
          </p>
        </div>

        {/* ================= PART 1: VISUAL TABULAR GRID (2 Columns) ================= */}
        <div className="mb-28">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <ShieldAlert size={14} className="text-engineering-yellow" /> Civic Landmarks
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
                    INFRASTRUCTURE CONTEXT 0{project.id}
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
            <MapPin size={14} className="text-engineering-yellow" /> Official Project Registry
          </h2>

          {/* 3-Column Header Track */}
          <div className="grid grid-cols-12 pb-4 border-b-2 border-white/10 text-xs font-black uppercase tracking-widest text-engineering-yellow gap-4">
            <div className="col-span-6 md:col-span-7">Project Description Name</div>
            <div className="col-span-3 md:col-span-2 text-center md:text-left">Year</div>
            <div className="col-span-3 text-right md:text-left">Authority / Client</div>
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
                {/* Column 1: Row Counter + Project Name */}
                <div className="col-span-6 md:col-span-7 font-bold uppercase text-white tracking-tight leading-tight pr-2">
                  <span className="text-slate-600 font-mono text-[11px] mr-2 inline-block w-6">{index + 1}.</span>
                  {log.name}
                </div>
                
                {/* Column 2: Audit/Execution Year */}
                <div className="col-span-3 md:col-span-2 text-slate-400 font-mono text-center md:text-left tracking-wide">
                  {log.year}
                </div>

                {/* Column 3: Issuing Agency/Department */}
                <div className="col-span-3 text-slate-400 font-medium text-right md:text-left tracking-wide uppercase text-[11px] md:text-xs truncate" title={log.client}>
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