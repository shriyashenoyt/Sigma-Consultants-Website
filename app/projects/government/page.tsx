'use client'
import { motion } from 'framer-motion';
import { MapPin, ShieldAlert } from 'lucide-react';

export default function GovernmentGallery() {
  // 1. Featured items with photos (Maintained in a crisp 2-column structural grid layout)
  const featuredProjects = [
    { id: 1, title: "MG Road Boulevard - Bengaluru", img: "/projects/government/government-bg.jpg" },
    { id: 2, title: "Pradhan Mantri Awaz Yojana", img: "/projects/government/pmay-mysore.jpg" },
    { id: 3, title: "Navule Cricket Stadium - Shimoga", img: "/projects/government/cricket_stadium_shimoga.jpg" },
    { id: 4, title: "Marina Beach, Chennai", img: "/projects/government/marina_beach.png" }
  ];

  // 2. Full Consolidated Government Registry (13 entries matching your official logs)
  const projectLog = [
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
    { name: "Pradhan Mantri Awaz Yojana, Tumkur, Mysore, Chikmangalore", year: "2021", client: "GOI" },
    { name: "Marina Beach Heritage, Chennai / Marina Beach Chennai, Tamilnadu", year: "2025", client: "Govt. of Tamilnadu / Chennai Metropolitan Dev. Authority" }
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
            High-compliance public infrastructure, urban transportation links, and civic landmarks built 
            to rigorous government standards and strict structural safety mandates.
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
                  
                  {/* Left Block: Index Counter + Project Name + Authority/Client Tag */}
                  <div className="max-w-3xl">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                      <span className="text-slate-600 font-mono normal-case mr-1">Authority:</span>
                      {log.client !== "-" ? log.client : "Public Works / State Department"}
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