'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Dhimapur Church", img: "/projects/commercial/58cdba53-fded-4c54-b7a6-be0572e77606.jpg" },
  { id: 2, title: "Premamrutham Pink Skies", img: "/projects/commercial/Landmark_Chennai.jpg.jpeg" },
  { id: 3, title: "Royal Concord", img: "/projects/commercial/Option-2.1_Photo_-_1.jpg.jpeg" },
];

export default function InstitutionalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the gallery horizontally as the user scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-engineering-bg">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        
        {/* Section Heading */}
        <div className="container mx-auto px-12 mb-12">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-2"
          >
            Sector Overview
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-black uppercase italic text-white">
            Commercial <span className="text-engineering-yellow">Projects</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              /* The "Get Wider" Effect */
              whileHover={{ width: "700px" }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="group relative h-[450px] w-[500px] flex-shrink-0 overflow-hidden bg-slate-900 border border-white/10"
            >
              {/* Constant Color Image with "Get Bigger" zoom */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              
              {/* Subtle Gradient Bottom Bar for the Title */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end p-8">
                <p className="text-xl font-black uppercase italic text-white tracking-wider">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}