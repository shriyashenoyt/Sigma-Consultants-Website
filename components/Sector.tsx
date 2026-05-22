'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SectorBlocks() {
  const [mounted, setMounted] = useState(false);

  // This ensures the component only renders its animated state on the client
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
      title: "Commercial", 
      count: "2,500+", 
      desc: "Offices & Retail", 
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
      desc: "Heritage & Sacred", 
      path: "/projects/institutional",
      img: "/projects/institutional/institutional-bg.jpg" 
    },
  ];

  // Prevent hydration mismatch by returning a clean baseline version during SSR
  if (!mounted) {
    return <section className="bg-slate-950 min-h-[600px]"></section>;
  }

  return (
    <section className="bg-slate-950 border-y border-white/5 relative z-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {sectors.map((sector, i) => (
          <motion.div
            key={i}
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.215, 0.61, 0.355, 1] 
            }}
          >
            <Link 
              href={sector.path}
              suppressHydrationWarning
              className="
                flex-1 
                border-white/5 border-b lg:border-b-0 lg:border-r last:border-r-0 
                relative group overflow-hidden 
                p-8 md:p-10 
                flex flex-col justify-between 
                transition-all duration-700 ease-in-out 
                hover:bg-engineering-bg 
                lg:hover:flex-[2.5] 
                min-h-[350px] lg:min-h-0
              "
            >
              {/* Project Background Image - Constant full color, sharp zoom on hover */}
              <div 
                className="
                  absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 
                  opacity-30 group-hover:opacity-60 
                  scale-100 group-hover:scale-110
                "
                style={{ backgroundImage: `url('${sector.img}')` }}
              />
              
              {/* Constant Dark Mask overlay to preserve text legibility over full color backgrounds */}
              <div className="absolute inset-0 z-[1] bg-slate-950/40 mix-blend-multiply transition-opacity duration-700" />
              
              {/* Dynamic Bottom Shadow Gradient */}
              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Top Text Content Block */}
              <div className="relative z-10">
                <p className="text-engineering-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-4 group-hover:translate-x-2 transition-transform">
                  Sector 0{i + 1}
                </p>
                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-engineering-yellow transition-colors lg:whitespace-nowrap">
                  {sector.title}
                </h3>
              </div>

              {/* Bottom Text and Icon Block */}
              <div className="relative z-10">
                <div className="flex items-end justify-between gap-4">
                  <div className="group-hover:translate-x-1 transition-transform duration-500">
                    <p className="text-2xl font-black text-white mb-1">{sector.count}</p>
                    <p className="text-slate-400 group-hover:text-slate-300 text-[10px] font-bold uppercase tracking-widest leading-relaxed transition-colors">
                      {sector.desc}
                    </p>
                  </div>
                  <ArrowUpRight 
                    className="text-engineering-yellow opacity-100 lg:opacity-70 lg:group-hover:opacity-100 transition-all transform lg:translate-y-0 shrink-0" 
                    size={24} 
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