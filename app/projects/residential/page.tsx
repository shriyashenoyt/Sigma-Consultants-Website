'use client'
import { motion } from 'framer-motion';
import { MapPin, Home } from 'lucide-react';

export default function ResidentialGallery() {
  // 1. Featured items with photos (Displayed in a clean 2-column grid layout)
  const featuredProjects = [
    { id: 1, title: "Sri Sathya Sai Anandaniketanam", img: "/projects/residential/c4167fa8-813c-4a89-ba91-1a2dc1733c94.jpg" },
    { id: 2, title: "Soundarya Kamakshi Apartment", img: "/projects/residential/cc94bdfc-4fab-4631-ad3a-f4fa9726f7a0.jpg" },
    { id: 3, title: "Sigma Heights Tower", img: "/projects/residential/Elite_Belathur.jpg.jpeg" },
    { id: 4, title: "KVG Medical College", img: "/projects/residential/residential-bg.jpeg" },
    { id: 5, title: "SDM Institute of Technology", img: "/projects/residential/Hitesh_Jakkuru.jpg.jpeg" },
    { id: 6, title: "SDM Institute of Technology", img: "/projects/residential/Soundarya_Kamakshi.JPG.jpeg" },
  ];

  // 2. Comprehensive data directory for other residential project logs (No photos)
  const projectLog = [
    { name: "Elite Belathur Residential Enclave", location: "Whitefield, Bengaluru" },
    { name: "Green Meadows Premium Villas", location: "Mangaluru, Karnataka" },
    { name: "Skyline Vista Multi-Storey Apartments", location: "Chennai, Tamil Nadu" },
    { name: "High-Rise Residential Group Housing", location: "Mysuru, Karnataka" },
    { name: "Vaibhav Co-operative Housing Society", location: "Udupi, Karnataka" },
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
            Residential <span className="text-engineering-yellow">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            Safe, load-optimized structural engineering for modern living frameworks. Our portfolio 
            ranges from multi-storey apartment towers to low-rise luxury housing units engineered for seismic safety.
          </p>
        </div>

        {/* ================= PART 1: VISUAL TABULAR GRID (2 Columns) ================= */}
        <div className="mb-28">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <Home size={14} className="text-engineering-yellow" /> Featured Residences
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
                    FRAMEWORK STRUCTURE 0{project.id}
                  </span>
                  <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: COMPREHENSIVE REGISTRY (2 Columns Table) ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <MapPin size={14} className="text-engineering-yellow" /> Housing & Towers Directory
          </h2>

          {/* Table Header Wrapper */}
          <div className="grid grid-cols-2 pb-4 border-b-2 border-white/10 text-xs font-black uppercase tracking-widest text-engineering-yellow">
            <div>Residential Complex / Developer</div>
            <div className="text-right md:text-left">Project Location</div>
          </div>

          {/* Table Row Content */}
          <div className="divide-y divide-white/5">
            {projectLog.map((log, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 py-5 items-center text-sm hover:bg-white/[0.02] transition-colors px-1"
              >
                {/* Column 1: Project Name */}
                <div className="font-bold uppercase text-white tracking-tight pr-4">
                  {log.name}
                </div>
                
                {/* Column 2: Location */}
                <div className="text-slate-400 text-xs md:text-sm font-medium text-right md:text-left tracking-wide">
                  {log.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}