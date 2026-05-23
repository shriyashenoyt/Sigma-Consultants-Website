'use client'
import { motion } from 'framer-motion';
import { MapPin, Landmark } from 'lucide-react';

export default function InstitutionalGallery() {
  // 1. Featured items with photos (Curated visual highlights)
  const featuredProjects = [
    { id: 1, title: "Dhimapur Church", img: "/projects/institutional/Church_Building_Dhimapur-Nagaland.jpg.jpeg" },
    { id: 2, title: "Sri Sathya Sai Anandaniketanam", img: "/projects/institutional/Sri-Sathya-Sai-Anandaniketanam-Mudhol.jpg.jpeg" },
  ];

  // 2. Full Consolidated Institutional Master Registry (57 entries matching your official logs)
  const projectLog = [
    // --- HOSPITAL & HEALTHCARE PROJECTS ---
    { name: "Medical College and Hospital Campus at T Begur", year: "2014-15", client: "M/S Siddartha Education Society Tumkur" },
    { name: "Medical College & Hospital Campus at Jabalpur, Madhya Pradesh", year: "-", client: "M/S Jain Community Trust" },
    { name: "Parimala Hospital on Bannerghatta Road, Bangalore", year: "-", client: "-" },
    { name: "Nursing Home at Kolar", year: "-", client: "Dr. Narayana Swamy" },
    { name: "Education & Therapy Centre at Tiruvannamalai, Tamilnadu", year: "-", client: "Ramana Mharshi Rangamahal Hospital" },
    { name: "ED & AIDS Hospital at Byyappahalli Old Madras Road, Bangalore", year: "2012", client: "M/S Namma Metro" },
    { name: "Rajshekhar Hospital JP Nagar, Bangalore", year: "-", client: "-" },
    { name: "Nursing School & College Campus at Kolar", year: "-", client: "Dr. Narayana Swamy" },
    { name: "Nursing School & College Campus Gubbi Road Tumkur", year: "-", client: "M/S Siddartha Education Society Tumkur" },
    { name: "Hospital Building Cyber Knife", year: "-", client: "M/S HCG Enterprises Pvt. Ltd." },
    { name: "Hospital Building Gokulam Curie", year: "-", client: "M/S Ramaiah Hospital" },
    { name: "Installation Cancer Unit Bunker to Bangalore Institute of Oncology, B'lore", year: "-", client: "M/S HCG Enterprises Pvt. Ltd." },
    { name: "Installation Cancer Unit Bunker to Malnad Institute of Oncology, Bhadravathi", year: "-", client: "M/S HCG Enterprises Pvt. Ltd." },
    { name: "Covid 19 Specialized Zone Yelahanka, Bangalore", year: "-", client: "-" },
    { name: "Ayurvedic Hospital at Bagalkot", year: "-", client: "-" },
    { name: "Vinayaka Hospital at Tumkur", year: "-", client: "-" },
    { name: "Art & Health Care Centre Tumkur", year: "-", client: "Dr. Sai Prasad" },
    { name: "Additions & Alterations to Existing Hospital at Sampangiram Nagar, B'lore", year: "-", client: "PD Hinduja Hospital" },
    { name: "Additions & Alterations to Existing Hospital at Gulbarga", year: "-", client: "M/S Nisti Hospital" },
    { name: "Gulzar Upvana, spiritual Research Centre Lucknow", year: "2020", client: "Sri Brahma Kumaris" },
    { name: "Nemmadivana Wellness Centre at Sakaleshpura", year: "-", client: "-" },
    { name: "Parika Manipal", year: "-", client: "M/S SDM Society" },

    // --- CAMPUS PROJECTS ---
    { name: "Nursing School and College Campus at Tumkur", year: "2003", client: "M/S SSIT" },
    { name: "Engineering College Campus at Ujire", year: "2008", client: "M/S SDM Educational Society" },
    { name: "Engineering College Campus at Bangalore (Tender Stage)", year: "-", client: "M/S Xavier Engineering College" },
    { name: "Sri Sathya Sai Vidyanikethanam at Gulbarga", year: "2011-12", client: "M/S SSSET" },
    { name: "Ashram Campus at Tiruvannamalai", year: "2011-12", client: "M/S Ramanashrama" },
    { name: "PG College Campus at Ujire", year: "2011-12", client: "M/S SDM Educational Society" },
    { name: "Sri Sathya Sai Anandaniketanam at Mudhol", year: "2014-15", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Divyanikethanam at Jayapura, Sringeri", year: "2014-15", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Premanikethanam at Indi, Bijaapura", year: "2015-16", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Sathyanikethanam at Hagare, Hassan", year: "2015-16", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Vanikethanam at Sirahatti, Gadag", year: "2016-17", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Sharadanikethanam at Mandya", year: "2019-20", client: "M/S SSSET" },
    { name: "Sri Sathya Sai Meenakshinikethanam at Madurai", year: "2020-21", client: "M/S SSSET" },
    { name: "Guljar Upvan retreat centre at Lucknow for Brahma Kumari's", year: "2020-21", client: "Brahma Kumari's" },
    { name: "Embassy School Campus at Devanahalli, Bangalore", year: "2021-23", client: "M/S Embassy Academy" },

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
    
    // --- COASTAL KARNATAKA & GEOGRAPHIC RECLASSIFICATION LOGS ---
    { name: "Diploma College Campus at Ujire", year: "2009", client: "M/S SDM Society" },
    { name: "Museum and Srimudi Building at Sri Dharmasthala", year: "2013", client: "M/S SDM Society" },
    { name: "Premadhama abode of Love - An old age home at Bantwala", year: "1999-2000", client: "Sri Ram Nayak" },
    { name: "Parika Extension at Parkala, Udupi", year: "2017-18", client: "M/S SDM Society" },
    { name: "School Campus at Mangalore", year: "2018", client: "M/s Fana School" }
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
            Institutional <span className="text-engineering-yellow">Projects</span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl leading-relaxed">
            Specialized engineering for complex educational systems, high-compliance health centers, radiation-shielded cancer bunkers, and iconic long-span religious architecture.
          </p>
        </div>

        {/* ================= PART 1: VISUAL TABULAR GRID (2 Columns) ================= */}
        <div className="mb-28">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <Landmark size={14} className="text-engineering-yellow" /> Featured Blueprints
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
                    FOUNDATION INDEX 0{project.id}
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
                transition={{ duration: 0.35 }}
                className="relative group"
              >
                {/* Interactive Node Point Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-engineering-yellow group-hover:border-engineering-yellow transition-colors duration-300 z-10" />
                
                {/* Responsive Track Row Container */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Block: Index Counter + Project Name + Trust/Client Tag */}
                  <div className="max-w-3xl">
                    <h3 className="text-sm md:text-base font-bold uppercase text-white tracking-tight group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                      <span className="text-slate-600 font-mono text-xs mr-2 select-none inline-block w-6">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {log.name}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 pl-8 break-words leading-tight">
                      <span className="text-slate-600 font-mono normal-case mr-1">Trust / Entity:</span>
                      {log.client !== "-" ? log.client : "Specified Educational or Medical Trust"}
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