'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Sri Sathya Sai Anandaniketanam", img: "/projects/residential/c4167fa8-813c-4a89-ba91-1a2dc1733c94.jpg" },
  { id: 2, title: "Soundarya Kamakshi Apartment", img: "/projects/residential/cc94bdfc-4fab-4631-ad3a-f4fa9726f7a0.jpg" },
  { id: 3, title: "Sigma Heights Tower", img: "/projects/residential/Elite_Belathur.jpg.jpeg" },
  { id: 4, title: "KVG Medical College", img: "/projects/residential/Elite_Horamavu.jpg.jpeg" },
  { id: 5, title: "SDM Institute of Technology", img: "/projects/residential/Hitesh_Jakkuru.jpg.jpeg" },
  { id: 6, title: "SDM Institute of Technology", img: "/projects/residential/Soundarya_Kamakshi.JPG.jpeg" },
  // ... Keep adding until you reach 20+
];

export default function InstitutionalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Adjust -95% based on how many projects you eventually add. 
  // More projects = larger negative number.
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-engineering-bg">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        
        {/* Floating Heading */}
        <div className="container mx-auto px-12 mb-12">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-2"
          >
            Sector Overview
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-black uppercase italic text-white">
            Residential <span className="text-engineering-yellow">Projects</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ width: "750px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative h-[500px] w-[500px] flex-shrink-0 overflow-hidden bg-slate-900 border border-white/10"
            >
              {/* Image with Ken Burns zoom effect */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              
              {/* Bottom Title Bar */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end p-8">
                <p className="text-2xl font-black uppercase italic text-white tracking-wider leading-tight">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* End Spacer so the last image doesn't get cut off */}
          <div className="w-[500px] flex-shrink-0" />
        </motion.div>

        {/* Visual Progress Bar for 20+ items */}
        <div className="absolute bottom-10 left-12 right-12 h-[1px] bg-white/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-engineering-yellow origin-left"
          />
        </div>
      </div>
    </section>
  );
}