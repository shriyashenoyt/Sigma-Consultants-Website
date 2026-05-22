'use client'
import { Award, Trophy, ShieldCheck, Milestone, Building, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AwardsPage() {
  const achievements = [
    { 
      title: "Inauguration of Premamrutham", 
      year: "2014", 
      //category: "Structural Consultancy", 
      icon: <Trophy size={32} />,
      img: "/projects/awards/gavaskar.jpeg",
      isPortrait: false 
    },
    { 
      title: "Celebration of Sri Satya Sai Baba's 100th Birth Anniversary at Muddenhalli", 
      year: "2025", 
      //category: "Project Delivery", 
      icon: <Milestone size={32} />,
      img: "/projects/awards/muddenhalli.jpeg",
      isPortrait: false
    },
    { 
      title: "Recognised for Temple Service", 
      year: "2003", 
      //category: "Industrial Sector", 
      icon: <Award size={32} />,
      img: "/projects/awards/swami.jpeg",
      isPortrait: false
    },
    { 
      title: "Feliciation for Sosale Matt at T. Narasipura", 
      year: "2020", 
      //category: "On-site Excellence", 
      icon: <ShieldCheck size={32} />,
      img: "/projects/awards/swami2.jpeg",
      isPortrait: false
    },
    { 
      title: "Honored for Service Rendered to the Kalyana Mantapa at Nalavara, Gulbarga", 
      year: "2020", 
      //category: "Government Projects", 
      icon: <Building size={32} />,
      img: "/projects/awards/swami-p.jpeg", 
      isPortrait: true // First Portrait Item
    },
    { 
      title: "Feliciation for Boodi Basaveshwara Matt at Raichur", 
      year: "2026", 
      //category: "Individual Design", 
      icon: <Eye size={32} />,
      img: "/projects/awards/swami2-p.jpeg",
      isPortrait: true // Second Portrait Item
    },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-4">
            Silver Jubilee Year
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-6">
            Awards & <span className="text-engineering-yellow">Honors.</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Our commitment to structural safety and mathematical precision has been 
            recognized by industry leaders for over a quarter-century.
          </p>
        </div>

        {/* 3-Row, 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {achievements.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col justify-between bg-white/5 border border-white/10 p-12 hover:border-engineering-yellow transition-all duration-500"
            >
              <div>
                {/* Header inside Card */}
                <div className="flex justify-between items-start mb-8">
                  <div className="text-engineering-yellow group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-engineering-yellow/20 italic">
                    0{i + 1}
                  </span>
                </div>
                
                {/* Dynamic Aspect Ratio Container based on Portrait status */}
                <div className={`mb-8 overflow-hidden border border-white/5 bg-slate-900 relative ${
                  item.isPortrait ? 'aspect-[3/4] max-h-[550px]' : 'aspect-video'
                }`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                </div>
              </div>

              {/* Text Information anchored to the bottom */}
              <div className="pt-4 border-t border-white/5">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-engineering-yellow transition-colors">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span className="text-engineering-yellow">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}