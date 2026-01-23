import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function SectorBlocks() {
  const sectors = [
    { 
      title: "Industrial", 
      count: "3,500+", 
      desc: "Warehouses, Factories & Power Plants",
      path: "/projects?filter=industrial" 
    },
    { 
      title: "Commercial", 
      count: "2,500+", 
      desc: "High-rise Offices & Retail Hubs",
      path: "/projects?filter=commercial" 
    },
    { 
      title: "Residential", 
      count: "4,000+", 
      desc: "Luxury Villas & High-rise Apartments",
      path: "/projects?filter=residential" 
    },
  ];

  return (
    <section className="bg-slate-950 border-y border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {sectors.map((sector, i) => (
          <Link 
            key={i} 
            href={sector.path}
            className="flex-1 border-white/5 border-r last:border-r-0 relative group overflow-hidden p-12 flex flex-col justify-between transition-all duration-700 hover:bg-engineering-bg"
          >
            {/* Background Placeholder for Project Photos */}
            <div className="absolute inset-0 bg-slate-900 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative z-10">
              <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.4em] mb-4 group-hover:translate-x-2 transition-transform">
                Sector 0{i + 1}
              </p>
              <h3 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4 group-hover:text-engineering-yellow transition-colors">
                {sector.title}
              </h3>
            </div>

            <div className="relative z-10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-black text-white mb-2">{sector.count}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{sector.desc}</p>
                </div>
                <ArrowUpRight className="text-engineering-yellow opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0" size={32} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}