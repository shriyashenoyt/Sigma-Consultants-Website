'use client'
import { Award, Trophy, ShieldCheck, Milestone, Building, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AwardsPage() {
  const achievements = [
    { 
      title: "Inauguration of Premamrutham", 
      year: "2014", 
      icon: <Trophy size={28} />,
      img: "/projects/awards/gavaskar.jpeg",
      isPortrait: false 
    },
    { 
      title: "Celebration of Sri Satya Sai Baba's 100th Birth Anniversary at Muddenhalli", 
      year: "2025", 
      icon: <Milestone size={28} />,
      img: "/projects/awards/muddenhalli.jpeg",
      isPortrait: false
    },
    { 
      title: "Recognised for Temple Service", 
      year: "2003", 
      icon: <Award size={28} />,
      img: "/projects/awards/swami.jpeg",
      isPortrait: false
    },
    { 
      title: "Feliciation for Sosale Matt at T. Narasipura", 
      year: "2020", 
      icon: <ShieldCheck size={28} />,
      img: "/projects/awards/swami2.jpeg",
      isPortrait: false
    },
    { 
      title: "Honored for Service Rendered to the Kalyana Mantapa at Nalavara, Gulbarga", 
      year: "2020", 
      icon: <Building size={28} />,
      img: "/projects/awards/swami-p.jpeg", 
      isPortrait: true 
    },
    { 
      title: "Feliciation for Boodi Basaveshwara Matt at Raichur", 
      year: "2026", 
      icon: <Eye size={28} />,
      img: "/projects/awards/swami2-p.jpeg",
      isPortrait: true 
    },
    { 
      title: "Feliciation for Beedu, Dharmasthala", 
      year: "2018", 
      icon: <Eye size={28} />,
      img: "/projects/awards/beedu.jpg",
      isPortrait: true 
    },
    { 
      title: "Acknowledgement for Sri Satya Sai Sriniketam", 
      year: "2018", 
      icon: <Eye size={28} />,
      img: "/projects/awards/sriniketam.jpg",
      isPortrait: true 
    },
    { 
      title: "Acknowledgement for Sri Satya Sai Vidyaniketam", 
      year: "2012", 
      icon: <Eye size={28} />,
      img: "/projects/awards/vidyaniketam.png",
      isPortrait: false 
    },
    { 
      title: "Acclaimed for Community Hall at Yelahanka, Bengaluru", 
      year: "2026", 
      icon: <Eye size={28} />,
      img: "/projects/awards/yelahanka.jpg",
      isPortrait: true 
    },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="max-w-3xl mb-16">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-3">
            Silver Jubilee Year
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6 leading-none">
            Awards & <span className="text-engineering-yellow">Honors.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Our commitment to structural safety and mathematical precision has been 
            recognized by industry leaders for over a quarter-century.
          </p>
        </div>

        {/* ================= HONORS MEDIA GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {achievements.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative flex flex-col justify-between bg-white/[0.03] border border-white/10 p-6 md:p-8 hover:border-engineering-yellow transition-all duration-500"
            >
              <div className="w-full">
                {/* Header inside Card Frame */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-engineering-yellow group-hover:scale-105 transition-transform duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-mono font-black text-white/10 group-hover:text-engineering-yellow/20 italic select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Image Aspect Box Container */}
                <div className={`mb-6 overflow-hidden border border-white/5 bg-slate-950 relative w-full mx-auto ${
                  item.isPortrait ? 'aspect-[3/4] max-h-[420px]' : 'aspect-video'
                }`}>
                  
                  {/* LAYER 1: Blurred background fill to prevent raw black spaces on wide shapes */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-md opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  {/* LAYER 2: The actual entire uncropped image centered cleanly using bg-contain */}
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  
                </div>
              </div>

              {/* Text Meta Content Info */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-2 group-hover:text-engineering-yellow transition-colors duration-300 break-words leading-tight">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span className="text-engineering-yellow">{item.year}</span>
                  <span className="text-slate-600 font-normal">Verified Ledger</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}