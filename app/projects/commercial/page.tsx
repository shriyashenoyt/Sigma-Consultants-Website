'use client'
import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';

export default function CommercialGallery() {
  // 1. Featured items with photos (Maintained in a crisp 2-column structural grid layout)
  const featuredProjects = [
    { id: 1, title: "Commercial Building in Bengaluru", img: "/projects/commercial/commercial-bg.jpg.jpeg" },
    { id: 2, title: "Dhimapur Church", img: "/projects/institutional/Church_Building_Dhimapur-Nagaland.jpg.jpeg" },
    { id: 3, title: "Commercial Building at Rajajinagar, Bengaluru", img: "/projects/commercial/rajajinagar.png" },
    { id: 4, title: "Sri Venkatramana Devasthan at Ananthnagar, Bengaluru", img: "/projects/commercial/ananthnagar.jpeg" },
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
    { name: "Proposed Extension of Masjid E Pirdosh at Richards Town", year: "2019-20", client: "-" },
    { name: "Nalwar Mutt - Additions & Alterations", year: "2018-20", client: "-" },
    { name: "Sri Veera Bhadreshwara Temple Bidar - Construction of Guest Room Block & Kalyana Mantapa", year: "2019-20", client: "Mujarai Elakhe, Govt. of Karnataka" },
    { name: "Proposed Shivaling at Mysore", year: "2020", client: "Brahma Kumaris" },
    { name: "Sri Subramanya Mutt at Haralur Bangalore", year: "2020", client: "-" },

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
            Civic & Community <span className="text-engineering-yellow">Spaces</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            From modern steel clear-span convention halls to multi-storey corporate headquarters, our 
            commercial and community blueprints optimize functional square-footage while matching rigid building code compliance metrics.
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

        {/* ================= PART 1.5: LAYOUT OPTION 1 - CHRONOLOGICAL TIMELINE TRACK ================= */}
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
                  
                  {/* Left Block: Index Counter + Project Name + Client Tag */}
                  <div className="max-w-3xl">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                      <span className="text-slate-600 font-mono normal-case mr-1">Stakeholder:</span>
                      {log.client !== "-" ? log.client : "Private Infrastructure Asset"}
                    </p>
                  </div>
                  
                  {/* Right Block: Minimalist Date Badge Track */}
                  <div className="text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded pl-8 md:pl-2.5 self-start md:self-auto min-w-[80px] text-center shrink-0">
                    {log.year !== "-" ? log.year : "Completed"}
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