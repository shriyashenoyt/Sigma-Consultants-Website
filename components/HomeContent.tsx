'use client'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // Added Variants type
import AboutPreview from '@/components/About';
import SectorBlocks from '@/components/Sector';

export default function HomeContent() {
  // Explicitly typing these as Variants removes the TypeScript error
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      } 
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <main className="min-h-screen bg-engineering-bg text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-engineering-bg/70 backdrop-blur-[2px]"></div>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="max-w-6xl relative z-10"
        >
          <motion.p variants={itemVars} className="text-white text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-80">
            ENGINEERED FOR STRENGTH • DESIGNED FOR SAFETY
          </motion.p>
          
          <motion.h1 variants={itemVars} className="text-6xl md:text-[100px] font-black uppercase leading-[0.85] tracking-tighter mb-10">
            EXPERTISE IN <br /> 
            <span className="text-engineering-yellow italic text-5xl md:text-[85px]">
              STRUCTURAL CONSULTANCY
            </span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Sigma Consultants delivers structural engineering solutions through 
            mathematical precision and future-proof infrastructure design.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-col md:flex-row items-center justify-center gap-16">
            <Link href="/projects" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-engineering-yellow transition-all group-hover:w-20"></span>
              VIEW PORTFOLIO
            </Link>
            <Link href="/about" className="group text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-engineering-yellow transition-all">
              <span className="w-12 h-[2px] bg-white/30 transition-all group-hover:bg-engineering-yellow group-hover:w-20"></span>
              OUR EXPERTISE
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <SectorBlocks />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <AboutPreview />
      </motion.div>

    </main>
  );
}