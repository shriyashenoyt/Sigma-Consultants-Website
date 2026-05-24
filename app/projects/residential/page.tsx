'use client'
import { motion } from 'framer-motion';
import { MapPin, Home, Crown } from 'lucide-react';

export default function ResidentialGallery() {
  // 1. Featured items with photos (Optimized with smaller caption fonts + hover zoom)
  const featuredProjects = [
    { id: 1, title: "Apartment Building for Century Builders", img: "/projects/residential/c4167fa8-813c-4a89-ba91-1a2dc1733c94.jpg" },
    { id: 2, title: "High End Villa at Bengaluru", img: "/projects/residential/cc94bdfc-4fab-4631-ad3a-f4fa9726f7a0.jpg" },
    { id: 3, title: "Apartment Building at Bengaluru", img: "/projects/residential/Elite_Belathur.jpg.jpeg" },
    { id: 4, title: "Apartment Building at Bengaluru", img: "/projects/residential/residential-bg.jpeg" },
    { id: 5, title: "Apartment Building at Bengaluru", img: "/projects/residential/Hitesh_Jakkuru.jpg.jpeg" },
    { id: 6, title: "Soundarya Kamakshi Apartment - Bengaluru", img: "/projects/residential/Soundarya_Kamakshi.JPG.jpeg" },
    { id: 7, title: "Apartment Building at Bangalore", img: "/projects/institutional/Royal_Concord.jpg.jpeg" },
    { id: 8, title: "Apartment Building at Chennai", img: "/projects/commercial/Landmark_Chennai.jpg.jpeg" },
    { id: 9, title: "Farmhouse at Sondekoppa, Bengaluru", img: "/projects/residential/farmhouse.png" },
    { id: 10, title: "Residence for Adv. Chandrashekhar Reddy at Sahakaranagar, Bengaluru", img: "/projects/residential/lawyer.png" },
    { id: 11, title: "Residence for Sri Veerendra Heggade (Beedu), Dharmasthala", img: "/projects/residential/beedu.jpg" },
  ];

  // 2. Premium VIP High-Profile Private Residential Registry
  const vipProjects = [
    { name: "Residence at Cantonment, Bangalore", owner: "Sri Zameer Ahmed Khan, Minister", scope: "High-Security Executive Abode" },
    { name: "Karthik Villa at Trissure, Kerala", owner: "MD, Kalyan Developers", scope: "Premium Luxury Estate" },
    { name: "Kalyana Raman Villa at Trissure, Kerala", owner: "Chairman, Kalyan Jewellers", scope: "Luxury Estate Framework" },
    { name: "Residence at Katni, Madhya Pradesh", owner: "Mittal Family", scope: "Private High-Load Estate" },
    { name: "Residence at Indiranagara, Bangalore", owner: "Venkatesh Prasad, Cricket Player", scope: "Custom Residential Layout" },
    { name: "Residence at Sadashiva Nagara, Bangalore", owner: "Suresh Bairathy, Minister, Govt. of K'taka", scope: "Executive Structural Layout" },
    { name: "Residence At Mangalore", owner: "Lawyer PP Hegde", scope: "Private Villa Structure" },
    { name: "Residence for Pushparaj Mangalore", owner: "Chairman Abhish Builder, Mangalore", scope: "Custom High-End Frame" }
  ];

  // 3. Full Consolidated Standard Housing Ledger Loop Track
  const projectLog = [
    { name: "Surya Residency at Bangalore", year: "2003-04", client: "M/S Surya Developers" },
    { name: "Banyan Tree Apartments Bangalore", year: "2005-06", client: "M/S Bhumija Developers" },
    { name: "Apartment Building at Kundapur", year: "2006-07", client: "M/S Prathemesh Builders & Developers" },
    { name: "Apartment Building at Bangalore", year: "2003-04", client: "M/S Prime Land Developer" },
    { name: "Apartment Building at Bangalore", year: "2006-07", client: "M/S Prakruthi Developers" },
    { name: "Apartment Building at Bangalore", year: "2006-07", client: "M/S Shivashri Developers" },
    { name: "Apartment Building at Mysore", year: "2006-07", client: "M/S GPPL" },
    { name: "Apartment Building at Bangalore", year: "2006-07", client: "M/S JM Fountain Private Limited" },
    { name: "Apartment Building at Bangalore", year: "2006-07", client: "M/S Vankadri Developers" },
    { name: "Apartment Building at Amruth Halli, Bangalore", year: "-", client: "M/S Canopy Builder" },
    { name: "Apartment Building at Arekere, Bangalore", year: "2009-10", client: "M/S Century Builders" },
    { name: "Apartment Building at Bangalore", year: "2008-09", client: "M/S Sienna Developers" },
    { name: "Apartment Building at Bangalore", year: "2009", client: "M/S Green Leaf Products" },
    { name: "Apartment Building at Bangalore", year: "2011", client: "M/S Vishawas Bawa Builders" },
    { name: "Apartment Building at Bangalore", year: "2011", client: "M/S Sai Builders" },
    { name: "Apartment Building at Chennai", year: "2011", client: "M/S Landmark Constructions" },
    { name: "Staff Quarters Building at Bellary", year: "2011", client: "M/S State Bank of India" },
    { name: "Office Quarters Building at Bangalore", year: "2011", client: "M/S LIC of India" },
    { name: "Office Block & Staff Quarters Building at Kunigal", year: "2011", client: "M/S LIC of India" },
    { name: "Apartment Building at Jakkur Bangalore", year: "2011", client: "M/S Hitesh Development Corporation" },
    { name: "Abode for Mr. Mehra Family at Delhi", year: "2011", client: "M/S Jaquar Group" },
    { name: "Apartment Building at Kamakshi Palya Bangalore", year: "2016", client: "M/S Soundarya Construction" },
    { name: "Apartment Building at Jalahalli Bangalore", year: "2017", client: "M/S Soundarya Construction" },
    { name: "Proposed Apartment Building at Sanjaya Nagara", year: "2021", client: "-" },
    { name: "Apartment Building for M/S Bhavish Infra at BTM Layout B'lore", year: "2023-24", client: "M/S Bhavish Infra" },
    { name: "Apartment Building for M/S Bhavish Infra at RR Nagar Bangalore", year: "2024-25", client: "M/S Bhavish Infra" },
    { name: "Apartment Building at Chikkajala, Bangalore", year: "2012-13", client: "M/S Century Builders" },
    { name: "Dhruvija Gopura Apartment Building at Bagaluru, Bangalore", year: "2025-26", client: "M/S Dhruvija Properties" },
    { name: "Apartment Building at Kottayam, Kerala", year: "2016-17", client: "M/S Kalyan Developers" },
    { name: "Micasa Apartment Building at Indira Nagara, Bangalore", year: "2025-26", client: "-" },
    { name: "Apartment Building at Chitturu, Andra Pradesh", year: "2025-26", client: "-" },
    { name: "Apartment Building at Tirupathi, Andra Pradesh", year: "2025-26", client: "-" },
    { name: "Apartment Building at HRBR Layout, Bangalore", year: "2024-25", client: "-" },
    { name: "Gawa Apartment Building at Pondichery", year: "2025-26", client: "-" },
    { name: "Apartment Building at Hosur, Tamilnadu", year: "2025-26", client: "M/S Golden Group Builders" },
    { name: "Apartment Building at Jayanagara, Bangalore", year: "2023-24", client: "-" },
    { name: "Apartment Building at Hyderabad", year: "2024-2025", client: "-" },
    { name: "Apartment Building at Bidar", year: "2021-2022", client: "-" },
    { name: "Apartment Building at Gulbarga", year: "2019-2020", client: "-" },
    { name: "Apartment Building at Kai Gondra Halli, Bangalore", year: "2020-2021", client: "-" },
    { name: "Service Apartment Building at Electronic City, Bangalore", year: "2020-2021", client: "-" },
    { name: "Apartment Building at Kalimpong", year: "2018-2019", client: "-" },
    { name: "Sai Kuteera Apartment Building at Bangalore", year: "2016-2017", client: "-" },
    { name: "Apartment Building at Haralur, Bangalore", year: "2016-2017", client: "-" },
    { name: "Apartment Building at Judicial Layout, Bangalore", year: "2012-2013", client: "-" },
    { name: "Proposed Housing units at Kallenahalli Tumkur", year: "2021", client: "Pradhan Mantri Awaz Yojana (PMAY)" },
    { name: "Proposed Housing units at Indavara Chickmagalur", year: "2021", client: "Pradhan Mantri Awaz Yojana (PMAY)" },
    { name: "Proposed Housing units at Mandakalli, Mysore", year: "2021", client: "Pradhan Mantri Awaz Yojana (PMAY)" },
    { name: "Apartment Building at Kundapura (Coastal Log)", year: "2009", client: "M/S Prathemesh Builders" },
    { name: "Residential Building at Mangalore", year: "2012", client: "Sri Anantha Pai" },
    { name: "Residential Building at Mangalore", year: "2012", client: "Sri Anantha Kamath" },
    { name: "Residential Building at Mangalore", year: "2016", client: "Sri Pusparaj Jain" },
    { name: "Residential Building at Mangalore", year: "2016", client: "Sri PP Hegde" },
    { name: "Residential Building at Moodabidare", year: "2019-20", client: "Sri Lobo" },
    { name: "Beach House at Kaup, Udupi", year: "2019-20", client: "Sachin Pai, M/S MPAL, PP" },
    { name: "Beach House at Mangalore", year: "2020", client: "Mr. Shahid" },
    { name: "Beach House at Byndoor", year: "2021", client: "-" },
    { name: "Residential Building at Mangalore", year: "2011", client: "Smt. Vimala Hedge" },
    { name: "Residential Building at Koteshwara", year: "2020", client: "Dr. Sabitha" },
    { name: "Girls Hostel Building at Moodabidare", year: "2018", client: "M/S Excelent College" },
    { name: "Beach house at Padukere", year: "2025", client: "BOLAS FAMILY KARKALA" },
    { name: "Residence at Sri Dharmasthala (Coastal Log)", year: "2010", client: "Mr. Yashovarma" },
    { name: "Residence at Ujire", year: "2010", client: "Na Ujire" }
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
            Residential <span className="text-engineering-yellow not-italic">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            Safe, load-optimized structural engineering for modern living frameworks. Our portfolio 
            ranges from high-rise multi-family apartment towers to customized luxury residential estates.
          </p>
        </div>

        {/* ================= PART 1: VISUAL FEATURED GRID (Caption Size & Hover Zoom Fix) ================= */}
        <div className="mb-24">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2 select-none">
            <Home size={14} className="text-engineering-yellow" /> Featured Residences
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
                {/* Background Image Layer with Cinematic Zoom Parallax */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transform scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Content Layer */}
                <div className="relative z-10 min-w-0 pointer-events-none">
                  <span className="text-engineering-yellow text-[8px] font-mono tracking-widest block mb-1">
                    FRAMEWORK STRUCTURE 0{project.id}
                  </span>
                  
                  {/* FIXED: Reduced class specification down to text-sm md:text-base to prevent text overlapping visually */}
                  <h3 className="text-sm md:text-base font-bold uppercase italic text-white tracking-tight leading-tight break-words group-hover:text-engineering-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: THE VIP ESTATE PORTFOLIO ================= */}
        <div className="mb-24 border border-engineering-yellow/20 bg-slate-950/40 p-6 md:p-10 rounded relative overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <Crown size={18} className="text-engineering-yellow" />
            <h2 className="text-sm font-mono font-black text-engineering-yellow uppercase tracking-[0.3em]">
              Executive Estates & VIP Private Registry
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-xl mb-10 leading-relaxed">
            High-end structural frameworks, bespoke villa designs, and custom deep-foundation engineering executed directly for prominent industry figures, public executives, and luxury developers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {vipProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="border-l-2 border-engineering-yellow bg-white/[0.02] p-5 flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[9px] font-mono font-black text-engineering-yellow bg-engineering-yellow/10 border border-engineering-yellow/20 px-2 py-0.5 tracking-wider">
                      {project.scope}
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-bold">EST_V0{i + 1}</span>
                  </div>
                  
                  <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight leading-tight group-hover:text-engineering-yellow transition-colors duration-300 mt-2 break-words">
                    {project.name}
                  </h3>
                </div>

                {project.owner && project.owner !== "-" && (
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-4 pt-3 border-t border-white/5 font-mono">
                    <span className="text-slate-600 normal-case mr-1">Client:</span>
                    {project.owner}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* ================= PART 3: CHRONOLOGICAL TIMELINE TRACK (Standard Housing Assets) ================= */}
        <div>
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-2 select-none">
            <MapPin size={14} className="text-engineering-yellow" /> Housing & Towers Registry
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
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    {log.client && log.client !== "-" && (
                      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                        <span className="text-slate-600 font-mono normal-case mr-1">Developer / Client:</span>
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