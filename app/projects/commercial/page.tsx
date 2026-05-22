'use client'
import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';

export default function CommercialGallery() {
  // 1. Featured items with photos (Maintained in a crisp 2-column structural grid layout)
  const featuredProjects = [
    //{ id: 1, title: "Premamrutham Pink Skies", img: "/projects/commercial/Landmark_Chennai.jpg.jpeg" },
    { id: 1, title: "Commercial Building in Bengaluru", img: "/projects/commercial/commercial-bg.jpg.jpeg" },
  ];

  // 2. Full Consolidated Commercial Registry (29 entries matching your official logs)
  const projectLog = [
    { name: "Convention Centre at Channa Patna", year: "-", client: "-" },
    { name: "Jain Convention Hall Tumkur", year: "-", client: "-" },
    { name: "SDM Convention Hall-Beltangadi", year: "-", client: "-" },
    { name: "Additions & Alterations to Existing SDM Convention Centre, Bangalore", year: "-", client: "-" },
    { name: "Soofi Convention Hall-Talpady Mangalore", year: "-", client: "-" },
    { name: "KVN Convention Hall-Dodda Ballapura", year: "-", client: "-" },
    { name: "TUR Convention Hall-Tumkur", year: "-", client: "-" },
    { name: "KLE Convention Centre Belagavi", year: "-", client: "-" },
    { name: "KABA Convention Centre at Kolar", year: "-", client: "-" },
    { name: "Shadi Mahal at Vainambadi Tamilnadu", year: "-", client: "-" },
    { name: "Sri Sudheendra Convention Hall at Ananthnagar Bangalore", year: "-", client: "-" },
    { name: "Durga Convention Hall (White Palace) Kegeri", year: "-", client: "-" },
    { name: "Convention Hall at Sri Kakulam, Andra Pradesh", year: "-", client: "-" },
    { name: "Convention Hall at Salem for Sri Iskcon Temple", year: "-", client: "-" },
    { name: "Convention Hall for DKV Sangha Yelahanka, Bangalore", year: "-", client: "-" },
    { name: "Rajangana Multi Purpose Hall at Ananth Nagara, Bangalore", year: "-", client: "-" },
    { name: "Premamrutham Multi Purpose Hall at Muddenahalli, Chikkaballapura", year: "-", client: "-" },
    { name: "Music Studio at Marathahalli, Bangalore", year: "-", client: "-" },
    { name: "Event Space Project at Mysore", year: "-", client: "-" },
    { name: "Training Institute at Mysore, Kannapuram & Gaziabad", year: "2009", client: "M/S Rudset" },
    { name: "Training Institute at Vettapalyam, Baran, Beharampur & Bilwara", year: "2011", client: "M/S Rudset" },
    { name: "Function Hall at Basava Kalyana", year: "2019-20", client: "Mujarai Elakhe, Govt. of Karnataka" },
    { name: "Proposed Club House at Gulbarga", year: "2020", client: "Gescom" },
    { name: "Bangalore Club - Additions and Alterations", year: "-", client: "M/S Bangalore Club" },
    { name: "Gulbarga Club - Additions and Alterations", year: "-", client: "M/S Gulbarga Club" },
    { name: "SDM Kalyana Mantapa at Belthangadi", year: "2010", client: "M/S SDM Society" },
    { name: "Sahyadri Guest House building at Sri Dharmasthala", year: "2014", client: "M/S SDM SOCIETY" },
    { name: "Soofi Convention Centre at Talapady, Mangalore", year: "-", client: "-" },
    { name: "Mall of Bangalore at Electronic City", year: "2021-22", client: "-" }
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
            Commercial <span className="text-engineering-yellow">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            From modern steel clear-span convention halls to multi-storey corporate headquarters, our 
            commercial blueprints optimize functional square-footage while matching rigid building code compliance metrics.
          </p>
        </div>

        {/* ================= PART 1: VISUAL TABULAR GRID (2 Columns) ================= */}
        <div className="mb-28">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <Building2 size={14} className="text-engineering-yellow" /> Featured Blueprints
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
                
                {/* Dark Vignette Overlay for text readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Fixed Label Content */}
                <div className="relative z-10">
                  <span className="text-engineering-yellow text-[10px] font-mono tracking-widest block mb-1">
                    CASE STUDY 0{project.id}
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

          {/* 3-Column Header Track with matching column configurations */}
          <div className="grid grid-cols-12 pb-4 border-b-2 border-white/10 text-xs font-black uppercase tracking-widest text-engineering-yellow gap-4">
            <div className="col-span-6 md:col-span-7">Project Description / Classification</div>
            <div className="col-span-3 md:col-span-2 text-center md:text-left">Year</div>
            <div className="col-span-3 text-right md:text-left">Client / Corporate Entity</div>
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
                
                {/* Column 2: Fiscal Execution Window */}
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