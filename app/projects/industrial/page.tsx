'use client'
import { motion } from 'framer-motion';
import { MapPin, Factory } from 'lucide-react';

export default function IndustrialGallery() {
  // 1. Featured items with photos (Optimized with smaller typography and cinematic zoom animations)
  const featuredProjects = [
    { id: 1, title: "Industrial Plant Layout", img: "/projects/industrial/industrial-bg.png" },
    { id: 2, title: "Goshala", img: "/projects/industrial/goshala.jpg" },
  ];

  // 2. Full Consolidated Industrial Registry (Completely cross-referenced with zero duplication)
  const projectLog = [
    { name: "Chemical Plant at Hyderabad", year: "2003-04", client: "M/S Glochem Industries Pvt. Ltd." },
    { name: "Factory Building at Peenya Bangalore", year: "2003-04", client: "M/S Tocol Enterprises Pvt. Ltd." },
    { name: "Clean Room For M/S Saint Gobain at Chennai", year: "2004-05", client: "M/S Saint Gobain" },
    { name: "Factory/Corporate Office Building at Bangalore", year: "2005", client: "M/S V V Controls Pvt. Ltd." },
    { name: "Chemical Plant at Bangkok", year: "2005-06", client: "-" },
    { name: "Chemical Plant at Hosur", year: "2006-07", client: "M/S Bio Plus" },
    { name: "Factory Building Bangalore", year: "2006-07", client: "M/S Moog Controls(I) Limited" },
    { name: "Ayurvedic Plant at Nanjanagud", year: "2008-09", client: "M/S Kottakal Arya Vaidya Sala" },
    { name: "Steel Plant at Kenya, Ethiopia", year: "2006-07", client: "-" },
    { name: "Factory Campus at Bangalore", year: "2006-07", client: "M/S Basant Betons Tiles Pvt. Ltd." },
    { name: "Chemical Plant at Mysore", year: "2006-07", client: "M/S Millenium Chemical Plant" },
    { name: "Chemical Plant at Mumbai (Enaltech Lab)", year: "2008-09", client: "M/S Enaltech Lab Pvt. Ltd." },
    { name: "Factory Building at Doddaballapura", year: "2009", client: "M/S Campson Bio Tech(I) Ltd." },
    { name: "Factory Building at Mangalore (Industrial Shed)", year: "2008", client: "M/S GWASF" },
    { name: "50 KLPD Sugar Plant at Bijapura", year: "Planning", client: "M/S Nandi SSK" },
    { name: "Garment Factory at Bangalore", year: "2009", client: "M/S Cotton World Pvt. Ltd." },
    { name: "Laboratory Building at Bangalore", year: "2010", client: "M/S Anthem Bio Sciences Pvt. Ltd." },
    { name: "Factory Building at Bangalore", year: "2010", client: "M/S Universel Flexible Pvt. Ltd." },
    { name: "Factory Building at Bangalore", year: "2010", client: "M/S KLN Industries Pvt. Ltd." },
    { name: "Garment Factory at Bangalore", year: "2011", client: "M/S Ranger Apparel" },
    { name: "Factory Building at T Begur, Bangalore", year: "2011", client: "M/S Nutrifeeds & Farms Pvt. Ltd." },
    { name: "IT Building at Electronic City, Bangalore", year: "2011", client: "M/S IT TASK Park" },
    { name: "Canteen Expansion to Existing Building at Bangalore", year: "2011", client: "M/S Bosch Limited" },
    { name: "Agro Corn Product, Tumkur", year: "2014", client: "M/S Shreeji Agro Corn Product" },
    
    // --- WATER RESOURCES & ENERGY HUB INFRASTRUCTURE ---
    { name: "2 MW Hydro Power Plant at Sringeri", year: "2006-07", client: "M/S Mage Bail Enterprises" },
    { name: "0.8 MW Hydro Power Plant Raichur", year: "2005", client: "M/S Anjaneya Powertech" },
    { name: "0.4MW Hydro Power Plant Bidadi", year: "Planning", client: "M/S Mage Bail Enterprises" },
    
    // --- MISCELLANEOUS LOG TRACK REGISTRIES ---
    { name: "Crusher Plant at Somana Halli", year: "2005", client: "M/S Equi Fab Engineering" },
    { name: "Oil Storage Silos at Bythakol, Karwar", year: "2022", client: "M/S MMCL" },
    { name: "Factory building at Panambur, Mangalore", year: "2025", client: "M/S MK Agrotech" },
    { name: "Factory Building at Ratnagiri Maharashtra", year: "2025", client: "M/S MK Agrotech" }
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-24 font-sans antialiased overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20">
          <p className="text-engineering-yellow text-xs font-mono font-black uppercase tracking-[0.5em] mb-2">
            Sector Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tight">
            Industrial <span className="text-engineering-yellow not-italic">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            High-load foundations, massive clear-span manufacturing facilities, processing plants, and heavy 
            utility generation hubs built to withstand demanding operational conditions.
          </p>
        </div>

        {/* ================= PART 1: VISUAL FEATURED GRID (Clean Scaling & Zoom) ================= */}
        <div className="mb-24">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2 select-none">
            <Factory size={14} className="text-engineering-yellow" /> Featured Facilities
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group relative w-full aspect-[4/3] overflow-hidden bg-slate-900 border border-white/10 flex flex-col justify-end p-5 md:p-6 cursor-pointer"
              >
                {/* Background Layer with Cinematic Hover Zoom Parallax */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transform scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Content Overlay Fields */}
                <div className="relative z-10 min-w-0 pointer-events-none">
                  <span className="text-engineering-yellow text-[8px] font-mono tracking-widest block mb-1">
                    INDUSTRIAL LOGIX 0{project.id}
                  </span>
                  
                  {/* Applied Cleaner, Smaller Typography Standard Bounds */}
                  <h3 className="text-sm md:text-base font-bold uppercase italic text-white tracking-tight leading-tight break-words group-hover:text-engineering-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: CHRONOLOGICAL TIMELINE TRACK ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-2 select-none">
            <MapPin size={14} className="text-engineering-yellow" /> Chronological Engineering Ledger
          </h2>

          <div className="relative border-l border-white/10 pl-6 ml-2 space-y-10">
            {projectLog.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative group"
              >
                {/* Timeline Interactive Bullet Anchor Node */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Block: Index + Title + Dynamic Structural Subtitle Label */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    {/* CONDITION: Completely removes sub-row markup loop if client name is empty or a dash */}
                    {log.client && log.client !== "-" && (
                      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                        <span className="text-slate-600 font-mono normal-case mr-1">Operator:</span>
                        {log.client}
                      </p>
                    )}
                  </div>
                  
                  {/* Right Block: Minimalist Date Badge Field */}
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