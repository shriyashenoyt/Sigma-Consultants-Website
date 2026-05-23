'use client'
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const categories = [
    { title: "Industrial", img: "/projects/industrial/industrial-bg.png" },
    { title: "Civic & Community", img: "/projects/commercial/58cdba53-fded-4c54-b7a6-be0572e77606.jpg" },
    { title: "Residential", img: "/projects/residential/cc94bdfc-4fab-4631-ad3a-f4fa9726f7a0.jpg" },
    { title: "Government", img: "/projects/government/government-bg.jpg" },
    { title: "Institutional", img: "/projects/institutional/Sri-Sathya-Sai-Anandaniketanam-Mudhol.jpg.jpeg" },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-20">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-4">
            Silver Jubilee Milestone
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-6">
            10,000+ <span className="text-white not-italic">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From industrial powerhouses in India to commercial landmarks globally, 
            Sigma Consultants has set the standard for structural safety for 25 years.
          </p>
        </div>

        {/* ================= CATEGORIES FLEX GRID ================= */}
        {/* 'justify-center' ensures the bottom row of 2 items balances perfectly in the center */}
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* Width Logic: 
                  Mobile: w-full (1 col)
                  Desktop: roughly 33% minus gap to fit 3 per row clean.
              */
              className="w-full md:w-[calc(33.333%-2rem)] min-w-[300px] aspect-video bg-slate-900 border border-white/10 relative overflow-hidden"
            >
              {/* Image Only - Grayscale removed, full color is permanent */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${cat.img})` }}
              >
                {/* Fallback text if image 404s */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <span className="text-[10px] uppercase font-black tracking-widest">{cat.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}