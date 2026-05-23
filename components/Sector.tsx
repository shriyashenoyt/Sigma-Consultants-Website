'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SectorBlocks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectors = [
    { 
      title: "Industrial", 
      count: "3,500+", 
      desc: "Warehouses & Factories", 
      path: "/projects/industrial",
      img: "/projects/industrial/industrial-bg.png" 
    },
    { 
      title: "Civic & Community", 
      count: "2,500+", 
      desc: "Devotional & Event Hubs", 
      path: "/projects/commercial",
      img: "/projects/commercial/commercial-bg.jpg.jpeg" 
    },
    { 
      title: "Residential", 
      count: "4,000+", 
      desc: "Villas & Apartments", 
      path: "/projects/residential",
      img: "/projects/residential/residential-bg.jpeg" 
    },
    { 
      title: "Government", 
      count: "500+", 
      desc: "Public Infrastructure", 
      path: "/projects/government",
      img: "/projects/government/government-bg.jpg" 
    },
    { 
      title: "Institutional", 
      count: "200+", 
      desc: "Medical & Campus Blocks", 
      path: "/projects/institutional",
      img: "/projects/institutional/institutional-bg.jpg" 
    },
  ];

  if (!mounted) {
    return <section className="bg-slate-950 min-h-[500px]"></section>;
  }

  return (
    <section className="bg-slate-950 border-y border-white/5 relative z-10 overflow-hidden">
      {/* Reduced minimum height from 600px to 500px to prevent visual bloating */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {sectors.map((sector, i) => (
          <motion.div
            key={i}
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.05,
              ease: [0.215, 0.61, 0.355, 1] 
            }}
          >
            <Link 
              href={sector.path}
              className="
                flex-1 
                border-white/5 border-b lg:border-b-0 lg:border-r last:border-r-0 
                relative group overflow-hidden 
                p-6 lg:p-5 xl:p-8 
                flex flex-col justify-between 
                transition-all duration-700 ease-in-out 
                hover:bg-engineering-bg 
                lg:hover:flex-[1.8] 
                min-h-[280px] lg:min-h-0
              "
            >
              {/* Background Image Setup */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 opacity-25 group-hover:opacity-50 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url('${sector.img}')` }}
              />
              
              <div className="absolute inset-0 z-[1] bg-slate-950/50 mix-blend-multiply" />
              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Top Text Block: Fluid scaling ensures long text doesn't overflow */}
              <div className="relative z-10 min-w-0">
                <p className="text-engineering-yellow text-[9px] font-mono uppercase tracking-[0.4em] mb-2">
                  SECTOR 0{i + 1}
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-lg xl:text-2xl font-black uppercase italic tracking-tight leading-tight text-white group-hover:text-engineering-yellow transition-colors duration-300 break-words">
                  {sector.title}
                </h3>
              </div>

              {/* Bottom Text Data Block */}
              <div className="relative z-10 mt-8">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xl font-mono font-black text-white leading-none mb-1">{sector.count}</p>
                    <p className="text-slate-500 group-hover:text-slate-400 text-[9px] font-bold uppercase tracking-widest leading-tight transition-colors duration-300 break-words">
                      {sector.desc}
                    </p>
                  </div>
                  <ArrowUpRight 
                    className="text-engineering-yellow opacity-70 group-hover:opacity-100 transition-all transform group-hover:scale-110 shrink-0" 
                    size={20} 
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}