'use client'
import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';

export default function CommercialGallery() {
  // 1. Featured items with photos (Optimized with cinematic hover zoom and clean fonts)
  const featuredProjects = [
    { id: 1, title: "Dhimapur Church", img: "/projects/institutional/Church_Building_Dhimapur-Nagaland.jpg.jpeg" },
    { id: 2, title: "Commercial Building at Rajajinagar, Bengaluru", img: "/projects/commercial/rajajinagar.png" },
    { id: 3, title: "Sri Venkatramana Devasthan at Ananthnagar, Bengaluru", img: "/projects/commercial/ananthnagar.jpeg" },
  ];

  // 2. Full Consolidated Commercial & Places of Worship Registry
  const projectLog = [
    { name: "Convention Centre at Channa Patna", year: "-", client: "-" },
    { name: "Jain Convention Hall Tumkur", year: "-", client: "-" },
    { name: "SDM Convention Hall-Beltangadi", year: "-", client: "-" },
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
    { name: "Mall of Bangalore at Electronic City", year: "2021-22", client: "-" },

    // --- PLACES OF WORSHIP ---
    { name: "Sri Venkataraman Devasthana, Ananth Nagar, Bangalore", year: "2003", client: "GSB Welfare Association" },
    { name: "Church Building 1 at Nagaland", year: "2007-08", client: "Sumi Baptist Church" },
    { name: "Arya Samaja Building at V V Puram Bangalore", year: "2008-09", client: "M/S Arya Samaja" },
    { name: "Sri Sathya Sai Baba Ashram & Campus in 10 Dist, K'taka", year: "2009-19", client: "Prashanthi Bala Mandira Trust" },
    { name: "Church Building 2 at Nagaland", year: "2017-19", client: "Lotha Baptist Church" },
    { name: "Sri Sathya Sai Baba Ashram & Campus at Madurai", year: "2019", client: "Prashanthi Bala Mandira Trust" },
    { name: "Sri Ramanashrama at Tiruvannamalai Tamilnadu", year: "2007-09", client: "Sri Ramanashrama" },
    { name: "Noorani Masjid, Bangalore", year: "2013-14", client: "-" },
    { name: "Kanha Shanthivanm at Hyderabad", year: "2017-19", client: "M/S SRCM" },
    { name: "Kanha Shanthivanm at Bareilly Uttar Pradesh", year: "2017-19", client: "M/S SRCM" },
    { name: "Kanha Shanthivanm at Satkol", year: "2017-19", client: "M/S SRCM" },
    { name: "Extension of Masjid E Pirdosh at Richards Town", year: "2019-20", client: "-" },
    { name: "Nalwar Mutt - Additions & Alterations", year: "2018-20", client: "-" },
    { name: "Sri Veera Bhadreshwara Temple Bidar - Construction of Guest Room Block & Kalyana Mantapa", year: "2019-20", client: "Mujarai Elakhe, Govt. of Karnataka" },
    { name: "Shivaling at Mysore", year: "2020", client: "Brahma Kumaris" },
    { name: "Sri Subramanya Mutt at Haralur Bangalore", year: "2020", client: "-" },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20">
          <p className="text-engineering-yellow text-xs font-mono font-black uppercase tracking-[0.5em] mb-2">
            Sector Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tight">
            Civic & Community <span className="text-engineering-yellow not-italic">Spaces</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            From modern steel clear-span convention halls to multi-storey corporate headquarters, our 
            commercial and community blueprints optimize functional square-footage while matching rigid building code compliance metrics.
          </p>
        </div>

        {/* ================= PART 1: COMPACT VISUAL FEATURED GRID ================= */}
        <div className="mb-24">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2 select-none">
            <Building2 size={14} className="text-engineering-yellow" /> Featured Blueprints
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group relative w-full aspect-[4/3] overflow-hidden bg-slate-900 border border-white/10 flex flex-col justify-end p-5 md:p-6 cursor-pointer"
              >
                {/* Background Image with Cinematic Hover Zoom */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transform scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                
                {/* Vignette Layer for Text Contrast Protection */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Content Overlay Track */}
                <div className="relative z-10 min-w-0 pointer-events-none">
                  <span className="text-engineering-yellow text-[8px] font-mono tracking-widest block mb-1">
                    CASE STUDY 0{project.id}
                  </span>
                  
                  {/* Reduced Font Size to match client requested design standard */}
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
                {/* Timeline Interactive Bullet Node Anchor */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Block: Index + Title + Dynamic Stakeholder Row */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    {/* CONDITION: Drop entire meta line layout if client name is missing or set to "-" */}
                    {log.client && log.client !== "-" && (
                      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                        <span className="text-slate-600 font-mono normal-case mr-1">Stakeholder:</span>
                        {log.client}
                      </p>
                    )}
                  </div>
                  
                  {/* Right Block: Year Metric Track Badge */}
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