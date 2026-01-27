'use client'
import { motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}    // Starts slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}     // Moves to its natural position and fades in
      exit={{ opacity: 0, y: 15 }}       // Fades out when leaving
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]         // A professional "cubic-bezier" ease for smoothness
      }}
    >
      {children}
    </motion.div>
  );
}